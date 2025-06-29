import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs"; // Make sure this is installed

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {};

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: email as string },
        });

        if (!user || !user.password) {
          throw new Error("No user found with the provided email");
        }

        const isValid = await bcrypt.compare(
          String(password),
          String(user.password)
        );
        if (!isValid) {
          throw new Error("Incorrect password");
        }
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        });

        return {
          id: String(user.id),
          name: user.name ?? "",
          email: user.email,
          image: user.image ?? "",
          role: user.role,
        };
      },
    }),
  ] as Provider[],

  pages: {
    signIn: "/auth",
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },

  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image ?? null;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        email: token.email as string,
        name: token.name as string,
        image: token.image as string | null,
        role: token.role as string,
        emailVerified: null, // or token.emailVerified if available
      };
      return session;
    },
  },
});
