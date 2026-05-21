/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F1419",
        surface: "#161D26",
        "surface-raised": "#1C2433",
        border: "#2A3441",
        cobalt: "#2C5EF5",
        "cobalt-dim": "#1A3DB0",
        "text-base": "#F1F3F5",
        muted: "#8B98A8",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tight: "-0.03em",
        snug: "-0.02em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
