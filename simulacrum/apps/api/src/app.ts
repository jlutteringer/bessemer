import express, { type ErrorRequestHandler } from 'express'
import compression from 'compression'
import cors from 'cors'
import { prisma } from '@simulacrum/api/db'
import { UserRouter } from '@simulacrum/api/user/user-router'
import { RulesetRouter } from '@simulacrum/api/ruleset/ruleset-router'
import { CharacterRouter } from '@simulacrum/api/character/character-router'
import { CampaignRouter } from '@simulacrum/api/campaign/campaign-router'

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({ error: 'internal_error' })
}

export const createApp = () => {
  const app = express()
  app.disable('x-powered-by')
  app.use(cors())
  app.use(compression())
  app.use(express.json())

  app.get('/health', async (_request, response) => {
    await prisma.$queryRaw`SELECT 1`
    response.json({ status: 'ok' })
  })

  app.use(UserRouter)
  app.use(RulesetRouter)
  app.use(CharacterRouter)
  app.use(CampaignRouter)
  app.use(errorHandler)
  return app
}
