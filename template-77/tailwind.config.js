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
        elevate: {
          forest: '#2E5B53',
          'forest-dark': '#244942',
          dark: '#1E433C',
          sage: '#76A69F',
          soft: '#E8F0EE',
          light: '#F0F5F3',
          cream: '#FAFDFB',
          text: '#182623',
          muted: '#52635F',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'soft-forest': '0 10px 30px -5px rgba(46, 91, 83, 0.15)',
        'elevated': '0 20px 40px -10px rgba(46, 91, 83, 0.2)',
      },
    },
  },
  plugins: [],
};
