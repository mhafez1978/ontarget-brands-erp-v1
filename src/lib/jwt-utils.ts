import { encode } from "next-auth/jwt";
import type { JWT } from "next-auth/jwt";

export async function signJWT(payload: JWT) {
  return await encode({
    secret: process.env.AUTH_SECRET!,
    token: payload,
    maxAge: 60 * 60 * 24 * 7, // match your JWT session config
    salt: process.env.AUTH_SECRET || "default_salt",
  });
}
