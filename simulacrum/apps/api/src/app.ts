import express, { type ErrorRequestHandler } from 'express'
import { prisma } from '@simulacrum/api/db'
import { UserRouter } from '@simulacrum/api/user/user-router'

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({ error: 'internal_error' })
}

export const createApp = () => {
  const app = express()
  app.disable('x-powered-by')
  app.use(express.json())

  app.get('/health', async (_request, response) => {
    await prisma.$queryRaw`SELECT 1`
    response.json({ status: 'ok' })
  })

  app.use(UserRouter)
  app.use(errorHandler)
  return app
}
