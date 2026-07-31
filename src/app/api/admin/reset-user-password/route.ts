import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { requireSession, hasRole } from "@/lib/authz";
import { Role } from "@/generated/prisma";

export async function PATCH(req: NextRequest) {
  const authz = await requireSession();
  if (!authz.ok) return authz.response;

  if (!hasRole(authz.user, [Role.SUPER_ADMIN])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { email, newPassword } = await req.json();

  if (!email || !newPassword) {
    return NextResponse.json(
      { error: "Missing email or newPassword" },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return NextResponse.json({ message: "Password reset successfully." });
  } catch (err) {
    console.error("Password reset error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
