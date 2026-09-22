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
        brandForest: {
          DEFAULT: '#132E22',
          light: '#1B3F2F',
          dark: '#0C1F17',
        },
        brandYellow: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          dark: '#D97706',
        },
        brandOrange: {
          DEFAULT: '#FF5722',
          hover: '#E64A19',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
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
        'lift': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'yellow-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
      }
    },
  },
  plugins: [],
};
