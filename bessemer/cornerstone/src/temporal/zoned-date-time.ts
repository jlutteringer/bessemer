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
import { DateFormatOptions, PlainDateBuilder } from '@bessemer/cornerstone/temporal/plain-date'

export type ZonedDateTime = Temporal.ZonedDateTime
export const Namespace = ResourceKeys.createNamespace('zoned-date-time')
export type ZonedDateTimeLiteral = NominalType<string, typeof Namespace>
export type ZonedDateTimeBuilder = PlainDateBuilder &
  PlainTimeBuilder & {
    timeZone: TimeZoneId
  }

export type ZonedDateTimeLike = ZonedDateTime | ZonedDateTimeLiteral | ZonedDateTimeBuilder

export function from(value: ZonedDateTimeLike | string): ZonedDateTime
export function from(value: ZonedDateTimeLike | string | null): ZonedDateTime | null
export function from(value: ZonedDateTimeLike | string | undefined): ZonedDateTime | undefined
export function from(value: ZonedDateTimeLike | string | null | undefined): ZonedDateTime | null | undefined
export function from(value: ZonedDateTimeLike | string | null | undefined): ZonedDateTime | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.ZonedDateTime) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.ZonedDateTime.from(value)
}

export const CompareBy: Comparator<ZonedDateTime> = (first: ZonedDateTime, second: ZonedDateTime): number =>
  Temporal.PlainDateTime.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<ZonedDateTime, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.ZonedDateTime.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export const fromInstant = (instant: Instants.InstantLike, zone: TimeZoneId): ZonedDateTime => {
  return Instants.from(instant).toZonedDateTimeISO(zone)
}

export function toLiteral(likeValue: ZonedDateTimeLike): ZonedDateTimeLiteral
export function toLiteral(likeValue: ZonedDateTimeLike | null): ZonedDateTimeLiteral | null
export function toLiteral(likeValue: ZonedDateTimeLike | undefined): ZonedDateTimeLiteral | undefined
export function toLiteral(likeValue: ZonedDateTimeLike | null | undefined): ZonedDateTimeLiteral | null | undefined
export function toLiteral(likeValue: ZonedDateTimeLike | null | undefined): ZonedDateTimeLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)
  return value.toString() as ZonedDateTimeLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isPlainDateTime = (value: unknown): value is ZonedDateTime => {
  return value instanceof Temporal.PlainDateTime
}

export const now = (zone: TimeZoneId, clock = Clocks.Default): ZonedDateTime => {
  return fromInstant(clock.instant(), zone)
}

export const merge = (element: ZonedDateTimeLike, builder: Partial<ZonedDateTimeBuilder>): ZonedDateTime => {
  return from(element).with(builder)
}

export const add = (element: ZonedDateTimeLike, duration: Durations.DurationLike): ZonedDateTime => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: ZonedDateTimeLike, duration: Durations.DurationLike): ZonedDateTime => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: ZonedDateTimeLike, other: ZonedDateTimeLike): Durations.Duration => {
  return from(element).until(from(other))
}

export const round = (element: ZonedDateTimeLike, unit: TimeUnit): ZonedDateTime => {
  return from(element).round({ smallestUnit: unit })
}

export function isEqual(element: ZonedDateTimeLike, other: ZonedDateTimeLike): boolean
export function isEqual(element: ZonedDateTimeLike | null, other: ZonedDateTimeLike | null): boolean
export function isEqual(element: ZonedDateTimeLike | undefined, other: ZonedDateTimeLike | undefined): boolean
export function isEqual(element: ZonedDateTimeLike | null | undefined, other: ZonedDateTimeLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: ZonedDateTimeLike, other: ZonedDateTimeLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: ZonedDateTimeLike, other: ZonedDateTimeLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export type DateTimeFormatOptions = DateFormatOptions & TimeFormatOptions

// JOHN need to consider what to do about time zone offset vs. time zone id discrepancy
// export const format = (element: ZonedDateTimeLike, locale: Locale, options: DateTimeFormatOptions): string => {
//   const zonedDateTime = from(element)
//
//   // Convert PlainDateTime to Date
//   const date = new Date(
//     zonedDateTime.year,
//     zonedDateTime.month - 1, // Date months are 0-based
//     zonedDateTime.day,
//     zonedDateTime.hour,
//     zonedDateTime.minute,
//     zonedDateTime.second,
//     zonedDateTime.millisecond
//   )
//
//   const formatter = new Intl.DateTimeFormat(locale, { ...options, timeZone: zonedDateTime.timeZoneId })
//   return formatter.format(date)
// }
