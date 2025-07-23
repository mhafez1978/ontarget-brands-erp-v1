// import { NextResponse } from "next/server";
// import speakeasy from "speakeasy";
// import { prisma } from "@/lib/prisma";
// import { auth } from "@/auth";

// export async function POST(req: Request) {
//   const session = await auth();
//   const { token } = await req.json();

//   if (!session || !session.user || !token) {
//     return new NextResponse("Unauthorized", { status: 401 });
//   }

//   const user = await prisma.user.findUnique({
//     where: { id: session?.user.id },
//   });

//   if (!user?.mfaSecret) {
//     return new NextResponse("No MFA configured", { status: 400 });
//   }

//   const isValid = speakeasy.totp.verify({
//     secret: user.mfaSecret,
//     token: token.trim(),
//     encoding: "base32",
//     window: 1,
//   });

//   if (!isValid) {
//     return new NextResponse("Invalid OTP", { status: 403 });
//   }

//   // ✅ Create response and set temp cookie
//   const res = NextResponse.json({ success: true });
//   res.cookies.set("mfa-verified", "true", {
//     path: "/",
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     maxAge: 60, // short-lived
//   });

//   return res;
// }

import { NextResponse } from "next/server";
import speakeasy from "speakeasy";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

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

    // ✅ Success — set secure short-lived cookie
    const res = NextResponse.json({ success: true });
    res.cookies.set("mfa-verified", "true", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60, // 1 minute
    });

    return res;
  } catch (err: any) {
    console.error("MFA verification error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
