import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { ProjectDto } from '../../projects/dto/project.dto'
import { UserDto } from '../../users/dto/user.dto'

@ObjectType('teams')
@Relation('users', () => UserDto)
@Relation('projects', () => ProjectDto)
export class TeamDto {
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
