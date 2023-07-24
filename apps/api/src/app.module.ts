import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from './accounts/account.model'
import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module'
import { Plan } from './plans/plan.model'
import { PlansModule } from './plans/plans.module'
import { Team } from './teams/team.model'
import { TeamsModule } from './teams/teams.module'
import { User } from './users/user.model'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [Account, Plan, Team, User],
			ssl: true,
			synchronize: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'src/schema.gql',
			// resolvers: { JSON: GraphQLJSON },
		}),
		AccountsModule,
		AuthModule,
		PlansModule,
		TeamsModule,
		UsersModule,
	],
})
export class AppModule {}
