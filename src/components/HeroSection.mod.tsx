"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-[#111213] backdrop-blur-sm py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid mt-12 md:mt-4 items-center gap-12 md:grid-cols-2">
          <motion.div
            className="relative rounded-xl bg-black/50 p-10 shadow-inner shadow-[#F0C38E] backdrop-blur-sm text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Master the Art of{" "}
              <div className="z-20 text-[#F0C38E]">
                <span>Tailoring</span>
              </div>
            </motion.h1>
            <motion.p
              className="mt-4 mx-auto max-w-xl text-gray-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Learn professional tailoring skills from industry experts.
              Transform your passion into a successful career with our
              comprehensive courses.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button className="text-md font-semibold bg-[#F0C38E] px-6 py-3 text-black shadow-lg shadow-[#F0C38E]/40 transition-all duration-300 hover:bg-[#F0C38E]/90 hover:shadow-[#F0C38E]/60">
                Start Learning
              </Button>
              <Button
                variant="outline"
                className="text-md font-semibold bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
              >
                Explore Courses
              </Button>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-col items-center gap-2 sm:flex-row justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className="h-8 w-8 rounded-full border-2 border-white bg-[#40E0D0] shadow-md"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Join 1000+ students already learning
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 rounded-full bg-[#F0C38E]/20 blur-3xl" />
            <Image
              src="/hero.png"
              alt="Tailoring Institute Illustration"
              width={600}
              height={600}
              priority
              className="relative z-50 drop-shadow-2xl"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
