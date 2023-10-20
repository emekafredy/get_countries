/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '0px',
      'sm': '375px',
      'md': '768px',
      'lg': '960px',
      'xl': '1440px',
    },
    colors: {
      'white': {
        100: '#FFFFFF',
        200: 'hsl(0, 0%, 100%)',
        300: '#FAFAFA'
      },
      'black': '#000000',
      'dark-blue': {
        100: 'hsl(209, 23%, 22%)',
        200: 'hsl(207, 26%, 17%)',
        300: 'hsl(200, 15%, 8%)'
      },
      'gray': {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(0, 0%, 52%)'
      }
    },
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    },
    fontSize: {
      sm: '14px',
      m: '16px',
      md: '18px',
      lg: '24px',
      xl: '32px'
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extrablack: '1000'
    },
    extend: {},
  },
  plugins: [],
}

