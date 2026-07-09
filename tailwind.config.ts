import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/scenes/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — elegant, never colorful.
        void: "#03040A", // black, deepest background
        ink: "#070912", // near-black surface
        space: "#0B1026", // deep space blue
        nebula: "#121A3A", // lifted space blue
        iris: "#8B7BFF", // soft purple
        irisdeep: "#5B4CD6", // deeper purple
        cyan: "#6FE9F5", // soft cyan
        cyandeep: "#2AB6C9",
        chalk: "#F5F7FF", // white
        mist: "#AEB6D6", // muted text
        haze: "#5E6788", // dim text
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        widest2: "0.28em",
      },
      screens: {
        xs: "420px",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        drift: {
          "0%": { transform: "transl3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "96%": { transform: "scaleY(0.05)" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        blink: "blink 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
