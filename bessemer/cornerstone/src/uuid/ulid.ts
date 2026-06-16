import { ulid } from 'ulid'
import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('ulid')
export type Ulid = NominalType<string, typeof Namespace>

export const parse = (value: string): Result<Ulid, ErrorEvent> => {
  if (!/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/.test(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `[${Namespace}]: Invalid Ulid format: [${value}]` }))
  }

  return Results.success(value.toUpperCase() as Ulid)
}

export const from = (value: string): Ulid => {
  return ErrorEvents.unpackResult(parse(value))
}

export const Schema = ZodUtil.structuredTransform<Ulid>(ZodUtil.string(), parse).meta({
  type: 'string',
  format: Namespace,
  pattern: '^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$',
})

export const generate = (): Ulid => {
  return ulid() as Ulid
}
