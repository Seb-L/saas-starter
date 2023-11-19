import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql'

import { AccountDto } from '../../accounts/dto/account.dto'

@ObjectType('webhook')
@Relation('account', () => AccountDto, { enableLookAhead: true, nullable: true, complexity: 5 })
export class WebhookDto {
	@FilterableField(() => ID)
	id: number

	@FilterableField()
	eventName: string

	@Field()
	callbackUrl: string

	@FilterableField(() => GraphQLISODateTime)
	createdDate: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedDate: Date
}
