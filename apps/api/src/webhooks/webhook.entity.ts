import {
	BaseEntity,
	Column, CreateDateColumn,
	Entity,
	Index,
	ManyToOne,
	PrimaryGeneratedColumn, RelationId,
	UpdateDateColumn,
} from 'typeorm'

import { Account } from '../accounts/account.entity'

export type WebhookName =
	| 'user.insert'
	| 'user.update'
	| 'user.remove'

@Entity()
export class Webhook extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Index()
	@Column()
	name: WebhookName

	@Column()
	callbackUrl: string

	@Column()
	@RelationId((webhook: Webhook) => webhook.account)
	accountId: string

	@ManyToOne(() => Account, (account) => account.webhooks)
	account: Account

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}
