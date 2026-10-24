export const isNumber = (value?: unknown): value is number => {
  if (value === null || value === undefined) {
    return false
  }

  return typeof value === 'number' && !isNaN(value)
}

export const isEven = (d: number) => d % 2 === 0

export const isOdd = (d: number) => d % 2 !== 0

export const isWhole = (n: number) => n % 1 === 0

export enum RoundingMode {
  // Towards positive infinity
  Ceiling = 'Ceiling',
  // Towards negative infinity
  Floor = 'Floor',
  // Away from zero
  Up = 'Up',
  // Towards zero
  Down = 'Down',
  // To the nearest neighbor, with ties towards positive infinity
  Nearest = 'Nearest',
  // To the nearest neighbor, with ties towards the even neighbor (banker's rounding)
  HalfEven = 'HalfEven',
}

export const round = (value: number, scale: number, roundingMode: RoundingMode = RoundingMode.Nearest): number => {
  switch (roundingMode) {
    case RoundingMode.Ceiling:
      return roundCeiling(value, scale)
    case RoundingMode.Floor:
      return roundFloor(value, scale)
    case RoundingMode.Up:
      return roundUp(value, scale)
    case RoundingMode.Down:
      return roundDown(value, scale)
    case RoundingMode.Nearest:
      return roundNearest(value, scale)
    case RoundingMode.HalfEven:
      return roundHalfEven(value, scale)
  }
}

export const roundCeiling = (value: number, scale: number): number => {
  return roundScaled(value, scale, Math.ceil)
}

export const roundFloor = (value: number, scale: number): number => {
  return roundScaled(value, scale, Math.floor)
}

export const roundUp = (value: number, scale: number): number => {
  return roundScaled(value, scale, (it) => (it < 0 ? Math.floor(it) : Math.ceil(it)))
}

export const roundDown = (value: number, scale: number): number => {
  return roundScaled(value, scale, Math.trunc)
}

export const roundNearest = (value: number, scale: number): number => {
  return roundScaled(value, scale, Math.round)
}

export const roundHalfEven = (value: number, scale: number): number => {
  return roundScaled(value, scale, (it) => {
    const floor = Math.floor(it)
    if (it - floor !== 0.5) {
      return Math.round(it)
    }

    return isEven(floor) ? floor : floor + 1
  })
}

// Moves the decimal point through the value's decimal string rather than multiplying, which would introduce binary error
const shiftDecimal = (value: number, places: number): number => {
  const [mantissa, exponent = '0'] = value.toString().split('e')
  return Number(`${mantissa}e${Number(exponent) + places}`)
}

const roundScaled = (value: number, scale: number, roundInteger: (value: number) => number): number => {
  if (!Number.isFinite(value)) {
    return value
  }

  const result = shiftDecimal(roundInteger(shiftDecimal(value, scale)), -scale)
  // Normalizes -0 to 0
  return result === 0 ? 0 : result
}

/**
 * Whether two numbers are equal within a tolerance relative to their magnitude (absolute for magnitudes below 1).
 * Use this to absorb error accumulated by floating point arithmetic, e.g. isClose(1.1 * 3, 3.3) is true.
 */
export const isClose = (first: number, second: number, tolerance: number = 1e-9): boolean => {
  if (first === second) {
    return true
  }

  return Math.abs(first - second) <= tolerance * Math.max(1, Math.abs(first), Math.abs(second))
}

export const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min
}

export const greatestCommonFactor = (first: number, second: number): number => {
  return second === 0 ? first : greatestCommonFactor(second, first % second)
}

export const sum = (...numbers: Array<number>): number => {
  return sumAll(numbers)
}

export const sumAll = (numbers: Array<number>): number => {
  return numbers.reduce((first, second) => first + second, 0)
}

export const subtract = (...numbers: Array<number>): number => {
  return subtractAll(numbers)
}

export const subtractAll = (numbers: Array<number>): number => {
  if (numbers.length === 0) {
    return 0
  }

  return numbers.slice(1).reduce((result, current) => result - current, numbers[0]!)
}
