"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface FormSuccessProps {
  onReset: () => void;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ onReset }) => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Accessible focus shift to the confirmation heading on screen reader & keyboard navigation
    titleRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="py-12 sm:py-16 px-4 text-center flex flex-col items-center justify-center min-h-[520px]"
      role="status"
      aria-live="polite"
    >
      {/* Animated Checkmark Circle */}
      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
        <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
      </div>

      <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
        {t("form_success_badge")}
      </span>

      <h3
        ref={titleRef}
        tabIndex={-1}
        className="font-display text-2xl sm:text-3xl font-bold text-navy-950 mb-3 outline-none"
      >
        {t("form_ok_title")}
      </h3>

      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-8 font-sans">
        {t("form_ok_desc")}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-950 hover:bg-navy-900 text-ivory-100 font-medium text-xs tracking-wider transition-all duration-200 shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <RotateCcw className="w-3.5 h-3.5 text-gold-400" />
        <span>{t("form_reset_another")}</span>
      </button>
    </motion.div>
  );
};
