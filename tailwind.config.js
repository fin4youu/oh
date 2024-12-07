/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'snow': 'snow 10s linear infinite',
      },
      keyframes: {
        snow: {
          '0%': { transform: 'translateY(-10vh)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};