import Zod from 'zod'
import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('ipv4-address')
export type IpV4Address = NominalType<string, typeof Namespace>

const regex = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/

export const parseString = (value: string): Result<IpV4Address, ErrorEvent> => {
  if (!regex.test(value)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, {
        namespace: Namespace,
        message: `[${Namespace}]: Invalid characters for IpV4Address in string: [${value}]`,
      })
    )
  }

  return Results.success(value as IpV4Address)
}

export const from = (value: string): IpV4Address => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform(Zod.string(), parseString)
