// app/api/admin/company/[companyId]/product/create/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ProductCategory } from "@/generated/prisma";

export async function POST(
  req: Request,
  { params }: { params: { companyId: string } }
) {
  try {
    const { companyId } = params;
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
      categoryEnums = [],
    } = body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        sku,
        upc,
        serial,
        model,
        macAddress,
        unit,
        quantity: quantity ? parseInt(quantity) : undefined,
        cost: cost ? parseFloat(cost) : undefined,
        price: price ? parseFloat(price) : undefined,
        brand,
        weight: weight ? parseFloat(weight) : undefined,
        isActive,
        availability,
        supplierId,
        companyId,
      },
    });

    // Create CompanyProductCategory links
    await Promise.all(
      categoryEnums.map((category: string) =>
        prisma.companyProductCategory.create({
          data: {
            productId: product.id,
            companyId,
            productCategory: category as ProductCategory,
          },
        })
      )
    );

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
