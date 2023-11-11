import { PropsWithChildren } from 'react'

import { Sidebar } from './_components/sidebar'

const MarketingLayout = async ({ children }: PropsWithChildren) => {
	return (
		<main className='flex h-full flex-row'>
			<Sidebar/>

			<div className='flex-1 overflow-y-auto bg-gray-50 p-10'>
				{children}
			</div>
		</main>
	)
}

export default MarketingLayout
