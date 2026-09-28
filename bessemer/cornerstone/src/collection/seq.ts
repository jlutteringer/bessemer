import { Collector } from '@bessemer/cornerstone/collection/collector'
import type { NonEmptyArray } from '@bessemer/cornerstone/collection/array'
import * as Assertions from '@bessemer/cornerstone/assertion'
import * as Maths from '@bessemer/cornerstone/math'
import { FiniteBounds } from '@bessemer/cornerstone/range'
import * as Equalitors from '@bessemer/cornerstone/equalitor'
import { Equalitor } from '@bessemer/cornerstone/equalitor'
import * as Comparators from '@bessemer/cornerstone/comparator'
import { Comparator } from '@bessemer/cornerstone/comparator'
import * as Signatures from '@bessemer/cornerstone/signature'
import { Signature } from '@bessemer/cornerstone/signature'
import * as Objects from '@bessemer/cornerstone/object'
import * as Eithers from '@bessemer/cornerstone/either'
import { Either, Left, Right } from '@bessemer/cornerstone/either'
import { NilableBasicType } from '@bessemer/cornerstone/types'

export type SeqLike<T> = Iterator<T> | Iterable<T>

export default class Seq<T> implements Iterable<T> {
  private consumed = false
  private constructor(private readonly iterator: Iterator<T>) {}

  // -----------------------------------------------------------------------------
  // Constructors
  // -----------------------------------------------------------------------------

  static from<T>(source: SeqLike<T>): Seq<T> {
    if (source instanceof Seq) {
      return source
    }

    if (Symbol.iterator in (source as object)) {
      return new Seq((source as Iterable<T>)[Symbol.iterator]())
    } else {
      return new Seq(source as Iterator<T>)
    }
  }

  static makeBy = <T>(n: number, f: (i: number) => T): Seq<T> => {
    Assertions.assert(Maths.isWhole(n))
    Assertions.assert(n >= 0)

    return Seq.from(
      (function* () {
        for (let i = 0; i < n; i++) {
          yield f(i)
        }
      })()
    )
  }

  static range = ([start, end]: FiniteBounds<number>): Seq<number> => {
    return Seq.makeBy(end - start + 1, (i) => start + i)
  }

  static repeat = <T>(a: T, n: number): Seq<T> => {
    return Seq.makeBy(n, () => a)
  }

  static concatenate<T>(sources: SeqLike<T>[]): Seq<T> {
    return Seq.from(sources).flatMap((source) => source)
  }

  // -----------------------------------------------------------------------------
  // Conversions
  // -----------------------------------------------------------------------------

  [Symbol.iterator](): Iterator<T> {
    Assertions.assert(!this.consumed, () => 'Seq has already been consumed.')
    this.consumed = true
    return this.iterator
  }

  toArray(): Array<T> {
    return [...this]
  }

  collect<A, R>(collector: Collector<T, A, R>): R {
    const acc = collector.supplier()
    for (const item of this) {
      collector.accumulator(acc, item)
    }
    return collector.finisher(acc)
  }

  // -----------------------------------------------------------------------------
  // Concatenating
  // -----------------------------------------------------------------------------

  append(element: T): Seq<T> {
    return this.appendAll([element])
  }

  appendAll(elements: SeqLike<T>): Seq<T> {
    return Seq.concatenate([this, elements])
  }

  prepend(element: T): Seq<T> {
    return this.prependAll([element])
  }

  prependAll(elements: SeqLike<T>): Seq<T> {
    return Seq.concatenate([elements, this])
  }

  // -----------------------------------------------------------------------------
  // Mapping
  // -----------------------------------------------------------------------------

  map<U>(f: (it: T, index: number) => U): Seq<U> {
    return Seq.from(this._map(f))
  }

  flatMap<U>(f: (it: T, index: number) => SeqLike<U>): Seq<U> {
    return Seq.from(this._flatMap(f))
  }

  // Yields `initial` followed by each successive accumulated value.
  scan<U>(initial: U, f: (acc: U, it: T) => U): Seq<U> {
    return Seq.from(this._scan(initial, f))
  }

  // -----------------------------------------------------------------------------
  // Filtering
  // -----------------------------------------------------------------------------

