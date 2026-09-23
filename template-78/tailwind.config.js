/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        investa: {
          bg: '#FFFFFF',
          dark: '#202020',
          darker: '#181818',
          accent: '#F6E9C9',
          accentHover: '#EEDDAF',
          red: '#D93829',
          redHover: '#C42F21',
          muted: '#6E6D6B',
          border: '#E5E7EB',
          subtle: '#F9FAFB',
        },
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'btn': '0 4px 14px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
