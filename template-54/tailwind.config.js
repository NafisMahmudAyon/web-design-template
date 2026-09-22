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
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0A0A0A',
          darkSurface: '#18181B',
          card: '#FFFFFF',
          gold: '#F59E0B',
          goldLight: '#FEF3C7',
          blue: '#3B82F6',
          blueHover: '#2563EB',
          muted: '#71717A',
          softBg: '#FAFAF9',
          border: '#E4E4E7',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.12)',
        'widget': '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
