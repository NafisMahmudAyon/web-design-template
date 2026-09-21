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
        brand: {
          orange: '#FF5B37',
          'orange-hover': '#E84A26',
          'orange-light': '#FFF0ED',
          dark: '#111827',
          gray: '#6B7280',
          lightbg: '#F4F6F9',
          cardbg: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
