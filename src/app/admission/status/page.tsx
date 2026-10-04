"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  FileCheck,
  CreditCard,
  User,
  Calendar,
  GraduationCap,
  ArrowLeft,
  Printer,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

type StatusType = "Submitted" | "Under Review" | "Documents Required" | "Approved" | "Rejected";

interface ApplicationRecord {
  id: string;
  studentName: string;
  classApplied: string;
  applicationDate: string;
  paymentStatus: string;
  status: StatusType;
  timelineSteps: {
    label: string;
    status: "completed" | "current" | "pending";
    date?: string;
  }[];
}

const mockApplications: Record<string, ApplicationRecord> = {
  "SCH-2027-000123": {
    id: "SCH-2027-000123",
    studentName: "Aarav Sharma",
    classApplied: "Class XI - Science Stream",
    applicationDate: "October 04, 2026",
    paymentStatus: "Paid (₹500.00)",
    status: "Under Review",
    timelineSteps: [
      { label: "Application Submitted", status: "completed", date: "Oct 04, 2026" },
      { label: "Documents Uploaded", status: "completed", date: "Oct 04, 2026" },
      { label: "Payment Completed", status: "completed", date: "Oct 04, 2026" },
      { label: "Application Under Review", status: "current", date: "In Progress" },
      { label: "Admission Decision", status: "pending", date: "Expected Nov 05" },
    ],
  },
  "SCH-2027-000456": {
    id: "SCH-2027-000456",
    studentName: "Ananya Sen",
    classApplied: "Class I (Primary Wing)",
    applicationDate: "September 28, 2026",
    paymentStatus: "Paid (₹500.00)",
    status: "Approved",
    timelineSteps: [
      { label: "Application Submitted", status: "completed", date: "Sep 28, 2026" },
      { label: "Documents Uploaded", status: "completed", date: "Sep 28, 2026" },
      { label: "Payment Completed", status: "completed", date: "Sep 28, 2026" },
      { label: "Application Under Review", status: "completed", date: "Oct 01, 2026" },
      { label: "Admission Decision (Approved)", status: "completed", date: "Oct 03, 2026" },
    ],
  },
  "SCH-2027-000789": {
    id: "SCH-2027-000789",
    studentName: "Rohan Verma",
    classApplied: "Class VI (Middle Wing)",
    applicationDate: "October 01, 2026",
    paymentStatus: "Paid (₹500.00)",
    status: "Documents Required",
    timelineSteps: [
      { label: "Application Submitted", status: "completed", date: "Oct 01, 2026" },
      { label: "Documents Uploaded", status: "current", date: "Action Needed" },
      { label: "Payment Completed", status: "completed", date: "Oct 01, 2026" },
      { label: "Application Under Review", status: "pending" },
      { label: "Admission Decision", status: "pending" },
    ],
  },
  "SCH-2027-000999": {
    id: "SCH-2027-000999",
    studentName: "Vikram Malhotra",
    classApplied: "Class IX (Secondary)",
    applicationDate: "September 15, 2026",
    paymentStatus: "Paid (₹500.00)",
    status: "Rejected",
    timelineSteps: [
      { label: "Application Submitted", status: "completed", date: "Sep 15, 2026" },
      { label: "Documents Uploaded", status: "completed", date: "Sep 15, 2026" },
      { label: "Payment Completed", status: "completed", date: "Sep 15, 2026" },
      { label: "Application Under Review", status: "completed", date: "Sep 20, 2026" },
      { label: "Admission Decision (Seats Full)", status: "completed", date: "Sep 22, 2026" },
    ],
  },
};

