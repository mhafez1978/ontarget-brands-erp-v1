/**
 * Google requires an absolute redirect URI and rejects a relative path with
 * `redirect_uri_mismatch`. Both the consent-start and callback routes must send
 * the exact same value, so it is derived here from one place.
 *
 * The value must also be registered verbatim in the Google Cloud console.
 */
export function googleOAuthRedirectUri(origin: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_URL || origin;
  return new URL("/api/oauth/google/callback", base).toString();
}
