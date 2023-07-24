module.exports = {
	plugins: ['turbo'],
	extends: ['plugin:tailwindcss/recommended'],
	settings: { tailwindcss: { classRegex: '(c|C)lassName$' } },
}
