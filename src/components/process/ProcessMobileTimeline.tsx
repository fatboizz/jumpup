"use client";

import React, { useState } from "react";
import { motion, MotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { Clock } from "lucide-react";
import { ProcessStepItem } from "@/data/process";
import { useLanguage } from "@/context/LanguageContext";
import { ProcessStepCard } from "./ProcessStepCard";
import { SPRING_CONFIG, STEP_THRESHOLDS } from "./motionConstants";

interface ProcessMobileTimelineProps {
  steps: ProcessStepItem[];
  progress: MotionValue<number>;
  prefersReducedMotion: boolean;
}

export const ProcessMobileTimeline: React.FC<ProcessMobileTimelineProps> = ({
  steps,
  progress,
  prefersReducedMotion,
}) => {
  const { t } = useLanguage();
  const [reachedIndex, setReachedIndex] = useState(prefersReducedMotion ? 4 : 0);

  const springProgress = useSpring(progress, SPRING_CONFIG);

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
    <div className="relative w-full mt-10 select-none">
      {/* Vertical Rail: Left: 21px (so it aligns with center of 44px button at left: 0) */}
      <div
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-[21px] w-[2px] bg-slate-200 pointer-events-none"
      >
        <motion.div
          style={{
            scaleY: prefersReducedMotion ? 1 : springProgress,
          }}
          className="w-full h-full bg-gradient-to-b from-gold-500 via-gold-400 to-gold-300 origin-top"
        />
      </div>

      <ol className="space-y-8 list-none m-0 p-0 relative">
        {steps.map((step, index) => {
          const isReached = index <= reachedIndex || prefersReducedMotion;

          return (
            <li key={step.id} className="relative flex items-start pl-14">
              {/* Left Step Node (44px) */}
              <div
                aria-hidden="true"
                className={`absolute left-0 top-0 w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm tabular-nums z-10 transition-all duration-300 ${
                  isReached
                    ? "bg-navy-950 text-gold-400 border-2 border-gold-500 shadow-[0_0_0_4px_rgba(212,175,55,0.18)]"
                    : "bg-white text-slate-500 border-2 border-slate-300 shadow-sm"
                }`}
              >
                {step.step}
              </div>

              {/* Right Content Column */}
              <div className="w-full">
                {/* Duration Badge above card */}
                <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-navy-900 text-xs font-mono font-medium mb-2.5">
                  <Clock className="w-3 h-3 text-gold-600 shrink-0" />
                  <span>{t(step.durationKey)}</span>
                </div>

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
