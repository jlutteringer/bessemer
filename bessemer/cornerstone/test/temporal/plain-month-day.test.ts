import { PlainMonthDays, Results } from '@bessemer/cornerstone'
import { Temporal } from '@js-temporal/polyfill'

describe('PlainMonthDays.parseString', () => {
  test('should parse valid month-day string', () => {
    const result = PlainMonthDays.parseString('07-15')

    Results.assertSuccess(result)
    expect(result.monthCode).toBe('M07')
    expect(result.day).toBe(15)
  })

  test('should parse January 1st', () => {
    const result = PlainMonthDays.parseString('01-01')

    Results.assertSuccess(result)
    expect(result.monthCode).toBe('M01')
    expect(result.day).toBe(1)
  })

  test('should parse December 31st', () => {
    const result = PlainMonthDays.parseString('12-31')

    Results.assertSuccess(result)
    expect(result.monthCode).toBe('M12')
    expect(result.day).toBe(31)
  })

  test('should fail on invalid format', () => {
    const result = PlainMonthDays.parseString('invalid')

    Results.assertFailure(result)
  })

  test('should fail on invalid month', () => {
    const result = PlainMonthDays.parseString('13-01')

    Results.assertFailure(result)
  })

  test('should fail on invalid day', () => {
    const result = PlainMonthDays.parseString('01-32')

    Results.assertFailure(result)
  })
})

describe('PlainMonthDays.from', () => {
  test('should parse valid month-day string', () => {
    const result = PlainMonthDays.from('03-25')

    expect(result).toBeInstanceOf(Temporal.PlainMonthDay)
    expect(result.monthCode).toBe('M03')
    expect(result.day).toBe(25)
  })

  test('should return same instance when given a PlainMonthDay', () => {
    const original = Temporal.PlainMonthDay.from('06-15')
    const result = PlainMonthDays.from(original)

    expect(result).toBe(original)
  })

  test('should construct from builder object', () => {
    const result = PlainMonthDays.from({ month: 11, day: 28 })

    expect(result.monthCode).toBe('M11')
    expect(result.day).toBe(28)
  })

  test('should throw on invalid string', () => {
    expect(() => PlainMonthDays.from('invalid')).toThrow()
  })

  test('should return null for null input', () => {
    expect(PlainMonthDays.from(null)).toBeNull()
  })

  test('should return undefined for undefined input', () => {
    expect(PlainMonthDays.from(undefined)).toBeUndefined()
  })
})

describe('PlainMonthDays.toLiteral', () => {
  test('should convert PlainMonthDay to literal string', () => {
    const monthDay = PlainMonthDays.from('07-04')
    const result = PlainMonthDays.toLiteral(monthDay)

    expect(result).toBe('07-04')
  })

  test('should convert builder to literal', () => {
    const result = PlainMonthDays.toLiteral({ month: 12, day: 25 })

    expect(result).toBe('12-25')
  })

  test('should return null for null input', () => {
    expect(PlainMonthDays.toLiteral(null)).toBeNull()
  })

  test('should return undefined for undefined input', () => {
    expect(PlainMonthDays.toLiteral(undefined)).toBeUndefined()
  })
})

describe('PlainMonthDays.isEqual', () => {
  test('should return true for equal month-days', () => {
    const a = PlainMonthDays.from('05-10')
    const b = PlainMonthDays.from('05-10')

    expect(PlainMonthDays.isEqual(a, b)).toBe(true)
  })

  test('should return false for different months', () => {
    const a = PlainMonthDays.from('05-10')
    const b = PlainMonthDays.from('06-10')

    expect(PlainMonthDays.isEqual(a, b)).toBe(false)
  })

  test('should return false for different days', () => {
    const a = PlainMonthDays.from('05-10')
    const b = PlainMonthDays.from('05-11')

    expect(PlainMonthDays.isEqual(a, b)).toBe(false)
  })

  test('should return true for equal nulls', () => {
    expect(PlainMonthDays.isEqual(null, null)).toBe(true)
  })

  test('should return false for null vs non-null', () => {
    expect(PlainMonthDays.isEqual(null, PlainMonthDays.from('05-10'))).toBe(false)
  })
})

describe('PlainMonthDays.isBefore', () => {
  test('should return true when month is earlier', () => {
    const earlier = PlainMonthDays.from('03-15')
    const later = PlainMonthDays.from('08-15')

    expect(PlainMonthDays.isBefore(earlier, later)).toBe(true)
  })

  test('should return true when same month but earlier day', () => {
    const earlier = PlainMonthDays.from('05-10')
    const later = PlainMonthDays.from('05-20')

    expect(PlainMonthDays.isBefore(earlier, later)).toBe(true)
  })

  test('should return false when later', () => {
    const earlier = PlainMonthDays.from('03-15')
    const later = PlainMonthDays.from('08-15')

    expect(PlainMonthDays.isBefore(later, earlier)).toBe(false)
  })

  test('should return false for same month-day', () => {
    const monthDay = PlainMonthDays.from('06-21')

    expect(PlainMonthDays.isBefore(monthDay, monthDay)).toBe(false)
  })
})

describe('PlainMonthDays.isAfter', () => {
  test('should return true when month is later', () => {
    const earlier = PlainMonthDays.from('03-15')
    const later = PlainMonthDays.from('08-15')

    expect(PlainMonthDays.isAfter(later, earlier)).toBe(true)
  })

  test('should return true when same month but later day', () => {
    const earlier = PlainMonthDays.from('05-10')
    const later = PlainMonthDays.from('05-20')

    expect(PlainMonthDays.isAfter(later, earlier)).toBe(true)
  })

  test('should return false when earlier', () => {
    const earlier = PlainMonthDays.from('03-15')
    const later = PlainMonthDays.from('08-15')

    expect(PlainMonthDays.isAfter(earlier, later)).toBe(false)
  })

  test('should return false for same month-day', () => {
    const monthDay = PlainMonthDays.from('06-21')

    expect(PlainMonthDays.isAfter(monthDay, monthDay)).toBe(false)
  })
})

describe('PlainMonthDays.merge', () => {
  test('should update month', () => {
    const monthDay = PlainMonthDays.from('06-15')
    const result = PlainMonthDays.merge(monthDay, { month: 9 })

    expect(result.monthCode).toBe('M09')
    expect(result.day).toBe(15)
  })

  test('should update day', () => {
    const monthDay = PlainMonthDays.from('06-15')
    const result = PlainMonthDays.merge(monthDay, { day: 30 })

    expect(result.monthCode).toBe('M06')
    expect(result.day).toBe(30)
  })

  test('should update both month and day', () => {
    const monthDay = PlainMonthDays.from('06-15')
    const result = PlainMonthDays.merge(monthDay, { month: 12, day: 25 })

    expect(result.monthCode).toBe('M12')
    expect(result.day).toBe(25)
  })
})
