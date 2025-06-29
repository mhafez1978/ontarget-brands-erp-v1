// /app/api/upload-avatar/route.ts

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { mkdir, writeFile } from "fs/promises";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const userId = formData.get("userId");

  if (!file || !userId || typeof userId !== "string") {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}_${file.name}`;
  const uploadDir = path.join(process.cwd(), "public", userId, "avatars");

  await mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, fileName);
  await writeFile(filePath, buffer);

  const imageUrl = `/${userId}/avatars/${fileName}`;
  return NextResponse.json({ imageUrl });
}
