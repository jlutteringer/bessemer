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
import * as Clocks from '@bessemer/cornerstone/temporal/clock'
import * as Durations from '@bessemer/cornerstone/temporal/duration'
import * as Instants from '@bessemer/cornerstone/temporal/instant'
import { TimeZoneId } from '@bessemer/cornerstone/temporal/time-zone-id'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'
import { Locale } from '@bessemer/cornerstone/intl/locale'

export type PlainYearMonth = Temporal.PlainYearMonth
export const Namespace = ResourceKeys.createNamespace('plain-year-month')
export type PlainYearMonthLiteral = NominalType<string, typeof Namespace>
export type PlainYearMonthBuilder = {
  year: number
  month: number
}

export type PlainYearMonthLike = PlainYearMonth | PlainYearMonthLiteral | PlainYearMonthBuilder

export function from(value: PlainYearMonthLike | string): PlainYearMonth
export function from(value: PlainYearMonthLike | string | null): PlainYearMonth | null
export function from(value: PlainYearMonthLike | string | undefined): PlainYearMonth | undefined
export function from(value: PlainYearMonthLike | string | null | undefined): PlainYearMonth | null | undefined
export function from(value: PlainYearMonthLike | string | null | undefined): PlainYearMonth | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.PlainYearMonth) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.PlainYearMonth.from(value)
}

export const CompareBy: Comparator<PlainYearMonth> = (first: PlainYearMonth, second: PlainYearMonth): number =>
  Temporal.PlainYearMonth.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<PlainYearMonth, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.PlainYearMonth.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export const fromInstant = (instant: Instants.InstantLike, zone: TimeZoneId): PlainYearMonth => {
  return Instants.from(instant).toZonedDateTimeISO(zone).toPlainDate().toPlainYearMonth()
}

export function toLiteral(likeValue: PlainYearMonthLike): PlainYearMonthLiteral
export function toLiteral(likeValue: PlainYearMonthLike | null): PlainYearMonthLiteral | null
export function toLiteral(likeValue: PlainYearMonthLike | undefined): PlainYearMonthLiteral | undefined
export function toLiteral(likeValue: PlainYearMonthLike | null | undefined): PlainYearMonthLiteral | null | undefined
export function toLiteral(likeValue: PlainYearMonthLike | null | undefined): PlainYearMonthLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)
  return value.toString() as PlainYearMonthLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isPlainYearMonth = (value: unknown): value is PlainYearMonth => {
  return value instanceof Temporal.PlainYearMonth
}

export const now = (zone: TimeZoneId, clock = Clocks.Default): PlainYearMonth => {
  return fromInstant(clock.instant(), zone)
}

export const merge = (element: PlainYearMonthLike, builder: Partial<PlainYearMonthBuilder>): PlainYearMonth => {
  return from(element).with(builder)
}

export const add = (element: PlainYearMonthLike, duration: Durations.DurationLike): PlainYearMonth => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: PlainYearMonthLike, duration: Durations.DurationLike): PlainYearMonth => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: PlainYearMonthLike, other: PlainYearMonthLike): Durations.Duration => {
  return from(element).until(from(other))
}

export function isEqual(element: PlainYearMonthLike, other: PlainYearMonthLike): boolean
export function isEqual(element: PlainYearMonthLike | null, other: PlainYearMonthLike | null): boolean
export function isEqual(element: PlainYearMonthLike | undefined, other: PlainYearMonthLike | undefined): boolean
export function isEqual(element: PlainYearMonthLike | null | undefined, other: PlainYearMonthLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: PlainYearMonthLike, other: PlainYearMonthLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: PlainYearMonthLike, other: PlainYearMonthLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export type YearMonthFormatOptions = {
  era?: 'long' | 'short' | 'narrow' | undefined
  year?: 'numeric' | '2-digit' | undefined
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined
}

export const format = (element: PlainYearMonthLike, locale: Locale, options: YearMonthFormatOptions): string => {
  const plainYearMonth = from(element)

  const date = new Date(plainYearMonth.year, plainYearMonth.month - 1, 1)

  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}
