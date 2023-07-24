import createMiddleware from 'next-intl/middleware'

import { defaultLocale, locales } from './i18n'

export default createMiddleware({
	locales,
	defaultLocale,
})

export const config = {
// Skip all paths that should not be internationalized
	matcher: ['/((?!api|_next|.*\\..*).*)'],
}
