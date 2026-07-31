// POST: /api/admin/company/[companyId]/product/category/add
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  if (!companyId) {
    return NextResponse.json({ error: "Missing companyId" }, { status: 400 });
  }

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

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
