import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(
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

  // Check if user is ADMIN, SUPERADMIN, or company owner
  const isAdmin = ["ADMIN", "SUPERADMIN"].includes(session.user.role);
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    select: { ownerId: true },
  });
  const isOwner = company?.ownerId === userId;

  if (!isAdmin && !isOwner) {
    return NextResponse.json(
      { error: "You're unauthorized to create projects." },
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const {
      name,
      description,
      status = "PLANNING",
      startDate,
      endDate,
      budget,
      isActive = false,
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
