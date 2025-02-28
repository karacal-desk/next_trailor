"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const [showCertificate, setShowCertificate] = useState(false);

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
  ];

  return (
    <section className="py-20 bg-[#111213] backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why ASHAA? Best Design Institute
        </motion.h2>

        {/* Main Card */}
        <motion.div
          className="flex flex-col md:flex-row bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm rounded-md text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-5xl md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col flex-1">
            <CardHeader>
              <CardTitle className="flex items-center text-[#F0C38E]  text-2xl mb-4">
                <CheckCircle className="w-8 h-8 mr-3" />
                Government Certified Institute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className="mb-4 font-semibold text-gray-400"
                style={{ lineHeight: 2 }}
              >
                <b className="text-[#F0C38E]">ASHAA</b> is a Dress Design
                Institute{" "}
                <b className="text-[#F0C38E]">
                  Government-Certified Independent Training Center
                </b>{" "}
                dedicated to empowering individuals with comprehensive expertise
                in dress design and fashion technology. We offer a diverse range
                of government-approved courses, designed to equip students with
                <b className="text-[#F0C38E]">
                  {" "}
                  industry-relevant skills{" "}
                </b>at <b className="text-[#F0C38E]">affordable fees</b>.
                Whether you &apos; re looking to start a new career or enhance
                your existing expertise, our institute provides the perfect
                opportunity to turn your{" "}
                <b className="text-[#F0C38E]">passion for fashion</b> into a{" "}
                <b className="text-[#F0C38E]">successful profession.</b>
              </p>
              <Button
                onClick={() => setShowCertificate(true)}
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80"
              >
                <Eye className="w-4 h-4 mr-2" /> Preview Affiliation Certificate
              </Button>
            </CardContent>
          </div>
          <div className="flex justify-center items-center md:w-1/3 p-4">
            <div className="h-32 bg-gray-300 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm text-center">
                Govt. Council Logo
              </span>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm rounded-md text-white p-6 min-w-[250px] flex-grow md:w-[calc(33.333%-1.5rem)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-[#F0C38E]">
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

      {/* Certificate Preview Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Affiliation Certificate
            </h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4 flex items-center justify-center">
              <span className="text-gray-600">
                Certificate Image Placeholder
              </span>
            </div>
            <Button
              onClick={() => setShowCertificate(false)}
              className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80"
            >
              Close Preview
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
