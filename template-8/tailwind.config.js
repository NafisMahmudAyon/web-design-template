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
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#D4F58B',
          limeDark: '#B2E057',
          peach: '#FDE4D0',
          orange: '#FF7A45',
          accent: '#0D0E12',
          card: 'rgba(255, 255, 255, 0.85)',
        }
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'glass': '0 20px 50px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 30px rgba(212, 245, 139, 0.4)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
