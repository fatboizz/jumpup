"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, MapPin, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { companyData } from "@/data/company";
import { CopyButton } from "./CopyButton";

interface CompanyInfoCardProps {
  onCopied: (text: string) => void;
}

export const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ onCopied }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 xl:p-10 shadow-sm flex flex-col justify-between h-full">
      {/* Top: Corporate Names & Verified Entity Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-navy-900 text-xs font-semibold tracking-wider uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              <span>{t("comp_eyebrow")}</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              {companyData.legalName}
            </h3>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              {companyData.vnName}
            </p>
          </div>
        </div>

        {/* Structured Corporate Fact Sheet DL */}
        <dl className="mt-6 divide-y divide-slate-100 text-sm">
          {/* Tax Code */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
            <dt className="sm:col-span-4 text-slate-500 font-medium">
              {t("tbl_tax_k")}
            </dt>
            <dd className="sm:col-span-8 flex items-center justify-between gap-3">
              <span className="font-mono font-semibold text-navy-950 tracking-wider text-base">
                {companyData.taxCode}
              </span>
              <CopyButton
                textToCopy={companyData.taxCode}
                label={t("tbl_copy_btn")}
                copiedLabel={t("tbl_copied_btn")}
                onCopied={onCopied}
                showLabel={true}
              />
            </dd>
          </div>

          {/* Headquarters Address */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start">
            <dt className="sm:col-span-4 text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{t("tbl_addr_k")}</span>
            </dt>
            <dd className="sm:col-span-8 text-slate-700 leading-relaxed">
              {t(companyData.addressKey)}
            </dd>
          </div>

          {/* Leadership Duo */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start">
            <dt className="sm:col-span-4 text-slate-500 font-medium flex items-center gap-1.5 pt-0.5">
              <Users className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{t("tbl_lead_k")}</span>
            </dt>
            <dd className="sm:col-span-8 space-y-2">
              <div className="flex flex-col gap-1.5">
                {companyData.executives.map((exec, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-baseline gap-x-2 text-slate-800"
                  >
                    <span className="text-xs uppercase font-medium tracking-wider text-slate-400">
                      {t(exec.roleKey)}:
                    </span>
                    <span className="font-semibold text-navy-950">
                      {t(exec.nameKey)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-1">
                <Link
                  href="#leadership"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold-600 hover:text-gold-700 hover:underline transition-colors"
                >
                  <span>{t("tbl_view_leadership")}</span>
                </Link>
              </div>
            </dd>
          </div>

          {/* Business Activities Grid */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start">
            <dt className="sm:col-span-4 text-slate-500 font-medium flex items-center gap-1.5 pt-1">
              <Briefcase className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{t("tbl_biz_k")}</span>
            </dt>
            <dd className="sm:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {companyData.activities.map((act) => {
                  const Icon = act.icon;
                  return (
                    <Link
                      key={act.id}
                      href={act.hash}
                      className="group flex items-center justify-between p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-gold-500/5 hover:border-gold-500/40 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <div className="w-7 h-7 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0 text-gold-400 group-hover:scale-105 transition-transform">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-slate-800 group-hover:text-navy-950 truncate">
                          {t(act.titleKey)}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-600 transition-colors flex-shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </dd>
          </div>
        </dl>
      </div>

      {/* Bottom Legal Note */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Registered in Vietnam</span>
        <span className="font-mono">#0402251691</span>
      </div>
    </div>
  );
};
