"use client";

import React, { useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CinematicHeroSlide } from "@/data/heroShowcase";

interface HeroContentProps {
  slides: CinematicHeroSlide[];
  activeIndex: number;
  prefersReducedMotion: boolean;
}

const LUXURY_EASE_ENTRANCE = [0.16, 1, 0.3, 1] as const;

export const HeroContent: React.FC<HeroContentProps> = ({
  slides,
  activeIndex,
  prefersReducedMotion,
}) => {
  const { t, language } = useLanguage();
  const currentSlide = slides[activeIndex];

  // Category selection handler to pre-fill the contact form
  const handleSelectServiceCategory = useCallback(
    (category: string, e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("jumpup_select_category", {
            detail: { category },
          })
        );
        const target = document.getElementById("services");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <div className="relative z-10 w-full max-w-4xl pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 text-left">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. EYEBROW PILL WITH SUBTLE PULSING GOLD STATUS DOT                 */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: LUXURY_EASE_ENTRANCE }}
        className="mb-4 sm:mb-5 inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-gold-400/30 backdrop-blur-md shadow-soft"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
        </span>
        <span
          className={`text-gold-300 font-semibold text-xs tracking-[0.2em] uppercase ${
            language === "jp" ? "tracking-[0.08em] normal-case" : ""
          }`}
        >
          {t("hero_eyebrow")}
        </span>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. H1 HEADLINE (FIXED FOR SEO & STABILITY, 600 WEIGHT, BALANCED)   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.h1
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: LUXURY_EASE_ENTRANCE }}
        className="hero-headline font-display font-semibold text-white text-[clamp(2.15rem,1.4rem+3.4vw,4.25rem)] tracking-tight text-balance max-w-3xl mb-5 sm:mb-6 leading-[1.18]"
      >
        {language === "jp" ? (
          <span className="inline-block [word-break:keep-all] [line-break:strict]">
            <span className="inline-block whitespace-nowrap">
              <span className="gold-gradient-text font-bold">
                {t("hero_title_gold")}
              </span>
              <span>で事業を成功へ導く、</span>
            </span>
            <span className="inline-block whitespace-nowrap">
              信頼の実行パートナー
            </span>
          </span>
        ) : (
          <>
            <span>{t("hero_title_p1")}&nbsp;</span>
            <span className="gold-gradient-text font-bold">
              {t("hero_title_gold")}
            </span>
          </>
        )}
      </motion.h1>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. SUBTITLE DESCRIPTION (1-2 SENTENCES, MAX-W-XL, SLATE-200)       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.p
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: LUXURY_EASE_ENTRANCE }}
        className="text-slate-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-7 sm:mb-8 text-pretty"
      >
        {t("hero_subtitle")}
      </motion.p>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. CALL-TO-ACTION BUTTONS                                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: LUXURY_EASE_ENTRANCE }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center space-x-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg hover:-translate-y-0.5 active:scale-[0.98] btn-sheen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <span>{t("hero_cta_primary")}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="#services"
          className="inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-gold-400/60 text-white font-semibold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <span>{t("hero_cta_secondary")}</span>
        </a>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. DYNAMIC SLIDE CAPTION (SYNCED WITH CURRENT ACTIVE SLIDE)        */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <div className="min-h-[44px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: LUXURY_EASE_ENTRANCE }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs"
          >
            {/* Gold Badge with subtle sheen sweep */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gold-500/20 text-gold-300 border border-gold-400/40 font-bold tracking-wider uppercase text-xs btn-sheen">
              {currentSlide.badge[language] || currentSlide.badge.en}
            </span>

            {/* Service Headline */}
            <span className="text-slate-200 font-medium text-xs sm:text-sm line-clamp-1">
              {currentSlide.serviceName[language] || currentSlide.serviceName.en}
            </span>

            {/* Single Arrow Navigation Link */}
            <a
              href="#services"
              onClick={(e) =>
                handleSelectServiceCategory(currentSlide.ctaCategory, e)
              }
              className="inline-flex items-center space-x-1 text-gold-400 hover:text-gold-300 font-semibold transition-colors underline-offset-4 hover:underline text-xs"
            >
              <span>{t("hero_details_link")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
