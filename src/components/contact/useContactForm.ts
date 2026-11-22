"use client";

import { useReducer, useEffect, useRef, useCallback } from "react";
import { ContactCategory } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import {
  ContactFormValues,
  validateContactForm,
  mapServerErrorCode,
} from "@/lib/contactValidation";
import { FETCH_TIMEOUT_MS } from "./contactConstants";
import {
  contactReducer,
  initialContactState,
} from "./contactReducer";

export function useContactForm() {
  const { t } = useLanguage();
  const [state, dispatch] = useReducer(contactReducer, initialContactState);
  const highlightTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Listen for cross-section Category Selection & Intent
  useEffect(() => {
    const handleIntent = (e: Event) => {
      const customEvent = e as CustomEvent<{
        category?: ContactCategory;
        message?: string;
      }>;
      if (customEvent.detail?.category) {
        dispatch({
          type: "SET_CATEGORY_FROM_INTENT",
          category: customEvent.detail.category,
          message: customEvent.detail.message,
        });

        if (highlightTimerRef.current) {
          clearTimeout(highlightTimerRef.current);
        }
        highlightTimerRef.current = setTimeout(() => {
          dispatch({ type: "CLEAR_CATEGORY_HIGHLIGHT" });
        }, 1200);
      }
    };

    window.addEventListener("jumpup_select_category", handleIntent);
    window.addEventListener("jumpup:contact-intent", handleIntent);

    return () => {
      window.removeEventListener("jumpup_select_category", handleIntent);
      window.removeEventListener("jumpup:contact-intent", handleIntent);
      if (highlightTimerRef.current) {
        clearTimeout(highlightTimerRef.current);
      }
    };
  }, []);

  // 2. Validate on blur
  const handleBlur = useCallback(
    (field: keyof ContactFormValues) => {
      dispatch({ type: "BLUR_FIELD", field });
      const currentErrors = validateContactForm(state.values, t);
      if (currentErrors[field]) {
        dispatch({
          type: "SET_ERRORS",
          errors: { ...state.errors, [field]: currentErrors[field] },
        });
      }
    },
    [state.values, state.errors, t]
  );

  const setField = useCallback(
    (field: keyof ContactFormValues, value: any) => {
      dispatch({ type: "SET_FIELD", field, value });
    },
    []
  );

  // 3. Submit handler
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const validationErrors = validateContactForm(state.values, t);
      if (Object.keys(validationErrors).length > 0) {
        dispatch({ type: "SET_ERRORS", errors: validationErrors });

        const firstErrorKey = Object.keys(validationErrors)[0];
        const el = document.getElementById(firstErrorKey);
        if (el) {
          el.focus();
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top >= 100 && rect.bottom <= window.innerHeight;
          if (!isVisible) {
            window.scrollBy({ top: rect.top - 120, behavior: "smooth" });
          }
        }
        return;
      }

      // Honeypot check: silent 200 drop for bots
      if (state.values.website_hp) {
        dispatch({ type: "SUBMIT_SUCCESS" });
        return;
      }

      dispatch({ type: "SUBMIT_START" });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: state.values.name,
            company: state.values.company,
            email: state.values.email,
            phone: state.values.phone,
            category: state.values.category,
            scale: state.values.scale,
            timeline: state.values.timeline,
            message: state.values.message,
            website_hp: state.values.website_hp,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        const data = await res.json();

        if (!res.ok) {
          dispatch({
            type: "SUBMIT_ERROR",
            errorCode: data.errorCode || "server_error",
          });
          return;
        }

        dispatch({ type: "SUBMIT_SUCCESS" });
      } catch (err: any) {
        clearTimeout(timeoutId);
        if (err.name === "AbortError") {
          dispatch({ type: "SUBMIT_ERROR", errorCode: "network" });
        } else {
          dispatch({ type: "SUBMIT_ERROR", errorCode: "server_error" });
        }
      }
    },
    [state.values, t]
  );

  const resetForm = useCallback(() => {
    dispatch({ type: "RESET_FORM" });
  }, []);

  return {
    state,
    setField,
    handleBlur,
    handleSubmit,
    resetForm,
    errorMessage: state.serverErrorCode
      ? t(mapServerErrorCode(state.serverErrorCode))
      : null,
  };
}
