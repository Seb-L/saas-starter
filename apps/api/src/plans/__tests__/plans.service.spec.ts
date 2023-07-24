import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { Plan } from '../plan.model'
import { PlansService } from '../plans.service'

describe('PlanService', () => {
	let service: PlansService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				PlansService,
				{ provide: getRepositoryToken(Plan), useValue: {} },
			],
		}).compile()

		service = module.get<PlansService>(PlansService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