  filter<S extends T>(predicate: (it: T, index: number) => it is S): Seq<S>
  filter(predicate: (it: T, index: number) => boolean): Seq<T>
  filter(predicate: (it: T, index: number) => boolean): Seq<T> {
    return Seq.from(this._filter(predicate))
  }

  filterMap<U>(f: (it: T, index: number) => U | undefined): Seq<U> {
    return this.map(f).filter((it): it is U => !Objects.isUndefined(it))
  }

  filterMapWhile<U>(f: (it: T, index: number) => U | undefined): Seq<U> {
    return Seq.from(this._filterMapWhile(f))
  }

  getLefts<L, R>(this: Seq<Either<L, R>>): Seq<L> {
    return this.filter((it): it is Left<L> => Eithers.isLeft(it))
  }

  getRights<L, R>(this: Seq<Either<L, R>>): Seq<R> {
    return this.filter((it): it is Right<R> => Eithers.isRight(it)).map((it) => it.value)
  }

  // Returns [excluded, satisfying]. Both halves lazily share this sequence: pulling from one side
  // buffers any elements destined for the other side until they are consumed.
  partition(predicate: (it: T, index: number) => boolean): [Seq<T>, Seq<T>] {
    return this._split((item, index, pushLeft, pushRight) => (predicate(item, index) ? pushRight(item) : pushLeft(item)))
  }

  // Returns [lefts, rights], sharing this sequence lazily in the same way as `partition`.
  partitionMap<L, R>(f: (it: T, index: number) => Either<L, R>): [Seq<L>, Seq<R>] {
    return this._split<L, R>((item, index, pushLeft, pushRight) => {
      const result = f(item, index)
      if (Eithers.isRight(result)) {
        pushRight(result.value)
      } else {
        pushLeft(result)
      }
    })
  }

  separate<L, R>(this: Seq<Either<L, R>>): [Seq<L>, Seq<R>] {
    return this.partitionMap((it) => it)
  }

  // Lazily removes duplicates, keeping the first occurrence of each element. Every distinct element seen so far
  // is retained, and each new element is checked against all of them (O(n * distinct)). Prefer `dedupeBy`
  // with natural equality where possible, which uses a Set instead.
  dedupeWith(equalitor: Equalitor<T>): Seq<T> {
    const seen: Array<T> = []
    return this.filter((item) => {
      if (seen.some((existing) => equalitor(existing, item))) {
        return false
      }
      seen.push(item)
      return true
    })
  }

  // With natural equality, mapped values are compared by signature using a Set (O(n)).
  dedupeBy(mapper: (element: T) => NilableBasicType): Seq<T>
  dedupeBy<N extends NilableBasicType>(mapper: (element: T) => N, equalitor: Equalitor<N>): Seq<T>
  dedupeBy<N extends NilableBasicType>(mapper: (element: T) => N, equalitor?: Equalitor<N>): Seq<T> {
    if (!Objects.isNil(equalitor)) {
      return this.dedupeWith(Seq.mappedEqualitor(mapper, equalitor))
    }

    const seen = new Set<Signature>()
    return this.filter((item) => {
      const signature = Signatures.sign(mapper(item) as NilableBasicType)
      if (seen.has(signature)) {
        return false
      }
      seen.add(signature)
      return true
    })
  }

  dedupe<U extends NilableBasicType>(this: Seq<U>): Seq<U> {
    return this.dedupeBy((it) => it)
  }

  // -----------------------------------------------------------------------------
  // Getters
  // -----------------------------------------------------------------------------

  first(): T | undefined {
    for (const item of this) {
      return item
    }
    return undefined
  }

  only(): T {
    const iterator = this[Symbol.iterator]()
    const first = iterator.next()
    Assertions.assert(!first.done, () => 'Expected exactly one element but found none')
    Assertions.assert(Boolean(iterator.next().done), () => 'Expected exactly one element but found more')
    return first.value
  }

  // Yields at most the first `n` elements, never pulling past the n-th element of the source.
  take(n: number): Seq<T> {
    return Seq.from(this._take(n))
  }

  takeWhile(predicate: (it: T, index: number) => boolean): Seq<T> {
    return Seq.from(this._takeWhile(predicate))
  }

  // Skips the first `n` elements and yields the remainder.
  rest(n: number): Seq<T> {
    return this.filter((_, index) => index >= n)
  }

