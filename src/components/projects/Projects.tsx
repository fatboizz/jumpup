"use client";

import React, { useReducer, useEffect, useCallback, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getVisibleProjects, Project } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCarousel } from "./ProjectCarousel";
import { ProjectControls } from "./ProjectControls";
import { ProjectTrustStrip } from "./ProjectTrustStrip";
import { ProjectViewer } from "./ProjectViewer";

interface ProjectsState {
  activeIndex: number;
  direction: 1 | -1;
  hasInteracted: boolean;
}

type ProjectsAction =
  | { type: "SELECT"; index: number }
  | { type: "PREV"; total: number }
  | { type: "NEXT"; total: number };

function projectsReducer(
  state: ProjectsState,
  action: ProjectsAction
): ProjectsState {
  switch (action.type) {
    case "SELECT":
      return {
        activeIndex: action.index,
        direction: action.index >= state.activeIndex ? 1 : -1,
        hasInteracted: true,
      };
    case "PREV":
      return {
        activeIndex: Math.max(0, state.activeIndex - 1),
        direction: -1,
        hasInteracted: true,
      };
    case "NEXT":
      return {
        activeIndex: Math.min(action.total - 1, state.activeIndex + 1),
        direction: 1,
        hasInteracted: true,
      };
    default:
      return state;
  }
}

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const projects = getVisibleProjects();

  const [state, dispatch] = useReducer(projectsReducer, {
    activeIndex: 0,
    direction: 1,
    hasInteracted: false,
  });

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // A2: Synchronize deep link #project-<id> on mount
  useEffect(() => {
    if (typeof window === "undefined" || projects.length === 0) return;

    const handleHash = (initial = false) => {
      const hash = window.location.hash.toLowerCase();
      if (!hash) return;

      if (hash.startsWith("#project-")) {
        const slug = hash.replace("#project-", "");
        const targetIdx = projects.findIndex((p) => p.id === slug);
        if (targetIdx !== -1) {
          dispatch({ type: "SELECT", index: targetIdx });
          if (initial) {
            setActiveProject(projects[targetIdx]);
            requestAnimationFrame(() => {
              const el = document.getElementById("projects");
              if (el) {
                el.scrollIntoView({
                  behavior: prefersReducedMotion ? "auto" : "smooth",
                });
              }
            });
          }
        }
      } else if (hash === "#projects" && initial) {
        requestAnimationFrame(() => {
          const el = document.getElementById("projects");
          if (el) {
            el.scrollIntoView({
              behavior: prefersReducedMotion ? "auto" : "smooth",
            });
          }
        });
      }
    };

    handleHash(true);
    const onHashChange = () => handleHash(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [projects, prefersReducedMotion]);

  // Handle slide selection
  const handleSelect = useCallback(
    (index: number) => {
      dispatch({ type: "SELECT", index });
    },
    []
  );

  const handlePrev = useCallback(() => {
    dispatch({ type: "PREV", total: projects.length });
  }, [projects.length]);

  const handleNext = useCallback(() => {
    dispatch({ type: "NEXT", total: projects.length });
  }, [projects.length]);

  const handleOpenViewer = useCallback((project: Project) => {
    setActiveProject(project);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#project-${project.id}`);
    }
  }, []);

  const handleCloseViewer = useCallback(() => {
    setActiveProject(null);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", "#projects");
    }
  }, []);

  const handleNavigateViewer = useCallback(
    (dir: "prev" | "next") => {
      if (!activeProject || projects.length <= 1) return;
      const curIdx = projects.findIndex((p) => p.id === activeProject.id);
      const nextIdx =
        dir === "next"
          ? (curIdx + 1) % projects.length
          : (curIdx - 1 + projects.length) % projects.length;
      const nextP = projects[nextIdx];
      setActiveProject(nextP);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#project-${nextP.id}`);
      }
    },
    [activeProject, projects]
  );

  // If no projects exist in production, gracefully hide the section
  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[state.activeIndex] || projects[0];

  return (
    <section
      id="projects"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("project_carousel_aria")}
      className="py-20 sm:py-28 bg-navy-900 border-t border-white/10 relative overflow-hidden scroll-mt-24"
    >
      {/* Background Architectural Patterns & Ambient Glow */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-navy-700/20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Screen Reader Announcement for Accessibility (A6: ONLY after interaction) */}
      {state.hasInteracted && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          {`${t("project_slide_label")} ${state.activeIndex + 1} / ${
            projects.length
          }: ${t(currentProject.titleKey)}`}
        </div>
      )}

      {/* Centered Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow={t("project_eyebrow")}
          heading={t("project_heading")}
          subtitle={t("project_subtitle")}
          theme="dark"
        />
      </div>

      {/* Full-Bleed Cinematic Conveyor Carousel */}
      <ProjectCarousel
        projects={projects}
        activeIndex={state.activeIndex}
        prefersReducedMotion={prefersReducedMotion}
        onSelect={handleSelect}
        onOpenViewer={handleOpenViewer}
      />

      {/* Control Strip: Progress bar, odometer, and buttons */}
      <ProjectControls
        activeIndex={state.activeIndex}
        total={projects.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={handleSelect}
      />

      {/* Corporate Trust & Milestone Strip */}
      <ProjectTrustStrip />

      {/* Dynamic Detail Viewer Modal */}
      {activeProject && (
        <ProjectViewer
          project={activeProject}
          onClose={handleCloseViewer}
          onNavigatePrev={() => handleNavigateViewer("prev")}
          onNavigateNext={() => handleNavigateViewer("next")}
        />
      )}
    </section>
  );
};
