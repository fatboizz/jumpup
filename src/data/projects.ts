export * from "./projectTypes";
export * from "./projectsData";

import { Project } from "./projectTypes";
import { PROJECTS } from "./projectsData";

/**
 * Filter projects based on selected category key
 */
export function getFilteredProjects(category: string): Project[] {
  if (category === "all") {
    return PROJECTS;
  }
  return PROJECTS.filter((p) => p.category === category);
}

/**
 * In strict production: suppress placeholder projects if flag is set.
 * If no real projects exist, allows displaying sample projects for development/review.
 */
export function getVisibleProjects(): Project[] {
  const isStrictProduction =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_HIDE_PLACEHOLDERS === "true";

  if (isStrictProduction) {
    return PROJECTS.filter((p) => !p.isPlaceholder);
  }
  return PROJECTS;
}

export function hasVisibleProjects(): boolean {
  return getVisibleProjects().length > 0;
}
