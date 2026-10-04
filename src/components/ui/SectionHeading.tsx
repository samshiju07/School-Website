"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeadingProps } from "@/types";
import { Badge } from "./Badge";

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={cn(
        "flex flex-col mb-12 max-w-3xl mx-auto px-4",
        alignmentClasses[align],
        className
      )}
    >
      {badge && (
        <Badge variant="gold" size="md" className="mb-3 uppercase tracking-wider font-bold">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>

      {/* Decorative Accent Line */}
      <div
        className={cn(
          "h-1 w-20 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-full my-4 shadow-xs",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />

      {subtitle && (
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mt-1 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
