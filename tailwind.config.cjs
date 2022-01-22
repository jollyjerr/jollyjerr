module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#BBE1FA',
          700: '#3282B8',
          800: '#0F4C75',
          900: '#1B262C'
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
    container: {
      center: true,
      padding: {
        DEFAULT: '2.25rem',
        lg: '6rem',
      },
    }
  },
  plugins: [],
};
