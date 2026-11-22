"use client";

import React, { createContext, useContext, useCallback } from "react";
import { ContactCategory } from "@/data/services";

interface ContactIntentContextType {
  dispatchIntent: (
    category: ContactCategory,
    shouldScroll?: boolean,
    message?: string
  ) => void;
}

const ContactIntentContext = createContext<ContactIntentContextType | undefined>(
  undefined
);

export const ContactIntentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatchIntent = useCallback(
    (category: ContactCategory, shouldScroll = true, message?: string) => {
      if (typeof window === "undefined") return;

      // 1. Dispatch custom events for broad listeners with optional message pre-fill
      window.dispatchEvent(
        new CustomEvent("jumpup_select_category", {
          detail: { category, message },
        })
      );
      window.dispatchEvent(
        new CustomEvent("jumpup:contact-intent", {
          detail: { category, message },
        })
      );

      // 2. Smoothly scroll to contact section
      if (shouldScroll) {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    []
  );

  return (
    <ContactIntentContext.Provider value={{ dispatchIntent }}>
      {children}
    </ContactIntentContext.Provider>
  );
};

export function useContactIntent(): ContactIntentContextType {
  const context = useContext(ContactIntentContext);
  if (!context) {
    // Graceful fallback when outside provider
    return {
      dispatchIntent: (
        category: ContactCategory,
        shouldScroll = true,
        message?: string
      ) => {
        if (typeof window === "undefined") return;
        window.dispatchEvent(
          new CustomEvent("jumpup_select_category", {
            detail: { category, message },
          })
        );
        window.dispatchEvent(
          new CustomEvent("jumpup:contact-intent", {
            detail: { category, message },
          })
        );
        if (shouldScroll) {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }
      },
    };
  }
  return context;
}
