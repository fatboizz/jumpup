import { ContactCategory } from "@/data/services";
import { TranslationDictionary } from "@/data/translations";
import { Hotel, TrendingUp, Building, Film, HelpCircle, LucideIcon } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 3 TUNING KNOBS
// ─────────────────────────────────────────────────────────────────────────────
/** 1. Tỉ lệ chia cột Desktop (5 cột Thông tin / 7 cột Form liên hệ) */
export const DESKTOP_COL_RATIO = "col-span-12 lg:col-span-5 / col-span-12 lg:col-span-7";

/** 2. Độ dài tối đa tin nhắn yêu cầu dự án (khớp validate server zod) */
export const MAX_MESSAGE_CHARS = 2000;

/** 3. Thời gian timeout gọi API gửi yêu cầu (15 giây) */
export const FETCH_TIMEOUT_MS = 15000;

// ─────────────────────────────────────────────────────────────────────────────
// MOTION PARAMETERS (Aman / Nikkei Business standard)
// ─────────────────────────────────────────────────────────────────────────────
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const DUR = 0.7;
export const STAGGER = 0.08;

export const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR,
      ease: EASE_OUT,
    },
  },
};

export const CONTACT_ROWS_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export const CONTACT_ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASE_OUT,
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORY CHIP CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
export interface CategoryChipItem {
  id: ContactCategory;
  titleKey: keyof TranslationDictionary;
  icon: LucideIcon;
}

export const CATEGORY_CHIPS: CategoryChipItem[] = [
  { id: "event", titleKey: "chip_event", icon: Hotel },
  { id: "market", titleKey: "chip_market", icon: TrendingUp },
  { id: "realestate", titleKey: "chip_realestate", icon: Building },
  { id: "animation", titleKey: "chip_animation", icon: Film },
  { id: "other", titleKey: "chip_other", icon: HelpCircle },
];
