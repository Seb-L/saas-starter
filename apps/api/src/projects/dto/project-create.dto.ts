import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProjectCreateDto {
	@Field()
	name: string
}
