import { Router } from 'express'
import { requireAuth } from '@simulacrum/api/auth'
import { createApplicationContext } from '@simulacrum/api/context'
import * as Projections from '@simulacrum/api/projection/projection'
import { UserService } from '@simulacrum/api/user/user-service'
import { UserProjections } from '@simulacrum/api/user/user-projections'

export const UserRouter = Router()

UserRouter.get('/users/me', requireAuth, async (_request, response) => {
  const context = createApplicationContext()
  const user = await UserService.resolveUser(response.locals.auth, context)
  response.json(await Projections.projectOne(user, UserProjections.projectUser, context))
})
