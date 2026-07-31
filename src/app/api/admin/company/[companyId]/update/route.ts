import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
  ]);
  if (!authz.ok) return authz.response;

  const body = await req.json();

  try {
    await prisma.company.update({
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
        // ownerId and subscriptionPlanId are deliberately not accepted here:
        // ownership transfer and plan changes are privileged operations and
        // must not be settable through a general profile update.
      },
    });

    return new Response(
      JSON.stringify({ message: "Company updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Company update failed:", error);
    return new Response(JSON.stringify({ error: "Failed to update company" }), {
      status: 500,
    });
  }
}
