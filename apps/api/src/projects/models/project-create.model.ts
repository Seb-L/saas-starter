import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProjectCreateModel {
	@Field()
	name: string
}
