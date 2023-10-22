import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class TeamCreateDto {
	@Field()
	name: string
}
