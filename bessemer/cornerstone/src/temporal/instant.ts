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
import * as Chrono from '@bessemer/cornerstone/temporal/chrono'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'
import { TimeZoneId } from '@bessemer/cornerstone/temporal/time-zone-id'
import * as PlainDateTimes from '@bessemer/cornerstone/temporal/plain-date-time'
import { Locale } from '@bessemer/cornerstone/intl/locale'

export type Instant = Temporal.Instant
export const Namespace = ResourceKeys.createNamespace('instant')
export type InstantLiteral = NominalType<string, typeof Namespace>
export type InstantLike = Instant | Date | InstantLiteral

export function from(value: InstantLike | string): Instant
export function from(value: InstantLike | string | null): Instant | null
export function from(value: InstantLike | string | undefined): Instant | undefined
export function from(value: InstantLike | string | null | undefined): Instant | null | undefined
export function from(value: InstantLike | string | null | undefined): Instant | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.Instant) {
    return value
  }
  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.Instant.fromEpochMilliseconds(value.getTime())
}

export const CompareBy: Comparator<Instant> = (first: Instant, second: Instant): number => Temporal.Instant.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<Instant, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.Instant.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export function toLiteral(value: InstantLike): InstantLiteral
export function toLiteral(value: InstantLike | null): InstantLiteral | null
export function toLiteral(value: InstantLike | undefined): InstantLiteral | undefined
export function toLiteral(value: InstantLike | null | undefined): InstantLiteral | null | undefined
export function toLiteral(value: InstantLike | null | undefined): InstantLiteral | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  return Chrono.instantToLiteral(from(value))
}

export function toDate(value: InstantLike): Date
export function toDate(value: InstantLike | null): Date | null
export function toDate(value: InstantLike | undefined): Date | undefined
export function toDate(value: InstantLike | null | undefined): Date | null | undefined
export function toDate(value: InstantLike | null | undefined): Date | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  return new Date(from(value).epochMilliseconds)
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it))).meta({
  type: 'string',
  format: 'date-time',
})

export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString).meta({
  type: 'string',
  format: 'date-time',
})

export const isInstant = Chrono._isInstant

export const now = (clock = Clocks.Default): Instant => {
  return clock.instant()
}

export const add = (element: InstantLike, duration: Durations.DurationLike): Instant => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: InstantLike, duration: Durations.DurationLike): Instant => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: InstantLike, other: InstantLike): Durations.Duration => {
  return from(element).until(from(other))
}

export const round = (element: InstantLike, unit: Chrono.TimeUnit): Instant => {
  return from(element).round({ smallestUnit: unit })
}

export function isEqual(element: InstantLike, other: InstantLike): boolean
export function isEqual(element: InstantLike | null, other: InstantLike | null): boolean
export function isEqual(element: InstantLike | undefined, other: InstantLike | undefined): boolean
export function isEqual(element: InstantLike | null | undefined, other: InstantLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: InstantLike, other: InstantLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: InstantLike, other: InstantLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export const format = (element: InstantLike, timeZone: TimeZoneId, locale: Locale, options: PlainDateTimes.DateTimeFormatOptions): string => {
  const plainDateTime = PlainDateTimes.fromInstant(from(element), timeZone)
  return PlainDateTimes.format(plainDateTime, locale, options)
}
