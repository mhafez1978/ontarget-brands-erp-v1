// import { NextResponse } from "next/server";
// import speakeasy from "speakeasy";
// import { prisma } from "@/lib/prisma";
// import { auth } from "@/auth";

// export async function POST(req: Request) {
//   try {
//     const session = await auth();
//     const { token } = await req.json();

//     if (!session || !session.user || !token) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const user = await prisma.user.findUnique({
//       where: { id: session.user.id },
//       select: { mfaSecret: true },
//     });

//     if (!user?.mfaSecret) {
//       return NextResponse.json({ error: "No MFA configured" }, { status: 400 });
//     }

//     const isValid = speakeasy.totp.verify({
//       secret: user.mfaSecret,
//       token: token.trim(),
//       encoding: "base32",
//       window: 1,
//     });

//     if (!isValid) {
//       return NextResponse.json({ error: "Invalid OTP" }, { status: 403 });
//     }

//     // ✅ Success — set secure short-lived cookie
//     const res = NextResponse.json({ success: true });
//     res.cookies.set("mfa-verified", "true", {
//       path: "/",
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 60, // 1 minute
//     });

//     return res;
//   } catch (err: any) {
//     console.error("MFA verification error:", err);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import speakeasy from "speakeasy";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import {
  MFA_COOKIE_NAME,
  MFA_COOKIE_MAX_AGE,
  createMfaCookieValue,
} from "@/lib/mfa-cookie";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { token } = await req.json();

    if (!session || !session.user || !token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { mfaSecret: true },
    });

    if (!user?.mfaSecret) {
      return NextResponse.json({ error: "No MFA configured" }, { status: 400 });
    }

    const isValid = speakeasy.totp.verify({
      secret: user.mfaSecret,
      token: token.trim(),
      encoding: "base32",
      window: 1,
    });

    if (!isValid) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 403 });
    }

    // ✅ Set signed proof cookie and redirect
    const res = NextResponse.redirect(new URL("/dashboard", req.url));
    res.cookies.set(
      MFA_COOKIE_NAME,
      await createMfaCookieValue(session.user.id),
      {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MFA_COOKIE_MAX_AGE,
      }
    );

    return res;
  } catch (err) {
    console.error(
      "MFA verification error:",
      err instanceof Error ? err.message : err
    );
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
