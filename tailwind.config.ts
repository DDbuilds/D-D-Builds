import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15140F",        // charcoal black — primary surfaces & text
        coal: "#1E1D17",       // raised dark surface
        paper: "#FAFAF7",      // warm white background
        mist: "#ECEAE4",       // light grey panels
        line: "#D8D5CC",       // hairline rules
        brass: "#C1272D",      // subtle gold accent
        brassDeep: "#8E1B1F",  // gold hover / borders
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
