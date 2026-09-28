import * as Equalitors from '@bessemer/cornerstone/equalitor'
import { Equalitor } from '@bessemer/cornerstone/equalitor'
import * as Signatures from '@bessemer/cornerstone/signature'
import * as Eithers from '@bessemer/cornerstone/either'
import { Either } from '@bessemer/cornerstone/either'
import * as Comparators from '@bessemer/cornerstone/comparator'
import { Comparator } from '@bessemer/cornerstone/comparator'
import { Arrayable } from 'type-fest'
import * as Objects from '@bessemer/cornerstone/object'
import * as Assertions from '@bessemer/cornerstone/assertion'
import { FiniteBounds } from '@bessemer/cornerstone/range'
import { NilableBasicType } from '@bessemer/cornerstone/types'
import Seq, { SeqLike } from '@bessemer/cornerstone/collection/seq'

// -----------------------------------------------------------------------------
// Comparison
// -----------------------------------------------------------------------------

/**
 * Determines if two arrays are equal by comparing each element using an Equalitor.
 * Returns `true` if all corresponding elements are equal according to the provided
 * equalitor function in both arrays.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const users1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
 * const users2 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
 *
 * const result = Arrays.equalWith(users1, users2, (a, b) => a.id === b.id && a.name === b.name)
 * console.log(result) // true
 *
 * const numbers1 = [1.1, 2.2, 3.3]
 * const numbers2 = [1.0, 2.0, 3.0]
 *
 * const closeEnough = Arrays.equalWith(numbers1, numbers2, (a, b) => Math.abs(a - b) < 0.5)
 * console.log(closeEnough) // false
 * ```
 *
 * @category comparison
 */
export const equalWith = <T>(first: SeqLike<T>, second: SeqLike<T>, equalitor: Equalitor<T>): boolean => {
  return Seq.from(first).equalWith(second, equalitor)
}

/**
 * Determines if two arrays are equal by comparing mapped values from each element.
 * Returns `true` if all corresponding mapped values are equal according to the
 * provided Equalitor or natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const users1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
 * const users2 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
 *
 * // Compare by mapped property using natural equality
 * const result = Arrays.equalBy(users1, users2, user => user.id)
 * console.log(result) // true
 *
 * // Compare by mapped property using custom Equalitor
 * const products1 = [{ name: "Apple", price: 1.99 }, { name: "Orange", price: 2.49 }]
 * const products2 = [{ name: "Apple", price: 2.00 }, { name: "Orange", price: 2.50 }]
 *
 * const closeEnough = Arrays.equalBy(
 *   products1,
 *   products2,
 *   product => product.price,
 *   (a, b) => Math.abs(a - b) < 0.1
 * )
 * console.log(closeEnough) // true
 * ```
 *
 * @category comparison
 */
export function equalBy<T>(first: SeqLike<T>, second: SeqLike<T>, mapper: (element: T) => NilableBasicType): boolean
export function equalBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor: Equalitor<N>
): boolean
export function equalBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): boolean {
  return Seq.from(first).equalBy(second, mapper, equalitor as any)
}

/**
 * Determines if two arrays are equal by comparing each element using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.equal([1, 2, 3], [1, 2, 3])) // true
 * console.log(Arrays.equal([1, 2, 3], [1, 2, 4])) // false
 * ```
 *
 * @category comparison
 */
export const equal = <T extends NilableBasicType>(first: SeqLike<T>, second: SeqLike<T>): boolean => {
  return Seq.from(first).equal(second)
}

// -----------------------------------------------------------------------------
// Concatenating
// -----------------------------------------------------------------------------

/**
 * Append an element to the end of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.append([1, 2, 3], 4);
 * console.log(result) // [1, 2, 3, 4]
 * ```
 *
 * @category concatenating
 */
export const append = <A>(seq: SeqLike<A>, element: A): NonEmptyArray<A> => {
  return appendAll(seq, [element]) as NonEmptyArray<A>
}

/**
 * Append all elements from `elements` to the end of `collection`, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.appendAll([1, 2, 3], [4, 5]);
 * console.log(result) // [1, 2, 3, 4, 5]
 * ```
 *
 * @category concatenating
 */
export const appendAll = <A>(seq: SeqLike<A>, elements: SeqLike<A>): Array<A> => {
  return Seq.from(seq).appendAll(elements).toArray()
}

/**
 * Prepend an element to the front of an `Iterable`, creating a new `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.prepend([1, 2, 3], 0);
 * console.log(result) // [0, 1, 2, 3]
 * ```
 *
 * @category concatenating
 */
export const prepend = <A>(seq: SeqLike<A>, element: A): NonEmptyArray<A> => {
  return prependAll(seq, [element]) as NonEmptyArray<A>
}

/**
 * Prepend all elements from `elements` to the front of `collection`, creating a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.prependAll([3, 4, 5], [1, 2]);
 * console.log(result) // [1, 2, 3, 4, 5]
 * ```
 *
 * @category concatenating
 */
export const prependAll = <A>(seq: SeqLike<A>, elements: SeqLike<A>): Array<A> => {
  return Seq.from(seq).prependAll(elements).toArray()
}

// -----------------------------------------------------------------------------
// Constructors
// -----------------------------------------------------------------------------

/**
 * Creates a new `Array` from a value that might not be an array.
 * If the input is already an array, it returns the input as-is.
 * Otherwise, it wraps the value in a new array.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.ensure("a")) // ["a"]
 * console.log(Arrays.ensure(["a"])) // ["a"]
 * console.log(Arrays.ensure(["a", "b", "c"])) // ["a", "b", "c"]
 * ```
 *
 * @category constructors
 */
export const ensure = <A>(self: ReadonlyArray<A> | A): Array<A> => (Array.isArray(self) ? self : [self as A])

/**
 * Return an `Array` of length `n` with element `i` initialized with `f(i)`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.makeBy(5, n => n * 2)
 * console.log(result) // [0, 2, 4, 6, 8]
 * ```
 *
 * @category constructors
 */
export const makeBy = <T>(n: number, f: (i: number) => T): NonEmptyArray<T> => {
  return Seq.makeBy(n, f).toArray() as NonEmptyArray<T>
}

/**
 * Return an `Array` of integers spanning the given `FiniteBounds`, inclusive of both endpoints.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.range([1, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 */
