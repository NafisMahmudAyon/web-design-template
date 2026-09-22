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
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        finance: {
          canvas: '#F6F2EC',
          card: '#FFFFFF',
          dark: '#141814',
          gray: '#6B7269',
          border: '#E8ECE6',
          green: '#10B981',
          red: '#EF4444',
          amber: '#F59E0B',
          blue: '#2563EB',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'card': '0 2px 14px rgba(0, 0, 0, 0.025), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.02)',
        'card-glow': '0 10px 25px -5px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
};
