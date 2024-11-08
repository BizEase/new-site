import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js,svg}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#EBF8FF',
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          700: '#0061C1',
          900: '#001633', 
        },
      },
      backgroundImage: {
        'diagonal-stripes': "url('/teste.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [forms],
};

export default config;
