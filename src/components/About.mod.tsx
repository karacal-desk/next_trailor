"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Eye, X } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "about";
    }

    const handleHashChange = () => {
      if (window.location.hash === "#about" && sectionRef.current) {
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

    if (window.location.hash === "#about") {
      setTimeout(handleHashChange, 100);
    }

    document.querySelectorAll('a[href="#about"]').forEach((anchor) => {
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

          window.history.pushState(null, "", "#about");
        }
      });
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      title: "Hands-on Training",
      description: "Get practical experience with state-of-the-art equipment",
    },
    {
      title: "Industry Connections",
      description: "Network with fashion houses and potential employers",
    },
    {
      title: "Flexible Schedule",
      description: "Choose from day and evening classes to fit your lifestyle",
    },
    {
      title: "Career Support",
      description: "Receive guidance on job placements and entrepreneurship",
    },
  ];

  const galleryImages = ["/images/image1.jpeg", "/images/image2.jpeg"];

  return (
    <section ref={sectionRef} className="py-20 bg-[#111213] backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-[#F0C38E] drop-shadow-[0_0_10px_#F0C38E] sm:drop-shadow-[0_0_15px_#F0C38E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why ASHAA? Best Tailoring Institute
        </motion.h2>

        {/* Main Card */}
        <motion.div
          className="flex flex-col md:flex-row bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm rounded-md text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-5xl md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col flex-1">
            <CardHeader>
              <CardTitle className="flex items-center text-[#F0C38E]  text-2xl mb-4">
                <CheckCircle className="w-8 h-8 mr-3" />
                Government Certified Institute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className="mb-4 font-semibold text-gray-400"
                style={{ lineHeight: 2 }}
              >
                <b className="text-[#F0C38E]">ASHAA</b> is a Tailoring Institute{" "}
                <b className="text-[#F0C38E]">
                  Government-Certified Independent Training Center
                </b>{" "}
                dedicated to empowering individuals with comprehensive expertise
                in dress design and fashion technology. We offer a diverse range
                of government-approved courses, designed to equip students with
                <b className="text-[#F0C38E]">
                  {" "}
                  industry-relevant skills{" "}
                </b>at <b className="text-[#F0C38E]">affordable fees</b>.
                Whether you &apos; re looking to start a new career or enhance
                your existing expertise, our institute provides the perfect
                opportunity to turn your{" "}
                <b className="text-[#F0C38E]">passion for fashion</b> into a{" "}
                <b className="text-[#F0C38E]">successful profession.</b>
              </p>
              <Button
                onClick={() => setShowGallery(true)}
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80 mb-4"
              >
                <Eye className="w-4 h-4 mr-2" /> Checkout Gallery
              </Button>

              <Link href={"#career"} className="block max-w-fit">
                <Button className="flex flex-row  gap-1 items-center  bg-[#F0C38E] hover:bg-[#F0C38E]/80 text-black     ">
                  <Briefcase className="w-4 h-4 mr-2" /> Career Options
                </Button>
              </Link>
            </CardContent>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center md:w-1/3 p-4">
            <Link
              href="/#about"
              className="flex flex-col gap-4 items-center justify-center"
            >
              <Image
                src="/aicvt.png"
                alt="AICVT logo"
                width={100}
                height={100}
              />
              <p className="mb-4 font-semibold text-[#F0C38E] text-center">
                <span className="font-sans text-gray-400">
                  affiliated with{" "}
                </span>
                All India Council For Vocational Training
              </p>
            </Link>
            <div className="h-32 bg-gray-300 w-full rounded-lg flex items-center justify-center">
              <div className="relative w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                <Button onClick={() => setShowCertificate(true)}>
                  <Image
                    src="/sample.jpeg"
                    alt="sample certificate"
                    fill
                    style={{ objectFit: "contain" }}
                    quality={100}
                  />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-black/50 shadow-inner shadow-[#F0C38E]/70 backdrop-blur-sm rounded-md text-white p-6 min-w-[250px] flex-grow md:w-[calc(33.333%-1.5rem)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-[#F0C38E]">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 flex justify-between items-center">
              <span>Sample Certificate</span>
              <Button
                onClick={() => setShowCertificate(false)}
                variant="ghost"
                className="h-8 w-8 p-0 bg-black text-white rounded-full"
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </Button>
            </h3>
            <div className="relative w-full h-[60vh] mb-6">
              <Image
                src="/sample.jpeg"
                alt="Sample Certificate"
                fill
                style={{ objectFit: "contain" }}
                quality={80}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => setShowCertificate(false)}
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80"
              >
                Close Preview
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Gallery Preview Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 ">
          <div className="bg-white p-4 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 flex justify-between items-center">
              <span>Gallery</span>
              <Button
                onClick={() => setShowGallery(false)}
                variant="ghost"
                className="h-8 w-8 p-0 bg-black text-white rounded-full"
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" />
              </Button>
            </h3>
            <div className="relative w-full h-[60vh] mb-6">
              <Image
                src={galleryImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                quality={80}
                className="rounded-md"
              />
            </div>
            <div className="flex justify-center gap-2 mb-4">
              {galleryImages.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 w-3 p-3 rounded-full flex items-center justify-center ${
                    currentImageIndex === index
                      ? "bg-[#F0C38E] text-black"
                      : "bg-gray-300 text-gray-600"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <div className="flex justify-between">
              <Button
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) =>
                      (prev - 1 + galleryImages.length) % galleryImages.length,
                  )
                }
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80"
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) => (prev + 1) % galleryImages.length,
                  )
                }
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
