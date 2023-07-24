/* eslint-disable filenames-simple/naming-convention */
module.exports = {
	root: true,
	extends: ['eslint-config-custom'],
	settings: {
		next: { rootDir: ['apps/*/'] },
		tailwindcss: {
			config: require('./packages/ui/tailwind.config'),
			classRegex: '(C|c)lassName$',
			callees: ['classnames', 'clsx', 'cn'],
		},
	},
}
