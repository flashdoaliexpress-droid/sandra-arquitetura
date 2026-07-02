import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ===== Stitch Design System - Sandra Arquitetura =====
        // Surface / Background
        background: "#fff8f6",
        surface: "#fff8f6",
        "surface-bright": "#fff8f6",
        "surface-dim": "#e4d7d4",
        "surface-variant": "#ede0dc",
        "surface-tint": "#8a4e3b",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fef1ed",
        "surface-container": "#f8ebe8",
        "surface-container-high": "#f2e5e2",
        "surface-container-highest": "#ede0dc",

        // On-Surface (text)
        "on-surface": "#201a18",
        "on-background": "#201a18",
        "on-surface-variant": "#53433f",

        // Primary (terracota)
        primary: "#834836",
        "primary-container": "#a0604c",
        "on-primary": "#ffffff",
        "on-primary-container": "#fff4f1",
        "primary-fixed": "#ffdbd0",
        "primary-fixed-dim": "#ffb59e",
        "on-primary-fixed": "#370e02",
        "on-primary-fixed-variant": "#6e3726",
        "inverse-primary": "#ffb59e",

        // Secondary
        secondary: "#645d59",
        "secondary-container": "#e8ddd8",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#69615d",
        "secondary-fixed": "#ebe0db",
        "secondary-fixed-dim": "#cfc4bf",
        "on-secondary-fixed": "#201b18",
        "on-secondary-fixed-variant": "#4c4542",

        // Tertiary
        tertiary: "#17635b",
        "tertiary-container": "#367c73",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#d5fff7",
        "tertiary-fixed": "#aaf0e4",
        "tertiary-fixed-dim": "#8ed3c9",
        "on-tertiary-fixed": "#00201c",
        "on-tertiary-fixed-variant": "#005049",

        // Outline / Structure
        outline: "#85736e",
        "outline-variant": "#d8c2bc",

        // Inverse
        "inverse-surface": "#362f2d",
        "inverse-on-surface": "#fbeeea",

        // Error
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",

        // Custom (extracted from screen hover states)
        "terracota-hover": "#8c4f3d",
      },
      fontFamily: {
        "display-lg": ["Cinzel", "serif"],
        "display-lg-mobile": ["Cinzel", "serif"],
        "headline-lg": ["Cinzel", "serif"],
        "headline-md": ["Cinzel", "serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        display: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "1.1", letterSpacing: "0.06em", fontWeight: "400" },
        ],
        "display-lg-mobile": [
          "40px",
          { lineHeight: "1.1", letterSpacing: "0.06em", fontWeight: "400" },
        ],
        "headline-lg": [
          "32px",
          { lineHeight: "1.2", letterSpacing: "0.06em", fontWeight: "500" },
        ],
        "headline-md": [
          "24px",
          { lineHeight: "1.3", letterSpacing: "0.06em", fontWeight: "400" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "1.6", letterSpacing: "0.02em", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.6", letterSpacing: "0.02em", fontWeight: "400" },
        ],
        "label-caps": [
          "12px",
          { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "500" },
        ],
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        gutter: "24px",
        unit: "8px",
      },
      maxWidth: {
        "container-max": "1440px",
      },
      borderRadius: {
        DEFAULT: "0",
        none: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.1s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
