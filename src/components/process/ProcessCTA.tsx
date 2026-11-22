"use client";

import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useContactIntent } from "@/context/ContactIntentContext";

export const ProcessCTA: React.FC = () => {
  const { t } = useLanguage();
  const { dispatchIntent } = useContactIntent();

  const handleInquire = () => {
    dispatchIntent("event", true);
  };

  return (
    <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto px-4 text-center sm:text-left select-text">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-600 flex items-center justify-center shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm sm:text-base text-navy-950">
            {t("process_cta_prompt")}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            {t("process_note")}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleInquire}
        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg active:scale-[0.98] btn-sheen cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      >
        <span>{t("process_cta_btn")}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
