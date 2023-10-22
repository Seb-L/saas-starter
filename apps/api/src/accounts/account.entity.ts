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

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}
