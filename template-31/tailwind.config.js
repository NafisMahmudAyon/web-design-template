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
        finvesto: {
          purple: '#635BFF',
          'purple-hover': '#4F46E5',
          'purple-light': '#EEF2FF',
          dark: '#0F172A',
          bg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
