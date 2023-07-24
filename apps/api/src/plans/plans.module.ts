import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Plan } from './plan.model'
import { PlansResolver } from './plans.resolver'
import { PlansService } from './plans.service'

@Module({
	imports: [TypeOrmModule.forFeature([Plan])],
	providers: [PlansService, PlansResolver],
})
export class PlansModule {}
