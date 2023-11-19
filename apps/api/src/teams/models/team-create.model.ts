import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class TeamCreateModel {
	@Field()
	name: string
}
