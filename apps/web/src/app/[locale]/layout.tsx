import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'
import { MainNav } from 'ui/components/main-nav'

import '~/styles/globals.css'
import { defaultLocale, getMessages, I18nProps } from '../../i18n'
import { AppProviders } from './_components/app-providers'

export { generateMetadata } from '../../i18n'

const inter = Inter({ subsets: ['latin'] })

const LocaleLayout = async ({ children, params: { locale = defaultLocale } }: PropsWithChildren<I18nProps>) => {
	const messages = await getMessages(defaultLocale)

	return (
		<html
			className='h-full'
			lang={locale}
		>
			<body className={clsx(inter.className, 'flex h-full flex-col')}>
				<AppProviders>
					<NextIntlClientProvider
						locale={defaultLocale}
						messages={messages}
					>
						<MainNav/>

						{children}
					</NextIntlClientProvider>
				</AppProviders>
			</body>
		</html>
	)
}

export default LocaleLayout
