"use client";

import React from "react";
import {
  X,
  MapPin,
  Users,
  CheckCircle2,
  Trophy,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { useContactIntent } from "@/context/ContactIntentContext";

interface ProjectViewerInfoProps {
  project: Project;
  onClose: () => void;
  onNavigatePrev: () => void;
  onNavigateNext: () => void;
  closeBtnRef: React.RefObject<HTMLButtonElement | null>;
}

export const ProjectViewerInfo: React.FC<ProjectViewerInfoProps> = ({
  project,
  onClose,
  onNavigatePrev,
  onNavigateNext,
  closeBtnRef,
}) => {
  const { t } = useLanguage();
  const { dispatchIntent } = useContactIntent();

  const handleInquireSimilar = () => {
    const title = t(project.titleKey);
    const message = t("project_inquiry_template").replace("{title}", title);
    onClose();
    // Dispatch intent to select category & pre-fill message if empty, then scroll to #contact
    dispatchIntent(project.category, true, message);
  };

  return (
    <div className="w-full lg:w-[46%] flex flex-col justify-between overflow-y-auto scrollbar-thin p-5 sm:p-8 bg-navy-900">
      <div>
        {/* Desktop Header row */}
        <div className="hidden sm:flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/30">
              {t(`project_filter_${project.category}` as any)}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.year}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={t("project_close")}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Client Descriptor */}
        <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase mb-2">
          {t(project.clientKey || "project_client_lbl")}
        </p>

        {/* Project Title */}
        <h2
          id="project-viewer-title"
          className="font-display font-bold text-white text-xl sm:text-2xl lg:text-3xl leading-snug mb-4"
        >
          {t(project.titleKey)}
        </h2>

        {/* Location & Scale Details */}
        <div className="flex flex-wrap items-center gap-3 py-3 border-y border-white/10 text-xs sm:text-sm text-slate-300 mb-5">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{t(project.venueKey || project.locationKey)}</span>
          </span>
          {project.scale && (
            <span className="inline-flex items-center gap-1.5 text-gold-300 font-medium">
              <Users className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{t(project.scale.valueKey)}</span>
            </span>
          )}
        </div>

        {/* Executive Summary */}
        <p
          id="project-viewer-summary"
          className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6"
        >
          {t(project.summaryKey)}
        </p>

        {/* Scope of Execution */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
            {t("project_scope_heading")}
          </h3>
          <ul className="space-y-2">
            {project.scopeKeys.map((key, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Results / Outcomes */}
        {project.resultKeys && project.resultKeys.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-2.5 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-gold-400" />
              <span>{t("project_results_heading")}</span>
            </h3>
            <ul className="space-y-1.5">
              {project.resultKeys.map((key, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-200 flex items-start gap-2"
                >
                  <span className="text-gold-400 font-bold">•</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sticky Bottom Actions */}
      <div className="pt-4 border-t border-white/10 mt-4 space-y-3 sticky bottom-0 bg-navy-900 pb-2">
        <button
          type="button"
          onClick={handleInquireSimilar}
          className="w-full group relative overflow-hidden px-6 py-3.5 rounded-xl bg-gold-400 text-navy-950 font-bold text-xs sm:text-sm shadow-luxury-hover hover:bg-gold-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <span>{t("project_request_similar")}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Inter-project navigation */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
          <button
            type="button"
            onClick={onNavigatePrev}
            className="flex items-center gap-1 hover:text-gold-400 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{t("project_prev")}</span>
          </button>
          <button
            type="button"
            onClick={onNavigateNext}
            className="flex items-center gap-1 hover:text-gold-400 transition-colors cursor-pointer"
          >
            <span>{t("project_next")}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
