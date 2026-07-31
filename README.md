# On Target Brands — Multi-Tenant ERP Platform

A production multi-tenant SaaS ERP built with Next.js, TypeScript, Prisma, and MySQL. Each company gets its own subdomain, landing page, and workspace covering projects, products, suppliers, services, and time tracking — governed by subscription plans with feature gating.

**Live demo:** [ontargeterp.netlify.app](https://ontargeterp.netlify.app/)

## What it does

- **Multi-tenancy by subdomain** — companies register and receive their own subdomain, routed through the Next.js `[domain]` segment and resolved in middleware, with per-tenant landing pages and isolated data.
- **Subscription plans & feature gating** — plans map to feature sets, so tenant capabilities are controlled by what they subscribe to.
- **ERP core** — projects with staff and customer assignments, product catalogs with per-company categories, suppliers, services with tagging, and time entries for tracking work.
- **Authentication & 2FA** — NextAuth with Google sign-in and credentials flow (bcrypt password hashing), plus TOTP two-factor authentication (Speakeasy) with QR-code enrollment.
- **Role-separated areas** — private tenant workspace, admin area, and a superadmin console for platform-level management.
- **Dashboards** — usage and business metrics visualized with Recharts.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| UI | Tailwind CSS, Radix UI primitives, Framer Motion, Lucide icons |
| Auth | NextAuth (Google OAuth + credentials), bcrypt, Speakeasy (TOTP 2FA) |
| Data | Prisma ORM, MySQL, versioned migrations |
| Charts | Recharts |
| Utilities | Google APIs, libphonenumber-js, i18n-iso-countries, date-fns |

## Architecture notes

- `src/app/[domain]/` — tenant-facing routes resolved per subdomain
- `src/app/(superadmin)/` — platform administration console
- `src/app/(private)/` — authenticated tenant workspace
- `src/proxy.ts` — subdomain resolution and route protection
- `prisma/schema.prisma` — 15+ models (User, Company, CompanySubdomain, SubscriptionPlan, Feature, Project, Product, Supplier, Service, TimeEntry, …)

## Running locally

This project uses **npm**. Do not use pnpm or yarn — `package.json` pins
`packageManager` to npm and `package-lock.json` is the committed lockfile.

Start a local MySQL (the production database is not reachable from a dev
machine), then install and run:

```bash
docker start ontarget-mysql || docker run -d --name ontarget-mysql \
  -e MYSQL_ROOT_PASSWORD=123456789 -e MYSQL_DATABASE=ontarget_db \
  -p 3307:3306 mysql:8.4
npm install
npx prisma migrate deploy
npm run db:seed
npm run dev
```

The app runs on <http://localhost:3030>. `npm run db:seed` creates a sign-in
(`admin@ontarget.local` / `Admin123!`) and refuses to run against anything
other than a local database.

Copy `.env.example` to `.env.local` and fill it in. Note that next-auth v5
reads `AUTH_SECRET` — the older `NEXTAUTH_SECRET` / `NEXTAUTH_URL` names are
ignored:

```
DATABASE_URL="mysql://root:123456789@127.0.0.1:3307/ontarget_db"
AUTH_SECRET="generate-with: openssl rand -base64 32"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
NEXT_PUBLIC_BASE_URL="http://localhost:3030"
```

## Status

Active development continues in a private repository; this public repo tracks the platform's core. Built and maintained by [Mohamed Hafez](https://beingmohamedhafez.com) — [GitHub](https://github.com/mhafez1978) · [LinkedIn](https://www.linkedin.com/in/mnhafez1978/).
