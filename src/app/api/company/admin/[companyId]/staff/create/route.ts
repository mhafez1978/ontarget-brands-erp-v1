import { Role } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import {
  requireCompanyAccess,
  canAssignRole,
  SAFE_USER_SELECT,
} from "@/lib/authz";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) => {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId, [
    Role.SUPER_ADMIN,
    Role.ADMIN,
    Role.MANAGER,
  ]);
  if (!authz.ok) return authz.response;

  const body = await req.json();

  const requestedRole = body.role?.toUpperCase() as Role | undefined;
  if (!requestedRole || !(requestedRole in Role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }
  if (!canAssignRole(authz.user, requestedRole)) {
    return NextResponse.json(
      { error: "Cannot assign a role above your own" },
      { status: 403 }
    );
  }

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
    role: requestedRole,
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
      select: {
        ...SAFE_USER_SELECT,
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
    console.error("Staff creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create new hire" },
      { status: 500 }
    );
  }
};
