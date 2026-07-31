import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: /api/companies/user/[userId]
export async function GET() {
  const session = await auth();

  try {
    const userId = session?.user?.id;
    if (!userId) {
      return NextResponse.json(
        { message: "User ID is missing from session." },
        { status: 401 }
      );
    }

    const companies = await prisma.company.findMany({
      where: {
        ownerId: userId,
      },
      select: {
        id: true,
        name: true,
        slogan: true,
        domain: true,
        phone: true,
        supportEmail: true,
        salesEmail: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        zipCode: true,
        country: true,
        type: true,
        category: true,
        subscriptionPlanId: true,
        subscriptionPlan: {
          select: {
            name: true,
          },
        },
        ownerId: true,
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
        gmailConnected: true,
        office365Connected: true,
        createdAt: true,
        updatedAt: true,
        isActive: true,
      },
    });

    if (!companies) {
      return NextResponse.json(
        { message: "Company not found for this user." },
        { status: 404 }
      );
    }
    //console.log(companies);
    return NextResponse.json(companies);
  } catch {
    //console.error("Error fetching company:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
