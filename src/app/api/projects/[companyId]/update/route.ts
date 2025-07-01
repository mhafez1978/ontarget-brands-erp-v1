import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { format } from "path";

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
  const isAdmin = ["ADMIN", "SUPER_ADMIN", "MANAGER"].includes(
    session.user.role
  );
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
      id,
      name,
      description,
      status,
      startDate,
      endDate,
      budget,
      progress,
      isActive,
      managerId = userId,
      //   staff = [],
      //   customers = [],
    } = body;

    if (!id || !name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const existingProject = await prisma.project.findUnique({
      where: {
        id: id,
        companyId: companyId,
      },
      select: {
        name: true,
        description: true,
        status: true,
        startDate: true,
        endDate: true,
        budget: true,
        progress: true,
        isActive: true,
        managerId: true,
      },
    });

    if (!existingProject) {
      return NextResponse.json(
        { error: "Project not found. Sorry can't update" },
        { status: 404 }
      );
    }

    if (existingProject) {
      if (
        existingProject.name === name &&
        existingProject.description === description &&
        existingProject.status === status &&
        // Correctly compare dates, handling nulls and empty strings
        (existingProject.startDate?.toISOString().split("T")[0] || null) ===
          (startDate || null) &&
        (existingProject.endDate?.toISOString().split("T")[0] || null) ===
          (endDate || null) &&
        // Ensure budget comparison handles nulls/empty strings safely
        (existingProject.budget?.toNumber() || null) ===
          (budget ? parseFloat(budget) : null) &&
        existingProject.progress === progress &&
        existingProject.isActive === isActive
      ) {
        return NextResponse.json(
          {
            message: "Project data is the same, no updates made.",
            unchanged: true,
          },
          { status: 200 }
        );
      }
    }

    const updatedProject = await prisma.project.update({
      where: { id: id, companyId: companyId },
      data: {
        name,
        description,
        status,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        budget: budget ? parseFloat(budget) : null,
        progress: Number(progress),
        isActive,
        managerId,
      },
    });

    //Reset staff links
    // await prisma.projectStaff.deleteMany({ where: { projectId: id } });
    // const uniqueStaffIds = Array.from(new Set([...staff, userId]));

    // if (uniqueStaffIds.length > 0) {
    //   await prisma.projectStaff.createMany({
    //     data: uniqueStaffIds.map((userId: string) => ({
    //       projectId: id,
    //       userId,
    //     })),
    //   });
    // }

    //Reset customer links
    // await prisma.projectCustomer.deleteMany({ where: { projectId: id } });
    // if (Array.isArray(customers) && customers.length > 0) {
    //   await prisma.projectCustomer.createMany({
    //     data: customers.map((userId: string) => ({
    //       projectId: id,
    //       userId,
    //     })),
    //   });
    // }
    if (updatedProject) {
      return NextResponse.json(
        { message: "Project updated", updatedProject },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 777 }
    );
  } catch (error) {
    console.error("Error updating project:", error);

    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}
