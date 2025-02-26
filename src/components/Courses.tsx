"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Courses = () => {
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
      name: "Diploma in Tailoring and Dress Designing",
      duration: "1 year",
      fee: "₹25000/year",
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
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Courses
        </motion.h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="flex flex-grow flex-col text-left md:max-w-[50%] p-4 bg-black/50 shadow-inner rounded-md shadow-[#F0C38E]/70 backdrop-blur-sm text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
                  className="text-md font-semibold bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
