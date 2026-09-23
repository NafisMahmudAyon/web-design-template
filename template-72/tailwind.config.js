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
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        blush: {
          50: '#fdfbf9',
          100: '#fcf6f2',
          200: '#fbeee6',
          300: '#f6decfa',
          400: '#eec4ae',
        },
        espresso: {
          800: '#3d2624',
          900: '#2e1d1b',
          950: '#1e1211',
        },
        sage: {
          100: '#eef3ec',
          200: '#dce4d9',
          300: '#c5d2c1',
        },
      },
    },
  },
  plugins: [],
};
