import type { NextFunction, Request, Response } from 'express'
import { CognitoJwtVerifier } from 'aws-jwt-verify'
import { Config } from '@simulacrum/api/config'

export type Auth = {
  sub: string
  accessToken: string
}

declare global {
  namespace Express {
    interface Locals {
      auth: Auth
    }
  }
}

const verifier = CognitoJwtVerifier.create({
  userPoolId: Config.COGNITO_USER_POOL_ID,
  clientId: Config.COGNITO_CLIENT_ID,
  tokenUse: 'access',
})

export const requireAuth = async (request: Request, response: Response, next: NextFunction) => {
  const [scheme, token] = request.headers.authorization?.split(' ') ?? []
  if (scheme !== 'Bearer' || !token) {
    response.status(401).json({ error: 'unauthorized' })
    return
  }

  try {
    const payload = await verifier.verify(token)
    response.locals.auth = { sub: payload.sub, accessToken: token }
    next()
  } catch {
    response.status(401).json({ error: 'unauthorized' })
  }
}
