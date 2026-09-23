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
        slateBlue: {
          DEFAULT: '#5b7b99',
          light: '#7291ae',
          dark: '#486682',
        },
        terracotta: {
          DEFAULT: '#b56041',
          light: '#c67355',
        },
        sandstone: '#f7f4ed',
      },
    },
  },
  plugins: [],
};
