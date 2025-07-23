// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcryptjs";
// import { headers } from "next/headers";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials || {};

//         if (!email || !password) {
//           throw new Error("Email and password are required");
//         }

//         const user = await prisma.user.findUnique({
//           where: { email: String(email) },
//           select: {
//             id: true,
//             email: true,
//             name: true,
//             role: true,
//             image: true,
//             password: true,
//             mfaEnabled: true,
//             mfaSecret: true,
//             ownedCompanies: {
//               select: {
//                 id: true,
//                 name: true,
//               },
//             },
//             isActive: true,
//             lastLogin: true,
//             createdAt: true,
//             updatedAt: true,
//             deletedAt: true,
//             company: {
//               select: {
//                 id: true,
//                 name: true,
//                 slogan: true,
//                 category: true,
//                 type: true,
//                 logo: true,
//                 domain: true,
//                 phone: true,
//                 supportEmail: true,
//                 salesEmail: true,
//                 addressLine1: true,
//                 addressLine2: true,
//                 city: true,
//                 state: true,
//                 zipCode: true,
//                 country: true,
//                 emailProvider: true,
//                 gmailConnected: true,
//                 office365Connected: true,
//                 ownerId: true,
//                 isActive: true,
//                 subscriptionPlan: {
//                   select: {
//                     id: true,
//                     key: true,
//                     name: true,
//                     billingCycle: true,
//                     pricePerMonth: true,
//                   },
//                 },
//                 createdAt: true,
//                 updatedAt: true,
//                 deletedAt: true,
//               },
//             },
//           },
//         });

//         if (!user || !user.password) {
//           throw new Error("No user found with the provided email");
//         }

//         const isValid = await bcrypt.compare(
//           String(password),
//           String(user.password)
//         );

//         if (!isValid) {
//           throw new Error("Incorrect password");
//         }

//         let planDetails = null;
//         if (user?.company?.subscriptionPlan?.id) {
//           planDetails = await prisma.subscriptionPlan.findFirst({
//             where: {
//               id: user.company.subscriptionPlan.id,
//             },
//             select: {
//               id: true,
//               key: true,
//               name: true,
//               billingCycle: true,
//               pricePerMonth: true,
//             },
//           });
//         }

//         await prisma.user.update({
//           where: { id: user.id },
//           data: { lastLogin: new Date() },
//         });

//         const { password: _password, ...userWithoutPassword } = user;

//         const companyWithFullPlan = user.company
//           ? {
//               ...user.company,
//               subscriptionPlan: user.company.subscriptionPlan
//                 ? {
//                     ...user.company.subscriptionPlan,
//                     billingCycle:
//                       planDetails?.billingCycle ??
//                       user.company.subscriptionPlan.billingCycle,
//                     pricePerMonth:
//                       planDetails?.pricePerMonth !== undefined &&
//                       planDetails?.pricePerMonth !== null
//                         ? Number(planDetails.pricePerMonth)
//                         : user.company.subscriptionPlan.pricePerMonth !==
//                             undefined &&
//                           user.company.subscriptionPlan.pricePerMonth !== null
//                         ? Number(user.company.subscriptionPlan.pricePerMonth)
//                         : 0,
//                   }
//                 : null,
//             }
//           : null;

//         if (user.mfaEnabled && user.mfaSecret) {
//           // Return a full user object with an extra mfaPending flag for session/callbacks
//           return {
//             ...userWithoutPassword,
//             company: companyWithFullPlan,
//             ownedCompanies: user.ownedCompanies ?? [],
//             plan: null,
//             pricePerMonth:
//               companyWithFullPlan?.subscriptionPlan?.pricePerMonth !==
//                 undefined &&
//               companyWithFullPlan?.subscriptionPlan?.pricePerMonth !== null
//                 ? companyWithFullPlan?.subscriptionPlan?.pricePerMonth
//                 : 0,
//             billingCycle:
//               companyWithFullPlan?.subscriptionPlan?.billingCycle !==
//                 undefined &&
//               companyWithFullPlan?.subscriptionPlan?.billingCycle !== null
//                 ? String(companyWithFullPlan.subscriptionPlan.billingCycle)
//                 : null,
//             mfaPending: true,
//             subscriptionPlan: companyWithFullPlan?.subscriptionPlan ?? null,
//           };
//         }

