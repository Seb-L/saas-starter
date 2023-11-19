import { Test, TestingModule } from '@nestjs/testing'
import { beforeEach, describe, expect, it } from 'vitest'

import { WebhooksService } from './webhooks.service'

describe('WebhooksService', () => {
	let service: WebhooksService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({ providers: [WebhooksService] }).compile()

		service = module.get<WebhooksService>(WebhooksService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
