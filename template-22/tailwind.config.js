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
        travelDark: {
          950: '#060a0f',
          900: '#0b131c',
          800: '#0f1824',
          700: '#162334',
        },
        travelCyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'cyan-glow': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
};
