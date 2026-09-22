/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        neon: {
          DEFAULT: '#25E575',
          hover: '#1fd368',
          glow: 'rgba(37, 229, 117, 0.4)',
          dim: 'rgba(37, 229, 117, 0.15)',
        },
        dark: {
          bg: '#070908',
          card: '#0D1410',
          cardHover: '#121D16',
          border: '#1B2B1F',
          muted: '#8A998E',
        },
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'neon': '0 0 25px -5px rgba(37, 229, 117, 0.35)',
        'neon-lg': '0 0 50px -10px rgba(37, 229, 117, 0.45)',
        'neon-card': '0 0 35px -8px rgba(37, 229, 117, 0.25)',
      },
    },
  },
  plugins: [],
};
