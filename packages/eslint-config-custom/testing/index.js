module.exports = {
	plugins: ['testing-library'],
	rules: {
		'testing-library/await-async-queries': 'error',
		'testing-library/no-await-sync-queries': 'error',
		'testing-library/no-debugging-utils': 'warn',
		'testing-library/no-dom-import': 'off',
		'testing-library/prefer-screen-queries': 'warn',
		'testing-library/prefer-user-event': 'warn',
	},
}
