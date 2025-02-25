"use client";

import { useState, useEffect } from "react";
import { Scissors, Ruler, Pencil, DraftingCompass } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { JSX } from "react/jsx-runtime";

const iconColors = [
  "#FF6B6B", // Pastel Red
  "#4ECDC4", // Turquoise
  "#45B7D1", // Sky Blue
  "#FFA07A", // Light Salmon
  "#98D8C8", // Pastel Green
  "#F7B801", // Mustard
];

const HeroSection = () => {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateIcons = () => {
      const newIcons = [Scissors, Ruler, Pencil, DraftingCompass].map(
        (Icon, index) => {
          const color =
            iconColors[Math.floor(Math.random() * iconColors.length)];
          return (
            <Icon
              key={index}
              className="absolute transition-all duration-1000 ease-in-out"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                color: color,
                filter: `drop-shadow(0 0 10px ${color})`,
              }}
            />
          );
        },
      );
      setIcons(newIcons);
    };

    generateIcons();
    const interval = setInterval(generateIcons, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen py-20 overflow-hidden bg-black"
      id="home"
    >
      <div className="container mx-auto px-4 h-full flex items-center ">
        <div className="w-full lg:w-1/2 z-50 bg-black/30 rounded-sm p-2">
          <h1 className="text-5xl font-bold mb-6 text-white ">
            Welcome to the Future of Design
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            Experience the power of neomorphic design with our cutting-edge
            tools and innovative approach.
          </p>
          <Button
            size="lg"
            className="bg-gray-800 text-white hover:bg-gray-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_-1px_0_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.1)] hover:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">{icons}</div>
    </section>
  );
};

export default HeroSection;
