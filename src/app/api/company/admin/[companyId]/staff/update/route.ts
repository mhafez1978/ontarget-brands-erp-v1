import { Prisma, Role } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import {
  requireCompanyAccess,
  canAssignRole,
  SAFE_USER_SELECT,
} from "@/lib/authz";

export const PATCH = async (
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

  if (body.role !== undefined) {
    const requestedRole = body.role?.toUpperCase() as Role;
    if (!(requestedRole in Role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }
    if (!canAssignRole(authz.user, requestedRole)) {
      return NextResponse.json(
        { error: "Cannot assign a role above your own" },
        { status: 403 }
      );
    }
  }

  // The route path has no [userId] segment, so the target staff member
  // is identified via the request body.
  const userId: string | undefined = body.userId;
  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

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
  const updateData: Record<string, unknown> = {};
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
      data: updateData as Prisma.UserUpdateInput,
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

    return NextResponse.json(updatedStaff);
  } catch (error) {
    console.error("Staff update failed:", error);
    return NextResponse.json(
      { error: "Failed to update staff member" },
      { status: 500 }
    );
  }
};
