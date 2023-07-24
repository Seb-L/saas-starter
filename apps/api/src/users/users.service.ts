import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User, UserInput } from './user.model'

@Injectable()
export class UsersService {
	constructor (@InjectRepository(User) private usersRepository: Repository<User>) {}

	create (createUserDto: UserInput) {
		return this.usersRepository.save(createUserDto)
	}

	findAll () {
		return this.usersRepository.find({ relations: ['account', 'teams'] })
	}

	findOne (id: number) {
		return this.usersRepository.findOneBy({ id })
	}

	findOneByEmail (email: string) {
		return this.usersRepository.findOneBy({ email })
	}

	async update (id: number, updateUserDto: UserInput) {
		const user = await this.usersRepository.findOneBy({ id })

		if (!user) throw new NotFoundException()

		return this.usersRepository.save({
			id,
			...updateUserDto,
		})
	}

	async remove (id: number) {
		return this.usersRepository.delete(id)
	}
}
