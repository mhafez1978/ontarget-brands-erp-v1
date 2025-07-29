import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  //console.log("fired..... validate-domain API");
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) return NextResponse.json({ valid: false });

  const company = await prisma.companySubdomain.findFirst({
    where: { subdomain: domain },
    select: { id: true },
  });

  return NextResponse.json({ valid: !!company });
}
