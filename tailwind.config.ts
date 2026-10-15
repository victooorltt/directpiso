import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        ivory: "#F6F5F2",
        navy: {
          DEFAULT: "#1F3554",
          light: "#2A456C",
          dark: "#142338",
        },
        accent: {
          DEFAULT: "#D66A32",
          hover: "#BD5B27",
          subtle: "#FDF4EE",
        },
        action: {
          DEFAULT: "#C2561E",
          hover: "#A84614",
        },
        subtext: "#596575",
        borderline: "#E5E8EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
