"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Eye } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CertificateModal from "@/components/modals/Certificate.modal";
import GalleryModal from "@/components/modals/Gallery.modal";

const About = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [loaderTimer, setLoaderTimer] = useState<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  // Memoize gallery images
  const galleryImages = useMemo(
    () => ["/images/image1.jpeg", "/images/image2.jpeg"],
    [],
  );

  // Memoize handlers to prevent unnecessary re-renders
  const handleShowCertificate = useCallback(() => {
    setShowCertificate(true);
    setImageLoading(true);

    // Ensure loader shows for at least 1.5 seconds
    const timer = setTimeout(() => {
      setLoaderTimer(null);
    }, 1500);

    setLoaderTimer(timer);
  }, []);

  const handleCloseCertificate = useCallback(() => {
    setShowCertificate(false);
    if (loaderTimer) {
      clearTimeout(loaderTimer);
      setLoaderTimer(null);
    }
  }, [loaderTimer]);

  const handleShowGallery = useCallback(() => {
    setShowGallery(true);
    setImageLoading(true);

    // Ensure loader shows for at least 1.5 seconds
    const timer = setTimeout(() => {
      setLoaderTimer(null);
    }, 1500);

    setLoaderTimer(timer);
  }, []);

  const handleCloseGallery = useCallback(() => {
    setShowGallery(false);
    if (loaderTimer) {
      clearTimeout(loaderTimer);
      setLoaderTimer(null);
    }
  }, [loaderTimer]);

  const handleImageLoad = useCallback(() => {
    // Only hide loader if minimum display time has passed
    if (!loaderTimer) {
      setImageLoading(false);
    } else {
      // Otherwise wait for the timer to complete
      const checkTimer = setTimeout(() => {
        setImageLoading(false);
      }, 100);
      return () => clearTimeout(checkTimer);
    }
  }, [loaderTimer]);

  const handleChangeImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setImageLoading(true);

    // Ensure loader shows for at least 1.5 seconds
    const timer = setTimeout(() => {
      setLoaderTimer(null);
    }, 1500);

    setLoaderTimer(timer);
  }, []);

  const handlePrevImage = useCallback(() => {
    const newIndex =
      (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    handleChangeImage(newIndex);
  }, [currentImageIndex, handleChangeImage, galleryImages.length]);

  const handleNextImage = useCallback(() => {
    const newIndex = (currentImageIndex + 1) % galleryImages.length;
    handleChangeImage(newIndex);
  }, [currentImageIndex, handleChangeImage, galleryImages.length]);

  // Consolidated useEffect for section ID and scroll handling
  useEffect(() => {
    if (!sectionRef.current) return;

    sectionRef.current.id = "about";

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

    const handleAnchorClick = (e: MouseEvent) => {
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
    };

    // Add event listeners
    window.addEventListener("hashchange", handleHashChange);

    const anchors = document.querySelectorAll('a[href="#about"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick as EventListener);
    });

    // Initial scroll if needed
    if (window.location.hash === "#about") {
      setTimeout(handleHashChange, 100);
    }

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (loaderTimer) {
        clearTimeout(loaderTimer);
      }
    };
  }, [loaderTimer]);

  // Memoize features array
  const features = useMemo(
    () => [
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
    ],
    [],
  );

  // Memoize feature cards to prevent unnecessary re-renders
  const featureCards = useMemo(
    () =>
      features.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col backdrop-blur-sm bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/20 rounded-md text-white p-6 min-w-[250px] flex-grow md:w-[calc(33.333%-1.5rem)]"
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
      )),
    [features],
  );

  return (
    <section ref={sectionRef} className="py-20 backdrop-blur-sm">
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
          className="flex flex-col md:flex-row backdrop-blur-sm bg-white/5 border border-white/20 hover:border-white/30 rounded-md text-white w-full max-w-5xl md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col flex-1">
            <CardHeader>
              <CardTitle className="flex items-center text-[#F0C38E] text-2xl mb-4">
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
                onClick={handleShowGallery}
                className="bg-[#F0C38E] text-black hover:bg-[#F0C38E]/80 mb-4"
              >
                <Eye className="w-4 h-4 mr-2" /> Checkout Gallery
              </Button>

              <Link
                href={"#career"}
                className="flex flex-row gap-4 items-center bg-[#F0C38E] hover:bg-[#F0C38E]/80 text-black font-sans text-md w-fit px-4 py-1.5 rounded-md"
              >
                <Briefcase className="w-4 h-4" /> Career Options
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
                <Button onClick={handleShowCertificate}>
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
          {featureCards}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={showCertificate}
        onClose={handleCloseCertificate}
        imageLoading={imageLoading}
        onImageLoad={handleImageLoad}
      />

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={showGallery}
        onClose={handleCloseGallery}
        imageLoading={imageLoading}
        onImageLoad={handleImageLoad}
        galleryImages={galleryImages}
        currentImageIndex={currentImageIndex}
        onChangeImage={handleChangeImage}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
      />
    </section>
  );
};

export default About;
