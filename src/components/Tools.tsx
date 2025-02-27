"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Tools {
  index: number;
  name: string;
  image: string;
}

const toolSet: Tools[] = [
  { index: 101, name: "Sewing Machine", image: "/sewing_machine.png" },
  { index: 102, name: "Mannequin", image: "/manequin.png" },
  { index: 103, name: "Scissors", image: "/scissors.png" },
  { index: 104, name: "Measuring Tape", image: "/measuring_tape.png" },
  { index: 105, name: "Iron", image: "/iron.png" },
  { index: 106, name: "Pins and Needles", image: "/pins_needles.png" },
  { index: 107, name: "Thimble", image: "/thimble.png" },
  { index: 108, name: "Fabric Chalk", image: "/fabric_chalk.png" },
];

const Tools = () => {
  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E]"
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
              className="relative flex items-center justify-center bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm text-white p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-40 h-40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
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
