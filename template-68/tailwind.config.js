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
        grocery: {
          primary: '#0c6b3e',
          primaryDark: '#085430',
          primaryHover: '#0a5b35',
          primaryLight: '#eef8f2',
          yellow: '#fed700',
          yellowHover: '#eec900',
          yellowLight: '#fff9db',
          accent: '#f8941e',
          cardBg: '#fafcfa',
          border: '#e8ece8',
          textMuted: '#6b7280',
          textDark: '#1f2937',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(12, 107, 62, 0.15)',
      },
    },
  },
  plugins: [],
};
