"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import {
  GraduationCap,
  Lock,
  Mail,
  UserCheck,
  ArrowRight,
  Sparkles,
  Search,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Key,
} from "lucide-react";

export default function StudentLoginPage() {
  const router = useRouter();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("aarav.sharma@example.com");
  const [password, setPassword] = useState("••••••••••••");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate navigation to /student/dashboard
      router.push("/student/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Student & Parent Portal Login"
          subtitle="Access your admission status, academic profile, fee receipts, and circulars. Frontend Prototype UI."
          categoryBadge="Student Portal"
          breadcrumbs={[{ label: "Student Login" }]}
        />

        <div className="max-w-md mx-auto px-4 sm:px-6 space-y-8 pt-12">
          {/* Main Login Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            {/* School Logo & Title */}
            <div className="text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <GraduationCap className="w-8 h-8 text-slate-950" />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold font-heading text-slate-900">
                  DELHI HERITAGE
                </h2>
                <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase">
                  STUDENT & PARENT PORTAL
                </span>
              </div>

              <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Frontend UI Demo — No Backend Auth</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <Input
                label="Registered Email or Mobile Phone"
                placeholder="email@example.com or +91 98765 43210"
                required
                leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                required
                leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Remember Me & Forgot Password Row */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
                  />
                  <span>Remember Me</span>
                </label>

                <button
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-amber-700 hover:text-amber-800 font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Action Button */}
              <Button
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                isLoading={isLoading}
                leftIcon={<Sparkles className="w-5 h-5" />}
              >
                Sign In to Dashboard (Demo)
              </Button>
            </form>

            {/* Navigation Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-center text-xs">
              <div className="text-slate-600 font-medium">
                New Applicant?{" "}
                <Link
                  href="/admission/apply"
                  className="text-amber-700 font-bold hover:underline"
                >
                  Start Admission Application →
                </Link>
              </div>

              <div className="text-slate-600 font-medium">
                Already Applied?{" "}
                <Link
                  href="/admission/status"
                  className="text-amber-700 font-bold hover:underline"
                >
                  Check Application Status →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Forgot Password Demo Modal */}
      <Modal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        title="Password Reset Request"
        description="Demo password recovery form."
      >
        <div className="space-y-4">
          <Input label="Registered Mobile Number" placeholder="+91 98765 43210" required />
          <Button
            variant="gold"
            fullWidth
            onClick={() => {
              alert("OTP reset link sent to mobile phone (Demo).");
              setIsForgotPasswordOpen(false);
            }}
          >
            Send OTP Reset Code
          </Button>
        </div>
      </Modal>

      {/* Admission Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry"
        description="Quick application portal."
      >
        <div className="space-y-4">
          <Input label="Student Name" required />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
