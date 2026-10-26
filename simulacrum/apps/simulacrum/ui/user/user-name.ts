import { UserSummaryDto } from '@simulacrum/common/user/user'

export const getUserName = (user: UserSummaryDto): string => {
  return user.profile === null ? 'Unknown player' : `${user.profile.firstName} ${user.profile.lastName}`
}
