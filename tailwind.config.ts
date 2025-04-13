import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['var(--font-karla)', 'sans-serif'],
        departure: ['var(--font-departure)', 'sans-serif'],
      },
      animation: {
        border: 'border 4s linear infinite',
      },
      keyframes: {
        border: {
          to: { '--border-angle': '360deg' },
        },
      },
    },
    screens: {
      "xs": "480px", // Extra small devices
      "sm": "640px", // Small devices
      "md": "768px", // Medium devices
      "lg": "1024px", // Large devices
      "xl": "1280px", // Extra large devices
      "2xl": "1536px", // 2X large devices
      "3xl": "1920px", // Custom breakpoint for very large screens
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
