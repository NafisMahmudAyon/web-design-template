/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        teal: {
          brand: '#009E96',
          hover: '#028B84',
          dark: '#064843',
          marine: '#042A27',
          night: '#051816',
          light: '#E6F6F5',
        },
        sand: {
          50: '#FCFCFA',
          100: '#F5F6F3',
          200: '#EAECE6',
        }
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
        'marquee-reverse': 'marqueeReverse 22s linear infinite',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '44px',
      },
      boxShadow: {
        'teal-glow': '0 0 35px -5px rgba(0, 158, 150, 0.45)',
        'teal-subtle': '0 10px 30px -10px rgba(0, 158, 150, 0.25)',
      },
    },
  },
  plugins: [],
};
