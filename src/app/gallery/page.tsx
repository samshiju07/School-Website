"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Camera, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "School Life" | "Events" | "Sports" | "Cultural" | "Campus" | "Classrooms";
  tag: string;
  description: string;
  date: string;
}

const mockGalleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Annual Cultural Day & Symphony 2025",
    category: "Cultural",
    tag: "School Auditorium",
    description: "Students performing traditional classical Indian dance & orchestra performance.",
    date: "December 2025",
  },
  {
    id: "gal-2",
    title: "Inter-School Swimming Championship",
    category: "Sports",
    tag: "Olympic Aquatic Complex",
    description: "Aquatics team competing in state finals at the half-Olympic swimming pool.",
    date: "November 2025",
  },
  {
    id: "gal-3",
    title: "Robotics & AI Tinkering Exhibition",
    category: "Events",
    tag: "Atal STEM Tinkering Lab",
    description: "Students demonstrating autonomous drones and 3D printed mechanical prototypes.",
    date: "October 2025",
  },
  {
    id: "gal-4",
    title: "15-Acre Eco Campus Aerial View",
    category: "Campus",
    tag: "Green Eco Grounds",
    description: "Lush green lawns, solar grid infrastructure, and administration building facade.",
    date: "October 2025",
  },
  {
    id: "gal-5",
    title: "Smart Digital Interactive Classroom",
    category: "Classrooms",
    tag: "Senior Secondary Wing",
    description: "Interactive flat-panel digital learning session in Class XI Science classroom.",
    date: "September 2025",
  },
  {
    id: "gal-6",
    title: "Morning Assembly & Yoga Session",
    category: "School Life",
    tag: "Central Quadrangle",
    description: "Daily morning yoga, Vedic prayers, and student council assembly.",
    date: "September 2025",
  },
  {
    id: "gal-7",
    title: "Annual Sports Day Athletics Final",
    category: "Sports",
    tag: "Synthetic Football Turf",
    description: "Sprint finals, high jump, and relay race champions receiving medals.",
    date: "August 2025",
  },
  {
    id: "gal-8",
    title: "Classical Music & Dance Academy",
    category: "Cultural",
    tag: "Fine Arts Studio",
    description: "Sitar, tabla, and classical Kathak dance workshop led by master gurus.",
    date: "August 2025",
  },
  {
    id: "gal-9",
    title: "Central E-Library Reading Session",
    category: "Classrooms",
    tag: "Digital Central Library",
    description: "Students researching in quiet study pods with digital e-reader terminals.",
    date: "July 2025",
  },
];

export default function GalleryPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "School Life",
    "Events",
    "Sports",
    "Cultural",
    "Campus",
    "Classrooms",
  ];

  const filteredItems = mockGalleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevLightboxImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Campus Life Photo & Video Gallery"
          subtitle="Glimpses of daily student life, annual cultural fests, sports meets, and academic milestones."
          categoryBadge="Visual Journey"
          breadcrumbs={[{ label: "Gallery" }]}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-16">
          {/* Category Filter Bar */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-amber-600" />
              <span>Filter Gallery ({filteredItems.length} Photos)</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "gold" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(cat);
                    setLightboxIndex(null);
                  }}
                >
                  {cat === "All" ? "All Photos" : cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <Card
                key={item.id}
                hoverable
                onClick={() => openLightbox(idx)}
                className="bg-white group overflow-hidden cursor-pointer"
              >
                <div className="p-2 bg-slate-100 relative">
                  <ImagePlaceholder
                    aspectRatio="16/9"
                    label={item.title}
                    sublabel={`Click to open full-screen lightbox preview`}
                    className="min-h-[200px]"
                  />
                  {/* Expand Overlay Indicator */}
                  <div className="absolute inset-2 rounded-xl bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-xs">
                    <div className="flex items-center gap-2 font-bold text-xs bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                      <span>View Lightbox</span>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <Badge variant="gold" size="sm">
                      {item.category}
                    </Badge>
                    <span className="text-[11px] text-slate-400 font-semibold">{item.tag}</span>
                  </div>
                  <CardTitle className="text-lg text-slate-900 leading-snug">{item.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* FRONTEND-ONLY IMAGE LIGHTBOX MODAL */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-slate-800 bg-slate-950 text-white">
              <div className="flex items-center gap-3">
                <Badge variant="gold" size="sm">
                  {currentLightboxItem.category}
                </Badge>
                <span className="text-xs text-slate-400">{currentLightboxItem.date}</span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="p-4 sm:p-6 relative bg-slate-950/50 flex items-center justify-center">
              <ImagePlaceholder
                aspectRatio="16/9"
                label={currentLightboxItem.title}
                sublabel="Full-screen Lightbox Container Slot • Upload high-resolution photo asset"
                className="w-full min-h-[320px] sm:min-h-[420px]"
              />

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={prevLightboxImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700 transition-all shadow-xl focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextLightboxImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 border border-slate-700 transition-all shadow-xl focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {currentLightboxItem.description}
                </p>
              </div>
              <div className="text-xs font-semibold text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg shrink-0">
                Image {(lightboxIndex ?? 0) + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

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
