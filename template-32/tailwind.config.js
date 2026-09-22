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
        olive: {
          50: '#F5F7F3',
          100: '#E9EFE6',
          200: '#D5E0CF',
          300: '#B6CCA9',
          400: '#8FB07C',
          500: '#679051',
          600: '#52734D',
          700: '#405B3A',
          800: '#32482E',
          900: '#263723',
          950: '#141D12',
        },
        sage: {
          50: '#F7F8F5',
          100: '#EEF0EA',
          200: '#DFE3D8',
          300: '#CBD1C1',
          400: '#B2BBA4',
          500: '#949F83',
        },
        chart: {
          gold: '#E4BE52',
          purple: '#C7A1C7',
          olive: '#52734D',
          lime: '#8CB86C',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'card': '0 2px 14px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
