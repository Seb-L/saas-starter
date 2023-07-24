import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Account } from './account.model'

@Injectable()
export class AccountsService {
	constructor (@InjectRepository(Account) private accountsRepository: Repository<Account>) {}

	create () {
		return this.accountsRepository.save({})
	}

	findAll () {
		return this.accountsRepository.find({ relations: ['plan'] })
	}

	findOne (id: number) {
		return this.accountsRepository.findOneBy({ id })
	}

	// async update (id: number, updateAccountDto: UpdateInput) {
	// 	const account = await this.accountsRepository.findOneBy({ id })
	//
	// 	if (account) {
	// 		return this.accountsRepository.save({
	// 			id,
	// 			...updateAccountDto,
	// 		})
	// 	} else {
	// 		return new NotFoundException()
	// 	}
	// }

	async remove (id: number) {
		await this.accountsRepository.delete(id)
	}
}
