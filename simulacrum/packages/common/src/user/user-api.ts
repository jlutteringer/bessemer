import { Zotch } from '@bessemer/zotch'
import { UserDto, UserSchema } from '@simulacrum/common/user/user'
import { ApiContext, AuthorizationHeadersSchema, getAuthorizationHeaders, unwrapResult } from '@simulacrum/common/api/api'

export const UserApi = Zotch.api({
  fetchCurrentUser: {
    method: 'get',
    path: '/users/me',
    response: UserSchema,
    headers: AuthorizationHeadersSchema,
  },
})

const client = Zotch.client(UserApi)

export const fetchCurrentUser = async (context: ApiContext): Promise<UserDto> => {
  const response = await client.fetchCurrentUser({
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}
