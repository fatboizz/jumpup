"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

interface UseHeroAutoplayProps {
  totalSlides: number;
  autoplayDuration?: number; // default: 7000ms
  isInView?: boolean;
}

export function useHeroAutoplay({
  totalSlides,
  autoplayDuration = 7000,
  isInView = true,
}: UseHeroAutoplayProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  // Derived autoplay condition
  const isReduced = Boolean(prefersReducedMotion);
  const shouldPlay =
    !isPausedByUser &&
    !isHovering &&
    !isFocused &&
    isDocumentVisible &&
    isInView &&
    !isReduced;

  // Track page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Slide navigation callbacks
  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex((prev) => {
      setDirection(index >= prev ? 1 : -1);
      return index;
    });
  }, []);

  const togglePlay = useCallback(() => {
    setIsPausedByUser((prev) => !prev);
  }, []);

  // Autoplay timer execution
  useEffect(() => {
    if (!shouldPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoplayDuration);

    return () => clearInterval(timer);
  }, [shouldPlay, autoplayDuration, nextSlide]);

  return {
    activeIndex,
    direction,
    shouldPlay,
    isPaused: isPausedByUser || isReduced,
    isHovering,
    isFocused,
    prefersReducedMotion: isReduced,
    nextSlide,
    prevSlide,
    goToSlide,
    togglePlay,
    setIsHovering,
    setIsFocused,
  };
}
