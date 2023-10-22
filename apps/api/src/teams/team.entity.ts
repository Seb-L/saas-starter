import slugify from 'slugify'
import {
	BeforeInsert, BeforeUpdate,
	Column,
	CreateDateColumn,
	Entity, Index,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

import { Project } from '../projects/projects.entity'
import { User } from '../users/user.entity'

@Entity()
export class Team {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Index()
	@Column()
	name: string

	@Index()
	@Column()
	slug: string

	@ManyToMany(() => User, user => user.teams, { cascade: true, nullable: true })
	@JoinTable()
	users?: User[]

	@ManyToMany(() => Project, project => project.teams)
	projects?: Project[]

	@CreateDateColumn()
	createdDate: Date

	@UpdateDateColumn()
	updatedDate: Date

	@BeforeInsert()
	@BeforeUpdate()
	generateSlug () {
		this.slug = slugify(this.name, { lower: true })
	}
}
