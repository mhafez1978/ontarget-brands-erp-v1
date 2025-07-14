"use client";

import React from "react";
import Link from "next/link";

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
