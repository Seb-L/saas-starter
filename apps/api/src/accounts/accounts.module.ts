import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { Account } from './account.entity'
import { AccountModel } from './models/account.model'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Account])],
			resolvers: [
				{
					EntityClass: Account,
					DTOClass: AccountModel,
				},
			],
		}),
	],
})
export class AccountsModule {}
