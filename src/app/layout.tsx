import type { Metadata } from "next";
import { MySessionProvider } from "@/components/auth/SessionProvider";
import { auth } from "@/auth";
import "./globals.css";

export const metadata: Metadata = {
  title: "ERP System",
  description: "Company and Project Management App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // gets server-side session (or null)

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MySessionProvider session={session}>{children}</MySessionProvider>
      </body>
    </html>
  );
}
