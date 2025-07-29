// app/api/user/[userId]/route.ts
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  //console.log("Fetching user profile for userId:", userId);
  const session = await auth();

  if (!userId) {
    //console.log("User ID is missing in request parameters");
    return new Response("User ID is missing", { status: 400 });
  }

  if (!session || !session.user || session.user.id !== userId) {
    //console.log("Unauthorized access attempt by user:");
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId as string },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        phone: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        zipCode: true,
        country: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      //console.log(`User with ID ${userId} not found`);
      return new Response("User not found", { status: 404 });
    }
    //console.log("User profile fetched successfully:", user);
    return Response.json(user);
  } catch (error) {
    //console.error("Failed to fetch user:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  const session = await auth();
  const { userId } = await params;

  if (!session || !session.user || session.user.id !== userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();
  const {
    name,
    image,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    zipCode,
    country,
  } = body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(image && { image }),
        ...(phone && { phone }),
        ...(addressLine1 && { addressLine1 }),
        ...(addressLine2 && { addressLine2 }),
        ...(city && { city }),
        ...(state && { state }),
        ...(zipCode && { zipCode }),
        ...(country && { country }),
      },
    });

    if (!updatedUser) {
      //console.log(`User with ID ${userId} not found for update`);
      return new Response("User not found", { status: 404 });
    }
    // console.log("User profile updated successfully:", updatedUser);
    return Response.json(updatedUser);
  } catch (error) {
    console.error("Update error", error);
    return new Response("Failed to update user", { status: 500 });
  }
}
