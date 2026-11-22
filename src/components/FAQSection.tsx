"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteFAQItems, partnerBrands } from "@/data/siteContent";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Hotel } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow={t("faq_eyebrow")}
            heading={t("faq_heading")}
            subtitle={t("faq_subtitle")}
            theme="light"
          />
        </motion.div>

        {/* Accessible Accordion List */}
        <div className="space-y-4 mb-20">
          {siteFAQItems.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/60 hover:bg-white shadow-soft transition-all duration-200 overflow-hidden"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-navy-900 hover:text-gold-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-2xl"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <div className="w-8 h-8 rounded-lg bg-navy-950 text-gold-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold">
                        Q{index + 1}
                      </div>
                      <span className="text-sm sm:text-base leading-snug">
                        {item.question[language]}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-navy-950" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60">
                        {item.answer[language]}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ────────────────────────────────────────────────────────────────── */}
        {/* 5-STAR HOTEL PARTNERS & VENUE SHOWCASE STRIP                       */}
        {/* ────────────────────────────────────────────────────────────────── */}
        <div className="pt-12 border-t border-slate-200/80">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-gold-700 uppercase mb-2">
              {t("faq_partner_title")}
            </span>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              {t("faq_partner_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {partnerBrands.map((brand) => (
              <div
                key={brand.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-gold-500/50 hover:bg-white transition-all text-center flex flex-col items-center justify-center min-h-[90px] group shadow-soft"
              >
                <Hotel className="w-5 h-5 text-slate-400 group-hover:text-gold-600 mb-2 transition-colors" />
                <span className="text-xs font-bold text-navy-900 group-hover:text-gold-700 transition-colors leading-tight line-clamp-2">
                  {brand.name}
                </span>
                <span className="text-xs text-slate-500 mt-1">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
