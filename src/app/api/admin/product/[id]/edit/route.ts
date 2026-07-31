// PATCH /api/admin/product/[id]/edit
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess, requireSession } from "@/lib/authz";

/**
 * Authorizes the caller against the company that owns the product. The company
 * is read from the stored row, so a product id from another tenant is rejected.
 */
async function authorizeProduct(id: string) {
  // Session first: an anonymous caller must not be able to make the server
  // issue database queries.
  const session = await requireSession();
  if (!session.ok) return session;

  const product = await prisma.product.findUnique({
    where: { id },
    select: { companyId: true },
  });

  if (!product) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Not found" }, { status: 404 }),
    };
  }

  return requireCompanyAccess(product.companyId);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const authz = await authorizeProduct(id);
  if (!authz.ok) return authz.response;

  try {
    const body = await req.json();

    const {
      name,
      description,
      sku,
      upc,
      serial,
      model,
      macAddress,
      unit,
      quantity,
      cost,
      price,
      brand,
      weight,
      isActive,
      availability,
      supplierId,
    } = body;

    const updated = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        sku,
        upc,
        serial,
        model,
        macAddress,
        unit,
        quantity,
        cost,
        price,
        brand,
        weight: weight !== undefined ? parseFloat(weight) : undefined,
        isActive,
        availability,
        supplierId, // ✅ Direct foreign key, not the whole object
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update product", details: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const authz = await authorizeProduct(id);
  if (!authz.ok) return authz.response;

  try {
    await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