export const range = (bounds: FiniteBounds<number>): Array<number> => {
  return Seq.range(bounds).toArray()
}

/**
 * Creates a new `Array` from a `SeqSource`.
 * If the input is already an array, it returns the input as-is.
 * Otherwise, it collects the sequence into a new array.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.fromSeq(new Set([1, 2, 3]))
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 */
export const fromSeq = <T>(seq: SeqLike<T>): Array<T> => {
  if (Array.isArray(seq)) {
    return seq
  }

  return Seq.from(seq).toArray()
}

/**
 * Creates an `Array` from an `Iterable`, filtering out all `null` and `undefined` values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.fromNilable([1, null, 2, undefined, 3])
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category constructors
 */
export const fromNilable = <T>(seq: SeqLike<T>): Array<NonNullable<T>> => Seq.from(seq).filter(Objects.isPresent).toArray()

/**
 * Return an `Array` containing a value repeated `n` times.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.repeat("a", 3)
 * console.log(result) // ["a", "a", "a"]
 * ```
 *
 * @category constructors
 */
export const repeat = <T>(a: T, n: number): Array<T> => {
  return Seq.repeat(a, n).toArray()
}

/**
 * Creates a new `Array` from a value that might not be an array, converting an `Arrayable<T>`.
 *
 * @category constructors
 */
export const toArray = <T>(array: Arrayable<T>): Array<T> => {
  if (Array.isArray(array)) {
    return array
  }

  return [array]
}

// -----------------------------------------------------------------------------
// Conversions
// -----------------------------------------------------------------------------

/**
 * Creates an `Array` from an optional value.
 * Returns an empty array if the value is `undefined`, otherwise returns a single-element array.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.fromOption(undefined)) // []
 * console.log(Arrays.fromOption("a")) // ["a"]
 * ```
 *
 * @category conversions
 */
export const fromOption = <A>(option: A | undefined): Array<A> => (Objects.isUndefined(option) ? [] : [option])

// -----------------------------------------------------------------------------
// Elements
// -----------------------------------------------------------------------------

/**
 * Returns the cartesian product of two Iterables as an array of pairs.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.cartesian([1, 2], ["a", "b"])
 * console.log(result) // [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
 * ```
 *
 * @category elements
 */
export const cartesian = <A, B>(first: SeqLike<A>, second: SeqLike<B>): Array<[A, B]> => {
  return cartesianWith(first, second, (a, b): [A, B] => [a, b])
}

/**
 * Returns the cartesian product of two Iterables, combining each pair with the provided function.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.cartesianWith([1, 2], ["a", "b"], (a, b) => `${a}-${b}`)
 * console.log(result) // ["1-a", "1-b", "2-a", "2-b"]
 * ```
 *
 * @category elements
 */
export const cartesianWith = <A, B, C>(first: SeqLike<A>, second: SeqLike<B>, f: (a: A, b: B) => C): Array<C> => {
  const secondArray = fromSeq(second)
  return fromSeq(first).flatMap((a) => secondArray.map((b) => f(a, b)))
}

/**
 * Returns `true` if the array contains the given element using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.contains(['a', 'b', 'c', 'd'], 'c')) // true
 * console.log(Arrays.contains(['a', 'b', 'c', 'd'], 'z')) // false
 * ```
 *
 * @category elements
 */
export const contains = <T extends NilableBasicType>(array: SeqLike<T>, element: T): boolean => Seq.from(array).contains(element)

/**
 * Returns `true` if the array contains the given element using the provided `Equalitor`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.containsWith([{ id: 1 }, { id: 2 }], { id: 1 }, (a, b) => a.id === b.id)
 * console.log(result) // true
 * ```
 *
 * @category elements
 */
export const containsWith = <T>(array: SeqLike<T>, element: T, equalitor: Equalitor<T>): boolean => {
  return Seq.from(array).containsWith(element, equalitor)
}

/**
 * Returns the first element that satisfies the predicate, paired with its index,
 * or `undefined` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.findWithIndex([1, 2, 3, 4, 5], (x) => x > 3)
 * console.log(result) // [4, 3]
 *
 * const missing = Arrays.findWithIndex([1, 2, 3], (x) => x > 10)
 * console.log(missing) // undefined
 * ```
 *
 * @category elements
 */
export const findWithIndex = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): [T, number] | undefined => {
  return Seq.from(array).findWithIndex(predicate)
}

/**
 * Returns the last element that satisfies the predicate, or `undefined` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.findLast([1, 2, 3, 4, 5], (x) => x % 2 === 0)
 * console.log(result) // 4
 * ```
 *
 * @category elements
 */
export const findLast = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): T | undefined => {
  return findLastWithIndex(array, predicate)?.[0]
}

/**
 * Returns the index of the last element that satisfies the predicate, or `undefined` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.findLastIndex([1, 3, 8, 9], (x) => x < 5)
 * console.log(result) // 1
 *
 * const missing = Arrays.findLastIndex([1, 3, 8, 9], (x) => x > 10)
 * console.log(missing) // undefined
 * ```
 *
 * @category elements
 */
export const findLastIndex = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): number | undefined => {
  return findLastWithIndex(array, predicate)?.[1]
}

/**
 * Returns the last element that satisfies the predicate, paired with its index,
 * or `undefined` if no element matches.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.findLastWithIndex([1, 2, 3, 4, 5], (x) => x % 2 === 0)
 * console.log(result) // [4, 3]
 * ```
 *
 * @category elements
 */
export const findLastWithIndex = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): [T, number] | undefined => {
  const elements = fromSeq(array)
  for (let index = elements.length - 1; index >= 0; index--) {
    const element = elements[index]!
    if (predicate(element, index)) {
      return [element, index]
    }
  }

  return undefined
}

/**
 * Returns a new array with the elements in reverse order. The input is not mutated.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.reverse([1, 2, 3])
 * console.log(result) // [3, 2, 1]
 * ```
 *
 * @category elements
 */
export const reverse = <T>(array: SeqLike<T>): Array<T> => {
  // Seq.toArray always produces a fresh copy, so the in-place reverse can't touch the input
  return Seq.from(array).toArray().reverse()
}

