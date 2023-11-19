import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { PlanModel } from '../../plans/models/plan.model'

@ObjectType('account')
@Relation('plan', () => PlanModel, {
	enableLookAhead: true,
	update: { enabled: true },
})
export class AccountModel {
	@IDField(() => ID)
	id: string

	@FilterableField()
	isActive: boolean

	@FilterableField(() => GraphQLISODateTime)
	createdDate: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedDate: Date
}
