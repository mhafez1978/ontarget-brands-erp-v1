import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const session = await auth();

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  if (
    !session ||
    ["SUPER_ADMIN", "ADMIN"].includes(session.user.role) === false
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await req.json();
  const {
    name,
    email,
    phone,
    image,
    birthDate,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    country,
    role,
    isActive,
    password,
    repeatPassword,
  } = body;

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      ...(name && { name }),
      ...(email && { email }),
      ...(phone && { phone }),
      ...(image && { image }),
      ...(birthDate && { birthDate }),
      ...(role && { role }),
      ...(isActive !== undefined && { isActive }),
      ...(addressLine1 && { addressLine1 }),
      ...(addressLine2 && { addressLine2 }),
      ...(city && { city }),
      ...(state && { state }),
      ...(zipCode && { zipCode }),
      ...(country && { country }),
      ...(password && {
        password: bcrypt.hashSync(password, 10),
      }),
      ...(repeatPassword && {
        password: bcrypt.hashSync(repeatPassword, 10),
      }),
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      image: true,
      birthDate: true,
      role: true,
      isActive: true,
      addressLine1: true,
      addressLine2: true,
      city: true,
      state: true,
      zipCode: true,
      country: true,
      lastLogin: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!updatedUser)
    return NextResponse.json(
      { error: "Could not update user" },
      { status: 404 }
    );

  return NextResponse.json(updatedUser);
}
