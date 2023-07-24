import { PropsWithChildren } from 'react'
import { Sidebar } from 'ui'

import '@/styles/globals.css'

const MarketingLayout = async ({ children }: PropsWithChildren) => {
	return (
		<main className='flex h-full flex-row bg-base-200'>
			<Sidebar/>

			<div className='flex-1 overflow-y-auto p-10'>
				{children}
			</div>
		</main>
	)
}

export default MarketingLayout
