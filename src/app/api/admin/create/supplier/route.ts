import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
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
