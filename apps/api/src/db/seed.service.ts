import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'

import { Account } from '../accounts/account.entity'
import { Plan } from '../plans/plan.entity'
import { Project } from '../projects/projects.entity'
import { Team } from '../teams/team.entity'
import { User } from '../users/user.entity'

const seedPlan = { name: 'free-dev', price: 0, stripeProductId: 'xxx', isActive: true }
const seedAccount = { isActive: true }

const seedUser = {
	firstName: 'Seb',
	lastName: 'Lom',
	email: 'seb.lom@some-email.com',
	isActive: true,
	password: 'xxx',
}

const seedTeam = { name: 'My team' }
const seedProject = { name: 'My project' }

@Injectable()
export class SeedService {
	constructor (
		private dataSource: DataSource,
		@InjectRepository(Plan) private readonly planRepository: Repository<Plan>,
		@InjectRepository(Account) private readonly accountRepository: Repository<Account>,
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		@InjectRepository(Team) private readonly teamRepository: Repository<Team>,
		@InjectRepository(Project) private readonly projectRepository: Repository<Project>,
	) {}

	async seed () {
		const datasource = this.dataSource.createQueryRunner()

		await datasource.connect()
		await datasource.startTransaction()

		try {
			const plan = datasource.manager
				.withRepository(this.planRepository)
				.create(seedPlan)

			await this.planRepository.insert(plan)

			const account = datasource.manager
				.withRepository(this.accountRepository)
				.create({ ...seedAccount, plan })

			await this.accountRepository.insert(account)

			const user = datasource.manager
				.withRepository(this.userRepository)
				.create({ ...seedUser, account })

			await this.userRepository.insert(user)

			const team = datasource.manager
				.withRepository(this.teamRepository)
				.create({ ...seedTeam, users: [user] })

			await this.teamRepository.insert(team)

			const project = datasource.manager
				.withRepository(this.projectRepository)
				.create({ ...seedProject, teams: [team] })

			await this.projectRepository.insert(project)

			await datasource.commitTransaction()

			const res = { plan, account, user, team, project }

			console.log(res)

			return res
		} catch (err) {
			await datasource.rollbackTransaction()
		} finally {
			await datasource.release()
		}
	}
}
