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
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { EmptyState } from "@/components/ui/EmptyState";
import { Modal } from "@/components/ui/Modal";
import { Bell, Calendar, Download, Search, FileText, Filter, ArrowRight, Sparkles } from "lucide-react";

export interface NoticeItem {
  id: string;
  title: string;
  category: "CBSE" | "Exams" | "Sports" | "Holidays" | "Admissions";
  date: string;
  monthYear: string;
  description: string;
  target: string;
  important?: boolean;
}

export const mockNotices: NoticeItem[] = [
  {
    id: "not-1",
    title: "CBSE Class X & XII Mid-Term Examination Date Sheet 2026 Announced",
    category: "Exams",
    date: "October 02, 2026",
    monthYear: "October 2026",
    description: "Detailed day-wise timetable for Class X and XII mid-term examinations commencing from October 20, 2026.",
    target: "Class X & XII Students & Parents",
    important: true,
  },
  {
    id: "not-2",
    title: "Admissions Entrance Assessment Schedule for Academic Session 2027-28",
    category: "Admissions",
    date: "September 28, 2026",
    monthYear: "September 2026",
    description: "Guidelines, registration fee details, and syllabus for entrance assessment for Nursery to Grade IX applicants.",
    target: "Prospective Applicants",
    important: true,
  },
  {
    id: "not-3",
    title: "Inter-School Swimming & Athletics Tournament Selection Trials",
    category: "Sports",
    date: "September 25, 2026",
    monthYear: "September 2026",
    description: "Selection trials for Delhi State Inter-School Aquatic Championship at the Olympic Sports Complex.",
    target: "Grade VI - XII Sports Cadets",
  },
  {
    id: "not-4",
    title: "Dussehra & Autumn Break Holidays Notification",
    category: "Holidays",
    date: "September 20, 2026",
    monthYear: "September 2026",
    description: "School will remain closed for Autumn Break from October 11 to October 15, 2026.",
    target: "All Students & Staff",
  },
  {
    id: "not-5",
    title: "CBSE Mandatory Public Disclosure Upgradation Verification",
    category: "CBSE",
    date: "August 15, 2026",
    monthYear: "August 2026",
    description: "Updated NBC building safety certificate and fire clearance compliance documents published.",
    target: "Public Compliance",
  },
];

export default function NoticeBoardPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDate, setSelectedDate] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredNotices = mockNotices.filter((n) => {
    const matchesCategory = selectedCategory === "All" || n.category === selectedCategory;
    const matchesDate = selectedDate === "All" || n.monthYear === selectedDate;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDate && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Institutional News, Notices & Circulars"
          subtitle="Official announcements, CBSE updates, examination schedules, and academic circulars."
          categoryBadge="Information Desk"
          breadcrumbs={[{ label: "Notice Board" }]}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pt-12">
          {/* Controls Bar: Search, Category & Date Filters */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-6">
                <Input
                  placeholder="Search circulars by keyword..."
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="md:col-span-6">
                <Select
                  label=""
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  options={[
                    { label: "All Dates & Months", value: "All" },
                    { label: "October 2026", value: "October 2026" },
                    { label: "September 2026", value: "September 2026" },
                    { label: "August 2026", value: "August 2026" },
                  ]}
                  placeholder="Filter by Month/Year"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              {["All", "Exams", "Admissions", "CBSE", "Sports", "Holidays"].map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "All" ? "All Categories" : cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Notice Listings */}
          {filteredNotices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNotices.map((notice) => (
                <Card key={notice.id} accentBorder={notice.important} hoverable className="bg-white flex flex-col justify-between">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant={notice.important ? "danger" : "gold"} size="sm" dot={notice.important}>
                        {notice.category}
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-snug">{notice.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-slate-600 text-sm leading-relaxed mb-3">
                      {notice.description}
                    </CardDescription>
                    <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg w-fit">
                      Target: {notice.target}
                    </div>
                  </CardContent>

                  <CardFooter className="bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      leftIcon={<Download className="w-4 h-4" />}
                      onClick={() => alert(`Downloading ${notice.title} (PDF Circular)`)}
                    >
                      Download PDF
                    </Button>

                    <Link href={`/notice-board/${notice.id}`}>
                      <Button variant="gold" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                        Read Notice
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Circulars Found"
              description={`No notices match category "${selectedCategory}", date "${selectedDate}", or query "${searchQuery}".`}
              action={
                <Button
                  variant="gold"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedDate("All");
                    setSearchQuery("");
                  }}
                >
                  Reset All Search Filters
                </Button>
              }
            />
          )}
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