//         return {
//           ...userWithoutPassword,
//           company: companyWithFullPlan,
//           ownedCompanies: user.ownedCompanies ?? [],
//           plan: null,
//           pricePerMonth:
//             companyWithFullPlan?.subscriptionPlan?.pricePerMonth !== undefined
//               ? companyWithFullPlan?.subscriptionPlan?.pricePerMonth
//               : null,
//           subscriptionPlan: companyWithFullPlan?.subscriptionPlan ?? null,
//           billingCycle:
//             companyWithFullPlan?.subscriptionPlan?.billingCycle !== undefined &&
//             companyWithFullPlan?.subscriptionPlan?.billingCycle !== null
//               ? String(companyWithFullPlan.subscriptionPlan.billingCycle)
//               : null,
//         };
//       },
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
//   trustHost: true,
//   pages: {
//     signIn: "/auth",
//   },

//   session: {
//     strategy: "jwt",
//     maxAge: 60 * 60 * 24 * 7,
//   },

//   jwt: {
//     maxAge: 60 * 60 * 24 * 7,
//   },

// callbacks: {
//   async jwt({ token, user }: { token: any; user?: any }) {
//     if (user) {
//       // Initial login
//       token.id = user.id;
//       token.email = user.email ?? "";
//       token.name = user.name ?? "";
//       token.image = user.image;
//       token.role = user.role;
//       token.company = user.company;
//       token.subscriptionPlan = user.subscriptionPlan ?? null;
//       token.billingCycle = user.billingCycle ?? null;
//       token.pricePerMonth = user.pricePerMonth ?? null;
//       token.plan = user.plan ?? null;
//       token.ownedCompanies = user.ownedCompanies ?? [];
//       token.createdAt = user.createdAt ?? null;
//       token.updatedAt = user.updatedAt ?? null;
//       token.lastLogin = user.lastLogin ?? null;
//       token.mfaEnabled = user.mfaEnabled ?? false;
//       token.mfaSecret = user.mfaSecret ?? null;
//       token.mfaPending = user.mfaPending ?? false;
//     } else {
//       // Post-login: check for MFA verification cookie
//       const headersObj = await headers();
//       const cookieHeader = headersObj.get("cookie") || "";
//       const mfaVerified = cookieHeader.includes("mfa-verified=true");

//       if (mfaVerified && token.mfaPending) {
//         token.mfaPending = false;
//       }
//     }

//     return token;
//   },

//     async session({ session, token }: any) {
//       session.user.id = token.id as string;
//       session.user.name = token.name ?? "";
//       session.user.email = token.email ?? "";
//       session.user.image = token.image as string | null;
//       session.user.role = token.role;
//       session.user.company = token.company ?? null;
//       session.user.plan = token.plan ?? null;
//       session.user.subscriptionPlan = token.subscriptionPlan ?? null;
//       session.user.billingCycle = token.billingCycle ?? null;
//       session.user.pricePerMonth = token.pricePerMonth ?? null;
//       session.user.ownedCompanies = token.ownedCompanies ?? [];
//       session.user.createdAt = token.createdAt ?? null;
//       session.user.updatedAt = token.updatedAt ?? null;
//       session.user.lastLogin = token.lastLogin ?? null;
//       session.user.mfaEnabled = token.mfaEnabled ?? false;
//       session.user.mfaSecret = token.mfaSecret ?? null;
//       session.mfaPending = token.mfaPending ?? false;

//       console.log(
//         "########. Session created:",
//         JSON.stringify(session, null, 2)
//       );

