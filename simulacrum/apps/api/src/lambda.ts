import serverless from 'serverless-http'
import { createApp } from '@simulacrum/api/app'
import { prisma } from '@simulacrum/api/db'

const app = serverless(createApp())

// An idle Lambda keeps its connections open, which stops Aurora from pausing, so close them after every request
export const handler: typeof app = async (event, context) => {
  try {
    return await app(event, context)
  } finally {
    await prisma.$disconnect()
  }
}
