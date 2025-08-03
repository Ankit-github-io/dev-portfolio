import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
import scrollBar from "tailwind-scrollbar";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import { PluginAPI } from "tailwindcss/types/config";

// Plugin to generate CSS variables for Tailwind colors
const addVariablesForColors = ({ addBase, theme }: PluginAPI) => {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

// Helper functions for SVG backgrounds
const createGridSVG = (color: string, size: number) =>
  svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" fill="none" stroke="${color}"><path d="M0 .5H31.5V32"/></svg>`
  );

const createDotSVG = (color: string) =>
  svgToDataUri(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${color}" cx="10" cy="10" r="1.625"></circle></svg>`
  );

// Main Tailwind configuration
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: ["class", "class"],

  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      spacing: {
        navHeight: "64px",
      },
      colors: {
        surface: {
          0: "var(--background-a0)",
          20: "var(--background-a20)",
          40: "var(--background-a40)",
          60: "var(--background-a60)",
          80: "var(--background-a80)",
          100: "var(--background-a100)",
        },
        foreground: "var(--foreground)",
        overlayBackground: "var(--overlay-background)",

        primary: {
          DEFAULT: "var(--primary)",
          copy: "var(--primary-copy)",
          light: "var(--primary-light)",
          lightest: "var(--primary-lightest)",
        },

        secondary: {
          DEFAULT: "var(--secondary)",
          copy: "var(--secondary-copy)",
          dark: "var(--secondary-dark)",
          light: "var(--secondary-light)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          copy: "var(--muted-copy)",
        },

        copy: {
          DEFAULT: "var(--copy)",
          light: "var(--copy-light)",
          lighter: "var(--copy-lighter)",
        },

        borderColor: "var(--border)",
        borderHoverColor: "var(--border-hover)",
        input: "var(--input)",

        success: {
          DEFAULT: "var(--success)",
          content: "var(--success-content)",
        },

        warning: {
          DEFAULT: "var(--warning)",
          content: "var(--warning-content)",
        },

        error: {
          DEFAULT: "var(--error)",
          content: "var(--error-content)",
        },

        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
      },
      backgroundImage: { gradiant: "var(--gradiant)" },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        pulse: "pulse var(--duration) ease-out linear infinite ",
        ripple: "ripple 2s infinite linear",
        rippleBg:
          "rippleBg var(--duration,4s) ease calc(var(--i, 0)*.2s) infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        pulse: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 var(--pulse-color)",
          },
          "50%": {
            boxShadow: "0 0 0 8px var(--pulse-color)",
          },
        },
        ripple: {
          from: {
            opacity: "1",
            width: "0px",
            height: "0px",
          },
          to: {
            width: "40px",
            height: "40px",
            opacity: "0",
          },
        },
        rippleBg: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    bgGridGenrator,
    scrollBar({ nocompatible: true, preferredStrategy: "pseudoelements" }),
  ],
};
function bgGridGenrator({ matchUtilities, theme }: PluginAPI) {
  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${createGridSVG(value, 32)}")`,
      }),
      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${createGridSVG(value, 8)}")`,
      }),
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${createDotSVG(value)}")`,
      }),
    },
    { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
  );
}

export default config;
