"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectViewerInfo } from "./ProjectViewerInfo";

interface ProjectViewerProps {
  project: Project | null;
  onClose: () => void;
  onNavigatePrev: () => void;
  onNavigateNext: () => void;
}

export const ProjectViewer: React.FC<ProjectViewerProps> = ({
  project,
  onClose,
  onNavigatePrev,
  onNavigateNext,
}) => {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Lock body scroll with scrollbar gutter compensation (CLS = 0)
  useBodyScrollLock(!!project);

  // Manage focus trap & restore
  useEffect(() => {
    if (project) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      closeBtnRef.current?.focus();
    } else if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    }
  }, [project]);

  // Handle keyboard events (Escape to close, Tab to trap focus)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [project, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-viewer-title"
        aria-describedby="project-viewer-summary"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-6xl bg-navy-900 border-0 sm:border sm:border-gold-500/25 sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10"
        >
          {/* Mobile Drag / Close Header Bar */}
          <div className="flex sm:hidden items-center justify-between px-4 py-3 border-b border-white/10 bg-navy-950/80">
            <span className="text-xs font-semibold text-gold-400">
              {t(`project_filter_${project.category}` as any)}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t("project_close")}
              className="p-1.5 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Column: Interactive Image Gallery */}
          <div className="w-full lg:w-[54%] p-4 sm:p-6 flex flex-col bg-navy-950/60 border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
            <ProjectGallery
              images={project.gallery}
              layoutId={`project-cover-${project.id}`}
              projectTitle={t(project.titleKey)}
            />
          </div>

          {/* Right Column: Case Study Details & Action Panel */}
          <ProjectViewerInfo
            project={project}
            onClose={onClose}
            onNavigatePrev={onNavigatePrev}
            onNavigateNext={onNavigateNext}
            closeBtnRef={closeBtnRef}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectViewer;
