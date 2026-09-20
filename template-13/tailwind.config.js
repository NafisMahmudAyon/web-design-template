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
        display: ['Outfit', 'Syne', 'sans-serif'],
      },
      colors: {
        mediso: {
          primary: '#00B074',
          emerald: '#10B981',
          teal: '#00C48C',
          amber: '#F59E0B',
          bg: '#F6F8FA',
          card: '#FFFFFF',
          border: '#EDF2F7',
          dark: '#0F172A',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '26px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)',
        'card-hover': '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.03)',
        'modal': '0 20px 40px -15px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
