import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js,svg}', // Incluindo arquivos SVG no conteúdo
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#EBF8FF', // Cor mais clara
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          700: '#0061C1', // Cor mais escura
        },
        lightBlue: {
          DEFAULT: '#F0FBFF', // Azul claro
        },
      },
      backgroundImage: {
        'diagonal-stripes': "url('/teste.svg')",
      },
    },
  },
  darkMode: 'class', // Habilita o controle do modo escuro via classe
  plugins: [forms],
};

export default config;
