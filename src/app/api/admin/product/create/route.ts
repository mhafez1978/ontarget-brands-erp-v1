// import { auth } from "@/auth";
// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const session = await auth();

//   if (
//     !session ||
//     !["SUPER_ADMIN", "ADMIN", "MANAGER"].includes(session.user.role)
//   ) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const body = await req.json();

//   const {
//     name,
//     description,
//     sku,
//     upc,
//     unit,
//     quantity,
//     cost,
//     price,
//     brand,
//     weight,
//     status,
//     supplierId,
//     deliveryMethod,
//     categoryIds = [],
//     companyId,
//   } = body;

//   if (!name || !deliveryMethod || !companyId) {
//     return NextResponse.json(
//       { error: "Missing required fields: name, deliveryMethod, or companyId" },
//       { status: 400 }
//     );
//   }

//   try {
//     const product = await prisma.product.create({
//       data: {
//         name,
//         description,
//         sku,
//         upc,
//         unit,
//         quantity: quantity ? Number(quantity) : null,
//         cost: cost ? Number(cost) : null,
//         price: price ? Number(price) : null,
//         brand,
//         status,
//         supplierId: supplierId || null,
//         deliveryMethod,
//         companyId,
//         category: {
//           connect: categoryIds.map((id: string) => ({ id })),
//         },
//       },
//     });

//     return NextResponse.json(product, { status: 201 });
//   } catch (error) {
//     console.error("[PRODUCT_CREATE_ERROR]", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req: Request) {
  const session = await auth();

  if (
    !session ||
    !["SUPER_ADMIN", "ADMIN", "MANAGER"].includes(session.user.role)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await req.json();

  const {
    name,
    description,
    sku,
    upc,
    unit,
    quantity,
    cost,
    price,
    brand,
    weight,
    availability,
    supplierId,
    deliveryMethod,
    categoryEnums = [], // <- Pass enum names (e.g. ["ELECTRONICS", "TOYS_GAMES"])
    companyId,
  } = body;

  if (!name || !deliveryMethod || !companyId) {
    return NextResponse.json(
      { error: "Missing required fields: name, deliveryMethod, or companyId" },
      { status: 400 }
    );
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        sku,
        upc,
        unit,
        quantity: quantity ? Number(quantity) : null,
        cost: cost ? Number(cost) : null,
        price: price ? Number(price) : null,
        brand,
        weight,
        availability,
        supplierId: supplierId || null,
        companyId,
      },
    });

    // Link product to categories
    const categoryLinks = categoryEnums.map((enumVal: string) => ({
      productId: product.id,
      productCategory: enumVal,
      companyId,
    }));

    await prisma.companyProductCategory.createMany({
      data: categoryLinks,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("[PRODUCT_CREATE_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