/**
 * Returns `true` if at least one element satisfies the predicate.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.some([1, 2, 3], (x) => x > 2)) // true
 * console.log(Arrays.some([1, 2, 3], (x) => x > 5)) // false
 * ```
 *
 * @category elements
 */
export const some = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): boolean => {
  return Seq.from(array).some(predicate)
}

/**
 * Returns a new sorted array using the provided `Comparator`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.sortWith([3, 1, 2], (a, b) => a - b)
 * console.log(result) // [1, 2, 3]
 * ```
 *
 * @category elements
 */
export const sortWith = <T>(array: SeqLike<T>, comparator: Comparator<T>): Array<T> => {
  return Seq.from(array).toArray().sort(comparator)
}

/**
 * Returns `true` if the array contains the given element by comparing mapped values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.containsBy([{ id: 1 }, { id: 2 }], { id: 1 }, user => user.id)
 * console.log(result) // true
 * ```
 *
 * @category elements
 */
export function containsBy<T>(array: SeqLike<T>, element: T, mapper: (element: T) => NilableBasicType): boolean
export function containsBy<T, N extends NilableBasicType>(array: SeqLike<T>, element: T, mapper: (element: T) => N, equalitor: Equalitor<N>): boolean
export function containsBy<T, N extends NilableBasicType>(
  array: SeqLike<T>,
  element: T,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): boolean {
  return Seq.from(array).containsBy(element, mapper, equalitor as any)
}

/**
 * Returns `true` if `first` contains every element of `second`, using the provided `Equalitor`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.containsAllWith([{ id: 1 }, { id: 2 }], [{ id: 1 }], (a, b) => a.id === b.id)
 * console.log(result) // true
 * ```
 *
 * @category elements
 */
export const containsAllWith = <T>(first: SeqLike<T>, second: SeqLike<T>, equalitor: Equalitor<T>): boolean =>
  Seq.from(first).containsAllWith(second, equalitor)

/**
 * Returns `true` if `first` contains every element of `second`, comparing by mapped values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.containsAllBy([{ id: 1 }, { id: 2 }], [{ id: 1 }], user => user.id)
 * console.log(result) // true
 * ```
 *
 * @category elements
 */
export function containsAllBy<T>(first: SeqLike<T>, second: SeqLike<T>, mapper: (element: T) => NilableBasicType): boolean
export function containsAllBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor: Equalitor<N>
): boolean
export function containsAllBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): boolean {
  return Seq.from(first).containsAllBy(second, mapper, equalitor as any)
}

/**
 * Returns `true` if `first` contains every element of `second`, using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.containsAll([1, 2, 3], [1, 2])) // true
 * console.log(Arrays.containsAll([1, 2, 3], [1, 4])) // false
 * ```
 *
 * @category elements
 */
export const containsAll = <T extends NilableBasicType>(first: SeqLike<T>, second: SeqLike<T>): boolean => Seq.from(first).containsAll(second)

// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------

/**
 * Maps each element with `f`, keeping only the results that are not `undefined`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.filterMap([1, 2, 3, 4], (x) => (x % 2 === 0 ? x * 10 : undefined))
 * console.log(result) // [20, 40]
 * ```
 *
 * @category filtering
 */
export const filterMap = <T, B>(array: SeqLike<T>, f: (element: T, index: number) => B | undefined): Array<B> => {
  return Seq.from(array).filterMap(f).toArray()
}

/**
 * Maps each element with `f` from the front, stopping at the first result that is `undefined`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.filterMapWhile([2, 4, 5, 6], (x) => (x % 2 === 0 ? x * 10 : undefined))
 * console.log(result) // [20, 40]
 * ```
 *
 * @category filtering
 */
export const filterMapWhile = <T, B>(array: SeqLike<T>, f: (element: T, index: number) => B | undefined): Array<B> => {
  return Seq.from(array).filterMapWhile(f).toArray()
}

/**
 * Returns the values of all `Left`s, discarding the `Right`s.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays, Eithers } from "@bessemer/cornerstone"
 *
 * const result = Arrays.getLefts([Eithers.left(1), Eithers.right("a"), Eithers.left(2)])
 * console.log(result) // [1, 2]
 * ```
 *
 * @category filtering
 */
export const getLefts = <L, R>(array: SeqLike<Either<L, R>>): Array<L> => {
  return Seq.from(array).getLefts().toArray()
}

/**
 * Returns the values of all `Right`s, discarding the `Left`s.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays, Eithers } from "@bessemer/cornerstone"
 *
 * const result = Arrays.getRights([Eithers.left(1), Eithers.right("a"), Eithers.right("b")])
 * console.log(result) // ["a", "b"]
 * ```
 *
 * @category filtering
 */
export const getRights = <L, R>(array: SeqLike<Either<L, R>>): Array<R> => {
  return Seq.from(array).getRights().toArray()
}

/**
 * Splits the elements into two arrays: those that fail the predicate, and those that satisfy it.
 * Follows Effect's ordering of `[excluded, satisfying]`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const [odds, evens] = Arrays.partition([1, 2, 3, 4], (x) => x % 2 === 0)
 * console.log(odds) // [1, 3]
 * console.log(evens) // [2, 4]
 * ```
 *
 * @category filtering
 */
export const partition = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): [Array<T>, Array<T>] => {
  const [excluded, satisfying] = Seq.from(array).partition(predicate)
  return [excluded.toArray(), satisfying.toArray()]
}

/**
 * Maps each element to an `Either` and splits the results into `[lefts, rights]`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays, Eithers } from "@bessemer/cornerstone"
 *
 * const [evens, odds] = Arrays.partitionMap([1, 2, 3, 4], (x) => (x % 2 === 0 ? Eithers.left(x) : Eithers.right(`${x}`)))
 * console.log(evens) // [2, 4]
 * console.log(odds) // ["1", "3"]
 * ```
 *
 * @category filtering
 */
export const partitionMap = <T, L, R>(array: SeqLike<T>, f: (element: T, index: number) => Either<L, R>): [Array<L>, Array<R>] => {
  const [lefts, rights] = Seq.from(array).partitionMap(f)
  return [lefts.toArray(), rights.toArray()]
}

