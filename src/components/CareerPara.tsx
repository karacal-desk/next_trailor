"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, BookOpen, CreditCard, Lightbulb, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EnhancedParagraph: React.FC = ({}) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const features = [
    {
      id: "subscription",
      icon: <Bell className="h-5 w-5" />,
      title: "Premium Subscription",
      description:
        "Get exclusive industry insights, job alerts, and networking opportunities with our premium subscription.",
    },
    {
      id: "career-tips",
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Career Tips & Guidance",
      description:
        "Access personalized career advice, portfolio reviews, and mentorship from industry professionals.",
    },
    {
      id: "sell",
      icon: <CreditCard className="h-5 w-5" />,
      title: "Sell Your Crafts",
      description:
        "Turn your creativity into income! List your handmade crafts, reach a wider audience, and grow your brand effortlessly.",
    },
    {
      id: "msme",
      icon: <BookOpen className="h-5 w-5" />,
      title: "MSME Guided Loan Assistance",
      description:
        "Flexible financing options with easy repayment plans to help you pursue your fashion education without financial stress.",
    },
  ];

  return (
    <div className="relative mb-10 py-12 rounded-md px-4 backdrop-blur-sm  ">
      <motion.p
        className="text-xl font-semibold text-white mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Start your professional journey in the fashion industry after completing
        any of our courses. The possibilities are endless!
      </motion.p>

      <motion.div
        className="flex flex-row flex-wrap  justify-center items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="w-full md:max-w-[40%]"
          >
            <Button
              variant="outline"
              className="w-full bg-white/10 hover:bg-white/20 text-[#F0C38E] hover:text-[#F0C38E] border-white/20 hover:border-white/30 h-auto py-3 px-4 flex flex-col items-center gap-2"
              onClick={() => setActivePopup(feature.id)}
            >
              <div className="bg-white/10 p-2 rounded-full ">
                {feature.icon}
              </div>
              <span className="font-semibold">{feature.title}</span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {activePopup && (
        <motion.div
          className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActivePopup(null)}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="max-w-md w-full bg-white/90  backdrop-blur-lg p-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => setActivePopup(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>

              {features.find((f) => f.id === activePopup) && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-[#F0C38E] p-2 rounded-full">
                      {features.find((f) => f.id === activePopup)?.icon}
                    </div>
                    <h3 className="text-xl font-bold">
                      {features.find((f) => f.id === activePopup)?.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-lg">
                    {features.find((f) => f.id === activePopup)?.description}
                  </p>

                  {/*activePopup === "subscription" && (
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg text-sm">
                      <p className="font-medium">Special Offer!</p>
                      <p>
                        Get 20% off on annual subscription plans. Limited time
                        offer.
                      </p>
                    </div>
                  )*/}

                  {activePopup === "msme" && (
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <p className="font-medium">Interest Rate</p>
                        <p>Starting at 2.5%</p>
                      </div>
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <p className="font-medium">Tenure</p>
                        <p>Up to 5 years</p>
                      </div>
                    </div>
                  )}

                  {/*activePopup === "sell" && (
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg text-sm">
                      <p className="font-medium">Benefits Include:</p>
                      <ul className="list-disc list-inside mt-1">
                        <li>Priority sector lending</li>
                        <li>Credit guarantee schemes</li>
                        <li>Subsidized interest rates</li>
                      </ul>
                    </div>
                  )*/}
                </div>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}

      {/**
        <motion.div
          className="mt-8 text-center w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            variant={"outline"}
            className="text-md md:w-[30%] font-semibold  bg-[#F0C38E]/10 text-white border-[#F0C38E] hover:text-[#F0C38E] shadow-lg shadow-[#F0C38E]/30 transition-all duration-300"
            onClick={() => handleContactClick("Custom Message ")}
          >
            <p>Connect With Us</p>
          </Button>
        </motion.div>
        */}
    </div>
  );
};

export default EnhancedParagraph;
