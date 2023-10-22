import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { beforeEach, describe, expect, it } from 'vitest'

import { Account } from '../../accounts/account.entity'
import { User } from '../../users/user.entity'
import { AuthResolver } from '../auth.resolver'
import { AuthService } from '../auth.service'

describe('AuthService', () => {
	let service: AuthService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthResolver,
				AuthService,
				JwtService,
				// DataSource,
				{ provide: DataSource, useValue: {} },
				{ provide: getRepositoryToken(User), useValue: {} },
				{ provide: getRepositoryToken(Account), useValue: {} },
			],
		}).compile()

		service = module.get<AuthService>(AuthService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
