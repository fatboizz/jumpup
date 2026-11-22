"use client";

import React from "react";
import { Award, CheckCircle2, Building, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectTrustStrip: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center select-text">
      <div className="flex flex-col items-center p-3 sm:p-4">
        <Award className="w-5 h-5 text-gold-400 mb-2" />
        <span className="font-display font-bold text-lg sm:text-2xl text-white tabular-nums">
          {t("project_stat_1_val")}
        </span>
        <span className="text-xs text-slate-400 mt-1">
          {t("project_stat_1_lbl")}
        </span>
      </div>

      <div className="flex flex-col items-center p-3 sm:p-4">
        <CheckCircle2 className="w-5 h-5 text-gold-400 mb-2" />
        <span className="font-display font-bold text-lg sm:text-2xl text-white tabular-nums">
          {t("project_stat_2_val")}
        </span>
        <span className="text-xs text-slate-400 mt-1">
          {t("project_stat_2_lbl")}
        </span>
      </div>

      <div className="flex flex-col items-center p-3 sm:p-4">
        <Building className="w-5 h-5 text-gold-400 mb-2" />
        <span className="font-display font-bold text-lg sm:text-2xl text-white tabular-nums">
          {t("project_stat_3_val")}
        </span>
        <span className="text-xs text-slate-400 mt-1">
          {t("project_stat_3_lbl")}
        </span>
      </div>

      <div className="flex flex-col items-center p-3 sm:p-4">
        <HeartHandshake className="w-5 h-5 text-gold-400 mb-2" />
        <span className="font-display font-bold text-lg sm:text-2xl text-white tabular-nums">
          {t("project_stat_4_val")}
        </span>
        <span className="text-xs text-slate-400 mt-1">
          {t("project_stat_4_lbl")}
        </span>
      </div>
    </div>
  );
};
