import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess } from "@/lib/authz";
import { requireCompanyFeature } from "@/lib/features";
import { FEATURE_KEYS } from "@/lib/feature-catalog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId);
  if (!authz.ok) return authz.response;

  const featureDenied = await requireCompanyFeature(
    companyId,
    FEATURE_KEYS.inventory
  );
  if (featureDenied) return featureDenied;

  try {
    const products = await prisma.product.findMany({
      where: {
        companyId,
        deletedAt: null,
      },
      orderBy: { createdAt: "desc" },
      include: {
        supplier: true,
        companyProductCategories: {
          where: {
            companyId,
            deletedAt: null,
          },
          select: {
            productCategory: true, // this is an enum, so we select
          },
        },
      },
    });

    const transformed = products.map((product) => ({
      ...product,
      categories: product.companyProductCategories.map(
        (c) => c.productCategory
      ),
    }));

    return NextResponse.json(transformed);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