/**
 * Splits a collection of `Either`s into `[lefts, rights]`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays, Eithers } from "@bessemer/cornerstone"
 *
 * const [lefts, rights] = Arrays.separate([Eithers.left(1), Eithers.right("a"), Eithers.left(2)])
 * console.log(lefts) // [1, 2]
 * console.log(rights) // ["a"]
 * ```
 *
 * @category filtering
 */
export const separate = <L, R>(array: SeqLike<Either<L, R>>): [Array<L>, Array<R>] => {
  const [lefts, rights] = Seq.from(array).separate()
  return [lefts.toArray(), rights.toArray()]
}

/**
 * Splits an Iterable into two arrays by applying a bisector function to each element.
 * Elements mapped to `Left` go into the first array; elements mapped to `Right` go into the second.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays, Eithers } from "@bessemer/cornerstone"
 *
 * const [evens, odds] = Arrays.bisect([1, 2, 3, 4], n =>
 *   n % 2 === 0 ? Eithers.left(n) : Eithers.right(n)
 * )
 * console.log(evens) // [2, 4]
 * console.log(odds)  // [1, 3]
 * ```
 *
 * @category filtering
 */
export const bisect = <T, LeftType, RightType>(
  array: SeqLike<T>,
  bisector: (element: T, index: number) => Either<LeftType, RightType>
): [Array<LeftType>, Array<RightType>] => {
  return Eithers.split(Seq.from(array).map(bisector).toArray())
}

// -----------------------------------------------------------------------------
// Folding
// -----------------------------------------------------------------------------

/**
 * Counts the number of elements that satisfy the predicate.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.countBy([1, 2, 3, 4, 5], (x) => x % 2 === 0)) // 2
 * ```
 *
 * @category folding
 */
export const countBy = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): number => {
  return Seq.from(array).countBy(predicate)
}

/**
 * Joins the elements together with the given separator.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.join(["a", "b", "c"], "-")) // "a-b-c"
 * ```
 *
 * @category folding
 */
export const join = (array: SeqLike<string>, separator: string): string => {
  return Seq.from(array).join(separator)
}

/**
 * Maps each element while threading an accumulated state from left to right. `f` receives the current
 * state and element and returns `[nextState, output]`. Returns the final state along with every output.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * // running balance, plus the closing balance
 * const [closing, balances] = Arrays.mapAccum([100, -30, 50], 0, (balance, amount) => {
 *   const next = balance + amount
 *   return [next, next]
 * })
 * console.log(closing) // 120
 * console.log(balances) // [100, 70, 120]
 * ```
 *
 * @category folding
 */
export const mapAccum = <T, S, B>(array: SeqLike<T>, initial: S, f: (state: S, element: T, index: number) => [S, B]): [S, Array<B>] => {
  let state = initial
  const outputs = Seq.from(array)
    .map((element, index) => {
      const [nextState, output] = f(state, element, index)
      state = nextState
      return output
    })
    .toArray()

  return [state, outputs]
}

/**
 * Reduces the elements from left to right into a single value, starting from `initial`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.reduce([1, 2, 3], 0, (acc, x) => acc + x)) // 6
 * ```
 *
 * @category folding
 */
export const reduce = <T, B>(array: SeqLike<T>, initial: B, f: (accumulator: B, element: T, index: number) => B): B => {
  return Seq.from(array).reduce(f, initial)
}

/**
 * Reduces the elements from right to left into a single value, starting from `initial`.
 * The index passed to `f` is the element's original position.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.reduceRight(["a", "b", "c"], "", (acc, x) => acc + x)) // "cba"
 * ```
 *
 * @category folding
 */
export const reduceRight = <T, B>(array: SeqLike<T>, initial: B, f: (accumulator: B, element: T, index: number) => B): B => {
  const elements = fromSeq(array)
  let accumulator = initial
  for (let index = elements.length - 1; index >= 0; index--) {
    accumulator = f(accumulator, elements[index]!, index)
  }

  return accumulator
}

/**
 * Reduces from left to right, returning every intermediate accumulator starting with `initial`.
 * The result always has one more element than the input.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.scan([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [0, 1, 3, 6, 10]
 * ```
 *
 * @category folding
 */
export const scan = <T, B>(array: SeqLike<T>, initial: B, f: (accumulator: B, element: T) => B): NonEmptyArray<B> => {
  return Seq.from(array).scan(initial, f).toArray() as NonEmptyArray<B>
}

/**
 * Reduces from right to left, returning every intermediate accumulator ending with `initial`.
 * The result always has one more element than the input.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.scanRight([1, 2, 3, 4], 0, (acc, value) => acc + value)
 * console.log(result) // [10, 9, 7, 4, 0]
 * ```
 *
 * @category folding
 */
export const scanRight = <T, B>(array: SeqLike<T>, initial: B, f: (accumulator: B, element: T) => B): NonEmptyArray<B> => {
  const elements = fromSeq(array)
  const result = new Array<B>(elements.length + 1)
  result[elements.length] = initial
  for (let index = elements.length - 1; index >= 0; index--) {
    result[index] = f(result[index + 1]!, elements[index]!)
  }

  return result as NonEmptyArray<B>
}

// -----------------------------------------------------------------------------
// Getters
// -----------------------------------------------------------------------------

/**
 * Returns the element at the given index, or `undefined` if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.get([1, 2, 3], 1)) // 2
 * console.log(Arrays.get([1, 2, 3], 5)) // undefined
 * ```
 *
 * @category getters
 */
export const get = <T>(array: SeqLike<T>, index: number): T | undefined => {
  const elements = fromSeq(array)
  return isOutOfBounds(elements, index) ? undefined : elements[index]
}

/**
 * Returns the first element, or `undefined` if empty.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.head([1, 2, 3])) // 1
 * console.log(Arrays.head([])) // undefined
 * ```
 *
 * @category getters
 */
export const first = <T>(array: SeqLike<T>): T | undefined => {
  return Seq.from(array).first()
}

/**
 * Returns the first element of a `NonEmptyArray`. Unlike `first`, the result is never `undefined`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.firstNonEmpty([1, 2, 3])) // 1
 * ```
 *
 * @category getters
 */
export const firstNonEmpty = <T>(array: NonEmptyArray<T>): T => {
  return array[0]
}

export const last = <T>(array: SeqLike<T>): T | undefined => {
  const elements = fromSeq(array)
  return elements.length > 0 ? elements[elements.length - 1] : undefined
}

