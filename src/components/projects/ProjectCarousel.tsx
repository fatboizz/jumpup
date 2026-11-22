"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Project } from "@/data/projectTypes";
import { ProjectSlide } from "./ProjectSlide";
import { DragCursor } from "./DragCursor";

interface ProjectCarouselProps {
  projects: Project[];
  activeIndex: number;
  prefersReducedMotion: boolean;
  onSelect: (index: number) => void;
  onOpenViewer: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  activeIndex,
  prefersReducedMotion,
  onSelect,
  onOpenViewer,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  const hasDraggedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);
  const scrollDebounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamic inline padding so slide 0 and slide N-1 can sit in dead center
  const [paddingInline, setPaddingInline] = useState(24);

  const updatePadding = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackW = track.clientWidth;
    const firstSlide = track.querySelector<HTMLDivElement>("[role='group']");
    if (firstSlide) {
      const slideW = firstSlide.offsetWidth;
      const pad = Math.max(16, Math.floor((trackW - slideW) / 2));
      setPaddingInline(pad);
    }
  }, []);

  useEffect(() => {
    updatePadding();
    const ro = new ResizeObserver(updatePadding);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => ro.disconnect();
  }, [updatePadding, projects.length]);

  // Scroll active slide into center on change or initial mount
  const scrollToSlide = useCallback(
    (index: number, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;
      const slides = track.querySelectorAll<HTMLDivElement>("[role='group']");
      const target = slides[index];
      if (!target) return;

      const trackW = track.clientWidth;
      const targetLeft = target.offsetLeft;
      const targetW = target.offsetWidth;
      const scrollPos = targetLeft - (trackW - targetW) / 2;

      isProgrammaticScrollRef.current = true;
      track.scrollTo({
        left: scrollPos,
        behavior: smooth && !prefersReducedMotion ? "smooth" : "auto",
      });

      // Clear programmatic scroll guard after transition finishes
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 450);
    },
    [prefersReducedMotion]
  );

  // On activeIndex change from external trigger (controls / arrows)
  useEffect(() => {
    if (!isDraggingRef.current) {
      scrollToSlide(activeIndex, true);
    }
  }, [activeIndex, scrollToSlide]);

  // Determine active slide on scroll (debounced to avoid fighting user gestures)
  const handleScroll = useCallback(() => {
    if (isProgrammaticScrollRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    if (scrollDebounceTimerRef.current) {
      clearTimeout(scrollDebounceTimerRef.current);
    }

    scrollDebounceTimerRef.current = setTimeout(() => {
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const slides = track.querySelectorAll<HTMLDivElement>("[role='group']");
      if (slides.length === 0) return;

      let closestIndex = 0;
      let minDistance = Infinity;

      slides.forEach((slide, idx) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(trackCenter - slideCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIndex = idx;
        }
      });

      if (closestIndex !== activeIndex) {
        onSelect(closestIndex);
      }
    }, 80);
  }, [activeIndex, onSelect]);

  // Pointer Drag Gestures (Desktop mouse drag)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary button
    if (e.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;

    isDraggingRef.current = true;
    setIsDraggingState(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    scrollStartRef.current = track.scrollLeft;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    track.style.scrollSnapType = "none";
    track.classList.add("is-dragging");
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 6) {
      hasDraggedRef.current = true;
    }

    track.scrollLeft = scrollStartRef.current - dx;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = (e.clientX - lastXRef.current) / dt;
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;

    isDraggingRef.current = false;
    setIsDraggingState(false);
    track.classList.remove("is-dragging");
    try {
      track.releasePointerCapture(e.pointerId);
    } catch {}

    track.style.scrollSnapType = "x mandatory";

    // Handle momentum inertia
    const vel = velocityRef.current;
    if (vel < -0.45 && activeIndex < projects.length - 1) {
      scrollToSlide(activeIndex + 1, true);
    } else if (vel > 0.45 && activeIndex > 0) {
      scrollToSlide(activeIndex - 1, true);
    } else {
      scrollToSlide(activeIndex, true);
    }

    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  // Prevent false click after dragging
  const handleClickCapture = (e: React.MouseEvent) => {
    if (hasDraggedRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden group select-none mt-10 sm:mt-14"
    >
      {/* Floating Drag Cursor for Desktop */}
      <DragCursor
        containerRef={containerRef}
        isDragging={isDraggingState}
        prefersReducedMotion={prefersReducedMotion}
      />

      {/* Horizontal Conveyor Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClickCapture={handleClickCapture}
        style={{
          paddingLeft: `${paddingInline}px`,
          paddingRight: `${paddingInline}px`,
          scrollSnapType: "x mandatory",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
        }}
        className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-8 touch-pan-x cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, idx) => (
          <ProjectSlide
            key={project.id}
            project={project}
            index={idx}
            total={projects.length}
            isActive={idx === activeIndex}
            prefersReducedMotion={prefersReducedMotion}
            onSelect={onSelect}
            onOpenViewer={onOpenViewer}
          />
        ))}
      </div>
    </div>
  );
};
