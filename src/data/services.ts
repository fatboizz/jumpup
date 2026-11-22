import { LucideIcon, Hotel, TrendingUp, Building, Film } from "lucide-react";
import { TranslationDictionary } from "@/data/translations";

export type ContactCategory =
  | "event"
  | "market"
  | "realestate"
  | "animation"
  | "other";

export interface ServiceStat {
  value: string;
  labelKey: keyof TranslationDictionary;
}

export interface ServiceItem {
  id: "event" | "market" | "realestate" | "animation";
  number: string;
  icon: LucideIcon;
  image: string;
  imageAltKey: keyof TranslationDictionary;
  objectPosition?: string;
  titleKey: keyof TranslationDictionary;
  collapsedLabelKey: keyof TranslationDictionary;
  taglineKey: keyof TranslationDictionary;
  descKey: keyof TranslationDictionary;
  highlightKeys: (keyof TranslationDictionary)[];
  stats: ServiceStat[];
  ctaCategory: ContactCategory;
  hash: string;
}

export const servicesData: ServiceItem[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 01: CORPORATE EVENT MANAGEMENT & 5-STAR GALA
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "event",
    number: "01",
    icon: Hotel,
    // TODO: Thay bằng ảnh thực tế sự kiện của JumpUp: /images/services/event.jpg
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
    imageAltKey: "srv1_title",
    objectPosition: "center",
    titleKey: "srv1_title",
    collapsedLabelKey: "srv_collapsed_1",
    taglineKey: "srv1_headline",
    descKey: "srv1_overview",
    highlightKeys: ["srv1_why_1", "srv1_why_2", "srv1_why_3"],
    stats: [
      { value: "500+", labelKey: "stat_capacity_lbl" },
      { value: "100%", labelKey: "srv_stat_5star" },
    ],
    ctaCategory: "event",
    hash: "#services-event",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 02: MARKET RESEARCH & VIETNAM ENTRY (FDI, LICENSING, BACK-OFFICE)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "market",
    number: "02",
    icon: TrendingUp,
    // TODO: Thay bằng ảnh thực tế tư vấn đầu tư FDI: /images/services/market.jpg
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    imageAltKey: "srv2_title",
    objectPosition: "center",
    titleKey: "srv2_title",
    collapsedLabelKey: "srv_collapsed_2",
    taglineKey: "srv2_headline",
    descKey: "srv2_overview",
    highlightKeys: ["srv2_m1_t", "srv2_m2_t", "srv2_m3_t"],
    stats: [
      { value: "10+", labelKey: "stat_years_lbl" },
      { value: "3", labelKey: "stat_regions_lbl" },
    ],
    ctaCategory: "market",
    hash: "#services-market",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 03: COMMERCIAL REAL ESTATE & ASSET MANAGEMENT (TAKKEN-SHI)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "realestate",
    number: "03",
    icon: Building,
    // TODO: Thay bằng ảnh thực tế bất động sản: /images/services/realestate.jpg
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    imageAltKey: "srv3_title",
    objectPosition: "center",
    titleKey: "srv3_title",
    collapsedLabelKey: "srv_collapsed_3",
    taglineKey: "srv2_headline",
    descKey: "srv3_overview",
    highlightKeys: ["srv3_m1_t", "srv3_m2_t", "srv3_m3_t"],
    stats: [
      { value: "100%", labelKey: "srv_stat_compliance" },
      { value: "Takken", labelKey: "srv_stat_takkenshi" },
    ],
    ctaCategory: "realestate",
    hash: "#services-realestate",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 04: ANIMATION & CREATIVE OUTSOURCING
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "animation",
    number: "04",
    icon: Film,
    // TODO: Thay bằng ảnh thực tế studio hoạt hình: /images/services/animation.jpg
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
    imageAltKey: "srv4_title",
    objectPosition: "center",
    titleKey: "srv4_title",
    collapsedLabelKey: "srv_collapsed_4",
    taglineKey: "srv4_headline",
    descKey: "srv4_overview",
    highlightKeys: ["srv4_m1_t", "srv4_m2_t", "srv4_m3_t"],
    stats: [
      { value: "20+", labelKey: "srv_stat_game_gov" },
      { value: "100%", labelKey: "srv_stat_japan_studio" },
    ],
    ctaCategory: "animation",
    hash: "#services-animation",
  },
];
