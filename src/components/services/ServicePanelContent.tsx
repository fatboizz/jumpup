"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { useContactIntent } from "@/context/ContactIntentContext";
import {
  TEXT_DELAY,
  TEXT_Y_OFFSET,
  CONTENT_EASE,
  CONTENT_DURATION,
  STAGGER_CHILDREN,
  STAGGER_CHILDREN_STACKED,
} from "./motionConstants";

interface ServicePanelContentProps {
  service: ServiceItem;
  isStacked?: boolean;
  prefersReducedMotion?: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// PRE-COMPUTED VARIANTS (Defined outside component to avoid object allocation)
// ─────────────────────────────────────────────────────────────────────────────
const containerVariantsDesktop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: TEXT_DELAY,
      staggerChildren: STAGGER_CHILDREN,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const containerVariantsStacked: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.22,
      staggerChildren: STAGGER_CHILDREN_STACKED,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: TEXT_Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: CONTENT_DURATION,
      ease: CONTENT_EASE,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 12, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: CONTENT_DURATION,
      ease: CONTENT_EASE,
    },
  },
};

export const ServicePanelContent: React.FC<ServicePanelContentProps> = ({
  service,
  isStacked = false,
  prefersReducedMotion = false,
}) => {
  const { t, language } = useLanguage();
  const { dispatchIntent } = useContactIntent();

  const handleInquire = () => {
    dispatchIntent(service.ctaCategory, true);
  };

  const isJapanese = language === "jp";
  const containerVariants = isStacked
    ? containerVariantsStacked
    : containerVariantsDesktop;

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`text-left select-text ${
        isStacked
          ? "w-full p-5 sm:p-7"
          : "w-full max-w-[500px] xl:max-w-[560px] pointer-events-auto"
      }`}
    >
      {/* 1. Tagline / Sector Eyebrow */}
      <motion.p
        variants={prefersReducedMotion ? undefined : itemVariants}
        className={`font-semibold text-gold-400 mb-1 line-clamp-1 ${
          isJapanese
            ? "text-xs tracking-[0.08em]"
            : "text-xs uppercase tracking-[0.16em]"
        }`}
      >
        {t(service.taglineKey)}
      </motion.p>

      {/* 2. Main Service Title with Clean Clip-path Mask Reveal & Balanced Wrap (QA-001) */}
      <motion.h3
        variants={prefersReducedMotion ? undefined : titleVariants}
        id={`service-title-${service.id}`}
        aria-label={t(service.titleKey)}
        className="font-display font-semibold text-white text-xl sm:text-2xl xl:text-3xl mb-2 sm:mb-2.5 leading-tight [text-wrap:balance] line-clamp-3"
      >
        {t(service.titleKey)}
      </motion.h3>

      {/* 3. Service Overview Description */}
      <motion.p
        variants={prefersReducedMotion ? undefined : itemVariants}
        className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed mb-3 line-clamp-2"
      >
        {t(service.descKey)}
      </motion.p>

      {/* 4. Highlights Grid: line-clamp-2, max-h <= 100px (QA-001) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 max-h-[100px] overflow-hidden">
        {service.highlightKeys.map((hKey, idx) => (
          <motion.div
            key={idx}
            variants={prefersReducedMotion ? undefined : itemVariants}
            className={`flex items-start space-x-2 p-2 rounded-xl bg-navy-950/70 border border-white/10 backdrop-blur-sm ${
              idx === 2 ? "hidden xl:flex" : ""
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-xs text-slate-200 font-normal leading-snug line-clamp-2">
              {t(hKey)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* 5. Bottom Row: Quick Stats & Direct CTA Button */}
      <motion.div
        variants={prefersReducedMotion ? undefined : itemVariants}
        className="pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5"
      >
        {/* Quick Stats Badges (QA-009: >= 12px) */}
        <div className="flex items-center space-x-2">
          {service.stats.map((stat, sIdx) => (
            <div
              key={sIdx}
              className="px-2.5 py-1.5 rounded-xl bg-navy-950/70 border border-white/10 text-left"
            >
              <span className="font-display font-extrabold text-xs sm:text-sm text-gold-400 block tabular-nums leading-none">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 font-light block mt-0.5">
                {t(stat.labelKey)}
              </span>
            </div>
          ))}
        </div>

        {/* Action CTA Button */}
        <button
          type="button"
          onClick={handleInquire}
          className={`inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg active:scale-[0.98] btn-sheen cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
            isStacked ? "w-full sm:w-auto" : ""
          }`}
        >
          <span>{t("services_cta_contact")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </motion.div>
  );
};
