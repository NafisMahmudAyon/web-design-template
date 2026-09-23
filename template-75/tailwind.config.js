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
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        casala: {
          teal: '#0B6577',
          'teal-dark': '#084B58',
          'teal-light': '#EBF5F7',
          slate: '#545250',
          charcoal: '#1A1D20',
          body: '#60646C',
          light: '#F8F9FA',
          soft: '#F3F4F6',
          border: '#E5E7EB',
          blue: '#0066FF',
        },
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0,0,0,0.06)',
        'elevated': '0 20px 40px rgba(0,0,0,0.08)',
        'subtle': '0 2px 10px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};
