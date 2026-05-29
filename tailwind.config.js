/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe2',
          200: '#d3d9c6',
          300: '#b5bfa0',
          400: '#96a47b',
          500: '#7a8960',
          600: '#5f6b4a',
          700: '#4b543b',
          800: '#3e4533',
          900: '#353b2d',
        },
        gold: {
          50: '#fdf9ef',
          100: '#f9efd3',
          200: '#f2dba7',
          300: '#e8c271',
          400: '#d4a43e',
          500: '#c5912a',
          600: '#a67223',
          700: '#87551f',
          800: '#6e441f',
          900: '#5b391d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf0dc',
          300: '#f5e3c1',
          400: '#eed2a0',
          500: '#e6be7e',
        },
        marble: '#faf9f6',
      },
      fontFamily: {
        script: ['Great Vibes', 'cursive'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'petal-fall': 'petalFall 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(197,145,42,0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(197,145,42,0.4)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'marble': "url('/marble-texture.svg')",
        'gradient-gold': 'linear-gradient(135deg, #fdf9ef 0%, #f9efd3 50%, #e8c271 100%)',
      },
    },
  },
  plugins: [],
};
