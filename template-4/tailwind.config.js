/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        real: {
          black: '#070809',
          dark: '#111215',
          card: '#181A1E',
          muted: '#8A909A',
          border: 'rgba(255, 255, 255, 0.12)',
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.15em',
      }
    },
  },
  plugins: [],
}
