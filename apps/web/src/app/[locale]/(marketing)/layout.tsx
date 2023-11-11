import { PropsWithChildren } from 'react'

import { SiteFooter } from './_components/site-footer'

const AppLayout = async ({ children }: PropsWithChildren) => {
	return (
		<>
			<main className='flex w-full flex-col'>
				{children}
			</main>

			<SiteFooter/>
		</>
	)
}

export default AppLayout
