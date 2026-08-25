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
        luxe: {
          bg: '#0e0f11',
          card: '#15171b',
          cardLight: '#1d1f25',
          border: 'rgba(255, 255, 255, 0.12)',
          accent: '#e5e7eb',
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
