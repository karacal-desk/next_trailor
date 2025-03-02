"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import EnrollmentForm from "./EnrollmentForm";
import SyllabusModal from "./SyllabusModal";
import { courses, diplomaCourse, type Course } from "@/lib/CourseData";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [showSyllabus, setShowSyllabus] = useState<string | null>(null);

  const handleEnroll = (courseName: string) => {
    setSelectedCourse(courseName === selectedCourse ? null : courseName);
  };

  const handleShowSyllabus = (courseName: string) => {
    setShowSyllabus(courseName === showSyllabus ? null : courseName);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enrollment submitted for ${selectedCourse}`);
    setSelectedCourse(null);
  };

  const handleCancel = () => {
    setSelectedCourse(null);
    setShowSyllabus(null);
  };

  const renderCourseCard = (course: Course, index: number) => (
    <motion.div
      id="courses"
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-black/50   border-none justify-between"
            >
              <strong className="text-[#F0C38E]">Fee Details</strong>
              <ChevronDown className="h-8 w-8 opacity-100 text-[#F0C38E]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[200px] bg-[#221F39] text-[#F0C38E] font-semibold"
          >
            <DropdownMenuItem>
              <span>Admission: {course.fee.admission}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Monthly: {course.fee.monthly}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Exam: {course.fee.exam}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex space-x-2 pt-4">
          <Button
            variant="outline"
            className="flex-1 text-md font-semibold bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
            onClick={() => handleEnroll(course.name)}
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-md font-semibold bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
            onClick={() => handleShowSyllabus(course.name)}
          >
            Syllabus
          </Button>
        </div>
      </CardContent>
    </motion.div>
  );

  const renderDiplomaCourseCard = () => (
    <motion.div
      className="flex flex-grow flex-col text-left  md:max-w-[48%] p-4 bg-black/50 shadow-inner rounded-md shadow-[#F0C38E]/70 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <CardHeader className="pb-4">
        <CardTitle>{diplomaCourse.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2 text-left">
        <p>
          <strong className="text-[#F0C38E]">Duration:</strong>{" "}
          {diplomaCourse.duration}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="w-full bg-black/50   border-none justify-between"
            >
              <strong className="text-[#F0C38E]">Fee Details</strong>
              <ChevronDown className="h-8 w-8 opacity-100 text-[#F0C38E]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-[200px] bg-[#221F39] text-[#F0C38E] font-semibold"
          >
            <DropdownMenuItem>
              <span>Admission: {diplomaCourse.fee.admission}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Monthly: {diplomaCourse.fee.monthly}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Exam: {diplomaCourse.fee.exam}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex space-x-2 pt-4">
          <Button
            variant="outline"
            className="flex-1 text-md font-semibold bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
            onClick={() => handleEnroll(diplomaCourse.name)}
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            className="flex-1 text-md font-semibold bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
            onClick={() => handleShowSyllabus(diplomaCourse.name)}
          >
            Syllabus
          </Button>
        </div>
      </CardContent>
    </motion.div>
  );

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
          {courses.map((course, index) => renderCourseCard(course, index))}
        </div>

        <motion.h3
          className="text-3xl font-bold my-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Diploma Course
        </motion.h3>
        <div className="flex justify-center">{renderDiplomaCourseCard()}</div>
      </div>

      {/* Enrollment Form Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
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
                course={
                  courses.find((c) => c.name === selectedCourse) ||
                  diplomaCourse
                }
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isOpen={!!selectedCourse} // ✅ Passing isOpen prop
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Syllabus Modal */}
      <AnimatePresence>
        {showSyllabus && (
          <SyllabusModal
            course={
              courses.find((c) => c.name === showSyllabus) || diplomaCourse
            }
            onClose={() => setShowSyllabus(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Courses;
