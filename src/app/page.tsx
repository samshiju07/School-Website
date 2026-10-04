"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import {
  Sparkles,
  Award,
  BookOpen,
  Users,
  Building2,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Trophy,
  GraduationCap,
  Microscope,
  HeartHandshake,
  FileText,
  PhoneCall,
  BellRing,
  Cpu,
  Star,
  Quote,
  MapPin,
  Mail,
  Clock,
  Shield,
  Layers,
  Sparkle,
} from "lucide-react";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsApplyModalOpen(false);
      alert("Thank you! Registration application submitted successfully (Frontend Demo).");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-amber-500/20">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
          <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-6 space-y-6">
                {/* Admissions Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-xs">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Admissions Open 2027-28</span>
                </div>

                {/* School Name & Headline */}
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase font-heading block">
                    DELHI HERITAGE WORLD SCHOOL
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                    Cultivating <span className="gold-gradient-text">Academic Excellence</span> & Indian Ethos
                  </h1>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light max-w-xl">
                  Empowering visionary global leaders through CBSE curriculum rigor, modern STEM innovation, sports mastery, and moral strength on a 15-acre green eco-campus.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    variant="gold"
                    size="lg"
                    leftIcon={<Sparkles className="w-5 h-5" />}
                    onClick={() => setIsApplyModalOpen(true)}
                  >
                    Apply Now
                  </Button>

                  <Link href="#about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-white border-slate-700 hover:bg-slate-800 hover:text-amber-400"
                    >
                      Explore School ↓
                    </Button>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>CBSE Affiliated #2130894</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>98% Board Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>15-Acre Eco Campus</span>
                  </div>
                </div>
              </div>

              {/* Hero Right Visual Slot Placeholder */}
              <div className="lg:col-span-6">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 opacity-25 blur-xl" />
                  <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-3 shadow-2xl space-y-4">
                    {/* Reusable Image Placeholder for Hero */}
                    <ImagePlaceholder
                      aspectRatio="16/9"
                      label="Add School Campus Hero Photo"
                      sublabel="Upload 1920x1080 photo of school building facade & green lawns"
                      className="min-h-[280px]"
                    />

                    <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60 flex items-center justify-between text-xs text-slate-200">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
                        <span>Admissions Desk Active for Nursery to Class XI</span>
                      </div>
                      <Badge variant="gold" size="sm">
                        2027-28
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. ABOUT SCHOOL */}
        {/* ========================================================= */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Institutional Overview"
              title="About Delhi Heritage World School"
              subtitle="Nurturing intellectual mastery, moral uprightness, and compassionate leadership since 2001."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Introduction */}
              <Card accentBorder className="bg-slate-50/50 p-2 flex flex-col">
                <CardHeader>
                  <Badge variant="gold" size="sm" className="w-fit mb-2">
                    OUR HERITAGE
                  </Badge>
                  <CardTitle className="text-2xl">Holistic Foundation</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Delhi Heritage World School stands as a beacon of quality CBSE education in New Delhi. Spread across a serene 15-acre green eco-campus, we synthesize modern scientific inquiry with timeless Indian cultural values.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card accentBorder className="bg-slate-50/50 p-2 flex flex-col">
                <CardHeader>
                  <Badge variant="emerald" size="sm" className="w-fit mb-2">
                    OUR VISION
                  </Badge>
                  <CardTitle className="text-2xl">Global Visionaries</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To inspire and equip every student to attain academic brilliance, intellectual curiosity, and ethical responsibility, preparing them to lead with distinction in a globalized society.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card accentBorder className="bg-slate-50/50 p-2 flex flex-col">
                <CardHeader>
                  <Badge variant="primary" size="sm" className="w-fit mb-2">
                    OUR MISSION
                  </Badge>
                  <CardTitle className="text-2xl">Value-Based Mastery</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To deliver continuous comprehensive education through state-of-the-art facilities, expert faculty mentorship, competitive JEE/NEET foundational coaching, and rich co-curricular programs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-2">
              <Link href="/about">
                <Button variant="gold" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. WHY CHOOSE OUR SCHOOL (6 CARDS) */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Educational Pillars"
              title="Why Choose Our School"
              subtitle="6 core advantages that define our commitment to your child's success."
              align="center"
              className="[&_h2]:text-white [&_p]:text-slate-300"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-7 h-7 text-amber-400" />,
                  title: "Experienced Faculty",
                  desc: "Ph.D. and Master's trained educators with a 1:15 teacher-to-student ratio ensuring personalized guidance.",
                },
                {
                  icon: <Building2 className="w-7 h-7 text-amber-400" />,
                  title: "Modern Infrastructure",
                  desc: "15-acre green eco-campus with smart classrooms, central e-library, and air-conditioned wings.",
                },
                {
                  icon: <HeartHandshake className="w-7 h-7 text-amber-400" />,
                  title: "Holistic Education",
                  desc: "Balanced emphasis on academic rigor, moral values, fine arts, classical music, and leadership development.",
                },
                {
                  icon: <Trophy className="w-7 h-7 text-amber-400" />,
                  title: "Sports & Activities",
                  desc: "Olympic-standard sports complex including swimming pool, lawn tennis court, football turf, and cricket nets.",
                },
                {
                  icon: <Cpu className="w-7 h-7 text-amber-400" />,
                  title: "Technology Enabled Learning",
                  desc: "Atal Tinkering STEM & Robotics lab, 3D prototyping, AI Python coding, and smart interactive boards.",
                },
                {
                  icon: <Shield className="w-7 h-7 text-amber-400" />,
                  title: "Safe & Supportive Environment",
                  desc: "24/7 CCTV surveillance, GPS-tracked AC transport fleet, female attendants, and full-time medical infirmary.",
                },
              ].map((card, idx) => (
                <Card
                  key={idx}
                  className="bg-slate-800 border-slate-700 text-white hover:border-amber-500/50 transition-all hover:-translate-y-1.5"
                >
                  <CardHeader>
                    <div className="p-3 bg-slate-700/60 rounded-xl w-fit mb-3 border border-slate-600">
                      {card.icon}
                    </div>
                    <CardTitle className="text-white text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 text-sm leading-relaxed">
                      {card.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. ACADEMICS */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Curriculum Structure"
              title="Academic Programs & Wings"
              subtitle="Progressive CBSE curriculum pathways tailored for every age group."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  badge: "Nursery - Grade V",
                  title: "Primary School",
                  desc: "Focusing on language fluency, foundational math concepts, sensory activities, and social-emotional growth.",
                  points: ["Play-way methodology", "Activity rooms", "Foundation reading"],
                },
                {
                  badge: "Grade VI - VIII",
                  title: "Middle School",
                  desc: "Analytical science inquiry, mathematical problem solving, computer coding, social sciences, and languages.",
                  points: ["Experiential learning", "STEM robotics", "Language lab"],
                },
                {
                  badge: "Grade IX - X",
                  title: "Secondary School",
                  desc: "Rigorously preparing students for CBSE Class X Board examinations with project work and term assessments.",
                  points: ["Board exam prep", "Science practicals", "Career guidance"],
                },
                {
                  badge: "Grade XI - XII",
                  title: "Senior Secondary",
                  desc: "Specialized Science, Commerce, and Humanities streams with integrated JEE/NEET, CUET & CA mentoring.",
                  points: ["PCM/PCB & AI", "Commerce & Economics", "Humanities & Law"],
                },
              ].map((wing, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-slate-50/50">
                  <CardHeader>
                    <Badge variant="gold" size="sm" className="w-fit mb-2">
                      {wing.badge}
                    </Badge>
                    <CardTitle className="text-xl">{wing.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {wing.desc}
                    </CardDescription>
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      {wing.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white">
                    <Link href="/academics" className="w-full">
                      <Button variant="ghost" size="sm" fullWidth>
                        Explore Curriculum →
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. PRINCIPAL'S MESSAGE */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-y border-amber-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Principal Photo Placeholder */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-500 opacity-30 blur-xl" />
                  <div className="relative bg-slate-900 border border-slate-800 p-3 rounded-3xl shadow-2xl">
                    <ImagePlaceholder
                      variant="portrait"
                      aspectRatio="3/4"
                      label="Principal Photo"
                      sublabel="Upload portrait image of Principal Dr. Ananya Mukherjee"
                      className="min-h-[340px]"
                    />
                  </div>
                </div>
              </div>

              {/* Principal Message Text */}
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="gold" size="sm" className="uppercase tracking-widest">
                  PRINCIPAL&apos;S DESK
                </Badge>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white leading-tight">
                  &ldquo;Empowering Mind, Character & Future Leadership&rdquo;
                </h2>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Welcome to Delhi Heritage World School. Education here is a transformative journey designed to ignite curiosity, foster critical thinking, and instill core moral principles.
                  </p>
                  <p>
                    Our dedicated faculty strives every day to create an inclusive environment where students are encouraged to excel in academics, innovate in STEM labs, shine in athletic arenas, and embody human compassion.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 font-bold font-heading text-xl flex items-center justify-center shadow-lg">
                    AM
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-heading text-white">Dr. Ananya Mukherjee</h4>
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                      Principal & Educational Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FACILITIES */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="15-Acre Infrastructure"
              title="Campus Facilities"
              subtitle="State-of-the-art amenities providing a rich environment for learning and development."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Smart Classrooms", desc: "Interactive digital displays, air-conditioning, and ergonomic seating in every classroom.", label: "Smart Classroom Photo" },
                { title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry, and Biology research workstations.", label: "Physics/Chemistry Lab Photo" },
                { title: "Digital Central Library", desc: "Stocked with 25,000+ books, academic journals, e-readers, and quiet study pods.", label: "Digital Library Photo" },
                { title: "Computer & AI Lab", desc: "High-speed internet, Python development stations, and 3D printing equipment.", label: "Computer & AI Lab Photo" },
                { title: "Olympic Sports Ground", desc: "Football turf, half-Olympic swimming pool, tennis court, and cricket nets.", label: "Sports Field Photo" },
                { title: "School Auditorium", desc: "Acoustically designed 800-seat theater for cultural events and MUN debates.", label: "Auditorium Photo" },
              ].map((fac, idx) => (
                <Card key={idx} hoverable className="bg-white overflow-hidden flex flex-col">
                  <div className="p-2 bg-slate-100">
                    <ImagePlaceholder
                      aspectRatio="16/9"
                      label={fac.label}
                      sublabel="Upload facility image asset"
                      className="min-h-[180px]"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{fac.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {fac.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link href="/facilities">
                <Button variant="outline" size="md">
                  View All Campus Facilities →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. ACHIEVEMENTS & STATS */}
        {/* ========================================================= */}
        <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Legacy of Success"
              title="Our Key Achievements"
              subtitle="Reflecting a tradition of continuous educational excellence."
              align="center"
              className="[&_h2]:text-slate-950 [&_p]:text-slate-900"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "25+", label: "Years of Educational Excellence" },
                { number: "5,000+", label: "Distinguished Global Alumni" },
                { number: "98%", label: "CBSE Board Distinction Rate" },
                { number: "50+", label: "State & National Awards" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 text-white p-8 rounded-3xl text-center space-y-2 border border-slate-900 shadow-xl"
                >
                  <div className="text-4xl sm:text-5xl font-extrabold font-heading text-amber-400">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. LATEST NOTICES */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Public Circulars"
              title="Latest School Notices"
              subtitle="Stay informed with official academic and CBSE announcements."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  date: "Oct 02, 2026",
                  category: "Exams",
                  title: "Class X & XII Mid-Term Examination Date Sheet 2026",
                  desc: "Detailed timetable for Class X and XII mid-term board preparatory exams.",
                },
                {
                  date: "Sep 28, 2026",
                  category: "Admissions",
                  title: "Admissions Entrance Test Schedule 2027-28",
                  desc: "Assessment dates and syllabus guidelines for Nursery to Grade IX applicants.",
                },
                {
                  date: "Sep 20, 2026",
                  category: "Holidays",
                  title: "Dussehra & Autumn Break Holiday Notification",
                  desc: "School will remain closed for Autumn break from October 11 to October 15.",
                },
              ].map((notice, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-slate-50/50">
                  <CardHeader>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <Badge variant="gold" size="sm">
                        {notice.category}
                      </Badge>
                      <span className="text-slate-400 font-medium">{notice.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-snug">{notice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 text-xs leading-relaxed">
                      {notice.desc}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="bg-white">
                    <Link href="/notice-board" className="w-full">
                      <Button variant="ghost" size="sm" fullWidth>
                        Read Notice →
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link href="/notice-board">
                <Button variant="gold" size="md">
                  View All Notices & Circulars
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. GALLERY PREVIEW */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Vibrant Campus Moments"
              title="Gallery Preview"
              subtitle="Glimpses of life, cultural events, sports meets, and academic activities."
              align="center"
              className="[&_h2]:text-white [&_p]:text-slate-300"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Annual Cultural Day Fest", label: "Annual Fest Photo", category: "Cultural Event" },
                { title: "Inter-School Sports Meet", label: "Sports Meet Photo", category: "Athletics" },
                { title: "Robotics & Science Exhibition", label: "Robotics Exhibition Photo", category: "STEM" },
                { title: "Classical Music & Dance", label: "Music Academy Photo", category: "Performing Arts" },
                { title: "Central Library Reading Session", label: "Library Photo", category: "Academics" },
                { title: "15-Acre Eco Campus Lawns", label: "Campus Greenary Photo", category: "Campus" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label={item.label}
                    sublabel={`Upload image for ${item.title}`}
                    className="min-h-[200px]"
                  />
                  <div className="flex items-center justify-between text-xs px-1">
                    <span className="font-bold text-slate-200">{item.title}</span>
                    <Badge variant="gold" size="sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link href="/gallery">
                <Button variant="gold" size="md">
                  Explore Full Photo Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. TESTIMONIALS */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Parent & Student Feedback"
              title="What Parents & Alumni Say"
              subtitle="Real experiences from our school community."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The individual attention and JEE foundation coaching at Delhi Heritage helped my son achieve 99.4% in CBSE Boards and secure admission in IIT Delhi.",
                  name: "Mr. Rajesh Sharma",
                  relation: "Parent of Class XII Board Topper",
                },
                {
                  quote: "An outstanding blend of traditional Indian values and modern STEM robotics. The teachers go above and beyond to mentor every student.",
                  name: "Dr. Meenakshi Verma",
                  relation: "Parent of Class VIII Student",
                },
                {
                  quote: "My 12 years at Delhi Heritage shaped not just my career in medicine, but taught me lifelong ethics, leadership, and public speaking.",
                  name: "Dr. Rohan Malhotra",
                  relation: "Alumnus (Batch of 2018)",
                },
              ].map((test, idx) => (
                <Card key={idx} accentBorder hoverable className="bg-slate-50/50 flex flex-col justify-between">
                  <CardHeader>
                    <div className="flex items-center space-x-1 text-amber-500 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <CardDescription className="text-slate-700 text-sm leading-relaxed italic">
                      &ldquo;{test.quote}&rdquo;
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="bg-white border-t border-slate-100 flex items-center gap-3">
                    {/* Empty Portrait Avatar Placeholder */}
                    <ImagePlaceholder
                      variant="avatar"
                      aspectRatio="1/1"
                      label="Photo"
                      className="w-10 h-10 shrink-0"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-heading">{test.name}</div>
                      <div className="text-xs text-amber-700 font-medium">{test.relation}</div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 11. ADMISSIONS CTA */}
        {/* ========================================================= */}
        <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Badge variant="primary" size="md" className="bg-slate-950 text-amber-400 border-slate-900 uppercase font-bold">
              Admissions Open 2027-28
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-slate-950 max-w-3xl mx-auto">
              Give Your Child a Better Future
            </h2>

            <p className="text-slate-950 font-medium text-base sm:text-lg max-w-2xl mx-auto">
              Enroll your child at Delhi Heritage World School today. Experience academic brilliance, modern facilities, and rich cultural values.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                className="bg-slate-950 text-white hover:bg-slate-900 shadow-xl px-8"
                leftIcon={<Sparkles className="w-5 h-5 text-amber-400" />}
                onClick={() => setIsApplyModalOpen(true)}
              >
                Apply for Admission
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 12. CONTACT PREVIEW */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SectionHeading
              badge="Visit Our Campus"
              title="Contact & Location"
              subtitle="Schedule a tour of our 15-acre green eco-campus in New Delhi."
              align="center"
              className="[&_h2]:text-white [&_p]:text-slate-300"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-heading text-white">Address</h4>
                      <p className="text-xs text-slate-300 leading-relaxed mt-1">
                        Sector 18, Heritage Expressway, Knowledge City, New Delhi - 110075
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-heading text-white">Phone</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        +91 (011) 2874-9000 / +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-heading text-white">Email</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        admissions@delhiheritage.edu.in
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="block">
                  <Button variant="gold" size="md" fullWidth>
                    Go to Full Contact Page →
                  </Button>
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="lg:col-span-7">
                <div className="bg-slate-800 p-3 rounded-3xl border border-slate-700">
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label="Interactive Google Map View"
                    sublabel="Upload embed map frame or campus entrance location asset"
                    className="min-h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Admission Registration Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry 2027-28"
        description="Fill out student details for registration & campus tour schedule."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsApplyModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="gold"
              onClick={handleApplySubmit}
              isLoading={formSubmitted}
            >
              Submit Application
            </Button>
          </>
        }
      >
        <form onSubmit={handleApplySubmit} className="space-y-4">
          <Input label="Student Full Name" placeholder="Enter student's full name" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Date of Birth" type="date" required />
            <Select
              label="Grade Seeking Admission"
              required
              options={[
                { label: "Nursery", value: "nursery" },
                { label: "Kindergarten (KG)", value: "kg" },
                { label: "Class I - V (Primary)", value: "primary" },
                { label: "Class VI - VIII (Middle)", value: "middle" },
                { label: "Class IX", value: "class-9" },
                { label: "Class XI Science", value: "class-11-sci" },
                { label: "Class XI Commerce", value: "class-11-comm" },
                { label: "Class XI Humanities", value: "class-11-hum" },
              ]}
            />
          </div>
          <Input label="Parent / Guardian Name" placeholder="Parent name" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Mobile Phone" type="tel" placeholder="+91 98765 43210" required />
            <Input label="Email Address" type="email" placeholder="email@example.com" required />
          </div>
          <Textarea label="Address & Previous School Details" placeholder="Enter current residence city and previous school..." />
        </form>
      </Modal>
    </div>
  );
}
