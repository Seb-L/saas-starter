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

@Entity()
export class Account {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ default: true })
	isActive: boolean

	@OneToOne(() => Plan, { nullable: true })
	@JoinColumn()
	plan?: Plan

	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	createdAt: Date

	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP(6)',
		onUpdate: 'CURRENT_TIMESTAMP(6)',
	})
	updatedAt: Date
}
