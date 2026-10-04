"use client";

import React, { useId } from "react";
import { cn } from "@/lib/utils";
import { SelectProps } from "@/types";
import { ChevronDown, AlertCircle } from "lucide-react";

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      options,
      required,
      id: customId,
      disabled,
      placeholder = "Select an option",
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = customId || generatedId;
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;

    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-amber-600 ml-1" title="Required">*</span>}
            </span>
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full appearance-none rounded-xl border bg-white px-3.5 py-2.5 pr-10 text-sm text-slate-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 shadow-2xs disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer",
              error
                ? "border-rose-400 focus:ring-rose-400 text-rose-950 bg-rose-50/20"
                : "border-slate-300 hover:border-slate-400",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          <div className="absolute right-3.5 text-slate-400 pointer-events-none shrink-0">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {error && (
          <p id={errorId} className="text-xs text-rose-600 font-medium flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{error}</span>
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-xs text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
