module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    extend: {},
  },
  variants: {
    extend: {
        backgroundColor: ['group-focus'],
    },
  },
  plugins: [
      require('@tailwindcss/typography')
      ],
}
