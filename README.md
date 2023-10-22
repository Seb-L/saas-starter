# saas-starter

## Table of Contents

<!-- TOC -->
* [saas-starter](#saas-starter)
  * [Table of Contents](#table-of-contents)
  * [Apps and packages](#apps-and-packages)
  * [Install](#install)
  * [API](#api)
    * [Commands](#commands)
    * [Development](#development)
    * [Starting the server](#starting-the-server)
      * [Seeding the Database](#seeding-the-database-)
<!-- TOC -->

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
| `start:repl` | REPL                                                |
| `build`      | Build for production                                |
| `start:prod` | Run in production mode                              |
| `test`       | Run unit tests                                      |
| `test:cov`   | Run unit tests with coverage                        |
| `test:watch` | Run unit tests in watch mode                        |
| `test:e2e`   | Run e2e tests                                       |
| `gen:types`  | Generate TS types for graphql-request used in `web` |

### Development

### Starting the server

```shell
pnpm --filter=api start:dev
```

- GraphQL playground: [`http://localhost:3001/graphql`](http://localhost:3001/graphql)

#### Seeding the Database 

```shell
pnpm --filter=api start:repl
```

then in the terminal `get(SeedService).seed()`

The seed service is located in `apps/api/src/db/seed.service.ts`
