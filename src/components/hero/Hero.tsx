"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
  PanInfo,
} from "framer-motion";
import { cinematicHeroSlides } from "@/data/heroShowcase";
import { useHeroAutoplay } from "@/hooks/useHeroAutoplay";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroStats } from "./HeroStats";
import { HeroControls } from "./HeroControls";
import { ScrollCue } from "./ScrollCue";
import { useLanguage } from "@/context/LanguageContext";

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const isInView = useInView(heroRef, { amount: 0.25 });

  // Autoplay management
  const {
    activeIndex,
    shouldPlay,
    isPaused,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    setIsHovering,
    setIsFocused,
  } = useHeroAutoplay({
    totalSlides: cinematicHeroSlides.length,
    autoplayDuration: 7000,
    isInView,
  });

  // Parallax on scroll (disabled on reduced-motion & mobile)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "12%"]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "-6%"]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    prefersReducedMotion ? [1, 1] : [1, 0.25]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    const node = heroRef.current;
    if (node) {
      node.addEventListener("keydown", handleKeyDown);
      return () => node.removeEventListener("keydown", handleKeyDown);
    }
  }, [nextSlide, prevSlide]);

  // Touch Swipe Gesture Handling (threshold 50px or velocity > 500)
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50;
    const swipeVelocity = 500;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -swipeVelocity
    ) {
      nextSlide();
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > swipeVelocity
    ) {
      prevSlide();
    }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={t("hero_carousel_aria")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-navy-950 text-white select-none focus:outline-none"
      style={{ touchAction: "pan-y" }}
    >
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L0 - L2: CINEMATIC SLIDER BACKGROUND WITH PARALLAX & COLOR GRADING  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full">
        <HeroBackground
          slides={cinematicHeroSlides}
          activeIndex={activeIndex}
          prefersReducedMotion={prefersReducedMotion}
        />
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L3: TEXT CONTENT CONTAINER WITH TOUCH SWIPE GESTURE SUPPORT        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center"
      >
        <HeroContent
          slides={cinematicHeroSlides}
          activeIndex={activeIndex}
          prefersReducedMotion={prefersReducedMotion}
        />

        {/* Stats Strip */}
        <HeroStats prefersReducedMotion={prefersReducedMotion} />
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L4: CONTROL BAR AT BOTTOM                                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <HeroControls
        slides={cinematicHeroSlides}
        activeIndex={activeIndex}
        shouldPlay={shouldPlay}
        isPaused={isPaused}
        prefersReducedMotion={prefersReducedMotion}
        onSelectSlide={goToSlide}
        onNext={nextSlide}
        onPrev={prevSlide}
        onTogglePlay={togglePlay}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* L5: SCROLL DOWN INDICATOR                                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <ScrollCue prefersReducedMotion={prefersReducedMotion} />
    </section>
  );
};
