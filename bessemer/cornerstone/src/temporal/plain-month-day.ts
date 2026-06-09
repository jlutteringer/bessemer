import { Temporal } from '@js-temporal/polyfill'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import { NominalType } from '@bessemer/cornerstone/types'
import { Comparator } from '@bessemer/cornerstone/comparator'
import * as Equalitors from '@bessemer/cornerstone/equalitor'
import * as Results from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as Errors from '@bessemer/cornerstone/error/error'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'
import Zod from 'zod'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'

export type PlainMonthDay = Temporal.PlainMonthDay
export const Namespace = ResourceKeys.createNamespace('plain-month-day')
export type PlainMonthDayLiteral = NominalType<string, typeof Namespace>
export type PlainMonthDayBuilder = {
  month: number
  day: number
}

export type PlainMonthDayLike = PlainMonthDay | PlainMonthDayLiteral | PlainMonthDayBuilder

export function from(value: PlainMonthDayLike | string): PlainMonthDay
export function from(value: PlainMonthDayLike | string | null): PlainMonthDay | null
export function from(value: PlainMonthDayLike | string | undefined): PlainMonthDay | undefined
export function from(value: PlainMonthDayLike | string | null | undefined): PlainMonthDay | null | undefined
export function from(value: PlainMonthDayLike | string | null | undefined): PlainMonthDay | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.PlainMonthDay) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.PlainMonthDay.from(value)
}

export const CompareBy: Comparator<PlainMonthDay> = (first: PlainMonthDay, second: PlainMonthDay): number => {
  if (first.monthCode !== second.monthCode) {
    return first.monthCode < second.monthCode ? -1 : 1
  }

  return first.day - second.day
}
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<PlainMonthDay, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.PlainMonthDay.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export function toLiteral(likeValue: PlainMonthDayLike): PlainMonthDayLiteral
export function toLiteral(likeValue: PlainMonthDayLike | null): PlainMonthDayLiteral | null
export function toLiteral(likeValue: PlainMonthDayLike | undefined): PlainMonthDayLiteral | undefined
export function toLiteral(likeValue: PlainMonthDayLike | null | undefined): PlainMonthDayLiteral | null | undefined
export function toLiteral(likeValue: PlainMonthDayLike | null | undefined): PlainMonthDayLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)
  return value.toString() as PlainMonthDayLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isPlainMonthDay = (value: unknown): value is PlainMonthDay => {
  return value instanceof Temporal.PlainMonthDay
}

export const merge = (element: PlainMonthDayLike, builder: Partial<PlainMonthDayBuilder>): PlainMonthDay => {
  return from(element).with(builder)
}

export function isEqual(element: PlainMonthDayLike, other: PlainMonthDayLike): boolean
export function isEqual(element: PlainMonthDayLike | null, other: PlainMonthDayLike | null): boolean
export function isEqual(element: PlainMonthDayLike | undefined, other: PlainMonthDayLike | undefined): boolean
export function isEqual(element: PlainMonthDayLike | null | undefined, other: PlainMonthDayLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: PlainMonthDayLike, other: PlainMonthDayLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: PlainMonthDayLike, other: PlainMonthDayLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

// export type MonthDayFormatOptions = {
//   month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined
//   day?: 'numeric' | '2-digit' | undefined
// }
//
// export const format = (element: PlainMonthDayLike, locale: Locale, options: MonthDayFormatOptions): string => {
//   const plainMonthDay = from(element)
//
//   const date = new Date(2000, plainMonthDay.month - 1, plainMonthDay.day)
//
//   const formatter = new Intl.DateTimeFormat(locale, options)
//   return formatter.format(date)
// }
