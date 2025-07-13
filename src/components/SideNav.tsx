"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SideNavProps = {
  children: React.ReactNode | ((open: boolean) => React.ReactNode);
};

export default function SideNav({ children }: SideNavProps) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`h-screen bg-slate-800 border-r border-gray-200 shadow-sm transition-all duration-300 ${
        open ? "w-75" : "w-16"
      } flex flex-col`}
    >
      {/* Toggle */}
      <div className="flex justify-between items-center p-4 border-b">
        <span
          className={`text-lg font-semibold transition-opacity ${
            open ? "opacity-100" : "opacity-0 w-0"
          }`}
        >
          Menu
        </span>
        <button onClick={() => setOpen(!open)} className="p-1">
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Menu content */}
      <nav className="flex-1 p-2 space-y-1">
        {/* Allow children to adapt to `open` state */}
        {typeof children === "function" ? children(open) : children}
      </nav>
    </aside>
  );
}
