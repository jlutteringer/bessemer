export type Collector<T, A, R> = {
  supplier(): A
  accumulator(acc: A, item: T): void
  finisher(acc: A): R
}

/**
 * A `Collector` that accumulates elements into an `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect([1, 2, 3], Collectors.toArray())
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category collectors
 */
export const toArray = <T>(): Collector<T, T[], T[]> => ({
  supplier: () => [],
  accumulator: (acc, item) => {
    acc.push(item)
  },
  finisher: (acc) => acc,
})

/**
 * A `Collector` that accumulates elements into a `Set`, discarding duplicates.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect([1, 2, 2, 3], Collectors.toSet())
 * console.log(result) // Set { 1, 2, 3 }
 * ```
 *
 * @category collectors
 */
export const toSet = <T>(): Collector<T, Set<T>, Set<T>> => ({
  supplier: () => new Set(),
  accumulator: (acc, item) => {
    acc.add(item)
  },
  finisher: (acc) => acc,
})

/**
 * A `Collector` that accumulates elements into a `Map` using the provided key and value functions.
 * If two elements produce the same key, the last one wins.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], Collectors.toMap(x => x.id, x => x.name))
 * console.log(result) // Map { 1 => 'Alice', 2 => 'Bob' }
 * ```
 *
 * @category collectors
 */
export const toMap = <T, K, V>(keyFn: (item: T) => K, valueFn: (item: T) => V): Collector<T, Map<K, V>, Map<K, V>> => ({
  supplier: () => new Map(),
  accumulator: (acc, item) => {
    acc.set(keyFn(item), valueFn(item))
  },
  finisher: (acc) => acc,
})

/**
 * A `Collector` that groups elements into a `Map` of arrays keyed by the provided function.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect(['one', 'two', 'three'], Collectors.groupBy(x => x.length))
 * console.log(result) // Map { 3 => ['one', 'two'], 5 => ['three'] }
 * ```
 *
 * @category collectors
 */
export const groupBy = <T, K>(keyFn: (item: T) => K): Collector<T, Map<K, T[]>, Map<K, T[]>> => ({
  supplier: () => new Map(),
  accumulator: (acc, item) => {
    const key = keyFn(item)
    const group = acc.get(key) ?? []
    group.push(item)
    acc.set(key, group)
  },
  finisher: (acc) => acc,
})

/**
 * A `Collector` that concatenates string elements into a single string with an optional separator, prefix, and suffix.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect(['a', 'b', 'c'], Collectors.joining(', ', '[', ']'))
 * console.log(result) // '[a, b, c]'
 * ```
 *
 * @category collectors
 */
export const joining = (separator = '', prefix = '', suffix = ''): Collector<string, string[], string> => ({
  supplier: () => [],
  accumulator: (acc, item) => {
    acc.push(item)
  },
  finisher: (acc) => `${prefix}${acc.join(separator)}${suffix}`,
})

/**
 * A `Collector` that counts the number of elements in the source.
 *
 * **Example**
 *
 * ```ts
 * import { Seqs, Collectors } from "@bessemer/cornerstone"
 *
 * const result = Seqs.collect([1, 2, 3], Collectors.counting())
 * console.log(result) // 3
 * ```
 *
 * @category collectors
 */
export const counting = <T>(): Collector<T, { count: number }, number> => ({
  supplier: () => ({ count: 0 }),
  accumulator: (acc) => {
    acc.count++
  },
  finisher: (acc) => acc.count,
})
