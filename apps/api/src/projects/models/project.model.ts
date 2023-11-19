import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { FilterableField, IDField, Relation } from '@ptc-org/nestjs-query-graphql'

import { TeamModel } from '../../teams/models/team.model'
import { UserModel } from '../../users/models/user.model'

@ObjectType('projects')
@Relation('users', () => UserModel)
@Relation('teams', () => TeamModel)
export class ProjectModel {
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
