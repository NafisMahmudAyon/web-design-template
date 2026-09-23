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
        salehouse: {
          blue: '#0052ff',
          blueDark: '#003ecb',
          blueHover: '#1a64ff',
          yellow: '#ffe875',
          yellowWarm: '#fed700',
          yellowMuted: '#fff6c7',
          dark: '#0c0d11',
          surface: '#15161d',
          border: '#e8eaee',
          textMuted: '#686b7a',
          textDark: '#12141a',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.06)',
        'float': '0 20px 45px -10px rgba(0, 0, 0, 0.12)',
        'blue-glow': '0 8px 25px -4px rgba(0, 82, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
