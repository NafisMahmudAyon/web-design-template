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
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        flowzy: {
          purple: '#7C3AED',
          'purple-dark': '#5B21B6',
          'purple-deep': '#3A1C71',
          'purple-light': '#F5F3FF',
          'purple-pill': '#EDE9FE',
          lavender: '#F3E8FF',
          canvas: '#FAFAFC',
          border: '#E2E8F0',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'flowzy-card': '0 4px 25px -4px rgba(124, 58, 237, 0.08), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'flowzy-hover': '0 12px 35px -5px rgba(124, 58, 237, 0.15)',
        'purple-glow': '0 8px 30px -4px rgba(124, 58, 237, 0.4)',
      },
    },
  },
  plugins: [],
};
