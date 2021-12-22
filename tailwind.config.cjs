module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#626369',
          700: '#4c4d53',
          800: '#35363E',
          900: '#1f2028'
        }
      },
      fontFamily: {
        body: [
          'OpenSans',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ]
      }
    },
  },
  plugins: [],
};
