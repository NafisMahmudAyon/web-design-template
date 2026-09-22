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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        finexa: {
          blue: '#1D4ED8',
          royal: '#1E40AF',
          navy: '#0B2545',
          dark: '#0F172A',
          lime: '#C5FF32',
          lightlime: '#D4FF32',
          surface: '#F8FAFC',
          subtle: '#F1F5F9',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glow-lime': '0 0 35px -5px rgba(197, 255, 50, 0.4)',
        'glow-blue': '0 0 50px -10px rgba(29, 78, 216, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};
