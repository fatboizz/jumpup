"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { leadershipData } from "@/data/leadership";
import { LeaderCard } from "./LeaderCard";
import { STAGGER_DELAY, DUR, EASE_OUT } from "./motionConstants";

export const Leadership: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = Boolean(useReducedMotion());

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-ivory-100 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: DUR, ease: EASE_OUT }}
          className="text-center"
        >
          <SectionHeader
            eyebrow={t("lead_eyebrow")}
            heading={t("lead_heading")}
            subtitle={t("lead_subtitle")}
            theme="light"
          />
        </motion.div>

        {/* Executive Portrait Duo Grid (items-start ensures independent natural expansion) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start mt-12 sm:mt-16">
          {leadershipData.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: DUR,
                delay: index * STAGGER_DELAY,
                ease: EASE_OUT,
              }}
              className="h-full"
            >
              <LeaderCard
                leader={leader}
                prefersReducedMotion={prefersReducedMotion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
