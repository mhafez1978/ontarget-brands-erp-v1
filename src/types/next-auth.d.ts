import { DefaultSession, DefaultUser } from "next-auth";

// Fix: Use `number` instead of `decimal`
interface SubscriptionPlan {
  id: string;
  key: string;
  name: string;
  billingCycle: string;
  pricePerMonth: number;
  features: { key: string; label: string }[];
}

interface Company {
  id: string;
  name: string;
  slogan: string | null;
  category: string | null;
  type: string | null;
  logo: string | null;
  domain: string | null;
  phone: string | null;
  supportEmail: string | null;
  salesEmail: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;
  isActive: boolean;
  gmailConnected: boolean;
  office365Connected: boolean;
  subscriptionPlan: SubscriptionPlan | null;
  emailProvider: string | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      company: Company | null;
      email?: string | null;
      name?: string | null;
      image?: string | null;
      mfaEnabled?: boolean;
      mfaSecret?: string | null;
      mfaPending?: boolean;
      isActive?: boolean;
      lastLogin?: Date | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
      deletedAt?: Date | null;
      plan: string | null;
      subscriptionPlan: SubscriptionPlan | null;
      billingCycle: string | null;
      pricePerMonth: number | null;
      ownedCompanies: { id: string; name: string }[];
    } & DefaultSession["user"];
    mfaPending?: boolean; // ✅ Must be outside `user`
  }

  interface User extends DefaultUser {
    id: string;
    role: string;
    company: Company | null;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    mfaEnabled?: boolean;
    mfaSecret?: string | null;
    mfaPending?: boolean;
    isActive?: boolean;
    lastLogin?: Date | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    plan: string | null;
    subscriptionPlan: SubscriptionPlan | null;
    billingCycle: string | null;
    pricePerMonth: number | null;
    ownedCompanies: { id: string; name: string }[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email?: string;
    name?: string;
    image?: string | null;
    company?: Company | null;
    subscriptionPlan?: SubscriptionPlan | null;
    billingCycle?: string | null;
    pricePerMonth?: number | null;
    plan?: string | null;
    ownedCompanies?: { id: string; name: string }[];
    createdAt?: Date | null;
    updatedAt?: Date | null;
    lastLogin?: Date | null;
    mfaEnabled?: boolean;
    mfaSecret?: string | null;
    mfaPending?: boolean;
    role: string;
    isActive?: boolean;
    deletedAt?: Date | null;
  }
}

declare module "next-auth/providers/credentials" {
  interface Credentials {
    email: string;
    password: string;
  }
}

declare module "next-auth/providers" {
  interface Provider {
    credentials?: {
      email: { label: string; type: string };
      password: { label: string; type: string };
    };
  }
}

declare module "next-auth/core/types" {
  interface NextAuthConfig {
    providers?: Provider[];
    callbacks?: {
      jwt?: (token: JWT, user?: User) => Promise<JWT>;
      session?: (session: Session, token: JWT) => Promise<Session>;
    };
  }
}
