import { InputType, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@ObjectType()
@Entity()
export class Plan {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column({ type: 'int', default: 0 })
	price: number

	@Column()
	stripeProductId: string

	@Column({ default: true })
	isActive: boolean

	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	createdAt: Date

	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP(6)',
		onUpdate: 'CURRENT_TIMESTAMP(6)',
	})
	updatedAt: Date
}

@InputType()
export class PlanInput {
	name: string

	price: number

	stripeProductId: string
}
