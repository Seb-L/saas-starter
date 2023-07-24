import { cacheExchange, createClient, fetchExchange } from '@urql/next'

export const getGqClient = () => createClient({
	url: 'https://trygql.formidable.dev/graphql/basic-pokedex',
	exchanges: [cacheExchange, fetchExchange],
	suspense: true,
})
