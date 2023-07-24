import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { AuthService } from './auth.service'
import { jwtConstants } from './constants'
import { JwtPayload } from './jwt.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor (private readonly authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: jwtConstants.secret,
		})
	}

	async validate (payload: JwtPayload) {
		const user = await this.authService.validateJwtPayload(payload)

		if (!user) {
			throw new UnauthorizedException('Could not log-in with the provided credentials',)
		}

		return user
	}
}
