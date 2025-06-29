"use client";
import { SessionProvider } from "next-auth/react";
interface SessionProviderProps {
  children: React.ReactNode;
  session?: any;
}
export const MySessionProvider = ({
  children,
  session,
}: SessionProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
