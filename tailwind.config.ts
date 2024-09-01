import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      "lato": ["Lato", "sans-serif"],
     },
     backgroundColor: {
       "bg-card" : "#F2F0F2",
       "bg-button-primary": "#064749"
     }
    },
  },
  plugins: [],
};
export default config;
