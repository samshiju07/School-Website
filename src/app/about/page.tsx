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
import { Textarea } from "@/components/ui/Textarea";
import {
  ShieldCheck,
  Award,
  GraduationCap,
  CheckCircle2,
  Download,
  Building2,
  Users,
  Trophy,
  Sparkles,
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Compass,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function AboutPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* 1. PAGE HERO */}
        <PageHeader
          title="About Delhi Heritage World School"
          subtitle="Established in 2001, a premier CBSE institution nurturing intellectual mastery, ethical character, and global visionaries on a 15-acre green eco-campus."
          categoryBadge="Legacy of Excellence Since 2001"
          breadcrumbs={[{ label: "About School" }]}
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
          {/* 2. SCHOOL INTRODUCTION */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold" size="sm" className="uppercase tracking-widest">
                INSTITUTIONAL OVERVIEW
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight">
                A Quarter Century of Educational Mastery
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Delhi Heritage World School was founded with a singular vision: to create an institution where traditional Indian ethos and modern scientific inquiry blend seamlessly to cultivate compassionate, intellectually resilient global leaders.
                </p>
                <p>
                  Spread across a serene 15-acre green eco-campus in New Delhi, the school offers continuous comprehensive CBSE education from Pre-Primary (Nursery) to Senior Secondary (Class XII Science, Commerce, and Humanities).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>CBSE Affiliation #2130894</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 Quality Certified</span>
                </div>
              </div>
            </div>

            {/* Campus Image Placeholder */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 p-3 rounded-3xl border border-slate-800 shadow-2xl">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label="Campus Infrastructure Photo"
                  sublabel="Upload photo of school entrance & administration block"
                  className="min-h-[280px]"
                />
              </div>
            </div>
          </section>

          {/* 3. HISTORY & TIMELINE */}
          <section className="space-y-12">
            <SectionHeading
              badge="Milestones"
              title="Our Historical Journey"
              subtitle="25 years of continuous growth, technological innovation, and academic triumphs."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { year: "2001", title: "Foundation Laying", desc: "Established with 120 foundational students and a vision for value-based education." },
                { year: "2010", title: "CBSE Senior Secondary", desc: "Upgraded to Senior Secondary offering Science, Commerce, and Humanities streams." },
                { year: "2018", title: "Atal STEM Lab Launch", desc: "Inaugurated state-of-the-art Robotics, 3D printing, and Artificial Intelligence tinkers lab." },
                { year: "2025", title: "15-Acre Eco Campus", desc: "Recognized as a zero-waste green campus with Olympic sports complex and smart rooms." },
              ].map((item, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="text-3xl font-extrabold font-heading text-amber-500 mb-1">
                      {item.year}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 4 & 5. VISION & MISSION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card accentBorder className="p-4 bg-white flex flex-col justify-between">
              <CardHeader>
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl w-fit mb-3">
                  <Compass className="w-8 h-8" />
                </div>
                <Badge variant="gold" size="sm" className="w-fit mb-2">
                  OUR VISION
                </Badge>
                <CardTitle className="text-2xl text-slate-900">Empowering Visionary Citizens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
                  To set international standards in Indian education by creating an environment where curiosity thrives, character is forged with moral integrity, and every child develops the intellectual courage to shape a better world.
                </p>
              </CardContent>
            </Card>

            <Card accentBorder className="p-4 bg-white flex flex-col justify-between">
              <CardHeader>
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-3">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <Badge variant="emerald" size="sm" className="w-fit mb-2">
                  OUR MISSION
                </Badge>
                <CardTitle className="text-2xl text-slate-900">Academic & Ethical Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-sm">
                  To provide accessible, high-caliber CBSE education integrated with modern STEM innovation, competitive JEE/NEET mentorship, sports excellence, Indian cultural values, and personalized student guidance.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* 6. CORE VALUES */}
          <section className="space-y-12">
            <SectionHeading
              badge="Guiding Principles"
              title="Our 5 Core Values"
              subtitle="The moral and philosophical pillars that shape daily student life."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Academic Mastery", desc: "Uncompromising rigor and conceptual clarity across all disciplines." },
                { title: "Moral Integrity", desc: "Honesty, empathy, and ethical decision making rooted in Indian values." },
                { title: "Innovation & Inquiry", desc: "Encouraging scientific curiosity, research, and creative problem solving." },
                { title: "Inclusivity & Respect", desc: "Fostering mutual respect, cultural diversity, and equal opportunities." },
                { title: "Cultural Ethos", desc: "Pride in Indian heritage, classical arts, literature, and community service." },
              ].map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <div className="text-amber-500 font-extrabold font-heading text-lg">0{idx + 1}.</div>
                  <h4 className="text-base font-bold font-heading text-slate-900">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. EDUCATIONAL PHILOSOPHY */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
            <div className="max-w-3xl space-y-4">
              <Badge variant="gold" size="sm">
                CHILD-CENTERED LEARNING
              </Badge>
              <h3 className="text-3xl font-bold font-heading text-white">
                Educational Philosophy
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                We believe that intelligence is not static, but expandable through effort, curiosity, and structured mentorship. Our pedagogy emphasizes experiential learning over rote memorization—engaging students in laboratories, MUN debates, sports arenas, and creative studios.
              </p>
            </div>
          </section>

          {/* 8. INFRASTRUCTURE OVERVIEW */}
          <section className="space-y-12">
            <SectionHeading
              badge="Campus Life"
              title="Infrastructure Overview"
              subtitle="A 15-acre green eco-campus built for safety, sports, and digital learning."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Smart Digital Classrooms", desc: "Air-conditioned rooms with interactive flat panels and high-speed fiber connectivity.", label: "Smart Classroom Photo" },
                { title: "Olympic Sports Complex", desc: "Half-Olympic swimming pool, synthetic football turf, tennis courts, and indoor stadium.", label: "Sports Complex Photo" },
                { title: "Atal Tinkering STEM Lab", desc: "Hands-on robotics, 3D printing, electronics prototyping, and Python development.", label: "STEM Lab Photo" },
              ].map((fac, idx) => (
                <Card key={idx} hoverable className="bg-white overflow-hidden">
                  <div className="p-2 bg-slate-100">
                    <ImagePlaceholder
                      aspectRatio="16/9"
                      label={fac.label}
                      sublabel="Upload facility image"
                      className="min-h-[180px]"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{fac.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-xs leading-relaxed mt-1">
                      {fac.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* 9. WHY CHOOSE US & 10. STATISTICS */}
          <section className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Badge variant="primary" size="md" className="bg-slate-950 text-amber-400 border-slate-900 uppercase font-bold">
                Why Parents Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950">
                Institutional Statistics & Distinctions
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "25+", label: "Years of Educational Trust" },
                { num: "5,000+", label: "Global Alumni Network" },
                { num: "98%", label: "CBSE Board Pass Rate" },
                { num: "50+", label: "State & National Trophies" },
              ].map((st, idx) => (
                <div key={idx} className="bg-slate-950 text-white p-6 rounded-2xl text-center space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-400">{st.num}</div>
                  <div className="text-xs text-slate-300 font-medium">{st.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 11. CTA FOR ADMISSIONS */}
          <section className="text-center bg-white p-10 sm:p-16 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <Badge variant="gold" size="sm" className="uppercase tracking-widest">
              JOIN THE HERITAGE FAMILY
            </Badge>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Ready to Give Your Child a World-Class Education?
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Admissions are open for Academic Session 2027-28 for Nursery to Grade IX & Grade XI. Schedule a 1-on-1 campus tour today.
            </p>
            <div>
              <Button
                variant="gold"
                size="lg"
                leftIcon={<Sparkles className="w-5 h-5" />}
                onClick={() => setIsApplyModalOpen(true)}
              >
                Apply for Admission 2027-28
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Admission Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry 2027-28"
        description="Schedule a campus visit & prospectus dispatch."
      >
        <div className="space-y-4">
          <Input label="Student Full Name" placeholder="Student name" required />
          <Select
            label="Target Grade"
            options={[
              { label: "Nursery", value: "nursery" },
              { label: "Class I - V", value: "primary" },
              { label: "Class XI Science", value: "xi-sci" },
            ]}
          />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Submit Inquiry
          </Button>
        </div>
      </Modal>
    </div>
  );
}
