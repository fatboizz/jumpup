import { LucideIcon, Gamepad2, Handshake, Sparkles, Building, Users } from "lucide-react";
import { TranslationDictionary } from "./translations";

export interface LeaderHighlight {
  icon: LucideIcon;
  labelKey: keyof TranslationDictionary;
}

export interface LeaderItem {
  id: string;
  photo: string;
  fallbackInitials: string;
  nameKey: keyof TranslationDictionary;
  roleKey: keyof TranslationDictionary;
  credKey: keyof TranslationDictionary;
  bioKey: keyof TranslationDictionary;
  highlights: LeaderHighlight[];
}

export const leadershipData: LeaderItem[] = [
  {
    id: "hibi-ceo",
    photo: "/images/hibi-ceo.jpg",
    fallbackInitials: "YH",
    nameKey: "ceo_name",
    roleKey: "ceo_role",
    credKey: "ceo_credentials",
    bioKey: "ceo_bio",
    highlights: [
      {
        icon: Gamepad2,
        labelKey: "badge_konami",
      },
      {
        icon: Handshake,
        labelKey: "badge_meti",
      },
    ],
  },
  {
    id: "huyen-vp",
    photo: "/images/huyen-vp.jpg",
    fallbackInitials: "PH",
    nameKey: "vp_name",
    roleKey: "vp_role",
    credKey: "vp_credentials",
    bioKey: "vp_bio",
    highlights: [
      {
        icon: Sparkles,
        labelKey: "badge_mice",
      },
      {
        icon: Building,
        labelKey: "badge_development",
      },
      {
        icon: Users,
        labelKey: "badge_central_network",
      },
    ],
  },
];
