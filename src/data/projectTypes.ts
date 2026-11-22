import { TranslationDictionary } from "./translations";

export type ProjectCategory = "event" | "market" | "realestate" | "animation";

export interface ProjectCover {
  src: string;
  altKey: keyof TranslationDictionary;
  objectPosition?: string;
  blurDataURL?: string;
}

export interface ProjectGalleryImage {
  src: string;
  altKey: keyof TranslationDictionary;
}

export interface ProjectStat {
  valueKey: keyof TranslationDictionary;
  labelKey: keyof TranslationDictionary;
}

export type ProjectScale = ProjectStat;

export interface Project {
  id: string; // ASCII slug for deep linking #project-<id>
  category: ProjectCategory;
  featured?: boolean;
  cover: ProjectCover;
  gallery: ProjectGalleryImage[];
  titleKey: keyof TranslationDictionary;
  locationKey: keyof TranslationDictionary;
  summaryKey: keyof TranslationDictionary;
  year: number;
  highlightStat?: ProjectStat;
  scale?: ProjectStat;
  venueKey?: keyof TranslationDictionary;
  scopeKeys: (keyof TranslationDictionary)[];
  resultKeys?: (keyof TranslationDictionary)[];
  clientDisplay: "named" | "anonymized";
  clientKey?: keyof TranslationDictionary;
  isPlaceholder?: boolean; // In production: hide placeholder cards if STRICT_PROD is active
}
