import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { FindManyOptions, Repository } from 'typeorm'

import { Plan, PlanInput } from './plan.model'

@Injectable()
export class PlansService {
	constructor (@InjectRepository(Plan) private plansRepository: Repository<Plan>) {}

	create (createPlanDto: PlanInput) {
		return this.plansRepository.save(createPlanDto)
	}

	findAll (options?: FindManyOptions<Plan>): Promise<Plan[]> {
		return this.plansRepository.find(options)
	}

	findOne (id: number) {
		return this.plansRepository.findOneBy({ id })
	}

	async update (id: number, updatePlanDto: PlanInput) {
		const plan = await this.plansRepository.findOneBy({ id })

		if (plan) {
			return this.plansRepository.save({
				id,
				...updatePlanDto,
			})
		} else {
			return new NotFoundException()
		}
	}

	async remove (id: number) {
		await this.plansRepository.delete(id)
	}
}
