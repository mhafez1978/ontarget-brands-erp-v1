import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const session = await auth();
  const { companyId } = await params;

  if (!session || !session.user || !companyId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const projects = await prisma.project.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" },
      include: {
        manager: true,
        customer: {
          include: {
            user: true,
          },
        },
        staff: {
          include: {
            user: true,
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
