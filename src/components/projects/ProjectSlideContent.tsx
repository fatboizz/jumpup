"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, Hotel, TrendingUp, Building, Film } from "lucide-react";
import { Project, ProjectCategory } from "@/data/projectTypes";
import { useLanguage } from "@/context/LanguageContext";
import {
  EASE_OUT,
  DUR_CONTENT,
  STAGGER_CHILDREN,
  TEXT_SETTLE_DELAY,
} from "./motionConstants";

interface ProjectSlideContentProps {
  project: Project;
  isActive: boolean;
  prefersReducedMotion: boolean;
  onOpenViewer: (project: Project) => void;
}

const categoryIcons: Record<ProjectCategory, React.ComponentType<{ className?: string }>> = {
  event: Hotel,
  market: TrendingUp,
  realestate: Building,
  animation: Film,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: TEXT_SETTLE_DELAY,
      staggerChildren: STAGGER_CHILDREN,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR_CONTENT,
      ease: EASE_OUT,
    },
  },
};

const titleMaskVariants: Variants = {
  hidden: { opacity: 0, y: 16, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: DUR_CONTENT,
      ease: EASE_OUT,
    },
  },
};

export const ProjectSlideContent: React.FC<ProjectSlideContentProps> = ({
  project,
  isActive,
  prefersReducedMotion,
  onOpenViewer,
}) => {
  const { t, language } = useLanguage();
  const [isSettled, setIsSettled] = useState(isActive);

  // D2: Settle timer to ensure text only reveals when card has settled >= 120ms
  useEffect(() => {
    if (!isActive) {
      setIsSettled(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsSettled(true);
    }, TEXT_SETTLE_DELAY * 1000);

    return () => clearTimeout(timer);
  }, [isActive]);

  const CategoryIcon = categoryIcons[project.category] || Hotel;
  const highlightStat = project.highlightStat || project.scale;
  const isJapanese = language === "jp";

  return (
    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 z-20 pointer-events-none flex flex-col justify-end">
      {/* Fixed max-width block to prevent text re-wrapping when card scales */}
      <div className="w-full max-w-[min(560px,88%)] select-text text-left">
        {/* 1. Meta Row: Year & Category Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
          <span className="font-mono text-xs font-bold text-gold-400 px-2.5 py-0.5 rounded-full bg-navy-950/90 ring-1 ring-gold-500/30">
            {project.year}
          </span>
          <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-navy-950/90 ring-1 ring-gold-500/30 text-gold-400 text-xs font-semibold">
            <CategoryIcon className="w-3.5 h-3.5" />
            <span>{t(`project_filter_${project.category}` as any)}</span>
          </span>
        </div>

        {/* 2. Project Title with Elegant Mask Reveal */}
        <motion.h3
          variants={prefersReducedMotion ? undefined : titleMaskVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={isActive && isSettled ? "visible" : "hidden"}
          aria-label={t(project.titleKey)}
          className={`font-display font-semibold text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-2 line-clamp-2 ${
            isJapanese ? "tracking-normal" : "tracking-tight"
          }`}
        >
          {t(project.titleKey)}
        </motion.h3>

        {/* 3. Location Strip */}
        {isActive && (
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={isSettled ? "visible" : "hidden"}
            className="flex items-center space-x-1.5 text-xs sm:text-sm text-slate-200 font-light mb-3"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="line-clamp-1">{t(project.locationKey)}</span>
          </motion.div>
        )}

        {/* 4. Single Highlight Stat (Only if real stat exists) */}
        {isActive && highlightStat && (
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={isSettled ? "visible" : "hidden"}
            className="flex items-baseline space-x-2.5 mb-4 py-1"
          >
            <span className="font-display font-bold text-2xl sm:text-3xl text-gold-400 tabular-nums leading-none">
              {t(highlightStat.valueKey)}
            </span>
            <span className="text-xs text-slate-300 font-light">
              {t(highlightStat.labelKey)}
            </span>
          </motion.div>
        )}

        {/* 5. Direct View Details CTA Button */}
        {isActive && (
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            animate={isSettled ? "visible" : "hidden"}
            className="pt-1"
          >
            <button
              type="button"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onOpenViewer(project)}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg active:scale-[0.98] btn-sheen cursor-pointer pointer-events-auto group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <span>{t("project_view_details")}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
