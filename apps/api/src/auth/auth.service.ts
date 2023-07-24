import {
	ConflictException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { DataSource, Repository } from 'typeorm'

import { Account } from '../accounts/account.model'
import { User } from '../users/user.model'
import { UsersService } from '../users/users.service'
import { JwtPayload } from './jwt.interface'

const saltOrRounds = 10

@Injectable()
export class AuthService {
	constructor (
		@InjectRepository(Account)
		private accountsRepository: Repository<Account>,
		private dataSource: DataSource,
		private jwtService: JwtService,
		@InjectRepository(User)
		private usersRepository: Repository<User>,
		private usersService: UsersService,
	) {}

	async validateJwtPayload (payload: JwtPayload) {
		const user = await this.usersService.findOneByEmail(payload.email)

		if (user && user.isActive) return user

		return undefined
	}

	async login (email: string, password: string) {
		const user = await this.usersService.findOneByEmail(email)
		const hash = await bcrypt.hash(password, saltOrRounds)
		const isPassMatching = await bcrypt.compare(user?.password, hash)

		if (!isPassMatching) throw new UnauthorizedException()

		const access_token = await this.jwtService.signAsync({
			username: user.email,
			sub: user.id,
		})

		return { access_token }
	}

	async register (email: string, password: string, inviteAccountId?: number) {
		const queryRunner = this.dataSource.createQueryRunner()

		await queryRunner.connect()
		await queryRunner.startTransaction()

		const usersManager = queryRunner.manager.withRepository(this.usersRepository)

		try {
			const existingUser = await usersManager.findOne({ where: { email } })

			if (existingUser) return new ConflictException()

			const account = queryRunner.manager
				.withRepository(this.accountsRepository)
				.create()

			// const accountId =
			// 	inviteAccountId ||
			// 	queryRunner.manager.withRepository(this.accountsRepository).create().id

			const user = usersManager.create({
				email,
				// account,
				password: await bcrypt.hash(password, saltOrRounds),
			})

			await queryRunner.commitTransaction()

			return user
		} catch (err) {
			await queryRunner.rollbackTransaction()
		} finally {
			await queryRunner.release()
		}
	}
}
