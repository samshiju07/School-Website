"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PageHeaderProps } from "@/types";
import { Breadcrumb } from "./Breadcrumb";
import { Badge } from "./Badge";

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  categoryBadge,
  breadcrumbs,
  action,
}) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden py-14 lg:py-20 border-b border-amber-500/20">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && (
          <div className="mb-6 inline-block bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/50">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            {categoryBadge && (
              <Badge variant="gold" size="md" className="uppercase tracking-widest font-bold">
                {categoryBadge}
              </Badge>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                {subtitle}
              </p>
            )}
          </div>

          {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
        </div>
      </div>
    </div>
  );
};
