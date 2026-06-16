import { NominalType } from '@bessemer/cornerstone/types'
import { CountryCode } from '@bessemer/cornerstone/intl/country-code'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

// ISO 3166-2 country subdivision codes
export const Namespace = ResourceKeys.createNamespace('country-subdivision-code')
export type CountrySubdivisionCode = NominalType<string, typeof Namespace>

export const parseString = (value: string): Result<CountrySubdivisionCode, ErrorEvent> => {
  if (!/^[A-Z]{2}-[A-Z0-9]{1,3}$/i.test(value)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, {
        namespace: Namespace,
        message: `CountrySubdivisionCode must follow ISO 3166-2 format (e.g., US-CA, GB-ENG).`,
      })
    )
  }

  return Results.success(value.toUpperCase() as CountrySubdivisionCode)
}

export const from = (value: string): CountrySubdivisionCode => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform<CountrySubdivisionCode>(ZodUtil.string(), parseString)

export const getCountry = (code: CountrySubdivisionCode): CountryCode => {
  const countryPart = code.split('-')[0]
  return countryPart as CountryCode
}
