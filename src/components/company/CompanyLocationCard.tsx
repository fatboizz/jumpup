"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { companyData } from "@/data/company";
import { MapEmbed } from "./MapEmbed";
import { CopyButton } from "./CopyButton";

interface CompanyLocationCardProps {
  onCopied: (text: string) => void;
}

export const CompanyLocationCard: React.FC<CompanyLocationCardProps> = ({
  onCopied,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-navy-950 border border-gold-500/20 rounded-3xl p-6 sm:p-8 text-ivory-100 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 space-y-6">
        {/* Header: Headquarters Location */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-gold-400 uppercase font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t("loc_badge")}</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory-100 tracking-tight mt-1.5">
            {t(companyData.buildingNameKey)}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t(companyData.shortAddressKey)}
          </p>
        </div>

        {/* Embedded Interactive Map */}
        <MapEmbed
          embedUrl={companyData.googleMapsEmbedUrl}
          directionsUrl={companyData.googleMapsDirectionsUrl}
          title={t(companyData.buildingNameKey)}
          directionsLabel={t("tbl_directions_btn")}
          fallbackPrompt={t("loc_map_fallback_prompt")}
        />

        {/* Location Highlights List */}
        <div className="space-y-2.5 pt-1">
          {companyData.locationHighlights.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-navy-900/60 border border-gold-500/10 text-xs text-slate-300"
              >
                <div className="w-6 h-6 rounded-md bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-sans leading-snug">
                  {t(feat.labelKey)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Direct Contact Footer */}
      <div className="relative z-10 mt-6 pt-5 border-t border-navy-800/80 space-y-3">
        {/* Phone */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors group"
          >
            <div className="w-6 h-6 rounded-md bg-navy-900 flex items-center justify-center text-slate-400 group-hover:text-gold-400 transition-colors">
              <Phone className="w-3 h-3" />
            </div>
            <span className="font-mono text-slate-200 group-hover:text-gold-300 transition-colors">
              {companyData.phoneDisplay}
            </span>
          </a>
          <CopyButton
            textToCopy={companyData.phoneDisplay}
            label={t("tbl_copy_btn")}
            copiedLabel={t("tbl_copied_btn")}
            onCopied={onCopied}
            className="border-navy-800 bg-navy-900 text-slate-300 hover:text-white"
          />
        </div>

        {/* Email */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <a
            href={`mailto:${companyData.email}`}
            className="flex items-center gap-2 text-slate-300 hover:text-gold-400 transition-colors group min-w-0"
          >
            <div className="w-6 h-6 rounded-md bg-navy-900 flex items-center justify-center text-slate-400 group-hover:text-gold-400 transition-colors flex-shrink-0">
              <Mail className="w-3 h-3" />
            </div>
            <span className="font-mono text-slate-200 group-hover:text-gold-300 transition-colors truncate">
              {companyData.email}
            </span>
          </a>
          <CopyButton
            textToCopy={companyData.email}
            label={t("tbl_copy_btn")}
            copiedLabel={t("tbl_copied_btn")}
            onCopied={onCopied}
            className="border-navy-800 bg-navy-900 text-slate-300 hover:text-white flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};
