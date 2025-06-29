import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { companyId: string } }
) {
  const companyId = params.companyId;
  console.log("PATCH /api/admin/company/[companyId]/update", params);

  try {
    const data = await req.json();

    const updated = await prisma.company.update({
      where: { id: companyId },
      data: {
        name: data.name,
        slogan: data.slogan,
        category: data.category,
        type: data.type,
        logo: data.logo,
        domain: data.domain,
        phone: data.phone,
        supportEmail: data.supportEmail,
        salesEmail: data.salesEmail,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        country: data.country,
        subscriptionPlanId: data.subscriptionPlanId,
      },
    });
    console.log(updated);
    return NextResponse.json(updated);
  } catch (err) {
    console.error("Company update failed:", err);
    return NextResponse.json(
      { error: "Failed to update company" },
      { status: 500 }
    );
  }
}
