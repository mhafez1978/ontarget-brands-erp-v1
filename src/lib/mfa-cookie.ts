/**
 * Proof that a user completed the TOTP step.
 *
 * The previous implementation set a plain `mfa-verified=true` cookie and checked
 * it with `cookieHeader.includes("mfa-verified=true")`. That matched anywhere in
 * the header, so any attacker-settable cookie whose *value* contained that
 * string cleared the MFA gate. This binds the proof to a specific user and an
 * expiry, signs it, and is parsed as a real cookie rather than a substring.
 *
 * Web Crypto is used (not node:crypto) so this works in both the Node and Edge
 * runtimes, since auth.ts is imported by the proxy.
 */

export const MFA_COOKIE_NAME = "mfa-verified";

/** How long a completed TOTP check stays valid, in seconds. */
export const MFA_COOKIE_MAX_AGE = 60 * 60 * 8;

const encoder = new TextEncoder();

async function getKey(): Promise<CryptoKey> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not set");

  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function sign(payload: string): Promise<string> {
  const key = await getKey();
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
}

/** Builds a signed `<userId>.<expiresAt>.<signature>` cookie value. */
export async function createMfaCookieValue(userId: string): Promise<string> {
  const expiresAt = Math.floor(Date.now() / 1000) + MFA_COOKIE_MAX_AGE;
  const payload = `${userId}.${expiresAt}`;
  return `${payload}.${await sign(payload)}`;
}

/** Verifies the cookie was issued by this server, for this user, and is unexpired. */
export async function verifyMfaCookieValue(
  value: string | undefined,
  userId: string
): Promise<boolean> {
  if (!value || !userId) return false;

  const parts = value.split(".");
  if (parts.length !== 3) return false;

  const [cookieUserId, expiresAtRaw, signature] = parts;
  if (cookieUserId !== userId) return false;

  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now() / 1000) {
    return false;
  }

  const expected = await sign(`${cookieUserId}.${expiresAtRaw}`);
  if (expected.length !== signature.length) return false;

  // Constant-time compare so the signature cannot be recovered byte by byte.
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++) {
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return mismatch === 0;
}

/** Reads a single cookie value from a raw Cookie header. */
export function readCookie(
  cookieHeader: string,
  name: string
): string | undefined {
  for (const part of cookieHeader.split(";")) {
    const separator = part.indexOf("=");
    if (separator === -1) continue;
    if (part.slice(0, separator).trim() === name) {
      return part.slice(separator + 1).trim();
    }
  }
  return undefined;
}
