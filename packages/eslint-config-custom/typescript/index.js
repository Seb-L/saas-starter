module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@stylistic',
		'simple-import-sort',
		'no-relative-import-paths',
		'filenames-simple',
	],
	rules: {
		'@stylistic/array-bracket-newline': ['error', { 'multiline': true }],
		'@stylistic/array-element-newline': ['error', 'consistent'],
		'@stylistic/arrow-spacing': ['error'],
		'@stylistic/block-spacing': ['error', 'always'],
		'@stylistic/brace-style': ['error'],
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/comma-spacing': ['error'],
		'@stylistic/computed-property-spacing': ['error', 'never'],
		'@stylistic/dot-location': ['error', 'property'],
		'@stylistic/func-call-spacing': ['error', 'never'],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/function-paren-newline': ['error', 'multiline'],
		'@stylistic/indent': [
			'error', 'tab', {
				'ignoredNodes': [
					'FunctionExpression > .params[decorators.length > 0]',
					'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
					'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
				],
			},
		],
		'@stylistic/key-spacing': ['error'],
		'@stylistic/keyword-spacing': ['error'],
		'@stylistic/lines-around-directive': ['error'],
		'@stylistic/lines-between-class-members': ['error'],
		// '@stylistic/lines-between-class-members': ['error', { enforce: [{ blankLine: 'never', prev: 'method', next: 'method' }] }],
		'@stylistic/multiline-ternary': ['error'],
		'@stylistic/newline-before-return': ['error'],
		'@stylistic/newline-per-chained-call': ['error'],
		'@stylistic/no-mixed-spaces-and-tabs': ['error'],
		'@stylistic/no-multi-spaces': ['error'],
		'@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'@stylistic/no-spaced-func': ['error'],
		'@stylistic/no-trailing-spaces': ['error'],
		'@stylistic/nonblock-statement-body-position': ['error'],
		'@stylistic/object-curly-newline': ['error', { 'multiline': true }],
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{ blankLine: 'always', prev: '*', next: ['function', 'return', 'multiline-const'] },
			{
				blankLine: 'always',
				prev: ['case', 'default', 'block-like', 'multiline-block-like', 'multiline-const'],
				next: '*',
			},
			{ blankLine: 'always', prev: ['multiline-expression'], next: ['multiline-expression'] },
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: ['expression'] },
		],
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/space-before-blocks': ['error'],
		'@stylistic/space-before-function-paren': ['error'],
		'@stylistic/space-in-parens': ['error'],
		'@stylistic/spaced-comment': ['error'],
		'@stylistic/switch-colon-spacing': ['error'],
		'@stylistic/template-curly-spacing': ['error'],
		'@stylistic/type-annotation-spacing': ['error', { 'before': false, 'after': true }],

		'filenames-simple/naming-convention': [
			'error',
			{ rule: 'kebab-case', excepts: ['index', '\\[.*\\]', '_.*'] },
		],
		'no-console': 'warn',
		'no-debugger': 'warn',
		'no-nested-ternary': 'error',
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],

		// Import
		'import/order': 'off',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^@?\\w'], // libs
					['^@/', '^~/'], // absolute path
					['^', '^\\.'], // relative path
				],
			},
		],
		'import/newline-after-import': 1,
		'import/no-duplicates': 1,
		'no-implicit-coercion': ['warn', { boolean: true, string: false, allow: ['!!'] }],
	},
}
