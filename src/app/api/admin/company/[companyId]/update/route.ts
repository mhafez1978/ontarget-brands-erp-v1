import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const session = await auth();
  const { companyId } = await params;
  const body = await req.json();

  try {
    const res = await prisma.company.update({
      where: { id: companyId },
      data: {
        name: body.name,
        slogan: body.slogan,
        category: body.category,
        type: body.type,
        logo: body.logo,
        domain: body.domain,
        phone: body.phone,
        supportEmail: body.supportEmail,
        salesEmail: body.salesEmail,
        addressLine1: body.addressLine1,
        addressLine2: body.addressLine2,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        country: body.country,
        isActive: body.isActive,
        gmailConnected: body.gmailConnected,
        office365Connected: body.office365Connected,
        ownerId: body.ownerId,
        subscriptionPlanId: body.subscriptionPlanId,
      },
    });

    return new Response(
      JSON.stringify({ message: "Company updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
}
