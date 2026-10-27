/**
 * Canonical feature keys. These are shared by the seed script, the auth
 * session, the navigation menu, and server-side enforcement, so a feature is
 * only ever referred to by one string.
 */
export const FEATURE_KEYS = {
  projects: "projects",
  inventory: "inventory",
  timeTracking: "time_tracking",
  accounting: "accounting",
  aiContent: "ai_content",
  website: "website",
} as const;

export type FeatureKey = (typeof FEATURE_KEYS)[keyof typeof FEATURE_KEYS];

export const FEATURE_DEFINITIONS: { key: FeatureKey; label: string }[] = [
  { key: FEATURE_KEYS.projects, label: "Projects" },
  { key: FEATURE_KEYS.inventory, label: "Inventory" },
  { key: FEATURE_KEYS.timeTracking, label: "Time Tracking" },
  { key: FEATURE_KEYS.accounting, label: "Accounting & Reports" },
  { key: FEATURE_KEYS.aiContent, label: "AI Content" },
  { key: FEATURE_KEYS.website, label: "Business Website" },
];

export type PlanWithFeatures = {
  features?: { key: string; isActive?: boolean }[] | null;
} | null;

/**
 * Returns the enabled feature keys for a plan, or `null` when the plan has no
 * features configured. A plan with no features predates feature-level gating,
 * so it is treated as unmetered rather than locked out of everything.
 */
export function planFeatureKeys(plan: PlanWithFeatures): Set<string> | null {
  const keys = plan?.features
    ?.filter((feature) => feature.isActive !== false)
    .map((feature) => feature.key);

  if (!keys || keys.length === 0) return null;

  return new Set(keys);
}

export function planHasFeature(plan: PlanWithFeatures, key: FeatureKey) {
  const keys = planFeatureKeys(plan);
  return keys === null || keys.has(key);
}
