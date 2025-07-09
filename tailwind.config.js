const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-dark-blue': '#1C274C',
        'brand-background': '#F4F6FF',
        'brand-accent-gold': '#CFAA3B',
        'brand-light-blue': '#ECEFFD',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
