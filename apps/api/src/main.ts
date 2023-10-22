import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core'
import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'

import { AppModule } from './app.module'
import { SentryFilter } from './sentry.filter'

const bootstrap = async () => {
	Sentry.init({
		dsn: process.env.SENTRY_DNS_API,
		integrations: [new ProfilingIntegration()],
		tracesSampleRate: 1.0,
		profilesSampleRate: 1.0,
	})

	const app = await NestFactory.create(AppModule)

	const { httpAdapter } = app.get(HttpAdapterHost)

	app.useGlobalFilters(new SentryFilter(httpAdapter))
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
	app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))

	await app.listen(3001)
}

bootstrap()
