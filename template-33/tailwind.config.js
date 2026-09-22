/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#B4EE58',
          'lime-dark': '#92D136',
          orange: '#F16522',
          'orange-light': '#FF8A50',
          dark: '#141814',
          gray: '#5C635B',
          canvas: '#E9EBE8',
          card: '#FFFFFF',
          subtle: '#F4F5F2',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'card': '0 2px 14px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'popover': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
