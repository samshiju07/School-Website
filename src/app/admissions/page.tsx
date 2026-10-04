"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  UserCheck,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Clock,
  BookOpen,
  FileCheck2,
  ChevronDown,
} from "lucide-react";

export default function AdmissionsPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the age criteria for Nursery and Kindergarten (KG) admission?",
      a: "For Nursery admission, the child must be 3+ years as of March 31 of the academic year. For Kindergarten (KG), the child must be 4+ years.",
    },
    {
      q: "Does the school provide AC transport facilities across Delhi NCR?",
      a: "Yes, Delhi Heritage World School operates a fleet of air-conditioned buses equipped with real-time GPS tracking, speed governors, and trained female attendants covering major routes in Delhi, Dwarka, Janakpuri, and Gurgaon.",
    },
    {
      q: "What is the admission assessment format for Class VI to IX and Class XI?",
      a: "Applicants for Class VI-IX undergo an age-appropriate proficiency assessment in English, Mathematics, and General Science. Class XI stream applicants undergo an entrance test based on Class X CBSE syllabus.",
    },
    {
      q: "What are the available payment modes for quarterly school fees?",
      a: "School fees can be paid quarterly through online banking, credit/debit card portal, demand draft, or net banking. No cash payments are collected at school counters.",
    },
    {
      q: "Are hostel / boarding facilities available on campus?",
      a: "Yes, we offer modern climate-controlled residential boarding facilities for male and female students from Class VI onwards under the care of resident wardens.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Admissions & Registration 2027 - 2028"
          subtitle="Join our academic community. Transparent 4-step admission process for Nursery to Grade IX & Grade XI (Science, Commerce, Humanities)."
          categoryBadge="Admissions Open 2027-28"
          breadcrumbs={[{ label: "Admissions" }]}
          action={
            <Link href="/admission/apply">
              <Button
                variant="gold"
                size="lg"
                leftIcon={<Sparkles className="w-5 h-5" />}
              >
                Start Application →
              </Button>
            </Link>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16">
          {/* 1. ADMISSION OVERVIEW & START APPLICATION HERO CTA */}
          <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge variant="gold" size="sm" dot>
                  ADMISSIONS OPEN 2027-28
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                  Welcome to Delhi Heritage Admission Portal
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  We invite parents seeking value-based CBSE education, state-of-the-art STEM laboratories, and Olympic sports infrastructure to begin their child&apos;s admission journey for Academic Session 2027-28.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
                <Link href="/admission/apply" className="w-full">
                  <Button variant="gold" size="lg" fullWidth leftIcon={<Sparkles className="w-5 h-5" />}>
                    Start Application
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="text-white border-slate-700 hover:bg-slate-800"
                  leftIcon={<Download className="w-5 h-5" />}
                  onClick={() => alert("Prospectus PDF Download started (Demo)...")}
                >
                  Download Prospectus PDF
                </Button>
              </div>
            </div>
          </section>

          {/* 2. CLASSES AVAILABLE */}
          <section className="space-y-12">
            <SectionHeading
              badge="Available Seat Matrix"
              title="Classes Open for Admission"
              subtitle="Seat availability across Pre-Primary, Primary, Middle, Secondary, and Senior Secondary Wings."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { wing: "Pre-Primary Wing", classes: "Nursery & Kindergarten (KG)", Seats: "Limited Seats Available", desc: "Montessori play-way learning, sensory activity rooms, reading foundation." },
                { wing: "Primary & Middle Wing", classes: "Grade I to Grade VIII", Seats: "Open for Registration", desc: "Conceptual math, science experiments, Atal STEM tinkering, languages & sports." },
                { wing: "Secondary & Senior Wing", classes: "Grade IX & Grade XI (PCM/PCB/Comm/Hum)", Seats: "Entrance Test Assessment", desc: "Integrated JEE/NEET, CUET & CA prep with CBSE Board syllabus." },
              ].map((c, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <Badge variant="gold" size="sm" className="w-fit mb-2">
                      {c.wing}
                    </Badge>
                    <CardTitle className="text-xl">{c.classes}</CardTitle>
                    <span className="text-xs font-semibold text-emerald-700">{c.Seats}</span>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {c.desc}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="bg-slate-50/50">
                    <Link href="/admission/apply" className="w-full">
                      <Button variant="ghost" size="sm" fullWidth>
                        Apply for {c.wing} →
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* 3. ELIGIBILITY CRITERIA */}
          <section className="space-y-8">
            <SectionHeading
              badge="Age & Mark Criteria"
              title="Admission Eligibility Criteria"
              subtitle="Guidelines issued by Directorate of Education and CBSE."
              align="center"
            />

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-700">
                  <thead className="text-xs font-bold uppercase bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4">Grade Level</th>
                      <th className="px-6 py-4">Age Requirement (as of March 31)</th>
                      <th className="px-6 py-4">Academic Prerequisite</th>
                      <th className="px-6 py-4 text-right">Assessment Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { grade: "Nursery", age: "3+ Years completed", pre: "Birth Certificate", mode: "Parent Interaction" },
                      { grade: "Kindergarten (KG)", age: "4+ Years completed", pre: "Nursery Report Card", mode: "Child & Parent Interaction" },
                      { grade: "Class I to V", age: "5+ Years onwards", pre: "Previous School Mark Sheet", mode: "Basic Proficiency Test" },
                      { grade: "Class VI to IX", age: "Corresponding Grade Age", pre: "Passed Previous Grade", mode: "Written Entrance Assessment" },
                      { grade: "Class XI (Science/Comm/Hum)", age: "15+ Years completed", pre: "Class X CBSE / ICSE Board Score", mode: "Stream Entrance Test" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-bold text-slate-900">{row.grade}</td>
                        <td className="px-6 py-4 font-semibold text-amber-700">{row.age}</td>
                        <td className="px-6 py-4 text-slate-700">{row.pre}</td>
                        <td className="px-6 py-4 text-right">
                          <Badge variant="outline">{row.mode}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4. IMPORTANT DATES TIMELINE */}
          <section className="space-y-8">
            <SectionHeading
              badge="Schedule 2027-28"
              title="Important Admission Dates"
              subtitle="Mark your calendar for key registration milestones."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { date: "Oct 01, 2026", title: "Registration Opens", desc: "Online application portal & prospectus available." },
                { date: "Oct 25, 2026", title: "Entrance Assessment", desc: "Written assessment for Class VI to IX & Class XI." },
                { date: "Nov 05, 2026", title: "Merit List Declaration", desc: "Selected candidate list displayed on notice board." },
                { date: "Nov 20, 2026", title: "Fee Submission Deadline", desc: "Completion of document verification & seat confirmation." },
              ].map((d, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                    {d.date}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-slate-900">{d.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. ADMISSION PROCESS (4 STEPS) */}
          <section className="space-y-8">
            <SectionHeading
              badge="Seamless Process"
              title="4-Step Admission Journey"
              subtitle="Clear, parent-centric onboarding process."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Online Application", desc: "Click 'Start Application' to complete the student details form." },
                { step: "02", title: "Campus Interaction", desc: "Schedule a guided tour of our 15-acre green campus and counselor meet." },
                { step: "03", title: "Document Verification", desc: "Submit birth certificate, previous report cards, & passport photos." },
                { step: "04", title: "Seat Confirmation", desc: "Pay quarterly tuition fee & receive student ID card." },
              ].map((s, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="text-3xl font-extrabold font-heading text-amber-500 mb-1">{s.step}</div>
                    <CardTitle className="text-xl">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-xs">{s.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. REQUIRED DOCUMENTS CHECKLIST */}
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <FileCheck2 className="w-8 h-8 text-amber-600" />
              <div>
                <Badge variant="gold" size="sm" className="mb-1">
                  VERIFICATION CHECKLIST
                </Badge>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Required Documents for Admission
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Self-attested copy of Official Birth Certificate (Municipal Corporation)",
                "Previous school Transfer Certificate (TC) counter-signed by Education Officer",
                "Report Card / Mark Sheet of the previous academic year",
                "Copy of Aadhar Card of Student and Both Parents / Guardians",
                "6 recent passport-sized color photographs of the student",
                "Medical Fitness Certificate & Immunization record signed by registered M.D.",
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. FEE INFORMATION PLACEHOLDER */}
          <section id="fee-structure" className="space-y-6">
            <SectionHeading
              badge="Fee Structure 2027-28"
              title="Fee Information (Placeholder)"
              subtitle="Transparent, quarterly fee schedule with no hidden charges."
              align="center"
            />

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-700">
                  <thead className="text-xs font-bold uppercase bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4">Wing</th>
                      <th className="px-6 py-4">One-Time Admission Fee</th>
                      <th className="px-6 py-4">Quarterly Tuition Fee</th>
                      <th className="px-6 py-4">Annual Lab & Activity Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { wing: "Pre-Primary (Nursery - KG)", reg: "₹ 15,000", tuition: "₹ 18,500", lab: "₹ 6,000" },
                      { wing: "Primary Wing (Class I - V)", reg: "₹ 15,000", tuition: "₹ 21,000", lab: "₹ 7,500" },
                      { wing: "Middle Wing (Class VI - VIII)", reg: "₹ 15,000", tuition: "₹ 24,500", lab: "₹ 9,000" },
                      { wing: "Secondary Wing (Class IX - X)", reg: "₹ 15,000", tuition: "₹ 28,000", lab: "₹ 11,000" },
                      { wing: "Senior Secondary (Class XI - XII)", reg: "₹ 15,000", tuition: "₹ 32,500", lab: "₹ 14,000" },
                    ].map((f, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-bold text-slate-900">{f.wing}</td>
                        <td className="px-6 py-4">{f.reg}</td>
                        <td className="px-6 py-4 font-semibold text-amber-700">{f.tuition}</td>
                        <td className="px-6 py-4">{f.lab}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 8. FREQUENTLY ASKED QUESTIONS */}
          <section className="space-y-8">
            <SectionHeading
              badge="Parent Desk"
              title="Frequently Asked Questions (FAQs)"
              subtitle="Find quick answers to common queries regarding admissions."
              align="center"
            />

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border-b border-slate-100 last:border-0 pb-4">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left py-2 font-bold font-heading text-slate-900 text-base sm:text-lg focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <p className="text-slate-600 text-sm leading-relaxed mt-2 font-normal animate-in fade-in duration-200">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 9. START APPLICATION BOTTOM CTA */}
          <section className="text-center bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 p-10 sm:p-16 rounded-3xl space-y-6 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Ready to Begin Your Application?
            </h2>
            <p className="text-slate-900 max-w-2xl mx-auto font-medium text-base">
              Click below to proceed to our online application form for Academic Session 2027-28.
            </p>
            <div>
              <Link href="/admission/apply">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-slate-950 text-white hover:bg-slate-900 shadow-2xl px-8"
                  leftIcon={<Sparkles className="w-5 h-5 text-amber-400" />}
                >
                  Start Application
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry"
        description="Quick interaction."
      >
        <div className="space-y-4">
          <Input label="Student Name" required />
          <Link href="/admission/apply" className="block">
            <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
              Proceed to Full Application
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
