"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      title: "Hands-on Training",
      description: "Get practical experience with state-of-the-art equipment",
    },
    {
      title: "Industry Connections",
      description: "Network with fashion houses and potential employers",
    },
    {
      title: "Flexible Schedule",
      description: "Choose from day and evening classes to fit your lifestyle",
    },
    {
      title: "Career Support",
      description: "Receive guidance on job placements and entrepreneurship",
    },
    {
      title: "Recognized Certification",
      description: "Earn certificates recognized by the fashion industry",
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
          Why Choose ASHAA? The Best Dress Design School
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm rounded-md text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
