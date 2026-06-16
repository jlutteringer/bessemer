import * as Comparators from '@bessemer/cornerstone/comparator'
import { Comparator } from '@bessemer/cornerstone/comparator'
import { TaggedType } from '@bessemer/cornerstone/types'
import * as Strings from '@bessemer/cornerstone/string'
import * as Objects from '@bessemer/cornerstone/object'
import * as Equalitors from '@bessemer/cornerstone/equalitor'

// JOHN i, unfortunately, think the reference system is kinda dumb
export type ReferenceId<T extends string> = TaggedType<string, ['ReferenceId', T]>

export type Reference<T extends string> = {
  id: ReferenceId<T>
  type: T
  note?: string
}

export type ReferenceType<T extends Reference<string>> = T | T['id']

export interface Referencable<T extends Reference<string>> {
  reference: T
}

export type ReferencableType<T extends Reference<string>> = T | Referencable<T>

export const reference = <T extends string>(reference: Reference<T> | ReferenceId<T>, type: T, note?: string): Reference<typeof type> => {
  if (!Strings.isString(reference)) {
    return reference
  }

  return {
    id: reference,
    type,
    ...(Objects.isPresent(note) ? { note: note } : {}),
  }
}

export const isReferencable = (element: unknown): element is Referencable<Reference<string>> => {
  if (!Objects.isObject(element)) {
    return false
  }

  const referencable = element as unknown as Referencable<Reference<string>>
  return !Objects.isUndefined(referencable.reference)
}

export const isReference = (element: unknown): element is Reference<string> => {
  if (!Objects.isObject(element)) {
    return false
  }

  const referencable = element as Reference<string>
  return !Objects.isUndefined(referencable.id) && !Objects.isUndefined(referencable.type) && !Objects.isUndefined(referencable.note)
}

export const getReference = <T extends Reference<string>>(reference: ReferencableType<T>): T => {
  const referencable = reference as Referencable<T>
  if (Objects.isPresent(referencable.reference)) {
    return referencable.reference
  } else {
    return reference as T
  }
}

export const equals = <T extends string>(first: Reference<T>, second: Reference<T>): boolean => {
  return first.id === second.id
}

export const comparator = <T extends string>(): Comparator<Reference<T>> => {
  return Comparators.compareBy((it) => it.id, Comparators.natural())
}

export const equalitor = () => Equalitors.fromComparator(comparator())
