"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CinematicHeroSlide } from "@/data/heroShowcase";
import { useLanguage } from "@/context/LanguageContext";

interface HeroBackgroundProps {
  slides: CinematicHeroSlide[];
  activeIndex: number;
  prefersReducedMotion: boolean;
}

const LUXURY_EASE_CROSSFADE = [0.65, 0, 0.35, 1] as const;

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
  slides,
  activeIndex,
  prefersReducedMotion,
}) => {
  const { language } = useLanguage();
  const currentSlide = slides[activeIndex];
  const nextIndex = (activeIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];

  // Preload next slide image in the background to ensure instantaneous crossfading
  useEffect(() => {
    if (typeof window !== "undefined" && nextSlide?.image) {
      const img = new window.Image();
      img.src = nextSlide.image;
    }
  }, [nextSlide]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L0: BACKGROUND SLIDER WITH KEN BURNS & CROSSFADE                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentSlide.id}
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.3 : 1.2,
            ease: LUXURY_EASE_CROSSFADE,
          }}
          className="absolute inset-0 w-full h-full will-change-[transform,opacity]"
        >
          <motion.div
            initial={
              prefersReducedMotion
                ? { scale: 1, x: "0%" }
                : {
                    scale: 1,
                    x: "0%",
                  }
            }
            animate={
              prefersReducedMotion
                ? { scale: 1, x: "0%" }
                : {
                    scale: 1.06,
                    x: activeIndex % 2 === 0 ? "-1.2%" : "1.2%",
                  }
            }
            transition={{
              duration: 8.2, // Slide duration (7s) + crossfade margin
              ease: "linear",
            }}
            style={{
              transformOrigin:
                currentSlide.focalPoint === "center top"
                  ? "center top"
                  : activeIndex % 2 === 0
                  ? "left center"
                  : "right center",
            }}
            className="relative w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.imageAlt[language] || currentSlide.imageAlt.en}
              fill
              priority={activeIndex === 0}
              sizes="100vw"
              quality={80}
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L1: COLOR GRADING OVERLAY (ELIMINATES BROWN TONES -> DEEP NAVY/GOLD)*/}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* Navy Multiply Color Wash */}
      <div className="absolute inset-0 bg-[#060E1A]/40 mix-blend-multiply pointer-events-none" />

      {/* Champagne Gold Warmth Soft-Light */}
      <div className="absolute inset-0 bg-[rgba(212,175,55,0.07)] mix-blend-soft-light pointer-events-none" />

      {/* Primary Multi-directional Deep Navy Gradient (Desktop) */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, rgba(6,14,26,0.92) 0%, rgba(6,14,26,0.78) 32%, rgba(6,14,26,0.35) 62%, rgba(6,14,26,0.10) 100%),
            linear-gradient(0deg, rgba(6,14,26,0.85) 0%, rgba(6,14,26,0) 38%),
            linear-gradient(180deg, rgba(6,14,26,0.55) 0%, rgba(6,14,26,0) 22%)
          `,
        }}
      />

      {/* Mobile-Optimized Strong Vertical Navy Gradient */}
      <div
        className="block md:hidden absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(6,14,26,0.70) 0%, rgba(6,14,26,0.45) 30%, rgba(6,14,26,0.90) 70%, rgba(6,14,26,0.98) 100%),
            linear-gradient(90deg, rgba(6,14,26,0.85) 0%, rgba(6,14,26,0.35) 100%)
          `,
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L2: ARCHITECTURAL VIGNETTE, FILM GRAIN & SUBTLE GRID PATTERN        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* Radial Corner Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(6,14,26,0.75) 100%)",
        }}
      />

      {/* Subtle Micro-Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Inline SVG Film Grain Texture */}
      <div className="absolute inset-0 film-grain opacity-40 mix-blend-overlay pointer-events-none" />
    </div>
  );
};
