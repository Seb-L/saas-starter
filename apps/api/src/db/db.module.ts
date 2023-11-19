import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Account } from '../accounts/account.entity'
import { Plan } from '../plans/plan.entity'
import { Project } from '../projects/projects.entity'
import { Team } from '../teams/team.entity'
import { User } from '../users/user.entity'
import { Webhook } from '../webhooks/webhook.entity'
import { SeedService } from './seed.service'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forFeature([Account, User, Plan, Team, Project, Webhook]),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT),
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: [Account, Plan, Team, User, Project, Webhook],
			ssl: true,
			synchronize: process.env.NODE_ENV !== 'production',
			migrations: ['dist/migrations/*{.ts,.js}'],
			migrationsTableName: 'migrations_typeorm',
			migrationsRun: true,
		}),
	],
	providers: [SeedService],
	exports: [SeedService],
})
export class DbModule {}
