"use client";

import React, { memo } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { companyData } from "@/data/company";
import { CopyButton } from "@/components/company/CopyButton";

export const ContactInfoCard: React.FC = memo(() => {
  const { t } = useLanguage();

  return (
    <div className="bg-navy-950 rounded-3xl border border-gold-500/20 p-8 xl:p-10 text-ivory-100 flex flex-col justify-between h-full relative overflow-hidden shadow-xl">
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 space-y-7">
        {/* Header: Executive Identity */}
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-gold-300 uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>{t("contact_info_title")}</span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white tracking-tight whitespace-nowrap">
            {companyData.legalName}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed font-sans mt-2.5">
            {t("contact_info_desc")}
          </p>
        </div>

        {/* 4 Essential Contact Rows */}
        <div className="space-y-4 pt-2">
          {/* 1. Phone */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-sans">
                  {t("contact_hotline_lbl")}
                </span>
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="font-mono text-sm sm:text-base font-semibold text-white hover:text-gold-300 transition-colors"
                >
                  {companyData.phoneDisplay}
                </a>
              </div>
            </div>
            <CopyButton
              textToCopy={companyData.phoneDisplay}
              label={t("tbl_copy_btn")}
              copiedLabel={t("tbl_copied_btn")}
              className="border-white/10 bg-white/5 text-slate-300 hover:text-white"
            />
          </div>

          {/* 2. Email */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 block font-sans">
                  {t("contact_email_lbl")}
                </span>
                <a
                  href={`mailto:${companyData.email}`}
                  className="font-mono text-xs sm:text-sm font-semibold text-white hover:text-gold-300 transition-colors truncate block"
                >
                  {companyData.email}
                </a>
              </div>
            </div>
            <CopyButton
              textToCopy={companyData.email}
              label={t("tbl_copy_btn")}
              copiedLabel={t("tbl_copied_btn")}
              className="border-white/10 bg-white/5 text-slate-300 hover:text-white flex-shrink-0"
            />
          </div>

          {/* 3. Address with Maps link */}
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs text-slate-400 block font-sans mb-0.5">
                {t("contact_addr_lbl")}
              </span>
              <a
                href={companyData.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-slate-200 hover:text-gold-300 leading-relaxed transition-colors inline-flex items-baseline gap-1"
              >
                <span>{t(companyData.addressKey)}</span>
                <ExternalLink className="w-3 h-3 text-gold-400 flex-shrink-0 inline ml-0.5" />
                <span className="sr-only">{t("sr_opens_new_tab")}</span>
              </a>
            </div>
          </div>

          {/* 4. Business Hours */}
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-400 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-400 block font-sans">
                {t("contact_hours_lbl")}
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium font-sans">
                {t("contact_hours_val")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Messaging Channels (Unified Ghost Buttons) */}
      <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3 font-sans">
          {t("contact_social_lbl")}
        </span>

        <div className="flex flex-wrap gap-2.5">
          {companyData.chatChannels
            .filter((ch) => ch.isConfigured && ch.href)
            .map((channel) => (
              <a
                key={channel.id}
                href={channel.href!}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-xl border border-white/20 bg-white/5 hover:border-gold-400 hover:bg-gold-500/10 text-ivory-100 text-xs font-medium inline-flex items-center gap-2 transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span>{channel.name}</span>
                <span className="sr-only">{t("sr_opens_new_tab")}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
});

ContactInfoCard.displayName = "ContactInfoCard";
