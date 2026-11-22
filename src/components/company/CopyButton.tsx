"use client";

import React, { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  copiedLabel?: string;
  onCopied?: (text: string) => void;
  className?: string;
  size?: "sm" | "md";
  showLabel?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label = "Copy",
  copiedLabel = "Copied!",
  onCopied,
  className = "",
  size = "sm",
  showLabel = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();

      let success = false;
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(textToCopy);
          success = true;
        } else {
          // Fallback for older browsers or restricted iframe environments
          const textArea = document.createElement("textarea");
          textArea.value = textToCopy;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          success = document.execCommand("copy");
          document.body.removeChild(textArea);
        }
      } catch (err) {
        console.error("Failed to copy:", err);
      }

      if (success) {
        setCopied(true);
        if (onCopied) {
          onCopied(textToCopy);
        }
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    },
    [textToCopy, onCopied]
  );

  const iconSize = size === "sm" ? 14 : 16;
  const paddingClass =
    size === "sm"
      ? "p-1.5 text-xs gap-1.5"
      : "px-2.5 py-1.5 text-xs font-medium gap-2";

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`${label}: ${textToCopy}`}
      className={`inline-flex items-center justify-center rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500/40 ${
        copied
          ? "border-emerald-500/50 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-navy-950"
      } ${paddingClass} ${className}`}
    >
      <div className="relative flex items-center justify-center w-3.5 h-3.5">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center text-emerald-600"
            >
              <Check size={iconSize} strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <Copy size={iconSize} strokeWidth={2} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="font-sans select-none">
          {copied ? copiedLabel : label}
        </span>
      )}

      {/* Screen reader live notification */}
      <span className="sr-only" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
};
