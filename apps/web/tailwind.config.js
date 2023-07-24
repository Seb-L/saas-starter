/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('ui/tailwind.config.js')],
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
	],
}
