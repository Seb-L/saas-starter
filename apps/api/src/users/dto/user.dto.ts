import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, Relation, UnPagedRelation } from '@ptc-org/nestjs-query-graphql'

import { AccountDto } from '../../accounts/dto/account.dto'
import { TeamDto } from '../../teams/dto/team.dto'

@ObjectType('user')
@Relation('account', () => AccountDto, { enableLookAhead: true, nullable: true })
@UnPagedRelation('teams', () => TeamDto, { nullable: true })
export class UserDto {
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
	createdAt: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedAt: Date
}
