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

export class UserFeatureFlags {
	specialFeature: boolean = false
}

export enum UserRole {
	SUPER_ADMIN = 'super_admin',
	OWNER = 'owner',
	ADMIN = 'admin',
	EDITOR = 'editor',
	MEMBER = 'member',
}

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

	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.MEMBER,
	})
	role: UserRole

	@Column('simple-json', { default: new UserFeatureFlags() })
	flags: UserFeatureFlags

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
