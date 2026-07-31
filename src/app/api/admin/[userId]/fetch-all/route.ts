import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { SAFE_USER_SELECT } from "@/lib/authz";

export async function GET() {
  const session = await auth();

  if (!session || session.user.role !== "SUPER_ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        name: true,
        slogan: true,
        category: true,
        type: true,
        logo: true,
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
        ownerId: true,
        emailProvider: true,
        // emailOAuthToken: true,
        // emailOAuthExpiry: true,
        gmailConnected: true,
        office365Connected: true,
        subscriptionPlan: true,
        users: { select: SAFE_USER_SELECT },
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json(
      { error: "Failed to fetch companies" },
      { status: 500 }
    );
  }
}
