"use client";

import React, { useState } from "react";
import { PageHeader } from "../ui/PageHeader";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Breadcrumb } from "../ui/Breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/Card";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Modal } from "../ui/Modal";
import { Spinner, Skeleton, CardSkeleton } from "../ui/LoadingState";
import { EmptyState } from "../ui/EmptyState";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";
import {
  Sparkles,
  Send,
  User,
  Mail,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Search,
  FileText,
  Award,
  Layers,
  GraduationCap,
  Image as ImageIcon,
} from "lucide-react";

export const ComponentGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const [formInputVal, setFormInputVal] = useState("Aarav Sharma");
  const [formEmailVal, setFormEmailVal] = useState("parent@example.com");
  const [formGradeVal, setFormGradeVal] = useState("class-11-science");
  const [formMsgVal, setFormMsgVal] = useState(
    "We would like to request a campus tour for Class 11 Science Stream admission."
  );
  const [formErrorState, setFormErrorState] = useState(false);

  const [showSkeleton, setShowSkeleton] = useState(false);

  const simulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingBtn(true);
    setTimeout(() => {
      setIsLoadingBtn(false);
      alert("Form validation & demo interaction complete! (Frontend phase)");
    }, 1500);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Page Header Component Demo */}
      <PageHeader
        title="Institutional Design System & Component Library"
        subtitle="Explore all reusable frontend components crafted for Delhi Heritage World School. Clean typography, responsive spacing, and institutional elegance."
        categoryBadge="Phase 1 • UI Component Specification"
        breadcrumbs={[
          { label: "Design System", href: "#" },
          { label: "Component Gallery" },
        ]}
        action={
          <Button
            variant="gold"
            size="lg"
            leftIcon={<Sparkles className="w-5 h-5" />}
            onClick={() => setIsModalOpen(true)}
          >
            Launch Interactive Modal
          </Button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Reusable Image Placeholders Showcase */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-amber-600" /> Reusable Image Placeholders Component
            </h3>
            <Badge variant="gold">Zero External Network Requests</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                16/9 Hero / Card Ratio
              </span>
              <ImagePlaceholder
                aspectRatio="16/9"
                label="Add Hero Image"
                sublabel="Recommended: 1920x1080 resolution"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                3/4 Portrait Ratio
              </span>
              <ImagePlaceholder
                variant="portrait"
                aspectRatio="3/4"
                label="Principal / Faculty Photo"
                sublabel="Upload portrait photo asset"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                1/1 Square Avatar Ratio
              </span>
              <div className="flex items-center justify-center p-6 bg-slate-100 rounded-2xl border border-slate-200">
                <ImagePlaceholder
                  variant="avatar"
                  aspectRatio="1/1"
                  label="Avatar"
                  className="w-20 h-20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <Layers className="w-6 h-6 text-amber-600" /> Buttons Component
            </h3>
            <Badge variant="gold">Accessible Focus & Micro-interactions</Badge>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 block">
                Button Variants
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" leftIcon={<GraduationCap className="w-4 h-4" />}>
                  Primary Navy
                </Button>
                <Button variant="gold" leftIcon={<Sparkles className="w-4 h-4" />}>
                  Gold Accent
                </Button>
                <Button variant="secondary" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                  Secondary Emerald
                </Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger" leftIcon={<AlertCircle className="w-4 h-4" />}>
                  Danger Action
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 block">
                Sizes & States
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">
                  Small (sm)
                </Button>
                <Button variant="primary" size="md">
                  Medium (md)
                </Button>
                <Button variant="primary" size="lg">
                  Large (lg)
                </Button>
                <Button variant="gold" size="md" isLoading>
                  Loading State
                </Button>
                <Button variant="outline" size="md" disabled>
                  Disabled Button
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-600" /> Badges Component
            </h3>
            <Badge variant="primary">Metadata & Status Labels</Badge>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="gold" size="md" dot>
                ADMISSIONS OPEN 2027-28
              </Badge>
              <Badge variant="emerald" size="md" dot>
                CBSE AFFILIATED
              </Badge>
              <Badge variant="primary" size="md">
                CLASS IX - XII
              </Badge>
              <Badge variant="secondary" size="md">
                STEM & AI LAB
              </Badge>
              <Badge variant="danger" size="md" dot>
                URGENT CIRCULAR
              </Badge>
              <Badge variant="outline" size="md">
                OUTLINE STYLE
              </Badge>
            </div>
          </div>
        </section>

        {/* Form Controls */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Form Controls (Inputs, Selects, Textareas)
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFormErrorState(!formErrorState)}
            >
              Toggle Error Validation ({formErrorState ? "ON" : "OFF"})
            </Button>
          </div>

          <form
            onSubmit={simulateSubmit}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Student Full Name"
                placeholder="Enter student's name"
                required
                leftIcon={<User className="w-4 h-4 text-slate-400" />}
                value={formInputVal}
                onChange={(e) => setFormInputVal(e.target.value)}
                error={formErrorState ? "Student name is required for registration" : undefined}
                helperText="Must match birth certificate / previous school mark sheet."
              />

              <Input
                label="Parent / Guardian Email"
                type="email"
                placeholder="parent@example.com"
                required
                leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                value={formEmailVal}
                onChange={(e) => setFormEmailVal(e.target.value)}
                error={formErrorState ? "Please enter a valid official email address" : undefined}
                helperText="Important circulars will be sent to this email."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Seeking Admission Grade"
                required
                value={formGradeVal}
                onChange={(e) => setFormGradeVal(e.target.value)}
                error={formErrorState ? "Please select a grade" : undefined}
                options={[
                  { label: "Pre-Primary (Nursery)", value: "nursery" },
                  { label: "Kindergarten (KG)", value: "kg" },
                  { label: "Class I to V (Primary Wing)", value: "primary" },
                  { label: "Class VI to VIII (Middle Wing)", value: "middle" },
                  { label: "Class IX & X (Secondary)", value: "secondary" },
                  { label: "Class XI - Science Stream", value: "class-11-science" },
                  { label: "Class XI - Commerce Stream", value: "class-11-commerce" },
                  { label: "Class XI - Humanities Stream", value: "class-11-humanities" },
                ]}
              />

              <Input
                label="Primary Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                required
                helperText="10-digit mobile number for SMS alerts."
              />
            </div>

            <Textarea
              label="Additional Notes / Campus Tour Request"
              placeholder="Tell us about the applicant's interests, previous school, or specific questions..."
              maxLength={300}
              value={formMsgVal}
              onChange={(e) => setFormMsgVal(e.target.value)}
              helperText="Optional details to help us prepare your visit."
            />

            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="ghost">
                Reset Form
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="lg"
                isLoading={isLoadingBtn}
                leftIcon={<Send className="w-4 h-4" />}
              >
                Submit Admission Inquiry
              </Button>
            </div>
          </form>
        </section>

        {/* Loading Skeletons */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Loading & Skeleton Components
            </h3>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-8">
            <div className="flex items-center gap-8 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-2">Spinner (sm)</span>
                <Spinner size="sm" label="" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-2">Spinner (md)</span>
                <Spinner size="md" label="Loading data..." />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-2">Spinner (lg)</span>
                <Spinner size="lg" label="Processing..." />
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 block">
                Card Skeleton Grid (Asynchronous Content Placeholder)
              </span>
              <CardSkeleton count={3} />
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Empty State Component
            </h3>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <EmptyState
              title="No Circulars Found"
              description="There are currently no active public notices matching your selected category filter."
              action={
                <Button variant="gold" size="md" leftIcon={<Search className="w-4 h-4" />}>
                  Reset Category Filter
                </Button>
              }
            />
          </div>
        </section>
      </div>

      {/* Interactive Modal Component Demo */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Admission Counseling Inquiry"
        description="Schedule a 1-on-1 interaction with our Senior Academic Counselor."
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="gold"
              onClick={() => {
                alert("Counseling session booked successfully! (Demo)");
                setIsModalOpen(false);
              }}
            >
              Confirm Appointment
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Parent / Guardian Name" placeholder="e.g. Vikram Sharma" required />
          <Input label="Contact Mobile" placeholder="+91 98765 43210" required />
          <Select
            label="Preferred Date"
            options={[
              { label: "Tomorrow at 10:00 AM", value: "opt-1" },
              { label: "Tomorrow at 2:00 PM", value: "opt-2" },
              { label: "Saturday at 11:00 AM", value: "opt-3" },
            ]}
          />
          <Textarea label="Questions for Counselor" placeholder="Specify any stream or hostel queries..." />
        </div>
      </Modal>
    </div>
  );
};
