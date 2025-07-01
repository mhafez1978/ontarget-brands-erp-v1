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
          select: {
            // --- Select the User fields you need for the session ---
            id: true,
            email: true,
            name: true,
            role: true,
            image: true,
            password: true,
            // --- Now, select the related active company and its plan ---
            company: {
              select: {
                id: true, // The active company's ID
                name: true, // The active company's name
                subscriptionPlan: {
                  select: {
                    id: true, // The subscription plan's ID
                    name: true, // The subscription plan's name
                  },
                },
              },
            },
          },
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
          company: user.company ?? null,
          plan: user.company?.subscriptionPlan?.name ?? null,
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

  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.email = user.email;
  //       token.name = user.name;
  //       token.image = user.image ?? null;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.user = {
  //       id: token.id as string,
  //       email: token.email as string,
  //       name: token.name as string,
  //       image: token.image as string | null,
  //       role: token.role as string,
  //       emailVerified: null, // or token.emailVerified if available
  //     };
  //     return session;
  //   },
  // },
  // In your [...nextauth] route file

  callbacks: {
    async jwt({ token, user }) {
      // On initial sign-in, the `user` object from the `authorize` function is available.
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.company = user.company; // Add company object to token
        token.plan = user.plan; // Add plan name to token
        // Standard JWT claims like name, email, and picture are often handled automatically,
        // but explicitly setting them is fine too.
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      // The `session` callback receives the token with our custom data.
      // We transfer it to the session.user object to send to the client.
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role; // Add role
        session.user.company = token.company; // Add company
        session.user.plan = token.plan; // Add plan
        // Ensure other properties are also passed if needed
        session.user.name = token.name ?? "";
        session.user.email = token.email ?? "";
        session.user.image = token.image as string | null;
      }
      return session;
    },
  },
});
