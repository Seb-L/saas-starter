import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { Team } from '../team.model'
import { TeamsService } from '../teams.service'

describe('TeamService', () => {
	let service: TeamsService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				TeamsService,
				{ provide: getRepositoryToken(Team), useValue: {} },
			],
		}).compile()

		service = module.get<TeamsService>(TeamsService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
