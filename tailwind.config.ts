import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0f0f0f",
        surfaceHigh: "#1a1a1a",
        border: "#2a2a2a",
        borderHigh: "#3a3a3a",
        primary: "#00E5FF",
        primaryGlow: "#00E5FF33",
        accent: "#7B61FF",
        accentGlow: "#7B61FF33",
        textPrimary: "#F0F0F0",
        textSecondary: "#A0A0A0",
        textTertiary: "#555555",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
