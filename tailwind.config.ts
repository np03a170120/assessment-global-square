import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        seconday: " #F5F5F5",
        text: "#333333",
        accent: "#FF6347",
      },
    },
  },
  plugins: [],
} satisfies Config;
