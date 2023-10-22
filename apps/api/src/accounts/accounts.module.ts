import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { Account } from './account.entity'
import { AccountDto } from './dto/account.dto'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Account])],
			resolvers: [
				{
					EntityClass: Account,
					DTOClass: AccountDto,
				},
			],
		}),
	],
})
export class AccountsModule {}
