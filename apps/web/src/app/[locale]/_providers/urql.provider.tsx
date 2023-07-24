'use client'

import { ssrExchange, UrqlProvider as _UrqlProvider } from '@urql/next'
import { PropsWithChildren, useMemo } from 'react'

import { getGqClient } from '../../../lib/get-gq-client'

export const UrqlProvider = ({ children }: PropsWithChildren) => {
	const config = useMemo(
		() => ({ client: getGqClient(), ssr: ssrExchange() }),
		[]
	)

	return (
		<_UrqlProvider {...config}>
			{children}
		</_UrqlProvider>
	)
}
