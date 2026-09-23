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
        display: ['Outfit', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      colors: {
        physics: {
          green: '#548A63',
          greenDark: '#437150',
          greenLight: '#EBF3ED',
          chalk: '#3E6F4D',
          dark: '#1C2420',
          muted: '#6B7280',
          border: '#E5E7EB',
          surface: '#FBFBFB',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.06)',
        'lift': '0 20px 40px -15px rgba(84, 138, 99, 0.18)',
      },
    },
  },
  plugins: [],
};
