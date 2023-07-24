import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Team, TeamInput } from './team.model'
import { TeamsService } from './teams.service'

@Resolver(() => Team)
export class TeamsResolver {
	constructor (private teamsService: TeamsService) {}

	@Query(() => Team)
	async team (@Args('id') id: number) {
		const team = await this.teamsService.findOne(id)

		if (!team) throw new NotFoundException(id)

		return team
	}

	@Query(() => [Team])
	teams () {
		return this.teamsService.findAll()
	}

	@Mutation(() => Team)
	teamCreate (@Args('team') team: TeamInput) {
		return this.teamsService.create(team)
	}

	@Mutation(() => Team)
	teamUpdate (
		@Args({ name: 'id', type: () => Int }) id: number,
		@Args('team') team: TeamInput,
	) {
		return this.teamsService.update(id, team)
	}

	@Mutation(() => Team)
	teamDelete (@Args({ name: 'id', type: () => Int }) id: number) {
		return this.teamsService.remove(id)
	}
}
