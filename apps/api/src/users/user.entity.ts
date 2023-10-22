import { Exclude } from 'class-transformer'
import {
	Column,
	CreateDateColumn, DeleteDateColumn,
	Entity, Index,
	JoinColumn,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn, VersionColumn,
} from 'typeorm'

import { Account } from '../accounts/account.entity'
import { Team } from '../teams/team.entity'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Index({ unique: true })
	@Column()
	email: string

	@Index()
	@Column({ nullable: true })
	firstName?: string

	@Index()
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

	@ManyToMany(() => Team, team => team.users)
	teams?: Team[]

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date

	@DeleteDateColumn()
	deletedDate: Date

	@VersionColumn()
	version: number

	constructor (partial: Partial<User>) {
		Object.assign(this, partial)
	}
}
