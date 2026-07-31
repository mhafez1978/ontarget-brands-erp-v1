// /app/api/upload-avatar/route.ts

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import { requireSession } from "@/lib/authz";

const MAX_BYTES = 5 * 1024 * 1024;

// Extension is derived from the MIME type, never from the uploaded filename.
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function POST(req: NextRequest) {
  const authz = await requireSession();
  if (!authz.ok) return authz.response;

  const formData = await req.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const extension = ALLOWED_TYPES[file.type];
  if (!extension) {
    return NextResponse.json(
      { error: "Unsupported file type" },
      { status: 415 }
    );
  }

  if (file.size === 0 || file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }

  // The owner comes from the session, not the request body, so a caller cannot
  // write into another user's directory or traverse out of public/ with "../".
  const userId = authz.user.id;
  const fileName = `${randomUUID()}.${extension}`;

  const uploadDir = path.join(process.cwd(), "public", "avatars", userId);
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(uploadDir, fileName), buffer);

  return NextResponse.json({ imageUrl: `/avatars/${userId}/${fileName}` });
}
