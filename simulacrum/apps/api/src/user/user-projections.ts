import { Instants, Uuid7 } from '@bessemer/cornerstone'
import { UserDto, UserProfileDto, UserStatusSchema, UserSummaryDto } from '@simulacrum/common/user/user'
import { Profile } from '@simulacrum/api/generated/prisma/client'
import { UserEntity } from '@simulacrum/api/user/user-entity'
import * as Projections from '@simulacrum/api/projection/projection'
import { ApplicationContext } from '@simulacrum/api/context'

export namespace UserProjections {
  export const projectUserSummary = Projections.mappingProjector(
    (user: UserEntity): UserSummaryDto => ({
      id: Uuid7.from(user.id),
      profile: user.profile === null ? null : { firstName: user.profile.firstName, lastName: user.profile.lastName },
    })
  )

  export const projectUserProfile = Projections.mappingProjector(
    (profile: Profile): UserProfileDto => ({
      id: Uuid7.from(profile.id),
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
      id: Uuid7.from(user.id),
      createdAt: Instants.toLiteral(user.createdAt),
      updatedAt: Instants.toLiteral(user.updatedAt),
      status: UserStatusSchema.parse(user.status),
      profile: user.profile === null ? null : profiles.get(user.profile)!,
    }))
  })
}
