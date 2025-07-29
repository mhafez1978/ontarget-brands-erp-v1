import { Role } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) => {
  const session = await auth();
  const { companyId } = await params;

  if (
    !session ||
    !session.user ||
    !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(session.user.role)
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const payload = {
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    birthDate: body.birthDate ? new Date(body.birthDate) : null,
    phone: body.phone.trim(),
    image: body.image?.trim() || null,
    password: body.password,
    repeatPassword: body.repeatPassword,
    addressLine1: body.addressLine1?.trim() || null,
    addressLine2: body.addressLine2?.trim() || null,
    city: body.city?.trim() || null,
    state: body.state?.trim() || null,
    zipCode: body.zipCode?.trim() || null,
    country: body.country?.trim() || null,
    companyId: companyId,
    dateOfBirth: body.birthDate ? new Date(body.birthDate) : null,
    role: body.role?.toUpperCase(),
    isActive: body.isActive === "true",
  };

  try {
    const staff = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        image: payload.image,
        birthDate: payload.birthDate,
        password: await hash(payload.password, 10),
        addressLine1: payload.addressLine1,
        addressLine2: payload.addressLine2,
        city: payload.city,
        state: payload.state,
        zipCode: payload.zipCode,
        country: payload.country,
        companyId: companyId,
        isActive: payload.isActive,
        role: payload.role?.toUpperCase() as Role,
        companies: {
          connect: [{ id: companyId }],
        },
      },
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
    if (!staff) {
      throw new Error("Failed to create new hire");
      return NextResponse.json(
        { error: "Failed to create new hire" },
        { status: 500 }
      );
    }
    return NextResponse.json(staff);
  } catch (error) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message
        : "Failed to create new hire";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
