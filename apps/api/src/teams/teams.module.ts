import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Team } from './team.model'
import { TeamsResolver } from './teams.resolver'
import { TeamsService } from './teams.service'

@Module({
	imports: [TypeOrmModule.forFeature([Team])],
	providers: [TeamsService, TeamsResolver],
})
export class TeamsModule {}
