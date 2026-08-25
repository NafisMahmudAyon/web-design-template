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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        kortex: {
          bg: '#0f1012',
          card: '#17181c',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          accentGreen: '#00e676',
          accentOrange: '#ff5722',
          textMuted: '#8a8f9d',
        }
      },
      borderRadius: {
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
