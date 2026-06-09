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

export type PlainDate = Temporal.PlainDate
export const Namespace = ResourceKeys.createNamespace('plain-date')
export type PlainDateLiteral = NominalType<string, typeof Namespace>
export type PlainDateBuilder = {
  year: number
  month: number
  day: number
}

export type PlainDateLike = PlainDate | PlainDateLiteral | PlainDateBuilder

export function from(value: PlainDateLike | string): PlainDate
export function from(value: PlainDateLike | string | null): PlainDate | null
export function from(value: PlainDateLike | string | undefined): PlainDate | undefined
export function from(value: PlainDateLike | string | null | undefined): PlainDate | null | undefined
export function from(value: PlainDateLike | string | null | undefined): PlainDate | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.PlainDate) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.PlainDate.from(value)
}

export const CompareBy: Comparator<PlainDate> = (first: PlainDate, second: PlainDate): number => Temporal.PlainDateTime.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<PlainDate, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.PlainDate.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export const fromInstant = (instant: Instants.InstantLike, zone: TimeZoneId): PlainDate => {
  return Instants.from(instant).toZonedDateTimeISO(zone).toPlainDate()
}

export function toLiteral(likeValue: PlainDateLike): PlainDateLiteral
export function toLiteral(likeValue: PlainDateLike | null): PlainDateLiteral | null
export function toLiteral(likeValue: PlainDateLike | undefined): PlainDateLiteral | undefined
export function toLiteral(likeValue: PlainDateLike | null | undefined): PlainDateLiteral | null | undefined
export function toLiteral(likeValue: PlainDateLike | null | undefined): PlainDateLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)
  return value.toString() as PlainDateLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isPlainDateTime = (value: unknown): value is PlainDate => {
  return value instanceof Temporal.PlainDateTime
}

export const now = (zone: TimeZoneId, clock = Clocks.Default): PlainDate => {
  return fromInstant(clock.instant(), zone)
}

export const merge = (element: PlainDateLike, builder: Partial<PlainDateBuilder>): PlainDate => {
  return from(element).with(builder)
}

export const add = (element: PlainDateLike, duration: Durations.DurationLike): PlainDate => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: PlainDateLike, duration: Durations.DurationLike): PlainDate => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: PlainDateLike, other: PlainDateLike): Durations.Duration => {
  return from(element).until(from(other))
}

export function isEqual(element: PlainDateLike, other: PlainDateLike): boolean
export function isEqual(element: PlainDateLike | null, other: PlainDateLike | null): boolean
export function isEqual(element: PlainDateLike | undefined, other: PlainDateLike | undefined): boolean
export function isEqual(element: PlainDateLike | null | undefined, other: PlainDateLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: PlainDateLike, other: PlainDate): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: PlainDateLike, other: PlainDate): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export type DateFormatOptions = {
  era?: 'long' | 'short' | 'narrow' | undefined
  weekday?: 'long' | 'short' | 'narrow' | undefined
  year?: 'numeric' | '2-digit' | undefined
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined
  day?: 'numeric' | '2-digit' | undefined
}

export const format = (element: PlainDateLike, locale: Locale, options: DateFormatOptions): string => {
  const plainDate = from(element)

  const date = new Date(
    plainDate.year,
    plainDate.month - 1,
    plainDate.day
  )

  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}
