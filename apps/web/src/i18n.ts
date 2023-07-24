import { notFound } from 'next/navigation'
import { createTranslator } from 'next-intl'

export interface I18nProps {
	params: { locale: string }
}

export const defaultLocale = 'en'
export const locales = ['en', 'fr']

export const getMessages = async (locale: string) => {
	try {
		return (await import(`locales/${locale}.json`)).default
	} catch (error) {
		notFound()
	}
}

export const generateStaticParams = async () => {
	return locales.map(locale => ({ locale }))
}

export const generateMetadata = async ({ params: { locale } }: I18nProps) => {
	const messages = await getMessages(locale)

	// You can use the core (non-React) APIs when you have to use next-intl
	// outside of components. Potentially this will be simplified in the future
	// (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
	const t = createTranslator({ locale, messages })

	return {}
}
