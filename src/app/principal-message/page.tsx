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
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Heart,
  Users,
  Award,
  CheckCircle2,
  Quote,
  ShieldCheck,
} from "lucide-react";

export default function PrincipalMessagePage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Principal's Message"
          subtitle="Leadership perspective, educational direction, and vision for student growth from Dr. Ananya Mukherjee."
          categoryBadge="School Leadership"
          breadcrumbs={[
            { label: "About Us", href: "/about" },
            { label: "Principal's Message" },
          ]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
          {/* Main Principal Profile & Welcome Banner */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 sm:p-12 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Principal Photo Placeholder */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-500 opacity-25 blur-xl" />
                  <div className="relative bg-slate-900 p-3 rounded-3xl border border-slate-800 shadow-2xl">
                    <ImagePlaceholder
                      variant="portrait"
                      aspectRatio="3/4"
                      label="Principal Photo"
                      sublabel="Upload official portrait image of Dr. Ananya Mukherjee"
                      className="min-h-[340px]"
                    />
                  </div>
                </div>
              </div>

              {/* Principal Details & Quick Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="gold" size="sm" className="uppercase tracking-widest font-bold">
                  DIRECTOR OF ACADEMICS
                </Badge>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
                    Dr. Ananya Mukherjee
                  </h1>
                  <p className="text-amber-700 font-bold text-sm sm:text-base mt-1">
                    Principal & Educational Director • Delhi Heritage World School
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    M.Sc. Physics (Gold Medalist), Ph.D. Educational Pedagogy (IIT Delhi), 22+ Years in CBSE Leadership
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 leading-relaxed italic border-l-4 border-l-amber-500">
                  &ldquo;Education is not the learning of facts, but the training of the mind to think critically, act compassionately, and stand firm on moral values.&rdquo;
                </div>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>National Educator Awardee</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <span>22+ Yrs Academic Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Message Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
              {/* 1. Welcome Message */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold font-heading text-slate-900 border-b border-amber-500/30 pb-2">
                  Welcome to Delhi Heritage World School
                </h3>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Dear Parents, Students, and Visitors,
                  </p>
                  <p>
                    It gives me immense pride and joy to welcome you to Delhi Heritage World School. Since our foundation in 2001, our school has remained steadfast in its mission to provide a transformative educational experience where academic excellence is harmonized with rich Indian values and modern scientific curiosity.
                  </p>
                  <p>
                    We live in a rapidly evolving global landscape driven by technological innovation and artificial intelligence. In such an era, the true goal of education extends far beyond textbook memorization—it is about nurturing adaptable thinkers, ethical leaders, and empathetic human beings.
                  </p>
                </div>
              </section>

              {/* 2. Educational Philosophy */}
              <section className="space-y-4">
                <h3 className="text-2xl font-bold font-heading text-slate-900 border-b border-amber-500/30 pb-2">
                  Our Educational Philosophy
                </h3>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    At Delhi Heritage, we adhere to a child-centric, experiential learning framework. We believe that every child possesses unique talents waiting to be unlocked.
                  </p>
                  <p>
                    Whether in our state-of-the-art Atal Tinkering Robotics Lab, our Olympic sports complex, or our classical music and debate societies, we provide structured opportunities for students to discover their passions and achieve mastery.
                  </p>
                </div>
              </section>

              {/* 3. Message to Parents */}
              <section className="space-y-4 bg-amber-50/60 p-6 rounded-2xl border border-amber-200/60">
                <h3 className="text-xl font-bold font-heading text-amber-950 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-amber-600" /> A Message to Our Parents
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-light">
                  Parents are our essential partners in education. We encourage open dialogue, active parental participation in school events, and joint guidance to ensure your child feels supported both at home and at school. Together, we build the foundation for their lifelong success.
                </p>
              </section>

              {/* 4. Message to Students */}
              <section className="space-y-4 bg-slate-900 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" /> A Message to Our Dear Students
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  To our students: Never be afraid to ask questions, experiment, make mistakes, and learn anew. Embrace challenges with courage, uphold truthfulness and respect for elders, and remember that hard work combined with ethical values will open every door in the world for you.
                </p>
              </section>

              {/* 5. Signature Ending */}
              <div className="pt-8 border-t border-slate-200 space-y-2">
                <p className="text-sm font-semibold text-slate-600">With warm regards & blessings,</p>
                <div className="font-heading font-extrabold text-2xl text-slate-900 tracking-wide">
                  Dr. Ananya Mukherjee
                </div>
                <p className="text-xs text-amber-700 font-bold uppercase tracking-wider">
                  M.Sc. (Gold Medalist), Ph.D. • Principal & Educational Director
                </p>
                <p className="text-xs text-slate-500">Delhi Heritage World School, New Delhi</p>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <Card accentBorder className="bg-white">
                <CardHeader>
                  <CardTitle className="text-lg">Key Focus Areas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "100% CBSE Board Exam Distinction",
                    "JEE / NEET Foundational Mentorship",
                    "Atal Tinkering AI & Robotics Lab",
                    "Olympic Sports & Athletic Training",
                    "Vedic Values & Character Building",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 text-center border border-slate-800">
                <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
                <h4 className="text-lg font-bold font-heading text-white">Admissions Open 2027-28</h4>
                <p className="text-xs text-slate-300">
                  Registration open for Nursery to Grade IX & Grade XI (Science, Commerce, Humanities).
                </p>
                <Button
                  variant="gold"
                  size="md"
                  fullWidth
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  Apply Now
                </Button>
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
        title="Admission Counseling Inquiry"
        description="Schedule interaction with admissions desk."
      >
        <div className="space-y-4">
          <Input label="Student Name" required />
          <Select
            label="Grade Seeking Admission"
            options={[
              { label: "Nursery", value: "nursery" },
              { label: "Class I", value: "c1" },
              { label: "Class XI Science", value: "c11" },
            ]}
          />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Submit
          </Button>
        </div>
      </Modal>
    </div>
  );
}
