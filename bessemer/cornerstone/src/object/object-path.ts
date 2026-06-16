import Zod from 'zod'
import { TaggedType } from '@bessemer/cornerstone/types'
import {
  InferObjectPath,
  ObjectPathConcreteType,
  ObjectPathType,
  ParseObjectPath,
  TypePathGet,
  TypePathType,
} from '@bessemer/cornerstone/object/type-path-type'
import { TypePath } from '@bessemer/cornerstone/object/type-path'
import * as TypePaths from '@bessemer/cornerstone/object/type-path'
import * as Arrays from '@bessemer/cornerstone/array'
import * as Assertions from '@bessemer/cornerstone/assertion'
import { produce } from 'immer'
import * as Objects from '@bessemer/cornerstone/object'

// JOHN this probably should be brought into the structured transform regime
export type ObjectPath<T extends TypePathType = TypePathType> = TaggedType<ObjectPathConcreteType, ['TypePath', T]>

export const of = <T extends ObjectPathConcreteType>(value: T): ObjectPath<InferObjectPath<T>> => {
  return value as ObjectPath<InferObjectPath<T>>
}

export const from = <T extends string>(path: T): ObjectPath<ParseObjectPath<T>> => {
  const typePath = TypePaths.from(path)

  typePath.forEach((it) => {
    Assertions.assert(it !== '*', () => 'ObjectPaths do not allow for wildcard selectors')

    if (Array.isArray(it)) {
      Assertions.assert(it.length === 1, () => 'ObjectPaths do not allow for multiple index selectors or array slices')
    }
  })

  return typePath as ObjectPath<ParseObjectPath<T>>
}

export const Schema = Zod.union([Zod.array(Zod.string()), Zod.string()]).transform((it) => {
  if (Array.isArray(it)) {
    return of(it)
  } else {
    return from(it)
  }
})

export const getValue = <T extends ObjectPathType, N>(path: ObjectPath<T>, object: N): TypePathGet<T, N> => {
  return TypePaths.getValue(path, object)
}

export const applyValue = <T extends ObjectPathType, N>(path: ObjectPath<T>, object: N, valueToApply: TypePathGet<T, N>): N => {
  return applyAnyValue(path, object, valueToApply) as N
}

export const applyAnyValue = (path: ObjectPath, object: unknown, valueToApply: unknown): unknown => {
  if (Arrays.isEmpty(path)) {
    return valueToApply
  }

  return produce(object, (draft) => {
    const rest = path.slice(0, -1)
    const last = path[path.length - 1]!
    const parent = getValue(of(rest), draft) as any

    Assertions.assert(Objects.isObject(parent) || Array.isArray(parent), () => `Unable to apply value: ${valueToApply} at ObjectPath: ${path} against object: ${object}`)
    if (Array.isArray(last)) {
      const index = Arrays.only(last)
      parent[index] = valueToApply
    } else {
      parent[last] = valueToApply
    }
  })
}

export const matches = <MatchingPath extends TypePathType>(
  targetPath: ObjectPath,
  matchingPath: TypePath<MatchingPath>
): targetPath is ObjectPath<MatchingPath> => {
  return TypePaths.matches(targetPath, matchingPath)
}

export const intersect = <TargetPath extends TypePathType, IntersectingPath extends TypePathType>(
  targetPath: ObjectPath<TargetPath>,
  intersectingPath: TypePath<IntersectingPath>
): ObjectPath => {
  return TypePaths.intersect(targetPath, intersectingPath) as ObjectPath
}
