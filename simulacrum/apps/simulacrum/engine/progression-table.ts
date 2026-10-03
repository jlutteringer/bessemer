export * from '@simulacrum/ruleset/progression-table'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { Arrays, Maps, Objects } from '@bessemer/cornerstone'
import { Either } from '@bessemer/cornerstone/either'
import { NilableBasicType } from '@bessemer/cornerstone/types'

export const empty = <T>(maxLevel: number): ProgressionTable<T> => {
  return fromRecord({}, maxLevel)
}

export const fromRecord = <T>(sparseRecord: Record<number, Array<T>>, maxLevel: number): ProgressionTable<T> => {
  const entries = Arrays.range([1, maxLevel]).map((level) => {
    const existingValue = sparseRecord[level]

    if (Objects.isUndefined(existingValue)) {
      return [level, []]
    } else {
      return [level, existingValue]
    }
  })

  return Object.fromEntries(entries)
}

export const fromMapping = <T>(values: Array<T>, mapper: (value: T) => number, maxLevel: number): ProgressionTable<T> => {
  const result = Object.fromEntries(Maps.groupBy(values, mapper))
  return fromRecord(result, maxLevel)
}

export const getRows = <T>(table: ProgressionTable<T>): Array<[number, Array<T>]> => {
  return Object.entries(table).map(([key, values]) => [Number(key), values])
}

export const getEntries = <T>(table: ProgressionTable<T>): Array<[number, T]> => {
  return getRows(table).flatMap(([level, values]) => values.map<[number, T]>((it) => [Number(level), it]))
}

export const getValues = <T>(table: ProgressionTable<T>): Array<T> => {
  return getEntries(table).map(([_, value]) => value)
}

export const getMaxLevel = <T>(table: ProgressionTable<T>): number => {
  const levels = getRows(table).map(([level, _]) => level)
  return Arrays.isEmpty(levels) ? 0 : Math.max(...levels)
}

export const getSize = <T>(table: ProgressionTable<T>): number => {
  return getValues(table).length
}

export const mapRows = <T, N>(table: ProgressionTable<T>, mapper: (element: Array<T>, level: number) => Array<N>): ProgressionTable<N> => {
  return Object.fromEntries(getRows(table).map(([key, values]) => [key, mapper(values, key)]))
}

export const map = <T, N>(table: ProgressionTable<T>, mapper: (element: T, level: number) => N): ProgressionTable<N> => {
  return mapRows(table, (row, level) => row.map((it) => mapper(it, level)))
}

export const flatMap = <T, N>(table: ProgressionTable<T>, mapper: (element: T) => Array<N>): ProgressionTable<N> => {
  return mapRows(table, (it) => it.flatMap(mapper))
}

export const merge = <T>(first: ProgressionTable<T>, second: ProgressionTable<T>): ProgressionTable<T> => {
  let primary = first
  let secondary = second
  if (getMaxLevel(first) < getMaxLevel(second)) {
    primary = second
    secondary = first
  }

  return mapRows(primary, (primaryRow, level) => {
    const secondaryRow = secondary[level] ?? []
    return [...primaryRow, ...secondaryRow]
  })
}

export const bisect = <T, L, R>(
  table: ProgressionTable<T>,
  bisector: (element: T, level: number) => Either<L, R>
): [ProgressionTable<L>, ProgressionTable<R>] => {
  const rows = getRows(table).map(([level, values]) => [level, Arrays.separate(values.map((it) => bisector(it, level)))] as const)
  const lefts = rows.map(([level, [values, _]]) => [level, values])
  const rights = rows.map(([level, [_, values]]) => [level, values])
  return [Object.fromEntries(lefts), Object.fromEntries(rights)]
}

export const capAtLevel = <T>(table: ProgressionTable<T>, level: number): ProgressionTable<T> => {
  return Object.fromEntries(getRows(table).filter(([key, _]) => key <= level))
}

export const getValuesForLevel = <T>(table: ProgressionTable<T>, level: number): Array<T> => {
  return getRows(table)
    .filter(([key, _]) => key <= level)
    .flatMap(([_, values]) => values)
}

export const equalBy = <T>(first: ProgressionTable<T>, second: ProgressionTable<T>, mapper: (element: T) => NilableBasicType): boolean => {
  if (getMaxLevel(first) !== getMaxLevel(second)) {
    return false
  }

  const rows = getRows(first)
  const containsMismatchedRows = rows.some(([level, firstRow]) => !Arrays.equalBy(firstRow, second[level]!, mapper))
  return !containsMismatchedRows
}
