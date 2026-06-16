import { CurrencyCode } from '@bessemer/cornerstone/intl/currency-code'
import * as CurrencyCodes from '@bessemer/cornerstone/intl/currency-code'
import Zod from 'zod'
import * as Objects from '@bessemer/cornerstone/object'
import * as Maths from '@bessemer/cornerstone/math'
import { Comparator } from '@bessemer/cornerstone/comparator'
import * as Comparators from '@bessemer/cornerstone/comparator'
import * as Equalitors from '@bessemer/cornerstone/equalitor'
import * as Assertions from '@bessemer/cornerstone/assertion'

export type MonetaryAmount = {
  amount: number
  currency: CurrencyCode
}

export const Schema = Zod.object({
  amount: Zod.number().int(),
  currency: CurrencyCodes.Schema,
})

export const CompareBy: Comparator<MonetaryAmount> = (first: MonetaryAmount, second: MonetaryAmount): number => {
  return apply(first, second, Comparators.natural())
}

export const EqualBy = Equalitors.fromComparator(CompareBy)

export const of = (amount: number, currency: CurrencyCode): MonetaryAmount => {
  Assertions.assert(Number.isInteger(amount))
  return { amount, currency }
}

export const zero = (currency: CurrencyCode): MonetaryAmount => {
  return { amount: 0, currency }
}

export const apply = <T>(first: MonetaryAmount, second: MonetaryAmount, operator: (first: number, second: number) => T): T => {
  if (first.currency !== second.currency) {
    throw new Error(`Currency mismatch in operation on MonetaryAmount: ${first.currency}, ${second.currency}`)
  }

  return operator(first.amount, second.amount)
}

export const operate = (first: MonetaryAmount, second: MonetaryAmount, operator: (first: number, second: number) => number): MonetaryAmount => {
  return of(apply(first, second, operator), first.currency)
}

/** Determines whether two MonetaryAmounts are considered equivalent */
export const equal = (first?: MonetaryAmount | null, second?: MonetaryAmount | null): boolean => {
  if (Objects.isNil(first) && Objects.isNil(second)) {
    return true
  }
  if (Objects.isNil(first) || Objects.isNil(second)) {
    return false
  }

  return apply(first, second, (first, second) => first === second)
}

export const sum = (first: MonetaryAmount, second?: MonetaryAmount | null): MonetaryAmount => {
  return operate(first, second ?? zero(first.currency), (first, second) => first + second)
}

export const subtract = (first: MonetaryAmount, second: MonetaryAmount): MonetaryAmount => {
  return operate(first, second, (first, second) => first - second)
}

export const multiply = (money: MonetaryAmount, value: number): MonetaryAmount => {
  return of(Maths.roundHalfEven(money.amount * value, 0), money.currency)
}

export const divide = (money: MonetaryAmount, value: number): MonetaryAmount => {
  return of(Maths.roundHalfEven(money.amount / value, 0), money.currency)
}

export function sumAll(monetaryAmounts: readonly [MonetaryAmount, ...MonetaryAmount[]]): MonetaryAmount
export function sumAll(monetaryAmounts: readonly MonetaryAmount[], currency: CurrencyCode): MonetaryAmount
export function sumAll(monetaryAmounts: readonly MonetaryAmount[], currency?: CurrencyCode): MonetaryAmount {
  const resolvedCurrency = currency ?? monetaryAmounts[0]!.currency
  return monetaryAmounts.reduce<MonetaryAmount>((first, second) => sum(second, first), zero(resolvedCurrency))
}

export const negate = (monetaryAmount: MonetaryAmount): MonetaryAmount => {
  // Avoid creating a negative 0, which is a real thing!
  if (isZero(monetaryAmount)) {
    return monetaryAmount
  }

  return of(-monetaryAmount.amount, monetaryAmount.currency)
}

export const isZero = (monetaryAmount: MonetaryAmount): boolean => {
  return monetaryAmount.amount === 0
}

export const greaterThan = (first: MonetaryAmount, second: MonetaryAmount): boolean => {
  return apply(first, second, (first, second) => first > second)
}

export const lessThan = (first: MonetaryAmount, second: MonetaryAmount): boolean => {
  return apply(first, second, (first, second) => first < second)
}

export const greaterThanOrEqual = (first: MonetaryAmount, second: MonetaryAmount): boolean => {
  return apply(first, second, (first, second) => first >= second)
}

export const lessThanOrEqual = (first: MonetaryAmount, second: MonetaryAmount): boolean => {
  return apply(first, second, (first, second) => first <= second)
}

export type MonetaryAmountFormatOptions = {
  hideCents?: boolean
}

export const format = (amount: MonetaryAmount, alpha2Code: string, options?: MonetaryAmountFormatOptions): string => {
  const hideCents = options?.hideCents ?? false
  const isWholeNumber = amount.amount % 100 === 0

  const formatCurrency = new Intl.NumberFormat(alpha2Code, {
    style: 'currency',
    currency: amount.currency,
    ...(hideCents
      ? {
          minimumFractionDigits: isWholeNumber ? 0 : 2,
          maximumFractionDigits: 2,
        }
      : {}),
  })

  return formatCurrency.format(amount.amount / 100)
}
