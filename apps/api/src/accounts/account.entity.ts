import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn, ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Plan } from '../plans/plan.entity'
import { Webhook } from '../webhooks/webhook.entity'

export class AccountFeatureFlags {
	specialFeature: boolean = false
}

@Entity()
export class Account {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ default: true })
	isActive: boolean

	@Column('simple-json', { default: new AccountFeatureFlags() })
	flags: AccountFeatureFlags

	@OneToOne(() => Plan, { nullable: true })
	@JoinColumn()
	plan?: Plan

	@ManyToOne(() => Webhook, { nullable: true })
	@JoinColumn()
	webhooks?: Webhook[]

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}
