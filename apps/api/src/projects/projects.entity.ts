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

import { Team } from '../teams/team.entity'

@Entity()
export class Project {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Index()
	@Column()
	name: string

	@Index()
	@Column()
	slug: string

	@ManyToMany(() => Team, team => team.projects, { cascade: true, nullable: true })
	@JoinTable()
	teams?: Team[]

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
