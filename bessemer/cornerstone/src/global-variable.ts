import * as Lazy from '@bessemer/cornerstone/lazy'
import { LazyValue } from '@bessemer/cornerstone/lazy'
import * as Objects from '@bessemer/cornerstone/object'
import { UnknownRecord } from 'type-fest'

export type GlobalVariable<T> = {
  getValue: () => T
  setValue: (value: T) => void
}

let Global: { BessemerGlobalVariables: UnknownRecord }
if (typeof window !== 'undefined') {
  Global = window as any
} else if (typeof global !== 'undefined') {
  Global = global as any
} else {
  Global = globalThis as any
}

if (Objects.isUndefined(Global.BessemerGlobalVariables)) {
  Global.BessemerGlobalVariables = {}
}

export const createGlobalVariable = <T>(key: string, defaultValue: LazyValue<T>): GlobalVariable<T> => {
  return {
    getValue: () => {
      const value = Global.BessemerGlobalVariables[key] as T | undefined

      if (Objects.isUndefined(value)) {
        const def = Lazy.evaluate(defaultValue)
        Global.BessemerGlobalVariables[key] = def
        return def
      }

      return value
    },
    setValue: (value: T) => {
      Global.BessemerGlobalVariables[key] = value
    },
  }
}
