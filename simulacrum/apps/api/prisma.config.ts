import { existsSync } from 'node:fs'
import { defineConfig } from 'prisma/config'

if (existsSync('.env')) {
  process.loadEnvFile('.env')
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // Optional so `prisma generate` works without a database (e.g. in CI builds); commands that connect fail without it
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
