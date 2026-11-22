"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProcessStepItem } from "@/data/process";
import { useLanguage } from "@/context/LanguageContext";
import { INACTIVE_OPACITY } from "./motionConstants";

interface ProcessStepCardProps {
  step: ProcessStepItem;
  isReached: boolean;
  prefersReducedMotion: boolean;
  className?: string;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = React.memo(
  ({ step, isReached, prefersReducedMotion, className = "" }) => {
    const { t, language } = useLanguage();
    const isJapanese = language === "jp";

    return (
      <div
        style={{
          opacity: prefersReducedMotion ? 1 : isReached ? 1 : INACTIVE_OPACITY,
          transform:
            prefersReducedMotion || isReached ? "translateY(0)" : "translateY(8px)",
        }}
        className={`h-full rounded-2xl border bg-white p-6 xl:p-7 transition-all duration-400 group flex flex-col justify-between ${
          isReached
            ? "border-gold-500/50 shadow-soft"
            : "border-slate-200/90 hover:border-slate-300"
        } ${className}`}
      >
        <div>
          {/* 1. Step Title (Max 2 lines, aligned across cards) */}
          <h3
            className={`font-display font-semibold text-lg xl:text-xl text-navy-950 min-h-[3.25rem] flex items-center leading-snug group-hover:text-gold-700 transition-colors ${
              isJapanese ? "tracking-normal" : "tracking-tight"
            }`}
          >
            {t(step.titleKey)}
          </h3>

          {/* 2. Short Gold Accent Divider (24x2px) */}
          <div
            style={{
              transform: isReached ? "scaleX(1)" : "scaleX(0.4)",
            }}
            className="w-6 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 my-3 rounded-full origin-left transition-transform duration-500"
          />

          {/* 3. Golden Lead / Focus Concept (Navy-900 font-medium for contrast > 12:1) */}
          <p className="text-xs sm:text-sm font-medium text-navy-900 mb-2 leading-relaxed min-h-[2.75rem]">
            {t(step.leadKey)}
          </p>

          {/* 4. Full Execution Description */}
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            {t(step.descKey)}
          </p>
        </div>
      </div>
    );
  }
);

ProcessStepCard.displayName = "ProcessStepCard";
