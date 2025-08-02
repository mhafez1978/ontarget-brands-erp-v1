import Link from "next/link";
import React from "react";

export const MenuItem = ({
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
}) => {
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

  if (href === "/signout") {
    return (
      <div className="mt-6 bottom-32 ">
        <button
          onClick={onClick}
          className={`w-full flex items-center p-2 rounded hover:text-emerald-600 ${className}`}
        >
          {content}
        </button>
      </div>
    );
  }

  return (
    <Link
      href={href ?? "#"}
      className={`flex flex-row items-center w-full p-2 ${className}`}
    >
      {content}
    </Link>
  );
};
