import Zod from 'zod'
import { BaseEntityDto, BaseEntityShape } from '@simulacrum/common/entity/entity'

export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
}

export const UserStatusSchema: Zod.ZodType<UserStatus> = Zod.enum(UserStatus)

export type UserProfileDto = BaseEntityDto & {
  email: string
  firstName: string
  lastName: string
}

export const UserProfileSchema: Zod.ZodType<UserProfileDto> = Zod.object({
  ...BaseEntityShape,
  email: Zod.string(),
  firstName: Zod.string(),
  lastName: Zod.string(),
})

export type UserDto = BaseEntityDto & {
  status: UserStatus
  profile: UserProfileDto | null
}

export const UserSchema: Zod.ZodType<UserDto> = Zod.object({
  ...BaseEntityShape,
  status: UserStatusSchema,
  profile: UserProfileSchema.nullable(),
})
