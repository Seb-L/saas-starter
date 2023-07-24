import { Field, InputType, ObjectType } from '@nestjs/graphql'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { User } from '../users/user.model'

@ObjectType()
@Entity()
export class Team {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@ManyToMany(() => User)
	@JoinColumn()
	@Field(type => User)
	users?: User[]

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
// export class UserInput extends PickType(User, [
// 	'firstName',
// 	'lastName',
// ] as const) {}
export class TeamInput {
	name: string
}
