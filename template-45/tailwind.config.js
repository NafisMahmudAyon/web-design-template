/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        logistiqo: {
          red: '#E11D48',
          'red-dark': '#BE123C',
          'red-light': '#FFF1F2',
          dark: '#0B0F17',
          navy: '#0F172A',
          surface: '#F8FAFC',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'logistiqo-card': '0 4px 20px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'red-glow': '0 8px 30px -4px rgba(225, 29, 72, 0.4)',
      },
    },
  },
  plugins: [],
};
