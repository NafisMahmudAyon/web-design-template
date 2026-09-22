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
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brandBlue: {
          DEFAULT: '#2B85FF',
          hover: '#1A74EE',
          dim: 'rgba(43, 133, 255, 0.15)',
        },
        accentCoral: '#FF6B4A',
        accentLime: '#D4E738',
        accentCyan: '#38BDF8',
        accentAmber: '#FBBF24',
        accentPurple: '#A855F7',
        dashboard: {
          canvas: '#0B121C',
          frame: '#1A2230',
          panel: '#151D2A',
          cell: '#1D2636',
          cellHover: '#232E40',
          border: '#283549',
          borderLight: '#324158',
          textMuted: '#8B9CB2',
        },
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'panel': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        'blue-glow': '0 0 25px rgba(43, 133, 255, 0.45)',
        'coral-glow': '0 0 20px rgba(255, 107, 74, 0.35)',
      },
    },
  },
  plugins: [],
};
