import { Role } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { companyId: string; userId: string } }
) => {
  const session = await auth();
  const { companyId, userId } = params;

  if (
    !session ||
    !session.user ||
    !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const payload = {
    name: body.name?.trim(),
    email: body.email?.trim().toLowerCase(),
    phone: body.phone?.trim(),
    image: body.image?.trim() || null,
    birthDate: body.birthDate ? new Date(body.birthDate) : undefined,
    password: body.password?.trim(),
    addressLine1: body.addressLine1?.trim() || null,
    addressLine2: body.addressLine2?.trim() || null,
    city: body.city?.trim() || null,
    state: body.state?.trim() || null,
    zipCode: body.zipCode?.trim() || null,
    country: body.country?.trim() || null,
    isActive: body.isActive === "true" || body.isActive === true,
    role: body.role?.toUpperCase(),
  };

  // Only include fields that are defined (skip null/undefined)
  const updateData: any = {};
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && key !== "password") {
      updateData[key] = value;
    }
  }

  // Handle password update separately
  if (payload.password) {
    updateData.password = await hash(payload.password, 10);
  }

  try {
    const updatedStaff = await prisma.user.update({
      where: {
        id: userId,
        companyId: companyId,
      },
      data: updateData,
      include: {
        company: {
          select: {
            id: true,
            name: true,
            subscriptionPlan: true,
          },
        },
      },
    });

    return NextResponse.json(updatedStaff);
  } catch (error) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message
        : "Failed to update staff member";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
