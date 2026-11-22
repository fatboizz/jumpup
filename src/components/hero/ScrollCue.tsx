"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ScrollCueProps {
  prefersReducedMotion: boolean;
}

export const ScrollCue: React.FC<ScrollCueProps> = ({ prefersReducedMotion }) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex-col items-center pointer-events-auto"
        >
          <a
            href="#about"
            onClick={handleScrollToAbout}
            aria-label={t("hero_scroll_down")}
            className="group flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded p-1 transition-opacity opacity-75 hover:opacity-100"
          >
            <span className="text-slate-400 group-hover:text-gold-300 font-mono text-xs tracking-[0.25em] uppercase mb-2 transition-colors">
              {t("hero_scroll_down")}
            </span>

            {/* 36px Vertical Line with Animated Light Dot */}
            <div className="w-[1.5px] h-9 bg-white/20 relative overflow-hidden rounded-full">
              {!prefersReducedMotion ? (
                <div className="w-full h-2.5 bg-gradient-to-b from-gold-300 to-gold-500 rounded-full animate-scroll-dot" />
              ) : (
                <div className="w-full h-full bg-gold-400/60" />
              )}
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
