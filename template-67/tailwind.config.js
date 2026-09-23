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
        drank: {
          bg: '#050608',
          chassis: '#090a0e',
          card: '#12131a',
          cardInner: '#181922',
          border: '#1f212c',
          borderLight: '#2a2d3b',
          textMuted: '#74778b',
          mint: '#7ae2a4',
          mintDark: '#55c683',
          bronze: '#9c7a5c',
          bronzeDark: '#856447',
          bronzeLight: '#b59273',
          orange: '#f59e0b',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'glow-mint': '0 0 25px -5px rgba(122, 226, 164, 0.3)',
      },
    },
  },
  plugins: [],
};
