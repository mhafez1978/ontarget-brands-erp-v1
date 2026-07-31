import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { Role } from "@/generated/prisma"; // Adjust to your output path
import { hash } from "bcryptjs";
import { requireCompanyAccess, SAFE_USER_SELECT } from "@/lib/authz";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

  const body = await req.json();
  if (!body) {
    return new Response(JSON.stringify({ error: "Request body is required" }), {
      status: 400,
    });
  }

  try {
    const newCustomer = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        image: body.image,
        birthDate: body.birthDate,
        password: await hash(body.password, 10),
        addressLine1: body.addressLine1,
        addressLine2: body.addressLine2,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        country: body.country,
        companyId: companyId,
        isActive: body.isActive,
        role: "COMPANY_CUSTOMER" as Role,
      },
      select: {
        ...SAFE_USER_SELECT,
        company: { select: { id: true, name: true } },
      },
    });
    if (!newCustomer) {
      return new Response(
        JSON.stringify({ error: "Failed to create customer" }),
        { status: 500 }
      );
    }

    // Simulating a successful response
    return new Response(
      JSON.stringify({ message: "Customer created successfully", newCustomer }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating customer:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create customer" }),
      {
        status: 500,
      }
    );
  }
}
