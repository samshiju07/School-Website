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
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import {
  BookOpen,
  Atom,
  Award,
  CheckCircle2,
  Cpu,
  Trophy,
  Sparkles,
  Music,
  Dumbbell,
  FileCheck,
  BrainCircuit,
  Palette,
  Target,
  GraduationCap,
} from "lucide-react";

export default function AcademicsPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Academic Framework & Curriculum"
          subtitle="CBSE affiliated progressive learning framework combining scientific inquiry, digital readiness, sports mastery, and holistic character building."
          categoryBadge="CBSE Affiliation No. 2130894"
          breadcrumbs={[{ label: "Academics" }]}
          action={
            <Button
              variant="gold"
              size="lg"
              leftIcon={<Sparkles className="w-5 h-5" />}
              onClick={() => setIsApplyModalOpen(true)}
            >
              Apply for Admission 2027-28
            </Button>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-16">
          {/* 1 - 4: ACADEMIC WINGS (Primary, Middle, Secondary, Senior Secondary) */}
          <section className="space-y-12">
            <SectionHeading
              badge="Educational Wings"
              title="Structured Learning Stages"
              subtitle="Tailored developmental pathways for every stage of student growth."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Primary Education */}
              <Card id="pre-primary" accentBorder hoverable className="bg-white flex flex-col">
                <CardHeader>
                  <Badge variant="gold" size="sm" className="w-fit mb-2">
                    Nursery - Grade V
                  </Badge>
                  <CardTitle className="text-xl">Primary Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Play-way Montessori methodology focusing on language fluency, motor skill development, creative play, and foundational math.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {["Phonics & story telling", "Sensory activity rooms", "Number sense & arts"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Middle School */}
              <Card id="middle" accentBorder hoverable className="bg-white flex flex-col">
                <CardHeader>
                  <Badge variant="emerald" size="sm" className="w-fit mb-2">
                    Grade VI - VIII
                  </Badge>
                  <CardTitle className="text-xl">Middle School</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Analytical inquiry in Science, Mathematics, Computer Coding, Social Sciences, and foreign/regional languages.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {["STEM & Robotics Tinkering", "Project-based learning", "Language lab & coding"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Education */}
              <Card id="secondary" accentBorder hoverable className="bg-white flex flex-col">
                <CardHeader>
                  <Badge variant="primary" size="sm" className="w-fit mb-2">
                    Grade IX - X
                  </Badge>
                  <CardTitle className="text-xl">Secondary Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Comprehensive preparation for CBSE Class X Board examinations with rigorous practical laboratory training.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {["CBSE Board curriculum", "Physics/Chem/Bio labs", "Olympiad guidance"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Senior Secondary */}
              <Card id="senior" accentBorder hoverable className="bg-white flex flex-col">
                <CardHeader>
                  <Badge variant="danger" size="sm" className="w-fit mb-2">
                    Grade XI - XII
                  </Badge>
                  <CardTitle className="text-xl">Senior Secondary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Specialized Science, Commerce, and Humanities streams with integrated JEE/NEET, CUET & CA competitive mentorship.
                  </p>
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {["PCM / PCB & Python AI", "Commerce & Economics", "Humanities & Law prep"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 5. CURRICULUM OVERVIEW */}
          <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-6">
            <Badge variant="gold" size="sm">
              CBSE ALIGNED SYLLABUS
            </Badge>
            <h3 className="text-3xl font-bold font-heading text-white">
              Curriculum Architecture
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              Our academic curriculum strictly adheres to National Curriculum Framework (NCF) guidelines issued by the Central Board of Secondary Education. We combine core academic subjects with elective skill subjects such as Artificial Intelligence, Financial Literacy, Coding, and Design Thinking.
            </p>
          </section>

          {/* 6. TEACHING METHODOLOGY */}
          <section className="space-y-12">
            <SectionHeading
              badge="Pedagogical Approach"
              title="Teaching Methodology"
              subtitle="Engaging students through interactive, experiential, and inquiry-driven instruction."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BrainCircuit className="w-6 h-6 text-amber-600" />,
                  title: "Experiential & Practical",
                  desc: "Hands-on experiments, field visits, robotics building, and real-world case study simulations.",
                },
                {
                  icon: <Cpu className="w-6 h-6 text-amber-600" />,
                  title: "Smart Class Integration",
                  desc: "Interactive flat panels, 3D visual animations, digital modules, and online student portals.",
                },
                {
                  icon: <Target className="w-6 h-6 text-amber-600" />,
                  title: "Competitive Exam Foundation",
                  desc: "Integrated foundation modules for JEE Main/Advanced, NEET, CUET, and National Olympiads.",
                },
              ].map((m, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="p-3 bg-amber-50 rounded-xl w-fit mb-2">
                      {m.icon}
                    </div>
                    <CardTitle className="text-xl">{m.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {m.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 7. CO-CURRICULAR ACTIVITIES & 8. SPORTS PROGRAM */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Co-Curricular */}
            <Card accentBorder className="bg-white p-2">
              <CardHeader>
                <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl w-fit mb-2">
                  <Music className="w-6 h-6" />
                </div>
                <Badge variant="gold" size="sm" className="w-fit mb-2">
                  CREATIVE EXPRESSION
                </Badge>
                <CardTitle className="text-2xl">Co-Curricular Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Students participate in classical Hindustani & Western music, Indian classical dance, drama, Model United Nations (MUN), public speaking, and Eco Club sustainability projects.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Badge variant="primary">MUN Debating</Badge>
                  <Badge variant="primary">Classical Music</Badge>
                  <Badge variant="primary">Drama Society</Badge>
                  <Badge variant="primary">Eco Club</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sports Program */}
            <Card accentBorder className="bg-white p-2">
              <CardHeader>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-2">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <Badge variant="emerald" size="sm" className="w-fit mb-2">
                  PHYSICAL FITNESS
                </Badge>
                <CardTitle className="text-2xl">Olympic Sports Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Professional coaching in swimming, lawn tennis, football, basketball, archery, and athletics at our state-of-the-art sports complex.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Badge variant="emerald">Half-Olympic Pool</Badge>
                  <Badge variant="emerald">Football Turf</Badge>
                  <Badge variant="emerald">Tennis Court</Badge>
                  <Badge variant="emerald">Cricket Nets</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 9. ASSESSMENT & EXAMINATION SYSTEM */}
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-amber-600" />
              <div>
                <Badge variant="gold" size="sm" className="mb-1">
                  EVALUATION SYSTEM
                </Badge>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Continuous & Comprehensive Evaluation
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-4xl">
              Student progress is assessed through regular formative unit tests, laboratory practical evaluations, term examinations, and pre-board practice tests. Detailed report cards provide diagnostic feedback to parents during regular PTM meetings.
            </p>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Admission Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Academic Admission Inquiry"
        description="Select grade for 2027-28 session."
      >
        <div className="space-y-4">
          <Input label="Student Name" required />
          <Select
            label="Seeking Grade"
            options={[
              { label: "Primary Wing", value: "primary" },
              { label: "Middle Wing", value: "middle" },
              { label: "Senior Secondary", value: "senior" },
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
