import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{html,js,svg}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#EBF8FF",
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
          700: "#0061C1",
          800: "#00111a", 
          900: "#001633",
          950: "#000c14", 
        },
      },
      backgroundImage: {
        light: "url('/background-light.svg')", // Imagem do modo claro
        dark: "url('/background-dark.svg')", // Imagem do modo escuro
      },
    },
  },
  darkMode: "class",
  plugins: [forms],
};

export default config;
