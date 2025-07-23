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
  ChevronDown,
} from "lucide-react";

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
  Website: "/business-website",
  "Clock In/Out": "/time-tracking",
  Inbox: "/inbox",
  "Assigned Tasks": "/project/assigned/tasks",
  "SuperAdmin Menu": "/models-manager",
  "Admin Menu": "/admin/dashboard",
  "Manager Menu": "/manager/dashboard",
  "Customer Menu": "/customer/dashboard",
  Signout: "/signout",
} as const;

// no company yet

const menuConfigBase: Record<string, string[]> = {
  CUSTOMER_starter: ["Dashboard", "Profile", "Company", "Settings"],
};

// Role + Plan menu config
const menuConfig: Record<string, string[]> = {
  ERP_CUSTOMER_starter: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  ERP_CUSTOMER_standard: [
    "Dashboard",
    "Profile",
    "Company",
    "Orders",
    "Invoices",
    "Customer Menu",
    "Settings",
  ],
  ERP_CUSTOMER_premium: [
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
    "Products",
    "Services",
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
    "Website",
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
    "Website",
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
} as const;

// Helpers
const getIcon = (label: string) =>
  allMenuIcons[label as keyof typeof allMenuIcons] || LayoutDashboard;

const getHref = (label: string) => routeMap[label] || "/";

const getMenuForUser = (role: string, plan?: string): string[] =>
  menuConfig[`${role}_${plan?.toLowerCase()}`] ||
  menuConfig[`${role}_any`] || ["Dashboard", "Profile", "Company", "Settings"];

const getMenuForNewCustomer = (role: string, plan?: string): string[] =>
  menuConfigBase[`${role}_${plan?.toLowerCase()}`] ||
  menuConfigBase[`${role}_any`] || [
    "Dashboard",
    "Profile",
    "Company",
    "Settings",
  ];

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
  const [hasCompany, setHasCompany] = useState(false);

  if (status === "loading")
    return (
      <div className="text-center text-xl w-full min-h-screen flex justify-center items-center">
        Loading , please wait ...
      </div>
    );
  if (!session?.user) {
    redirect("/auth");
    return null;
  }
  const customerMenuItems = getMenuForNewCustomer(userRole, planKey);
  const menuItems = getMenuForUser(userRole, planKey);

  useEffect(() => {
    if (session?.user) {
      setUserRole(session.user.role || "GUEST");
      const rawKey = session.user.company?.subscriptionPlan?.key || "";
      const match = rawKey.toLowerCase().match(/starter|standard|premium/);
      setPlanKey(match?.[0] || "starter");
    }
  }, [session]);

  useEffect(() => {
    if (session.user.company) {
      setHasCompany(true);
    }
  }, [session]);

  return (
    <div className="w-full">
      <div className="w-full h-12 fixed top-0 flex flex-row items-center justify-between px-4 bg-[#484644] text-white z-40">
        <div className="flex items-center gap-1">
          <Target size={32} color={"white"} />
          <h1 className="text-lg font-semibold">OnTarget ERP</h1>
        </div>
        {session.user.name ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">{session.user.name}</span>
            <img
              src={
                session.user.image ||
                `https://robohash.org/${session.user.name} || https://robohash.org/${session.user.id} || https://robohash.org/robot`
              }
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-row min-h-screen mt-12">
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } pt-4 bg-[#e9e9e9] text-gray-900 font-semibold transition-all duration-200 ease-in-out flex flex-col`}
        >
          <div
            className={
              sidebarOpen
                ? "flex justify-end items-start"
                : "flex justify-end items-start mr-4"
            }
          >
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-md pt-1 pb-1 pl-1 pr-1"
            >
              {sidebarOpen ? (
                <ChevronLeft size={32} color={"black"} />
              ) : (
                <ChevronRight size={32} color={"black"} />
              )}
            </button>
          </div>
          {session.user.role === "COMPANY_CUSTOMER" && (
            <>
              <ul className="px-4">
                <li>customer menu item 1</li>
                <li>customer menu item 2</li>
                <li>customer menu item 3</li>
                <li>customer menu item 4</li>
              </ul>
              <MenuItem
                icon={LogOut}
                label="Signout"
                href="/signout"
                open={sidebarOpen}
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                className="hover:bg-gray-50 hover:rounded hover:drop-shadow transition-colors"
              />
            </>
          )}
          {session.user.role !== "COMPANY_CUSTOMER" && (
            <>
              <nav className="flex flex-col gap-4 px-2 pt-4">
                {session.user.company?.id ? (
                  <>
                    {menuItems.map((label) => (
                      <MenuItem
                        key={label}
                        icon={getIcon(label)}
                        label={label}
                        href={getHref(label)}
                        open={sidebarOpen}
                        className="hover:bg-gray-50 hover:rounded hover:drop-shadow transition-colors"
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {customerMenuItems.map((label) => (
                      <MenuItem
                        key={label}
                        icon={getIcon(label)}
                        label={label}
                        href={getHref(label)}
                        open={sidebarOpen}
                        className="hover:bg-gray-50 hover:rounded hover:drop-shadow transition-colors"
                      />
                    ))}
                  </>
                )}

                <MenuItem
                  icon={LogOut}
                  label="Signout"
                  href="/signout"
                  open={sidebarOpen}
                  onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                  className="hover:bg-gray-50 hover:rounded hover:drop-shadow transition-colors"
                />
              </nav>
            </>
          )}
        </aside>

        <main className="flex-1 h-screen overflow-y-scroll. bg-gray-50">
          {children}
        </main>
      </div>
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
  className,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  open: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) {
  const content = (
    <>
      <Icon className="h-6 w-6" />
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
      className="absolute bottom-8 flex items-center w-60 p-2 rounded"
    >
      {content}
    </button>
  ) : (
    <div className="flex items-center w-full">
      <Link
        href={href ?? "#"}
        className="flex flex-row items-center w-full p-2 rounded"
      >
        {content}
      </Link>
      <ChevronDown />
    </div>
  );
}
