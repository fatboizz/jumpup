"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LeaderItem } from "@/data/leadership";
import { useLanguage } from "@/context/LanguageContext";
import { LeaderBio } from "./LeaderBio";
import { PHOTO_HOVER_SCALE } from "./motionConstants";

interface LeaderCardProps {
  leader: LeaderItem;
  prefersReducedMotion: boolean;
}

export const LeaderCard: React.FC<LeaderCardProps> = React.memo(
  ({ leader, prefersReducedMotion }) => {
    const { t, language } = useLanguage();
    const [imageError, setImageError] = useState(false);
    const isJapanese = language === "jp";

    return (
      <article
        aria-labelledby={`leader-name-${leader.id}`}
        className="h-full rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 xl:p-10 shadow-sm hover:shadow-card hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
      >
        <div>
          {/* ──────────────────────────────────────────────────────────────── */}
          {/* ROW 1: EXECUTIVE PORTRAIT & IDENTITY COLUMN                      */}
          {/* ──────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-7">
            {/* Executive Portrait Container (Square 1:1, as original) */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-navy-950 shrink-0 shadow-card ring-2 ring-gold-500/40 relative overflow-hidden flex items-center justify-center transition-all duration-300">
              {!imageError ? (
                <Image
                  src={leader.photo}
                  alt={`${t(leader.nameKey)} - ${t(leader.roleKey)}`}
                  fill
                  sizes="(min-width: 640px) 128px, 112px"
                  quality={90}
                  className={`object-cover object-top transition-transform duration-700 ease-out ${
                    prefersReducedMotion
                      ? ""
                      : `group-hover:scale-[${PHOTO_HOVER_SCALE}]`
                  }`}
                  onError={() => setImageError(true)}
                />
              ) : (
                /* Elegant Monogram Fallback */
                <div className="w-full h-full flex items-center justify-center bg-navy-950 text-gold-400">
                  <span className="font-display font-bold text-2xl sm:text-3xl tracking-wider">
                    {leader.fallbackInitials}
                  </span>
                </div>
              )}
            </div>

            {/* Identity Details Column */}
            <div className="flex-1 text-center sm:text-left pt-1">
              {/* Short Gold Accent Line */}
              <div className="w-10 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 mb-3 rounded-full hidden sm:block" />

              {/* Executive Title (Capitalize/Lower, gold-700 for high contrast >= 4.5:1) */}
              <span className="text-xs sm:text-sm font-medium text-gold-700 tracking-wide block mb-1">
                {t(leader.roleKey)}
              </span>

              {/* Executive Name (Primary visual focus, semibold, no negative tracking) */}
              <h3
                id={`leader-name-${leader.id}`}
                className={`font-display font-semibold text-2xl sm:text-3xl text-navy-950 mb-2 leading-tight ${
                  isJapanese ? "tracking-normal" : "tracking-tight"
                }`}
              >
                {t(leader.nameKey)}
              </h3>

              {/* Credentials Sub-row */}
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {t(leader.credKey)}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 my-6" />

          {/* ──────────────────────────────────────────────────────────────── */}
          {/* ROW 2: DISTINCTIVE EXECUTIVE HIGHLIGHTS (MAX 3)                  */}
          {/* ──────────────────────────────────────────────────────────────── */}
          <ul className="space-y-3.5 list-none m-0 p-0">
            {leader.highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li key={idx} className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[14px] sm:text-[15px] font-medium text-navy-900 leading-snug">
                    {t(item.labelKey)}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="border-t border-slate-100 my-6" />
        </div>

        {/* ──────────────────────────────────────────────────────────────── */}
        {/* ROW 3: DETAILED BIOGRAPHY WITH EXPAND / COLLAPSE                  */}
        {/* ──────────────────────────────────────────────────────────────── */}
        <LeaderBio
          bioKey={leader.bioKey}
          leaderId={leader.id}
          prefersReducedMotion={prefersReducedMotion}
        />
      </article>
    );
  }
);

LeaderCard.displayName = "LeaderCard";
