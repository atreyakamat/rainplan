/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f7f2',
          100: '#eceee5',
          200: '#d9decc',
          300: '#bfc8aa',
          400: '#a2ae82',
          500: '#86945f',
          600: '#6a784a',
          700: '#556b2f', // Primary accent
          800: '#435228',
          900: '#394524',
          950: '#1d2411',
        },
        beige: {
          50: '#fdfcfb',
          100: '#fbf9f4',
          200: '#f4efe4',
          300: '#e9dfcc',
          400: '#d9c6a6',
          500: '#c7ab7f',
          600: '#b48d5d',
          700: '#9b734b',
          800: '#7f5e41',
          900: '#684d37',
          950: '#37281c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
