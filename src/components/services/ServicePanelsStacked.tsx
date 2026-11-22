"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ServicePanelContent } from "./ServicePanelContent";
import { PANEL_EASE_CSS } from "./motionConstants";

interface ServicePanelsStackedProps {
  services: ServiceItem[];
  activeIndex: number;
  prefersReducedMotion: boolean;
  onSelectService: (index: number) => void;
}

export const ServicePanelsStacked: React.FC<ServicePanelsStackedProps> = ({
  services,
  activeIndex,
  prefersReducedMotion,
  onSelectService,
}) => {
  const { t } = useLanguage();
  const activeItemRef = useRef<HTMLDivElement | null>(null);

  // C3: Scroll new active strip to viewport after previous panel finishes closing (~0.45s)
  useEffect(() => {
    if (activeItemRef.current && typeof window !== "undefined") {
      const timer = setTimeout(() => {
        const el = activeItemRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < 88 || rect.top > window.innerHeight * 0.7) {
          el.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }, 450);

      return () => clearTimeout(timer);
    }
  }, [activeIndex, prefersReducedMotion]);

  return (
    <div
      role="region"
      aria-label={t("services_heading")}
      className="space-y-3 sm:space-y-4 w-full mt-8"
    >
      {services.map((service, index) => {
        const isActive = activeIndex === index;
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            ref={isActive ? activeItemRef : null}
            className={`rounded-2xl overflow-hidden border scroll-mt-24 transition-colors duration-300 ${
              isActive
                ? "border-gold-500/40 bg-navy-900 shadow-elevated"
                : "border-white/10 bg-navy-950/80 hover:border-white/20"
            }`}
          >
            {/* Header Trigger Strip (Always Clickable) */}
            <button
              type="button"
              id={`service-stacked-tab-${service.id}`}
              aria-expanded={isActive}
              aria-controls={`service-stacked-panel-${service.id}`}
              onClick={() => onSelectService(index)}
              className="w-full text-left relative min-h-[84px] p-4 sm:p-5 flex items-center justify-between overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-inset"
            >
              {/* Background preview image behind strip header */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="100vw"
                  quality={60}
                  className={`object-cover transition-opacity duration-300 ${
                    isActive ? "opacity-25" : "opacity-15"
                  }`}
                  style={{ objectPosition: service.objectPosition || "center" }}
                />
                <div className="absolute inset-0 bg-navy-950/75 mix-blend-multiply" />
              </div>

              {/* Left Details: Number + Icon + Title */}
              <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 pr-4">
                <span className="font-mono font-bold text-xs sm:text-sm text-gold-400 shrink-0">
                  {service.number}
                </span>

                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? "bg-gold-500/20 text-gold-400 ring-1 ring-gold-500/30"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex flex-col">
                  <span className="font-display font-semibold text-white text-base sm:text-lg line-clamp-1">
                    {t(service.titleKey)}
                  </span>
                  <span className="text-xs text-gold-400/90 line-clamp-1">
                    {t(service.collapsedLabelKey)}
                  </span>
                </div>
              </div>

              {/* Right Details: Chevron Indicator */}
              <div
                className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isActive
                    ? "rotate-180 bg-gold-500/20 text-gold-400"
                    : "bg-white/5 text-slate-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* 
              C1: CSS grid-template-rows (0fr -> 1fr) for smooth hardware-accelerated expansion
            */}
            <div
              id={`service-stacked-panel-${service.id}`}
              aria-labelledby={`service-stacked-tab-${service.id}`}
              style={{
                display: "grid",
                gridTemplateRows: isActive ? "1fr" : "0fr",
                transition: prefersReducedMotion
                  ? "none"
                  : `grid-template-rows 0.55s ${PANEL_EASE_CSS}`,
              }}
              className="overflow-hidden border-t border-white/10 bg-navy-900/90"
            >
              <div className="min-h-0 overflow-hidden">
                {/* Top Image Preview for Stacked Mode */}
                <div className="relative w-full h-44 sm:h-56 overflow-hidden bg-navy-950">
                  <Image
                    src={service.image}
                    alt={t(service.imageAltKey)}
                    fill
                    sizes="100vw"
                    quality={75}
                    className="object-cover"
                    style={{ objectPosition: service.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-950/40 to-transparent" />
                </div>

                {/* Shared Content Block (C2) */}
                {isActive && (
                  <ServicePanelContent
                    service={service}
                    isStacked={true}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
