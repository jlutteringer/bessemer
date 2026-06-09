import { NominalType } from '@bessemer/cornerstone/types'
import * as Durations from '@bessemer/cornerstone/temporal/duration'
import * as PlainTimes from '@bessemer/cornerstone/temporal/plain-time'
import * as Results from '@bessemer/cornerstone/result'
import Zod from 'zod'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'
import { TimeZoneId } from '@bessemer/cornerstone/temporal/time-zone-id'
import * as Instants from '@bessemer/cornerstone/temporal/instant'

export const Namespace = ResourceKeys.createNamespace('time-zone-offset')
export type TimeZoneOffset = NominalType<number, typeof Namespace>

const EighteenHours = Durations.fromHours(18)

export const parseMinutes = (value: number): Results.Result<TimeZoneOffset, ErrorEvents.ErrorEvent> => {
  if (!Number.isInteger(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset must be a round number of minutes.` }))
  }

  if (value < Durations.toMinutes(EighteenHours.negated()) || value > Durations.toMinutes(EighteenHours)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset must be between -18:00 and +18:00 inclusive.` }))
  }

  return Results.success(value as TimeZoneOffset)
}

export const parseDuration = (value: Durations.Duration): Results.Result<TimeZoneOffset, ErrorEvents.ErrorEvent> => {
  return parseMinutes(Durations.toMinutes(value))
}

export const fromMinutes = (value: number): TimeZoneOffset => {
  return ErrorEvents.unpackResult(parseMinutes(value))
}

export const fromDuration = (value: Durations.DurationLike): TimeZoneOffset => {
  return ErrorEvents.unpackResult(parseDuration(Durations.from(value)))
}

export const fromTimeZone = (timeZone: TimeZoneId, instant: Instants.Instant): TimeZoneOffset => {
  const instantWithoutMs = new Date(Math.floor(instant.epochMilliseconds / 1000) * 1000)

  // Note: We use 'en-CA' locale because it produces ISO 8601 format (YYYY-MM-DD, HH:MM:SS)
  // which is predictable and easily parseable. The locale only affects the output format,
  // not the timezone conversion - that's handled by the timeZone parameter.
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  const formatted = formatter.format(instantWithoutMs)
  const localTime = new Date(formatted + 'Z').getTime()

  const offsetMs = localTime - instantWithoutMs.getTime()
  return fromDuration({ milliseconds: offsetMs })
}

// JOHN maybe this parsing could be consolidated with LocalTime?
export const parseString = (value: string): Results.Result<TimeZoneOffset, ErrorEvents.ErrorEvent> => {
  if (value === 'Z') {
    return Results.success(0 as TimeZoneOffset)
  }

  if (!value.startsWith('+') && !value.startsWith('-')) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset must start with +, -, or be Z.` }))
  }

  const sign = value[0] === '+' ? 1 : -1
  const offsetStr = value.slice(1)

  let hours = 0
  let minutes = 0

  // Parse different formats
  if (offsetStr.length === 1) {
    // +h format
    hours = parseInt(offsetStr, 10)
    if (isNaN(hours)) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid hour value in time zone offset.` }))
    }
  } else if (offsetStr.length === 2) {
    // +hh format
    hours = parseInt(offsetStr, 10)
    if (isNaN(hours)) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid hour value in time zone offset.` }))
    }
  } else if (offsetStr.includes(':')) {
    // Formats with colons: +hh:mm or +hh:mm:ss
    const parts = offsetStr.split(':')
    if (parts.length < 2 || parts.length > 3) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid time zone offset format.` }))
    }

    hours = parseInt(parts[0]!, 10)
    minutes = parseInt(parts[1]!, 10)

    if (parts.length === 3) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid time values in time zone offset.` }))
    }

    if (isNaN(hours) || isNaN(minutes)) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid time values in time zone offset.` }))
    }
  } else if (offsetStr.length === 4) {
    // +hhmm format
    hours = parseInt(offsetStr.slice(0, 2), 10)
    minutes = parseInt(offsetStr.slice(2, 4), 10)

    if (isNaN(hours) || isNaN(minutes)) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid time values in time zone offset.` }))
    }
  } else {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid time zone offset format.` }))
  }

  if (minutes >= 60) {
    return Results.failure(
      ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset - Invalid minutes in time zone offset: must be less than 60.` })
    )
  }

  let duration = Durations.from({ hours, minutes })
  if (sign === -1) {
    duration = duration.negated()
  }

  if (Durations.isLess(duration, EighteenHours.negated()) || Durations.isGreater(duration, EighteenHours)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `TimeZoneOffset must be between -18:00 and +18:00 inclusive.` }))
  }

  return Results.success(Durations.toMinutes(duration) as TimeZoneOffset)
}

export const from = (value: string): TimeZoneOffset => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = Zod.union([ZodUtil.structuredTransform(Zod.number(), parseMinutes), ZodUtil.structuredTransform(Zod.string(), parseString)])

export const toDuration = (offset: TimeZoneOffset): Durations.Duration => {
  return Durations.fromMilliseconds(offset)
}

export const toMilliseconds = (offset: TimeZoneOffset): number => {
  return offset
}

export const toString = (offset: TimeZoneOffset): string => {
  if (offset === 0) {
    return 'Z'
  }

  const sign = offset > 0 ? '+' : '-'

  const time = PlainTimes.fromDuration(Durations.fromMinutes(Math.abs(offset)))
  return `${sign}${PlainTimes.toLiteral(time)}`
}

export const Utc = 0 as TimeZoneOffset
