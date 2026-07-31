"use client";

import React from "react";
import Image from "next/image";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  UsersRound,
  Globe,
  Bot,
  FolderKanban,
  Package,
  Handshake,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Receipt,
  ClipboardList,
  CircleUserRound,
  ShieldUser,
  Clock,
  Target,
} from "lucide-react";

import { MenuItem } from "@/components/ui/MenuItem";

// Icon mapping
const allMenuIcons: Record<string, React.ElementType> = {
  Dashboard: LayoutDashboard,
  Profile: CircleUserRound,
  Company: Building2,
  Staff: Users,
  Products: Package,
  Services: Handshake,
  Projects: FolderKanban,
  Customers: UsersRound,
  Orders: ClipboardList,
  Invoices: Receipt,
  Reports: BarChart3,
  Settings,
  "Hosting Settings": Globe,
  "Ai Settings": Bot,
  "Ai Optimize": Bot,
  Website: Globe,
  "Clock In/Out": Clock,
  Inbox: Bot,
  "Assigned Tasks": FolderKanban,
  "SuperAdmin Menu": ShieldUser,
  "Admin Menu": ShieldUser,
  "Manager Menu": ShieldUser,
  "Customer Menu": ShieldUser,
  Signout: LogOut,
} as const;

// Route mapping
const routeMap: Record<string, string> = {
  Dashboard: "/dashboard",
  Profile: "/profile",
  Company: "/company",
  Staff: "/workforce",
  Products: "/inventory",
  Services: "/services",
  Projects: "/projects",
  Customers: "/customers",
  Orders: "/orders",
  Invoices: "/invoices",
  Reports: "/accounting",
  Settings: "/settings",
  "Hosting Settings": "/admin/settings/hosting",
  "Ai Settings": "/admin/settings/ai",
  "Ai Optimize": "/ai-content",
  Website: "/business-website",
  "Clock In/Out": "/time-tracking",
  Inbox: "/inbox",
  "Assigned Tasks": "/project/assigned/tasks",
  "SuperAdmin Menu": "/models-manager",
  "Admin Menu": "/admin/dashboard",
  "Manager Menu": "/manager/dashboard",
  "Customer Menu": "/customer/dashboard",
  Signout: "/signout",
};

// Base menus per role
const baseMenuConfig: Record<string, string[]> = {
  ADMIN: [
    "Dashboard",
    "Profile",
    "Company",
    "Staff",
    "Products",
    "Services",
    "Customers",
    "Orders",
    "Invoices",
    "Admin Menu",
    "Settings",
  ],
  MANAGER: [
    "Dashboard",
    "Profile",
    "Customers",
    "Orders",
    "Manager Menu",
    "Settings",
  ],
  STAFF: [
    "Dashboard",
    "Profile",
    "Clock In/Out",
    "Inbox",
    "Orders",
    "Assigned Tasks",
    "Settings",
  ],
  SUPER_ADMIN: [
    "Dashboard",
    "Profile",
    "Company",
    "Staff",
    "Products",
    "Services",
    "Projects",
    "Customers",
    "Orders",
    "Invoices",
    "Reports",
    "Settings",
    "Hosting Settings",
    "Ai Settings",
    "SuperAdmin Menu",
  ],
  GUEST: ["Dashboard", "Profile", "Inbox", "Signout"],

  // New roles:
  ERP_CUSTOMER: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  COMPANY_CUSTOMER: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
};

// Optional plan-based extensions
const planExtensions: Record<string, Partial<Record<string, string[]>>> = {
  ADMIN: {
    standard: ["Website", "Ai Optimize", "Reports"],
    premium: ["Website", "Ai Optimize", "Reports", "Projects"],
  },
  MANAGER: {
    standard: ["Projects", "Invoices", "Reports"],
    premium: ["Projects", "Invoices", "Reports"],
  },
  ERP_CUSTOMER: {
    standard: ["Website"],
    premium: ["Website", "Ai Optimize"],
  },
};

const getMenuForUser = (role: string, plan?: string): string[] => {
  const base = baseMenuConfig[role] || ["Dashboard", "Profile"];
  const planKey = plan?.toLowerCase() || "starter";
  const extras = planExtensions[role]?.[planKey] || [];
  return [...new Set([...base, ...extras, "Signout"])];
};

const getIcon = (label: string) =>
  allMenuIcons[label as keyof typeof allMenuIcons] || LayoutDashboard;

const getHref = (label: string) => routeMap[label] || "/";

// Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  if (status === "loading") {
    return (
      <div className="text-center text-xl w-full min-h-screen flex justify-center items-center">
        Loading, please wait ...
      </div>
    );
  }

  if (!session?.user) {
    redirect("/auth");
    return null;
  }

  const role = session.user.role || "GUEST";
  const rawKey = session.user.company?.subscriptionPlan?.key || "";
  const match = rawKey.toLowerCase().match(/starter|standard|premium/);
  const plan = match?.[0] || "starter";

  const menuItems = getMenuForUser(role, plan);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="w-full h-12 top-0 flex flex-row items-center justify-between px-4 bg-[#484644] text-white">
        <div className="flex items-center gap-1">
          <Target size={32} color={"white"} />
          <h1 className="text-lg font-semibold">OnTarget ERP</h1>
        </div>
        {session.user.name && (
          <div className="flex items-center gap-2">
            <span className="text-sm">{session.user.name}</span>
            {/* unoptimized: the avatar URL is user-supplied, so it must not be
                proxied through the image optimizer (which would also require
                allowlisting arbitrary remote hosts). */}
            <Image
              src={
                session.user.image || `https://robohash.org/${session.user.id}`
              }
              alt="User Avatar"
              width={32}
              height={32}
              unoptimized
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}
      </div>

      {/* Sidebar + Content */}
      <div className="w-full flex flex-row max-h-screen">
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          }  pt-4 bg-[#e9e9e9] text-gray-900 font-semibold transition-all duration-200 ease-in-out flex flex-col h-screen max-h-screen overflow-hidden`}
        >
          {/* Toggle Button */}
          <div className="flex justify-end items-start px-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-md p-1"
            >
              {sidebarOpen ? (
                <ChevronLeft size={32} />
              ) : (
                <ChevronRight size={32} />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col overflow-hidden">
            {menuItems.map((label) => (
              <MenuItem
                key={label}
                icon={getIcon(label)}
                label={label}
                href={getHref(label)}
                open={sidebarOpen}
                onClick={
                  label === "Signout"
                    ? async () =>
                        await signOut({ redirect: true, callbackUrl: "/" })
                    : undefined
                }
                className="hover:bg-gray-50 hover:rounded hover:drop-shadow transition-colors"
              />
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full flex flex-col h-screen overflow-y-scroll bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
