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
        brandOrange: {
          DEFAULT: '#FF5B26',
          hover: '#E84E1D',
          light: '#FFF1EB',
          dark: '#D94414',
        },
        brandLime: {
          DEFAULT: '#A3E635',
          dark: '#65A30D',
        },
        brandDark: {
          DEFAULT: '#111827',
          card: '#1F2937',
        }
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'orange-soft': '0 10px 30px rgba(255, 91, 38, 0.25)',
        'lift': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
