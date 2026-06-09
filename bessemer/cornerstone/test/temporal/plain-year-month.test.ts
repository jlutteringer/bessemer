import { Clocks, Locales, PlainYearMonths, Results, TimeZoneIds } from '@bessemer/cornerstone'
import { Temporal } from '@js-temporal/polyfill'

describe('PlainYearMonths.parseString', () => {
  test('should parse valid year-month string', () => {
    const result = PlainYearMonths.parseString('2024-07')

    Results.assertSuccess(result)
    expect(result.year).toBe(2024)
    expect(result.month).toBe(7)
  })

  test('should parse January', () => {
    const result = PlainYearMonths.parseString('2024-01')

    Results.assertSuccess(result)
    expect(result.year).toBe(2024)
    expect(result.month).toBe(1)
  })

  test('should parse December', () => {
    const result = PlainYearMonths.parseString('2024-12')

    Results.assertSuccess(result)
    expect(result.year).toBe(2024)
    expect(result.month).toBe(12)
  })

  test('should fail on invalid format', () => {
    const result = PlainYearMonths.parseString('invalid')

    Results.assertFailure(result)
  })

  test('should fail on invalid month', () => {
    const result = PlainYearMonths.parseString('2024-13')

    Results.assertFailure(result)
  })
})

describe('PlainYearMonths.from', () => {
  test('should parse valid year-month string', () => {
    const result = PlainYearMonths.from('2024-03')

    expect(result).toBeInstanceOf(Temporal.PlainYearMonth)
    expect(result.year).toBe(2024)
    expect(result.month).toBe(3)
  })

  test('should return same instance when given a PlainYearMonth', () => {
    const original = Temporal.PlainYearMonth.from('2024-06')
    const result = PlainYearMonths.from(original)

    expect(result).toBe(original)
  })

  test('should construct from builder object', () => {
    const result = PlainYearMonths.from({ year: 2023, month: 11 })

    expect(result.year).toBe(2023)
    expect(result.month).toBe(11)
  })

  test('should throw on invalid string', () => {
    expect(() => PlainYearMonths.from('invalid')).toThrow()
  })

  test('should return null for null input', () => {
    expect(PlainYearMonths.from(null)).toBeNull()
  })

  test('should return undefined for undefined input', () => {
    expect(PlainYearMonths.from(undefined)).toBeUndefined()
  })
})

describe('PlainYearMonths.now', () => {
  test('should return current year-month in UTC', () => {
    const fixedInstant = Temporal.Instant.from('2024-07-15T14:30:00Z')
    const clock = Clocks.fixed(fixedInstant, TimeZoneIds.Utc)

    const result = PlainYearMonths.now(TimeZoneIds.Utc, clock)

    expect(result.year).toBe(2024)
    expect(result.month).toBe(7)
  })

  test('should respect timezone offset', () => {
    const fixedInstant = Temporal.Instant.from('2024-07-31T23:00:00Z')
    const clock = Clocks.fixed(fixedInstant, TimeZoneIds.from('America/New_York'))

    const result = PlainYearMonths.now(TimeZoneIds.from('America/New_York'), clock)

    // EDT is UTC-4, so 2024-07-31T23:00Z = 2024-07-31T19:00 EDT (still July)
    expect(result.year).toBe(2024)
    expect(result.month).toBe(7)
  })

  test('should use default system clock when no clock provided', () => {
    const result = PlainYearMonths.now(TimeZoneIds.Utc)

    expect(result.year).toBeGreaterThanOrEqual(2024)
    expect(result.month).toBeGreaterThanOrEqual(1)
    expect(result.month).toBeLessThanOrEqual(12)
  })
})

describe('PlainYearMonths.toLiteral', () => {
  test('should convert PlainYearMonth to literal string', () => {
    const yearMonth = PlainYearMonths.from('2024-07')
    const result = PlainYearMonths.toLiteral(yearMonth)

    expect(result).toBe('2024-07')
  })

  test('should convert builder to literal', () => {
    const result = PlainYearMonths.toLiteral({ year: 2023, month: 12 })

    expect(result).toBe('2023-12')
  })

  test('should return null for null input', () => {
    expect(PlainYearMonths.toLiteral(null)).toBeNull()
  })

  test('should return undefined for undefined input', () => {
    expect(PlainYearMonths.toLiteral(undefined)).toBeUndefined()
  })
})

describe('PlainYearMonths.add', () => {
  test('should add months correctly', () => {
    const yearMonth = PlainYearMonths.from('2024-03')
    const result = PlainYearMonths.add(yearMonth, { months: 3 })

    expect(result.year).toBe(2024)
    expect(result.month).toBe(6)
  })

  test('should roll over to next year', () => {
    const yearMonth = PlainYearMonths.from('2024-11')
    const result = PlainYearMonths.add(yearMonth, { months: 3 })

    expect(result.year).toBe(2025)
    expect(result.month).toBe(2)
  })

  test('should add years', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.add(yearMonth, { years: 2 })

    expect(result.year).toBe(2026)
    expect(result.month).toBe(6)
  })
})

