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
        furn: {
          forest: '#0E4334',
          forestDark: '#092D23',
          cardFooter: '#0A3327',
          bg: '#FAF8F5',
          card: '#F4EFEA',
          gold: '#C8A870',
          ochre: '#D4AF37',
          orange: '#E37A32',
          dark: '#141716',
        },
      },
      borderRadius: {
        'arch': '120px 120px 0 0',
        'capsule': '9999px',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(14, 67, 52, 0.25)',
      },
    },
  },
  plugins: [],
};