  restWhile(predicate: (it: T, index: number) => boolean): Seq<T> {
    return Seq.from(this._restWhile(predicate))
  }

  // -----------------------------------------------------------------------------
  // Elements
  // -----------------------------------------------------------------------------

  find(predicate: (it: T, index: number) => boolean): T | undefined {
    let index = 0
    for (const item of this) {
      if (predicate(item, index++)) {
        return item
      }
    }
    return undefined
  }

  findIndex(predicate: (it: T, index: number) => boolean): number | undefined {
    return this.findWithIndex(predicate)?.[1]
  }

  findWithIndex(predicate: (it: T, index: number) => boolean): [T, number] | undefined {
    let index = 0
    for (const item of this) {
      if (predicate(item, index)) {
        return [item, index]
      }
      index++
    }
    return undefined
  }

  some(predicate: (it: T, index: number) => boolean): boolean {
    let index = 0
    for (const item of this) {
      if (predicate(item, index++)) {
        return true
      }
    }
    return false
  }

  every(predicate: (it: T, index: number) => boolean): boolean {
    let index = 0
    for (const item of this) {
      if (!predicate(item, index++)) {
        return false
      }
    }
    return true
  }

  containsWith(element: T, equalitor: Equalitor<T>): boolean {
    return this.some((it) => equalitor(it, element))
  }

  containsBy(element: T, mapper: (element: T) => NilableBasicType): boolean
  containsBy<N extends NilableBasicType>(element: T, mapper: (element: T) => N, equalitor: Equalitor<N>): boolean
  containsBy<N extends NilableBasicType>(element: T, mapper: (element: T) => N, equalitor?: Equalitor<N>): boolean {
    return this.containsWith(element, Seq.mappedEqualitor(mapper, equalitor))
  }

  contains<U extends NilableBasicType>(this: Seq<U>, element: U): boolean {
    return this.containsWith(element, Equalitors.natural())
  }

  // Returns true if this sequence contains every element of `elements`.
  containsAllWith(elements: SeqLike<T>, equalitor: Equalitor<T>): boolean {
    const self = this.toArray()
    return Seq.from(elements).every((element) => self.some((it) => equalitor(element, it)))
  }

  containsAllBy(elements: SeqLike<T>, mapper: (element: T) => NilableBasicType): boolean
  containsAllBy<N extends NilableBasicType>(elements: SeqLike<T>, mapper: (element: T) => N, equalitor: Equalitor<N>): boolean
  containsAllBy<N extends NilableBasicType>(elements: SeqLike<T>, mapper: (element: T) => N, equalitor?: Equalitor<N>): boolean {
    return this.containsAllWith(elements, Seq.mappedEqualitor(mapper, equalitor))
  }

  containsAll<U extends NilableBasicType>(this: Seq<U>, elements: SeqLike<U>): boolean {
    return this.containsAllWith(elements, Equalitors.natural())
  }

  // -----------------------------------------------------------------------------
  // Folding
  // -----------------------------------------------------------------------------

  forEach(f: (it: T, index: number) => void): void {
    let index = 0
    for (const item of this) {
      f(item, index++)
    }
  }

  reduce<U>(f: (acc: U, it: T, index: number) => U, initial: U): U {
    let acc = initial
    let index = 0
    for (const item of this) {
      acc = f(acc, item, index++)
    }
    return acc
  }

  countBy(predicate: (it: T, index: number) => boolean): number {
    return this.reduce((count, item, index) => (predicate(item, index) ? count + 1 : count), 0)
  }

  join(this: Seq<string>, separator: string): string {
    return this.toArray().join(separator)
  }

  // -----------------------------------------------------------------------------
  // Grouping
  // -----------------------------------------------------------------------------

  // Lazily groups runs of consecutive equal elements. Each group is emitted once the next differing
  // element (or the end of the sequence) is reached, so only the current run is ever buffered.
  // Each element is compared against the first element of its group.
  groupWith(equalitor: Equalitor<T>): Seq<NonEmptyArray<T>> {
    return Seq.from(this._groupWith(equalitor))
  }

