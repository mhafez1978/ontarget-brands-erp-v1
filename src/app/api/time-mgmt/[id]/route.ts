// app/api/time-entries/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
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
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await prisma.timeEntry.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
