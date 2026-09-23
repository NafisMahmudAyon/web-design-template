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
        dark: {
          bg: '#0c0d12',
          surface: '#13141b',
          card: '#181922',
          border: '#222430',
          hover: '#20222e',
          textMuted: '#828498',
        },
        cal: {
          purple: '#8278f8',
          purpleDark: '#6d5dfc',
          amber: '#fba53e',
          blue: '#2aa8ff',
          coral: '#f86262',
          yellow: '#fdb438',
          cream: '#fbf5f4',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '44px',
      },
      boxShadow: {
        'dashboard': '0 25px 60px -15px rgba(0, 0, 0, 0.45)',
        'card-glow': '0 8px 24px -4px rgba(109, 93, 252, 0.25)',
      },
    },
  },
  plugins: [],
};
