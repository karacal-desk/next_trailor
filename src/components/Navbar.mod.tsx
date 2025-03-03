"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure for our navigation items
type NavItem = {
  title: string;
  items: { title: string; time: string }[];
};

// Our navigation data
const navItems: NavItem = {
  title: "Timings",
  items: [
    {
      title: "Monday & Wednesday (2 batches) ",
      time: "11:00 A.M. > 01:00 P.M. | 04:00 P.M. > 06:00 P.M.",
    },
    {
      title: "Tuesday & Thursday (2 batches) ",
      time: "11:00 A.M. > 01:00 P.M. | 04:00 P.M. > 06:00 P.M.",
    },
    {
      title: "Sunday (Working Professionals) ",
      time: "11:00 A.M. > 01:00 P.M.",
    },
    {
      title: "Friday (Online Class) ",
      time: "11:00 A.M. > 01:00 P.M.",
    },
  ],
};

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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bg-[#221F39] text-[#F0C38E] z-10 w-full shadow-lg"
      >
        <nav className="container mx-auto px-2">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="ml-3 md:ml-0 font-bold text-2xl">
              ASHAA
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 font-sans text-2xl">
              <div key={navItems.title} className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-[#F0C38E] hover:text-[#221F39] hover:bg-[#F0C38E]"
                  onClick={() => toggleDesktopSection(navItems.title)}
                >
                  {navItems.title}
                  <motion.div
                    animate={{
                      rotate: expandedSection === navItems.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </Button>

                <AnimatePresence>
                  {expandedSection === navItems.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 bg-[#221F39] rounded-md shadow-lg z-20 md:min-w-[450px] border border-[#F0C38E]/20"
                    >
                      <div className="p-3 flex flex-col">
                        {navItems.items.map((subItem) => (
                          <>
                            <p
                              className="block py-2 px-3 text-base hover:bg-[#F0C38E]/10 rounded transition-colors"
                              onClick={closeAll}
                            >
                              {subItem.title}
                              <ChevronDown />
                            </p>

                            <p
                              className="block py-2 px-3 text-gray-400 text-base hover:bg-[#F0C38E]/10 rounded transition-colors"
                              onClick={closeAll}
                            >
                              {subItem.time}
                            </p>
                          </>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
        </nav>
      </motion.div>

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
              <div key={navItems.title} className="mb-4">
                <motion.button
                  className="flex items-center justify-between w-full text-xl font-semibold py-3 border-b border-[#F0C38E]/20"
                  onClick={() => toggleMobileSection(navItems.title)}
                  whileTap={{ scale: 0.98 }}
                >
                  {navItems.title}
                  <motion.div
                    animate={{
                      rotate: activeMobileSection === navItems.title ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeMobileSection === navItems.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 ml-4 space-y-1 py-2">
                        {navItems.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <p
                              className="block py-2 px-3 text-base hover:bg-[#F0C38E]/10 rounded transition-colors"
                              onClick={closeAll}
                            >
                              {item.title}
                              <ChevronDown />
                            </p>

                            <p
                              className="block py-2 px-3 text-base text-gray-400 hover:bg-[#F0C38E]/10 rounded transition-colors"
                              onClick={closeAll}
                            >
                              {item.time}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
