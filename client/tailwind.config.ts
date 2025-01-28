// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        moveLeftMobile: 'moveLeftMobile 20s linear infinite',
        moveLeftDesktop: 'moveLeftDesktop 20s linear infinite',
      },
      keyframes: {
        moveLeftMobile: {
          '0%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-180%)' },
        },
        moveLeftDesktop: {
          '0%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-35%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;