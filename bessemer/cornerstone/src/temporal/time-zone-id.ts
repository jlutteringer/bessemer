import * as Results from '@bessemer/cornerstone/result'
import Zod from 'zod'
import { NominalType } from '@bessemer/cornerstone/types'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as Errors from '@bessemer/cornerstone/error/error'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('time-zone-id')
export type TimeZoneId = NominalType<string, typeof Namespace>

export const parseString = (value: string): Results.Result<TimeZoneId, ErrorEvents.ErrorEvent> => {
  try {
    const fmt = new Intl.DateTimeFormat(undefined, { timeZone: value })
    return Results.success(fmt.resolvedOptions().timeZone as TimeZoneId)
  } catch (e) {
    if (Errors.isError(e)) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
    } else {
      throw e
    }
  }
}

export const from = (value: string): TimeZoneId => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform(Zod.string(), parseString)

export const Utc = 'UTC' as TimeZoneId
export const getSystemDefault = (): TimeZoneId => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as TimeZoneId
}
