import Zod from 'zod'
import { Temporal } from '@js-temporal/polyfill'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import { NominalType } from '@bessemer/cornerstone/types'
import { Comparator } from '@bessemer/cornerstone/comparator'
import * as Equalitors from '@bessemer/cornerstone/equalitor'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as Errors from '@bessemer/cornerstone/error/error'
import * as Chrono from '@bessemer/cornerstone/temporal/chrono'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'

export type Duration = Temporal.Duration
export const Namespace = ResourceKeys.createNamespace('duration')
export type DurationLiteral = NominalType<string, typeof Namespace>
export type DurationBuilder = {
  // JOHN consider splitting into 'TimeDuration' and 'CalendarDuration' -----
  years?: number
  months?: number
  weeks?: number
  days?: number
  // -----
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
  microseconds?: number
  nanoseconds?: number
}
export type DurationLike = Duration | DurationLiteral | DurationBuilder

export function from(value: DurationLike | string): Duration
export function from(value: DurationLike | string | null): Duration | null
export function from(value: DurationLike | string | undefined): Duration | undefined
export function from(value: DurationLike | string | null | undefined): Duration | null | undefined
export function from(value: DurationLike | string | null | undefined): Duration | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  if (value instanceof Temporal.Duration) {
    return value
  }

  if (Strings.isString(value)) {
    return ErrorEvents.unpackResult(parseString(value))
  }

  return Temporal.Duration.from(value)
}

export const CompareBy: Comparator<Duration> = (first: Duration, second: Duration): number => Temporal.Duration.compare(first, second)
export const EqualBy = Equalitors.fromComparator(CompareBy)

export const parseString = (value: string): Result<Duration, ErrorEvents.ErrorEvent> => {
  try {
    return Results.success(Temporal.Duration.from(value))
  } catch (e) {
    if (!Errors.isError(e)) {
      throw e
    }

    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: e.message }))
  }
}

export function toLiteral(value: DurationLike): DurationLiteral
export function toLiteral(value: DurationLike | null): DurationLiteral | null
export function toLiteral(value: DurationLike | undefined): DurationLiteral | undefined
export function toLiteral(value: DurationLike | null | undefined): DurationLiteral | null | undefined
export function toLiteral(value: DurationLike | null | undefined): DurationLiteral | null | undefined {
  if (Objects.isNil(value)) {
    return value
  }

  return from(value).toString() as DurationLiteral
}

export const SchemaLiteral = ZodUtil.structuredTransform(Zod.string(), (it: string) => Results.map(parseString(it), (it) => toLiteral(it)))
export const SchemaInstance = ZodUtil.structuredTransform(Zod.string(), parseString)

export const isDuration = (value: unknown): value is Duration => {
  return value instanceof Temporal.Duration
}

export const merge = (element: DurationLike, builder: DurationBuilder): Duration => {
  return from(element).with(builder)
}

export const fromMilliseconds = (value: number): Duration => {
  return from({ milliseconds: value })
}

export const toMilliseconds = (duration: DurationLike): number => {
  return from(duration).total(Chrono.TimeUnit.Millisecond)
}

export const fromSeconds = (value: number): Duration => {
  return from({ seconds: value })
}

export const toSeconds = (duration: DurationLike): number => {
  return from(duration).total(Chrono.TimeUnit.Second)
}

export const fromMinutes = (value: number): Duration => {
  return from({ minutes: value })
}

export const toMinutes = (duration: DurationLike): number => {
  return from(duration).total(Chrono.TimeUnit.Minute)
}

export const fromHours = (value: number): Duration => {
  return from({ hours: value })
}

export const toHours = (duration: DurationLike): number => {
  return from(duration).total(Chrono.TimeUnit.Hour)
}

export const fromUnit = (value: number, timeUnit: Chrono.TimeUnit): Duration => {
  switch (timeUnit) {
    case Chrono.TimeUnit.Nanosecond:
      return from({ nanoseconds: value })
    case Chrono.TimeUnit.Microsecond:
      return from({ microseconds: value })
    case Chrono.TimeUnit.Millisecond:
      return from({ milliseconds: value })
    case Chrono.TimeUnit.Second:
      return from({ seconds: value })
    case Chrono.TimeUnit.Minute:
      return from({ minutes: value })
    case Chrono.TimeUnit.Hour:
      return from({ hours: value })
  }
}

export const toUnit = (duration: DurationLike, timeUnit: Chrono.TimeUnit): number => {
  return from(duration).total(timeUnit)
}

export const isZero = (duration: DurationLike): boolean => {
  return EqualBy(from(duration), Zero)
}

export const round = (element: DurationLike, unit: Chrono.TimeUnit): Duration => {
  return from(element).round({ smallestUnit: unit })
}

export const add = (...durations: Array<DurationLike>): Duration => {
  return durations.map((it) => from(it)).reduce((first, second) => first.add(second), Zero)
}

export const subtract = (...durations: Array<DurationLike>): Duration => {
  if (durations.length === 0) {
    return Zero
  }

  const instances = durations.map((it) => from(it))
  return instances.slice(1).reduce((result, current) => result.subtract(current), instances[0]!)
}

export const negate = (element: DurationLike): Duration => {
  return from(element).negated()
}

export function isEqual(element: DurationLike, other: DurationLike): boolean
export function isEqual(element: DurationLike | null, other: DurationLike | null): boolean
export function isEqual(element: DurationLike | undefined, other: DurationLike | undefined): boolean
export function isEqual(element: DurationLike | null | undefined, other: DurationLike | null | undefined): boolean {
  if (Objects.isNil(element) || Objects.isNil(other)) {
    return element === other
  }

  return EqualBy(from(element), from(other))
}

export const isLess = (element: DurationLike, other: DurationLike): boolean => {
  return CompareBy(from(element), from(other)) < 0
}

export const isGreater = (element: DurationLike, other: DurationLike): boolean => {
  return CompareBy(from(element), from(other)) > 0
}

export const Zero = from({ nanoseconds: 0 })
export const OneMillisecond = fromMilliseconds(1)
export const OneSecond = fromSeconds(1)
export const OneMinute = fromMinutes(1)
export const OneHour = fromHours(1)
export const OneDay = fromHours(24)
