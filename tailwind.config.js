/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',  // Your HTML file
    './src/**/*.{js,ts,jsx,tsx,vue}',  // Source folder with JS/TS or Vue files
  ],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'slide-out': 'slideOut 0.5s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}

