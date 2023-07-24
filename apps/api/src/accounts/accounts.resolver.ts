import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Account } from './account.model'
import { AccountsService } from './accounts.service'

@Resolver(() => Account)
export class AccountsResolver {
	constructor (private accountsService: AccountsService) {}

	@Query(() => Account)
	async account (@Args('id') id: number) {
		const account = await this.accountsService.findOne(id)

		if (!account) throw new NotFoundException(id)

		return account
	}

	@Query(() => [Account])
	accounts () {
		return this.accountsService.findAll()
	}

	@Mutation(() => Account)
	accountCreate () {
		return this.accountsService.create()
	}

	// @Mutation(() => Account)
	// accountUpdate (
	// 	@Args({ name: 'id', type: () => Int }) id: number,
	// 	@Args('account') account: AccountInput,
	// ) {
	// 	return this.accountsService.update(id, account)
	// }

	@Mutation(() => Account)
	accountDelete (@Args({ name: 'id', type: () => Int }) id: number) {
		return this.accountsService.remove(id)
	}
}
