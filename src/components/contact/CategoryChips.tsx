"use client";

import React, { useRef, useCallback } from "react";
import { ContactCategory } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { CATEGORY_CHIPS } from "./contactConstants";

interface CategoryChipsProps {
  selectedCategory: ContactCategory;
  onSelectCategory: (cat: ContactCategory) => void;
  isHighlighted?: boolean;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  selectedCategory,
  onSelectCategory,
  isHighlighted = false,
}) => {
  const { t } = useLanguage();
  const chipRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let nextIndex = -1;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = (index + 1) % CATEGORY_CHIPS.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = (index - 1 + CATEGORY_CHIPS.length) % CATEGORY_CHIPS.length;
      }

      if (nextIndex !== -1) {
        const nextCat = CATEGORY_CHIPS[nextIndex].id;
        onSelectCategory(nextCat);
        chipRefs.current[nextIndex]?.focus();
      }
    },
    [onSelectCategory]
  );

  return (
    <div className="w-full">
      <div className="h-6 flex items-center justify-between mb-2">
        <label
          id="category-group-label"
          className="text-sm font-medium text-navy-900 truncate"
        >
          {t("form_cat_lbl")}
          <span className="text-rose-500 font-semibold ml-1 select-none" aria-hidden="true">
            *
          </span>
          <span className="sr-only">{t("form_required_sr")}</span>
        </label>
      </div>

      <div
        role="radiogroup"
        aria-labelledby="category-group-label"
        className={`flex flex-wrap gap-2 p-1 rounded-2xl transition-all duration-300 ${
          isHighlighted ? "ring-2 ring-gold-400 bg-gold-50/30" : ""
        }`}
      >
        {CATEGORY_CHIPS.map((chip, idx) => {
          const isSelected = selectedCategory === chip.id;
          const Icon = chip.icon;

          return (
            <button
              key={chip.id}
              ref={(el) => {
                chipRefs.current[idx] = el;
              }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelectCategory(chip.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
                isSelected
                  ? "bg-navy-950 text-gold-300 border-gold-400 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:border-gold-500/40 hover:bg-gold-500/5 hover:text-navy-950"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                  isSelected ? "text-gold-400" : "text-slate-400"
                }`}
              />
              <span className="truncate">{t(chip.titleKey)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
