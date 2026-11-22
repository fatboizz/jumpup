"use client";

import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  heading,
  subtitle,
  centered = true,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } mb-12 sm:mb-16 ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold tracking-[0.22em] uppercase mb-2.5 ${
            isDark ? "text-gold-400" : "text-gold-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight sm:leading-snug ${
          isDark ? "text-white" : "text-navy-900"
        }`}
      >
        {heading}
      </h2>
      <div
        className={`gold-divider my-4 sm:my-5 ${
          centered ? "mx-auto" : "mr-auto"
        }`}
      />
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
