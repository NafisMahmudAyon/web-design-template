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
        saas: {
          purple: '#6D28D9',
          violet: '#7C3AED',
          accent: '#8B5CF6',
          light: '#F5F3FF',
          dark: '#111319',
          card: '#161922',
          border: '#E5E7EB',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glow-purple': '0 0 50px -10px rgba(124, 58, 237, 0.35)',
        'soft-purple': '0 10px 30px -5px rgba(109, 40, 217, 0.08)',
      },
    },
  },
  plugins: [],
};
