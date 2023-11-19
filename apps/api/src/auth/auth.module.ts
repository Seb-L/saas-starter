import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from '../accounts/account.entity'
import { User } from '../users/user.entity'
import { UsersModule } from '../users/users.module'
import { JwtAuthGuard } from './auth.guard'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		TypeOrmModule.forFeature([Account, User]),
		UsersModule,
		JwtModule.register({
			global: true,
			secret: process.env.JWT_TOKEN_SECRET,
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
