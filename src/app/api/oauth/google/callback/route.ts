import { google } from "googleapis";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

// Define EmailProvider enum if not imported from elsewhere
enum EmailProvider {
  GMAIL = "GMAIL",
}

const secret = process.env.AUTH_SECRET!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) return new Response("Missing code", { status: 400 });

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    "/api/oauth/google/callback"
  );

  // 1. Exchange code for tokens
  let tokens;
  try {
    const response = await oauth2Client.getToken(code);
    tokens = response.tokens;
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

  let company;

  try {
    company = await prisma.company.findFirst({
      where: {
        ownerId: userId,
        deletedAt: null,
        isActive: true,
      },
    });
    if (!company || !company.id) {
      console.error("❌ No valid company found for user ID", userId);
      return new Response("Company not found for this user", { status: 404 });
    }
    //console.log("✅ Company found:", company.id);
    return new Response("Company found", { status: 200 });
  } catch (err) {
    console.error("❌ Error fetching company:", err);
    return new Response("Database error during company lookup", {
      status: 500,
    });
  }

  // 4. Update company with OAuth token
  try {
    await prisma.company.update({
      where: { id: company.id },
      data: {
        emailProvider: EmailProvider.GMAIL,
        gmailConnected: true,
      },
    });

    return new Response("Sucess Gmail connected....", {
      status: 302,
    });
  } catch (err) {
    console.error("❌ Failed to update company with token:", err);
    return new Response("Database error during update", { status: 500 });
  }
}
