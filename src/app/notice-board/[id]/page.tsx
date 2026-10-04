"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Calendar, Download, ArrowLeft, ShieldCheck, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export default function NoticeDetailPage() {
  const params = useParams();
  const noticeId = params?.id as string;
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        <PageHeader
          title="Official Circular & Notice Detail"
          subtitle="Reference ID: DHWS-CIRCULAR-2026-894 • Published by Directorate of Examinations"
          categoryBadge="Official Document"
          breadcrumbs={[
            { label: "Notice Board", href: "/notice-board" },
            { label: `Notice ${noticeId || "Detail"}` },
          ]}
          action={
            <Link href="/notice-board">
              <Button variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Back to All Notices
              </Button>
            </Link>
          }
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-16">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md space-y-8">
            {/* Notice Header Metadata */}
            <div className="border-b border-slate-200 pb-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="danger" size="md" dot>
                  EXAMINATION CIRCULAR
                </Badge>
                <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  Published: October 02, 2026
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                CBSE Class X & XII Mid-Term Examination Date Sheet 2026 Announced
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                <span><strong>Target Audience:</strong> Class X & XII Students & Parents</span>
                <span>•</span>
                <span><strong>Issuing Desk:</strong> Controller of Examinations</span>
              </div>
            </div>

            {/* Official Notice Content */}
            <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                All students of Class X and Class XII (Science, Commerce, and Humanities streams) are hereby notified that the CBSE Mid-Term Board Preparatory Examinations for the Academic Session 2026-27 will commence from <strong>Monday, October 20, 2026</strong>.
              </p>

              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Important Note for Candidates:</strong> Reporting time is strictly 08:00 AM in full winter school uniform with original CBSE Roll Number admit card. No late entry will be permitted after 08:20 AM.
                </div>
              </div>

              <h4 className="text-lg font-bold font-heading text-slate-900 pt-2">
                Examination Day-Wise Schedule Timetable
              </h4>

              {/* Timetable Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs sm:text-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900 text-white font-bold uppercase text-[11px]">
                    <tr>
                      <th className="p-3.5 px-4">Date & Day</th>
                      <th className="p-3.5 px-4">Class X Subject</th>
                      <th className="p-3.5 px-4">Class XII Science</th>
                      <th className="p-3.5 px-4">Class XII Commerce</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 px-4 font-bold text-slate-900">20 Oct (Mon)</td>
                      <td className="p-3.5 px-4">Mathematics (041)</td>
                      <td className="p-3.5 px-4">Physics (042)</td>
                      <td className="p-3.5 px-4">Accountancy (055)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 px-4 font-bold text-slate-900">22 Oct (Wed)</td>
                      <td className="p-3.5 px-4">English Language</td>
                      <td className="p-3.5 px-4">Chemistry (043)</td>
                      <td className="p-3.5 px-4">Economics (030)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 px-4 font-bold text-slate-900">25 Oct (Sat)</td>
                      <td className="p-3.5 px-4">Science (086)</td>
                      <td className="p-3.5 px-4">Math / Bio (044)</td>
                      <td className="p-3.5 px-4">Business Studies</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="pt-2">
                Practical evaluations and internal assessment viva-voce will take place immediately following the written theory papers.
              </p>
            </div>

            {/* Document Download & Signature Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button
                variant="gold"
                size="lg"
                leftIcon={<Download className="w-5 h-5" />}
                onClick={() => alert("Downloading Official Timetable PDF Attachment (Demo)...")}
              >
                Download Official PDF Circular
              </Button>

              <div className="text-right">
                <div className="font-heading font-bold text-slate-900 text-base">Dr. Rajeshwar Sharma</div>
                <div className="text-xs text-amber-700 font-semibold">Controller of Examinations • DHWS</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Admission Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry"
        description="Quick application."
      >
        <div className="space-y-4">
          <Input label="Student Name" required />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
