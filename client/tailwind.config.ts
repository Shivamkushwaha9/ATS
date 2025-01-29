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
        'moveLeftMobile': 'moveLeftMobile 20s linear infinite',
        'moveLeftDesktop': 'moveLeftDesktop 20s linear infinite',
        'slide-left': 'slideFromLeft 0.8s ease-out forwards',
        'slide-right': 'slideFromRight 0.8s ease-out forwards',
        'slide-bottom': 'slideFromBottom 0.8s ease-out forwards',
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
        slideFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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