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
        serif: ['"Instrument Serif"', 'Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        terra: {
          dark: '#111D14',
          forest: '#183821',
          pine: '#204A2C',
          green: '#2E663D',
          lime: '#B7F436',
          'lime-hover': '#C6F84C',
          cream: '#F8FAF7',
          subtle: '#EFF3EE',
          card: '#FFFFFF',
          border: '#E1E8DE',
          muted: '#5F7063',
        },
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'terra-soft': '0 10px 30px -10px rgba(17, 29, 20, 0.05)',
        'lime-glow': '0 0 35px -5px rgba(183, 244, 54, 0.35)',
      },
    },
  },
  plugins: [],
};
