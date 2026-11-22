"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { ContactInfoCard } from "./ContactInfoCard";
import { ContactFormCard } from "./ContactFormCard";
import { CONTAINER_VARIANTS, CARD_VARIANTS } from "./contactConstants";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-ivory-100 scroll-mt-24 relative"
      aria-label={t("cont_heading")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          eyebrow={t("cont_eyebrow")}
          heading={t("cont_heading")}
          subtitle={t("cont_subtitle")}
          centered={true}
          theme="light"
        />

        {/* 12-Column Responsive Layout (Items-stretch for equal card heights) */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 sm:mt-16 grid grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Left Column on Desktop (Col 5) / Secondary on Mobile (Order 2) */}
          <motion.div
            variants={CARD_VARIANTS}
            className="col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-col"
          >
            <ContactInfoCard />
          </motion.div>

          {/* Right Column on Desktop (Col 7) / Primary Action on Mobile (Order 1) */}
          <motion.div
            variants={CARD_VARIANTS}
            className="col-span-12 lg:col-span-7 order-1 lg:order-2 flex flex-col"
          >
            <ContactFormCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
