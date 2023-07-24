import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { User } from '../user.model'
import { UsersResolver } from '../users.resolver'
import { UsersService } from '../users.service'

describe('UsersResolver', () => {
	let resolver: UsersResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UsersService,
				UsersResolver,
				{ provide: getRepositoryToken(User), useValue: {} },
			],
		}).compile()

		resolver = module.get<UsersResolver>(UsersResolver)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})
})
