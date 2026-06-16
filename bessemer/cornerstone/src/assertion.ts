import * as Lazy from '@bessemer/cornerstone/lazy'
import { LazyValue } from '@bessemer/cornerstone/lazy'
import { Nil } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'

export function assert(value: boolean, message: LazyValue<string> = () => 'Assertions.assert failed validation'): asserts value is true {
  if (!value) {
    throw new Error(Lazy.evaluate(message))
  }
}

export function assertNil(value: any, message: LazyValue<string> = () => 'Assertions.assertNil failed validation'): asserts value is Nil {
  return assert(Objects.isNil(value), message)
}

export function assertPresent<T>(
  value: T,
  message: LazyValue<string> = () => 'Assertions.assertPresent failed validation'
): asserts value is NonNullable<T> {
  return assert(Objects.isPresent(value), message)
}
