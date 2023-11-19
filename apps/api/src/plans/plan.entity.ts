import { InputType, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity, Index,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

export interface PlanFeatures {
	teams?: boolean
	webhooks?: boolean
}

@ObjectType()
@Entity()
export class Plan {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Index()
	@Column()
	name: string

	@Column({ type: 'int', default: 0 })
	price: number

	@Column()
	stripeProductId: string

	@Column({ default: true })
	isActive: boolean

	@Column('simple-json', { default: {} })
	features: PlanFeatures

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}
