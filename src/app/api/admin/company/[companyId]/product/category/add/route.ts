// POST: /api/admin/company/[companyId]/product/category/add
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
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
    const body = await req.json();
    const { productId, productCategory } = body;

    if (!productId || !productCategory) {
      return NextResponse.json(
        {
          error: "Missing required fields: productId or productCategory",
        },
        { status: 400 }
      );
    }

    const created = await prisma.companyProductCategory.create({
      data: {
        productId,
        productCategory,
        companyId,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("Error creating product category:", error);
    return NextResponse.json(
      { error: "Failed to create product category" },
      { status: 500 }
    );
  }
}
