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
        raxon: {
          orange: '#FA5D29',
          'orange-hover': '#EA4E1B',
          'orange-soft': '#FFF1EC',
          dark: '#0F172A',
          green: '#10B981',
          red: '#EF4444',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          bg: '#F8FAFC',
          frame: '#ECEEF1',
          border: '#E8ECF2',
          muted: '#64748B',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'raxon-card': '0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)',
        'raxon-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.06)',
        'raxon-orange': '0 8px 20px -4px rgba(250, 93, 41, 0.35)',
      },
    },
  },
  plugins: [],
};
