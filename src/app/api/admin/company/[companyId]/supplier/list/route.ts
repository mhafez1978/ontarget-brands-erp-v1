import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const session = await auth();

  if (
    !session ||
    !["SUPER_ADMIN", "ADMIN", "MANAGER"].includes(session.user.role)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const { companyId } = await params;
  if (!companyId) {
    return NextResponse.json({ error: "Missing companyId" }, { status: 400 });
  }
  try {
    const suppliers = await prisma.supplier.findMany({
      where: { companyId },
      orderBy: { name: "asc" },
    });

    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return NextResponse.json(
      { error: "Failed to fetch suppliers" },
      { status: 500 }
    );
  }
}
