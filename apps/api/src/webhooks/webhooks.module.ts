import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { WebhookDto } from './dto/webhook.dto'
import { Webhook } from './webhook.entity'
import { WebhooksService } from './webhooks.service'

@Module({
	imports: [
		HttpModule,
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Webhook])],
			resolvers: [
				{
					EntityClass: Webhook,
					DTOClass: WebhookDto,
				},
			],
		}),
	],
	providers: [WebhooksService],
	exports: [WebhooksService],
})
export class WebhooksModule {}
