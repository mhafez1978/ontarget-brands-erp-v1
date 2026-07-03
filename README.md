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
- `src/middleware.ts` — subdomain resolution and route protection
- `prisma/schema.prisma` — 15+ models (User, Company, CompanySubdomain, SubscriptionPlan, Feature, Project, Product, Supplier, Service, TimeEntry, …)

## Running locally

```bash
pnpm install
pnpm prisma migrate dev
pnpm dev
```

Create a `.env` file with:

```
DATABASE_URL="mysql://user:password@localhost:3306/ontarget"
AUTH_SECRET="generate-with: openssl rand -base64 32"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

## Status

Active development continues in a private repository; this public repo tracks the platform's core. Built and maintained by [Mohamed Hafez](https://beingmohamedhafez.com) — [GitHub](https://github.com/mhafez1978) · [LinkedIn](https://www.linkedin.com/in/mnhafez1978/).
