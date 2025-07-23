import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const session = await auth();
    const userId = session?.user?.id;
    const email = session?.user?.email;

    if (!userId || !email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });

    let secret = user?.mfaSecret;

    // ✅ Only generate a new secret if one doesn’t already exist
    if (!secret) {
      const generated = speakeasy.generateSecret({
        name: `OnTarget Brands ERP`,
      });

      await prisma.user.update({
        where: { id: userId },
        data: {
          mfaSecret: generated.base32,
        },
      });

      secret = generated.base32;
    }

    // ✅ Generate QR code from existing or newly saved secret
    const otpAuthUrl = speakeasy.otpauthURL({
      secret,
      label: `OnTarget - ${email}`,
      encoding: "base32",
    });

    const qrCode = await qrcode.toDataURL(otpAuthUrl);

    return NextResponse.json({ qrCode });
  } catch (error) {
    console.error("MFA setup error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
