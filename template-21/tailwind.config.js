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
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        zyptoBg: '#08090a',
        zyptoCard: '#121417',
        zyptoDark: '#0e1012',
        zyptoEmerald: {
          400: '#34d399',
          500: '#00e699',
          600: '#059669',
          900: '#022c22',
        },
        zyptoPurple: '#a855f7',
        zyptoCyan: '#06b6d4',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'neon-emerald': '0 0 30px -5px rgba(0, 230, 153, 0.35)',
        'neon-purple': '0 0 30px -5px rgba(168, 85, 247, 0.35)',
        'card-glow': '0 10px 40px -10px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
};
