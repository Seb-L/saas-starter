import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { lastValueFrom } from 'rxjs'
import { Repository } from 'typeorm'

import { Webhook, WebhookName } from './webhook.entity'

@Injectable()
export class WebhooksService {
	constructor (
		@InjectRepository(Webhook) private webhooksRepository: Repository<Webhook>,
		private httpService: HttpService,
	) {}

	async callWebhook ({ name, accountId, payload }: { name: WebhookName, accountId: string, payload: any }): Promise<any> {
		const webhook = await this.webhooksRepository.findOne({ where: { name, accountId } })

		if (webhook && webhook.callbackUrl) {
			const res = this.httpService.post(webhook.callbackUrl, {
				webhook: name,
				payload,
			})

			return lastValueFrom(res)
		}
	}
}
