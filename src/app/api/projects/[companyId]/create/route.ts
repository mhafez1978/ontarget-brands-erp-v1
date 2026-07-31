import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  // The previous role test used "SUPERADMIN", which is not a member of the Role
  // enum, so it never matched; access is now scoped to this company explicitly.
  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

  const userId = authz.user.id;

  try {
    const body = await req.json();
    const {
      name,
      description,
      status,
      startDate,
      endDate,
      budget,
      isActive,
      managerId = userId,
      staff = [],
      customers = [],
    } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Project name is required." },
        { status: 400 }
      );
    }
    //console.log("#####Request body:", JSON.stringify(body, null, 2));

    const createdProject = await prisma.project.create({
      data: {
        name,
        description,
        status,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        budget: budget ? parseFloat(budget) : null,
        isActive,
        companyId,
        managerId,
      },
    });

    // Link staff (including session user)
    const uniqueStaffIds = Array.from(new Set([...staff, userId]));
    if (uniqueStaffIds.length > 0) {
      await prisma.projectStaff.createMany({
        data: uniqueStaffIds.map((userId: string) => ({
          projectId: createdProject.id,
          userId,
        })),
        skipDuplicates: true,
      });
    }

    // Link customers
    if (Array.isArray(customers) && customers.length > 0) {
      await prisma.projectCustomer.createMany({
        data: customers.map((userId: string) => ({
          projectId: createdProject.id,
          userId,
        })),
        skipDuplicates: true,
      });
    }

    return NextResponse.json(
      { message: "Project created", project: createdProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
