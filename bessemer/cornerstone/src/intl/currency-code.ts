import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('currency-code')
export type CurrencyCode = NominalType<string, typeof Namespace>

export const parseString = (value: string): Result<CurrencyCode, ErrorEvent> => {
  if (!/^[A-Za-z]{3}$/.test(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `Currency Code must be exactly 3 letters.` }))
  }

  return Results.success(value.toUpperCase() as CurrencyCode)
}

export const from = (value: string): CurrencyCode => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform<CurrencyCode>(ZodUtil.string(), parseString).meta({
  type: 'string',
  format: Namespace,
  pattern: '^[A-Za-z]{3}$',
})

export const USD = 'USD' as CurrencyCode
export const EUR = 'EUR' as CurrencyCode
export const GBP = 'GBP' as CurrencyCode
export const JPY = 'JPY' as CurrencyCode
export const CAD = 'CAD' as CurrencyCode
export const AUD = 'AUD' as CurrencyCode
