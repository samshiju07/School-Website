"use client";

import React from "react";
import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-slate-50/70 border-2 border-dashed border-slate-200 rounded-2xl max-w-lg mx-auto my-6",
        className
      )}
      {...props}
    >
      <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl mb-4 border border-amber-200/60 shadow-xs">
        {icon || <FolderOpen className="w-10 h-10" />}
      </div>

      <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-slate-600 max-w-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {action && <div>{action}</div>}
    </div>
  );
};
