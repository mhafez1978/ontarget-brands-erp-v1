import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import subdomains from "./subdomains.json";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

const allowedDomains = ["localhost:3000", "trillionclues.com"];

export default auth(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  const subdomain = hostname.split(".")[0];
  const isRootDomainOnly = allowedDomains.includes(hostname);
  const isKnownSubdomain = subdomains.some((d) => d.subdomain === subdomain);

  // ✅ Allow root domain with no subdomain (e.g., localhost:3000)
  if (isRootDomainOnly) return NextResponse.next();

  // ✅ Rewrite for known subdomain
  if (isKnownSubdomain) {
    const url = request.nextUrl.clone();
    url.pathname = `/${subdomain}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // ❌ Unknown subdomain
  return new NextResponse("Subdomain not found", { status: 404 });
});
