// app/api/time-entries/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust to your project

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, companyId, startTime, endTime, description } = body;

  if (!userId || !companyId || !startTime) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const duration =
    startTime && endTime
      ? Math.floor(
          (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000
        )
      : null;

  const entry = await prisma.timeEntry.create({
    data: {
      userId,
      companyId,
      startTime: new Date(startTime),
      endTime: endTime ? new Date(endTime) : null,
      duration,
      description,
    },
  });

  return NextResponse.json(entry, { status: 201 });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const companyId = searchParams.get("companyId");
  const month = searchParams.get("month"); // e.g. "2025-07"

  if (!userId || !companyId || !month) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const [year, mon] = month.split("-").map(Number);
  const start = new Date(year, mon - 1, 1);
  const end = new Date(year, mon, 0, 23, 59, 59);

  const entries = await prisma.timeEntry.findMany({
    where: {
      userId,
      companyId,
      startTime: {
        gte: start,
        lte: end,
      },
    },
    orderBy: { startTime: "asc" },
  });

  return NextResponse.json(entries);
}
