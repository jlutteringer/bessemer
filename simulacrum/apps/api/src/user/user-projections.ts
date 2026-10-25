import { Instants } from '@bessemer/cornerstone'
import * as UuidV7 from '@bessemer/cornerstone/uuid/uuid-v7'
import { UserDto, UserProfileDto, UserStatusSchema } from '@simulacrum/common/user/user'
import { Profile, User } from '@simulacrum/api/generated/prisma/client'
import * as Projections from '@simulacrum/api/projection/projection'
import { ApplicationContext } from '@simulacrum/api/context'

export type UserEntity = User & {
  profile: Profile | null
}

export namespace UserProjections {
  export const projectUserProfile = Projections.mappingProjector(
    (profile: Profile): UserProfileDto => ({
      id: UuidV7.from(profile.id),
      createdAt: Instants.toLiteral(profile.createdAt),
      updatedAt: Instants.toLiteral(profile.updatedAt),
      email: profile.email,
      firstName: profile.firstName,
      lastName: profile.lastName,
    })
  )

  export const projectUser = Projections.projector(async (users: Array<UserEntity>, context: ApplicationContext): Promise<Array<UserDto>> => {
    const profiles = await Projections.mapProjection(
      users.map((it) => it.profile).filter((it) => it !== null),
      projectUserProfile,
      context
    )

    return users.map((user) => ({
      id: UuidV7.from(user.id),
      createdAt: Instants.toLiteral(user.createdAt),
      updatedAt: Instants.toLiteral(user.updatedAt),
      status: UserStatusSchema.parse(user.status),
      profile: user.profile === null ? null : profiles.get(user.profile)!,
    }))
  })
}
