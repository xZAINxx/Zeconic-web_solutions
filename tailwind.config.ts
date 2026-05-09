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
        background: "#05060A",
        bgDeep: "#02030A",
        surface: "#0B0D14",
        surfaceHigh: "#11141E",
        border: "#1F2230",
        borderHigh: "#2A2E40",
        primary: "#00E5FF",
        primaryGlow: "#00E5FF33",
        accent: "#7B61FF",
        accentGlow: "#7B61FF33",
        magenta: "#FF4FD8",
        magentaGlow: "#FF4FD833",
        amber: "#FFC857",
        textPrimary: "#F5F7FA",
        textSecondary: "#A2A8B8",
        textTertiary: "#5A6072",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(ellipse at 50% 0%, rgba(0,229,255,0.18), transparent 60%)",
        "aurora-mesh":
          "linear-gradient(135deg, rgba(0,229,255,0.18), rgba(123,97,255,0.16) 45%, rgba(255,79,216,0.12))",
        "noise-grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        orbitA: {
          "0%, 100%": {
            transform: "translate3d(-20vw,-20vh,0) scale(1) rotate(0deg)",
            opacity: "0.5",
          },
          "50%": {
            transform: "translate3d(40vw,30vh,0) scale(1.4) rotate(180deg)",
            opacity: "1",
          },
        },
        orbitB: {
          "0%, 100%": {
            transform: "translate3d(30vw,40vh,0) scale(1) rotate(0deg)",
            opacity: "1",
          },
          "50%": {
            transform: "translate3d(-40vw,-30vh,0) scale(0.6) rotate(-180deg)",
            opacity: "0.4",
          },
        },
        orbitC: {
          "0%, 100%": {
            transform: "translate3d(0,0,0) scale(1.2) rotate(0deg)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate3d(30vw,-40vh,0) scale(0.7) rotate(90deg)",
            opacity: "0.85",
          },
        },
        sway1: {
          "0%, 100%": {
            transform: "rotateZ(-25deg) translateY(-10%)",
            opacity: "0.1",
          },
          "50%": {
            transform: "rotateZ(30deg) translateY(10%)",
            opacity: "0.9",
          },
        },
        sway2: {
          "0%, 100%": {
            transform: "rotateZ(35deg) translateY(15%)",
            opacity: "1",
          },
          "50%": {
            transform: "rotateZ(-30deg) translateY(-15%)",
            opacity: "0.2",
          },
        },
        sway3: {
          "0%, 100%": {
            transform: "rotateZ(-15deg) translateY(-5%)",
            opacity: "0.2",
          },
          "50%": {
            transform: "rotateZ(25deg) translateY(20%)",
            opacity: "0.95",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "aurora-1": "orbitA 14s infinite ease-in-out",
        "aurora-2": "orbitB 18s infinite ease-in-out reverse",
        "aurora-3": "orbitC 12s infinite ease-in-out",
        "beam-1": "sway1 9s infinite ease-in-out",
        "beam-2": "sway2 11s infinite ease-in-out",
        "beam-3": "sway3 13s infinite ease-in-out",
        shimmer: "shimmer 2.4s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
