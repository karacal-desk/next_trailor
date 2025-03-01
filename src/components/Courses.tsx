"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courses = [
    {
      name: "Basic Tailoring Course",
      duration: "6 months",
      fee: "₹2000/month",
    },
    {
      name: "Basic Embroidery Course",
      duration: "3 months",
      fee: "₹1500/month",
    },

    {
      name: "Blouse Designing Course",
      duration: "3 months",
      fee: "₹1500/month",
    },

    {
      name: "Kurti Designing Course",
      duration: "3 months",
      fee: "₹1500/month",
    },

    {
      name: "Saree Designing Course",
      duration: "3 months",
      fee: "₹1500/month",
    },
    {
      name: "Short-term Fun Courses",
      duration: "3 months",
      fee: "₹1800/month",
    },
    {
      name: "Recycle & Reuse Old Clothes",
      duration: "3 months",
      fee: "₹1700/month",
    },
    {
      name: "Diploma in Tailoring and Dress Designing",
      duration: "1 year",
      fee: "₹25000/year",
    },
  ];

  const handleEnroll = (courseName: string) => {
    setSelectedCourse(courseName === selectedCourse ? null : courseName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Enrollment submitted for ${selectedCourse}`);
    setSelectedCourse(null);
  };

  const handleCancel = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="py-20 bg-[#111213] backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Offered Courses
        </motion.h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="flex flex-grow flex-col text-left md:max-w-[48%] p-4 bg-black/50 shadow-inner rounded-md shadow-[#F0C38E]/70 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardHeader className="pb-4">
                <CardTitle>{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2 text-left">
                <p>
                  <strong className="text-[#F0C38E]">Duration:</strong>{" "}
                  {course.duration}
                </p>
                <p className="pb-4">
                  <strong className="text-[#F0C38E]">Fee:</strong> {course.fee}
                </p>
                <Button
                  variant="outline"
                  className={`text-md font-semibold ${
                    selectedCourse === course.name
                      ? "bg-[#9370DB]/30 text-[#F0C38E] border-[#F0C38E]"
                      : "bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB]"
                  } shadow-lg shadow-[#9370DB]/30 transition-all duration-300`}
                  onClick={() => handleEnroll(course.name)}
                >
                  {selectedCourse === course.name ? "Close Form" : "Enroll Now"}
                </Button>
              </CardContent>

              {/* Mobile Form */}
              <AnimatePresence>
                {selectedCourse === course.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden md:hidden"
                  >
                    <EnrollmentForm
                      course={course}
                      onSubmit={handleSubmit}
                      onCancel={handleCancel}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Overlay Form */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden md:flex items-center justify-center"
            onClick={handleCancel}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1c] p-6 rounded-lg shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <EnrollmentForm
                course={courses.find((c) => c.name === selectedCourse)!}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

interface EnrollmentFormProps {
  course: { name: string };
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({
  course,
  onSubmit,
  onCancel,
}) => (
  <div className="mt-4 p-4 bg-[#1a1a1c] rounded-md border border-[#9370DB]/30">
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
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-[#F0C38E]">
            Last Name
          </Label>
          <Input
            id="lastName"
            required
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
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
          className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
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
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
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
            className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
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
          className="bg-black/50 border-[#9370DB]/50 text-white focus:border-[#F0C38E] focus:ring-[#F0C38E]/20"
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
  </div>
);

export default Courses;
