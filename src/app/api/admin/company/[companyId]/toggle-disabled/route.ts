import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const session = await auth();
  const { companyId } = await params;

  if (!session || !session.user || session.user.role !== "SUPER_ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const existingCompany = await prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!existingCompany) {
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    }

    const updatedCompany = await prisma.company.update({
      where: { id: companyId },
      data: {
        isActive: !existingCompany.isActive,
      },
    });

    return NextResponse.json({
      success: true,
      isActive: updatedCompany.isActive,
    });
  } catch (error: any) {
    console.error("Failed to toggle company status", error?.message, error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
