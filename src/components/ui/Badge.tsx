"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { BadgeProps } from "@/types";

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  size = "md",
  dot = false,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-semibold tracking-wide rounded-full border transition-colors";

  const variants = {
    primary:
      "bg-slate-100 text-slate-900 border-slate-300 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800",
    secondary:
      "bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
    gold:
      "bg-amber-50 text-amber-900 border-amber-300/80 shadow-xs dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-700/60",
    emerald:
      "bg-emerald-50 text-emerald-900 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-700/60",
    danger:
      "bg-rose-50 text-rose-900 border-rose-300/80 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-700/60",
    outline:
      "bg-transparent text-slate-700 border-slate-300 dark:text-slate-300 dark:border-slate-700",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const dotColors = {
    primary: "bg-slate-600 dark:bg-slate-400",
    secondary: "bg-slate-500",
    gold: "bg-amber-500 animate-pulse",
    emerald: "bg-emerald-500",
    danger: "bg-rose-500 animate-ping",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            dotColors[variant]
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};
