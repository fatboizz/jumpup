"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  Language,
  TranslationDictionary,
  translations,
} from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDictionary) => string;
  dict: TranslationDictionary;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LANG_ATTR_MAP: Record<Language, string> = {
  en: "en",
  jp: "ja",
  vn: "vi",
};

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    // 1. URL search param: ?lang=en|jp|vn
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang")?.toLowerCase();
    if (urlLang === "en" || urlLang === "jp" || urlLang === "vn") {
      return urlLang;
    }

    // 2. Cookie
    const cookieMatch = document.cookie.match(/(?:^|; )jumpup_lang=([^;]*)/);
    if (cookieMatch) {
      const cookieLang = decodeURIComponent(cookieMatch[1]).toLowerCase();
      if (cookieLang === "en" || cookieLang === "jp" || cookieLang === "vn") {
        return cookieLang;
      }
    }

    // 3. LocalStorage
    const stored = localStorage.getItem("jumpup_lang");
    if (stored === "en" || stored === "jp" || stored === "vn") {
      return stored;
    }

    // 4. Navigator language detection
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith("ja")) return "jp";
    if (navLang.startsWith("vi")) return "vn";
  } catch {
    // Fallback
  }
  return "en";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initLang = getInitialLanguage();
    setLanguageState(initLang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_ATTR_MAP[initLang];
    }
    setIsReady(true);
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("jumpup_lang", newLang);
      document.cookie = `jumpup_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_ATTR_MAP[newLang];
    }
    // Update URL query ?lang= without full reload, preserving hash anchors
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLang);
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  const currentDict = translations[language] || translations.en;

  const t = useCallback(
    (key: keyof TranslationDictionary): string => {
      return currentDict[key] || translations.en[key] || "";
    },
    [currentDict]
  );

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dict: currentDict,
        isReady,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
