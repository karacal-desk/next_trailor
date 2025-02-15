"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Scissors, Ruler, Pencil, DraftingCompass } from "lucide-react";
import { Button } from "@/components/ui/button";

const welcomeTexts = [
  "Unleash Your Fashion Creativity",
  "Design Your Future in Fashion",
  "Master the Art of Dressmaking",
  "Turn Your Passion into a Career",
  "Stitch Your Way to Success",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] py-20 overflow-hidden bg-gradient-to-r from-purple-400 to-pink-300 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            ASHAA Dress Designing School
          </h1>
          <p className="text-2xl mb-8 h-16">{welcomeTexts[currentTextIndex]}</p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary hover:text-primary-foreground"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Background"
          height={500}
          width={500}
          className="opacity-20"
        />
      </div>
      {[Scissors, Ruler, Pencil, DraftingCompass].map((Icon, index) => (
        <Icon
          key={index}
          className="absolute text-black/90 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            width: `${Math.random() * 250 + 20}px`,
            height: `${Math.random() * 250 + 20}px`,
          }}
        />
      ))}
    </section>
  );
};

export default HeroSection;
