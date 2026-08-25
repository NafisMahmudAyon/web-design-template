/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        breeze: {
          50: '#F4F7F9',
          100: '#E7EEF3',
          200: '#D2DDE6',
          300: '#A9BAC8',
          400: '#7B94A7',
          500: '#557287',
          600: '#3D5466',
          700: '#2A3C4B',
          800: '#1A2732',
          900: '#0F1820',
          dark: '#111D24',
          teal: '#1A383E',
        }
      }
    },
  },
  plugins: [],
}
