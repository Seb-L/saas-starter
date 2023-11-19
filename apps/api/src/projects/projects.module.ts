import { Module } from '@nestjs/common'
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql'
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm'

import { ProjectModel } from './models/project.model'
import { ProjectCreateModel } from './models/project-create.model'
import { Project } from './projects.entity'

@Module({
	imports: [
		NestjsQueryGraphQLModule.forFeature({
			imports: [NestjsQueryTypeOrmModule.forFeature([Project])],
			resolvers: [
				{
					EntityClass: Project,
					DTOClass: ProjectModel,
					CreateDTOClass: ProjectCreateModel,
				},
			],
		}),
	],
})
export class ProjectsModule {}
