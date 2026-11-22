"use client";

import React from "react";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { CinematicHeroSlide } from "@/data/heroShowcase";
import { useLanguage } from "@/context/LanguageContext";

interface HeroControlsProps {
  slides: CinematicHeroSlide[];
  activeIndex: number;
  shouldPlay: boolean;
  isPaused: boolean;
  prefersReducedMotion: boolean;
  onSelectSlide: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onTogglePlay: () => void;
  onFocus: () => void;
  onBlur: () => void;
}

export const HeroControls: React.FC<HeroControlsProps> = ({
  slides,
  activeIndex,
  shouldPlay,
  isPaused,
  prefersReducedMotion,
  onSelectSlide,
  onNext,
  onPrev,
  onTogglePlay,
  onFocus,
  onBlur,
}) => {
  const { t, language } = useLanguage();

  return (
    <div
      className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pt-4 pb-6 sm:pb-8"
      onFocus={onFocus}
      onBlur={onBlur}
      role="region"
      aria-label={t("hero_carousel_aria")}
    >
      {/* Luxury Thin Gold Line Accent Above Control Bar */}
      <div className="w-full h-[1px] gold-line-accent mb-4 sm:mb-5 opacity-60" />

      <div className="flex items-center justify-between gap-4">
        {/* ───────────────────────────────────────────────────────────────── */}
        {/* 5-SEGMENT PROGRESS NAVIGATION                                     */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-5 gap-2 sm:gap-4 flex-1 max-w-4xl"
          role="tablist"
          aria-label="Hero Slide Categories"
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`${slide.number} ${
                  slide.shortNav[language] || slide.shortNav.en
                }`}
                onClick={() => onSelectSlide(idx)}
                className="group flex flex-col items-start text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg p-1 transition-all"
              >
                {/* Number & Short Label */}
                <div className="flex items-baseline space-x-1 sm:space-x-2 mb-1.5 sm:mb-2 w-full overflow-hidden">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive
                        ? "text-gold-400"
                        : isCompleted
                        ? "text-slate-300"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {slide.number}
                  </span>
                  <span
                    className={`hidden md:inline-block text-xs font-medium tracking-wider uppercase truncate transition-colors ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {slide.shortNav[language] || slide.shortNav.en}
                  </span>
                </div>

                {/* 2px Linear Progress Track */}
                <div className="w-full h-[2px] bg-white/15 rounded-full overflow-hidden relative">
                  {/* Completed Slide Bar */}
                  {isCompleted && (
                    <div className="w-full h-full bg-gold-400/60" />
                  )}

                  {/* Active Slide Running Bar */}
                  {isActive && (
                    <div
                      className={`h-full bg-gradient-to-r from-gold-500 to-gold-300 ${
                        shouldPlay && !prefersReducedMotion
                          ? "w-full transition-all duration-[7000ms] ease-linear"
                          : "w-full"
                      }`}
                      style={{
                        animation:
                          shouldPlay && !prefersReducedMotion
                            ? "progress-fill 7s linear forwards"
                            : "none",
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ───────────────────────────────────────────────────────────────── */}
        {/* PLAYBACK CONTROLS (PLAY/PAUSE & PREV/NEXT)                       */}
        {/* ───────────────────────────────────────────────────────────────── */}
        <div className="flex items-center space-x-1 sm:space-x-2 shrink-0">
          {/* Pause / Play Toggle */}
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={isPaused ? t("hero_play_slide") : t("hero_pause_slide")}
            aria-pressed={isPaused}
            className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-gold-400/40 text-slate-300 hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            {isPaused ? (
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            ) : (
              <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            )}
          </button>

          {/* Prev Slide */}
          <button
            type="button"
            onClick={onPrev}
            aria-label={t("hero_prev_slide")}
            className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-gold-400/40 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Next Slide */}
          <button
            type="button"
            onClick={onNext}
            aria-label={t("hero_next_slide")}
            className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-gold-400/40 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
