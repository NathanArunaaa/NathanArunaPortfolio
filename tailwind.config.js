module.exports = {
	content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
	},
  daisyui: {
    themes: ["night"],
  },
  plugins: [
    require('daisyui'),
  ],
}
