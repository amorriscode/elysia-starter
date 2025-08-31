<div align="center">
  <h1>Elysia Starter</h1>
  <p>A batteries included API started built with <a href="https://elysiajs.com/" target="_blank"><b>ElysiaJS</b></a>.</p>
  <a href="https://railway.app/template/2TqJzK?referralCode=dlaCKJ" rel="nofollow"><img src="https://railway.app/button.svg" alt="Deploy on Railway" data-canonical-src="https://railway.app/button.svg" style="max-width: 100%;"></a>
</div>

## 🔋 Batteries Included

- 🥟 [Bun](https://bun.sh/)
- 👮 [TypeScript](https://www.typescriptlang.org/)
- 🦊 [Elysia](https://elysiajs.com/)
- ⚡ [Drizzle](https://orm.drizzle.team/)
- 🐘 [Postrges](https://www.postgresql.org/)
- 🚄 [Railway](https://railway.app/)

## 🚀 Getting Started

To get started with this template, ensure that [Bun](https://bun.sh/) is installed.

```bash
curl -fsSL https://bun.sh/install | bash
```

### Development

1. Install dependencies

```bash
bun install
```

1. Start the development server

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## 🏛️ Architecture

### TypeIDs

This starter uses [TypeIDs](https://github.com/jetpack-io/typeid-js) which are type-safe, K-sortable, unique identifiers inspired by Stripe IDs. An example ID for a user would be `user_123456`.

### API Resources

Each API resource (eg. `users`) are defined in `src/resources`. Each resource has a `router.ts` and `service.ts`. All the endpoints for the resource are defined in `router.ts` and all of the business logic ends up in `service.ts`.

### Deployment

[This template](https://railway.com/deploy/2TqJzK) is meant to be deployed with [Railway](https://railway.app/). When deploying the template, use `DATABASE_URL=${{Postgres.DATABASE_URL}}` to configure the API to connect to the Postgres instance that comes with your deployment.

## 🗺️ Roadmap

- [ ] JWT authentication
- [ ] Sane HTTP server defaults (CORS, etc.)
- [ ] Example tests
- [ ] Docker support
- [ ] Monorepo with Next.js or Tanstack
- [ ] Code generation
- [ ] Logging
