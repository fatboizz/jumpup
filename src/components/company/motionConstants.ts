// Tuning knobs & animation constants for Company Profile Fact Sheet

/** Toast notification display duration in milliseconds */
export const TOAST_DURATION = 2400;

/** Desktop column span configuration: 7 cols (Facts) / 5 cols (Map & Location) */
export const DESKTOP_COL_RATIO = "col-span-12 lg:col-span-7 / col-span-12 lg:col-span-5";

/** Map Embed Aspect Ratio */
export const MAP_ASPECT_RATIO = "aspect-[16/10]";

/** Transition easing and duration following Aman / Nikkei Business standard */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const DUR = 0.7;
export const STAGGER = 0.08;

export const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER,
      delayChildren: 0.1,
    },
  },
};

export const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DUR,
      ease: EASE_OUT,
    },
  },
};
