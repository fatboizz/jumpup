"use client";

import React, { useState, useId } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationDictionary } from "@/data/translations";
import { COLLAPSED_BIO_LINES } from "./motionConstants";

interface LeaderBioProps {
  bioKey: keyof TranslationDictionary;
  leaderId: string;
  prefersReducedMotion: boolean;
}

export const LeaderBio: React.FC<LeaderBioProps> = ({
  bioKey,
  leaderId,
  prefersReducedMotion,
}) => {
  const { t, language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();
  const isJapanese = language === "jp";

  return (
    <div className="relative pt-2">
      {/* 
        Smooth Expandable Grid Transition (0fr → 1fr)
        Avoids layout jumps and animates purely via CSS Grid rows
      */}
      <div
        id={contentId}
        style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          transition: prefersReducedMotion
            ? "none"
            : "grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="overflow-hidden"
      >
        <div className="min-h-0">
          <p
            className={`text-sm sm:text-base text-slate-700 font-normal text-left max-w-[62ch] ${
              isJapanese ? "leading-[1.85]" : "leading-relaxed"
            } ${!isExpanded ? `line-clamp-${COLLAPSED_BIO_LINES}` : ""}`}
            style={{
              WebkitLineClamp: isExpanded ? "unset" : COLLAPSED_BIO_LINES,
              display: isExpanded ? "block" : "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: isExpanded ? "visible" : "hidden",
            }}
          >
            {t(bioKey)}
          </p>
        </div>
      </div>

      {/* Expand / Collapse Toggle Button */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        className="mt-3 inline-flex items-center space-x-1.5 py-2 text-xs sm:text-sm font-semibold text-navy-950 hover:text-gold-700 transition-colors cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        <span>
          {isExpanded ? t("bio_show_less") : t("bio_read_more")}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gold-600 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};
