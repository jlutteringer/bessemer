import Zod from 'zod'
import { Objects, Results } from '@bessemer/cornerstone'
import { Result } from '@bessemer/cornerstone/result'
import { ZotchError } from '@bessemer/zotch/zotch-error'

export type ApiContext = {
  baseUrl: string
  accessToken: string | null
}

export const AuthorizationHeadersSchema = {
  Authorization: Zod.string().optional(),
}

export const getAuthorizationHeaders = (context: ApiContext) =>
  Objects.isPresent(context.accessToken) ? { Authorization: `Bearer ${context.accessToken}` } : {}

export const unwrapResult = <T>(result: Result<T, ZotchError>): T => {
  if (Results.isFailure(result)) {
    throw result.value
  }

  return result
}
