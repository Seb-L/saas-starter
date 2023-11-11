import Link from 'next/link'
import { Button } from 'ui/components/button'

const Page = () => {
	return (
		<>
			<div
				className='relative flex h-[calc(100vh-60px)] flex-col items-center justify-center'
				style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}
			>
				<div className='absolute inset-0 bg-black/50'></div>

				<div className='relative z-10 mx-auto max-w-md text-center text-white'>
					<h1 className='mb-5 text-center text-5xl font-bold'>
						Hello there
					</h1>

					<p className='mb-5 text-center'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae
						et a id nisi.
					</p>

					<Button asChild>
						<Link href='/dashboard'>
							Get Started
						</Link>
					</Button>
				</div>
			</div>

			<div className='flex flex-col items-center justify-center gap-8 p-24'>
				<p className='mb-5 max-w-md text-center'>
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
					excepturi exercitationem quasi. In deleniti eaque aut repudiandae
					et a id nisi.
				</p>

				<Button asChild>
					<Link href='/dashboard'>
						Get Started
					</Link>
				</Button>
			</div>
		</>
	)
}

export default Page
