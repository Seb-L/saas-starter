import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Team, TeamInput } from './team.model'

@Injectable()
export class TeamsService {
	constructor (@InjectRepository(Team) private teamsRepository: Repository<Team>) {}

	create (createTeamDto: TeamInput) {
		return this.teamsRepository.save(createTeamDto)
	}

	findAll () {
		return this.teamsRepository.find()
	}

	findOne (id: number) {
		return this.teamsRepository.findOneBy({ id })
	}

	async update (id: number, updateTeamDto: TeamInput) {
		const team = await this.teamsRepository.findOneBy({ id })

		if (team) {
			return this.teamsRepository.save({
				id,
				...updateTeamDto,
			})
		} else {
			return new NotFoundException()
		}
	}

	async remove (id: number) {
		await this.teamsRepository.delete(id)
	}
}
