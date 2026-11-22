"use client";

import React from "react";
import { Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({
  id,
  checked,
  onChange,
  error,
}) => {
  const { t } = useLanguage();

  return (
    <div className="pt-1">
      <label
        htmlFor={id}
        className="flex items-start gap-3 cursor-pointer select-none group min-h-[44px] py-1"
      >
        <div className="relative flex items-center justify-center flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            id={id}
            name={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            className="sr-only peer"
          />
          <div className="w-5 h-5 rounded-md border border-slate-300 bg-white peer-checked:bg-navy-950 peer-checked:border-gold-500 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500/50 flex items-center justify-center transition-all duration-150 group-hover:border-slate-400">
            {checked && <Check className="w-3.5 h-3.5 text-gold-400 stroke-[3]" />}
          </div>
        </div>

        <div className="text-xs text-slate-600 leading-relaxed font-sans pt-0.5">
          <span>{t("form_privacy_consent")} </span>
          <a
            href="#company"
            onClick={(e) => {
              // Smooth scroll to company section if already on page
              const target = document.getElementById("company");
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-navy-900 font-semibold underline decoration-slate-300 hover:decoration-gold-500 hover:text-gold-700 transition-colors"
          >
            {t("form_privacy_link")}
          </a>
          <span className="text-rose-500 font-semibold ml-1" aria-hidden="true">
            *
          </span>
          <span className="sr-only">{t("form_required_sr")}</span>
        </div>
      </label>

      {/* Inline error for consent */}
      <div className="min-h-[18px] ml-8">
        {error && (
          <p
            id={`${id}-error`}
            className="text-xs text-rose-600 font-medium flex items-center gap-1 leading-tight"
            role="alert"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{error}</span>
          </p>
        )}
      </div>
    </div>
  );
};
