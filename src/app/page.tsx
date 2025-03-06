"use client";

import React, { useEffect, useState } from "react";
import { Toaster } from "sonner";
import HeroSection from "@/components/HeroSection.mod";
import About from "@/components/About.mod";
import Courses from "@/components/Courses";
import Tools from "@/components/Tools";
import Jobs from "@/components/Jobs";
import ContactForm from "@/components/ContactForm";

const Page = () => {
  const [position, setPosition] = useState<"top-center" | "bottom-right">(
    "top-center",
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPosition("top-center");
      } else {
        setPosition("bottom-right");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex-grow">
      <HeroSection />
      <About />
      <Courses />
      <Tools />
      <Jobs />
      <ContactForm />
      <Toaster position={position} richColors />
    </main>
  );
};

export default Page;
