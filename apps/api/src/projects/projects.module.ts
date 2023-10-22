import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { ProjectDto } from './dto/project.dto'
import { ProjectCreateDto } from './dto/project-create.dto'
import { Project } from './projects.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Project])],
			resolvers: [
				{
					EntityClass: Project,
					DTOClass: ProjectDto,
					CreateDTOClass: ProjectCreateDto,
				},
			],
		}),
	],
})
export class ProjectsModule {}
