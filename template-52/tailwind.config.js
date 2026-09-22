/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        pollinate: {
          orange: '#FF5520',
          'orange-hover': '#E84512',
          'orange-light': '#FFF1ED',
          dark: '#0B0F15',
          'dark-card': '#161B22',
          'map-bg': '#0D1117',
          gray: '#F6F7F9',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'pollinate': '0 2px 14px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02)',
        'pollinate-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08)',
        'pollinate-orange': '0 12px 28px -4px rgba(255, 85, 32, 0.35)',
      },
    },
  },
  plugins: [],
};
