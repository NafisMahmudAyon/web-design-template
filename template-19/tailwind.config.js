/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#FBF5E6',
          200: '#F4E7C4',
          300: '#EBD49B',
          400: '#E0BE6E',
          500: '#D4AF37', // primary champagne gold
          600: '#B89225',
          700: '#947219',
          800: '#755714',
          900: '#523B0C',
        },
        obsidian: {
          950: '#030406',
          900: '#05070A', // primary background
          850: '#0A0D12',
          800: '#0F131A', // elevated cards
          700: '#171D27',
          600: '#232B38',
        }
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
        'gold-subtle': '0 10px 30px -10px rgba(212, 175, 55, 0.15)',
        'inner-gold': 'inset 0 0 20px 0 rgba(212, 175, 55, 0.15)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '44px',
      },
    },
  },
  plugins: [],
};
