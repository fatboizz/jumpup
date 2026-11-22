"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HeroStatsProps {
  prefersReducedMotion: boolean;
}

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  prefersReducedMotion: boolean;
  isInView: boolean;
}

const StatCounter: React.FC<StatItemProps> = ({
  target,
  suffix = "",
  label,
  prefersReducedMotion,
  isInView,
}) => {
  const [displayValue, setDisplayValue] = useState(
    prefersReducedMotion ? target : 0
  );
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(target);
      return;
    }

    if (isInView) {
      const controls = animate(motionVal, target, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target, motionVal, prefersReducedMotion]);

  return (
    <div className="flex flex-col text-left px-2 sm:px-4 py-2">
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight tabular-nums flex items-baseline space-x-0.5">
        <span>{displayValue}</span>
        {suffix && <span className="text-gold-400 text-lg sm:text-xl font-bold">{suffix}</span>}
      </div>
      <span className="text-slate-300 text-xs font-light tracking-wide line-clamp-1 mt-0.5">
        {label}
      </span>
    </div>
  );
};

export const HeroStats: React.FC<HeroStatsProps> = ({ prefersReducedMotion }) => {
  const { t } = useLanguage();
  const stripRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stripRef, { once: true, margin: "-50px" });

  const stats = [
    { target: 500, suffix: "+", label: t("stat_capacity_lbl") },
    { target: 3, suffix: " Miền", label: t("stat_regions_lbl") },
    { target: 10, suffix: "+", label: t("stat_years_lbl") },
    { target: 3, suffix: " Lang", label: t("stat_languages_lbl") },
  ];

  return (
    <motion.div
      ref={stripRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mb-6 p-2.5 sm:p-3 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl shadow-elevated"
      aria-label="Corporate Track Record Metrics"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat, idx) => (
          <StatCounter
            key={idx}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            prefersReducedMotion={prefersReducedMotion}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
};
