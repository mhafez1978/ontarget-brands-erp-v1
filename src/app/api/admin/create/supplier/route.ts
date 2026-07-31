import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    tagline,

    website,
    salesEmail,
    supportEmail,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    country,
    companyId,
  } = body;

  if (!name || !companyId) {
    return NextResponse.json(
      { error: "Missing required fields: name or companyId" },
      { status: 400 }
    );
  }

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

  try {
    const supplier = await prisma.supplier.create({
      data: {
        name,
        tagline,

        website,
        salesEmail,
        supportEmail,
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        country,
        companyId,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch (error) {
    console.error("Error creating supplier:", error);
    return NextResponse.json(
      { error: "Failed to create supplier" },
      { status: 500 }
    );
  }
}
