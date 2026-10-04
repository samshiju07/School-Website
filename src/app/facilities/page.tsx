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
  Building2,
  Trophy,
  Cpu,
  BookOpen,
  ShieldCheck,
  Bus,
  HeartPulse,
  Utensils,
  ShieldAlert,
  Mic,
  Sparkles,
} from "lucide-react";

export default function FacilitiesPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const facilitiesList = [
    {
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      title: "Smart Classrooms",
      badge: "Digital Learning",
      desc: "Interactive 75-inch touch panels, dual air-conditioning, high-speed fiber internet, and ergonomic orthopedically approved furniture in every classroom.",
      imageLabel: "Smart Classroom Photo",
      sublabel: "Upload photo of interactive digital classroom",
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Science Laboratories",
      badge: "Physics, Chem & Bio",
      desc: "Dedicated advanced research laboratories for Physics, Chemistry, and Biology equipped with individual student experimentation stations and safety gear.",
      imageLabel: "Science Labs Photo",
      sublabel: "Upload photo of chemistry/physics laboratory",
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      title: "Computer & AI Laboratory",
      badge: "Robotics & Coding",
      desc: "120 high-performance computer terminals, Python AI workstations, Atal Tinkering 3D printers, and electronics prototyping kits.",
      imageLabel: "Computer Lab Photo",
      sublabel: "Upload photo of computer & robotics lab",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      title: "Digital Central Library",
      badge: "25,000+ Books",
      desc: "Expansive library with over 25,000 physical volumes, digital journal terminals, e-reader kiosks, and quiet individual study pods.",
      imageLabel: "Library Photo",
      sublabel: "Upload photo of central library reading room",
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-600" />,
      title: "Olympic Sports Complex",
      badge: "Athletics & Turf",
      desc: "Half-Olympic temperature-controlled swimming pool, FIFA-standard synthetic football turf, lawn tennis court, basketball court, and cricket nets.",
      imageLabel: "Sports Complex Photo",
      sublabel: "Upload photo of swimming pool & sports ground",
    },
    {
      icon: <Mic className="w-6 h-6 text-amber-600" />,
      title: "School Auditorium",
      badge: "800-Seat Capacity",
      desc: "Acoustically designed, climate-controlled 800-seat theater featuring professional stage lighting and surround audio for cultural fests & MUN debates.",
      imageLabel: "Auditorium Photo",
      sublabel: "Upload photo of school auditorium stage",
    },
    {
      icon: <Bus className="w-6 h-6 text-amber-600" />,
      title: "GPS-Tracked AC Transport",
      badge: "Safe Commute",
      desc: "Fleet of air-conditioned buses covering major routes in Delhi NCR, equipped with real-time GPS tracking, speed governors, and trained female attendants.",
      imageLabel: "School Bus Transport Photo",
      sublabel: "Upload photo of school bus fleet",
    },
    {
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      title: "Hygienic Student Cafeteria",
      badge: "Nutritious Meals",
      desc: "ISO-certified kitchen serving hot, nutritious vegetarian meals, fresh juices, and healthy snacks under nutritionist supervision.",
      imageLabel: "Cafeteria Photo",
      sublabel: "Upload photo of dining hall & cafeteria",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-amber-600" />,
      title: "Medical Room & Infirmary",
      badge: "24/7 Care",
      desc: "Fully equipped 4-bed medical infirmary staffed by resident doctor and qualified nurses, with dedicated ambulance tie-up for emergency care.",
      imageLabel: "Infirmary Photo",
      sublabel: "Upload photo of campus medical room",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      title: "Campus Security & 24/7 CCTV",
      badge: "Maximum Safety",
      desc: "350+ HD CCTV cameras monitoring every corner, biometric access control gates, security guards, and strict visitor verification systems.",
      imageLabel: "Security Control Room Photo",
      sublabel: "Upload photo of campus security setup",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="World-Class 15-Acre Campus Facilities"
          subtitle="Explore our 10 specialized facility centers engineered to foster safety, athletic excellence, and digital research."
          categoryBadge="Infrastructure Mastery"
          breadcrumbs={[{ label: "Facilities" }]}
          action={
            <Button
              variant="gold"
              size="lg"
              leftIcon={<Sparkles className="w-5 h-5" />}
              onClick={() => setIsApplyModalOpen(true)}
            >
              Book Campus Tour
            </Button>
          }
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
          <SectionHeading
            badge="10 Premium Amenities"
            title="State-of-the-Art School Infrastructure"
            subtitle="Providing an inspiring environment for every child."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitiesList.map((fac, idx) => (
              <Card key={idx} accentBorder hoverable className="bg-white flex flex-col overflow-hidden">
                <div className="p-3 bg-slate-100">
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label={fac.imageLabel}
                    sublabel={fac.sublabel}
                    className="min-h-[220px]"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="gold" size="sm">
                      {fac.badge}
                    </Badge>
                    <div className="p-2 bg-amber-50 rounded-lg">{fac.icon}</div>
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{fac.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    {fac.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Campus Tour Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Schedule Campus Visit"
        description="Select preferred date for guided campus tour."
      >
        <div className="space-y-4">
          <Input label="Parent / Guardian Name" required />
          <Input label="Mobile Phone" type="tel" placeholder="+91 98765 43210" required />
          <Select
            label="Preferred Visit Date"
            options={[
              { label: "Tomorrow at 10:00 AM", value: "opt-1" },
              { label: "Saturday at 11:00 AM", value: "opt-2" },
            ]}
          />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Confirm Visit Slot
          </Button>
        </div>
      </Modal>
    </div>
  );
}
