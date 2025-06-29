import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    name,
    description,
    pricePerMonth,
    maxUsers,
    maxAdmins,
    maxManagers,
    storageLimitMB,
    maxProjects,
    maxCustomers,
    features,
  } = await req.json();

  if (
    !name ||
    pricePerMonth === undefined ||
    maxUsers === undefined ||
    maxAdmins === undefined ||
    maxManagers === undefined ||
    maxProjects === undefined ||
    maxCustomers === undefined ||
    storageLimitMB === undefined
  ) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  try {
    const plan = await prisma.subscriptionPlan.create({
      data: {
        name,
        description,
        pricePerMonth,
        maxUsers,
        maxAdmins,
        maxManagers,
        maxCustomers,
        storageLimitMB,
        maxProjects,
        features: {
          connectOrCreate: Array.isArray(features)
            ? features
                .filter(
                  (f) =>
                    typeof f === "object" && f.key && typeof f.key === "string"
                )
                .map((f) => ({
                  where: { key: f.key },
                  create: {
                    key: f.key,
                    label: f.label || f.key.replace(/([a-z])([A-Z])/g, "$1 $2"),
                  },
                }))
            : [],
        },
      },
    });

    return NextResponse.json({ msg: "Plan created successfully.", plan });
  } catch (error) {
    console.error("Error creating plan:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 }
    );
  }
}
