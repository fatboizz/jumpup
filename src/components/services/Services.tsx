"use client";

import React, { useReducer, useEffect, useCallback, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { useContactIntent } from "@/context/ContactIntentContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ServicePanels } from "./ServicePanels";
import { ServicePanelsStacked } from "./ServicePanelsStacked";
import { ArrowRight, HelpCircle } from "lucide-react";

interface ServicesState {
  activeIndex: number;
  direction: 1 | -1;
  hasInteracted: boolean;
}

type ServicesAction =
  | { type: "SELECT"; index: number }
  | { type: "PREV" }
  | { type: "NEXT" };

function servicesReducer(
  state: ServicesState,
  action: ServicesAction
): ServicesState {
  switch (action.type) {
    case "SELECT":
      return {
        activeIndex: action.index,
        direction: action.index >= state.activeIndex ? 1 : -1,
        hasInteracted: true,
      };
    case "PREV":
      return {
        activeIndex:
          (state.activeIndex - 1 + servicesData.length) % servicesData.length,
        direction: -1,
        hasInteracted: true,
      };
    case "NEXT":
      return {
        activeIndex: (state.activeIndex + 1) % servicesData.length,
        direction: 1,
        hasInteracted: true,
      };
    default:
      return state;
  }
}

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const { dispatchIntent } = useContactIntent();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const isDesktop = useMediaQuery("(min-width: 1024px)", false);

  const [state, dispatch] = useReducer(servicesReducer, {
    activeIndex: 0,
    direction: 1,
    hasInteracted: false,
  });

  // A2. Synchronize deep links (#services-event, etc.)
  const scrollToServices = useCallback(() => {
    if (typeof window === "undefined") return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById("services");
        if (el) {
          el.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }
      });
    });
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleHash = (shouldScroll = false) => {
      const hash = window.location.hash.toLowerCase();
      if (!hash) return;

      if (hash === "#services") {
        if (shouldScroll) scrollToServices();
        return;
      }

      const foundIdx = servicesData.findIndex((s) => s.hash === hash);
      if (foundIdx !== -1) {
        dispatch({ type: "SELECT", index: foundIdx });
        if (shouldScroll) {
          scrollToServices();
        }
      }
    };

    // On initial mount with hash: scroll after layout stabilizes
    if (window.location.hash) {
      handleHash(true);
    }

    // On external hashchange (Hero, Footer links, etc.)
    const onHashChange = () => handleHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [scrollToServices]);

  // Handle internal user click on service: update hash via replaceState WITHOUT scrolling
  const handleSelectService = useCallback((newIndex: number) => {
    dispatch({ type: "SELECT", index: newIndex });
    if (typeof window !== "undefined") {
      const targetHash = servicesData[newIndex]?.hash;
      if (targetHash && window.location.hash !== targetHash) {
        window.history.replaceState(null, "", targetHash);
      }
    }
  }, []);

  const handlePrev = useCallback(() => {
    dispatch({ type: "PREV" });
  }, []);

  const handleNext = useCallback(() => {
    dispatch({ type: "NEXT" });
  }, []);

  const currentService = servicesData[state.activeIndex];

  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden border-t border-white/10 scroll-mt-24"
    >
      {/* Subtle Architectural Atmosphere & Glows */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-navy-700/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Screen Reader Announcement for Accessibility (A6: ONLY after interaction) */}
      {state.hasInteracted && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`${t("services_tab_list_aria")}: ${state.activeIndex + 1} / ${
            servicesData.length
          } - ${t(currentService.titleKey)}`}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          eyebrow={t("services_eyebrow")}
          heading={t("services_heading")}
          subtitle={t("services_subtitle")}
          theme="dark"
        />

        {/* A3: SINGLE DOM TREE - No duplicate hidden/block render */}
        {isDesktop ? (
          <ServicePanels
            services={servicesData}
            activeIndex={state.activeIndex}
            prefersReducedMotion={prefersReducedMotion}
            onSelectService={handleSelectService}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : (
          <ServicePanelsStacked
            services={servicesData}
            activeIndex={state.activeIndex}
            prefersReducedMotion={prefersReducedMotion}
            onSelectService={handleSelectService}
          />
        )}

        {/* Auxiliary Custom Consultation Banner */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={() => dispatchIntent("other", true)}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm text-slate-300 hover:text-gold-300 transition-colors py-2 px-4 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-gold-500/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{t("services_custom_need")}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
