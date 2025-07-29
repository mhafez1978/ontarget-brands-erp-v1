// PATCH /api/admin/product/[id]/edit
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
  try {
    await prisma.product.delete({
      where: { id: (await params).id },
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
