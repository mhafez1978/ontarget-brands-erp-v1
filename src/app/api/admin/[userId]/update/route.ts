// // import { auth } from "@/auth";
// // import { prisma } from "@/lib/prisma";
// // import bcrypt from "bcryptjs";
// // import { NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// // export async function PATCH(
// //   req: Request,
// //   { params }: { params: Promise<{ userId: string }> }
// // ) {
// //   const { userId } = await params;
// //   const session = await auth();

// //   if (!userId) {
// //     return NextResponse.json({ error: "User ID is required" }, { status: 400 });
// //   }

// //   if (
// //     !session ||
// //     ["SUPER_ADMIN", "ADMIN"].includes(session.user.role) === false
// //   ) {
// //     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
// //   }

// //   const body = await req.json();

// //   if (body.birthDate && typeof body.birthDate === "string") {
// //     body.birthDate = new Date(body.birthDate);
// //   }

// //   const {
// //     name,
// //     email,
// //     phone,
// //     image,
// //     addressLine1,
// //     addressLine2,
// //     city,
// //     state,
// //     zipCode,
// //     country,
// //     role,
// //     isActive,
// //     password,
// //     repeatPassword,
// //   } = body;

// //   if (password && password !== repeatPassword) {
// //     return NextResponse.json(
// //       { error: "Passwords do not match" },
// //       { status: 400 }
// //     );
// //   }
// //   if (password) {
// //     body.password = bcrypt.hashSync(password, 10);
// //   }

// //   if (role && !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(role)) {
// //     return NextResponse.json({ error: "Invalid role" }, { status: 400 });
// //   }
// //   const updatedUser = await prisma.user.update({
// //     where: { id: userId },
// //     data: {
// //       ...(name && { name }),
// //       ...(email && { email }),
// //       ...(phone && { phone }),
// //       ...(image && { image }),
// //       ...(body.birthDate && { birthDate: body.birthDate }),
// //       ...(role && { role }),
// //       ...(isActive !== undefined ? { isActive } : {}),
// //       ...(addressLine1 && { addressLine1 }),
// //       ...(addressLine2 && { addressLine2 }),
// //       ...(city && { city }),
// //       ...(state && { state }),
// //       ...(zipCode && { zipCode }),
// //       ...(country && { country }),
// //       ...(password && {
// //         password: bcrypt.hashSync(password, 10),
// //       }),
// //       ...(repeatPassword && {
// //         password: bcrypt.hashSync(repeatPassword, 10),
// //       }),
// //     },
// //     select: {
// //       id: true,
// //       name: true,
// //       email: true,
// //       phone: true,
// //       image: true,
// //       birthDate: true,
// //       role: true,
// //       isActive: true,
// //       addressLine1: true,
// //       addressLine2: true,
// //       city: true,
// //       state: true,
// //       zipCode: true,
// //       country: true,
// //       lastLogin: true,
// //       createdAt: true,
// //       updatedAt: true,
// //     },
// //   });

// //   if (!updatedUser)
// //     return NextResponse.json(
// //       { error: "Could not update user" },
// //       { status: 404 }
// //     );

// //   return NextResponse.json(updatedUser);
// // }

// import { auth } from "@/auth";
// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// export async function PATCH(
//   req: Request,
//   { params }: { params: { userId: string } }
// ) {
//   const { userId } = params;
//   const session = await auth();

//   if (!userId) {
//     return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//   }

//   if (!session || !["SUPER_ADMIN", "ADMIN"].includes(session.user.role)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//   }

//   const body = await req.json();

//   // Convert birthDate string to Date if present
//   if (typeof body.birthDate === "string") {
//     body.birthDate = new Date(body.birthDate);
//   }

//   // Validate password
//   if (body.password && body.password !== body.repeatPassword) {
//     return NextResponse.json(
//       { error: "Passwords do not match" },
//       { status: 400 }
//     );
//   }

//   // Role validation (optional)
//   if (body.role && !["ADMIN", "MANAGER", "SUPER_ADMIN"].includes(body.role)) {
//     return NextResponse.json({ error: "Invalid role" }, { status: 400 });
//   }

//   const updateData: any = {};

//   // Only assign defined fields
//   const allowedFields = [
//     "name",
//     "email",
//     "phone",
//     "image",
//     "birthDate",
//     "addressLine1",
//     "addressLine2",
//     "city",
//     "state",
//     "zipCode",
//     "country",
//     "role",
//     "isActive",
//   ];

//   for (const field of allowedFields) {
//     if (field in body) {
//       updateData[field] = body[field];
//     }
//   }

//   if (body.password) {
//     updateData.password = bcrypt.hashSync(body.password, 10);
//   }

//   const updatedUser = await prisma.user.update({
//     where: { id: userId },
//     data: updateData,
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       phone: true,
//       image: true,
//       birthDate: true,
//       role: true,
//       isActive: true,
//       addressLine1: true,
//       addressLine2: true,
//       city: true,
//       state: true,
//       zipCode: true,
//       country: true,
//       lastLogin: true,
//       createdAt: true,
//       updatedAt: true,
//     },
//   });

//   return NextResponse.json(updatedUser);
// }

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;
  const session = await auth();

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  if (!session || !["SUPER_ADMIN", "ADMIN"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const body = await req.json();

  if (typeof body.birthDate === "string") {
    body.birthDate = new Date(body.birthDate);
  }

  if (body.password && body.password !== body.repeatPassword) {
    return NextResponse.json(
      { error: "Passwords do not match" },
      { status: 400 }
    );
  }

  if (
    body.role &&
    !["ADMIN", "MANAGER", "SUPER_ADMIN", "STAFF", "GUEST"].includes(body.role)
  ) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const updateData: any = {};
  const allowedFields = [
    "name",
    "email",
    "phone",
    "image",
    "birthDate",
    "addressLine1",
    "addressLine2",
    "city",
    "state",
    "zipCode",
    "country",
    "role",
    "isActive",
  ];

  for (const field of allowedFields) {
    if (field in body) {
      updateData[field] = body[field];
    }
  }

  if (body.password) {
    updateData.password = bcrypt.hashSync(body.password, 10);
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: updateData,
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

  return NextResponse.json(updatedUser);
}
