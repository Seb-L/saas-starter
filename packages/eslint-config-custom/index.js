module.exports = {
	plugins: ['turbo'],
	extends: [
		'plugin:storybook/recommended',
		'plugin:json/recommended',
		'./typescript',
		'./react',
		'./tailwind',
		'./testing',
	],
}
