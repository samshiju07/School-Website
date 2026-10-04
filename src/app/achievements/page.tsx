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
import { Trophy, Award, Star, CheckCircle2, Medal, Sparkles, GraduationCap, Dumbbell, Music, Flag } from "lucide-react";

export default function AchievementsPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Institutional Achievements & Honors"
          subtitle="Celebrating 25 years of academic toppers, sports gold medals, national STEM awards, and cultural victories."
          categoryBadge="Hall of Fame"
          breadcrumbs={[{ label: "Achievements" }]}
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
          {/* STATISTICS SECTION */}
          <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8 border border-slate-800 shadow-2xl">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="gold" size="sm" className="uppercase tracking-widest">
                GLORIOUS TRACK RECORD
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                School By The Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "25+", label: "Years of Educational Excellence" },
                { number: "5,000+", label: "Distinguished Global Alumni" },
                { number: "98%", label: "CBSE Board Distinction Rate" },
                { number: "50+", label: "State & National Awards" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl text-center space-y-1 border border-slate-700">
                  <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-400">{stat.number}</div>
                  <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ACADEMIC ACHIEVEMENTS */}
          <section className="space-y-12">
            <SectionHeading
              badge="Board & Olympiad Excellence"
              title="Academic Achievements"
              subtitle="Setting benchmark performances in CBSE Class X & XII Board Exams and Competitive Entrance Tests."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "100% CBSE Class XII Board Result 2025-26",
                  desc: "42 students scored above 95% aggregate. School topper Master Aarav Sharma secured 99.2% in PCM Stream.",
                  badge: "Board Exam Toppers",
                  icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
                },
                {
                  title: "AIR Rank 14 in JEE Advanced 2025",
                  desc: "Integrated foundation coaching produced 18 IIT JEE selections and 24 NEET qualified medical aspirants.",
                  badge: "IIT & NEET Selections",
                  icon: <Trophy className="w-6 h-6 text-amber-600" />,
                },
                {
                  title: "Gold Medals in International Math Olympiad",
                  desc: "3 students won Gold Medals at the International Mathematics & Science Olympiad held in Singapore.",
                  badge: "Olympiad Winners",
                  icon: <Medal className="w-6 h-6 text-amber-600" />,
                },
              ].map((item, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="gold" size="sm">
                        {item.badge}
                      </Badge>
                      <div className="p-2 bg-amber-50 rounded-lg">{item.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
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

          {/* SPORTS ACHIEVEMENTS */}
          <section className="space-y-12">
            <SectionHeading
              badge="Athletic Dominance"
              title="Sports Achievements"
              subtitle="Champions in aquatic meets, soccer tournaments, lawn tennis, and track events."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Delhi State Inter-School Swimming Trophy",
                  desc: "School aquatic team bagged 12 Gold, 6 Silver, and overall Team Championship Trophy in Under-17 division.",
                  badge: "Swimming Gold",
                },
                {
                  title: "Under-19 CBSE Football Champions",
                  desc: "Boys soccer team won the CBSE North Zone Inter-School Tournament held at Dwarka Sports Complex.",
                  badge: "Football Cup",
                },
                {
                  title: "National Junior Lawn Tennis Championship",
                  desc: "Student athlete Ananya Verma represented Delhi state and bagged 1st Runner-Up in Singles category.",
                  badge: "Tennis Trophy",
                },
              ].map((item, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="emerald" size="sm">
                        {item.badge}
                      </Badge>
                      <Dumbbell className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
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

          {/* CULTURAL ACHIEVEMENTS & AWARDS */}
          <section className="space-y-12">
            <SectionHeading
              badge="Arts & Innovation"
              title="Cultural & STEM Awards"
              subtitle="Excellence in performing arts, Model United Nations debates, and robotics fairs."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "1st Prize - National CBSE STEM Fair 2025",
                  desc: "Autonomous solar grid drone project won top honor at National Science & Technology Innovation Summit.",
                  badge: "STEM Robotics",
                },
                {
                  title: "Best Delegation Award - Delhi International MUN",
                  desc: "Student debaters won Best Delegation Trophy competing against 45 premier schools across India.",
                  badge: "MUN Debating",
                },
                {
                  title: "State Classical Folk Dance Championship",
                  desc: "Heritage performing arts troupe secured 1st position at Delhi Cultural Directorate Youth Fest.",
                  badge: "Performing Arts",
                },
              ].map((item, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="primary" size="sm">
                        {item.badge}
                      </Badge>
                      <Music className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{item.title}</CardTitle>
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

          {/* SCHOOL MILESTONES */}
          <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <Badge variant="gold" size="sm" className="mb-2">
                CHRONOLOGY
              </Badge>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                School Milestones & Honors
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { year: "2001", title: "Foundation", desc: "Established as a pioneer in value-based holistic education." },
                { year: "2012", title: "Best CBSE School Award", desc: "Awarded by Directorate of Education Delhi." },
                { year: "2019", title: "Atal Tinkering STEM Lab", desc: "Recognized as NITI Aayog model Tinkering Lab." },
                { year: "2025", title: "Zero-Waste Green Campus", desc: "ISO 9001 certified eco-friendly 15-acre campus." },
              ].map((ms, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-2xl font-bold text-amber-600 font-heading block">{ms.year}</span>
                  <h4 className="text-base font-bold font-heading text-slate-900">{ms.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ms.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Admission Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry"
        description="Connect with counselor."
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
