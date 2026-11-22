"use client";

import React, { useState, useEffect } from "react";
import { motion, MotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { Clock } from "lucide-react";
import { ProcessStepItem } from "@/data/process";
import { useLanguage } from "@/context/LanguageContext";
import { ProcessStepCard } from "./ProcessStepCard";
import { SPRING_CONFIG, STEP_THRESHOLDS } from "./motionConstants";

interface ProcessDesktopRailProps {
  steps: ProcessStepItem[];
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}

export const ProcessDesktopRail: React.FC<ProcessDesktopRailProps> = ({
  steps,
  progress,
  prefersReducedMotion,
}) => {
  const { t } = useLanguage();
  const [reachedIndex, setReachedIndex] = useState(prefersReducedMotion ? 4 : 0);

  const springProgress = useSpring(progress, SPRING_CONFIG);

  // Discrete threshold listener: updates state ONLY when passing a step threshold (no frame re-renders!)
  useMotionValueEvent(progress, "change", (latest) => {
    if (prefersReducedMotion) return;
    let current = 0;
    for (let i = 0; i < STEP_THRESHOLDS.length; i++) {
      if (latest >= STEP_THRESHOLDS[i]) {
        current = i;
      }
    }
    setReachedIndex((prev) => (prev !== current ? current : prev));
  });

  return (
    <div className="relative w-full mt-14 sm:mt-18 select-none">
      {/* 5-Column Grid Container */}
      <ol className="grid grid-cols-5 gap-6 relative list-none m-0 p-0">
        {/* Connecting Horizontal Rail (Spans strictly from center of Node 1 to center of Node 5) */}
        <div
          aria-hidden="true"
          className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0 pointer-events-none"
        >
          {/* Active Gold Rail sweeping according to scroll */}
          <motion.div
            style={{
              scaleX: prefersReducedMotion ? 1 : springProgress,
            }}
            className="h-full w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 origin-left"
          />
        </div>

        {steps.map((step, index) => {
          const isReached = index <= reachedIndex || prefersReducedMotion;

          return (
            <li key={step.id} className="flex flex-col relative z-10">
              {/* Top Rail Node: Circle + Duration Pill */}
              <div className="flex flex-col items-center mb-6">
                {/* 56px Step Circle */}
                <motion.div
                  aria-hidden="true"
                  animate={{
                    scale: isReached && !prefersReducedMotion ? [0.92, 1] : 1,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg tabular-nums transition-all duration-400 ${
                    isReached
                      ? "bg-navy-950 text-gold-400 border-2 border-gold-500 shadow-[0_0_0_6px_rgba(212,175,55,0.18)]"
                      : "bg-white text-slate-500 border-2 border-slate-300 shadow-sm"
                  }`}
                >
                  {step.step}
                </motion.div>

                {/* Duration Badge (Strictly single-line nowrap, font >= 12px) */}
                <div className="mt-2.5 inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-navy-900 text-xs font-mono font-medium whitespace-nowrap shadow-xs">
                  <Clock className="w-3 h-3 text-gold-600 shrink-0" />
                  <span>{t(step.durationKey)}</span>
                </div>
              </div>

              {/* Step Card */}
              <div className="flex-1">
                <ProcessStepCard
                  step={step}
                  isReached={isReached}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
