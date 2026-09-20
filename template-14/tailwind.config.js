/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        mint: {
          bg: '#121417',
          rail: '#0E1012',
          sidebar: '#16191D',
          card: '#1B1E23',
          cardSubtle: '#21262D',
          border: '#2A2F37',
          borderLight: '#343B45',
          green: '#22C55E',
          greenLight: '#4ADE80',
          red: '#EF4444',
          amber: '#F59E0B',
          textMuted: '#8B949E',
          textSubtle: '#6E7681',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '22px',
        '4xl': '28px',
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(34, 197, 94, 0.25)',
        'card-dark': '0 4px 20px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
