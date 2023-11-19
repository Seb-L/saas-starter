import {
	DataSource,
	EntitySubscriberInterface,
	EventSubscriber,
	InsertEvent,
	RemoveEvent,
	UpdateEvent,
} from 'typeorm'

import { WebhooksService } from '../webhooks/webhooks.service'
import { User } from './user.entity'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
	constructor (
		dataSource: DataSource,
		private webhookService: WebhooksService
	) {
		dataSource.subscribers.push(this)
	}

	listenTo () {
		return User
	}

	afterInsert (event: InsertEvent<User>) {
		this.webhookService.callWebhook({
			name: 'user.insert',
			accountId: event.entity.account.id,
			payload: event.entity,
		})
	}

	afterUpdate (event: UpdateEvent<User>) {
		this.webhookService.callWebhook({
			name: 'user.update',
			accountId: event.entity.account.id,
			payload: event.entity,
		})
	}

	afterRemove (event: RemoveEvent<User>) {
		this.webhookService.callWebhook({
			name: 'user.remove',
			accountId: event.entity.account.id,
			payload: event.entity,
		})
	}
}
