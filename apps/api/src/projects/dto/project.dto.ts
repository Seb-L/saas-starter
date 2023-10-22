import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { TeamDto } from '../../teams/dto/team.dto'
import { UserDto } from '../../users/dto/user.dto'

@ObjectType('projects')
@Relation('users', () => UserDto)
@Relation('teams', () => TeamDto)
export class ProjectDto {
	@IDField(() => ID)
	id: string

	@FilterableField()
	name: string

	@FilterableField()
	slug: string

	@FilterableField(() => GraphQLISODateTime)
	createdDate: Date

	@FilterableField(() => GraphQLISODateTime)
	updatedDate: Date
}
