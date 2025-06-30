import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  if (!companyId) {
    return NextResponse.json({ error: "Missing companyId" }, { status: 400 });
  }

  try {
    const customers = await prisma.user.findMany({
      where: {
        companyId,
        role: "CUSTOMER",
      },
      select: {
        id: true,
        name: true,
      },
    });

    return NextResponse.json({ customers });
  } catch (error) {
    console.error("[CUSTOMERS_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
