import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'tahiti': {
          '100': '#cffafe',
          '200': '#a5f3fc',
          '300': '#67e8f9',
          '400': '#22d3ee',
          '500': '#06b6d4',
          '600': '#0891b2',
          '700': '#0e7490',
          '800': '#155e75',
          '900': '#164e63',
        },
        'sea': {
          900: "#01141C",
          800: "#073F58",
          700: "#146C94",
          600: "#1880AF",
          500: "#19A7CE",
          400: "#3ECFF7",
          300: "#63DDFF",
          200: "#A7ECFF",
          100: "#E9FAFF"
        }

      }
    },





  },
  // plugins: [require("daisyui")],
  plugins: [],
}

