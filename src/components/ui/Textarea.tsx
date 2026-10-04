"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { TextareaProps } from "@/types";
import { AlertCircle } from "lucide-react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      maxLength,
      required,
      id: customId,
      disabled,
      onChange,
      value,
      defaultValue,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = customId || generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    const [charCount, setCharCount] = useState<number>(
      typeof value === "string"
        ? value.length
        : typeof defaultValue === "string"
        ? defaultValue.length
        : 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-semibold text-slate-800 flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-amber-600 ml-1" title="Required">*</span>}
            </span>
            {maxLength && (
              <span className="text-xs text-slate-400 font-normal">
                {charCount}/{maxLength}
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/80 focus:border-amber-500 shadow-2xs disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed resize-y min-h-[90px]",
            error
              ? "border-rose-400 focus:ring-rose-400 text-rose-950 bg-rose-50/20"
              : "border-slate-300 hover:border-slate-400",
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";
