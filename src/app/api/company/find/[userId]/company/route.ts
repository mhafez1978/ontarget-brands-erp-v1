import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET: /api/companies/user/[userId]
export async function GET(req: NextRequest) {
  const session = await auth();

  try {
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { message: "User ID is missing from session." },
        { status: 401 }
      );
    }
    const company = await prisma.company.findFirst({
      where: {
        ownerId: userId,
      },
      select: {
        id: true,
        name: true,
        domain: true,
        phone: true,
        supportEmail: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        zipCode: true,
        country: true,
        ownerId: true,
        gmailConnected: true,
        office365Connected: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!company) {
      return NextResponse.json(
        { message: "Company not found for this user." },
        { status: 404 }
      );
    }
    //console.log(company);
    return NextResponse.json(company);
  } catch (error) {
    console.error("Error fetching company:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
