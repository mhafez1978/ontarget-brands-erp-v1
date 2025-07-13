// lib/toast.ts
import React from "react";
import { toast } from "sonner";
import { CheckCircle, XCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

export function showToast(
  type: ToastType,
  title: string,
  description?: string
): void {
  const iconMap = {
    success: React.createElement(CheckCircle, {
      className: "text-green-600 h-5 w-5",
    }),
    error: React.createElement(XCircle, { className: "text-red-600 h-5 w-5" }),
    info: React.createElement(Info, { className: "text-blue-600 h-5 w-5" }),
  };

  toast(title, {
    description,
    icon: iconMap[type],
    duration: 4000,
  });
}