/**
 * Returns the last element of a `NonEmptyArray`. Unlike `last`, the result is never `undefined`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.lastNonEmpty([1, 2, 3])) // 3
 * ```
 *
 * @category getters
 */
export const lastNonEmpty = <T>(array: NonEmptyArray<T>): T => {
  return array[array.length - 1]!
}

/**
 * Returns the number of elements.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.length([1, 2, 3])) // 3
 * ```
 *
 * @category getters
 */
export const length = <T>(array: SeqLike<T>): number => {
  return fromSeq(array).length
}

/**
 * Returns the first `n` elements of an `Iterable` as a new `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.take([1, 2, 3, 4, 5], 3)) // [1, 2, 3]
 * ```
 *
 * @category getters
 */
export const take = <T>(collection: SeqLike<T>, n: number = 1): Array<T> => {
  return Seq.from(collection).take(n).toArray()
}

/**
 * Returns elements from the front of an `Iterable` as long as the predicate holds, stopping at the first failure.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.takeWhile([1, 2, 3, 4, 5], n => n < 4)) // [1, 2, 3]
 * ```
 *
 * @category getters
 */
export const takeWhile = <T>(collection: SeqLike<T>, predicate: (item: T, index: number) => boolean): Array<T> => {
  return Seq.from(collection).takeWhile(predicate).toArray()
}

export const only = <T>(array: SeqLike<T>): T => {
  return Seq.from(array).only()
}

/**
 * Returns all but the first `n` elements of an `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.rest([1, 2, 3, 4, 5], 2)) // [3, 4, 5]
 * ```
 *
 * @category getters
 */
export const rest = <T>(array: SeqLike<T>, elementsToSkip: number = 1): Array<T> => {
  return Seq.from(array).rest(elementsToSkip).toArray()
}

/**
 * Skips elements from the front of an `Array` as long as the predicate holds, returning the remainder.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.restWhile([1, 2, 3, 4, 5], n => n < 4)) // [4, 5]
 * ```
 *
 * @category getters
 */
export const restWhile = <T>(array: SeqLike<T>, predicate: (item: T, index: number) => boolean): Array<T> => {
  return Seq.from(array).restWhile(predicate).toArray()
}

// -----------------------------------------------------------------------------
// Grouping
// -----------------------------------------------------------------------------

/**
 * Groups runs of consecutive equal elements, using natural equality. Only adjacent elements are grouped;
 * equal elements separated by a different element end up in separate groups.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.group([1, 1, 2, 2, 2, 3, 1])) // [[1, 1], [2, 2, 2], [3], [1]]
 * ```
 *
 * @category grouping
 */
export const group = <T extends NilableBasicType>(array: SeqLike<T>): Array<NonEmptyArray<T>> => {
  return Seq.from(array).group().toArray()
}

/**
 * Groups runs of consecutive elements whose mapped values are equal, using natural equality or the
 * provided `Equalitor`. Like `group`, only adjacent elements are grouped. To bucket every element by key
 * regardless of position, use `Maps.groupBy`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const words = ["apple", "avocado", "banana", "blueberry", "apricot"]
 *
 * // Group by mapped value using natural equality
 * const result = Arrays.groupBy(words, word => word[0])
 * console.log(result) // [["apple", "avocado"], ["banana", "blueberry"], ["apricot"]]
 *
 * // Group by mapped value using a custom Equalitor
 * const readings = [1.0, 1.2, 3.0, 3.1]
 * const close = Arrays.groupBy(readings, n => n, (a, b) => Math.abs(a - b) < 0.5)
 * console.log(close) // [[1.0, 1.2], [3.0, 3.1]]
 * ```
 *
 * @category grouping
 */
export function groupBy<T>(array: SeqLike<T>, mapper: (element: T) => NilableBasicType): Array<NonEmptyArray<T>>
export function groupBy<T, N extends NilableBasicType>(array: SeqLike<T>, mapper: (element: T) => N, equalitor: Equalitor<N>): Array<NonEmptyArray<T>>
export function groupBy<T, N extends NilableBasicType>(
  array: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): Array<NonEmptyArray<T>> {
  return Seq.from(array)
    .groupBy(mapper, equalitor as any)
    .toArray()
}

/**
 * Groups runs of consecutive elements that are equal according to the provided `Equalitor`.
 * Each element is compared against the first element of the current group.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.groupWith(["a", "A", "b", "B", "a"], (x, y) => x.toLowerCase() === y.toLowerCase())
 * console.log(result) // [["a", "A"], ["b", "B"], ["a"]]
 * ```
 *
 * @category grouping
 */
export const groupWith = <T>(array: SeqLike<T>, equalitor: Equalitor<T>): Array<NonEmptyArray<T>> => {
  return Seq.from(array).groupWith(equalitor).toArray()
}

// -----------------------------------------------------------------------------
// Guards
// -----------------------------------------------------------------------------

/**
 * Returns `true` if the value is an `Array`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.isArray([1, 2])) // true
 * console.log(Arrays.isArray(new Set([1, 2]))) // false
 * ```
 *
 * @category guards
 */
export const isArray = (value: unknown): value is Array<unknown> => {
  return Array.isArray(value)
}

/**
 * Returns `true` if the array has no elements, narrowing it to `[]`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.isEmpty([])) // true
 * console.log(Arrays.isEmpty([1])) // false
 * ```
 *
 * @category guards
 */
export const isEmpty = <T>(array: Array<T>): array is [] => {
  return array.length === 0
}

/**
 * Returns `true` if the readonly array has no elements, narrowing it to `readonly []`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.isEmptyReadonly([] as const)) // true
 * ```
 *
 * @category guards
 */
export const isEmptyReadonly = <T>(array: ReadonlyArray<T>): array is readonly [] => {
  return array.length === 0
}

/**
 * Returns `true` if the array has at least one element, narrowing it to a `NonEmptyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const values: Array<number> = [1, 2]
 * if (Arrays.isNonEmpty(values)) {
 *   console.log(Arrays.firstNonEmpty(values)) // 1
 * }
 * ```
 *
 * @category guards
 */
export const isNonEmpty = <T>(array: Array<T>): array is NonEmptyArray<T> => {
  return array.length > 0
}

