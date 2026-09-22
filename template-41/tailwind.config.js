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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        coinix: {
          bg: '#0B0C10',
          dark: '#0E1017',
          card: '#12151F',
          cardHover: '#161A26',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.04)',
          primary: '#4F46E5',
          primaryHover: '#4338CA',
          accent: '#7C3AED',
          emerald: '#10B981',
          rose: '#EF4444',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'coinix': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        'glow-primary': '0 0 30px -5px rgba(79, 70, 229, 0.35)',
      },
    },
  },
  plugins: [],
};
