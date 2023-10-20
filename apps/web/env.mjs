import z from 'zod'

const clientSchema = z.object({
	// API Base Url
	NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const serverSchema = z.object({})

export const clientEnv = clientSchema.parse(process.env)
export const serverEnv = clientSchema.merge(serverSchema).parse(process.env)
