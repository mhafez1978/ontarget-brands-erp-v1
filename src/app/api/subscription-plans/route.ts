import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const plans = await prisma.subscriptionPlan.findMany({
      select: {
        id: true,
        name: true,
        pricePerMonth: true,
        description: true,
        maxUsers: true,
        maxAdmins: true,
        maxManagers: true,
        maxCustomers: true,
        maxProjects: true,
        storageLimitMB: true,
        features: {
          select: {
            key: true,
            label: true,
          },
        },
      },
      orderBy: {
        pricePerMonth: "asc",
      },
    });

    return NextResponse.json(plans);
  } catch (error) {
    console.error("Failed to fetch subscription plans:", error);
    return NextResponse.json(
      { error: "Failed to fetch plans" },
      { status: 500 }
    );
  }
}
