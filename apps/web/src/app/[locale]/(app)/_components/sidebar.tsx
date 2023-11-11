import { Settings } from 'lucide-react'
import Link from 'next/link'

export const Sidebar = () => {
	return (
		<div className='w-[250px] overflow-y-auto border-r p-4'>
			<Link
				href='/settings'
				className='flex w-full flex-row gap-2'
			>
				<Settings />

				Settings
			</Link>
		</div>
	)
}
