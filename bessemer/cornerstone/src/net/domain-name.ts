import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('domain-name')
export type DomainName = NominalType<string, typeof Namespace>

const regex =
  /^[a-zA-Z0-9\u00a1-\uffff](?:[a-zA-Z0-9\u00a1-\uffff-]{0,61}[a-zA-Z0-9\u00a1-\uffff])?(?:\.[a-zA-Z0-9\u00a1-\uffff](?:[a-zA-Z0-9\u00a1-\uffff-]{0,61}[a-zA-Z0-9\u00a1-\uffff])?)*$/

export const parseString = (value: string): Result<DomainName, ErrorEvent> => {
  if (!regex.test(value)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, {
        namespace: Namespace,
        message: `[${Namespace}]: Invalid characters for DomainName in string: [${value}]`,
      })
    )
  }

  return Results.success(value as DomainName)
}

export const from = (value: string): DomainName => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform<DomainName>(ZodUtil.string(), parseString)
