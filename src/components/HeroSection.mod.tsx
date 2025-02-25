import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-black/30">
      <div className="container mt-10 px-4 py-12 md:py-24">
        <div className="grid  items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex bg-black/60 p-10 rounded-lg flex-col space-y-4 text-center md:text-left">
            <h1 className="text-3xl  text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Master the Art of{" "}
              <span className="text-[#F0C38E]">Tailoring</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Learn professional tailoring skills from industry experts.
              Transform your passion into a successful career with our
              comprehensive courses.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button
                className="bg-[#F0C38E] text-white hover:bg-[#F0C38E]/90"
                size="lg"
              >
                Start Learning
              </Button>
              <Button
                variant="outline"
                className="border-[#9370DB] text-[#9370DB] hover:bg-[#9370DB]/10 hover:text-white"
                size="lg"
              >
                Explore Courses
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white bg-[#40E0D0]"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Join 1000+ students already learning
              </p>
            </div>
          </div>
          <div className="relative mx-auto max-w-[500px] flex justify-center items-center">
            <div className="absolute h-full w-full rounded-full bg-[#F0C38E]/50" />
            <Image
              src="/hero.png"
              alt="Tailoring Institute Illustration"
              width={600}
              height={600}
              priority
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
