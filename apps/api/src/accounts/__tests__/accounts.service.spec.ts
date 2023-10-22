import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { AccountsService } from '../accounts.service'
import { Account } from '../dto/account.dto'

describe('AccountService', () => {
	let service: AccountsService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AccountsService,
				{ provide: getRepositoryToken(Account), useValue: {} },
			],
		}).compile()

		service = module.get<AccountsService>(AccountsService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
