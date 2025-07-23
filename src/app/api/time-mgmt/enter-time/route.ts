// /app/api/time-entries/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const entry = await prisma.timeEntry.create({
      data: {
        userId: "some-user-id", // Replace with session user ID
        companyId: "some-company-id", // Replace with session/company context
        startTime: new Date(body.startTime),
        endTime: body.endTime ? new Date(body.endTime) : null,
        description: body.description,
        duration: body.endTime
          ? Math.floor(
              (new Date(body.endTime).getTime() -
                new Date(body.startTime).getTime()) /
                60000
            )
          : null,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save time entry" },
      { status: 500 }
    );
  }
}
