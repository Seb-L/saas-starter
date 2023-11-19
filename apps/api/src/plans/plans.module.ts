import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { PlanModel } from './models/plan.model'
import { PlanCreateModel } from './models/plan-create.model'
import { Plan } from './plan.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Plan])],
			resolvers: [
				{
					EntityClass: Plan,
					DTOClass: PlanModel,
					CreateDTOClass: PlanCreateModel,
				},
			],
		}),
	],
})
export class PlansModule {}
