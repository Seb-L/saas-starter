import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class PlanCreateModel {
	@Field()
	name: string

	@Field()
	price: number

	@Field()
	stripeProductId?: string
}
