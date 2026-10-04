"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Award,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Search,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { cn } from "@/lib/utils";

export interface NavChildItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItemConfig {
  label: string;
  href: string;
  children?: NavChildItem[];
}

const mainNavigation: NavItemConfig[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Vision & Mission", href: "/about#vision", description: "Ethos and values guiding us" },
      { label: "Chairman's Message", href: "/about#chairman", description: "Leadership perspective" },
      { label: "Principal's Desk", href: "/principal", description: "Academic direction & message" },
      { label: "CBSE Mandatory Disclosure", href: "/about#disclosure", description: "Public compliance & affiliation" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Pre-Primary (Nursery - KG)", href: "/academics#pre-primary", description: "Play-way experiential learning" },
      { label: "Primary Wing (Class I - V)", href: "/academics#primary", description: "Foundational conceptual skills" },
      { label: "Middle Wing (Class VI - VIII)", href: "/academics#middle", description: "Analytical & project learning" },
      { label: "Senior Secondary (XI - XII)", href: "/academics#senior", description: "Science, Commerce & Humanities" },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Facilities", href: "/facilities" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process 2026-27", href: "/admissions", description: "Step-by-step registration" },
      { label: "Fee Structure", href: "/admissions#fee-structure", description: "Transparent annual fee schedule" },
      { label: "Eligibility & Age Criteria", href: "/admissions#eligibility", description: "Entry grade requirements" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC<{ onOpenApplyModal?: () => void }> = ({
  onOpenApplyModal,
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Institutional Info Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4 shrink-0">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>CBSE Affiliated No. 2130894</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-400" />
              <span>+91 (011) 2874-9000</span>
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1">
              <Mail className="w-3 h-3 text-slate-400" />
              <span>admissions@delhiheritage.edu.in</span>
            </span>
          </div>

          {/* Announcement Ticker */}
          <div className="flex items-center gap-2 overflow-hidden">
            <Badge variant="gold" size="sm" dot>
              ADMISSIONS OPEN 2026-27
            </Badge>
            <span className="text-slate-300 text-xs truncate max-w-xs sm:max-w-md">
              Registration open for Nursery to Class IX & XI. Entrance test on 25th Oct.
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          "w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md text-white border-slate-800 shadow-xl py-2.5"
            : "bg-slate-900 text-white border-slate-800 py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Placeholder & School Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors leading-snug">
                DELHI HERITAGE
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
                WORLD SCHOOL • NEW DELHI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden xl:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = pathname === item.href;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 uppercase tracking-wider",
                      isActive
                        ? "text-amber-400 bg-slate-800"
                        : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                    )}
                  >
                    <span>{item.label}</span>
                    {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="bg-slate-900 rounded-xl border border-slate-800 p-2 shadow-2xl space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block p-2 rounded-lg hover:bg-slate-800 transition-colors group/item"
                          >
                            <div className="text-xs font-bold text-slate-100 group-hover/item:text-amber-400">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-[11px] text-slate-400 mt-0.5 font-normal">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Apply Now CTA */}
          <div className="hidden xl:flex items-center space-x-2 shrink-0">
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Sparkles className="w-3.5 h-3.5" />}
              onClick={onOpenApplyModal}
              className="text-xs px-3 py-2"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center space-x-2">
            <Button
              variant="gold"
              size="sm"
              onClick={onOpenApplyModal}
              className="text-xs px-2.5 py-1.5"
            >
              Apply
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle main navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Responsive Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-3 max-h-[80vh] overflow-y-auto">
            {mainNavigation.map((item) => (
              <div key={item.label} className="space-y-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-200 hover:bg-slate-800 hover:text-white",
                    pathname === item.href && "text-amber-400 bg-slate-800"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 border-l border-slate-800 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-1.5 rounded-md text-xs font-medium text-slate-400 hover:text-amber-400 hover:bg-slate-800/40"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Button
                variant="gold"
                size="md"
                fullWidth
                leftIcon={<Sparkles className="w-4 h-4" />}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal?.();
                }}
              >
                Apply Now for Admissions 2026-27
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
