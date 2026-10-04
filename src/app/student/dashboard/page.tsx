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
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import {
  GraduationCap,
  LogOut,
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  FileCheck,
  BellRing,
  Clock,
  CheckCircle2,
  Download,
  Printer,
  Sparkles,
  ShieldCheck,
  BookOpen,
} from "lucide-react";

export default function StudentDashboardPage() {
  const router = useRouter();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Mock Student Profile Data
  const studentProfile = {
    name: "Aarav Sharma",
    id: "SCH-2027-000123",
    grade: "Class XI - Science Stream (PCM + AI)",
    email: "aarav.sharma@example.com",
    parentName: "Vikram Sharma",
    parentPhone: "+91 98765 43210",
    dob: "April 12, 2011",
    status: "Under Review",
  };

  const handleLogout = () => {
    // Simulate logout and redirect back to login
    router.push("/student/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Header with Logout Button */}
        <PageHeader
          title={`Welcome, ${studentProfile.name}`}
          subtitle={`Student & Parent Portal • Application ID: ${studentProfile.id}`}
          categoryBadge="Student Dashboard (Demo)"
          breadcrumbs={[
            { label: "Student Login", href: "/student/login" },
            { label: "Dashboard" },
          ]}
          action={
            <Button
              variant="outline"
              size="md"
              className="text-white border-slate-700 hover:bg-rose-950 hover:text-rose-300 hover:border-rose-700"
              leftIcon={<LogOut className="w-4 h-4" />}
              onClick={handleLogout}
            >
              Sign Out / Logout
            </Button>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pt-12">
          {/* TOP BANNER NOTICE */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span>
                <strong>Frontend Demo Dashboard:</strong> Displaying mock application data for ID <code className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-amber-950 font-bold">{studentProfile.id}</code>.
              </span>
            </div>
            <Badge variant="gold" size="sm" dot>
              Application Under Review
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Student Profile & Application Progress */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. STUDENT PROFILE CARD */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-4">
                    <ImagePlaceholder
                      variant="avatar"
                      aspectRatio="1/1"
                      label="Photo"
                      className="w-16 h-16 shrink-0"
                    />
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-slate-900">
                        {studentProfile.name}
                      </h2>
                      <p className="text-xs text-amber-700 font-bold">
                        {studentProfile.grade}
                      </p>
                    </div>
                  </div>

                  <Badge variant="gold" size="md">
                    Reg ID: {studentProfile.id}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div><span className="text-slate-400 font-semibold">Date of Birth:</span> <strong>{studentProfile.dob}</strong></div>
                  <div><span className="text-slate-400 font-semibold">Registered Email:</span> <strong>{studentProfile.email}</strong></div>
                  <div><span className="text-slate-400 font-semibold">Parent / Guardian:</span> <strong>{studentProfile.parentName}</strong></div>
                  <div><span className="text-slate-400 font-semibold">Parent Mobile:</span> <strong>{studentProfile.parentPhone}</strong></div>
                </div>
              </div>

              {/* 2. APPLICATION STATUS & PROGRESS TIMELINE */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" /> Application Progress Status
                  </h3>
                  <Badge variant="gold" dot>
                    Under Review
                  </Badge>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Application Form Submitted", status: "completed", date: "Oct 04, 2026" },
                    { label: "Verification Documents Uploaded", status: "completed", date: "Oct 04, 2026" },
                    { label: "Application Fee Paid (₹500.00)", status: "completed", date: "Oct 04, 2026" },
                    { label: "Senior Academic Desk Review", status: "current", date: "In Progress" },
                    { label: "Final Admission Decision", status: "pending", date: "Expected Nov 05" },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-medium ${
                        step.status === "completed"
                          ? "bg-emerald-50/60 border-emerald-200 text-emerald-950"
                          : step.status === "current"
                          ? "bg-amber-50 border-amber-300 text-amber-950 font-bold"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : step.status === "current" ? (
                          <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 text-xs flex items-center justify-center font-extrabold animate-pulse">
                            ⏳
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 text-xs flex items-center justify-center">
                            ○
                          </span>
                        )}
                        <span>{step.label}</span>
                      </div>
                      <span className="text-xs font-semibold">{step.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. UPLOADED DOCUMENTS SECTION */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-amber-600" /> Uploaded Verification Documents
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  {[
                    { doc: "Student Passport Photograph", status: "Verified", file: "aarav_photo.png" },
                    { doc: "Official Birth Certificate", status: "Verified", file: "birth_cert.pdf" },
                    { doc: "Class X CBSE Mark Sheet", status: "Verified", file: "class_10_marksheet.pdf" },
                    { doc: "Aadhaar Card Address Proof", status: "Verified", file: "aadhaar_card.pdf" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">{item.doc}</div>
                        <div className="text-[11px] text-slate-500">{item.file}</div>
                      </div>
                      <Badge variant="emerald" size="sm">
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Payment Card, Important Dates & Notices */}
            <div className="lg:col-span-4 space-y-8">
              {/* PAYMENT STATUS CARD */}
              <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-amber-400" />
                    <h4 className="text-base font-bold font-heading text-white">Payment Status</h4>
                  </div>
                  <Badge variant="emerald" size="sm">
                    Paid ₹500
                  </Badge>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Receipt No:</span>
                    <strong className="text-white">RCP-2027-90214</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Date:</span>
                    <strong className="text-white">Oct 04, 2026</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Mode:</span>
                    <strong className="text-white">Online Gateway (Demo)</strong>
                  </div>
                </div>

                <Button
                  variant="gold"
                  size="sm"
                  fullWidth
                  leftIcon={<Download className="w-4 h-4" />}
                  onClick={() => alert("Downloading Payment Receipt PDF (Demo)...")}
                >
                  Download Payment Receipt
                </Button>
              </div>

              {/* IMPORTANT DATES */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-600" /> Important Dates
                </h4>

                <div className="space-y-3 text-xs">
                  {[
                    { date: "Oct 25, 2026", event: "Stream Entrance Assessment" },
                    { date: "Nov 05, 2026", event: "Merit List Declaration" },
                    { date: "Nov 20, 2026", event: "Document Submission Deadline" },
                  ].map((d, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">{d.event}</span>
                      <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {d.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NOTICES PREVIEW */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-base font-bold font-heading text-slate-900 flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-amber-600" /> Recent Notices
                </h4>

                <div className="space-y-3 text-xs">
                  <Link href="/notice-board" className="block p-3 bg-slate-50 hover:bg-amber-50 rounded-xl border border-slate-200 transition-colors">
                    <Badge variant="danger" size="sm" className="mb-1">
                      EXAMS
                    </Badge>
                    <div className="font-bold text-slate-900">Class X & XII Board Prep Date Sheet</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Published Oct 02, 2026</div>
                  </Link>

                  <Link href="/notice-board" className="block p-3 bg-slate-50 hover:bg-amber-50 rounded-xl border border-slate-200 transition-colors">
                    <Badge variant="gold" size="sm" className="mb-1">
                      HOLIDAYS
                    </Badge>
                    <div className="font-bold text-slate-900">Dussehra & Autumn Break Holidays</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Published Sep 20, 2026</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Student Portal Active"
        description="Dashboard active for Aarav Sharma."
      >
        <div className="space-y-4">
          <Input label="Student Name" defaultValue={studentProfile.name} />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
