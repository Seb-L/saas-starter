import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class PlanCreateDto {
	@Field()
	name: string

	@Field()
	price: number

	@Field()
	stripeProductId?: string
}
