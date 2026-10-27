// app/api/time-entries/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCompanyAccess, requireSession } from "@/lib/authz";
import { requireCompanyFeature } from "@/lib/features";
import { FEATURE_KEYS } from "@/lib/feature-catalog";

/**
 * Resolves the entry's owning company and authorizes the caller against it.
 * The company is read from the stored row, never from the request, so an id
 * belonging to another tenant cannot be reached.
 */
async function authorizeEntry(id: string) {
  // Session first: an anonymous caller must not be able to make the server
  // issue database queries.
  const session = await requireSession();
  if (!session.ok) return session;

  const entry = await prisma.timeEntry.findUnique({
    where: { id },
    select: { id: true, companyId: true },
  });

  if (!entry) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Not found" }, { status: 404 }),
    };
  }

  const authz = await requireCompanyAccess(entry.companyId);
  if (!authz.ok) return authz;

  const featureDenied = await requireCompanyFeature(
    entry.companyId,
    FEATURE_KEYS.timeTracking
  );
  if (featureDenied) {
    return { ok: false as const, response: featureDenied };
  }

  return authz;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const authz = await authorizeEntry(id);
  if (!authz.ok) return authz.response;

  const body = await req.json();
  const { startTime, endTime, description } = body;

  const duration =
    startTime && endTime
      ? Math.floor(
          (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000
        )
      : null;

  const updated = await prisma.timeEntry.update({
    where: { id },
    data: {
      startTime: startTime ? new Date(startTime) : undefined,
      endTime: endTime ? new Date(endTime) : undefined,
      duration,
      description,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const authz = await authorizeEntry(id);
  if (!authz.ok) return authz.response;

  await prisma.timeEntry.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
