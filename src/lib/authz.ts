import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Role } from "@/generated/prisma";

/**
 * Roles ordered most- to least-privileged. A caller may only assign roles at or
 * below their own rank, which prevents a MANAGER minting a SUPER_ADMIN.
 */
const ROLE_RANK: Record<Role, number> = {
  SUPER_ADMIN: 0,
  ADMIN: 1,
  MANAGER: 2,
  STAFF: 3,
  ERP_CUSTOMER: 4,
  COMPANY_CUSTOMER: 5,
  GUEST: 6,
};

export type SessionUser = {
  id: string;
  email: string;
  role: Role;
};

type Denied = { ok: false; response: NextResponse };
type Allowed = { ok: true; user: SessionUser };
export type AuthzResult = Allowed | Denied;

const deny = (status: number, error: string): Denied => ({
  ok: false,
  response: NextResponse.json({ error }, { status }),
});

/**
 * Resolves the caller's session. Rejects when MFA is enrolled but the TOTP step
 * has not been completed, so a password alone never grants API access.
 */
export async function requireSession(): Promise<AuthzResult> {
  const session = await auth();

  if (!session?.user?.id) return deny(401, "Unauthorized");
  if (session.mfaPending) return deny(401, "MFA verification required");

  return {
    ok: true,
    user: {
      id: session.user.id,
      email: session.user.email ?? "",
      role: session.user.role as Role,
    },
  };
}

export function hasRole(user: SessionUser, allowed: Role[]): boolean {
  return allowed.includes(user.role);
}

/** True when `actor` may grant `target` — equal or lower privilege only. */
export function canAssignRole(actor: SessionUser, target: Role): boolean {
  const actorRank = ROLE_RANK[actor.role];
  const targetRank = ROLE_RANK[target];
  if (actorRank === undefined || targetRank === undefined) return false;
  return targetRank >= actorRank;
}

/**
 * Authorizes the caller against a specific company. Membership is read from the
 * database rather than the JWT: the token snapshots company links at login and
 * goes stale when they change.
 *
 * SUPER_ADMIN is a platform-level role and is not scoped to a single company.
 */
export async function requireCompanyAccess(
  companyId: string,
  allowedRoles?: Role[]
): Promise<AuthzResult> {
  const result = await requireSession();
  if (!result.ok) return result;

  const { user } = result;

  if (allowedRoles && !hasRole(user, allowedRoles)) {
    return deny(403, "Forbidden");
  }

  if (user.role === Role.SUPER_ADMIN) return result;

  if (!companyId) return deny(400, "companyId is required");

  const membership = await prisma.company.findFirst({
    where: {
      id: companyId,
      OR: [{ ownerId: user.id }, { users: { some: { id: user.id } } }],
    },
    select: { id: true },
  });

  // Same response as a missing company, so probing cannot enumerate tenants.
  if (!membership) return deny(403, "Forbidden");

  return result;
}

/**
 * Fields safe to return to a client. Never expose `password` or `mfaSecret`.
 */
export const SAFE_USER_SELECT = {
  id: true,
  name: true,
  email: true,
  emailVerified: true,
  image: true,
  phone: true,
  birthDate: true,
  role: true,
  isActive: true,
  mfaEnabled: true,
  addressLine1: true,
  addressLine2: true,
  city: true,
  state: true,
  zipCode: true,
  country: true,
  companyId: true,
  createdAt: true,
  updatedAt: true,
  lastLogin: true,
} as const;
