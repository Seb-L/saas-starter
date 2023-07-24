import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from '../accounts/account.model'
import { User } from '../users/user.model'
import { UsersModule } from '../users/users.module'
import { JwtAuthGuard } from './auth.guard'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { jwtConstants } from './constants'
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		TypeOrmModule.forFeature([Account, User]),
		UsersModule,
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: '60s' },
		}),
	],
	providers: [
		AuthService,
		JwtStrategy,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
		AuthResolver,
	],
	exports: [AuthService],
})
export class AuthModule {
}