/**
 * Returns `true` if the readonly array has at least one element, narrowing it to a `NonEmptyReadonlyArray`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.isNonEmptyReadonly([1] as const)) // true
 * ```
 *
 * @category guards
 */
export const isNonEmptyReadonly = <T>(array: ReadonlyArray<T>): array is NonEmptyReadonlyArray<T> => {
  return array.length > 0
}

// -----------------------------------------------------------------------------
// Instances
// -----------------------------------------------------------------------------

/**
 * Lifts an element `Equalitor` into an `Equalitor` for arrays. Two arrays are equal when they have the
 * same length and every pair of corresponding elements is equal.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const byId = Arrays.equalitor<{ id: number }>((a, b) => a.id === b.id)
 * console.log(byId([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])) // true
 * console.log(byId([{ id: 1 }], [{ id: 1 }, { id: 2 }])) // false
 * ```
 *
 * @category instances
 */
export const equalitor = <T>(elementEqualitor: Equalitor<T>): Equalitor<Array<T>> => {
  return (first, second) => equalWith(first, second, elementEqualitor)
}

/**
 * Lifts an element `Comparator` into a lexicographic `Comparator` for arrays. Corresponding elements are
 * compared in order and the first non-zero result wins; if one array is a prefix of the other, the shorter
 * array sorts first.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const compare = Arrays.comparator<number>((a, b) => a - b)
 * console.log(compare([1, 2], [1, 3]) < 0) // true
 * console.log(compare([1, 2], [1, 2, 0]) < 0) // true (prefix sorts first)
 * console.log(compare([2], [1, 9, 9]) > 0) // true
 * ```
 *
 * @category instances
 */
export const comparator = <T>(elementComparator: Comparator<T>): Comparator<Array<T>> => {
  return (first, second) => Seq.from(first).compareWith(second, elementComparator)
}

// -----------------------------------------------------------------------------
// Mapping
// -----------------------------------------------------------------------------

/**
 * Returns a new array containing the result of applying `f` to each element.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.map([1, 2, 3], (x, index) => x * 10 + index)
 * console.log(result) // [10, 21, 32]
 * ```
 *
 * @category mapping
 */
export const map = <T, B>(array: SeqLike<T>, f: (element: T, index: number) => B): Array<B> => {
  return Seq.from(array).map(f).toArray()
}

// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------

export type NonEmptyArray<A> = [A, ...Array<A>]

export type NonEmptyReadonlyArray<A> = readonly [A, ...ReadonlyArray<A>]

// -----------------------------------------------------------------------------
// Mutations
// -----------------------------------------------------------------------------

export const clear = (array: Array<unknown>): void => {
  filterIn(array, () => false)
}

/**
 * Mutates an array in-place, retaining only elements that satisfy the predicate.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const array = [1, 2, 3, 4, 5]
 * Arrays.filterIn(array, n => n % 2 === 0)
 * console.log(array) // [2, 4]
 * ```
 *
 * @category mutations
 */
export const filterIn = <T>(array: Array<T>, predicate: (value: T, index: number, array: Array<T>) => boolean): void => {
  let writeIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i]!, i, array)) {
      array[writeIndex++] = array[i]!
    }
  }
  array.length = writeIndex
}

// -----------------------------------------------------------------------------
// Other
// -----------------------------------------------------------------------------

/**
 * Returns a new array with duplicate elements removed, using natural equality. Preserves order, keeping the first occurrence.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.dedupe([1, 2, 1, 3, 2])) // [1, 2, 3]
 * ```
 *
 * @category other
 */
export const dedupe = <T extends NilableBasicType>(array: SeqLike<T>): Array<T> => {
  return Seq.from(array).dedupe().toArray()
}

/**
 * Returns a new array with duplicate elements removed, using the provided `Equalitor`. Preserves order, keeping the first occurrence.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.dedupeWith([{ id: 1 }, { id: 2 }, { id: 1 }], (a, b) => a.id === b.id)
 * console.log(result) // [{ id: 1 }, { id: 2 }]
 * ```
 *
 * @category other
 */
export const dedupeWith = <T>(array: SeqLike<T>, equalitor: Equalitor<T>): Array<T> => {
  return Seq.from(array).dedupeWith(equalitor).toArray()
}

/**
 * Returns a new array with duplicate elements removed, comparing by mapped values. Preserves order, keeping the first occurrence.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.dedupeBy([{ id: 1 }, { id: 2 }, { id: 1 }], user => user.id)
 * console.log(result) // [{ id: 1 }, { id: 2 }]
 * ```
 *
 * @category other
 */
export function dedupeBy<T>(array: SeqLike<T>, mapper: (element: T) => NilableBasicType): Array<T>
export function dedupeBy<T, N extends NilableBasicType>(array: SeqLike<T>, mapper: (element: T) => N, equalitor: Equalitor<N>): Array<T>
export function dedupeBy<T, N extends NilableBasicType>(array: SeqLike<T>, mapper: (element: T) => N, equalitor?: Equalitor<N>): Array<T> {
  return Seq.from(array)
    .dedupeBy(mapper, equalitor as any)
    .toArray()
}

/**
 * Returns the elements of `first` that are not present in `second`, using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.difference([1, 2, 3], [2, 3])) // [1]
 * ```
 *
 * @category other
 */
export const difference = <T extends NilableBasicType>(first: SeqLike<T>, second: SeqLike<T>): Array<T> => {
  return differenceWith(first, second, Equalitors.natural())
}

/**
 * Returns the elements of `first` that are not present in `second`, using the provided `Equalitor`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.differenceWith([{ id: 1 }, { id: 2 }], [{ id: 2 }], (a, b) => a.id === b.id)
 * console.log(result) // [{ id: 1 }]
 * ```
 *
 * @category other
 */
export const differenceWith = <T>(first: SeqLike<T>, second: SeqLike<T>, equalitor: Equalitor<T>): Array<T> => {
  const secondArray = fromSeq(second)
  return Seq.from(first)
    .filter((firstItem) => !secondArray.some((it) => equalitor(firstItem, it)))
    .toArray()
}

/**
 * Returns the elements of `first` that are not present in `second`, comparing by mapped values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.differenceBy([{ id: 1 }, { id: 2 }], [{ id: 2 }], user => user.id)
 * console.log(result) // [{ id: 1 }]
 * ```
 *
 * @category other
 */
