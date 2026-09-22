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
        serif: ['"Instrument Serif"', 'Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        agro: {
          dark: '#111813',
          card: '#18241B',
          forest: '#1E3A24',
          pine: '#274C2F',
          green: '#325E3B',
          lime: '#B7F436',
          'lime-hover': '#C6F84C',
          cream: '#FBFBFB',
          subtle: '#F4F6F2',
          cardLight: '#FFFFFF',
          border: '#E5EAE3',
          muted: '#617265',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(183, 244, 54, 0.35)',
        'card-soft': '0 10px 30px -10px rgba(21, 34, 25, 0.06)',
      },
    },
  },
  plugins: [],
};
