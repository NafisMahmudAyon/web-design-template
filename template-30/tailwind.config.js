/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rynox: {
          orange: '#E65D24',
          'orange-hover': '#CE4E1A',
          'orange-light': '#FFF2EC',
          dark: '#111827',
          gray: '#6B7280',
          bg: '#EEF0F4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
