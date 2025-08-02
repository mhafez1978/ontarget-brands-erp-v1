import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

const allowedDomains = ["localhost:3000"];

export default auth(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  const subdomain = hostname.split(".")[0];
  const isRootDomainOnly = allowedDomains.includes(hostname);

  if (isRootDomainOnly) return NextResponse.next();

  let valid = false;

  try {
    const res = await fetch(`/api/${subdomain}/validate`);
    const data = await res.json();
    valid = data.valid;
  } catch (err) {
    console.error("Subdomain check failed:", err);
  }

  if (valid) {
    const url = request.nextUrl.clone();
    url.pathname = `/${subdomain}${pathname}`;
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = "/subdomain-not-found";
  return NextResponse.rewrite(url);
});
