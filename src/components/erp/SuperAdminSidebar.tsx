"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname, redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  UserCog,
  Settings as SettingsIcon,
  ChevronLeft,
  ChevronRight,
  Wrench,
  FolderOpen,
  Bot,
  Globe,
  Palette,
  ChartNoAxesCombined,
  Building2Icon,
  LogOutIcon,
} from "lucide-react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    url: "/dashboard",
  },
  { id: "company", label: "Company", icon: Building2Icon, url: "/company" },
  { id: "projects", label: "Projects", icon: FolderOpen, url: "/projects" },
  { id: "inventory", label: "Inventory", icon: Package, url: "/inventory" },
  { id: "services", label: "Services", icon: Wrench, url: "/services" },
  { id: "orders", label: "Orders", icon: ShoppingCart, url: "/orders" },
  { id: "customers", label: "Customers", icon: Users, url: "/customers" },
  {
    id: "accounting",
    label: "Accounting",
    icon: ChartNoAxesCombined,
    url: "/accounting",
  },
  {
    id: "users",
    label: "Staff",
    icon: UserCog,
    url: "/workforce",
  },
  {
    id: "ai-content",
    label: "AI Content & SEO",
    icon: Bot,
    url: "/ai-content",
  },
  {
    id: "domain-website",
    label: "Business Website",
    icon: Globe,
    url: "/business-website",
  },
  {
    id: "website-templates",
    label: "Website Templates",
    icon: Palette,
    url: "/website-templates",
  },
  { id: "settings", label: "Settings", icon: SettingsIcon, url: "/settings" },
];

export const SuperAdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const activeSection =
    menuItems.find((item) => item.url === pathname)?.id ?? null;

  if (!session?.user) {
    return redirect("/auth");
  }

  return (
    <div
      className={cn(
        "bg-slate-900 text-white transition-all duration-300 flex flex-col min-h-full",
        isCollapsed ? "w-20" : "w-76"
      )}
    >
      {/* Header */}
      <div className="w-full p-4 border-b border-slate-700 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="text-xl font-bold">On-Target Brands ERP</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-slate-700 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-10 h-10" />
          ) : (
            <ChevronLeft className="w-10 h-10" />
          )}
        </button>
      </div>

      {/* Profile */}
      {!isCollapsed && (
        <div className="border-t border-slate-700">
          <div className="w-76 h-24 hover:bg-slate-200 hover:text-black">
            <Link
              href="/profile"
              className="block w-full rounded-xl px-4 pt-4 hover:text-black"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full border-4 border-white overflow-hidden">
                  {/* unoptimized: session.user.image is user-supplied, so it
                      must not be proxied through the image optimizer. */}
                  <Image
                    className="object-cover w-full h-full"
                    src={
                      session.user.image ||
                      "https://robohash.org/testuser?size=300x300&set=set3&bgset=bg2"
                    }
                    alt="avatar"
                    width={64}
                    height={64}
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <p className="truncate text-lg font-medium">
                    {session.user.name}
                  </p>
                  <p className="truncate text-sm">{session.user.email}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 w-full">
        <ul className="space-y-2 w-full">
          {menuItems.map(({ id, label, icon: Icon, url }) => (
            <li key={id} className="w-full">
              <Link
                href={url}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors",
                  activeSection === id
                    ? "bg-slate-300 text-slate-900"
                    : "text-white hover:bg-slate-700"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{label}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 w-full mt-2">
          <li className="w-full">
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-white hover:bg-slate-700 transition-colors"
            >
              <LogOutIcon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">Sign out</span>}
            </button>
          </li>
        </ul>
        {/* Role-Specific Menus */}
        <div className="mt-6">
          {session.user.role === "SUPER_ADMIN" && (
            <>
              <h2 className="font-semibold pl-4 text-xl">Super Admin Menu</h2>
              <ul className="space-y-2 w-full p-4">
                <li className="text-white text-md hover:text-amber-200">
                  <Link href="/models-manager">Manage Models</Link>
                </li>
              </ul>
            </>
          )}

          {session.user.role === "ADMIN" && (
            <>
              <h2 className="font-semibold pl-4 text-xl">Admin Menu</h2>
              <ul className="space-y-2 w-full p-4">
                <li className="text-white text-md hover:text-amber-200">
                  <Link href="/manage">Manage</Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
