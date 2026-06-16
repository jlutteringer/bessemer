import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as DomainNames from '@bessemer/cornerstone/net/domain-name'
import { ValueOf } from 'type-fest'

export const HttpMethod = {
  Get: 'get',
  Post: 'post',
  Put: 'put',
  Patch: 'patch',
  Delete: 'delete',
  Head: 'head',
  Options: 'options',
  Trace: 'trace',
  Connect: 'connect',
} as const
export type HttpMethod = ValueOf<typeof HttpMethod>

export const parseString = (value: string): Result<HttpMethod, ErrorEvent> => {
  const normalizedValue = value.toLowerCase()
  const validMethods = Object.values(HttpMethod)

  if (!validMethods.includes(normalizedValue as HttpMethod)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, {
        namespace: DomainNames.Namespace,
        message: `[${DomainNames.Namespace}]: Invalid HttpMethod in string: [${value}]. Valid methods are: ${validMethods.join(', ')}`,
      })
    )
  }

  return Results.success(normalizedValue as HttpMethod)
}

export const from = (value: string): HttpMethod => {
  return ErrorEvents.unpackResult(parseString(value))
}
