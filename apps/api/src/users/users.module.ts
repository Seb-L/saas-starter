import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { WebhooksModule } from '../webhooks/webhooks.module'
import { UserModel } from './models/user.model'
import { User } from './user.entity'
import { UserSubscriber } from './user.subscriber'

@Module({
	imports: [
		WebhooksModule,
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([User])],
			resolvers: [
				{
					EntityClass: User,
					DTOClass: UserModel,
				},
			],
		}),
	],
	providers: [UserSubscriber],
})
export class UsersModule {}
