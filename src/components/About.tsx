"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Globe2, Building2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteTrustMetrics } from "@/data/siteContent";

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-80px" });

  // Animated counters for stats
  const [metricCounts, setMetricCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    if (!isInView) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setMetricCounts(siteTrustMetrics.map((m) => m.targetNumber));
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setMetricCounts(
        siteTrustMetrics.map((m) => Math.floor(m.targetNumber * easedProgress))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setMetricCounts(siteTrustMetrics.map((m) => m.targetNumber));
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isInView]);

  const strengths = [
    {
      num: "01",
      icon: ShieldCheck,
      title: t("strength_1_title"),
      desc: t("strength_1_desc"),
    },
    {
      num: "02",
      icon: Globe2,
      title: t("strength_2_title"),
      desc: t("strength_2_desc"),
    },
    {
      num: "03",
      icon: Building2,
      title: t("strength_3_title"),
      desc: t("strength_3_desc"),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow={t("about_eyebrow")}
            heading={t("about_heading")}
            subtitle={t("about_mission")}
            theme="light"
          />
        </motion.div>

        {/* 3 Core Strengths Cards with Refined, Sophisticated Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {strengths.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <SpotlightCard
                  spotlightColor="rgba(212, 175, 55, 0.12)"
                  className="h-full bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/90 hover:border-gold-500/50 shadow-card hover:shadow-elevated transition-all duration-300 group overflow-hidden"
                >
                  {/* Subtle Ghost Number */}
                  <div
                    className="absolute -top-2 -right-1 text-7xl font-display font-black text-slate-100/90 group-hover:text-gold-500/10 transition-colors select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {item.num}
                  </div>

                  <div className="relative z-10">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-navy-950 to-navy-850 text-gold-400 flex items-center justify-center mb-6 shadow-soft group-hover:border group-hover:border-gold-400/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Live Operational Stats Counter Strip */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-navy-950 rounded-2xl p-8 sm:p-10 border border-gold-500/30 shadow-elevated text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {siteTrustMetrics.map((metric, idx) => (
              <div
                key={metric.id}
                className={`${idx > 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""}`}
              >
                <div className="flex items-baseline space-x-1 mb-1.5">
                  <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-400">
                    {metricCounts[idx]}
                  </span>
                  <span className="text-2xl font-bold text-gold-300">
                    {metric.suffix}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {metric.label[language]}
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {metric.subtext[language]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
