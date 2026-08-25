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
        display: ['Syne', 'Outfit', 'sans-serif'],
      },
      colors: {
        grov: {
          bg: '#1b2d1c',
          cardLight: '#dcecd8',
          cardDark: '#132114',
          accent: '#263a28',
          lime: '#9ad972',
          textDark: '#142015',
          textLight: '#e4f2df',
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
