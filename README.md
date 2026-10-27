# On Target Brands — Multi-Tenant ERP Platform

A multi-tenant SaaS ERP prototype built with Next.js, TypeScript, Prisma, and MySQL.
Each company gets its own subdomain and workspace covering projects, products,
suppliers, services, and time tracking — with subscription plans that gate
feature access per tenant.

> **Status:** portfolio / active-development project, not a production system.
> Some modules are fully wired to the database; others are UI prototypes with
> sample data. See [What it does](#what-it-does) for the exact split. There is
> no test suite yet.

**Live demo:** [ontargeterp.netlify.app](https://ontargeterp.netlify.app/)

## What it does

### Working (wired to the database via real API routes)

- **Multi-tenancy by subdomain** — companies register and get their own
  subdomain (`src/proxy.ts`), resolved through the Next.js `[domain]` segment,
  with per-tenant routing.
- **Authentication & MFA** — NextAuth with credentials (bcrypt hashing) and
  Google OAuth, plus TOTP two-factor authentication (Speakeasy) with QR-code
  enrollment. MFA is verified post-login through a signed, short-lived cookie.
- **Authorization** — per-company access checks and role ranking via
  `src/lib/authz.ts` (`requireSession`, `requireCompanyAccess`, `hasRole`),
  and admin responses use safe user selects so password hashes and TOTP
  secrets never leave the server.
- **Feature gating by plan** — plans map to rows in the `Feature` table.
  Gated modules (Projects, Inventory/Products, Time Tracking) check the
  company's plan features at three layers: the page itself
  (`companyHasFeature`), the API routes (`requireCompanyFeature`), and the
  navigation menu. Plans created before feature gating exist — i.e. a plan
  with no features configured — are treated as unmetered legacy and allow
  everything, so existing tenants are never locked out.
- **ERP core** — company, staff, customer, project, product, supplier, and
  service management with real API wiring; projects support staff and customer
  assignments.
- **Inventory** — per-company product catalog with categories and suppliers.
- **Time tracking** — `TimeEntryForm` → `/api/time-mgmt`; users log only their
  own hours, and entries are scoped to the entry's owning company (read from
  the stored row, never from the request).

### UI prototype (screens render, but with hardcoded sample data)

- **Dashboard** — `/dashboard` renders, but its metrics are sample data.
- **Financial overview** (`/accounting`)
- **AI content / SEO** (`/ai-content`)
- **Business website management & website templates**
  (`/business-website`, `/website-templates`)
- **Services management** (`/services`)
- **Orders management** (`/orders`)

## Architecture notes

- **Tenant routing** — `src/proxy.ts` resolves the request subdomain to a
  tenant and protects private routes.
- **Tenant data isolation** — API routes call `requireCompanyAccess(companyId)`
  (23 routes) so a caller can only reach rows belonging to a company they
  belong to (or own). This is **application-level** isolation enforced in
  route handlers, not database-level row security (no MySQL RLS).
- **Route groups**
  - `src/app/[domain]/` — tenant-facing public pages per subdomain
  - `src/app/(private)/` — authenticated tenant workspace
  - `src/app/(superadmin)/` — platform administration console
- **Feature catalog** — `src/lib/feature-catalog.ts` is the single source of
  feature keys, shared by the seed script, the auth session, the navigation
  menu, and server-side enforcement (`src/lib/features.ts`), so a feature is
  only ever referred to by one string.
- **Session** — JWT sessions (7-day expiry). The plan's feature set is
  snapshotted into the token at login for menu rendering; pages and APIs
  re-check against the database, so a plan change takes effect for enforcement
  immediately and for the menu at next login.

## Data model

15 Prisma models (`prisma/schema.prisma`), grouped by domain:

| Domain | Models |
|---|---|
| Identity & tenancy | `User`, `Company`, `CompanySubdomain` |
| Billing | `SubscriptionPlan`, `Feature` |
| Projects | `Project`, `ProjectStaff`, `ProjectCustomer` |
| Catalog | `Product`, `Supplier`, `CompanyProductCategory`, `Service`, `ServiceTag` |
| Work | `TimeEntry` |
| CMS | `CompanyLanding` (defined; not yet wired into app code) |

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| UI | Tailwind CSS, Radix UI primitives, Framer Motion, Lucide icons |
| Auth | NextAuth (Google OAuth + credentials), bcrypt, Speakeasy (TOTP 2FA) |
| Data | Prisma ORM, MySQL, versioned migrations |
| Charts | Recharts |
| Utilities | Google APIs, libphonenumber-js, i18n-iso-countries, date-fns |

## Project structure

```
src/
  app/            # route groups: [domain], (private), (superadmin), api/
  components/     # erp/, admin/, forms/, ui/
  lib/            # prisma client, authz, features + feature-catalog, mfa-cookie
  generated/      # Prisma client output
  proxy.ts        # subdomain resolution & route protection
  auth.ts         # NextAuth configuration
prisma/           # schema, migrations, seed.mts
```

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
(`admin@ontarget.local` / `Admin123!`), gives the dev plan every feature, and
refuses to run against anything other than a local database.

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

## Roadmap

- Back the prototype modules (accounting, AI content, orders, services,
  business website) with real data, or trim them from the navigation.
- Add a test suite.
- Move tenant isolation below the application layer (or formalize and audit
  the current route-level guarantees).

## Status

Active development continues in a private repository; this public repo tracks the platform's core. Built and maintained by [Mohamed Hafez](https://beingmohamedhafez.com) — [GitHub](https://github.com/mhafez1978) · [LinkedIn](https://www.linkedin.com/in/mnhafez1978/).
