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
      },
      colors: {
        fin: {
          dark: '#0F172A',
          primary: '#105B3A',
          'primary-dark': '#0B4129',
          'primary-light': '#18794E',
          'primary-soft': '#E9F5EF',
          accent: '#22C55E',
          surface: '#FFFFFF',
          bg: '#F8FAFC',
          frame: '#ECEEF1',
          border: '#E2E8F0',
          muted: '#64748B',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'fin-card': '0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)',
        'fin-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'fin-emerald': '0 10px 25px -5px rgba(16, 91, 58, 0.3)',
      },
    },
  },
  plugins: [],
};