  groupBy(mapper: (element: T) => NilableBasicType): Seq<NonEmptyArray<T>>
  groupBy<N extends NilableBasicType>(mapper: (element: T) => N, equalitor: Equalitor<N>): Seq<NonEmptyArray<T>>
  groupBy<N extends NilableBasicType>(mapper: (element: T) => N, equalitor?: Equalitor<N>): Seq<NonEmptyArray<T>> {
    return this.groupWith(Seq.mappedEqualitor(mapper, equalitor))
  }

  group<U extends NilableBasicType>(this: Seq<U>): Seq<NonEmptyArray<U>> {
    return this.groupWith(Equalitors.natural())
  }

  // -----------------------------------------------------------------------------
  // Comparison
  // -----------------------------------------------------------------------------

  equalWith(other: SeqLike<T>, equalitor: Equalitor<T>): boolean {
    const firstIterator = this[Symbol.iterator]()
    const secondIterator = Seq.from(other)[Symbol.iterator]()

    while (true) {
      const firstResult = firstIterator.next()
      const secondResult = secondIterator.next()

      if (firstResult.done || secondResult.done) {
        return Boolean(firstResult.done) === Boolean(secondResult.done)
      }

      if (!equalitor(firstResult.value, secondResult.value)) {
        return false
      }
    }
  }

  equalBy(other: SeqLike<T>, mapper: (element: T) => NilableBasicType): boolean
  equalBy<N extends NilableBasicType>(other: SeqLike<T>, mapper: (element: T) => N, equalitor: Equalitor<N>): boolean
  equalBy<N extends NilableBasicType>(other: SeqLike<T>, mapper: (element: T) => N, equalitor?: Equalitor<N>): boolean {
    return this.equalWith(other, Seq.mappedEqualitor(mapper, equalitor))
  }

  equal<U extends NilableBasicType>(this: Seq<U>, other: SeqLike<U>): boolean {
    return this.equalWith(other, Equalitors.natural())
  }

  // Lexicographic comparison in a single pass: the first non-zero element comparison wins, and if one
  // sequence ends first (i.e. is a prefix of the other) it sorts first.
  compareWith(other: SeqLike<T>, comparator: Comparator<T>): number {
    const firstIterator = this[Symbol.iterator]()
    const secondIterator = Seq.from(other)[Symbol.iterator]()

    while (true) {
      const firstResult = firstIterator.next()
      const secondResult = secondIterator.next()

      if (firstResult.done || secondResult.done) {
        return Number(Boolean(secondResult.done)) - Number(Boolean(firstResult.done))
      }

      const result = comparator(firstResult.value, secondResult.value)
      if (result !== 0) {
        return result
      }
    }
  }

  compareBy(other: SeqLike<T>, mapper: (element: T) => NilableBasicType): number
  compareBy<N extends NilableBasicType>(other: SeqLike<T>, mapper: (element: T) => N, comparator: Comparator<N>): number
  compareBy<N extends NilableBasicType>(other: SeqLike<T>, mapper: (element: T) => N, comparator?: Comparator<N>): number {
    return this.compareWith(other, Seq.mappedComparator(mapper, comparator))
  }

  compare<U extends NilableBasicType>(this: Seq<U>, other: SeqLike<U>): number {
    return this.compareWith(other, Comparators.natural())
  }

  // -----------------------------------------------------------------------------
  // Zipping
  // -----------------------------------------------------------------------------

  zip = <U>(second: SeqLike<U>): Seq<[T, U]> => {
    return this.zipWith(second, (a, b) => [a, b])
  }

  zipWith = <U, C>(second: SeqLike<U>, f: (a: T, b: U) => C): Seq<C> => {
    return Seq.from(this._zipWith(second, f))
  }

  // -----------------------------------------------------------------------------
  // Internals
  // -----------------------------------------------------------------------------

  private static mappedEqualitor<T, N extends NilableBasicType>(mapper: (element: T) => N, equalitor?: Equalitor<N>): Equalitor<T> {
    if (Objects.isNil(equalitor)) {
      return Equalitors.equalBy((it: T) => mapper(it), Equalitors.natural())
    }

    return Equalitors.equalBy(mapper, equalitor)
  }

  private static mappedComparator<T, N extends NilableBasicType>(mapper: (element: T) => N, comparator?: Comparator<N>): Comparator<T> {
    if (Objects.isNil(comparator)) {
      return Comparators.compareBy((it: T) => mapper(it), Comparators.natural())
    }

    return Comparators.compareBy(mapper, comparator)
  }

