import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      slogan,
      category,
      type,
      logo,
      domain,
      phone,
      supportEmail,
      salesEmail,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
      subscriptionPlanId,
      ownerId,
      users,
    } = body;

    //console.log("########### Fired API to create company ...");

    if (!name || !subscriptionPlanId || !ownerId) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, subscriptionPlanId, or ownerId",
        },
        { status: 400 }
      );
    }

    const ownerExists = await prisma.user.findUnique({
      where: { id: ownerId },
    });

    if (!ownerExists) {
      return NextResponse.json({ error: "Owner not found" }, { status: 404 });
    }

    const planExists = await prisma.subscriptionPlan.findUnique({
      where: { id: subscriptionPlanId },
    });

    if (!planExists) {
      return NextResponse.json(
        { error: "Subscription plan not found" },
        { status: 404 }
      );
    }

    if (domain) {
      const existingDomain = await prisma.company.findUnique({
        where: { domain },
      });

      if (existingDomain) {
        return NextResponse.json(
          { error: "Domain already in use" },
          { status: 400 }
        );
      }
    }

    //console.log("########### About to create company ...");

    const newCompany = await prisma.company.create({
      data: {
        name,
        slogan: slogan || null,
        category: category || null,
        type: type || null,
        logo: logo || null,
        domain: domain || null,
        phone: phone || null,
        supportEmail: supportEmail || null,
        salesEmail: salesEmail || null,
        addressLine1: addressLine1 || null,
        addressLine2: addressLine2 || null,
        city: city || null,
        state: state || null,
        zipCode: zipCode || null,
        country: country || null,
        owner: { connect: { id: ownerId } },
        subscriptionPlan: { connect: { id: subscriptionPlanId } },
        users: users?.length
          ? { connect: users }
          : { connect: [{ id: ownerId }] },
      },
    });

    if (!newCompany.domain) {
      return NextResponse.json(
        { error: "Company domain is required to create subdomain." },
        { status: 400 }
      );
    }

    const addSubdomain = await prisma.companySubdomain.create({
      data: {
        subdomain: newCompany.domain,
        company: {
          connect: { id: newCompany.id },
        },
      },
    });

    // lets promote user to admin on company creation
    const promotedUser = await prisma.user.update({
      where: {
        id: ownerId,
      },
      data: {
        role: "ADMIN",
        company: {
          connect: { id: newCompany.id },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Company created successfully",
        companyId: newCompany.id,
        owner: ownerId,
        ownerRole: promotedUser.role,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Company creation failed:", error);

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const target = error.meta?.target;

      let message = "A unique constraint failed.";
      if (Array.isArray(target)) {
        if (target.includes("domain")) message = "Domain is already in use.";
        else if (target.includes("Email"))
          message = "This Email is already registered.";
      } else if (typeof target === "string") {
        if (target === "domain") message = "Domain is already in use.";
        else if (target.toLowerCase().includes("email"))
          message = "This Email is already registered.";
      }
      return NextResponse.json({ error: message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Failed to create company" },
      { status: 500 }
    );
  }
}
