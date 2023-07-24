import { Field, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Plan } from '../plans/plan.model'

@ObjectType()
@Entity()
export class Account {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ default: true })
	isActive: boolean

	@OneToOne(() => Plan, { nullable: true })
	@JoinColumn()
	@Field(() => Plan)
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
