import { Maths } from '@bessemer/cornerstone'
import { RoundingMode } from '@bessemer/cornerstone/math'

test('Maths.isNumber', () => {
  expect(Maths.isNumber(42)).toBe(true)
  expect(Maths.isNumber(0)).toBe(true)
  expect(Maths.isNumber(-3.14)).toBe(true)

  expect(Maths.isNumber('42')).toBe(false)
  expect(Maths.isNumber(null)).toBe(false)
  expect(Maths.isNumber(undefined)).toBe(false)
  expect(Maths.isNumber(NaN)).toBe(false)
})

test('Maths.isEven', () => {
  expect(Maths.isEven(2)).toBe(true)
  expect(Maths.isEven(0)).toBe(true)
  expect(Maths.isEven(7)).toBe(false)
  expect(Maths.isEven(-4)).toBe(true)
})

test('Maths.roundCeiling', () => {
  expect(Maths.roundCeiling(1, 0)).toBe(1)
  expect(Maths.roundCeiling(0.5, 0)).toBe(1)
  expect(Maths.roundCeiling(1.231, 2)).toBe(1.24)
  expect(Maths.roundCeiling(2.001, 2)).toBe(2.01)
  expect(Maths.roundCeiling(12.3, 0)).toBe(13)
  expect(Maths.roundCeiling(-1.5, 0)).toBe(-1)
  expect(Maths.roundCeiling(-0.4, 0)).toBe(0)
  expect(Maths.roundCeiling(3, 2)).toBe(3)
})

test('Maths.roundFloor', () => {
  expect(Maths.roundFloor(1, 0)).toBe(1)
  expect(Maths.roundFloor(0.999, 2)).toBe(0.99)
  expect(Maths.roundFloor(1.239, 2)).toBe(1.23)
  expect(Maths.roundFloor(2.675, 2)).toBe(2.67)
  expect(Maths.roundFloor(12.9, 0)).toBe(12)
  expect(Maths.roundFloor(-0.5, 0)).toBe(-1)
  expect(Maths.roundFloor(-1.231, 2)).toBe(-1.24)
})

test('Maths.roundUp', () => {
  expect(Maths.roundUp(1, 0)).toBe(1)
  expect(Maths.roundUp(0.11, 1)).toBe(0.2)
  expect(Maths.roundUp(1.201, 1)).toBe(1.3)
  expect(Maths.roundUp(12.01, 0)).toBe(13)
  expect(Maths.roundUp(-1.201, 1)).toBe(-1.3)
  expect(Maths.roundUp(-0.4, 0)).toBe(-1)
})

test('Maths.roundDown', () => {
  expect(Maths.roundDown(1, 0)).toBe(1)
  expect(Maths.roundDown(0.19, 1)).toBe(0.1)
  expect(Maths.roundDown(1.299, 1)).toBe(1.2)
  expect(Maths.roundDown(12.99, 0)).toBe(12)
  expect(Maths.roundDown(-1.299, 1)).toBe(-1.2)
  expect(Maths.roundDown(-0.5, 0)).toBe(0)
})

test('Maths.roundNearest', () => {
  expect(Maths.roundNearest(1.2345, 2)).toBe(1.23)
  expect(Maths.roundNearest(1.2355, 2)).toBe(1.24)
  // Values whose binary representation falls just below the written decimal
  expect(Maths.roundNearest(0.285, 2)).toBe(0.29)
  expect(Maths.roundNearest(1.005, 2)).toBe(1.01)
  expect(Maths.roundNearest(2.675, 2)).toBe(2.68)
  expect(Maths.roundNearest(10.075, 2)).toBe(10.08)
  expect(Maths.roundNearest(1234.5, 0)).toBe(1235)
  expect(Maths.roundNearest(-2.5, 0)).toBe(-2)
  expect(Maths.roundNearest(-1.005, 2)).toBe(-1)
  expect(Maths.roundNearest(1.5e-7, 7)).toBe(2e-7)
  expect(Maths.roundNearest(7, 2)).toBe(7)
})

test('Maths.roundHalfEven', () => {
  expect(Maths.roundHalfEven(2.5, 0)).toBe(2)
  expect(Maths.roundHalfEven(3.5, 0)).toBe(4)
  expect(Maths.roundHalfEven(0.125, 2)).toBe(0.12)
  expect(Maths.roundHalfEven(1.225, 2)).toBe(1.22)
  expect(Maths.roundHalfEven(1.235, 2)).toBe(1.24)
  expect(Maths.roundHalfEven(2.675, 2)).toBe(2.68)
  expect(Maths.roundHalfEven(12.5, 0)).toBe(12)
  expect(Maths.roundHalfEven(1.2251, 2)).toBe(1.23)

  expect(Maths.roundHalfEven(-2.5, 0)).toBe(-2)
  expect(Maths.roundHalfEven(-3.5, 0)).toBe(-4)
  expect(Maths.roundHalfEven(4, 0)).toBe(4)
})

test('Maths.round', () => {
  expect(Maths.round(1.239, 2)).toBe(1.24)
  expect(Maths.round(-1.5, 0, RoundingMode.Ceiling)).toBe(-1)
  expect(Maths.round(-1.5, 0, RoundingMode.Floor)).toBe(-2)
  expect(Maths.round(-1.5, 0, RoundingMode.Up)).toBe(-2)
  expect(Maths.round(-1.5, 0, RoundingMode.Down)).toBe(-1)
  expect(Maths.round(-1.5, 0, RoundingMode.Nearest)).toBe(-1)
  expect(Maths.round(-1.5, 0, RoundingMode.HalfEven)).toBe(-2)
  expect(Maths.round(Infinity, 2)).toBe(Infinity)
  expect(Maths.round(NaN, 2)).toBeNaN()
})

test('Maths.isClose', () => {
  expect(Maths.isClose(1.1 * 3, 3.3)).toBe(true)
  expect(Maths.isClose(0.1 + 0.2, 0.3)).toBe(true)
  expect(Maths.isClose(1e12 + 0.0001, 1e12)).toBe(true)
  expect(Maths.isClose(1, 1.001)).toBe(false)
  expect(Maths.isClose(1, 1.001, 0.01)).toBe(true)
  expect(Maths.isClose(0, 1e-12)).toBe(true)
})

test('Maths.random', () => {
  const r = Maths.random(10, 20)
  expect(r).toBeGreaterThanOrEqual(10)
  expect(r).toBeLessThan(20)

  expect(Maths.random(5, 5)).toBeCloseTo(5)
})

test('Maths.greatestCommonFactor', () => {
  expect(Maths.greatestCommonFactor(8, 12)).toBe(4)
  expect(Maths.greatestCommonFactor(100, 10)).toBe(10)
  expect(Maths.greatestCommonFactor(17, 13)).toBe(1)
  expect(Maths.greatestCommonFactor(0, 5)).toBe(5)
  expect(Maths.greatestCommonFactor(5, 0)).toBe(5)
})
