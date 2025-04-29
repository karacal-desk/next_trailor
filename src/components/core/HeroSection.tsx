"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative backdrop-blur-sm py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid mt-12 md:mt-4 items-center gap-12 md:grid-cols-2">
          <motion.div
            className="relative rounded-md p-10  backdrop-blur-sm bg-white/5  border border-white/20 hover:border-white/30 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Master the Art of{" "}
              <div className="z-20 text-[#F0C38E]">
                <span>Tailoring</span>
              </div>
            </motion.h1>
            <motion.p
              className="mt-4 mx-auto max-w-xl text-justify md:text-left text-gray-400 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.1 }}
            >
              Learn Professional Tailoring and sewing skills with{" "}
              <strong>Government Diploma Certificate</strong> from Industrial
              experts. Transform your passion and fulfill your hobbies with
              various creative sewing techniques. Join Our best tailoring
              courses near you today!
            </motion.p>
            <motion.p
              className="mt-4 mx-auto max-w-xl text-[#F0C38E] font-semibold md:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              Contact Us @ +91 9147714547
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <Link href="#courses">
                <Button
                  variant={"outline"}
                  className="text-md font-semibold w-full bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="#career">
                <Button
                  variant="outline"
                  className="text-md font-semibold w-full bg-[#9370DB]/10 text-white border-[#9370DB] hover:text-[#9370DB] shadow-lg shadow-[#9370DB]/30 transition-all duration-300"
                >
                  Explore Careers
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-col items-center gap-2 sm:flex-row justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <p className="text-sm text-gray-400">
                Join 500+ students already learning
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
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
