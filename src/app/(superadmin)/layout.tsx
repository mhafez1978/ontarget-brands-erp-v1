"use client";

import React from "react";
import { SuperAdminSidebar } from "@/components/erp/SuperAdminSidebar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../../app/globals.css";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function PortalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = useSession();
  return (
    <SessionProvider session={session.data}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50 flex">
          <Toaster />
          <Sonner />
          <SuperAdminSidebar />
          <main className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">{children}</div>
          </main>
        </div>
      </TooltipProvider>
    </SessionProvider>
  );
}
