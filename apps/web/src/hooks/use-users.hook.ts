import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'

import { clientEnv } from '../env.mjs'
import { graphql } from '../libs/gql'

const allUsers = graphql(`
	query allUsers {
		users {
			email
		}
	}
`)

export const useUsers = () => useQuery({
	queryKey: ['users'],
	queryFn: async () => request(
		clientEnv.NEXT_PUBLIC_API_BASE_URL,
		allUsers,
	),
})
