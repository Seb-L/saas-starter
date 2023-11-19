import { BadRequestException } from '@nestjs/common'
import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { UserModel } from '../users/models/user.model'
import { AuthService } from './auth.service'
import { Public } from './public.decorator'
import { TokenResponse } from './token.model'

@Resolver()
export class AuthResolver {
	constructor (private authService: AuthService) {}

	@Public()
	@Mutation(() => TokenResponse)
	async login (@Args('email') email: string, @Args('password') password: string) {
		const result = await this.authService.login(email, password)

		if (!result) {
			throw new BadRequestException('Could not log-in with the provided credentials',)
		}

		return result
	}

	@Public()
	@Mutation(() => UserModel)
	async register (
		@Args('email') email: string,
		@Args('password') password: string,
	) {
		return this.authService.register(email, password)
	}
}
