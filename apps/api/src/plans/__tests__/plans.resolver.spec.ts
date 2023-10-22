import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { Plan } from '../plan.entity'
import { PlansResolver } from '../plans.resolver'
import { PlansService } from '../plans.service'

describe('PlansResolver', () => {
	let resolver: PlansResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				PlansService,
				PlansResolver,
				{ provide: getRepositoryToken(Plan), useValue: {} },
			],
		}).compile()

		resolver = module.get<PlansResolver>(PlansResolver)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})
})
