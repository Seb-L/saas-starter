import { InputType, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity, Index,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

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

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date
}

@InputType()
export class PlanInput {
	name: string

	price: number

	stripeProductId: string
}
