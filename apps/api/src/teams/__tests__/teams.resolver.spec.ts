import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { Team } from '../team.model'
import { TeamsResolver } from '../teams.resolver'
import { TeamsService } from '../teams.service'

describe('TeamsResolver', () => {
	let resolver: TeamsResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				TeamsService,
				TeamsResolver,
				{ provide: getRepositoryToken(Team), useValue: {} },
			],
		}).compile()

		resolver = module.get<TeamsResolver>(TeamsResolver)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})
})
