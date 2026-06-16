import { Temporal } from '@js-temporal/polyfill'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import { NominalType } from '@bessemer/cornerstone/types'
import { Comparator } from '@bessemer/cornerstone/comparator'
import * as Equalitors from '@bessemer/cornerstone/equalitor'
import * as Results from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as Errors from '@bessemer/cornerstone/error/error'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'
import * as Clocks from '@bessemer/cornerstone/temporal/clock'
import * as Durations from '@bessemer/cornerstone/temporal/duration'
import * as Instants from '@bessemer/cornerstone/temporal/instant'
import { TimeZoneId } from '@bessemer/cornerstone/temporal/time-zone-id'
import { TimeUnit } from '@bessemer/cornerstone/temporal/chrono'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'
import { Locale } from '@bessemer/cornerstone/intl/locale'

export type PlainTime = Temporal.PlainTime
export const Namespace = ResourceKeys.createNamespace('plain-time')
export type PlainTimeLiteral = NominalType<string, typeof Namespace>
export type PlainTimeBuilder = {
  hour: number
  minute?: number
  second?: number
  millisecond?: number
  microsecond?: number
  nanosecond?: number
}
export type PlainTimeLike = PlainTime | PlainTimeLiteral | PlainTimeBuilder

export function from(value: PlainTimeLike | string): PlainTime
export function from(value: PlainTimeLike | string | null): PlainTime | null
export function from(value: PlainTimeLike | string | undefined): PlainTime | undefined
export function from(value: PlainTimeLike | string | null | undefined): PlainTime | null | undefined
export function from(value: PlainTimeLike | string | null | undefined): PlainTime | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.PlainTime) {
    return value
  }
  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.PlainTime.from(value)
}

export const CompareBy: Comparator<PlainTime> = (first: PlainTime, second: PlainTime): number => Temporal.PlainTime.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Results.Result<PlainTime, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.PlainTime.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export const fromDuration = (duration: Durations.DurationLike): PlainTime => {
  return Midnight.add(Durations.from(duration))
}

export const fromInstant = (instant: Instants.InstantLike, zone: TimeZoneId): PlainTime => {
  return Instants.from(instant).toZonedDateTimeISO(zone).toPlainTime()
}

export function toLiteral(likeValue: PlainTimeLike): PlainTimeLiteral
export function toLiteral(likeValue: PlainTimeLike | null): PlainTimeLiteral | null
export function toLiteral(likeValue: PlainTimeLike | undefined): PlainTimeLiteral | undefined
export function toLiteral(likeValue: PlainTimeLike | null | undefined): PlainTimeLiteral | null | undefined
export function toLiteral(likeValue: PlainTimeLike | null | undefined): PlainTimeLiteral | null | undefined {
  if (Objects.isNil(likeValue)) {
    return likeValue
  }

  const value = from(likeValue)

  if (value.second === 0 && value.millisecond === 0 && value.microsecond === 0 && value.nanosecond === 0) {
    return `${value.hour.toString().padStart(2, '0')}:${value.minute.toString().padStart(2, '0')}` as PlainTimeLiteral
  }

  return value.toString() as PlainTimeLiteral
}

export const SchemaLiteral = ZodUtil.structuredRefine<PlainTimeLiteral>(ZodUtil.string(), (it: string) =>
  Results.map(parseString(it), (it) => toLiteral(it))
)
export const SchemaInstance = ZodUtil.structuredTransform(ZodUtil.string(), parseString)

export const isPlainTime = (value: unknown): value is PlainTime => {
  return value instanceof Temporal.PlainTime
}

export const now = (zone: TimeZoneId, clock = Clocks.Default): PlainTime => {
  return fromInstant(clock.instant(), zone)
}

export const merge = (element: PlainTimeLike, builder: Partial<PlainTimeBuilder>): PlainTime => {
  return from(element).with(builder)
}

export const add = (element: PlainTimeLike, duration: Durations.DurationLike): PlainTime => {
  return from(element).add(Durations.from(duration))
}

export const subtract = (element: PlainTimeLike, duration: Durations.DurationLike): PlainTime => {
  return from(element).subtract(Durations.from(duration))
}

export const until = (element: PlainTimeLike, other: PlainTimeLike): Durations.Duration => {
  return from(element).until(from(other))
}

export const round = (element: PlainTimeLike, unit: TimeUnit): PlainTime => {
  return from(element).round({ smallestUnit: unit })
}

export function isEqual(element: PlainTimeLike, other: PlainTimeLike): boolean
export function isEqual(element: PlainTimeLike | null, other: PlainTimeLike | null): boolean
export function isEqual(element: PlainTimeLike | undefined, other: PlainTimeLike | undefined): boolean
export function isEqual(element: PlainTimeLike | null | undefined, other: PlainTimeLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isBefore = (element: PlainTimeLike, other: PlainTimeLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isAfter = (element: PlainTimeLike, other: PlainTimeLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export type TimeFormatOptions = {
  hour12?: boolean | undefined
  hour?: 'numeric' | '2-digit' | undefined
  minute?: 'numeric' | '2-digit' | undefined
  second?: 'numeric' | '2-digit' | undefined
}

export const format = (element: PlainTimeLike, locale: Locale, options?: TimeFormatOptions): string => {
  const plainTime = from(element)

  const date = new Date(1970, 0, 1, plainTime.hour, plainTime.minute, plainTime.second, plainTime.millisecond)

  if (Objects.isNil(options) || (Objects.isNil(options.hour) && Objects.isNil(options.minute) && Objects.isNil(options.second))) {
    options = { ...options, hour: 'numeric', minute: '2-digit', ...(plainTime.second > 0 || plainTime.millisecond > 0 ? { second: '2-digit' } : {}) }
  }

  const formatter = new Intl.DateTimeFormat(locale, options)
  return formatter.format(date)
}

export const Midnight = from({ hour: 0 })
export const Noon = from({ hour: 12 })
