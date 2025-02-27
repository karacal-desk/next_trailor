"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure for our navigation items
type NavItem = {
  title: string;
  items: { title: string; href: string }[];
};

// Our navigation data
const navItems: NavItem[] = [
  {
    title: "Menu",
    items: [
      { title: "Tailoring Courses", href: "#tailoring" },
      { title: "Dress Designing Courses", href: "#designing" },
      { title: "Student's Creation", href: "#creations" },
    ],
  },
  {
    title: "Courses",
    items: [
      { title: "Basic Tailoring Course (6 months)", href: "#basic-tailoring" },
      { title: "Basic Embroidery Course (3 months)", href: "#embroidery" },
      {
        title: "Diploma in Tailoring and Dress Designing (1 year)",
        href: "#diploma",
      },
      { title: "Short-term Fun Courses (3 months)", href: "#short-term" },
      { title: "Recycle & Reuse Old Clothes (3 months)", href: "#recycle" },
    ],
  },
  {
    title: "Certificates",
    items: [
      { title: "Certificates for Tailoring Course", href: "#tailoring-cert" },
      {
        title: "Diploma Certificate for Dress Designing",
        href: "#designing-cert",
      },
    ],
  },
];

const Navbar = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(
    null,
  );

  const toggleDesktopSection = (title: string) => {
    if (expandedSection === title) {
      setExpandedSection(null);
    } else {
      setExpandedSection(title);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setActiveMobileSection(null);
    }
  };

  const toggleMobileSection = (title: string) => {
    if (activeMobileSection === title) {
      setActiveMobileSection(null);
    } else {
      setActiveMobileSection(title);
    }
  };

  const closeAll = () => {
    setExpandedSection(null);
    setMobileMenuOpen(false);
    setActiveMobileSection(null);
  };

  return (
    <>
      <nav className="fixed bg-[#221F39] text-[#F0C38E] z-30 w-full shadow-lg">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="ml-3 md:ml-0 font-bold text-2xl">
              ASHAA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 font-sans text-2xl">
              {navItems.map((item) => (
                <div key={item.title} className="relative">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-[#F0C38E] hover:text-[#221F39] hover:bg-[#F0C38E]"
                    onClick={() => toggleDesktopSection(item.title)}
                  >
                    {item.title}
                    <motion.div
                      animate={{
                        rotate: expandedSection === item.title ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </Button>

                  <AnimatePresence>
                    {expandedSection === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 bg-[#221F39] rounded-md shadow-lg z-20 min-w-[250px] border border-[#F0C38E]/20"
                      >
                        <div className="p-3">
                          {item.items.map((subItem, index) => (
                            <Link
                              href={subItem.href}
                              key={index}
                              className="block py-2 px-3 text-base hover:bg-[#F0C38E]/10 rounded transition-colors"
                              onClick={closeAll}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden mr-3  bg-[#F0C38E]/90 text-[#221F39]"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-10 w-10" />
              ) : (
                <Menu className="h-10 w-10" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-20 left-0 w-full bg-[#221F39] text-[#F0C38E] z-20 overflow-hidden"
          >
            <div className="p-4 overflow-y-auto h-full">
              {navItems.map((section) => (
                <div key={section.title} className="mb-4">
                  <motion.button
                    className="flex items-center justify-between w-full text-xl font-semibold py-3 border-b border-[#F0C38E]/20"
                    onClick={() => toggleMobileSection(section.title)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section.title}
                    <motion.div
                      animate={{
                        rotate: activeMobileSection === section.title ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {activeMobileSection === section.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 ml-4 space-y-1 py-2">
                          {section.items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="block py-3 hover:text-[#F0C38E]/80 text-lg"
                                onClick={closeAll}
                              >
                                {item.title}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for closing when clicking outside */}
      <AnimatePresence>
        {(expandedSection || mobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-10"
            onClick={closeAll}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
