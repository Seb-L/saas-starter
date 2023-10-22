import z from 'zod'

import { serverSchema } from './src/env.mjs'

// Use type safe message keys with `next-intl`
type Messages = typeof import('../../packages/locales/en.json')

declare interface IntlMessages extends Messages {
}

type EnvSchemaType = z.infer<typeof serverSchema>

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvSchemaType {}
	}
}
