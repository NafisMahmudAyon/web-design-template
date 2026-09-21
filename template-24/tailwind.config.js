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
        display: ['Oswald', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      colors: {
        verdaLime: '#b8ff00',
        verdaYellow: '#f7c948',
        verdaTeal: '#0a4b5c',
        verdaDark: '#121619',
        verdaBg: '#eae6df',
        verdaCard: '#f4f1ea',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'lime-glow': '0 0 35px -5px rgba(184, 255, 0, 0.4)',
        'subtle-card': '0 10px 30px -10px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
