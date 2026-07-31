// /api/oauth/google/route.ts
import { google } from "googleapis";
import { googleOAuthRedirectUri } from "./redirect-uri";

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    googleOAuthRedirectUri(origin) // must match Google Console
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://mail.google.com/",
      "https://www.googleapis.com/auth/gmail.modify",
    ],
  });

  return Response.redirect(authUrl);
}
