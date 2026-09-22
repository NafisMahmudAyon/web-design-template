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
        finexa: {
          blue: '#1855DE',
          'blue-dark': '#0E3FA9',
          'blue-light': '#EBF2FF',
          lime: '#B5F52C',
          'lime-hover': '#A4EB1B',
          dark: '#0B1120',
          navy: '#0F1A30',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'finexa-card': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'finexa-glow': '0 10px 40px -10px rgba(24, 85, 222, 0.25)',
        'lime-glow': '0 8px 30px -5px rgba(181, 245, 44, 0.4)',
      },
    },
  },
  plugins: [],
};
