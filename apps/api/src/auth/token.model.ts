import { Field, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TokenResponse {
	access_token: string
}
