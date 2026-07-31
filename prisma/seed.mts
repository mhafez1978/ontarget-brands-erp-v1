/**
 * Local development seed.
 *
 * Creates the minimum needed to sign in and exercise the app: a subscription
 * plan, a company (with its subdomain row), and a SUPER_ADMIN owner.
 *
 * Local use only — it refuses to run against a non-local DATABASE_URL.
 * Run with:  npx tsx --env-file=.env.local prisma/seed.mts
 */
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient, Role, BillingCycle } from "../src/generated/prisma/index.js";
import bcrypt from "bcryptjs";

const url = process.env.DATABASE_URL ?? "";
const host = url.replace(/^.*@/, "").split("/")[0] ?? "";

if (!/^(127\.0\.0\.1|localhost)(:\d+)?$/.test(host)) {
  console.error(
    `Refusing to seed: DATABASE_URL host "${host}" is not local. ` +
      `This script must never touch a remote/production database.`
  );
  process.exit(1);
}

const ADMIN_EMAIL = "admin@ontarget.local";
const ADMIN_PASSWORD = "Admin123!";

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(url) });

async function main() {
  const plan = await prisma.subscriptionPlan.upsert({
    where: { key: "dev" },
    update: {},
    create: {
      key: "dev",
      name: "Development Plan",
      description: "Local development plan with generous limits.",
      pricePerMonth: 0,
      billingCycle: BillingCycle.MONTHLY,
      maxUsers: 100,
      maxAdmins: 10,
      maxManagers: 10,
      maxCustomers: 500,
      storageLimitMB: 10000,
      maxProjects: 100,
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: {},
    create: {
      name: "Local Admin",
      email: ADMIN_EMAIL,
      password: await bcrypt.hash(ADMIN_PASSWORD, 10),
      role: Role.SUPER_ADMIN,
      isActive: true,
    },
  });

  let company = await prisma.company.findFirst({
    where: { domain: "demo" },
    select: { id: true },
  });

  if (!company) {
    company = await prisma.company.create({
      data: {
        name: "Demo Company",
        slogan: "Local development tenant",
        domain: "demo",
        country: "United States",
        owner: { connect: { id: admin.id } },
        subscriptionPlan: { connect: { id: plan.id } },
        users: { connect: [{ id: admin.id }] },
      },
      select: { id: true },
    });

    await prisma.companySubdomain.create({
      data: { subdomain: "demo", company: { connect: { id: company.id } } },
    });
  }

  // Make the company the admin's active tenant.
  await prisma.user.update({
    where: { id: admin.id },
    data: { company: { connect: { id: company.id } } },
  });

  console.log("Seed complete.");
  console.log(`  plan:    ${plan.name}`);
  console.log(`  company: Demo Company (${company.id})`);
  console.log(`  login:   ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
