"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EmptyState } from "@/components/ui/EmptyState";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { GraduationCap, Award, BookOpen, Search, UserCheck } from "lucide-react";

interface FacultyMember {
  id: string;
  name: string;
  subject: string;
  dept: "Science" | "Mathematics" | "Commerce" | "Humanities" | "Computer Science & AI" | "Sports & Arts";
  qualification: string;
  experience: string;
  role: string;
}

const mockFaculty: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Ananya Mukherjee",
    subject: "Physics & Educational Policy",
    dept: "Science",
    qualification: "M.Sc. Physics (Gold Medalist), Ph.D.",
    experience: "22+ Years",
    role: "Principal & Academic Director",
  },
  {
    id: "fac-2",
    name: "Prof. Rajeshwar Sharma",
    subject: "Advanced Physics & Astronomy",
    dept: "Science",
    qualification: "M.Sc. Physics, B.Ed (Delhi Univ)",
    experience: "18+ Years",
    role: "Head of Science Department",
  },
  {
    id: "fac-3",
    name: "Mrs. Sunita Deshmukh",
    subject: "Pure & Applied Mathematics",
    dept: "Mathematics",
    qualification: "M.Sc. Mathematics, Olympiad Coach",
    experience: "15+ Years",
    role: "Head of Mathematics",
  },
  {
    id: "fac-4",
    name: "Dr. Vikramaditya Roy",
    subject: "Artificial Intelligence & Robotics",
    dept: "Computer Science & AI",
    qualification: "Ph.D. Computer Science, M.Tech",
    experience: "14+ Years",
    role: "Head of AI Tinkering Lab",
  },
  {
    id: "fac-5",
    name: "Mrs. Kavita Iyer",
    subject: "Accountancy & Financial Literacy",
    dept: "Commerce",
    qualification: "M.Com, CA Foundation Mentor",
    experience: "16+ Years",
    role: "Head of Commerce Stream",
  },
  {
    id: "fac-6",
    name: "Dr. Meera Saxena",
    subject: "Political Science & Public Policy",
    dept: "Humanities",
    qualification: "Ph.D. Political Science, MUN Director",
    experience: "13+ Years",
    role: "Head of Humanities Wing",
  },
  {
    id: "fac-7",
    name: "Mr. Gurpreet Singh",
    subject: "Physical Education & Athletics",
    dept: "Sports & Arts",
    qualification: "M.P.Ed, National Athlete",
    experience: "12+ Years",
    role: "Director of Sports",
  },
  {
    id: "fac-8",
    name: "Mrs. Shalini Rao",
    subject: "Chemistry & Nanotech Labs",
    dept: "Science",
    qualification: "M.Sc. Organic Chemistry, B.Ed",
    experience: "10+ Years",
    role: "Senior Chemistry Educator",
  },
];

export default function FacultyPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const departments = [
    "All",
    "Science",
    "Mathematics",
    "Commerce",
    "Humanities",
    "Computer Science & AI",
    "Sports & Arts",
  ];

  const filteredFaculty = mockFaculty.filter((member) => {
    const matchesDept = selectedDept === "All" || member.dept === selectedDept;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Distinguished Faculty & Educators"
          subtitle="Meet our team of passionate Master's & Ph.D. qualified educators dedicated to mentoring future leaders."
          categoryBadge="Academic Mentors"
          breadcrumbs={[{ label: "Faculty Directory" }]}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-16">
          {/* Department Filter UI & Search Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-80">
                <Input
                  placeholder="Search faculty by name or subject..."
                  leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Filter by Department ({filteredFaculty.length} Educators)
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDept === dept ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Faculty Cards Grid */}
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((fac) => (
                <Card key={fac.id} accentBorder hoverable className="bg-white flex flex-col">
                  {/* Reusable Image Placeholder for Teacher Photo */}
                  <div className="p-3 bg-slate-100">
                    <ImagePlaceholder
                      variant="portrait"
                      aspectRatio="4/3"
                      label={`${fac.name} Photo`}
                      sublabel={`Upload portrait image asset`}
                      className="min-h-[160px]"
                    />
                  </div>

                  <CardHeader className="pb-2">
                    <Badge variant="gold" size="sm" className="w-fit mb-1">
                      {fac.dept}
                    </Badge>
                    <CardTitle className="text-lg text-slate-900 leading-snug">{fac.name}</CardTitle>
                    <p className="text-xs text-amber-700 font-bold">{fac.role}</p>
                  </CardHeader>

                  <CardContent className="space-y-2 text-xs text-slate-600 mt-auto">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-800">{fac.subject}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{fac.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{fac.experience} Experience</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Faculty Members Found"
              description={`No educators match department "${selectedDept}" or search term "${searchQuery}".`}
              action={
                <Button
                  variant="gold"
                  onClick={() => {
                    setSelectedDept("All");
                    setSearchQuery("");
                  }}
                >
                  Reset Filter & Search
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
        title="Connect with Faculty"
        description="Schedule academic counseling interaction."
      >
        <div className="space-y-4">
          <Input label="Parent Name" required />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Confirm Interaction
          </Button>
        </div>
      </Modal>
    </div>
  );
}
