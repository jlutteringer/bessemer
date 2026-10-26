import { Router } from 'express'
import { requireAuth } from '@simulacrum/api/auth'
import { createApplicationContext } from '@simulacrum/api/context'
import { UserService } from '@simulacrum/api/user/user-service'

export const UserRouter = Router()

UserRouter.get('/users/me', requireAuth, async (_request, response) => {
  const context = createApplicationContext()
  response.json(await UserService.resolveUser(response.locals.auth, context))
})
