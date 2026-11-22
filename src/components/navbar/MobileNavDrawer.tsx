"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/data/translations";

export interface NavLinkItem {
  href: string;
  label: string;
  id: string;
}

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  contactLabel: string;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  navLinks,
  language,
  onLanguageChange,
  contactLabel,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Click outside drawer to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="xl:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm -z-10"
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <motion.div
            ref={drawerRef}
            id="mobile-navigation-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="xl:hidden bg-navy-950/98 border-t border-white/10 px-5 pt-4 pb-6 space-y-3 backdrop-blur-2xl shadow-elevated max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {/* Mobile Language Switcher at Top of Drawer (QA-006: min 44px touch target & aria-pressed) */}
            <div className="pb-3 mb-1 border-b border-white/10">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2 px-1">
                Language / 言語 / Ngôn ngữ
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(["en", "jp", "vn"] as Language[]).map((code) => {
                  const isActive = language === code;
                  const labelMap: Record<Language, string> = {
                    en: "English",
                    jp: "日本語",
                    vn: "Tiếng Việt",
                  };
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        onLanguageChange(code);
                        onClose();
                      }}
                      aria-pressed={isActive}
                      className={`min-h-[44px] flex items-center justify-center px-3 py-2 text-xs font-bold rounded-xl transition-all ${
                        isActive
                          ? "bg-gold-500 text-navy-950 font-extrabold shadow-gold-glow"
                          : "bg-navy-900/90 text-slate-300 hover:text-white border border-white/10"
                      }`}
                    >
                      {labelMap[code]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Consultation CTA */}
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full px-4 py-3.5 rounded-xl text-sm font-bold text-center bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 shadow-gold-glow mt-4 btn-sheen whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              {contactLabel}
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
