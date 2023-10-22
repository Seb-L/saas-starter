import { PropsWithChildren } from 'react'
import { SiteFooter } from 'ui/marketing/components/site-footer'

import '~/styles/globals.css'

const AppLayout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<main className='flex w-full flex-col bg-base-100'>
				{children}
			</main>

			<SiteFooter/>
		</>
	)
}

export default AppLayout
