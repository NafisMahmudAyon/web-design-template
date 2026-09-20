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
        golf: {
          bg: '#0a1711',
          forest: '#11231a',
          emerald: '#1b3b2b',
          lime: '#E2F844',
          'lime-hover': '#d0e536',
          gold: '#eab308',
          cream: '#f5f6f2',
          muted: '#8e9d95',
          darktext: '#131b17',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'lime-glow': '0 0 25px -5px rgba(226, 248, 68, 0.4)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
