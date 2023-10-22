import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { UserDto } from '../../users/dto/user.dto'

@ObjectType('teams')
@Relation('users', () => UserDto)
export class TeamDto {
	@IDField(() => ID)
	id: string

	@FilterableField()
	name: string

	@FilterableField(() => GraphQLISODateTime)
	createdAt: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedAt: Date
}
