import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { TeamModel } from './models/team.model'
import { TeamCreateModel } from './models/team-create.model'
import { Team } from './team.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Team])],
			resolvers: [
				{
					EntityClass: Team,
					DTOClass: TeamModel,
					CreateDTOClass: TeamCreateModel,
				},
			],
		}),
	],
})
export class TeamsModule {}
