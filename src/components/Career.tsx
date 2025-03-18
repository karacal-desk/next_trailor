"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";
import EnhancedParagraph from "./CareerPara";

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "career";
    }

    const handleHashChange = () => {
      if (window.location.hash === "#career" && sectionRef.current) {
        const headerHeight = 80;
        const yOffset = -headerHeight;
        const y =
          sectionRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash === "#career") {
      setTimeout(handleHashChange, 100);
    }

    document.querySelectorAll('a[href="#career"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        if (sectionRef.current) {
          const headerHeight = 80;
          const yOffset = -headerHeight;
          const y =
            sectionRef.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });

          window.history.pushState(null, "", "#career");
        }
      });
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const opportunities = [
    { title: "Open your own boutique", icon: "/own_boutique.png" },
    { title: "Become a fashion designer", icon: "/fashion_designer.png" },
    { title: "Work with leading brands", icon: "/leading_brands.png" },
    { title: "Offer alteration services", icon: "/alteration_service.png" },
    { title: "Teach fashion and design", icon: "/teach_fashion.png" },
    { title: "Start an online clothing store", icon: "/online_store.png" },
  ];

  const handleContactClick = (careerTitle: string) => {
    setSelectedCareer(careerTitle);
    setShowContactForm(true);
  };

  const handleCloseForm = () => {
    setShowContactForm(false);
    setSelectedCareer(null);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#111213] backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Launch Your Fashion Career
        </motion.h2>

        <EnhancedParagraph handleContactClick={handleContactClick} />
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className="bg-black/50 shadow-inner shadow-[#F0C38E]/70 rounded-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardContent className="flex flex-col gap-4 text-white items-center justify-center h-full p-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={opportunity.icon || "/placeholder.svg"}
                    alt={opportunity.title}
                    fill
                    style={{ objectFit: "contain" }}
                    quality={80}
                  />
                </div>
                <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                <Button
                  variant="default"
                  className="flex ml-2 font-semibold items-center gap-1 text-[#221F39] hover:text-[#F0C38E] bg-[#F0C38E]"
                  onClick={() => handleContactClick(opportunity.title)}
                >
                  <p>Connect With Us</p>
                </Button>
              </CardContent>
            </motion.div>
          ))}
        </div>
        {showContactForm && (
          <ContactForm
            selectedCareer={selectedCareer}
            onClose={handleCloseForm}
          />
        )}
      </div>
    </section>
  );
};

export default Career;
