// /api/projects/by-company/[companyId]/route.ts

import { prisma } from "@/lib/prisma"; // adjust path to your prisma instance
import { NextResponse } from "next/server";
import { requireCompanyAccess } from "@/lib/authz";
import { requireCompanyFeature } from "@/lib/features";
import { FEATURE_KEYS } from "@/lib/feature-catalog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ companyId: string }> }
) {
  const { companyId } = await params;

  const authz = await requireCompanyAccess(companyId);
  if (!authz.ok) return authz.response;

  const featureDenied = await requireCompanyFeature(
    companyId,
    FEATURE_KEYS.projects
  );
  if (featureDenied) return featureDenied;

  try {
    const projects = await prisma.project.findMany({
      where: { companyId },
      select: {
        id: true,
        name: true,
        description: true,
        status: true,
        startDate: true,
        endDate: true,
        isActive: true, // ✅ required for "active" counter

        manager: {
          select: {
            name: true,
          },
        },

        staff: {
          select: {
            user: {
              select: {
                name: true,
              },
            },
          },
        },

        customer: {
          select: {
            user: {
              select: {
                name: true,
                role: true, // 👈 optional, use if you want to filter for ERP_CUSTOMER role
              },
            },
          },
        },
      },
    });
    //console.log(projects);
    return NextResponse.json(projects);
  } catch {
    //console.error("[GET_PROJECTS_BY_COMPANY]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
