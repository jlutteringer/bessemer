import { z } from 'zod'
import { Config } from '@simulacrum/api/config'
import { ApplicationContext } from '@simulacrum/api/context'
import { UserEntity } from '@simulacrum/api/user/user-projections'
import type { Auth } from '@simulacrum/api/auth'

export namespace UserService {
  const UserInfoSchema = z.object({ email: z.string(), given_name: z.string(), family_name: z.string() })

  // Access tokens don't carry the email or name, so the first request from a new user reads them from Cognito's userInfo endpoint
  const fetchUserInfo = async (accessToken: string) => {
    const response = await fetch(`${Config.COGNITO_DOMAIN}/oauth2/userInfo`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    if (!response.ok) {
      throw new Error(`Cognito userInfo failed with ${response.status}`)
    }
    return UserInfoSchema.parse(await response.json())
  }

  const UserInclude = { profile: true } as const

  export const resolveUser = async (auth: Auth, context: ApplicationContext): Promise<UserEntity> => {
    const existing = await context.prisma.userAuthentication.findUnique({
      where: { externalId: auth.sub },
      include: { user: { include: UserInclude } },
    })
    if (existing) {
      return existing.user
    }

    const info = await fetchUserInfo(auth.accessToken)
    return context.prisma.user.create({
      data: {
        authentication: { create: { externalId: auth.sub } },
        profile: { create: { email: info.email, firstName: info.given_name, lastName: info.family_name } },
      },
      include: UserInclude,
    })
  }
}
