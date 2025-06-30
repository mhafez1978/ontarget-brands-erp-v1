import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const session = await auth();
  const { companyId } = await params;

  if (!session || !session.user || !companyId) {
    return NextResponse.json(
      { error: "Unauthorized request." },
      { status: 401 }
    );
  }

  const userId = session.user.id;

  const isAdmin = ["ADMIN", "SUPER_ADMIN"].includes(session.user.role);
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    select: { ownerId: true },
  });

  const isOwner = company?.ownerId === userId;

  if (!isAdmin && !isOwner) {
    return NextResponse.json(
      { error: "You are not authorized to update projects." },
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const {
      projectId,
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

    if (!projectId || !name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data: {
        name,
        description,
        status,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        budget: budget ? parseFloat(budget) : null,
        isActive,
        managerId,
      },
    });

    // Reset staff links
    await prisma.projectStaff.deleteMany({ where: { projectId } });
    const uniqueStaffIds = Array.from(new Set([...staff, userId]));

    if (uniqueStaffIds.length > 0) {
      await prisma.projectStaff.createMany({
        data: uniqueStaffIds.map((userId: string) => ({
          projectId,
          userId,
        })),
      });
    }

    // Reset customer links
    await prisma.projectCustomer.deleteMany({ where: { projectId } });
    if (Array.isArray(customers) && customers.length > 0) {
      await prisma.projectCustomer.createMany({
        data: customers.map((userId: string) => ({
          projectId,
          userId,
        })),
      });
    }

    return NextResponse.json(
      { message: "Project updated", project: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}
