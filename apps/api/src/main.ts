import {
	ClassSerializerInterceptor,
	ValidationPipe,
	VersioningType,
} from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule)

	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1',
	})

	const config = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('')
		.addTag('cats')
		.build()

	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('docs', app, document)

	await app.listen(3000)
}

bootstrap()
