import { google } from "googleapis";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";
import { EmailProviders } from "@/generated/prisma";
import { googleOAuthRedirectUri } from "../redirect-uri";

const secret = process.env.AUTH_SECRET!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) return new Response("Missing code", { status: 400 });

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    googleOAuthRedirectUri(url.origin)
  );

  // 1. Exchange code for tokens
  try {
    await oauth2Client.getToken(code);
  } catch (error) {
    console.error("❌ Token exchange failed:", error);
    return new Response("OAuth token exchange failed", { status: 400 });
  }

  // 2. Get the authenticated user ID
  const sessionToken = await getToken({ req, secret });
  if (!sessionToken?.id) {
    console.error("❌ Missing session token ID");
    return new Response("Not authenticated", { status: 401 });
  }

  const userId = sessionToken.id as string;

  // 3. Find the company this user owns
  let company;
  try {
    company = await prisma.company.findFirst({
      where: {
        ownerId: userId,
        deletedAt: null,
        isActive: true,
      },
      select: { id: true },
    });
  } catch (err) {
    console.error("❌ Error fetching company:", err);
    return new Response("Database error during company lookup", {
      status: 500,
    });
  }

  if (!company) {
    console.error("❌ No valid company found for user ID", userId);
    return new Response("Company not found for this user", { status: 404 });
  }

  // 4. Record the connection.
  //
  // NOTE: the access/refresh tokens are intentionally NOT persisted — the
  // Company model has no column to store them. Sending mail on the company's
  // behalf therefore still needs a schema migration adding encrypted token
  // storage. This route previously returned before reaching this point, so the
  // flag was never written at all.
  try {
    await prisma.company.update({
      where: { id: company.id },
      data: {
        emailProvider: EmailProviders.GMAIL,
        gmailConnected: true,
      },
    });
  } catch (err) {
    console.error("❌ Failed to update company:", err);
    return new Response("Database error during update", { status: 500 });
  }

  return Response.redirect(new URL("/settings", url.origin), 302);
}
