import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#2A5A94",
          700: "#1E416B",
          750: "#163254",
          800: "#132640", // Slate Navy
          850: "#0F2540",
          900: "#0B192C", // Deep Navy
          950: "#060E1A", // Midnight Navy
        },
        gold: {
          50: "#FDFBF7",
          100: "#FAF4E8",
          200: "#FDF7E7", // Lightest Gold
          300: "#E6C775", // Light Gold Glow
          400: "#D4AF37", // Champagne Gold
          500: "#C5A059", // Warm Gold
          600: "#A88440", // Deep Gold
          700: "#8C6C30",
          800: "#705423",
          900: "#543D17",
          950: "#3A290E",
        },
        ivory: {
          50: "#FCFDFE",
          100: "#F8F9FB", // Alabaster / Warm Ivory
          200: "#EFF2F6",
          300: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: [
          "var(--font-plus-jakarta)",
          "var(--font-noto-sans-jp)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        japanese: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(6, 14, 26, 0.06), 0 1px 4px -1px rgba(6, 14, 26, 0.04)",
        card: "0 12px 30px -10px rgba(6, 14, 26, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        elevated: "0 24px 48px -12px rgba(6, 14, 26, 0.22), 0 0 0 1px rgba(212, 175, 55, 0.35)",
        luxury:
          "0 20px 40px -15px rgba(6, 14, 26, 0.12), 0 0 1px 1px rgba(212, 175, 55, 0.15)",
        "luxury-hover":
          "0 25px 50px -12px rgba(6, 14, 26, 0.22), 0 0 0 1px rgba(212, 175, 55, 0.45)",
        "gold-glow": "0 8px 24px -6px rgba(212, 175, 55, 0.35)",
        "gold-glow-lg": "0 16px 40px -8px rgba(212, 175, 55, 0.45)",
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "ping-slow": "ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite",
        "scroll-dot": "scroll-dot 2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.8", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "50%, 100%": { transform: "scale(1.5)", opacity: "0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "translateY(24px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
