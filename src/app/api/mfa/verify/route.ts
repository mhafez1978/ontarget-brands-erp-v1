import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import speakeasy from "speakeasy";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { token } = await req.json();

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    if (!user.mfaSecret) {
      return new NextResponse(
        "MFA setup not initialized. Please scan the QR code first.",
        { status: 400 }
      );
    }

    const isValid = speakeasy.totp.verify({
      secret: user.mfaSecret,
      token: token.trim(),
      encoding: "base32",
      window: 1,
    });

    if (!isValid) {
      return new NextResponse("Invalid MFA code", { status: 403 });
    }

    // ✅ Enable MFA after successful verification
    await prisma.user.update({
      where: { id: user.id },
      data: {
        mfaEnabled: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MFA setup verification error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
