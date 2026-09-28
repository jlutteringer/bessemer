import { NilableBasicType } from '@bessemer/cornerstone/types'
import * as Dates from '@bessemer/cornerstone/temporal/date'
import * as Chrono from '@bessemer/cornerstone/temporal/chrono'

// JOHN it is probably worth revisiting this in the context of using this library code more frequently... in particular
// all of these things have similar properties ("primitives", sortable, value equality, etc.) but this method of implementation
// forces them all to be converted to strings or numbers first which is an expensive operation.

export type Signature = string | number | null

export const sign = (value: NilableBasicType): Signature => {
  if (value === null) {
    return null
  }

  if (value === undefined) {
    return null
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

export const signAll = (values: Array<NilableBasicType>): Array<Signature> => {
  return values.map(sign)
}
