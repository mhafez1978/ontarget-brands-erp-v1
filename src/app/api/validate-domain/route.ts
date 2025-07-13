import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  console.log("fired..... validate-domain API");
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) return NextResponse.json({ valid: false });

  const company = await prisma.company.findUnique({
    where: { subdomain: domain },
    select: { id: true },
  });

  return NextResponse.json({ valid: !!company });
}
