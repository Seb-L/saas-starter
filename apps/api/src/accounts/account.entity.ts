import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Plan } from '../plans/plan.entity'

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

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}
