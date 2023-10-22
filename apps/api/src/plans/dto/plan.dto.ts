import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql'

@ObjectType('plan')
export class PlanDto {
	@IDField(() => ID)
	id: string

	@FilterableField()
	name: string

	@FilterableField()
	price: number

	@Field()
	stripeProductId: string

	@FilterableField()
	isActive: boolean

	@FilterableField(() => GraphQLISODateTime)
	createdDate: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedDate: Date
}
