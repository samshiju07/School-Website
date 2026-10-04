"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ComponentGallery } from "@/components/showcase/ComponentGallery";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export default function ComponentsDemoPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenApplyModal={() => setIsApplyModalOpen(true)} />
      <main className="flex-1">
        <ComponentGallery />
      </main>
      <Footer />

      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title="Admission Inquiry 2026-27"
        description="Quick application modal demo."
      >
        <div className="space-y-4">
          <Input label="Student Name" placeholder="Full name" />
          <Select
            label="Target Grade"
            options={[
              { label: "Nursery", value: "nursery" },
              { label: "Class I", value: "c1" },
              { label: "Class XI", value: "c11" },
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
