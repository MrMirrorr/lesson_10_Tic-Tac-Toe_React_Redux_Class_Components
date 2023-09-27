/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		minHeight: {
			'1/2': '50vh',
		},

		extend: {
			spacing: {
				300: '300px',
			},
		},
	},
	plugins: [],
};
