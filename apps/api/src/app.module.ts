import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module'
import { ComplexityPlugin } from './complexity.plugin'
import { DbModule } from './db/db.module'
import { PlansModule } from './plans/plans.module'
import { ProjectsModule } from './projects/projects.module'
import { TeamsModule } from './teams/teams.module'
import { UsersModule } from './users/users.module'
import { WebhooksModule } from './webhooks/webhooks.module'

@Module({
	providers: [ComplexityPlugin],
	imports: [
		ConfigModule.forRoot(),
		DbModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'src/schema.gql',
			introspection: true,
		}),
		AccountsModule,
		AuthModule,
		PlansModule,
		TeamsModule,
		UsersModule,
		ProjectsModule,
		WebhooksModule,
	],
})
export class AppModule {}
