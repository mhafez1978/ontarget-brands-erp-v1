import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};

const allowedDomains = ["ontargeterp.netlify.app"];

export default auth(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  const subdomain = hostname.split(".")[0];
  const isRootDomainOnly = allowedDomains.includes(hostname);
  const isLocalhost =
    hostname.startsWith("localhost") || hostname.startsWith("127.0.0.1");

  if (isRootDomainOnly || isLocalhost) return NextResponse.next();

  let valid = false;

  try {
    // fetch() in the proxy runtime requires an absolute URL
    const res = await fetch(
      new URL(`/api/${subdomain}/validate`, request.nextUrl.origin)
    );
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
