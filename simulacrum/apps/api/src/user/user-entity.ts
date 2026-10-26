import { Prisma } from '@simulacrum/api/generated/prisma/client'

export const UserInclude = { profile: true } as const satisfies Prisma.UserInclude

export type UserEntity = Prisma.UserGetPayload<{ include: typeof UserInclude }>
