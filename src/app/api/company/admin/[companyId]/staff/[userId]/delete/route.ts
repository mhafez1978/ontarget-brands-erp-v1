import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string; userId: string }> }
) {
  const { companyId, userId } = await params;
  const session = await auth();

  if (!session || !session.user || !companyId || !userId) {
    return NextResponse.json(
      { error: "Unauthorized or missing parameters" },
      { status: 401 }
    );
  }
  if (!["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)) {
    return NextResponse.json(
      { error: "Forbidden: Insufficient permissions" },
      { status: 403 }
    );
  }

  if (userId === session.user.id) {
    return NextResponse.json(
      { error: "Cannot delete your own account..." },
      { status: 403 }
    );
  }

  // if someone tries to delete company owner they should fail
  if (session.user.company?.ownerId === userId) {
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
