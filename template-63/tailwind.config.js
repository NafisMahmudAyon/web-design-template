/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brandCanvas: '#4A533E',
        surfaceGray: '#F4F4F4',
        charcoalDark: '#202020',
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 60px -15px rgba(59, 130, 246, 0.4)',
      },
    },
  },
  plugins: [],
};
