import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        primaryBlue: "#0070F3",   // Azul Claro
        accentMint: "#1DE9B6",    // Verde Menta
        lightGray: "#F5F5F5",     // Cinza Claro
        primaryOrange: "#FFB300", // Laranja
        textDark: "#333333",      // Cinza Escuro para textos
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