export function differenceBy<T>(first: SeqLike<T>, second: SeqLike<T>, mapper: (element: T) => NilableBasicType): Array<T>
export function differenceBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor: Equalitor<N>
): Array<T>
export function differenceBy<T, N extends NilableBasicType>(
  first: SeqLike<T>,
  second: SeqLike<T>,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): Array<T> {
  if (Objects.isNil(equalitor)) {
    return differenceWith(
      first,
      second,
      Equalitors.equalBy((it) => mapper(it), Equalitors.natural())
    )
  } else {
    return differenceWith(first, second, Equalitors.equalBy(mapper, equalitor))
  }
}

// JOHN implement Arrays.extend (effect: Array.extend)
export const extend = <T, B>(array: SeqLike<T>, f: (array: SeqLike<T>) => B): Array<B> => {
  throw new Error('Not implemented')
}

/**
 * Invokes `f` for each element.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * Arrays.forEach(["a", "b"], (x, i) => console.log(i, x)) // 0 "a", 1 "b"
 * ```
 *
 * @category other
 */
export const forEach = <T>(array: SeqLike<T>, f: (element: T, index: number) => void): void => {
  Seq.from(array).forEach(f)
}

// JOHN implement Arrays.insertAt (effect: Array.insertAt)
export const insertAt = <T>(array: SeqLike<T>, index: number, element: T): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.intersection (effect: Array.intersection)
export const intersection = <T extends NilableBasicType>(first: SeqLike<T>, second: SeqLike<T>): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.intersectionWith (effect: Array.intersectionWith)
export const intersectionWith = <T>(first: SeqLike<T>, second: SeqLike<T>, equalitor: Equalitor<T>): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.intersperse (effect: Array.intersperse)
export const intersperse = <T>(array: SeqLike<T>, separator: T): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.let (effect: Array.let) - renamed to `let_` since `let` is a reserved word in JS/TS
export const let_ = <T extends object, K extends string, B>(
  self: SeqLike<T>,
  tag: Exclude<K, keyof T>,
  f: (a: T) => B
): Array<T & { [P in K]: B }> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.max (effect: Array.max)
export const max = <T>(array: NonEmptyArray<T>, comparator: Comparator<T>): T => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.min (effect: Array.min)
export const min = <T>(array: NonEmptyArray<T>, comparator: Comparator<T>): T => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.modify (effect: Array.modify)
export const modify = <T>(array: SeqLike<T>, index: number, f: (element: T) => T): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.modifyNonEmptyHead (effect: Array.modifyNonEmptyHead)
export const modifyNonEmptyHead = <T>(array: NonEmptyArray<T>, f: (element: T) => T): NonEmptyArray<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.modifyNonEmptyLast (effect: Array.modifyNonEmptyLast)
export const modifyNonEmptyLast = <T>(array: NonEmptyArray<T>, f: (element: T) => T): NonEmptyArray<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.modifyOption (effect: Array.modifyOption)
export const modifyOption = <T>(array: SeqLike<T>, index: number, f: (element: T) => T): Array<T> | undefined => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.pad (effect: Array.pad)
export const pad = <T>(array: SeqLike<T>, n: number, element: T): Array<T> => {
  throw new Error('Not implemented')
}

/**
 * Returns a new array with all occurrences of `element` removed, using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.remove([1, 2, 3, 2], 2)) // [1, 3]
 * ```
 *
 * @category other
 */
export const remove = <T extends NilableBasicType>(array: SeqLike<T>, element: T): Array<T> => {
  return difference(array, [element])
}

/**
 * Returns a new array with all occurrences of `element` removed, using the provided `Equalitor`.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.removeWith([{ id: 1 }, { id: 2 }], { id: 1 }, (a, b) => a.id === b.id)
 * console.log(result) // [{ id: 2 }]
 * ```
 *
 * @category other
 */
export const removeWith = <T>(array: SeqLike<T>, element: T, equalitor: Equalitor<T>): Array<T> => {
  return differenceWith(array, [element], equalitor)
}

/**
 * Returns a new array with all occurrences of `element` removed, comparing by mapped values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.removeBy([{ id: 1 }, { id: 2 }], { id: 1 }, user => user.id)
 * console.log(result) // [{ id: 2 }]
 * ```
 *
 * @category other
 */
export function removeBy<T>(array: SeqLike<T>, element: T, mapper: (element: T) => NilableBasicType): Array<T>
export function removeBy<T, N extends NilableBasicType>(array: SeqLike<T>, element: T, mapper: (element: T) => N, equalitor: Equalitor<N>): Array<T>
export function removeBy<T, N extends NilableBasicType>(
  array: SeqLike<T>,
  element: T,
  mapper: (element: T) => N,
  equalitor?: Equalitor<N>
): Array<T> {
  return differenceBy(array, [element], mapper, equalitor as any)
}

// JOHN implement Arrays.removeOption (effect: Array.removeOption)
export const removeOption = <T>(array: SeqLike<T>, index: number): Array<T> | undefined => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.replace (effect: Array.replace)
export const replace = <T>(array: SeqLike<T>, index: number, element: T): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.replaceOption (effect: Array.replaceOption)
export const replaceOption = <T>(array: SeqLike<T>, index: number, element: T): Array<T> | undefined => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.rotate (effect: Array.rotate)
export const rotate = <T>(array: SeqLike<T>, n: number): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.setNonEmptyHead (effect: Array.setNonEmptyHead)
export const setNonEmptyHead = <T>(array: NonEmptyArray<T>, element: T): NonEmptyArray<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.setNonEmptyLast (effect: Array.setNonEmptyLast)
export const setNonEmptyLast = <T>(array: NonEmptyArray<T>, element: T): NonEmptyArray<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.union (effect: Array.union)
export const union = <T extends NilableBasicType>(first: SeqLike<T>, second: SeqLike<T>): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.unionWith (effect: Array.unionWith)
export const unionWith = <T>(first: SeqLike<T>, second: SeqLike<T>, equalitor: Equalitor<T>): Array<T> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.unzip (effect: Array.unzip)
export const unzip = <A, B>(array: SeqLike<[A, B]>): [Array<A>, Array<B>] => {
  throw new Error('Not implemented')
}

