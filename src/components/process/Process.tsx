"use client";

import React, { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/process";
import { ProcessDesktopRail } from "./ProcessDesktopRail";
import { ProcessTabletView } from "./ProcessTabletView";
import { ProcessMobileTimeline } from "./ProcessMobileTimeline";
import { ProcessCTA } from "./ProcessCTA";
import { RAIL_SCROLL_OFFSET, DUR, EASE_OUT } from "./motionConstants";

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = Boolean(useReducedMotion());

  // Track section scroll progress to drive the gold rail
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: RAIL_SCROLL_OFFSET,
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: DUR, ease: EASE_OUT }}
          className="text-center"
        >
          <SectionHeader
            eyebrow={t("process_eyebrow")}
            heading={t("process_heading")}
            subtitle={t("process_subtitle")}
            theme="light"
          />
        </motion.div>

        {/* Pure CSS Responsive DOM (Zero Hydration CLS - QA-005) */}
        {/* Desktop Rail (>= 1024px) */}
        <div className="hidden lg:block">
          <ProcessDesktopRail
            steps={processSteps}
            progress={scrollYProgress}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        {/* Tablet View (640px - 1023px) */}
        <div className="hidden sm:block lg:hidden">
          <ProcessTabletView
            steps={processSteps}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        {/* Mobile Timeline (< 640px) */}
        <div className="block sm:hidden">
          <ProcessMobileTimeline
            steps={processSteps}
            progress={scrollYProgress}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        {/* Bottom Strategic Action Banner */}
        <ProcessCTA />
      </div>
    </section>
  );
};

export default Process;
