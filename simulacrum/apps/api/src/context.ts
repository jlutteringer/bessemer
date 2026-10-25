import { PrismaClient } from '@simulacrum/api/generated/prisma/client'
import { prisma } from '@simulacrum/api/db'

export type ApplicationContext = {
  prisma: PrismaClient
}

export const createApplicationContext = (): ApplicationContext => ({ prisma })
