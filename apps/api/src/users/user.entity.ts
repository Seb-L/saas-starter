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

import { Account } from '../accounts/account.entity'
import { Team } from '../teams/team.entity'

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
	account?: Account

	@ManyToMany(() => Team, { nullable: true })
	@JoinTable()
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
