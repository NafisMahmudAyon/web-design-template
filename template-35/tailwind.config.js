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
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        finora: {
          lime: '#C7F263',
          'lime-hover': '#B4EE58',
          dark: '#141814',
          'dark-card': '#1E231E',
          gray: '#6C736A',
          subtle: '#F8F9F7',
          border: '#E8ECE6',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 2px 14px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'float': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
