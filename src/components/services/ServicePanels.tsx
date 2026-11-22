"use client";

import React, { useCallback, useRef, useState, useEffect, useMemo } from "react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ServicePanel } from "./ServicePanel";
import {
  PANEL_DURATION,
  PANEL_EASE_CSS,
  PANEL_HEIGHT_CLAMP,
} from "./motionConstants";

interface ServicePanelsProps {
  services: ServiceItem[];
  activeIndex: number;
  prefersReducedMotion: boolean;
  onSelectService: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ServicePanels: React.FC<ServicePanelsProps> = ({
  services,
  activeIndex,
  prefersReducedMotion,
  onSelectService,
  onPrev,
  onNext,
}) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const keyDebounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const safetyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Compute CSS Grid columns variable --cols based on activeIndex
  const colsVar = useMemo(() => {
    return services
      .map((_, i) => (i === activeIndex ? "5fr" : "1fr"))
      .join(" ");
  }, [services, activeIndex]);

  // A3: Measure and lock --panel-open-w via ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    const updateOpenWidth = (width: number) => {
      const gap = 14; // gap-3.5 = 14px
      const available = Math.max(0, width - 3 * gap);
      const openW = Math.round(available * (5 / 8));
      el.style.setProperty("--panel-open-w", `${openW}px`);
    };

    updateOpenWidth(el.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          updateOpenWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // A8: Handle transition state & safety timeout
  useEffect(() => {
    setIsTransitioning(true);
    if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    safetyTimerRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, (PANEL_DURATION + 0.3) * 1000);

    return () => {
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, [activeIndex]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target === containerRef.current && e.propertyName === "grid-template-columns") {
      setIsTransitioning(false);
    }
  };

  // A7: Debounced keyboard navigation (80ms)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        if (keyDebounceTimerRef.current) return;

        keyDebounceTimerRef.current = setTimeout(() => {
          keyDebounceTimerRef.current = null;
        }, 80);

        if (e.key === "ArrowRight") onNext();
        else if (e.key === "ArrowLeft") onPrev();
        else if (e.key === "Home") onSelectService(0);
        else if (e.key === "End") onSelectService(services.length - 1);
      }
    },
    [onNext, onPrev, onSelectService, services.length]
  );

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={t("services_heading")}
      onKeyDown={handleKeyDown}
      onTransitionEnd={handleTransitionEnd}
      style={{
        display: "grid",
        gridTemplateColumns: colsVar,
        transition: prefersReducedMotion
          ? "none"
          : `grid-template-columns ${PANEL_DURATION}s ${PANEL_EASE_CSS}`,
        height: PANEL_HEIGHT_CLAMP,
      }}
      className="gap-3 sm:gap-3.5 w-full mt-10 sm:mt-14"
    >
      {services.map((service, index) => (
        <ServicePanel
          key={service.id}
          service={service}
          index={index}
          total={services.length}
          isActive={activeIndex === index}
          isTransitioning={isTransitioning}
          prefersReducedMotion={prefersReducedMotion}
          onSelect={onSelectService}
          onPrev={onPrev}
          onNext={onNext}
        />
      ))}
    </div>
  );
};
