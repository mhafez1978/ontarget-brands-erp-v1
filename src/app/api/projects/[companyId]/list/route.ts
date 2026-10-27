import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";
import { requireCompanyFeature } from "@/lib/features";
import { FEATURE_KEYS } from "@/lib/feature-catalog";

// Only the identity fields the response mapping below actually uses. Selecting
// the whole user would pull password and mfaSecret out of the database.
const PROJECT_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  image: true,
  role: true,
} as const;

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId);
  if (!authz.ok) return authz.response;

  const featureDenied = await requireCompanyFeature(
    companyId,
    FEATURE_KEYS.projects
  );
  if (featureDenied) return featureDenied;

  try {
    const projects = await prisma.project.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" },
      include: {
        manager: { select: PROJECT_USER_SELECT },
        customer: {
          include: {
            user: { select: PROJECT_USER_SELECT },
          },
        },
        staff: {
          include: {
            user: { select: PROJECT_USER_SELECT },
          },
        },
      },
    });

    const formattedProjects = projects.map((project) => {
      const assignedAdminsOrManagers = project.staff
        .map((s) => s.user)
        .filter(
          (u) =>
            (u.role === "ADMIN" || u.role === "MANAGER") &&
            u.id !== project.managerId
        );

      return {
        id: project.id,
        name: project.name,
        description: project.description,
        status: project.status,
        startDate: project.startDate,
        endDate: project.endDate,
        budget: Number(project.budget ?? 0),
        progress: project.progress ?? 0,
        isActive: project.isActive,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
        managerId: project.managerId,
        manager: project.manager
          ? {
              id: project.manager.id,
              name: project.manager.name,
              email: project.manager.email,
              image: project.manager.image,
              role: project.manager.role,
            }
          : null,
        customerName: project.customer?.user?.name ?? null,
        assignedAdminsOrManagers,
        products: 0,
        services: 0,
        timeEntries: 0,
        tasks: [],
      };
    });

    return NextResponse.json({ projects: formattedProjects }, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
