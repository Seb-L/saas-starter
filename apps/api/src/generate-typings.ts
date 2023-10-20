import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: './src/schema.gql',
	generates: { '../web/src/libs/gql/': { preset: 'client' } },
}

export default config
