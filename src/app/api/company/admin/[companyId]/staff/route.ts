// import { prisma } from "@/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(
//   req: NextRequest,
//   { params }: { params: Promise<{ companyId: string }> }
// ) {
//   const { companyId } = await params;

//   if (!companyId) {
//     return NextResponse.json({ error: "Missing companyId" }, { status: 400 });
//   }

//   try {
//     const staff = await prisma.user.findMany({
//       where: {
//         companyId,
//         role: {
//           in: ["ADMIN", "MANAGER", "STAFF", "GUEST"],
//         },
//       },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         phone: true,
//         image: true,
//         birthDate: true,
//         addressLine1: true,
//         addressLine2: true,
//         city: true,
//         state: true,
//         zipCode: true,
//         country: true,
//         isActive: true,
//         createdAt: true,
//         updatedAt: true,
//         role: true,
//         company: {
//           select: {
//             id: true,
//             name: true,
//             subscriptionPlan: true,
//           },
//         },
//       },
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     if (!staff || staff.length === 0) {
//       return NextResponse.json({ message: "No staff found" }, { status: 404 });
//     }

//     return NextResponse.json(staff);
//   } catch (error) {
//     console.error("[STAFF_FETCH_ERROR]", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  if (!companyId) {
    return NextResponse.json({ error: "Missing companyId" }, { status: 400 });
  }

  const authz = await requireCompanyAccess(companyId);
  if (!authz.ok) return authz.response;

  try {
    const staff = await prisma.company.findUnique({
      where: {
        id: companyId as string,
      },
      select: {
        users: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            image: true,
            birthDate: true,
            addressLine1: true,
            addressLine2: true,
            city: true,
            state: true,
            zipCode: true,
            country: true,
            isActive: true,
            createdAt: true,
            updatedAt: true,
            role: true,
          },
        },
      },
    });

    if (!staff || !staff.users || staff.users.length === 0) {
      return NextResponse.json({ message: "No staff found" }, { status: 404 });
    }
    //console.log("Staff fetched successfully:", staff.users);
    return NextResponse.json({ staff: staff.users });
  } catch (error) {
    console.error("[STAFF_FETCH_ERROR]", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
