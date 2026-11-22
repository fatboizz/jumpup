"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { floatingContactConfig } from "@/data/siteContent";
import { hasVisibleProjects } from "@/data/projects";

export const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a
              href="#top"
              className="inline-block group mb-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-0.5"
              aria-label="JUMPUP SERVICES CO.,LTD - Home"
            >
              <Image
                src="/logo-white.png"
                alt="JUMPUP SERVICES CO.,LTD"
                width={220}
                height={66}
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-5 font-light">
              {t("footer_desc")}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-slate-300">
              <span className="text-gold-400 font-bold">
                {t("footer_tax_id_lbl")}:
              </span>
              <span className="font-mono font-bold text-white">0402251691</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {t("footer_nav_title")}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  {t("nav_about")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("nav_services")}
                </a>
              </li>
              {hasVisibleProjects() && (
                <li>
                  <a
                    href="#projects"
                    className="hover:text-gold-400 transition-colors"
                  >
                    {t("nav_portfolio")}
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#process"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("nav_process")}
                </a>
              </li>
              <li>
                <a
                  href="#leadership"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("nav_leadership")}
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("nav_company")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-400 transition-colors">
                  {t("nav_faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Headquarters (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {t("footer_contact_title")}
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{t("tbl_addr_v")}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={floatingContactConfig.hotlineHref}
                  className="text-white hover:text-gold-400 font-bold transition-colors"
                >
                  {floatingContactConfig.hotline}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${floatingContactConfig.email}`}
                  className="text-white hover:text-gold-400 font-bold transition-colors"
                >
                  {floatingContactConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Legal, Compliance & Language Selector (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              {t("footer_legal_title")}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium mb-5">
              <li>
                <a
                  href="#company"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("footer_privacy_link")}
                </a>
              </li>
              <li>
                <a
                  href="#company"
                  className="hover:text-gold-400 transition-colors"
                >
                  {t("footer_terms_link")}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
                Language / 言語 / Ngôn ngữ
              </span>
              <div className="inline-flex rounded-lg bg-navy-900 border border-white/10 p-0.5">
                {(["en", "jp", "vn"] as Language[]).map((code) => {
                  const isActive = language === code;
                  const labelMap = { en: "EN", jp: "日本語", vn: "VN" };
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLanguage(code)}
                      className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${
                        isActive
                          ? "bg-gold-500 text-navy-950 font-extrabold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {labelMap[code]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} JUMPUP SERVICES CO.,LTD.{" "}
            {t("footer_rights")}
          </div>

          <div className="flex items-center space-x-3 text-slate-400">
            <span>Da Nang • Hanoi • Ho Chi Minh City</span>
            <span>•</span>
            <span className="text-gold-400/90 font-medium">
              {t("footer_tagline")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
