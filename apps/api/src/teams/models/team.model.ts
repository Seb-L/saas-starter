import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { ProjectModel } from '../../projects/models/project.model'
import { UserModel } from '../../users/models/user.model'

@ObjectType('teams')
@Relation('users', () => UserModel)
@Relation('projects', () => ProjectModel)
export class TeamModel {
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
