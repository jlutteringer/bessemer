import Zod from 'zod'
import { Uuid7 } from '@bessemer/cornerstone'
import { UuidV7 } from '@bessemer/cornerstone/uuid/uuid-v7'
import { BaseEntityDto, BaseEntityShape } from '@simulacrum/common/entity/entity'

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export const UserStatusSchema: Zod.ZodType<UserStatus> = Zod.enum(UserStatus)

export type UserProfileSummaryDto = {
  firstName: string
  lastName: string
}

export const UserProfileSummarySchema = Zod.object({
  firstName: Zod.string(),
  lastName: Zod.string(),
}) satisfies Zod.ZodType<UserProfileSummaryDto>

export type UserProfileDto = BaseEntityDto &
  UserProfileSummaryDto & {
    email: string
  }

export const UserProfileSchema: Zod.ZodType<UserProfileDto> = UserProfileSummarySchema.extend({
  ...BaseEntityShape,
  email: Zod.string(),
})

export type UserSummaryDto = {
  id: UuidV7
  profile: UserProfileSummaryDto | null
}

export const UserSummarySchema = Zod.object({
  id: Uuid7.Schema,
  profile: UserProfileSummarySchema.nullable(),
}) satisfies Zod.ZodType<UserSummaryDto>

export type UserDto = BaseEntityDto &
  UserSummaryDto & {
    status: UserStatus
    profile: UserProfileDto | null
  }

export const UserSchema: Zod.ZodType<UserDto> = UserSummarySchema.extend({
  ...BaseEntityShape,
  status: UserStatusSchema,
  profile: UserProfileSchema.nullable(),
})
