import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { FeatureKey } from "@/lib/feature-catalog";

/**
 * Reads enabled features from the database instead of the JWT, which snapshots
 * the plan at login. Returns `null` when the plan has no features configured
 * (legacy behaviour: treat as unmetered).
 */
export async function getCompanyFeatureKeys(
  companyId: string
): Promise<Set<string> | null> {
  const company = await prisma.company.findFirst({
    where: { id: companyId, deletedAt: null },
    select: {
      subscriptionPlan: {
        select: {
          features: {
            where: { isActive: true, deletedAt: null },
            select: { key: true },
          },
        },
      },
    },
  });

  const keys = company?.subscriptionPlan?.features.map((f) => f.key);

  if (!keys || keys.length === 0) return null;

  return new Set(keys);
}

export async function companyHasFeature(
  companyId: string,
  feature: FeatureKey
): Promise<boolean> {
  const keys = await getCompanyFeatureKeys(companyId);
  return keys === null || keys.has(feature);
}

/**
 * Guard for API routes. Call after the caller has been authorized against the
 * company. Returns a 403 response when the plan does not include the feature.
 */
export async function requireCompanyFeature(
  companyId: string,
  feature: FeatureKey
): Promise<NextResponse | null> {
  if (await companyHasFeature(companyId, feature)) return null;

  return NextResponse.json(
    { error: "This feature is not included in the company's plan." },
    { status: 403 }
  );
}
