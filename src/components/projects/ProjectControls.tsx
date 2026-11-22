"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectControlsProps {
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export const ProjectControls: React.FC<ProjectControlsProps> = ({
  activeIndex,
  total,
  onPrev,
  onNext,
  onSelect,
}) => {
  const { t } = useLanguage();

  if (total <= 1) return null;

  const currentNum = String(activeIndex + 1).padStart(2, "0");
  const totalNum = String(total).padStart(2, "0");
  const progressPercent = ((activeIndex + 1) / total) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 flex items-center justify-between gap-4 select-none">
      {/* Left: Thin Gold Progress Bar */}
      <div className="flex items-center space-x-3">
        <div
          role="progressbar"
          aria-valuenow={activeIndex + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label="Progress"
          className="h-0.5 w-28 sm:w-44 rounded-full bg-white/15 overflow-hidden relative"
        >
          <div
            style={{ width: `${progressPercent}%` }}
            className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 transition-all duration-300 ease-out origin-left"
          />
        </div>

        {/* Counter Odometer */}
        <div className="px-3 py-1 rounded-full bg-navy-950/80 border border-white/10 ring-1 ring-gold-500/20 flex items-center space-x-1">
          <span className="font-mono text-xs sm:text-sm font-bold text-gold-400 tabular-nums">
            {currentNum}
          </span>
          <span className="text-xs text-slate-500 font-mono">/</span>
          <span className="font-mono text-xs sm:text-sm text-slate-400 tabular-nums">
            {totalNum}
          </span>
        </div>
      </div>

      {/* Center: Pagination Dots for <= 8 projects (Desktop & Tablet) */}
      {total <= 8 && (
        <div className="hidden sm:flex items-center space-x-2">
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              aria-label={`${t("project_slide_label")} ${idx + 1}`}
              className="p-1.5 sm:p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full"
            >
              <span
                className={`block transition-all duration-300 rounded-full ${
                  idx === activeIndex
                    ? "w-6 h-1.5 bg-gold-400"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Right: Prev / Next Circular Ghost Buttons */}
      <div className="flex items-center space-x-2.5">
        <button
          type="button"
          onClick={onPrev}
          disabled={activeIndex === 0}
          aria-label={t("project_prev")}
          className="w-11 h-11 rounded-full border border-white/10 bg-navy-950/80 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 hover:border-gold-400/40 flex items-center justify-center transition-all shadow-sm cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={activeIndex === total - 1}
          aria-label={t("project_next")}
          className="w-11 h-11 rounded-full border border-white/10 bg-navy-950/80 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 hover:border-gold-400/40 flex items-center justify-center transition-all shadow-sm cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