describe('PlainYearMonths.subtract', () => {
  test('should subtract months correctly', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.subtract(yearMonth, { months: 3 })

    expect(result.year).toBe(2024)
    expect(result.month).toBe(3)
  })

  test('should roll back to previous year', () => {
    const yearMonth = PlainYearMonths.from('2024-02')
    const result = PlainYearMonths.subtract(yearMonth, { months: 3 })

    expect(result.year).toBe(2023)
    expect(result.month).toBe(11)
  })

  test('should subtract years', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.subtract(yearMonth, { years: 1 })

    expect(result.year).toBe(2023)
    expect(result.month).toBe(6)
  })
})

describe('PlainYearMonths.until', () => {
  test('should return duration between two year-months', () => {
    const start = PlainYearMonths.from('2024-01')
    const end = PlainYearMonths.from('2024-07')

    const result = PlainYearMonths.until(start, end)

    expect(result.months).toBe(6)
  })

  test('should return duration spanning years', () => {
    const start = PlainYearMonths.from('2023-10')
    const end = PlainYearMonths.from('2024-03')

    const result = PlainYearMonths.until(start, end)

    expect(result.months).toBe(5)
  })
})

describe('PlainYearMonths.isEqual', () => {
  test('should return true for equal year-months', () => {
    const a = PlainYearMonths.from('2024-05')
    const b = PlainYearMonths.from('2024-05')

    expect(PlainYearMonths.isEqual(a, b)).toBe(true)
  })

  test('should return false for different years', () => {
    const a = PlainYearMonths.from('2024-05')
    const b = PlainYearMonths.from('2023-05')

    expect(PlainYearMonths.isEqual(a, b)).toBe(false)
  })

  test('should return false for different months', () => {
    const a = PlainYearMonths.from('2024-05')
    const b = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isEqual(a, b)).toBe(false)
  })

  test('should return true for equal nulls', () => {
    expect(PlainYearMonths.isEqual(null, null)).toBe(true)
  })

  test('should return false for null vs non-null', () => {
    expect(PlainYearMonths.isEqual(null, PlainYearMonths.from('2024-05'))).toBe(false)
  })
})

describe('PlainYearMonths.isBefore', () => {
  test('should return true when year is earlier', () => {
    const earlier = PlainYearMonths.from('2023-06')
    const later = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isBefore(earlier, later)).toBe(true)
  })

  test('should return true when same year but earlier month', () => {
    const earlier = PlainYearMonths.from('2024-03')
    const later = PlainYearMonths.from('2024-08')

    expect(PlainYearMonths.isBefore(earlier, later)).toBe(true)
  })

  test('should return false when later', () => {
    const earlier = PlainYearMonths.from('2023-06')
    const later = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isBefore(later, earlier)).toBe(false)
  })

  test('should return false for same year-month', () => {
    const yearMonth = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isBefore(yearMonth, yearMonth)).toBe(false)
  })
})

describe('PlainYearMonths.isAfter', () => {
  test('should return true when year is later', () => {
    const earlier = PlainYearMonths.from('2023-06')
    const later = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isAfter(later, earlier)).toBe(true)
  })

  test('should return true when same year but later month', () => {
    const earlier = PlainYearMonths.from('2024-03')
    const later = PlainYearMonths.from('2024-08')

    expect(PlainYearMonths.isAfter(later, earlier)).toBe(true)
  })

  test('should return false when earlier', () => {
    const earlier = PlainYearMonths.from('2023-06')
    const later = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isAfter(earlier, later)).toBe(false)
  })

  test('should return false for same year-month', () => {
    const yearMonth = PlainYearMonths.from('2024-06')

    expect(PlainYearMonths.isAfter(yearMonth, yearMonth)).toBe(false)
  })
})

describe('PlainYearMonths.merge', () => {
  test('should update year', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.merge(yearMonth, { year: 2025 })

    expect(result.year).toBe(2025)
    expect(result.month).toBe(6)
  })

  test('should update month', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.merge(yearMonth, { month: 9 })

    expect(result.year).toBe(2024)
    expect(result.month).toBe(9)
  })

  test('should update both year and month', () => {
    const yearMonth = PlainYearMonths.from('2024-06')
    const result = PlainYearMonths.merge(yearMonth, { year: 2026, month: 1 })

    expect(result.year).toBe(2026)
    expect(result.month).toBe(1)
  })
})

describe('PlainYearMonths.format', () => {
  test('should format with long month name and year', () => {
    const yearMonth = PlainYearMonths.from('2024-07')
    const result = PlainYearMonths.format(yearMonth, Locales.AmericanEnglish, { month: 'long', year: 'numeric' })

    expect(result).toContain('July')
    expect(result).toContain('2024')
  })

  test('should format with short month name', () => {
    const yearMonth = PlainYearMonths.from('2024-12')
    const result = PlainYearMonths.format(yearMonth, Locales.AmericanEnglish, { month: 'short', year: 'numeric' })

    expect(result).toContain('Dec')
    expect(result).toContain('2024')
  })

  test('should format with numeric month and year', () => {
    const yearMonth = PlainYearMonths.from('2024-03')
    const result = PlainYearMonths.format(yearMonth, Locales.AmericanEnglish, { month: 'numeric', year: 'numeric' })

    expect(result).toContain('3')
    expect(result).toContain('2024')
  })

  test('should work with builder input', () => {
    const result = PlainYearMonths.format({ year: 2024, month: 1 }, Locales.AmericanEnglish, { month: 'long', year: 'numeric' })

    expect(result).toContain('January')
    expect(result).toContain('2024')
  })
})
