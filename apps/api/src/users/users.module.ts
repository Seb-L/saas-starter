import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { UserDto } from './dto/user.dto'
import { User } from './user.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([User])],
			resolvers: [
				{
					EntityClass: User,
					DTOClass: UserDto,
				},
			],
		}),
	],
})
export class UsersModule {}
