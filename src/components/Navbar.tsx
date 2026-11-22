"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { hasVisibleProjects } from "@/data/projects";
import { MobileNavDrawer } from "./navbar/MobileNavDrawer";

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Top scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track header shrink on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // High-performance IntersectionObserver for Scroll-Spy (zero reflow during scroll)
  useEffect(() => {
    const sectionIds = [
      "about",
      "services",
      "projects",
      "portfolio",
      "process",
      "leadership",
      "company",
      "faq",
      "contact",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.id;
          setActiveSection(currentId === "portfolio" ? "projects" : currentId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#about", label: t("nav_about"), id: "about" },
    { href: "#services", label: t("nav_services"), id: "services" },
    ...(hasVisibleProjects()
      ? [{ href: "#projects", label: t("nav_portfolio"), id: "projects" }]
      : []),
    { href: "#process", label: t("nav_process"), id: "process" },
    { href: "#leadership", label: t("nav_leadership"), id: "leadership" },
    { href: "#company", label: t("nav_company"), id: "company" },
    { href: "#faq", label: t("nav_faq"), id: "faq" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <>
      {/* Top Gold Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-300 z-[60] scroll-progress-bar shadow-gold-glow"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <header
        id="main-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-2xl border-b border-gold-500/20 shadow-elevated py-0"
            : "bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-1"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex justify-between items-center transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Brand Official Logo */}
            <a
              href="#top"
              className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
              aria-label="JUMPUP SERVICES CO.,LTD - Home"
            >
              <div className="relative flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo-white.png"
                  alt="JUMPUP SERVICES CO.,LTD"
                  width={220}
                  height={66}
                  priority
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="hidden 2xl:block border-l border-white/15 pl-3 leading-tight">
                <span className="block text-slate-200 text-xs tracking-wider uppercase font-medium">
                  Da Nang
                </span>
                <span className="block text-gold-400 text-xs tracking-wider uppercase font-semibold">
                  Vietnam
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden xl:flex items-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6"
              aria-label="Desktop Primary Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm uppercase tracking-wider font-semibold py-1.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded whitespace-nowrap ${
                      isActive
                        ? "text-gold-400 font-bold"
                        : "text-slate-300 hover:text-gold-400"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full shadow-gold-glow"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Language Switcher + Consultation CTA */}
            <div className="flex items-center space-x-2.5 sm:space-x-3.5">
              {/* Language Switcher Pill (QA-006: hidden on mobile < 640px to keep header spacious) */}
              <div
                className="hidden sm:inline-flex rounded-xl bg-navy-900/90 p-1 border border-white/15 shadow-inner"
                role="group"
                aria-label="Language Selector"
              >
                {(["en", "jp", "vn"] as Language[]).map((code) => {
                  const isActive = language === code;
                  const labelMap = { en: "EN", jp: "日本語", vn: "VN" };
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => handleLanguageChange(code)}
                      aria-pressed={isActive}
                      className={`relative z-10 px-2.5 sm:px-3 py-1 text-xs font-bold rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                        isActive
                          ? "text-navy-950 font-extrabold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-lang-pill"
                          className="absolute inset-0 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 rounded-lg shadow-sm -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      {labelMap[code]}
                    </button>
                  );
                })}
              </div>

              {/* Header Contact CTA Button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg hover:-translate-y-0.5 btn-sheen whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {t("nav_contact")}
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                ref={toggleBtnRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-200 hover:text-white hover:bg-navy-850 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gold-400" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer (QA-012: extracted to MobileNavDrawer.tsx) */}
        <MobileNavDrawer
          isOpen={mobileMenuOpen}
          onClose={() => {
            setMobileMenuOpen(false);
            toggleBtnRef.current?.focus();
          }}
          navLinks={navLinks}
          language={language}
          onLanguageChange={setLanguage}
          contactLabel={t("nav_contact")}
        />
      </header>
    </>
  );
};
