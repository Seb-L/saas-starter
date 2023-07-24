import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		swc.vite({
			// Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file
			module: { type: 'es6' },
		}),
	],
	test: {
		root: './',
		include: ['**/*.e2e-spec.ts'],
		alias: {
			'@src': './src',
			'@test': './test',
		},
	},
	resolve: {
		alias: {
			'@src': './src',
			'@test': './test',
		},
	},
})
