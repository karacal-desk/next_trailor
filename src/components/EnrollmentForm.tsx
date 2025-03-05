"use client";
import type React from "react";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import type { Course } from "@/lib/CourseData";

// Zod Schema for Form Validation
const enrollmentSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  pincode: z.string().regex(/^\d{6}$/, "Invalid Pincode (6 digits required)"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Invalid Phone Number (10 digits required)"),
  email: z.string().email("Invalid Email Address"),
});

type EnrollmentFormValues = z.infer<typeof enrollmentSchema>;

interface EnrollmentFormProps {
  course: Course | typeof import("@/lib/CourseData").diplomaCourse;
  onSubmit: (data: EnrollmentFormValues) => void;
  onCancel: () => void;
  isOpen: boolean;
  isSubmitting: boolean;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({
  course,
  onSubmit,
  onCancel,
  isOpen,
  isSubmitting,
}) => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        headerRef.current?.focus();
        headerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`mt-4 p-4 bg-[#1a1a1c] rounded-md border border-[#9370DB]/30 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:static md:block`}
      >
        <FormContent
          course={course}
          onSubmit={onSubmit}
          onCancel={onCancel}
          headerRef={headerRef}
          isSubmitting={isSubmitting}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={onCancel}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1c] p-6 rounded-lg shadow-lg border border-[#9370DB]/50 max-w-lg w-full mt-16"
          >
            <FormContent
              course={course}
              onSubmit={onSubmit}
              onCancel={onCancel}
              headerRef={headerRef}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Extracted Form Content
const FormContent: React.FC<
  Omit<EnrollmentFormProps, "isOpen"> & {
    headerRef: React.RefObject<HTMLHeadingElement>;
  }
> = ({ course, onSubmit, onCancel, headerRef, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentSchema),
  });

  return (
    <>
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-[#1a1a1c] py-4 z-10">
        <h3
          ref={headerRef}
          tabIndex={-1}
          className="text-xl font-semibold text-[#F0C38E] outline-none"
        >
          Enrollment Form
        </h3>
        <Button
          variant="default"
          size="icon"
          onClick={onCancel}
          className="h-8 w-8 bg-[#F0C38E] hover:bg-black hover:text-white text-[#9370DB]/90"
          disabled={isSubmitting}
        >
          <X size={18} />
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-[#F0C38E]">
              First Name
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-[#F0C38E]">
              Last Name
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-[#F0C38E]">
            Address
          </Label>
          <Textarea
            id="address"
            {...register("address")}
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="pincode" className="text-[#F0C38E]">
              Pincode
            </Label>
            <Input
              id="pincode"
              {...register("pincode")}
              className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm">{errors.pincode.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#F0C38E]">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#F0C38E]">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Enrollment"}
        </Button>
      </form>
    </>
  );
};

export default EnrollmentForm;
