"use client";

import React, { useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ServicePanelImage } from "./ServicePanelImage";
import { ServicePanelContent } from "./ServicePanelContent";

interface ServicePanelProps {
  service: ServiceItem;
  index: number;
  total: number;
  isActive: boolean;
  isTransitioning?: boolean;
  prefersReducedMotion: boolean;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ServicePanel: React.FC<ServicePanelProps> = React.memo(
  ({
    service,
    index,
    total,
    isActive,
    isTransitioning = false,
    prefersReducedMotion,
    onSelect,
    onPrev,
    onNext,
  }) => {
    const { t, language } = useLanguage();
    const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
    const Icon = service.icon;

    // A6: Preload and decode image with img.decode() on hover/focus (>= 200ms)
    const handleMouseEnter = useCallback(() => {
      if (isActive) return;
      hoverTimerRef.current = setTimeout(() => {
        if (typeof window !== "undefined") {
          const img = new window.Image();
          img.src = service.image;
          img.decode?.().catch(() => {});
        }
      }, 200);
    }, [isActive, service.image]);

    const handleMouseLeave = useCallback(() => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }
    }, []);

    const isJapanese = language === "jp";

    return (
      <article
        id={`service-panel-${service.id}`}
        aria-labelledby={`service-title-${service.id}`}
        aria-expanded={isActive}
        tabIndex={0}
        onClick={() => !isActive && onSelect(index)}
        onKeyDown={(e) => {
          if (!isActive && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            onSelect(index);
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        style={{
          contain: "layout paint",
          minWidth: 0,
        }}
        className={`relative h-full rounded-3xl overflow-hidden border border-white/10 bg-navy-900 isolation-isolate select-none group transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400 ${
          isActive
            ? "cursor-default shadow-elevated"
            : "cursor-pointer hover:border-gold-500/40"
        } ${isTransitioning ? "will-change-[transform,opacity]" : ""}`}
      >
        {/* Background Grade Image Component */}
        <ServicePanelImage
          service={service}
          isActive={isActive}
          priority={index === 0}
          prefersReducedMotion={prefersReducedMotion}
          isTransitioning={isTransitioning}
        />

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* COLLAPSED PANEL VIEW (Inactive State)                              */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        {!isActive && (
          <div className="absolute inset-0 flex flex-col justify-between items-center py-8 px-2 z-20 pointer-events-none">
            {/* Index number */}
            <span className="font-mono font-bold text-xs sm:text-sm text-gold-400 tracking-wider">
              {service.number}
            </span>

            {/* Vertical Service Name with B7 Smooth Opacity Transition */}
            <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
              <span
                className={`font-display font-semibold text-xs sm:text-sm text-slate-300 group-hover:text-gold-300 transition-opacity duration-300 tracking-wider whitespace-nowrap ${
                  isJapanese
                    ? "[writing-mode:vertical-rl] [text-orientation:mixed]"
                    : "[writing-mode:vertical-rl] rotate-180"
                }`}
              >
                {t(service.collapsedLabelKey)}
              </span>
            </div>

            {/* Bottom Icon */}
            <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-gold-500/20 text-gold-400 flex items-center justify-center transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>

            {/* Hover Bottom-up 2px Gold Line */}
            <div className="absolute left-0 bottom-0 top-0 w-[2px] bg-gold-400 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out" />
          </div>
        )}

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* ACTIVE PANEL VIEW (Expanded State)                                 */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        {isActive && (
          <div className="absolute inset-0 flex flex-col p-6 sm:p-7 xl:p-8 z-20 pointer-events-none">
            {/* Top Bar: Sector Badge & Prev/Next Controls (flex-none row) */}
            <div className="flex-none flex items-center justify-between pointer-events-auto shrink-0 w-full z-10 pb-4">
              {/* Top-Left: Chip Odometer + Category Badge */}
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <span className="font-mono text-xs text-gold-400 font-bold px-3 py-1 rounded-full bg-navy-950/90 ring-1 ring-gold-500/30 shadow-sm">
                  {service.number} / 0{total}
                </span>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-950/90 ring-1 ring-gold-500/30 text-gold-400 text-xs font-semibold shadow-sm">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{t(service.collapsedLabelKey)}</span>
                </span>
              </div>

              {/* Top-Right: Prev / Next Ghost Circular Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  aria-label={t("services_prev_service")}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-950/90 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 flex items-center justify-center transition-colors ring-1 ring-white/10 hover:ring-gold-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  aria-label={t("services_next_service")}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-950/90 hover:bg-gold-500/20 text-slate-300 hover:text-gold-300 flex items-center justify-center transition-colors ring-1 ring-white/10 hover:ring-gold-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 cursor-pointer shadow-sm"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Bottom-Left Fixed Width Content (flex-1 min-h-0 prevents any top bar overlap) */}
            <div className="flex-1 min-h-0 flex flex-col justify-end pointer-events-auto overflow-hidden">
              <ServicePanelContent
                service={service}
                isStacked={false}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          </div>
        )}
      </article>
    );
  }
);

ServicePanel.displayName = "ServicePanel";
