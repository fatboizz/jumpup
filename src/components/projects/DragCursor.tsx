"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CURSOR_SPRING } from "./motionConstants";

interface DragCursorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isDragging: boolean;
  prefersReducedMotion: boolean;
}

export const DragCursor: React.FC<DragCursorProps> = ({
  containerRef,
  isDragging,
  prefersReducedMotion,
}) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractiveHover, setIsInteractiveHover] = useState(false);

  // Mouse coordinates via MotionValues (zero React re-renders on move!)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, CURSOR_SPRING);
  const springY = useSpring(mouseY, CURSOR_SPRING);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") return;

    // Check for pointer precision
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouseX.set(x);
      mouseY.set(y);

      // Check if mouse is over interactive target
      const target = e.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest("button, a, input, select, textarea, [role='button']")
      );
      setIsInteractiveHover(interactive);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsInteractiveHover(false);
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef, mouseX, mouseY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  const scale = isVisible && !isInteractiveHover ? (isDragging ? 0.78 : 1) : 0;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale,
        opacity: isVisible && !isInteractiveHover ? 1 : 0,
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`absolute top-0 left-0 pointer-events-none z-30 flex items-center justify-center rounded-full border transition-colors duration-200 ${
        isDragging
          ? "w-14 h-14 border-gold-400 bg-gold-500/25 text-white shadow-gold-glow"
          : "w-18 h-18 border-gold-400/70 bg-navy-950/80 text-gold-300 backdrop-blur-sm"
      }`}
    >
      <span className="font-display font-medium text-xs tracking-widest uppercase select-none">
        {t("project_drag_cursor")}
      </span>
    </motion.div>
  );
};
