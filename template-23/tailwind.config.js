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
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        condensed: ['Oswald', '"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        vantageNeon: '#ccff00',
        vantageBlue: {
          500: '#0066cc',
          600: '#0f52ba',
          700: '#083e96',
        },
        vantageDark: {
          950: '#05090e',
          900: '#080d14',
          800: '#0d141e',
          700: '#141e2b',
        },
        vantageBeige: '#ece9e2',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'neon-glow': '0 0 35px -5px rgba(204, 255, 0, 0.4)',
        'blue-glow': '0 0 40px -10px rgba(0, 102, 204, 0.5)',
      },
    },
  },
  plugins: [],
};
