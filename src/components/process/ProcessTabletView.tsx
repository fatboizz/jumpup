"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { ProcessStepItem } from "@/data/process";
import { useLanguage } from "@/context/LanguageContext";
import { ProcessStepCard } from "./ProcessStepCard";
import { STAGGER_DELAY, DUR, EASE_OUT } from "./motionConstants";

interface ProcessTabletViewProps {
  steps: ProcessStepItem[];
  prefersReducedMotion: boolean;
}

export const ProcessTabletView: React.FC<ProcessTabletViewProps> = ({
  steps,
  prefersReducedMotion,
}) => {
  const { t } = useLanguage();

  return (
    <ol className="grid grid-cols-2 gap-6 mt-12 list-none m-0 p-0">
      {steps.map((step, index) => {
        const isLastOdd = index === 4;

        return (
          <motion.li
            key={step.id}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: DUR,
              delay: index * STAGGER_DELAY,
              ease: EASE_OUT,
            }}
            className={`flex flex-col ${isLastOdd ? "col-span-2 max-w-md mx-auto w-full" : ""}`}
          >
            {/* Header: Step Number Circle + Duration Pill */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 font-display font-bold text-base flex items-center justify-center border border-gold-500/40 shadow-sm">
                {step.step}
              </div>

              <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-navy-900 text-xs font-mono font-medium">
                <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>{t(step.durationKey)}</span>
              </div>
            </div>

            {/* Step Card */}
            <div className="flex-1">
              <ProcessStepCard
                step={step}
                isReached={true}
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
};
