module.exports = {
	extends: ['next'],
	plugins: ['@tanstack/query'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'@tanstack/query/exhaustive-deps': 'warn',
		'@tanstack/query/prefer-query-object-syntax': 'warn',
		'jsx-quotes': ['warn', 'prefer-single'],
		'react/jsx-one-expression-per-line': ['error'],
		'react/jsx-props-no-multi-spaces': ['error'],
		'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
		'react/jsx-first-prop-new-line': ['error', 'multiline'],
		'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],
		'react/jsx-newline': ['error'],
		'react/jsx-indent': ['error', 'tab', { indentLogicalExpressions: true }],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-sort-props': [
			'error',
			{
				callbacksLast: true,
				reservedFirst: true,
				noSortAlphabetically: true,
				// "multiline": "last"
			},
		],
		'no-restricted-imports': [
			'error',
			{ paths: ['@mui/material'] },
		],
		'react/no-multi-comp': 'warn',
	},
	parserOptions: {
		ecmaFeatures: { jsx: true },
		babelOptions: { presets: [require.resolve('next/babel')] },
	},
	settings: { react: { version: '18.2.0' } },
}
