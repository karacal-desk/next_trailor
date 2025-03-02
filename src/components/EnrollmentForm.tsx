"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import type { Course } from "@/lib/CourseData";

interface EnrollmentFormProps {
  course: Course | typeof import("@/lib/CourseData").diplomaCourse;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isOpen: boolean; // Controls visibility
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({
  course,
  onSubmit,
  onCancel,
  isOpen,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile View - Inline Form */}
      <div
        className={`mt-4 p-4 bg-[#1a1a1c] rounded-md border border-[#9370DB]/30 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:static md:block`}
      >
        <FormContent course={course} onSubmit={onSubmit} onCancel={onCancel} />
      </div>

      {/* Desktop View - Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={onCancel} // Click outside to close
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            className="bg-[#1a1a1c] p-6 rounded-lg shadow-lg border border-[#9370DB]/50 max-w-lg w-full"
          >
            <FormContent
              course={course}
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Extracted Form Content to reuse in both views
const FormContent: React.FC<Omit<EnrollmentFormProps, "isOpen">> = ({
  course,
  onSubmit,
  onCancel,
}) => (
  <>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-[#F0C38E]">Enrollment Form</h3>
      <Button
        variant="default"
        size="icon"
        onClick={onCancel}
        className="h-8 w-8 bg-[#F0C38E] hover:bg-black hover:text-white text-[#9370DB]/90"
      >
        <X size={18} />
      </Button>
    </div>

    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-[#F0C38E]">
            First Name
          </Label>
          <Input
            id="firstName"
            required
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#F0C38E]">
            Last Name
          </Label>
          <Input
            id="lastName"
            required
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-[#F0C38E]">
          Address
        </Label>
        <Textarea
          id="address"
          required
          className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pincode" className="text-[#F0C38E]">
            Pincode
          </Label>
          <Input
            id="pincode"
            required
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#F0C38E]">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#F0C38E]">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          required
          className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="course" className="text-[#F0C38E]">
          Selected Course
        </Label>
        <Input
          id="course"
          value={course.name}
          readOnly
          className="bg-black/70 border-[#9370DB]/50 text-white cursor-not-allowed"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#9370DB] hover:bg-[#9370DB]/80 text-white font-semibold shadow-lg shadow-[#9370DB]/30"
      >
        Submit Enrollment
      </Button>
    </form>
  </>
);

export default EnrollmentForm;
