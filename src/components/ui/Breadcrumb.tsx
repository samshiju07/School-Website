"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbsProps } from "@/types";

export const Breadcrumb: React.FC<BreadcrumbsProps> = ({
  items,
  homeHref = "/",
}) => {
  return (
    <nav aria-label="Breadcrumb" className="py-2 px-1">
      <ol className="flex items-center space-x-2 text-sm text-slate-600 flex-wrap">
        <li>
          <Link
            href={homeHref}
            className="flex items-center text-slate-500 hover:text-amber-600 transition-colors p-1 rounded-md hover:bg-slate-100"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="font-semibold text-amber-700 dark:text-amber-400 truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 transition-colors p-1 rounded-md hover:bg-slate-100 font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
