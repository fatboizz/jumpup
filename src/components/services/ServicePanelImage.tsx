"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

interface ServicePanelImageProps {
  service: ServiceItem;
  isActive: boolean;
  priority?: boolean;
  prefersReducedMotion?: boolean;
  isTransitioning?: boolean;
}

export const ServicePanelImage: React.FC<ServicePanelImageProps> = ({
  service,
  isActive,
  priority = false,
  prefersReducedMotion = false,
  isTransitioning = false,
}) => {
  const { t } = useLanguage();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-navy-950">
      {/* 
        A3: LOCKED LAYER WIDTH - Width is fixed to the final expanded panel width (--panel-open-w),
        anchored horizontally to center (left: 50%, -translate-x-1/2).
        Panel clips with overflow:hidden so the image NEVER re-crops or distorts during transition!
      */}
      <div
        style={{ width: "var(--panel-open-w, 580px)" }}
        className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full ${
          isTransitioning ? "will-change-[transform,opacity]" : ""
        }`}
      >
        {/* Background Image Container with Ken Burns starting AFTER transition (A5) */}
        <div
          className={`relative w-full h-full ${
            isActive && !prefersReducedMotion
              ? "animate-kenburns-delayed"
              : "scale-100"
          }`}
        >
          <Image
            src={service.image}
            alt={t(service.imageAltKey)}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 60vw, 100vw"
            quality={80}
            className="object-cover"
            style={{ objectPosition: service.objectPosition || "center" }}
          />
        </div>

        {/* Layer 1: Navy Grade Overlay (Multiply) */}
        <div className="absolute inset-0 bg-navy-950/35 mix-blend-multiply pointer-events-none" />

        {/* Layer 2: Subtle Gold Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

        {/* 
          Layer 3 (A4): Pure Opacity Overlay replacing GPU-heavy filter: grayscale/brightness.
          Toggles from 0.55 (collapsed) to 0 (active). Hover on collapsed drops to 0.25.
        */}
        <div
          className={`absolute inset-0 bg-navy-950 transition-opacity duration-700 pointer-events-none ${
            isActive
              ? "opacity-0"
              : "opacity-55 group-hover:opacity-25"
          }`}
        />

        {/* Layer 4 (B6): Static bottom-left gradient layer present BEFORE text enters */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent pointer-events-none transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-40"
          }`}
        />

        {/* Top Gradient for Top Bar legibility */}
        <div
          className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent pointer-events-none transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-40"
          }`}
        />

        {/* Layer 5: Top 2px Champagne Gold Border on Active Panel */}
        {isActive && (
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-gold-400 via-gold-300 to-transparent z-10 pointer-events-none" />
        )}

        {/* Layer 6: Bottom Gold Accent Laser Sweep Line */}
        {isActive && !prefersReducedMotion && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left z-10 pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};
