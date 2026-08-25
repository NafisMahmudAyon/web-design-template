/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'Syne', 'sans-serif'],
      },
      colors: {
        aether: {
          bg: '#0c0d10',
          card: '#121418',
          cardWhite: '#ffffff',
          accentOrange: '#ff5722',
        }
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '44px',
      }
    },
  },
  plugins: [],
}
