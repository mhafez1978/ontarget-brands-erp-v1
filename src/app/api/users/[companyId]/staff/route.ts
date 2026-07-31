import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess } from "@/lib/authz";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId);
  if (!authz.ok) return authz.response;

  try {
    const users = await prisma.user.findMany({
      where: {
        companyId,
        role: {
          in: ["ADMIN", "STAFF", "MANAGER", "SUPER_ADMIN"],
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error("[STAFF_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
