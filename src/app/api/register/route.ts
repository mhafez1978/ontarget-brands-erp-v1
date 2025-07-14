import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Role } from "@/generated/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email: email as string },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Email already registered, please login." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name as string,
        email: email as string,
        password: hashedPassword as string,
        role: Role.ERP_CUSTOMER,
      },
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Failed to register" }, { status: 500 });
  }
}