export default function ApplicationStatusPage() {
  const [searchInput, setSearchInput] = useState<string>("SCH-2027-000123");
  const [activeRecord, setActiveRecord] = useState<ApplicationRecord | null>(
    mockApplications["SCH-2027-000123"]
  );
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const cleanedQuery = searchInput.trim().toUpperCase();
      if (mockApplications[cleanedQuery]) {
        setActiveRecord(mockApplications[cleanedQuery]);
      } else {
        // Fallback demo record if user types a custom ID
        setActiveRecord({
          id: cleanedQuery || "SCH-2027-000123",
          studentName: "Aarav Sharma (Demo)",
          classApplied: "Class XI - Science Stream",
          applicationDate: "October 04, 2026",
          paymentStatus: "Paid (₹500.00)",
          status: "Under Review",
          timelineSteps: [
            { label: "Application Submitted", status: "completed", date: "Oct 04, 2026" },
            { label: "Documents Uploaded", status: "completed", date: "Oct 04, 2026" },
            { label: "Payment Completed", status: "completed", date: "Oct 04, 2026" },
            { label: "Application Under Review", status: "current", date: "In Progress" },
            { label: "Admission Decision", status: "pending", date: "Expected Nov 05" },
          ],
        });
      }
    }, 800);
  };

  const getStatusBadge = (status: StatusType) => {
    switch (status) {
      case "Approved":
        return <Badge variant="emerald" size="md" dot>Approved</Badge>;
      case "Under Review":
        return <Badge variant="gold" size="md" dot>Under Review</Badge>;
      case "Submitted":
        return <Badge variant="primary" size="md" dot>Submitted</Badge>;
      case "Documents Required":
        return <Badge variant="gold" size="md" dot className="bg-amber-100 text-amber-900 border-amber-300">Documents Required</Badge>;
      case "Rejected":
        return <Badge variant="danger" size="md" dot>Seats Full / Not Approved</Badge>;
      default:
        return <Badge variant="primary" size="md">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Header */}
        <PageHeader
          title="Check Admission Application Status"
          subtitle="Track real-time status of your student registration application. Frontend Demo."
          categoryBadge="Status Tracker"
          breadcrumbs={[
            { label: "Admissions", href: "/admissions" },
            { label: "Application Status" },
          ]}
          action={
            <Link href="/admission/apply">
              <Button variant="gold" size="lg" leftIcon={<Sparkles className="w-5 h-5" />}>
                Apply New Application
              </Button>
            </Link>
          }
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-16">
          {/* SEARCH UI CARD */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <Badge variant="gold" size="sm" className="mb-1">
                APPLICATION LOOKUP
              </Badge>
              <h2 className="text-2xl font-bold font-heading text-slate-900">
                Track Application Status
              </h2>
              <p className="text-slate-600 text-xs mt-1">
                Enter your 14-character Application Registration ID provided during registration.
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-1 w-full">
                <Input
                  placeholder="Enter Application ID (e.g. SCH-2027-000123)"
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                isLoading={isSearching}
                leftIcon={<Search className="w-5 h-5" />}
                className="w-full sm:w-auto shrink-0"
              >
                Search Status
              </Button>
            </form>

            {/* Quick Demo Test IDs */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Try Demo Sample IDs:</span>
              {[
                { id: "SCH-2027-000123", label: "Under Review" },
                { id: "SCH-2027-000456", label: "Approved" },
                { id: "SCH-2027-000789", label: "Docs Needed" },
                { id: "SCH-2027-000999", label: "Rejected" },
              ].map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => {
                    setSearchInput(sample.id);
                    setActiveRecord(mockApplications[sample.id]);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-800 transition-colors border border-slate-200 font-mono text-[11px]"
                >
                  {sample.id} ({sample.label})
                </button>
              ))}
            </div>
          </div>

          {/* APPLICATION STATUS DISPLAY CARD */}
          {activeRecord && (
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
              {/* STATUS HEADER & BADGE */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Application ID
                  </span>
                  <h3 className="text-3xl font-extrabold font-heading text-slate-900 tracking-wider">
                    {activeRecord.id}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-semibold">Current Status:</span>
                  {getStatusBadge(activeRecord.status)}
                </div>
              </div>

              {/* SUMMARY GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">Student Name</span>
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{activeRecord.studentName}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">Class Applied</span>
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{activeRecord.classApplied}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">Application Date</span>
                  <div className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{activeRecord.applicationDate}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">Payment Status</span>
                  <div className="text-base font-bold text-emerald-700 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{activeRecord.paymentStatus}</span>
                  </div>
                </div>
              </div>

              {/* VISUAL STATUS TIMELINE */}
              <div className="space-y-6 pt-2">
                <h4 className="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" /> Visual Progress Timeline
                </h4>

                <div className="space-y-4">
                  {activeRecord.timelineSteps.map((step, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                          step.status === "completed"
                            ? "bg-emerald-50/60 border-emerald-200"
                            : step.status === "current"
                            ? "bg-amber-50 border-amber-300 ring-2 ring-amber-400/20"
                            : "bg-slate-50 border-slate-200 opacity-60"
                        }`}
                      >
                        {/* Step Icon */}
                        <div className="shrink-0 mt-0.5">
                          {step.status === "completed" ? (
                            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                              ✓
                            </div>
                          ) : step.status === "current" ? (
                            <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md animate-pulse">
                              ⏳
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs">
                              ○
                            </div>
                          )}
                        </div>

                        {/* Step Content */}
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <span
                            className={`text-sm sm:text-base font-bold ${
                              step.status === "completed"
                                ? "text-emerald-950"
                                : step.status === "current"
                                ? "text-slate-900"
                                : "text-slate-500"
                            }`}
                          >
                            {step.label}
                          </span>

                          {step.date && (
                            <span
                              className={`text-xs font-semibold px-2.5 py-1 rounded-md w-fit ${
                                step.status === "completed"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : step.status === "current"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-slate-200 text-slate-600"
                              }`}
                            >
                              {step.date}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<Printer className="w-4 h-4" />}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.print();
                    }
                  }}
                >
                  Print Status Receipt
                </Button>

                <div className="flex flex-wrap items-center gap-3">
                  <Link href="/admissions">
                    <Button variant="ghost" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                      Admissions Overview
                    </Button>
                  </Link>
                  <Link href="/admission/apply">
                    <Button variant="gold" size="md" leftIcon={<Sparkles className="w-4 h-4" />}>
                      Submit New Application
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Status Lookup Active"
        description="Demo status tracker."
      >
        <div className="space-y-4">
          <Input label="Application ID" defaultValue="SCH-2027-000123" />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
