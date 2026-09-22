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
          lime: '#DCF852',
          limeLight: '#F3FCD4',
          limeHover: '#CEEC3F',
          dark: '#0B1A13',
          darkSurface: '#10241A',
          forest: '#143826',
          charcoal: '#0F172A',
          muted: '#64748B',
          softBg: '#F8F9FA',
          cardBg: '#FFFFFF',
          accentBlue: '#0284C7',
          accentOrange: '#F97316',
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
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'lime-glow': '0 0 35px -5px rgba(220, 248, 82, 0.5)',
      },
    },
  },
  plugins: [],
};
