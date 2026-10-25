import { existsSync } from 'node:fs'
import { z } from 'zod'

if (existsSync('.env')) {
  process.loadEnvFile('.env')
}

const ConfigSchema = z.object({
  PORT: z.coerce.number().int().default(4001),
  DATABASE_URL: z.string().min(1),
  DATABASE_POOL_MAX: z.coerce.number().int().default(10),
  COGNITO_USER_POOL_ID: z.string().min(1),
  COGNITO_CLIENT_ID: z.string().min(1),
  COGNITO_DOMAIN: z.url(),
})

export type Config = z.infer<typeof ConfigSchema>

export const Config: Config = ConfigSchema.parse(process.env)
