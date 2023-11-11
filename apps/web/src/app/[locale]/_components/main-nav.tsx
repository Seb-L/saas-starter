'use client'

import Link from 'next/link'
import { PropsWithChildren } from 'react'

export const MainNav = ({ children }: PropsWithChildren) => {
	return (
		<div className='sticky top-0 z-20 flex h-[60px] shrink-0 flex-row items-center justify-between border-b bg-white px-8'>
			<Link href='/'>
				BRAND NAME
			</Link>

			<div>
				{children}
			</div>
		</div>
	)
}
