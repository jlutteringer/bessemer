import { NominalType } from '@bessemer/cornerstone/types'
import Zod from 'zod'
import { LanguageCode } from '@bessemer/cornerstone/intl/language-code'
import * as LanguageCodes from '@bessemer/cornerstone/intl/language-code'
import { CountryCode } from '@bessemer/cornerstone/intl/country-code'
import * as CountryCodes from '@bessemer/cornerstone/intl/country-code'
import * as Objects from '@bessemer/cornerstone/object'
import { Assertions } from '@bessemer/cornerstone'
import { Result } from '@bessemer/cornerstone/result'
import * as Results from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('locale')
export type Locale = NominalType<string, typeof Namespace>

export const fromCode = (language: LanguageCode, country?: CountryCode | null): Locale => {
  if (Objects.isPresent(country)) {
    return `${language}-${country}` as Locale
  } else {
    return `${language}` as Locale
  }
}

export const parseString = (value: string): Result<Locale, ErrorEvent> => {
  if (!/^[a-z]{2}(-[a-z]{2})?$/i.test(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `Locale must be in format "en" or "en-US".` }))
  }

  const parts = value.split('-')
  Assertions.assertPresent(parts[0])
  const languageCode = LanguageCodes.from(parts[0])
  const countryCode = Objects.isPresent(parts[1]) ? CountryCodes.from(parts[1]) : null
  return Results.success(fromCode(languageCode, countryCode))
}

export const from = (value: string): Locale => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform(Zod.string(), parseString)

export const parse = (locale: Locale): [LanguageCode, CountryCode | null] => {
  const parts = locale.split('-')
  const languageCode = parts[0] as LanguageCode
  const countryCode = Objects.isPresent(parts[1]) ? (parts[1] as CountryCode) : null
  return [languageCode, countryCode]
}

export const English = 'en' as Locale
export const Spanish = 'es' as Locale
export const French = 'fr' as Locale
export const German = 'de' as Locale
export const Italian = 'it' as Locale
export const Portuguese = 'pt' as Locale
export const Dutch = 'nl' as Locale
export const Russian = 'ru' as Locale
export const Chinese = 'zh' as Locale
export const Japanese = 'ja' as Locale
export const Korean = 'ko' as Locale

export const AmericanEnglish = 'en-US' as Locale
export const BritishEnglish = 'en-GB' as Locale
export const CanadianEnglish = 'en-CA' as Locale
export const AustralianEnglish = 'en-AU' as Locale
