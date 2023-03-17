const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [],
	mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				b1: '#FFB8E2',
				b2: '#E7AEE6',
				b3: '#CEA3EB',
				b4: '#B699EF',
				b5: '#9D8EF3',
				primary: {
					light: '#4f4393',
					DEFAULT: '#3b2e87',
					dark: '#2f256c'
				},
				secondary: {
					light: '#b9528f',
					DEFAULT: '#b13f82',
					dark: '#9f3975'
				}
			},

			screens: {
        '2xl': '1536px'
      }
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
