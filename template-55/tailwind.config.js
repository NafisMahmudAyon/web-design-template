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
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0A0A0A',
          darkSurface: '#111827',
          darkCard: '#1E293B',
          lime: '#D4F442',
          limeLight: '#F3FCD4',
          limeHover: '#C4E432',
          green: '#10B981',
          orange: '#F97316',
          sky: '#38BDF8',
          border: '#E2E8F0',
          softBg: '#FAFAF9',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.10)',
        'float-widget': '0 20px 50px -10px rgba(0, 0, 0, 0.15)',
        'lime-glow': '0 0 35px -5px rgba(212, 244, 66, 0.45)',
      },
    },
  },
  plugins: [],
};
