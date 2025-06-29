import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;
  const company = await req.json();
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  if (company.ownerId !== session.user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  try {
    const deletedCompany = await prisma.company.delete({
      where: {
        id: companyId,
      },
    });
    return NextResponse.json({
      msg: "Company deleted",
      deleted: JSON.stringify(deletedCompany),
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ err: error });
  }
}