  private _split<L, R>(route: (item: T, index: number, pushLeft: (value: L) => void, pushRight: (value: R) => void) => void): [Seq<L>, Seq<R>] {
    const source = this[Symbol.iterator]()
    const lefts = new Queue<L>()
    const rights = new Queue<R>()
    const pushLeft = (value: L) => lefts.push(value)
    const pushRight = (value: R) => rights.push(value)
    let index = 0
    let exhausted = false

    // Routes the next source element into one of the queues. Returns false once the source is exhausted.
    const pull = (): boolean => {
      if (exhausted) {
        return false
      }

      const next = source.next()
      if (next.done) {
        exhausted = true
        return false
      }

      route(next.value, index++, pushLeft, pushRight)
      return true
    }

    function* drain<U>(queue: Queue<U>): Generator<U> {
      while (true) {
        if (!queue.isEmpty()) {
          yield queue.take()
        } else if (!pull()) {
          return
        }
      }
    }

    return [Seq.from(drain(lefts)), Seq.from(drain(rights))]
  }

  private *_map<U>(f: (it: T, index: number) => U): Generator<U> {
    let index = 0
    for (const item of this) {
      yield f(item, index++)
    }
  }

  private *_flatMap<U>(f: (it: T, index: number) => SeqLike<U>): Generator<U> {
    let index = 0
    for (const item of this) {
      yield* Seq.from(f(item, index++))
    }
  }

  private *_scan<U>(initial: U, f: (acc: U, it: T) => U): Generator<U> {
    let acc = initial
    yield acc
    for (const item of this) {
      acc = f(acc, item)
      yield acc
    }
  }

  private *_filter(predicate: (it: T, index: number) => boolean): Generator<T> {
    let index = 0
    for (const item of this) {
      if (predicate(item, index++)) {
        yield item
      }
    }
  }

  private *_filterMapWhile<U>(f: (it: T, index: number) => U | undefined): Generator<U> {
    let index = 0
    for (const item of this) {
      const mapped = f(item, index++)
      if (Objects.isUndefined(mapped)) {
        return
      }
      yield mapped
    }
  }

  private *_take(n: number): Generator<T> {
    if (n <= 0) {
      return
    }

    let count = 0
    for (const item of this) {
      yield item
      // checked after yielding so that the n-th element doesn't trigger a pull of the (n+1)-th
      if (++count >= n) {
        return
      }
    }
  }

  private *_takeWhile(predicate: (it: T, index: number) => boolean): Generator<T> {
    let index = 0
    for (const item of this) {
      if (!predicate(item, index++)) {
        return
      }
      yield item
    }
  }

  private *_restWhile(predicate: (it: T, index: number) => boolean): Generator<T> {
    let index = 0
    let skipping = true
    for (const item of this) {
      if (skipping && predicate(item, index++)) {
        continue
      }
      skipping = false
      yield item
    }
  }

  private *_groupWith(equalitor: Equalitor<T>): Generator<NonEmptyArray<T>> {
    let current: NonEmptyArray<T> | undefined = undefined
    for (const item of this) {
      if (Objects.isUndefined(current)) {
        current = [item]
      } else if (equalitor(current[0], item)) {
        current.push(item)
      } else {
        yield current
        current = [item]
      }
    }

    if (!Objects.isUndefined(current)) {
      yield current
    }
  }

  private *_zipWith<U, C>(second: SeqLike<U>, f: (a: T, b: U) => C): Generator<C> {
    const firstIterator = this[Symbol.iterator]()
    const secondIterator = Seq.from(second)[Symbol.iterator]()

    while (true) {
      const firstResult = firstIterator.next()
      const secondResult = secondIterator.next()

      if (firstResult.done || secondResult.done) {
        return
      }

      yield f(firstResult.value, secondResult.value)
    }
  }
}

// FIFO queue with amortized O(1) take; storage is released whenever the queue fully drains.
class Queue<T> {
  private items: Array<T> = []
  private head = 0

  push(item: T): void {
    this.items.push(item)
  }

  isEmpty(): boolean {
    return this.head >= this.items.length
  }

  take(): T {
    const item = this.items[this.head++]!
    if (this.isEmpty()) {
      this.items = []
      this.head = 0
    }
    return item
  }
}
