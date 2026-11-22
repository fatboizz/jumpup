"use client";

import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projectTypes";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectSlideContent } from "./ProjectSlideContent";
import { INACTIVE_SCALE } from "./motionConstants";

interface ProjectSlideProps {
  project: Project;
  index: number;
  total: number;
  isActive: boolean;
  prefersReducedMotion: boolean;
  onSelect: (index: number) => void;
  onOpenViewer: (project: Project) => void;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = React.memo(
  ({
    project,
    index,
    total,
    isActive,
    prefersReducedMotion,
    onSelect,
    onOpenViewer,
  }) => {
    const { t } = useLanguage();
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(() => {
      if (isActive) {
        onOpenViewer(project);
      } else {
        onSelect(index);
      }
    }, [isActive, onOpenViewer, onSelect, project, index]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      },
      [handleClick]
    );

    return (
      <div
        ref={cardRef}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} / ${total}: ${t(project.titleKey)}`}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={{
          transform: isActive
            ? "scale(1)"
            : `scale(${prefersReducedMotion ? 1 : INACTIVE_SCALE})`,
          opacity: isActive ? 1 : prefersReducedMotion ? 0.7 : 0.55,
        }}
        className={`relative shrink-0 w-[84vw] sm:w-[72vw] lg:w-[clamp(560px,62vw,980px)] h-[clamp(460px,62svh,620px)] rounded-3xl overflow-hidden isolation-isolate select-none cursor-pointer transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          isActive
            ? "border-gold-500/40 shadow-elevated"
            : "border-white/10 hover:border-gold-500/30 hover:opacity-75"
        } group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-inset`}
      >
        {/* Parallax Container: 114% width, left -7% for generous depth margins */}
        <div className="absolute top-0 bottom-0 -left-[7%] w-[114%] h-full overflow-hidden bg-navy-950 pointer-events-none">
          <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <Image
              src={project.cover.src}
              alt={t(project.cover.altKey)}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 62vw, 84vw"
              quality={80}
              className="object-cover"
              style={{
                objectPosition: project.cover.objectPosition || "center",
              }}
              draggable={false}
            />
          </div>

          {/* Grade Layer 1: Navy Grade (Multiply) */}
          <div className="absolute inset-0 bg-navy-950/30 mix-blend-multiply" />

          {/* Grade Layer 2: Subtle Gold Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.06),transparent_70%)]" />

          {/* Grade Layer 3: Static Dark Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent" />

          {/* Grade Layer 4: Dark Veil for Inactive Card */}
          <div
            className={`absolute inset-0 bg-navy-950 transition-opacity duration-600 ${
              isActive ? "opacity-0" : "opacity-35"
            }`}
          />
        </div>

        {/* Content Block Anchored Bottom-Left */}
        <ProjectSlideContent
          project={project}
          isActive={isActive}
          prefersReducedMotion={prefersReducedMotion}
          onOpenViewer={onOpenViewer}
        />

        {/* Gold Accent Laser Line on Active Card */}
        {isActive && !prefersReducedMotion && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent origin-left z-20 pointer-events-none"
          />
        )}
      </div>
    );
  }
);

ProjectSlide.displayName = "ProjectSlide";
