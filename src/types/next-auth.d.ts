// file: types/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Define the shape of the company and subscription plan for clarity
interface SubscriptionPlan {
  id: string;
  name: string;
}

interface Company {
  id: string;
  name: string;
  subscriptionPlan: SubscriptionPlan;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: string; // Your custom role
      company: Company | null; // Your custom company object
      plan: string | null; // Your custom plan name
    } & DefaultSession["user"]; // Keep the default properties
  }

  // Extend the default User model if needed, but Session is more important for client-side
  interface User {
    role: string;
    company: Company | null;
    plan: string | null;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and sent to the `session` callback */
  interface JWT {
    id: string;
    role: string;
    company: Company | null;
    plan: string | null;
  }
}
