"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";

const Jobs = () => {
  const opportunities = [
    { title: "Open your own boutique", icon: "/own_boutique.png" },
    { title: "Become a fashion designer", icon: "/fashion_designer.png" },
    { title: "Work with leading brands", icon: "/leading_brands.png" },
    { title: "Offer alteration services", icon: "/alteration_service.png" },
    { title: "Teach fashion and design", icon: "/teach_fashion.png" },
    { title: "Start an online clothing store", icon: "/online_store.png" },
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-[#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Launch Your Fashion Career
        </motion.h2>
        <motion.p
          className="text-xl text-white mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Start your professional journey in the fashion industry after
          completing any of our courses. The possibilities are endless!
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              className="bg-black/50 shadow-inner shadow-[#F0C38E]/70 rounded-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardContent className="flex flex-col text-white items-center justify-center h-full p-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={opportunity.icon || "/placeholder.svg"}
                    alt={opportunity.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{opportunity.title}</h3>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
