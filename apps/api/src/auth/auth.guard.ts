import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'

import { jwtConstants } from './constants'
import { IS_PUBLIC_KEY } from './public.decorator'

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor (
		private jwtService: JwtService,
		private reflector: Reflector,
	) {}

	private extractTokenFromHeader (request: Request) {
		const [type, token] = request.headers.authorization?.split(' ') ?? []

		return type === 'Bearer'
			? token
			: undefined
	}

	async canActivate (context: ExecutionContext) {
		const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass(),
		])

		if (isPublic) return true

		const request = GqlExecutionContext.create(context).getContext().req

		const token = this.extractTokenFromHeader(request)

		if (!token) throw new UnauthorizedException()

		try {
			// 💡 We're assigning the payload to the request object here
			// so that we can access it in our route handlers
			request['user'] = await this.jwtService
				.verifyAsync(token, { secret: jwtConstants.secret })
		} catch {
			throw new UnauthorizedException()
		}

		return true
	}
}