//       return session;
//     },
//   },
// });

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";

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
          where: { email: String(email) },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            image: true,
            password: true,
            mfaEnabled: true,
            mfaSecret: true,
            ownedCompanies: {
              select: {
                id: true,
                name: true,
              },
            },
            isActive: true,
            lastLogin: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
            company: {
              select: {
                id: true,
                name: true,
                slogan: true,
                category: true,
                type: true,
                logo: true,
                domain: true,
                phone: true,
                supportEmail: true,
                salesEmail: true,
                addressLine1: true,
                addressLine2: true,
                city: true,
                state: true,
                zipCode: true,
                country: true,
                emailProvider: true,
                gmailConnected: true,
                office365Connected: true,
                ownerId: true,
                isActive: true,
                subscriptionPlan: {
                  select: {
                    id: true,
                    key: true,
                    name: true,
                    billingCycle: true,
                    pricePerMonth: true,
                  },
                },
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
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

        let planDetails = null;
        if (user?.company?.subscriptionPlan?.id) {
          planDetails = await prisma.subscriptionPlan.findFirst({
            where: {
              id: user.company.subscriptionPlan.id,
            },
            select: {
              id: true,
              key: true,
              name: true,
              billingCycle: true,
              pricePerMonth: true,
            },
          });
        }

        await prisma.user.update({
          where: { id: user.id },
          data: { lastLogin: new Date() },
        });

        const { password: _password, ...userWithoutPassword } = user;

        const companyWithFullPlan = user.company
          ? {
              ...user.company,
              subscriptionPlan: user.company.subscriptionPlan
                ? {
                    ...user.company.subscriptionPlan,
                    billingCycle:
                      planDetails?.billingCycle ??
                      user.company.subscriptionPlan.billingCycle,
                    pricePerMonth:
                      planDetails?.pricePerMonth !== undefined &&
                      planDetails?.pricePerMonth !== null
                        ? Number(planDetails.pricePerMonth)
                        : user.company.subscriptionPlan.pricePerMonth !==
                            undefined &&
                          user.company.subscriptionPlan.pricePerMonth !== null
                        ? Number(user.company.subscriptionPlan.pricePerMonth)
                        : 0,
                  }
                : null,
            }
          : null;

        return {
          ...userWithoutPassword,
          company: companyWithFullPlan,
          ownedCompanies: user.ownedCompanies ?? [],
          plan: null,
          pricePerMonth:
            companyWithFullPlan?.subscriptionPlan?.pricePerMonth ?? null,
          billingCycle:
            companyWithFullPlan?.subscriptionPlan?.billingCycle ?? null,
          subscriptionPlan: companyWithFullPlan?.subscriptionPlan ?? null,
          mfaEnabled: user.mfaEnabled,
          mfaSecret: user.mfaSecret,
          mfaPending: user.mfaEnabled && user.mfaSecret ? true : false,
        };
      },
    }),
  ],

  secret: process.env.AUTH_SECRET,
  trustHost: true,
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
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        // First login
        token.id = user.id;
        token.email = user.email ?? "";
        token.name = user.name ?? "";
        token.image = user.image ?? null;
        token.role = user.role ?? null;
        token.company = user.company ?? null;
        token.subscriptionPlan = user.subscriptionPlan ?? null;
        token.billingCycle = user.billingCycle ?? null;
        token.pricePerMonth = user.pricePerMonth ?? null;
        token.plan = user.plan ?? null;
        token.ownedCompanies = user.ownedCompanies ?? [];
        token.createdAt = user.createdAt ?? null;
        token.updatedAt = user.updatedAt ?? null;
        token.lastLogin = user.lastLogin ?? null;
        token.mfaEnabled = user.mfaEnabled ?? false;
        token.mfaSecret = user.mfaSecret ?? null;
        token.mfaPending = user.mfaPending ?? false;
      } else {
        // Re-check for MFA cookie
        const headersObj = await headers();
        const cookieHeader = headersObj.get("cookie") || "";
        const mfaVerified = cookieHeader.includes("mfa-verified=true");

        if (mfaVerified && token.mfaPending) {
          token.mfaPending = false;
        }
      }

      return token;
    },

    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.name = token.name ?? "";
      session.user.email = token.email ?? "";
      session.user.image = token.image ?? null;
      session.user.role = token.role ?? null;
      session.user.company = token.company ?? null;
      session.user.plan = token.plan ?? null;
      session.user.subscriptionPlan = token.subscriptionPlan ?? null;
      session.user.billingCycle = token.billingCycle ?? null;
      session.user.pricePerMonth = token.pricePerMonth ?? null;
      session.user.ownedCompanies = token.ownedCompanies ?? [];
      session.user.createdAt = token.createdAt ?? null;
      session.user.updatedAt = token.updatedAt ?? null;
      session.user.lastLogin = token.lastLogin ?? null;
      session.user.mfaEnabled = token.mfaEnabled ?? false;
      session.user.mfaSecret = token.mfaSecret ?? null;

      // ✅ Key for frontend to redirect to /auth/otp
      session.mfaPending = token.mfaPending ?? false;

      return session;
    },
  },
});
