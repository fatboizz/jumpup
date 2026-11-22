"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectGalleryImage } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
  layoutId?: string;
  projectTitle: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  layoutId,
  projectTitle,
}) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const total = images.length;
  const currentImage = images[currentIndex] || images[0];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    if (deltaX > 50) {
      handleNext();
    } else if (deltaX < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const nextIndex = (currentIndex + 1) % total;
  const nextImage = images[nextIndex];

  return (
    <div className="flex flex-col h-full w-full select-none">
      {/* Hidden image preload link */}
      {total > 1 && nextImage && (
        <link rel="preload" as="image" href={nextImage.src} />
      )}

      {/* Main Image Frame with Shared Element LayoutId */}
      <div
        className="relative flex-1 w-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-navy-950 border border-white/10 group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          {...(layoutId ? { layoutId } : {})}
          className="absolute inset-0 w-full h-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src={currentImage.src}
                alt={`${t(currentImage.altKey)} - ${projectTitle}`}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                quality={85}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Unified Grade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20 pointer-events-none" />

        {/* Gold Accent Laser Sweep Line at bottom of main image */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left z-10"
        />

        {/* Counter indicator badge */}
        {total > 1 && (
          <div className="absolute bottom-3 left-3 z-20 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-xs font-mono tabular-nums text-gold-400 ring-1 ring-gold-500/30">
            {currentIndex + 1} / {total}
          </div>
        )}

        {/* Prev / Next Ghost Controls */}
        {total > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-20">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t("project_prev")}
              className="pointer-events-auto w-10 h-10 rounded-full bg-navy-950/70 backdrop-blur-md text-white hover:text-gold-400 hover:bg-navy-950 flex items-center justify-center transition-all ring-1 ring-white/10 hover:ring-gold-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={t("project_next")}
              className="pointer-events-auto w-10 h-10 rounded-full bg-navy-950/70 backdrop-blur-md text-white hover:text-gold-400 hover:bg-navy-950 flex items-center justify-center transition-all ring-1 ring-white/10 hover:ring-gold-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Bar */}
      {total > 1 && (
        <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 scrollbar-none snap-x">
          {images.map((img, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`${t("project_aria_gallery_img")} ${idx + 1}`}
                aria-current={isSelected}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 shrink-0 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                  isSelected
                    ? "ring-2 ring-gold-400 opacity-100 scale-102"
                    : "opacity-50 hover:opacity-80 ring-1 ring-white/10"
                }`}
              >
                <Image
                  src={img.src}
                  alt={t(img.altKey)}
                  fill
                  sizes="80px"
                  quality={60}
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
