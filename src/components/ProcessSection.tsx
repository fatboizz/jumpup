"use client";

/**
 * Backward-compatible wrapper for the Process section.
 * Re-exports the new Scroll-Driven Rail Process architecture.
 */
import { Process } from "./process/Process";

export const ProcessSection = Process;
export { Process };
export default Process;
