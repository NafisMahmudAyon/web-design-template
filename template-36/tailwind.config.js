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
        raxon: {
          deep: '#0B1A1C',
          dark: '#132B2E',
          teal: '#163337',
          card: '#1A3B3F',
          border: '#234C51',
          mint: '#00D287',
          emerald: '#10B981',
          accent: '#2DD4BF',
          surface: '#F9FBFA',
          subtle: '#F2F6F4',
          muted: '#64748B',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glow-mint': '0 0 40px -10px rgba(0, 210, 135, 0.35)',
        'glow-teal': '0 0 60px -15px rgba(22, 51, 55, 0.5)',
        'dashboard': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};
