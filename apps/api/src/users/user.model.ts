import { Field, InputType, ObjectType } from '@nestjs/graphql'
import { Exclude } from 'class-transformer'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Account } from '../accounts/account.model'
import { Team } from '../teams/team.model'

// import { Team } from '../../team/entities/team.entity'

@ObjectType()
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	email: string

	@Column({ nullable: true })
	firstName?: string

	@Column({ nullable: true })
	lastName?: string

	@Column()
	@Exclude({ toPlainOnly: true })
	password: string

	@Column({ default: true })
	isActive: boolean

	@OneToOne(() => Account)
	@JoinColumn()
	@Field(type => Account)
	account?: Account

	@ManyToMany(() => Team, { nullable: true })
	@JoinTable()
	@Field(type => Team)
	teams?: Team[]

	@CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
	createdAt: Date

	@UpdateDateColumn({
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP(6)',
		onUpdate: 'CURRENT_TIMESTAMP(6)',
	})
	updatedAt: Date

	constructor (partial: Partial<User>) {
		Object.assign(this, partial)
	}
}

@InputType()
// export class UserInput extends PickType(User, [
// 	'firstName',
// 	'lastName',
// ] as const) {}
export class UserInput {
	firstName?: string

	lastName?: string
}
