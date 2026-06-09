import * as TimeZoneIds from '@bessemer/cornerstone/temporal/time-zone-id'
import * as Durations from '@bessemer/cornerstone/temporal/duration'
import * as Instants from '@bessemer/cornerstone/temporal/instant'
import { Temporal } from '@js-temporal/polyfill'

export interface Clock {
  readonly zone: TimeZoneIds.TimeZoneId

  withZone: (zone: TimeZoneIds.TimeZoneId) => Clock

  instant: () => Instants.Instant
}

class SystemClock implements Clock {
  constructor(readonly zone: TimeZoneIds.TimeZoneId) {}

  instant(): Instants.Instant {
    return Temporal.Now.instant()
  }

  withZone(zone: TimeZoneIds.TimeZoneId): Clock {
    if (zone === this.zone) {
      return this
    }

    return new SystemClock(zone)
  }
}

class FixedClock implements Clock {
  constructor(private fixedInstant: Instants.Instant, readonly zone: TimeZoneIds.TimeZoneId) {}

  instant(): Instants.Instant {
    return this.fixedInstant
  }

  withZone(zone: TimeZoneIds.TimeZoneId): Clock {
    if (zone === this.zone) {
      return this
    }

    return new FixedClock(this.fixedInstant, zone)
  }
}

class OffsetClock implements Clock {
  readonly zone: TimeZoneIds.TimeZoneId

  constructor(private clock: Clock, private offset: Durations.Duration) {
    this.zone = this.clock.zone
  }

  instant(): Instants.Instant {
    return this.clock.instant().add(this.offset)
  }

  withZone(zone: TimeZoneIds.TimeZoneId): Clock {
    if (zone === this.clock.zone) {
      return this
    }

    return new OffsetClock(this.clock.withZone(zone), this.offset)
  }
}

export const SystemUtc = new SystemClock(TimeZoneIds.Utc)
export const Default = SystemUtc

export const system = (zone: TimeZoneIds.TimeZoneId = TimeZoneIds.Utc): Clock => {
  if (zone == TimeZoneIds.Utc) {
    return SystemUtc
  }

  return new SystemClock(zone)
}

export const fixed = (fixedInstant: Instants.InstantLike, zone: TimeZoneIds.TimeZoneId = TimeZoneIds.Utc): Clock => {
  return new FixedClock(Instants.from(fixedInstant), zone)
}

export const offset = (clock: Clock, offset: Durations.DurationLike): Clock => {
  if (Durations.isZero(offset)) {
    return clock
  }

  return new OffsetClock(clock, Durations.from(offset))
}
