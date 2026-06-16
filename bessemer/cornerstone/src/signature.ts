import * as References from '@bessemer/cornerstone/reference'
import { Reference } from '@bessemer/cornerstone/reference'
import { BasicType } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'
import * as Dates from '@bessemer/cornerstone/temporal/date'
import * as Chrono from '@bessemer/cornerstone/temporal/chrono'

// JOHN it is probably worth revisiting this in the context of using this library code more frequently... in particular
// all of these things have similar properties ("primitives", sortable, value equality, etc.) but this method of implementation
// forces them all to be converted to strings or numbers first which is an expensive operation.

export type Signable = BasicType | null | { id: string } | { reference: Reference<string> }
export type Signature = string | number | null

export const sign = (value: Signable): Signature => {
  if (value === null) {
    return null
  }

  if (Objects.isObject(value)) {
    if (References.isReferencable(value)) {
      return value.reference.id
    } else {
      return value.id
    }
  }

  if (Dates.isDate(value)) {
    return value.getTime()
  }

  if (Chrono._isInstant(value)) {
    return Chrono.instantToLiteral(value)
  }

  if (value === true) {
    return 1
  }
  if (value === false) {
    return 0
  }

  return value
}

export const signAll = (values: Array<Signable>): Array<Signature> => {
  return values.map(sign)
}
