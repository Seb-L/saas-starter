import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Plan, PlanInput } from './plan.model'
import { PlansService } from './plans.service'

@Resolver(() => Plan)
export class PlansResolver {
	constructor (private plansService: PlansService) {}

	@Query(() => Plan)
	async plan (@Args('id') id: number) {
		const plan = await this.plansService.findOne(id)

		if (!plan) throw new NotFoundException(id)

		return plan
	}

	@Query(() => [Plan])
	plans () {
		return this.plansService.findAll()
	}

	@Mutation(() => Plan)
	planCreate (@Args('plan') plan: PlanInput) {
		return this.plansService.create(plan)
	}

	@Mutation(() => Plan)
	planUpdate (
		@Args({ name: 'id', type: () => Int }) id: number,
		@Args('plan') plan: PlanInput,
	) {
		return this.plansService.update(id, plan)
	}

	@Mutation(() => Plan)
	planDelete (@Args({ name: 'id', type: () => Int }) id: number) {
		return this.plansService.remove(id)
	}
}
