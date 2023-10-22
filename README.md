# saas-starter

## Apps and packages

- apps
  - **api:** NestJS + graphql + graphql-query + vitest + Neon Postgres DB
  - **docs:** NextJs + Nextra
  - **web:** NextJs + ReactQuery + vitest
- packages:
  - **ui:** TailwindCss + DaisyCss
  
## Install

```shell
pnpm i
```

This is a TurboRepo repository, to target an app or package script command you must use 

`pnpm --filter=my-package-name my-command`

## API

Useful documentations:
- [NestJS](https://nestjs.com/)
- [Nestjs Query](https://tripss.github.io/nestjs-query) (graphql filtering and pagination)
- [TypeORM](https://typeorm.io/)
- [Neon DB](https://neon.tech/docs/introduction) (serveless postgres database)

### Commands

Commands prefix: `pnpm --filter=api`

| Command      | Description                                         |
|--------------|-----------------------------------------------------|
| `start:dev`  | Run in dev mode                                     |
| `build`      | Build for production                                |
| `start:prod` | Run in production mode                              |
| `unit`       | Run unit tests                                      |
| `unit:cov`   | Run unit tests with coverage                        |
| `unit:watch` | Run unit tests in watch mode                        |
| `unit:e2e`   | Run e2e tests                                       |
| `gen:types`  | Generate TS types for graphql-request used in `web` |

### Development

```shell
pnpm --filter=api start:dev
```

- GraphQL playground: [`http://localhost:3001/graphql`](http://localhost:3001/graphql)
