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
        ecoDark: {
          900: '#121417',
          800: '#17191c',
          700: '#212529',
          600: '#2d3238',
        },
        ecoLight: {
          100: '#f4f5f6',
          200: '#eceee0',
          300: '#e2e5e8',
        },
        ecoGreen: {
          50: '#f0fdf4',
          100: '#e8f5e9',
          500: '#22c55e',
          600: '#16a34a',
          800: '#166534',
        }
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'dark-glow': '0 20px 50px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
