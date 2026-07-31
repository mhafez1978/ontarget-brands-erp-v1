import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string; userId: string }> }
) {
  const { companyId, userId } = await params;

  if (!companyId || !userId) {
    return NextResponse.json(
      { error: "Missing parameters" },
      { status: 400 }
    );
  }

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

  if (userId === authz.user.id) {
    return NextResponse.json(
      { error: "Cannot delete your own account..." },
      { status: 403 }
    );
  }

  // Owner is read from the database; the session copy goes stale after a
  // transfer and would let a former owner be deleted.
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    select: { ownerId: true },
  });

  if (company?.ownerId === userId) {
    return NextResponse.json(
      { error: "Cannot delete the company owner..." },
      { status: 403 }
    );
  }

  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id: userId as string,
        companyId: companyId as string,
      },
      select: { id: true, email: true, name: true },
    });

    if (!deleteUser) {
      return NextResponse.json(
        { error: "User not found or already deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ deleted: deleteUser });
  } catch (error) {
    console.error("[STAFF_DELETE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
