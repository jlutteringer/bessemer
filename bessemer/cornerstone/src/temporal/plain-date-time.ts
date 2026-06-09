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
import { TimeUnit } from '@bessemer/cornerstone/temporal/chrono'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'
import { PlainTimeBuilder, TimeFormatOptions } from '@bessemer/cornerstone/temporal/plain-time'
import { Locale } from '@bessemer/cornerstone/intl/locale'
import { DateFormatOptions, PlainDateBuilder } from '@bessemer/cornerstone/temporal/plain-date'

export type PlainDateTime = Temporal.PlainDateTime
export const Namespace = ResourceKeys.createNamespace('plain-date-time')
export type PlainDateTimeLiteral = NominalType<string, typeof Namespace>
export type PlainDateTimeBuilder = PlainDateBuilder & PlainTimeBuilder

export type PlainDateTimeLike = PlainDateTime | PlainDateTimeLiteral | PlainDateTimeBuilder

export function from(value: PlainDateTimeLike | string): PlainDateTime
export function from(value: PlainDateTimeLike | string | null): PlainDateTime | null
export function from(value: PlainDateTimeLike | string | undefined): PlainDateTime | undefined
export function from(value: PlainDateTimeLike | string | null | undefined): PlainDateTime | null | undefined
export function from(value: PlainDateTimeLike | string | null | undefined): PlainDateTime | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.PlainDateTime) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.PlainDateTime.from(value)
}

export const CompareBy: Comparator<PlainDateTime> = (first: PlainDateTime, second: PlainDateTime): number =>
  Temporal.PlainDateTime.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<PlainDateTime, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.PlainDateTime.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export const fromInstant = (instant: Instants.InstantLike, zone: TimeZoneId): PlainDateTime => {
  return Instants.from(instant).toZonedDateTimeISO(zone).toPlainDateTime()
}

export function toLiteral(likeValue: PlainDateTimeLike): PlainDateTimeLiteral
export function toLiteral(likeValue: PlainDateTimeLike | null): PlainDateTimeLiteral | null
export function toLiteral(likeValue: PlainDateTimeLike | undefined): PlainDateTimeLiteral | undefined
export function toLiteral(likeValue: PlainDateTimeLike | null | undefined): PlainDateTimeLiteral | null | undefined
export function toLiteral(likeValue: PlainDateTimeLike | null | undefined): PlainDateTimeLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)
  return value.toString() as PlainDateTimeLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isPlainDateTime = (value: unknown): value is PlainDateTime => {
  return value instanceof Temporal.PlainDateTime
}

export const now = (zone: TimeZoneId, clock = Clocks.Default): PlainDateTime => {
  return fromInstant(clock.instant(), zone)
}

export const merge = (element: PlainDateTimeLike, builder: PlainDateTimeBuilder): PlainDateTime => {
  return from(element).with(builder)
}

export const add = (element: PlainDateTimeLike, duration: Durations.DurationLike): PlainDateTime => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: PlainDateTimeLike, duration: Durations.DurationLike): PlainDateTime => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: PlainDateTimeLike, other: PlainDateTimeLike): Durations.Duration => {
  return from(element).until(from(other))
}

export const round = (element: PlainDateTimeLike, unit: TimeUnit): PlainDateTime => {
  return from(element).round({ smallestUnit: unit })
}

export function isEqual(element: PlainDateTimeLike, other: PlainDateTimeLike): boolean
export function isEqual(element: PlainDateTimeLike | null, other: PlainDateTimeLike | null): boolean
export function isEqual(element: PlainDateTimeLike | undefined, other: PlainDateTimeLike | undefined): boolean
export function isEqual(element: PlainDateTimeLike | null | undefined, other: PlainDateTimeLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: PlainDateTimeLike, other: PlainDateTimeLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: PlainDateTimeLike, other: PlainDateTimeLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export type DateTimeFormatOptions = DateFormatOptions & TimeFormatOptions

export const format = (element: PlainDateTimeLike, locale: Locale, options: DateTimeFormatOptions): string => {
  const plainDateTime = from(element)

  const date = new Date(
    plainDateTime.year,
    plainDateTime.month - 1,
    plainDateTime.day,
    plainDateTime.hour,
    plainDateTime.minute,
    plainDateTime.second,
    plainDateTime.millisecond
  )

  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}
