import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ domain: string }> }
) {
  try {
    const { domain: subdomain } = await params;
    // console.log(
    //   "###############fired..... validate subdomain API for:",
    //   subdomain
    // );
    const findDomain = await prisma.companySubdomain.findFirst({
      where: { subdomain: subdomain },
      select: { id: true, subdomain: true },
    });
    if (!findDomain) {
      //console.log("Subdomain not found:", subdomain);
      return NextResponse.json({ valid: false });
    }
    //console.log("Subdomain found:", JSON.stringify(findDomain, null, 2));
    return NextResponse.json({ valid: true });
  } catch (error) {
    console.error("Subdomain validation error:", error);
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
