import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@simulacrum/api/generated/prisma/client'
import { Config } from '@simulacrum/api/config'

export const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: Config.DATABASE_URL,
    max: Config.DATABASE_POOL_MAX,
    // The first connection after Aurora pauses waits for it to resume
    connectionTimeoutMillis: 30_000,
  }),
})
