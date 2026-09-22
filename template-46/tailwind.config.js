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
        finovia: {
          lime: '#B7F436',
          'lime-dark': '#9FE41E',
          'lime-light': '#F2FCE2',
          dark: '#0B1118',
          navy: '#111827',
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
        'finovia-card': '0 4px 25px -4px rgba(15, 23, 42, 0.06), 0 2px 8px -2px rgba(15, 23, 42, 0.04)',
        'lime-glow': '0 8px 30px -4px rgba(183, 244, 54, 0.45)',
      },
    },
  },
  plugins: [],
};
