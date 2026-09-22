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
        brandLime: {
          DEFAULT: '#8CE338',
          hover: '#7AC92F',
          light: '#EDFBDC',
          dark: '#5EA020',
        },
        brandDark: {
          DEFAULT: '#0F172A',
          card: '#1E293B',
        }
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'lime-glow': '0 0 25px rgba(140, 227, 56, 0.4)',
        'lift': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
