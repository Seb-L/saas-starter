import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { AccountsResolver } from '../accounts.resolver'
import { AccountsService } from '../accounts.service'
import { Account } from '../dto/account.dto'

describe('AccountsResolver', () => {
	let resolver: AccountsResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AccountsService,
				AccountsResolver,
				{ provide: getRepositoryToken(Account), useValue: {} },
			],
		}).compile()

		resolver = module.get<AccountsResolver>(AccountsResolver)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})
})
