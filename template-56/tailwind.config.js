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
          forest: '#0B2017',
          forestDark: '#081811',
          forestCard: '#102A1F',
          amber: '#F59E0B',
          amberLight: '#FEF3C7',
          emerald: '#059669',
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
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.12)',
        'emerald-glow': '0 0 35px -5px rgba(5, 150, 105, 0.4)',
      },
    },
  },
  plugins: [],
};
