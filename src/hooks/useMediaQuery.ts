"use client";

import { useState, useEffect } from "react";

/**
 * useMediaQuery hook
 * Safely evaluates media queries on the client side with zero SSR hydration mismatch.
 * Before mounting, returns defaultValue (false for desktop query so mobile/SSR is clean).
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState<boolean>(defaultValue);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  // Before mounting on the client, always return defaultValue to guarantee hydration match
  if (!mounted) {
    return defaultValue;
  }

  return matches;
}
