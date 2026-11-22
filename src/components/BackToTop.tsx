"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const BackToTop: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#C5A059",
            color: "#060E1A",
          }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={scrollToTop}
          aria-label={t("back_to_top_aria")}
          className="fixed bottom-[5.5rem] right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-navy-950/95 text-gold-400 border border-gold-400/40 shadow-elevated flex items-center justify-center backdrop-blur-md transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
