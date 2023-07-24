/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: { extend: {} },
	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	],
	daisyui: {
		themes: [
			{
				emerald: {
					...require('daisyui/src/theming/themes')['[data-theme=emerald]'],
					'base-200': '#F9F9FB',
				},
			},
			'dracula',
		],
	},
}
