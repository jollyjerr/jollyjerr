module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#f5f5e9',
          700: '#873f49',
          800: '#0b1c47',
          900: '#040a18'
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
    }
  },
  plugins: [],
};
