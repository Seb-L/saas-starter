import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, Relation, UnPagedRelation } from '@ptc-org/nestjs-query-graphql'

import { AccountModel } from '../../accounts/models/account.model'
import { TeamModel } from '../../teams/models/team.model'

@ObjectType('user')
@Relation('account', () => AccountModel, { enableLookAhead: true, nullable: true, complexity: 5 })
@UnPagedRelation('teams', () => TeamModel, { nullable: true, complexity: 5 })
export class UserModel {
	@FilterableField(() => ID)
	id: number

	@FilterableField()
	email: string

	@FilterableField()
	firstName?: string

	@FilterableField()
	lastName?: string

	@FilterableField()
	isActive: boolean

	@FilterableField(() => GraphQLISODateTime)
	createdDate: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedDate: Date
}
