"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Tools {
  index: number;
  name: string;
  image: string;
}

const toolSet: Tools[] = [
  { index: 104, name: "Guide Book", image: "/guide_book.png" },
  { index: 103, name: "Measuring Tape", image: "/measuring_tape.png" },
  { index: 106, name: "Threads", image: "/threads.png" },
  { index: 107, name: "Pins and Needles", image: "/pins_needles.png" },
  { index: 109, name: "Fabric Chalk", image: "/fabric_chalk.png" },
];

const Tools = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "tools";
    }

    const handleHashChange = () => {
      if (window.location.hash === "#tools" && sectionRef.current) {
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

    if (window.location.hash === "#tools") {
      setTimeout(handleHashChange, 100);
    }

    document.querySelectorAll('a[href="#tools"]').forEach((anchor) => {
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

          window.history.pushState(null, "", "#tools");
        }
      });
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return (
    <section ref={sectionRef} className="py-20  backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tools and Accessories Provided
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {toolSet.map((tool, index) => (
            <motion.div
              key={tool.index}
              className="relative flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-md text-white p-4 w-40 h-40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative w-24 h-24">
                <Image
                  src={tool.image || "/placeholder.svg"}
                  alt={tool.name}
                  fill
                  style={{ objectFit: "contain" }}
                  quality={90}
                />
              </div>
              <h3 className="absolute bottom-2 right-2 font-semibold text-sm text-[#F0C38E]">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
