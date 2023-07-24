import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { User, UserInput } from './user.model'
import { UsersService } from './users.service'

@Resolver(() => User)
export class UsersResolver {
	constructor (private usersService: UsersService) {}

	@Query(() => User)
	async user (@Args('id') id: number) {
		const user = await this.usersService.findOne(id)

		if (!user) throw new NotFoundException(id)

		return user
	}

	@Query(() => [User])
	users () {
		return this.usersService.findAll()
	}

	@Mutation(() => User)
	userCreate (@Args('user') user: UserInput) {
		return this.usersService.create(user)
	}

	@Mutation(() => User)
	userUpdate (
		@Args({ name: 'id', type: () => Int }) id: number,
		@Args('user') user: UserInput,
	) {
		return this.usersService.update(id, user)
	}

	@Mutation(() => User)
	userDelete (@Args({ name: 'id', type: () => Int }) id: number) {
		return this.usersService.remove(id)
	}
}
