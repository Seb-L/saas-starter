import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { AuthService } from './auth.service'
import { JwtPayload } from './jwt.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor (
		private configService: ConfigService,
		private readonly authService: AuthService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get('JWT_TOKEN_SECRET'),
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
