"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Eye, X } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Add this after the imports:
const TailoringLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      <g fill="none" stroke="#F0C38E" strokeWidth="2">
        {/* Scissors animation */}
        <g transform="translate(40, 40)">
          <path d="M-20,0 L20,0" strokeDasharray="40" strokeDashoffset="0">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="80"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M-15,-15 L15,15" strokeDasharray="42.4" strokeDashoffset="0">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="84.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M-15,15 L15,-15" strokeDasharray="42.4" strokeDashoffset="0">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="84.8"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Needle and thread */}
        <circle
          cx="40"
          cy="40"
          r="30"
          strokeDasharray="188.5"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="188.5"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Sewing machine needle */}
        <path d="M40,10 L40,70" strokeDasharray="60" strokeDashoffset="0">
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="120"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </div>
);

const About = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLHeadingElement>(null);
  const certificateRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    if (showGallery && galleryRef.current) {
      galleryRef.current.focus();

      // Custom scroll with offset for navbar
      const headerHeight = 150;
      const yOffset = -headerHeight;
      const y =
        galleryRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [showGallery]);

  useEffect(() => {
    if (showCertificate && certificateRef.current) {
      certificateRef.current.focus();

      // Custom scroll with offset for navbar
      const headerHeight = 150;
      const yOffset = -headerHeight;
      const y =
        certificateRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, [showCertificate]);

  useEffect(() => {
    // Reset loading state when changing images
    setImageLoading(true);
  }, [currentImageIndex]);

  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from Certified Industry Professionals with years of Experience!",
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
      description:
        "Choose from day and evening classes with onlilne and offline mode to fit you lifestyle",
    },

    {
      title: "Career Support",
      description: "Receive guidance on job placements and entrepreneurship",
    },

    {
      title: "Making Old into New One",
      description:
        "Dress Making is an enjoyable craft and it it also a lucrative way to earn money, Our Institute offers you to make attractive hand made dress & accessories with old cloths and make it a professional art.",
    },
  ];

  const galleryImages = ["/images/image1.jpeg", "/images/image2.jpeg"];

  return (
    <section ref={sectionRef} className="py-20  backdrop-blur-sm">
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
          className="flex flex-col md:flex-row  backdrop-blur-sm  bg-white/5  border border-white/20 hover:border-white/30 rounded-md text-white w-full max-w-5xl md:p-6"
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
                <b className="text-[#F0C38E]">ASHAA</b> is a{" "}
                <b className="text-[#F0C38E]">
                  Government-Certified Independent Training Center
                </b>{" "}
                dedicated to empowering individuals with hands on experience in{" "}
                <b className="text-[#F0C38E]">
                  garment design, stiching with top-level sewing machine{" "}
                </b>
                . We offer a diverse range of practical skill courses with
                pattern making proper choice of fabric types at{" "}
                <b className="text-[#F0C38E]">affordable fees</b>. Whether you
                &apos; re looking to start a new career or enhance your existing
                expertise, our institute provides the perfect opportunity to
                turn your <b className="text-[#F0C38E]">passion for fashion</b>{" "}
                into a <b className="text-[#F0C38E]">successful profession. </b>
                Explore your creativity with unique sewing and design skills and
                turn you hobby to profession by using old dress material.
              </p>
              <Button
                onClick={() => setShowGallery(true)}
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80 mb-4"
              >
                <Eye className="w-4 h-4 mr-2" /> Checkout Gallery
              </Button>

              <Link
                href={"#career"}
                className="flex flex-row  gap-4 items-center  bg-[#F0C38E] hover:bg-[#F0C38E]/80 text-black font-sans text-md w-fit px-4 py-1.5 rounded-md"
              >
                <Briefcase className="w-4 h-4 " /> Career Options
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
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
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
              className="flex flex-col  backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/20 rounded-md text-white p-6 min-w-[250px] flex-grow md:w-[calc(33.333%-1.5rem)] "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
          <div className=" bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
            <h3
              ref={certificateRef}
              className="text-2xl font-bold mb-4 text-white flex justify-between items-center"
            >
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
              {imageLoading && <TailoringLoader />}
              <Image
                src="/sample.jpeg"
                alt="Sample Certificate"
                fill
                style={{ objectFit: "contain" }}
                quality={60}
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                className="rounded-md"
                onLoadingComplete={() => setImageLoading(false)}
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 border border-white/30 backdrop-blur-md p-6 rounded-lg max-w-4xl w-full mx-4 mt-10 max-h-[90vh] overflow-auto">
            <h3
              ref={galleryRef}
              className="text-2xl font-bold mb-4 text-white flex justify-between items-center"
            >
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
              {imageLoading && <TailoringLoader />}
              <Image
                src={galleryImages[currentImageIndex] || "/placeholder.svg"}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                quality={80}
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                className="rounded-md"
                onLoadingComplete={() => setImageLoading(false)}
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
