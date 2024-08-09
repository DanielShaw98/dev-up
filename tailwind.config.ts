import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#17181D",
      grey: "#506872",
      orange: "#FF4A01",
      white: "#FFFFF3",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        main: ["Unbounded", "sans-serif"],
        sub: ["Outfit", "sans-serif"],
        body: ["Fira Mono", "monospace"],
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};
export default config;
