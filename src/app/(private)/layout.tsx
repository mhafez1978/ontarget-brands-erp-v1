"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Users,
  UsersRound,
  Boxes,
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
} from "lucide-react";

// Icon mapping
const allMenuIcons = {
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
  "Website/Store": Globe,
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
  "Website/Store": "/business-website",
  "Clock In/Out": "/time-tracking",
  Inbox: "/inbox",
  "Assigned Tasks": "/project/assigned/tasks",
  "SuperAdmin Menu": "/models-manager",
  "Admin Menu": "/admin/dashboard",
  "Manager Menu": "/manager/dashboard",
  "Customer Menu": "/customer/dashboard",
  Signout: "/signout",
};

// Role + Plan menu config
const menuConfig: Record<string, string[]> = {
  CUSTOMER_starter: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  CUSTOMER_standard: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  CUSTOMER_premium: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  ADMIN_starter: [
    "Dashboard",
    "Profile",
    "Company",
    "Staff",
    "Customers",
    "Orders",
    "Invoices",
    "Admin Menu",
    "Settings",
  ],
  ADMIN_standard: [
    "Dashboard",
    "Profile",
    "Company",
    "Staff",
    "Products",
    "Services",
    "Customers",
    "Orders",
    "Invoices",
    "Website/Store",
    "Ai Optimize",
    "Reports",
    "Admin Menu",
    "Settings",
  ],
  ADMIN_premium: [
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
    "Website/Store",
    "Ai Optimize",
    "Reports",
    "Admin Menu",
    "Settings",
  ],
  MANAGER_starter: [
    "Dashboard",
    "Profile",
    "Customers",
    "Orders",
    "Manager Menu",
    "Settings",
  ],
  MANAGER_standard: [
    "Dashboard",
    "Profile",
    "Projects",
    "Customers",
    "Orders",
    "Invoices",
    "Reports",
    "Manager Menu",
    "Settings",
  ],
  MANAGER_premium: [
    "Dashboard",
    "Profile",
    "Projects",
    "Customers",
    "Orders",
    "Invoices",
    "Reports",
    "Manager Menu",
    "Settings",
  ],
  STAFF_any: [
    "Dashboard",
    "Profile",
    "Clock In/Out",
    "Inbox",
    "Orders",
    "Assigned Tasks",
    "Settings",
  ],
  SUPER_ADMIN_any: [
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
  GUEST_any: ["Dashboard", "Profile", "Inbox", "Signout"],
};

// Helpers
const getIcon = (label: string) =>
  allMenuIcons[label as keyof typeof allMenuIcons] || LayoutDashboard;

const getHref = (label: string) => routeMap[label] || "/";

const getMenuForUser = (role: string, plan?: string): string[] =>
  menuConfig[`${role}_${plan?.toLowerCase()}`] ||
  menuConfig[`${role}_any`] || ["Dashboard"];

// Layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState("GUEST");
  const [planKey, setPlanKey] = useState("starter");

  useEffect(() => {
    if (session?.user) {
      setUserRole(session.user.role || "GUEST");

      const rawKey = session.user.company?.subscriptionPlan?.key || "";
      const match = rawKey.toLowerCase().match(/starter|standard|premium/);
      setPlanKey(match?.[0] || "starter");
    }
  }, [session]);

  if (status === "loading") return <div>Loading...</div>;
  if (!session?.user) {
    redirect("/auth");
    return null;
  }

  const menuItems = getMenuForUser(userRole, planKey);

  return (
    <div className="w-full flex min-h-screen">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-black text-white transition-all duration-200 ease-in-out flex flex-col`}
      >
        <div className="p-2 flex justify-end">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:text-gray-300"
          >
            {sidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((label) => (
            <MenuItem
              key={label}
              icon={getIcon(label)}
              label={label}
              href={getHref(label)}
              open={sidebarOpen}
            />
          ))}
          <MenuItem
            icon={LogOut}
            label="Signout"
            href="/signout"
            open={sidebarOpen}
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
          />
        </nav>
      </aside>

      <main className="flex-1 p-4 overflow-auto">{children}</main>
    </div>
  );
}

// MenuItem component
export function MenuItem({
  icon: Icon,
  label,
  href,
  open,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  open: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const content = (
    <>
      <Icon className="h-5 w-5" />
      <span
        className={`ml-3 text-sm whitespace-nowrap transition-all ${
          open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
        }`}
      >
        {label}
      </span>
    </>
  );

  return href === "/signout" ? (
    <button
      onClick={onClick}
      className="flex items-center w-full p-2 rounded hover:bg-gray-800 transition-colors"
    >
      {content}
    </button>
  ) : (
    <Link
      href={href ?? "#"}
      className="flex items-center w-full p-2 rounded hover:bg-gray-800 transition-colors"
    >
      {content}
    </Link>
  );
}
