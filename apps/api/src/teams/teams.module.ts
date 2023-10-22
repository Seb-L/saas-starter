import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { TeamDto } from './dto/team.dto'
import { TeamCreateDto } from './dto/team-create.dto'
import { Team } from './team.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Team])],
			resolvers: [
				{
					EntityClass: Team,
					DTOClass: TeamDto,
					CreateDTOClass: TeamCreateDto,
				},
			],
		}),
	],
})
export class TeamsModule {}
