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
      },
      colors: {
        boltshift: {
          purple: '#5E43F3',
          'purple-dark': '#4D32E0',
          'purple-light': '#745DF7',
          orange: '#FB923C',
          'orange-dark': '#EA580C',
          blue: '#3B82F6',
          canvas: '#EBECEF',
          card: '#FFFFFF',
          border: '#EAECEF',
        },
      },
      borderRadius: {
        '2.5xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'boltshift': '0 2px 12px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.02)',
        'boltshift-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.03)',
        'boltshift-purple': '0 12px 28px -4px rgba(94, 67, 243, 0.35)',
      },
    },
  },
  plugins: [],
};
