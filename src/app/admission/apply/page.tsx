"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Modal } from "@/components/ui/Modal";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  User,
  Mail,
  Phone,
  BookOpen,
  Upload,
  FileCheck,
  CreditCard,
  Printer,
  Home,
  Clock,
  ShieldCheck,
  AlertCircle,
  Sparkles,
  FileText,
  Edit2,
  Lock,
} from "lucide-react";

export default function MultiStepAdmissionPortal() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>("");

  // Step 1: Student Details State
  const [studentDetails, setStudentDetails] = useState({
    fullName: "Aarav Sharma",
    dob: "2015-04-12",
    gender: "male",
    grade: "primary",
    previousSchool: "St. Mark's Public School, New Delhi",
  });

  // Step 2: Parent Details State
  const [parentDetails, setParentDetails] = useState({
    parentName: "Vikram Sharma",
    phone: "+91 98765 43210",
    email: "vikram.sharma@example.com",
    occupation: "Senior Software Architect",
    address: "Flat 402, Heritage Heights, Sector 18, New Delhi - 110075",
  });

  // Step 3: Documents State (Frontend state only)
  const [documentFiles, setDocumentFiles] = useState({
    photo: "aarav_passport_photo.png",
    birthCertificate: "birth_certificate_official.pdf",
    marksheet: "class_4_marksheet.pdf",
    addressProof: "aadhaar_card_parent.pdf",
  });

  // Simulated Payment & Demo ID State
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
  const [demoApplicationId, setDemoApplicationId] = useState<string>("");

  // Handle Step 1 Validation & Next
  const handleStep1Next = () => {
    if (!studentDetails.fullName.trim()) {
      setValidationError("Please enter the student's full name.");
      return;
    }
    if (!studentDetails.dob) {
      setValidationError("Please select the student's date of birth.");
      return;
    }
    setValidationError("");
    setCurrentStep(2);
  };

  // Handle Step 2 Validation & Next
  const handleStep2Next = () => {
    if (!parentDetails.parentName.trim()) {
      setValidationError("Please enter parent/guardian full name.");
      return;
    }
    if (!parentDetails.phone.trim()) {
      setValidationError("Please enter primary mobile phone number.");
      return;
    }
    if (!parentDetails.email.trim()) {
      setValidationError("Please enter parent email address.");
      return;
    }
    setValidationError("");
    setCurrentStep(3);
  };

  // Handle Step 3 Next
  const handleStep3Next = () => {
    setValidationError("");
    setCurrentStep(4);
  };

  // Handle Simulated Payment (Step 5)
  const handleSimulatePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const generatedId = `SCH-2027-${Math.floor(100000 + Math.random() * 900000)}`;
      setDemoApplicationId(generatedId);
      setIsPaymentSuccess(true);
    }, 1500);
  };

  // File Upload Simulator
  const handleSimulatedFileUpload = (
    docKey: keyof typeof documentFiles,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentFiles((prev) => ({
        ...prev,
        [docKey]: e.target.files![0].name,
      }));
    }
  };

  const stepsList = [
    { num: 1, label: "Student Details" },
    { num: 2, label: "Parent Details" },
    { num: 3, label: "Documents" },
    { num: 4, label: "Review" },
    { num: 5, label: "Payment" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Page Header */}
        <PageHeader
          title="Online Admission Application Portal 2027-28"
          subtitle="Complete the 5-step registration process below. Frontend Prototype Demo."
          categoryBadge="Frontend Application Portal"
          breadcrumbs={[
            { label: "Admissions", href: "/admissions" },
            { label: "Apply Online" },
          ]}
          action={
            <Link href="/admissions">
              <Button variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Back to Admissions Info
              </Button>
            </Link>
          }
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 pt-12">
          {/* STEP PROGRESS INDICATOR BAR */}
          {!isPaymentSuccess && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between relative">
                {stepsList.map((step) => {
                  const isCompleted = currentStep > step.num;
                  const isCurrent = currentStep === step.num;

                  return (
                    <div key={step.num} className="flex flex-col items-center relative z-10 space-y-1.5 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-200 ${
                          isCompleted
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                            : isCurrent
                            ? "bg-amber-500 text-slate-950 ring-4 ring-amber-500/20 font-extrabold shadow-md shadow-amber-500/30"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : step.num}
                      </div>
                      <span
                        className={`text-xs font-semibold text-center hidden sm:block ${
                          isCurrent ? "text-slate-900 font-bold" : "text-slate-500"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* VALIDATION ERROR ALERT */}
          {validationError && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs sm:text-sm font-medium flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* SUCCESS PAGE (AFTER SIMULATED PAYMENT) */}
          {isPaymentSuccess ? (
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl space-y-8 animate-in fade-in duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <Badge variant="emerald" size="md" className="uppercase tracking-widest font-bold">
                  SIMULATED PAYMENT SUCCESSFUL
                </Badge>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
                  Application Submitted Successfully!
                </h2>

                <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                  Thank you for applying to Delhi Heritage World School. Your registration fee payment has been simulated successfully.
                </p>
              </div>

              {/* DEMO APPLICATION ID BOX */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 text-center space-y-2 max-w-md mx-auto shadow-lg">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider block">
                  DEMO APPLICATION ID
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-heading tracking-wider text-white">
                  {demoApplicationId}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Frontend Prototype Demo Mode</span>
                </div>
              </div>

              {/* SUMMARY HIGHLIGHT */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 max-w-xl mx-auto">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500">Applicant Name:</span>
                  <span className="font-bold text-slate-900">{studentDetails.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500">Seeking Grade:</span>
                  <span className="font-bold text-slate-900 uppercase">{studentDetails.grade}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500">Parent Mobile:</span>
                  <span className="font-bold text-slate-900">{parentDetails.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">Application Fee Paid:</span>
                  <span className="font-bold text-emerald-700">₹500 (Simulated)</span>
                </div>
              </div>

              {/* SUCCESS ACTION BUTTONS */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-100">
                <Button
                  variant="gold"
                  size="lg"
                  leftIcon={<Printer className="w-5 h-5" />}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.print();
                    }
                  }}
                >
                  Download / Print Application
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<Clock className="w-5 h-5" />}
                  onClick={() => alert(`Application Status for ${demoApplicationId}: UNDER REVIEW (Demo)`)}
                >
                  Check Application Status
                </Button>

                <Link href="/">
                  <Button variant="ghost" size="lg" leftIcon={<Home className="w-5 h-5" />}>
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* MULTI-STEP FORM CARD CONTAINER */
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md space-y-8">
              {/* STEP 1: STUDENT DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-4">
                    <Badge variant="gold" size="sm" className="mb-1">
                      STEP 1 OF 5
                    </Badge>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                      <User className="w-6 h-6 text-amber-600" /> Student Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name of Student"
                      placeholder="e.g. Aarav Sharma"
                      required
                      value={studentDetails.fullName}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, fullName: e.target.value })
                      }
                      helperText="Must match official birth certificate."
                    />

                    <Input
                      label="Date of Birth"
                      type="date"
                      required
                      value={studentDetails.dob}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, dob: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Gender"
                      required
                      value={studentDetails.gender}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, gender: e.target.value })
                      }
                      options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                        { label: "Other", value: "other" },
                      ]}
                    />

                    <Select
                      label="Class Applying For"
                      required
                      value={studentDetails.grade}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, grade: e.target.value })
                      }
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
                  </div>

                  <Input
                    label="Previous School Attended"
                    placeholder="Enter previous school name & city"
                    value={studentDetails.previousSchool}
                    onChange={(e) =>
                      setStudentDetails({ ...studentDetails, previousSchool: e.target.value })
                    }
                    helperText="Leave blank if applying for Nursery."
                  />
                </div>
              )}

              {/* STEP 2: PARENT / GUARDIAN DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-4">
                    <Badge variant="gold" size="sm" className="mb-1">
                      STEP 2 OF 5
                    </Badge>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                      <Mail className="w-6 h-6 text-amber-600" /> Parent / Guardian Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Parent / Guardian Name"
                      placeholder="e.g. Vikram Sharma"
                      required
                      value={parentDetails.parentName}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, parentName: e.target.value })
                      }
                    />

                    <Input
                      label="Primary Phone Number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={parentDetails.phone}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, phone: e.target.value })
                      }
                      helperText="10-digit mobile number for SMS alerts."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="parent@example.com"
                      required
                      value={parentDetails.email}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, email: e.target.value })
                      }
                    />

                    <Input
                      label="Occupation / Designation"
                      placeholder="e.g. Software Engineer / Doctor"
                      value={parentDetails.occupation}
                      onChange={(e) =>
                        setParentDetails({ ...parentDetails, occupation: e.target.value })
                      }
                    />
                  </div>

                  <Textarea
                    label="Residential Address"
                    placeholder="Enter complete house address in Delhi NCR..."
                    rows={3}
                    required
                    value={parentDetails.address}
                    onChange={(e) =>
                      setParentDetails({ ...parentDetails, address: e.target.value })
                    }
                  />
                </div>
              )}

              {/* STEP 3: DOCUMENTS (FRONTEND UPLOAD UI) */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-4">
                    <Badge variant="gold" size="sm" className="mb-1">
                      STEP 3 OF 5
                    </Badge>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                      <Upload className="w-6 h-6 text-amber-600" /> Document Uploads (Frontend State)
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Select sample files for frontend state demonstration. Files are NOT uploaded to any server.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Student Photo */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-sm font-bold text-slate-800 block">
                        Student Photograph
                      </span>
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-300">
                        <span className="text-xs text-slate-700 truncate font-medium max-w-[200px]">
                          {documentFiles.photo}
                        </span>
                        <label className="cursor-pointer bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                          Browse
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleSimulatedFileUpload("photo", e)}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Birth Certificate */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-sm font-bold text-slate-800 block">
                        Birth Certificate
                      </span>
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-300">
                        <span className="text-xs text-slate-700 truncate font-medium max-w-[200px]">
                          {documentFiles.birthCertificate}
                        </span>
                        <label className="cursor-pointer bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                          Browse
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,image/*"
                            onChange={(e) => handleSimulatedFileUpload("birthCertificate", e)}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Previous Marksheet */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-sm font-bold text-slate-800 block">
                        Previous Marksheet
                      </span>
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-300">
                        <span className="text-xs text-slate-700 truncate font-medium max-w-[200px]">
                          {documentFiles.marksheet}
                        </span>
                        <label className="cursor-pointer bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                          Browse
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,image/*"
                            onChange={(e) => handleSimulatedFileUpload("marksheet", e)}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Address Proof */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <span className="text-sm font-bold text-slate-800 block">
                        Address Proof (Aadhaar / Passport)
                      </span>
                      <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-300">
                        <span className="text-xs text-slate-700 truncate font-medium max-w-[200px]">
                          {documentFiles.addressProof}
                        </span>
                        <label className="cursor-pointer bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                          Browse
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,image/*"
                            onChange={(e) => handleSimulatedFileUpload("addressProof", e)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW SUMMARY */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-4">
                    <Badge variant="gold" size="sm" className="mb-1">
                      STEP 4 OF 5
                    </Badge>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                      <FileCheck className="w-6 h-6 text-amber-600" /> Review Application Details
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Verify all entered details before proceeding to simulated application fee payment.
                    </p>
                  </div>

                  {/* Student Details Review Card */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <h4 className="font-bold font-heading text-slate-900 text-base">
                        Student Details
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Edit2 className="w-3.5 h-3.5" />}
                        onClick={() => setCurrentStep(1)}
                      >
                        Edit
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                      <div><span className="text-slate-400">Full Name:</span> <strong>{studentDetails.fullName}</strong></div>
                      <div><span className="text-slate-400">Date of Birth:</span> <strong>{studentDetails.dob}</strong></div>
                      <div><span className="text-slate-400">Gender:</span> <strong className="capitalize">{studentDetails.gender}</strong></div>
                      <div><span className="text-slate-400">Applying Grade:</span> <strong className="uppercase">{studentDetails.grade}</strong></div>
                      <div className="sm:col-span-2"><span className="text-slate-400">Previous School:</span> <strong>{studentDetails.previousSchool || "N/A"}</strong></div>
                    </div>
                  </div>

                  {/* Parent Details Review Card */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <h4 className="font-bold font-heading text-slate-900 text-base">
                        Parent / Guardian Details
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Edit2 className="w-3.5 h-3.5" />}
                        onClick={() => setCurrentStep(2)}
                      >
                        Edit
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                      <div><span className="text-slate-400">Parent Name:</span> <strong>{parentDetails.parentName}</strong></div>
                      <div><span className="text-slate-400">Phone:</span> <strong>{parentDetails.phone}</strong></div>
                      <div><span className="text-slate-400">Email:</span> <strong>{parentDetails.email}</strong></div>
                      <div><span className="text-slate-400">Occupation:</span> <strong>{parentDetails.occupation}</strong></div>
                      <div className="sm:col-span-2"><span className="text-slate-400">Address:</span> <strong>{parentDetails.address}</strong></div>
                    </div>
                  </div>

                  {/* Documents Review Card */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <h4 className="font-bold font-heading text-slate-900 text-base">
                        Attached Documents
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Edit2 className="w-3.5 h-3.5" />}
                        onClick={() => setCurrentStep(3)}
                      >
                        Edit
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Photo: <strong>{documentFiles.photo}</strong></div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Birth Cert: <strong>{documentFiles.birthCertificate}</strong></div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Marksheet: <strong>{documentFiles.marksheet}</strong></div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Address Proof: <strong>{documentFiles.addressProof}</strong></div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: PAYMENT SUMMARY UI */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-slate-200 pb-4">
                    <Badge variant="gold" size="sm" className="mb-1">
                      STEP 5 OF 5
                    </Badge>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-amber-600" /> Application Fee Payment (Demo)
                    </h3>
                  </div>

                  <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-800 shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <span className="text-sm text-slate-300 font-medium">Application Fee Item</span>
                      <span className="text-sm font-bold text-white">Amount (INR)</span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-slate-300">
                        <span>Registration & Processing Fee:</span>
                        <span className="font-bold text-white">₹500.00</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-xs">
                        <span>Taxes & Gateway Surcharge:</span>
                        <span>₹0.00 (Waived)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-lg">
                      <span className="font-extrabold font-heading text-white">Total Amount Due:</span>
                      <span className="font-extrabold font-heading text-amber-400 text-2xl">₹500.00</span>
                    </div>

                    <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                      <Lock className="w-4 h-4 shrink-0" />
                      <span>SIMULATED DEMO: Clicking the button below will NOT charge real money.</span>
                    </div>

                    <Button
                      variant="gold"
                      size="lg"
                      fullWidth
                      isLoading={isProcessingPayment}
                      leftIcon={<Sparkles className="w-5 h-5" />}
                      onClick={handleSimulatePayment}
                    >
                      Pay ₹500 & Complete Application (Demo)
                    </Button>
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS BAR */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    leftIcon={<ArrowLeft className="w-4 h-4" />}
                    onClick={() => {
                      setValidationError("");
                      setCurrentStep(currentStep - 1);
                    }}
                  >
                    Previous Step
                  </Button>
                ) : (
                  <div />
                )}

                {currentStep === 1 && (
                  <Button
                    type="button"
                    variant="gold"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={handleStep1Next}
                  >
                    Next: Parent Details →
                  </Button>
                )}

                {currentStep === 2 && (
                  <Button
                    type="button"
                    variant="gold"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={handleStep2Next}
                  >
                    Next: Documents →
                  </Button>
                )}

                {currentStep === 3 && (
                  <Button
                    type="button"
                    variant="gold"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={handleStep3Next}
                  >
                    Next: Review Application →
                  </Button>
                )}

                {currentStep === 4 && (
                  <Button
                    type="button"
                    variant="gold"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => setCurrentStep(5)}
                  >
                    Proceed to Payment →
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Quick Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Application Portal Active"
        description="Multi-step form loaded."
      >
        <div className="space-y-4">
          <Input label="Student Name" defaultValue={studentDetails.fullName} />
          <Button variant="gold" fullWidth onClick={() => setIsApplyModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
