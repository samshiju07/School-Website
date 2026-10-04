"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Globe,
  Share2,
  Video,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Badge } from "../ui/Badge";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500 relative overflow-hidden">
      {/* Background Decorative Gradient Radial */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: School Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <GraduationCap className="w-7 h-7 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  DELHI HERITAGE
                </span>
                <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                  WORLD SCHOOL • NEW DELHI
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Delhi Heritage World School empowers students through academic rigor, moral integrity, modern STEM innovation, and rich Indian cultural values on a 15-acre green eco-campus.
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <Badge variant="gold" size="sm">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 inline" /> CBSE Affiliated #2130894
              </Badge>
              <Badge variant="emerald" size="sm">
                ISO 9001:2015 Certified
              </Badge>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3 max-w-sm">
              <label className="text-xs font-semibold text-slate-300 mb-1.5 block uppercase tracking-wider">
                Subscribe to Institutional Circulars
              </label>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter parent email address"
                  className="bg-slate-900 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
                <Button variant="gold" size="md" className="shrink-0 px-3">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-heading text-lg tracking-wide uppercase border-b border-amber-500/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Faculty Directory", href: "/faculty" },
                { label: "Campus Facilities", href: "/facilities" },
                { label: "Achievements & Awards", href: "/achievements" },
                { label: "Photo & Video Gallery", href: "/gallery" },
                { label: "Notice Board & Circulars", href: "/notices" },
                { label: "Contact Us", href: "/contact" },
                { label: "Component Gallery", href: "/components-demo" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-sm"
                  >
                    <span className="text-amber-500 text-xs transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics & Admissions Links */}
          <div className="space-y-6">
            {/* Academics Links */}
            <div className="space-y-3">
              <h4 className="text-white font-bold font-heading text-lg tracking-wide uppercase border-b border-amber-500/40 pb-2 inline-block">
                Academics
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Pre-Primary (Nursery - KG)", href: "/academics#pre-primary" },
                  { label: "Primary Wing (Grade I - V)", href: "/academics#primary" },
                  { label: "Middle Wing (Grade VI - VIII)", href: "/academics#middle" },
                  { label: "Secondary (Grade IX - X)", href: "/academics#secondary" },
                  { label: "Senior Secondary (XI - XII)", href: "/academics#senior" },
                  { label: "STEM & Robotics Lab", href: "/academics#stem" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-sm"
                    >
                      <span className="text-amber-500 text-xs transition-transform group-hover:translate-x-1">
                        ›
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions Links */}
            <div className="space-y-3 pt-2">
              <h4 className="text-white font-bold font-heading text-lg tracking-wide uppercase border-b border-amber-500/40 pb-2 inline-block">
                Admissions
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Admission Process 2026-27", href: "/admissions" },
                  { label: "Fee Structure", href: "/admissions#fee-structure" },
                  { label: "Eligibility & Age Criteria", href: "/admissions#eligibility" },
                  { label: "Download Prospectus PDF", href: "/admissions" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5 group text-sm"
                    >
                      <span className="text-amber-500 text-xs transition-transform group-hover:translate-x-1">
                        ›
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-heading text-lg tracking-wide uppercase border-b border-amber-500/40 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Sector 18, Heritage Expressway, Knowledge City, New Delhi - 110075</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 (011) 2874-9000 / 9001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>admissions@delhiheritage.edu.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>

            {/* Social Media Placeholders */}
            <div className="pt-3 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2">
                {[
                  { icon: <Globe className="w-4 h-4" />, label: "Website" },
                  { icon: <Share2 className="w-4 h-4" />, label: "Social Media" },
                  { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp Desk" },
                  { icon: <Video className="w-4 h-4" />, label: "YouTube Channel" },
                  { icon: <Send className="w-4 h-4" />, label: "Circulars" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href="#"
                    title={s.label}
                    aria-label={s.label}
                    className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all border border-slate-800"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar: Copyright, Privacy Policy, Terms & Conditions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Delhi Heritage World School. All Rights Reserved. CBSE Affiliated Institution.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about#disclosure" className="hover:text-slate-300 transition-colors">
              Mandatory Disclosure
            </Link>
            <Link href="/components-demo" className="hover:text-slate-300 transition-colors">
              Design Gallery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
