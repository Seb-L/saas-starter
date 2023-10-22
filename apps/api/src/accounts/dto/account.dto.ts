import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { PlanDto } from '../../plans/dto/plan.dto'

@ObjectType('account')
@Relation('plan', () => PlanDto, {
	enableLookAhead: true,
	update: { enabled: true },
})
export class AccountDto {
	@IDField(() => ID)
	id: string

	@FilterableField()
	isActive: boolean

	@FilterableField(() => GraphQLISODateTime)
	createdAt: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedAt: Date
}
