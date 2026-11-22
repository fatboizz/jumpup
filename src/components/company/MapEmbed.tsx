"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, Navigation, ExternalLink, Loader2 } from "lucide-react";

interface MapEmbedProps {
  embedUrl: string;
  directionsUrl: string;
  title: string;
  directionsLabel: string;
  fallbackPrompt: string;
}

export const MapEmbed: React.FC<MapEmbedProps> = ({
  embedUrl,
  directionsUrl,
  title,
  directionsLabel,
  fallbackPrompt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Phase 3: Lazy load map iframe only when approaching viewport (rootMargin: 300px)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-navy-900 border border-gold-500/20 group shadow-inner"
    >
      {/* Loading Skeleton */}
      {shouldLoad && !isLoaded && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-navy-900/90 backdrop-blur-sm text-slate-400">
          <Loader2 className="w-6 h-6 animate-spin text-gold-400 mb-2" />
          <span className="text-xs font-sans tracking-wide">
            Loading Map...
          </span>
        </div>
      )}

      {/* Fallback state if embed cannot load */}
      {hasError ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center bg-navy-900/95 text-slate-300">
          <MapPin className="w-8 h-8 text-gold-400 mb-2" />
          <p className="text-xs text-slate-400 mb-4 max-w-xs">
            {fallbackPrompt}
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-500 text-navy-950 font-medium text-xs hover:bg-gold-400 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>{directionsLabel}</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      ) : (
        <>
          {/* Iframe */}
          {shouldLoad && (
            <iframe
              src={embedUrl}
              title={title}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`w-full h-full transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Tone softening overlay: blends harsh map whites into high-end corporate navy palette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-navy-950/20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-10"
          />

          {/* Dedicated Get Directions pill */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950/90 hover:bg-gold-500 text-ivory-100 hover:text-navy-950 border border-gold-500/30 text-xs font-medium shadow-lg backdrop-blur-md transition-all duration-200"
          >
            <Navigation className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950" />
            <span>{directionsLabel}</span>
            <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
          </a>
        </>
      )}
    </div>
  );
};
