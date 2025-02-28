import About from "@/components/About.mod";
import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection.mod";
import Jobs from "@/components/Jobs";
import Tools from "@/components/Tools";
import React from "react";

const page = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <About />
      <Courses />
      <Tools />
      <Jobs />
    </main>
  );
};

export default page;
