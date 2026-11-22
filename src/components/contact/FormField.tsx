"use client";

import React from "react";
import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  requiredText?: string;
  optionalText?: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  required = false,
  requiredText = "(required)",
  optionalText,
  error,
  helper,
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Aligned single-line label header */}
      <div className="h-6 flex items-center justify-between mb-1.5">
        <label
          htmlFor={id}
          className="text-sm font-medium text-navy-900 truncate flex items-center"
        >
          <span>{label}</span>
          {required ? (
            <>
              <span
                className="text-rose-500 font-semibold ml-1 select-none"
                aria-hidden="true"
              >
                *
              </span>
              <span className="sr-only">{requiredText}</span>
            </>
          ) : null}
        </label>

        {!required && optionalText && (
          <span className="text-xs text-slate-400 font-normal select-none flex-shrink-0 ml-2">
            {optionalText}
          </span>
        )}
      </div>

      {/* Input slot */}
      <div className="relative">{children}</div>

      {/* Reserved min-height slot to eliminate CLS when error appears */}
      <div className="min-h-[20px] mt-1 flex items-center">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              key="err"
              id={`${id}-error`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-xs text-rose-600 font-medium flex items-center gap-1 leading-tight"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{error}</span>
            </motion.p>
          ) : helper ? (
            <p id={`${id}-helper`} className="text-xs text-slate-400 leading-tight">
              {helper}
            </p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
