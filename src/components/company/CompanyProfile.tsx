"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { CompanyInfoCard } from "./CompanyInfoCard";
import { CompanyLocationCard } from "./CompanyLocationCard";
import {
  CONTAINER_VARIANTS,
  CARD_VARIANTS,
  TOAST_DURATION,
} from "./motionConstants";

export const CompanyProfile: React.FC = () => {
  const { t } = useLanguage();
  const [toastText, setToastText] = useState<string | null>(null);

  const handleCopied = useCallback((copiedContent: string) => {
    setToastText(copiedContent);
    const timer = setTimeout(() => {
      setToastText(null);
    }, TOAST_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="company"
      className="py-24 sm:py-28 bg-white border-t border-slate-200/80 relative"
      aria-label={t("comp_heading")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          eyebrow={t("comp_eyebrow")}
          heading={t("comp_heading")}
          centered={true}
          theme="light"
        />

        {/* 12-Column Balanced Corporate Fact Sheet Grid */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Left Column: 7 Cols - Corporate Fact Sheet */}
          <motion.div
            variants={CARD_VARIANTS}
            className="col-span-12 lg:col-span-7 flex flex-col"
          >
            <CompanyInfoCard onCopied={handleCopied} />
          </motion.div>

          {/* Right Column: 5 Cols - Executive Headquarters & Location */}
          <motion.div
            variants={CARD_VARIANTS}
            className="col-span-12 lg:col-span-5 flex flex-col"
          >
            <CompanyLocationCard onCopied={handleCopied} />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Copied Toast Notification */}
      <AnimatePresence>
        {toastText && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-navy-950 text-ivory-100 border border-gold-500/30 shadow-2xl text-xs font-medium"
            role="status"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-white font-sans">{t("tbl_copied_toast")}</span>
              <span className="text-slate-400 font-mono text-xs truncate max-w-[200px]">
                {toastText}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompanyProfile;
