"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { floatingContactConfig } from "@/data/siteContent";
import { Phone, Mail, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingContact: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!floatingContactConfig.enabled) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end"
      role="region"
      aria-label={t("floating_contact_aria")}
    >
      {/* Expanded Quick Contact Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-contact-menu"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 p-3.5 bg-navy-950/95 backdrop-blur-2xl border border-gold-400/40 rounded-2xl shadow-elevated text-white space-y-2 min-w-[220px]"
          >
            <div className="px-2 py-1 text-xs font-bold text-gold-400 border-b border-white/10 uppercase tracking-wider flex items-center justify-between">
              <span>{t("contact_social_lbl")}</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-0.5"
                aria-label="Close contact menu"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Direct Phone Call */}
            <a
              href={floatingContactConfig.hotlineHref}
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-semibold transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-xs text-slate-400">
                  {t("floating_call")}
                </span>
                <span className="font-bold text-white text-xs">
                  {floatingContactConfig.hotline}
                </span>
              </div>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:contact@jumpup.services"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-semibold transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-xs text-slate-400">Email</span>
                <span className="font-bold text-white text-xs">
                  contact@jumpup.services
                </span>
              </div>
            </a>

            {/* Zalo */}
            <a
              href={floatingContactConfig.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-semibold transition-colors text-blue-300"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-300 flex items-center justify-center shrink-0 text-xs font-extrabold">
                Z
              </div>
              <span>{t("floating_zalo")}</span>
            </a>

            {/* LINE */}
            <a
              href={floatingContactConfig.lineHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-semibold transition-colors text-emerald-300"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-600/30 text-emerald-300 flex items-center justify-center shrink-0 text-xs font-extrabold">
                L
              </div>
              <span>{t("floating_line")}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={floatingContactConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-white/10 text-xs font-semibold transition-colors text-green-300"
            >
              <div className="w-7 h-7 rounded-lg bg-green-600/30 text-green-300 flex items-center justify-center shrink-0 text-xs font-extrabold">
                W
              </div>
              <span>{t("floating_whatsapp")}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating 56px Round Button with Ping Ring */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-expanded={isOpen}
        aria-controls="floating-contact-menu"
        aria-label={t("floating_contact_aria")}
        className="relative w-14 h-14 rounded-full bg-navy-900/95 hover:bg-navy-850 text-gold-400 border border-gold-400/40 shadow-elevated backdrop-blur-xl flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      >
        {/* Subtle Ping Ring */}
        <span className="absolute -inset-1 rounded-full border border-gold-400/30 animate-ping-slow pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-gold-400" />
        ) : (
          <Phone className="w-6 h-6 text-gold-400" />
        )}
      </motion.button>
    </div>
  );
};
