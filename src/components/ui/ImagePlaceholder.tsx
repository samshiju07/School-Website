"use client";

import React from "react";
import { Image as ImageIcon, Camera, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  label?: string;
  sublabel?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "3/4" | "auto" | string;
  variant?: "default" | "portrait" | "hero" | "card" | "avatar";
  icon?: React.ReactNode;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt = "School image",
  label = "Add School Image",
  sublabel = "Click or replace with actual asset",
  aspectRatio = "16/9",
  variant = "default",
  icon,
  className,
  ...props
}) => {
  // Map standard aspect ratio classes
  const aspectClasses: Record<string, string> = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
    "3/4": "aspect-[3/4]",
    auto: "aspect-auto",
  };

  const currentAspectClass = aspectClasses[aspectRatio] || "aspect-video";

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-slate-200 shadow-xs group",
          currentAspectClass,
          className
        )}
        {...props}
      >
        {/* eslint-disable-next-html-element-suppression */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 text-white p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:border-amber-500/80 hover:shadow-lg shadow-xs select-none",
        currentAspectClass,
        variant === "avatar" && "rounded-full border-solid aspect-square p-2",
        className
      )}
      {...props}
    >
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

      {/* Center Icon & Labels */}
      <div className="relative z-10 flex flex-col items-center space-y-2 group-hover:scale-105 transition-transform">
        <div className="p-3 bg-amber-500/15 text-amber-400 rounded-2xl border border-amber-500/30 shadow-xs">
          {icon || (variant === "portrait" || variant === "avatar" ? (
            <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
          ))}
        </div>

        <span className="text-xs sm:text-sm font-bold font-heading text-slate-100 tracking-wide">
          {label}
        </span>

        {sublabel && variant !== "avatar" && (
          <span className="text-[11px] text-slate-400 font-normal max-w-[200px] leading-tight">
            {sublabel}
          </span>
        )}
      </div>

      {/* Corner Placeholder Tag */}
      {variant !== "avatar" && (
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-semibold text-amber-400 border border-slate-700/60 backdrop-blur-xs">
          Asset Slot
        </div>
      )}
    </div>
  );
};
