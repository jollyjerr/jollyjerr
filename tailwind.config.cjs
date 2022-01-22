module.exports = {
  content: ['./src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        primary: '#258ED0',
        secondary: '#d0258b',
        gray: {
          600: '#88898d',
          700: '#6b6c71',
          800: '#3e3f46',
          900: '#1f2028'
        }
      },
      fontFamily: {
        body: [
          'Roboto',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
