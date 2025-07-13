import { BillingCycle } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const VALID_BILLING_CYCLES: BillingCycle[] = [
  "ONE_TIME",
  "NET_7",
  "NET_15",
  "MONTHLY",
  "QUARTERLY",
  "ANNUALLY",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      key,
      name,
      description,
      pricePerMonth,
      billingCycle,
      maxUsers,
      maxAdmins,
      maxManagers,
      maxCustomers,
      storageLimitMB,
      maxProjects,
      features,
    } = body;

    const normalizedBillingCycle = String(
      billingCycle
    ).toUpperCase() as BillingCycle;

    if (
      !key ||
      !name ||
      pricePerMonth === undefined ||
      !VALID_BILLING_CYCLES.includes(normalizedBillingCycle) ||
      maxUsers === undefined ||
      maxAdmins === undefined ||
      maxManagers === undefined ||
      maxCustomers === undefined ||
      storageLimitMB === undefined ||
      maxProjects === undefined
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields." },
        { status: 400 }
      );
    }

    const formattedFeatures = Array.isArray(features)
      ? features
          .filter(
            (f) =>
              typeof f === "object" && f !== null && typeof f.key === "string"
          )
          .map((f) => ({
            where: { key: f.key },
            create: {
              key: f.key,
              label: f.label || f.key.replace(/([a-z])([A-Z])/g, "$1 $2"),
            },
          }))
      : [];

    const plan = await prisma.subscriptionPlan.create({
      data: {
        key,
        name,
        description,
        pricePerMonth,
        billingCycle: normalizedBillingCycle,
        maxUsers,
        maxAdmins,
        maxManagers,
        maxCustomers,
        storageLimitMB,
        maxProjects,
        features: {
          connectOrCreate: formattedFeatures,
        },
      },
    });

    return NextResponse.json({ msg: "Plan created successfully.", plan });
  } catch (error) {
    console.error("Error creating plan:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