// -----------------------------------------------------------------------------
// Pattern Matching
// -----------------------------------------------------------------------------

// JOHN implement Arrays.match (effect: Array.match)
export const match = <T, B, C>(array: SeqLike<T>, onEmpty: () => B, onNonEmpty: (array: NonEmptyArray<T>) => C): B | C => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.matchLeft (effect: Array.matchLeft)
export const matchLeft = <T, B, C>(array: SeqLike<T>, onEmpty: () => B, onNonEmpty: (head: T, tail: Array<T>) => C): B | C => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.matchRight (effect: Array.matchRight)
export const matchRight = <T, B, C>(array: SeqLike<T>, onEmpty: () => B, onNonEmpty: (init: Array<T>, last: T) => C): B | C => {
  throw new Error('Not implemented')
}

// -----------------------------------------------------------------------------
// Sequencing
// -----------------------------------------------------------------------------

// JOHN implement Arrays.flatMap (effect: Array.flatMap)
export const flatMap = <T, B>(array: SeqLike<T>, f: (element: T, index: number) => SeqLike<B>): Array<B> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.flatMapNullable (effect: Array.flatMapNullable)
export const flatMapNullable = <T, B>(array: SeqLike<T>, f: (element: T) => B | null | undefined): Array<B> => {
  throw new Error('Not implemented')
}

export const flatten = <T>(array: SeqLike<SeqLike<T>>): Array<T> => {
  return Seq.from(array)
    .flatMap((it) => it)
    .toArray()
}

// -----------------------------------------------------------------------------
// Sorting
// -----------------------------------------------------------------------------

/**
 * Returns a new sorted array by comparing mapped values.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.sortBy([{ name: 'Charlie' }, { name: 'Alice' }], user => user.name)
 * console.log(result) // [{ name: 'Alice' }, { name: 'Charlie' }]
 * ```
 *
 * @category sorting
 */
export function sortBy<T>(array: SeqLike<T>, mapper: (element: T) => NilableBasicType): Array<T>
export function sortBy<T, N extends NilableBasicType>(array: SeqLike<T>, mapper: (element: T) => N, comparator: Comparator<N>): Array<T>
export function sortBy<T, N extends NilableBasicType>(array: SeqLike<T>, mapper: (element: T) => N, comparator?: Comparator<N>): Array<T> {
  if (Objects.isNil(comparator)) {
    return sortWith(
      array,
      Comparators.compareBy((it) => mapper(it as any), Comparators.natural())
    )
  } else {
    return sortWith(array, Comparators.compareBy(mapper, comparator))
  }
}

/**
 * Returns a new sorted array using natural equality.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.sort([3, 1, 2])) // [1, 2, 3]
 * ```
 *
 * @category sorting
 */
export const sort = <T extends NilableBasicType>(array: SeqLike<T>): Array<T> => sortBy(array, Signatures.sign)

// -----------------------------------------------------------------------------
// Splitting
// -----------------------------------------------------------------------------

// JOHN implement Arrays.chunksOf (effect: Array.chunksOf)
export const chunksOf = <T>(array: SeqLike<T>, n: number): Array<NonEmptyArray<T>> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.span (effect: Array.span)
export const span = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): [Array<T>, Array<T>] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.split (effect: Array.split)
export const split = <T>(array: SeqLike<T>, n: number): Array<Array<T>> => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.splitAt (effect: Array.splitAt)
export const splitAt = <T>(array: SeqLike<T>, n: number): [Array<T>, Array<T>] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.splitNonEmptyAt (effect: Array.splitNonEmptyAt)
export const splitNonEmptyAt = <T>(array: NonEmptyArray<T>, n: number): [NonEmptyArray<T>, Array<T>] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.splitWhere (effect: Array.splitWhere)
export const splitWhere = <T>(array: SeqLike<T>, predicate: (element: T, index: number) => boolean): [Array<T>, Array<T>] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.unappend (effect: Array.unappend)
export const unappend = <T>(array: NonEmptyArray<T>): [Array<T>, T] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.unprepend (effect: Array.unprepend)
export const unprepend = <T>(array: NonEmptyArray<T>): [T, Array<T>] => {
  throw new Error('Not implemented')
}

// JOHN implement Arrays.window (effect: Array.window)
export const window = <T>(array: SeqLike<T>, n: number): Array<Array<T>> => {
  throw new Error('Not implemented')
}

// -----------------------------------------------------------------------------
// Unsafe
// -----------------------------------------------------------------------------

/**
 * Returns the element at the given index, throwing if the index is out of bounds.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * console.log(Arrays.unsafeGet([1, 2, 3], 1)) // 2
 * Arrays.unsafeGet([1, 2, 3], 5) // throws
 * ```
 *
 * @category unsafe
 */
export const unsafeGet = <T>(array: SeqLike<T>, index: number): T => {
  const elements = fromSeq(array)
  Assertions.assert(!isOutOfBounds(elements, index), () => `Index ${index} out of bounds`)
  return elements[index]!
}

// -----------------------------------------------------------------------------
// Zipping
// -----------------------------------------------------------------------------

/**
 * Zips two Iterables together, pairing up elements at the same index. Stops at the shorter of the two.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.zip([1, 2, 3], ["a", "b"])
 * console.log(result) // [[1, "a"], [2, "b"]]
 * ```
 *
 * @category zipping
 */
export const zip = <A, B>(first: SeqLike<A>, second: SeqLike<B>): Array<[A, B]> => {
  return Seq.from(first).zip(second).toArray()
}

/**
 * Zips two Iterables together, combining paired elements with the provided function. Stops at the shorter of the two.
 *
 * **Example**
 *
 * ```ts
 * import { Arrays } from "@bessemer/cornerstone"
 *
 * const result = Arrays.zipWith([1, 2, 3], ["a", "b"], (a, b) => `${a}-${b}`)
 * console.log(result) // ["1-a", "2-b"]
 * ```
 *
 * @category zipping
 */
export const zipWith = <A, B, C>(first: SeqLike<A>, second: SeqLike<B>, f: (a: A, b: B) => C): Array<C> => {
  return Seq.from(first).zipWith(second, f).toArray()
}

const isOutOfBounds = (array: Array<unknown>, index: number): boolean => !Number.isInteger(index) || index < 0 || index >= array.length
