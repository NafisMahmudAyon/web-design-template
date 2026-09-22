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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        steadi: {
          orange: '#F97316',
          orangeDark: '#EA580C',
          orangeLight: '#FFF7ED',
          dark: '#111827',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#F1F5F9',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '36px',
      },
      boxShadow: {
        'steadi': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'steadi-card': '0 4px 12px -2px rgba(0, 0, 0, 0.03), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
      },
    },
  },
  plugins: [],
};
