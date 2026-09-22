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
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        brandGold: '#C88C48',
        brandGoldDark: '#B37836',
        brandDark: '#15181C',
        brandSurfaceDark: '#1E2328',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 60px -15px rgba(59, 130, 246, 0.4)',
      },
    },
  },
  plugins: [],
};
