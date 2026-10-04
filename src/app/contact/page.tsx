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
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  Building2,
  CheckCircle2,
  Globe,
  Share2,
  Video,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Hero */}
        <PageHeader
          title="Contact Us & Schedule Campus Visit"
          subtitle="Connect with our admissions desk, academic counselors, or schedule a tour of our 15-acre green eco-campus in New Delhi."
          categoryBadge="Reach Delhi Heritage"
          breadcrumbs={[{ label: "Contact Us" }]}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-16">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card accentBorder hoverable className="bg-white">
              <CardHeader>
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Campus Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sector 18, Heritage Expressway, Knowledge City, New Delhi - 110075
                </p>
              </CardContent>
            </Card>

            <Card accentBorder hoverable className="bg-white">
              <CardHeader>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-2">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Phone Lines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 leading-relaxed">
                  +91 (011) 2874-9000 / 9001<br />
                  +91 98765 43210 (Admissions Desk)
                </p>
              </CardContent>
            </Card>

            <Card accentBorder hoverable className="bg-white">
              <CardHeader>
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl w-fit mb-2">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Official Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 leading-relaxed">
                  admissions@delhiheritage.edu.in<br />
                  principal@delhiheritage.edu.in
                </p>
              </CardContent>
            </Card>

            <Card accentBorder hoverable className="bg-white">
              <CardHeader>
                <div className="p-3 bg-rose-50 text-rose-600 rounded-xl w-fit mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">Office Visiting Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mon - Sat: 8:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form UI & Map Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form UI */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <Badge variant="gold" size="sm" className="mb-2">
                  DIRECT INQUIRY
                </Badge>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Send Us a Message (UI Only)
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Fill out your inquiry below. (Frontend design only - does not send real data).
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold font-heading text-emerald-950">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-emerald-800 text-xs max-w-md mx-auto">
                    Thank you! Reference number <strong className="text-emerald-950">MSG-2026-9042</strong> generated. Our admissions desk will get in touch with you shortly.
                  </p>
                  <Button variant="gold" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Your Full Name" placeholder="e.g. Vikram Sharma" required />
                    <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Email Address" type="email" placeholder="parent@example.com" required />
                    <Select
                      label="Department to Contact"
                      options={[
                        { label: "Admissions Desk", value: "admissions" },
                        { label: "Academic Counselor", value: "academics" },
                        { label: "Transport & Hostel", value: "transport" },
                        { label: "General Information", value: "general" },
                      ]}
                    />
                  </div>

                  <Textarea
                    label="Your Message or Inquiry Details"
                    placeholder="Enter your specific inquiry, campus visit preference, or grade query..."
                    rows={4}
                    required
                  />

                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    leftIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Inquiry Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map Placeholder & Social Links Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Map Placeholder */}
              <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-4 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-amber-400" />
                  <div>
                    <h4 className="text-lg font-bold font-heading text-white">Campus Map Location</h4>
                    <p className="text-xs text-slate-400">Knowledge City, New Delhi</p>
                  </div>
                </div>

                <ImagePlaceholder
                  aspectRatio="16/9"
                  label="Interactive Google Map View"
                  sublabel="Upload embed map frame or campus entrance asset"
                  className="min-h-[220px]"
                />
              </div>

              {/* Social Media Links */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
                <h4 className="text-base font-bold font-heading text-slate-900">
                  Connect On Social Media
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Globe className="w-4 h-4 text-amber-600" />, label: "Official Portal", href: "#" },
                    { icon: <Share2 className="w-4 h-4 text-amber-600" />, label: "Social Handles", href: "#" },
                    { icon: <MessageCircle className="w-4 h-4 text-amber-600" />, label: "WhatsApp Desk", href: "#" },
                    { icon: <Video className="w-4 h-4 text-amber-600" />, label: "YouTube Channel", href: "#" },
                  ].map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-xs font-semibold text-slate-800 transition-colors border border-slate-200"
                    >
                      {s.icon}
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
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
        title="Admission Inquiry"
        description="Quick registration."
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
