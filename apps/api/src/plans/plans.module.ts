import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { PlanDto } from './dto/plan.dto'
import { PlanCreateDto } from './dto/plan-create.dto'
import { Plan } from './plan.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Plan])],
			resolvers: [
				{
					EntityClass: Plan,
					DTOClass: PlanDto,
					CreateDTOClass: PlanCreateDto,
				},
			],
		}),
	],
})
export class PlansModule {}
