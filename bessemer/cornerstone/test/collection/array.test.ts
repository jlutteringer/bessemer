import * as Arrays from '@bessemer/cornerstone/collection/array'
import { left, right } from '@bessemer/cornerstone/either'

// One-shot iterator, to check that functions accept any SeqLike and not just arrays
const iter = <T>(...values: Array<T>): Iterator<T> => values[Symbol.iterator]()

const byId = (a: { id: number }, b: { id: number }) => a.id === b.id

test('Arrays.equalWith', () => {
  expect(Arrays.equalWith([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }], byId)).toBe(true)
  expect(Arrays.equalWith([{ id: 1 }], [{ id: 2 }], byId)).toBe(false)
  expect(Arrays.equalWith([{ id: 1 }], [{ id: 1 }, { id: 2 }], byId)).toBe(false)
})

test('Arrays.equalBy', () => {
  expect(Arrays.equalBy([{ id: 1 }], [{ id: 1 }], (it) => it.id)).toBe(true)
  expect(
    Arrays.equalBy(
      [1.1, 2.2],
      [1.0, 2.0],
      (it) => it,
      (a, b) => Math.abs(a - b) < 0.5
    )
  ).toBe(true)
})

test('Arrays.equal', () => {
  expect(Arrays.equal([1, 2, 3], iter(1, 2, 3))).toBe(true)
  expect(Arrays.equal([1, 2, 3], [1, 2, 4])).toBe(false)
  expect(Arrays.equal([1, 2], [1, 2, 3])).toBe(false)
  expect(Arrays.equal([], [])).toBe(true)
})

test('Arrays.append / appendAll / prepend / prependAll', () => {
  expect(Arrays.append(iter(1, 2), 3)).toEqual([1, 2, 3])
  expect(Arrays.appendAll([1], iter(2, 3))).toEqual([1, 2, 3])
  expect(Arrays.prepend([1, 2], 0)).toEqual([0, 1, 2])
  expect(Arrays.prependAll([3], [1, 2])).toEqual([1, 2, 3])
})

test('Arrays.ensure / toArray', () => {
  expect(Arrays.ensure('a')).toEqual(['a'])
  expect(Arrays.ensure(['a', 'b'])).toEqual(['a', 'b'])
  expect(Arrays.toArray('a')).toEqual(['a'])
  expect(Arrays.toArray(['a'])).toEqual(['a'])
})

test('Arrays.makeBy / range / repeat', () => {
  expect(Arrays.makeBy(4, (i) => i * 2)).toEqual([0, 2, 4, 6])
  expect(Arrays.range([1, 3])).toEqual([1, 2, 3])
  expect(Arrays.repeat('a', 3)).toEqual(['a', 'a', 'a'])
})

test('Arrays.fromSeq / fromNilable / fromOption', () => {
  const array = [1, 2]
  expect(Arrays.fromSeq(array)).toBe(array)
  expect(Arrays.fromSeq(new Set([1, 2]))).toEqual([1, 2])
  expect(Arrays.fromNilable([1, null, 2, undefined])).toEqual([1, 2])
  expect(Arrays.fromOption(undefined)).toEqual([])
  expect(Arrays.fromOption(0)).toEqual([0])
})

test('Arrays.cartesian / cartesianWith', () => {
  expect(Arrays.cartesian([1, 2], iter('a', 'b'))).toEqual([
    [1, 'a'],
    [1, 'b'],
    [2, 'a'],
    [2, 'b'],
  ])
  expect(Arrays.cartesianWith([1, 2], ['a'], (a, b) => `${a}${b}`)).toEqual(['1a', '2a'])
})

test('Arrays.contains / containsWith / containsBy', () => {
  expect(Arrays.contains(iter('a', 'b'), 'b')).toBe(true)
  expect(Arrays.contains(['a', 'b'], 'z')).toBe(false)
  expect(Arrays.containsWith([{ id: 1 }], { id: 1 }, byId)).toBe(true)
  expect(Arrays.containsBy([{ id: 1 }], { id: 2 }, (it) => it.id)).toBe(false)
})

test('Arrays.containsAll / containsAllWith / containsAllBy', () => {
  expect(Arrays.containsAll([1, 2, 3], iter(1, 3))).toBe(true)
  expect(Arrays.containsAll([1, 2, 3], [1, 4])).toBe(false)
  expect(Arrays.containsAll([1], [])).toBe(true)
  expect(Arrays.containsAllWith([{ id: 1 }, { id: 2 }], [{ id: 2 }], byId)).toBe(true)
  expect(Arrays.containsAllBy([{ id: 1 }], [{ id: 2 }], (it) => it.id)).toBe(false)
})

test('Arrays.findWithIndex', () => {
  expect(Arrays.findWithIndex(iter(1, 2, 3, 4), (x) => x > 2)).toEqual([3, 2])
  expect(Arrays.findWithIndex([1, 2], (x) => x > 5)).toBeUndefined()
})

test('Arrays.findLast / findLastIndex / findLastWithIndex', () => {
  const isOdd = (x: number) => x % 2 === 1
  expect(Arrays.findLast(iter(1, 2, 3, 4), isOdd)).toBe(3)
  expect(Arrays.findLastIndex([1, 2, 3, 4], isOdd)).toBe(2)
  expect(Arrays.findLastWithIndex([1, 2, 3, 4], isOdd)).toEqual([3, 2])
  expect(Arrays.findLast([2, 4], isOdd)).toBeUndefined()
  expect(Arrays.findLastIndex([2, 4], isOdd)).toBeUndefined()
})

test('Arrays.reverse', () => {
  const input = [1, 2, 3]
  expect(Arrays.reverse(input)).toEqual([3, 2, 1])
  expect(input).toEqual([1, 2, 3])
  expect(Arrays.reverse(iter('a', 'b'))).toEqual(['b', 'a'])
})

test('Arrays.some', () => {
  expect(Arrays.some(iter(1, 2, 3), (x) => x > 2)).toBe(true)
  expect(Arrays.some([1, 2, 3], (x) => x > 5)).toBe(false)
  expect(Arrays.some([], () => true)).toBe(false)
})

test('Arrays.sortWith', () => {
  const input = [3, 1, 2]
  expect(Arrays.sortWith(input, (a, b) => a - b)).toEqual([1, 2, 3])
  expect(input).toEqual([3, 1, 2])
})

test('Arrays.filterMap / filterMapWhile', () => {
  const evensTimesTen = (x: number) => (x % 2 === 0 ? x * 10 : undefined)
  expect(Arrays.filterMap(iter(1, 2, 3, 4), evensTimesTen)).toEqual([20, 40])
  expect(Arrays.filterMap([1, 2], (x) => (x === 1 ? null : x))).toEqual([null, 2])
  expect(Arrays.filterMapWhile([2, 4, 5, 6], evensTimesTen)).toEqual([20, 40])
})

test('Arrays.getLefts / getRights / separate', () => {
  const eithers = [left(1), right('a'), left(2), right('b')]
  expect(Arrays.getLefts(eithers)).toEqual([1, 2])
  expect(Arrays.getRights(eithers)).toEqual(['a', 'b'])
  expect(Arrays.separate(eithers.values())).toEqual([
    [1, 2],
    ['a', 'b'],
  ])
})

test('Arrays.partition / partitionMap / bisect', () => {
  expect(Arrays.partition(iter(1, 2, 3, 4), (x) => x % 2 === 0)).toEqual([
    [1, 3],
    [2, 4],
  ])
  expect(Arrays.partition([], () => true)).toEqual([[], []])

  const toEither = (x: number) => (x % 2 === 0 ? left(x) : right(`${x}`))
  expect(Arrays.partitionMap([1, 2, 3, 4], toEither)).toEqual([
    [2, 4],
    ['1', '3'],
  ])
  expect(Arrays.bisect([1, 2, 3, 4], toEither)).toEqual([
    [2, 4],
    ['1', '3'],
  ])
})

test('Arrays.countBy / join', () => {
  expect(Arrays.countBy(iter(1, 2, 3, 4, 5), (x) => x % 2 === 0)).toBe(2)
  expect(Arrays.join(['a', 'b', 'c'], '-')).toBe('a-b-c')
  expect(Arrays.join([], '-')).toBe('')
})

test('Arrays.mapAccum', () => {
  expect(Arrays.mapAccum([100, -30, 50], 0, (balance, amount) => [balance + amount, balance + amount])).toEqual([120, [100, 70, 120]])
  expect(Arrays.mapAccum([], 'init', (state, x) => [state, x])).toEqual(['init', []])
})

test('Arrays.reduce / reduceRight', () => {
  expect(Arrays.reduce(iter(1, 2, 3), 0, (acc, x) => acc + x)).toBe(6)
  expect(Arrays.reduceRight(['a', 'b', 'c'], '', (acc, x) => acc + x)).toBe('cba')
  expect(Arrays.reduceRight(['a', 'b'], [] as Array<number>, (acc, _, index) => [...acc, index])).toEqual([1, 0])
})

test('Arrays.scan / scanRight', () => {
  const sum = (acc: number, x: number) => acc + x
  expect(Arrays.scan(iter(1, 2, 3, 4), 0, sum)).toEqual([0, 1, 3, 6, 10])
  expect(Arrays.scan([], 0, sum)).toEqual([0])
  expect(Arrays.scanRight([1, 2, 3, 4], 0, sum)).toEqual([10, 9, 7, 4, 0])
  expect(Arrays.scanRight([], 0, sum)).toEqual([0])
})

test('Arrays.get', () => {
  expect(Arrays.get(iter(1, 2, 3), 1)).toBe(2)
  expect(Arrays.get([1, 2, 3], 3)).toBeUndefined()
  expect(Arrays.get([1, 2, 3], -1)).toBeUndefined()
  expect(Arrays.get([1, 2, 3], 1.5)).toBeUndefined()
})

test('Arrays.first / firstNonEmpty / last / lastNonEmpty', () => {
  expect(Arrays.first(iter(1, 2, 3))).toBe(1)
  expect(Arrays.first([])).toBeUndefined()
  expect(Arrays.firstNonEmpty([1, 2, 3])).toBe(1)
  expect(Arrays.last(iter(1, 2, 3))).toBe(3)
  expect(Arrays.last([])).toBeUndefined()
  expect(Arrays.lastNonEmpty([1, 2, 3])).toBe(3)
})

test('Arrays.length / only', () => {
  expect(Arrays.length(iter(1, 2, 3))).toBe(3)
  expect(Arrays.length([])).toBe(0)
  expect(Arrays.only(iter('x'))).toBe('x')
  expect(() => Arrays.only([])).toThrow()
  expect(() => Arrays.only([1, 2])).toThrow()
})

test('Arrays.take / takeWhile', () => {
  expect(Arrays.take(iter(1, 2, 3, 4), 2)).toEqual([1, 2])
  expect(Arrays.take([1, 2], 5)).toEqual([1, 2])
  expect(Arrays.takeWhile([1, 2, 3, 1], (x) => x < 3)).toEqual([1, 2])
})

test('Arrays.rest / restWhile', () => {
  expect(Arrays.rest(iter(1, 2, 3, 4), 2)).toEqual([3, 4])
  expect(Arrays.rest([1, 2, 3])).toEqual([2, 3])
  expect(Arrays.restWhile([1, 2, 3, 1], (x) => x < 3)).toEqual([3, 1])
})

test('Arrays.group / groupBy / groupWith', () => {
  expect(Arrays.group(iter(1, 1, 2, 2, 2, 3, 1))).toEqual([[1, 1], [2, 2, 2], [3], [1]])
  expect(Arrays.group([])).toEqual([])

  const words = ['apple', 'avocado', 'banana', 'apricot']
  expect(Arrays.groupBy(words, (word) => word[0])).toEqual([['apple', 'avocado'], ['banana'], ['apricot']])
  expect(
    Arrays.groupBy(
      [1.0, 1.2, 3.0, 3.1],
      (n) => n,
      (a, b) => Math.abs(a - b) < 0.5
    )
  ).toEqual([
    [1.0, 1.2],
    [3.0, 3.1],
  ])

  const caseInsensitive = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()
  expect(Arrays.groupWith(['a', 'A', 'b', 'B', 'a'], caseInsensitive)).toEqual([['a', 'A'], ['b', 'B'], ['a']])
  // each element is compared against the first element of its group, not the previous element
  expect(Arrays.groupWith([1, 2, 3], (a, b) => Math.abs(a - b) <= 1)).toEqual([[1, 2], [3]])
})

test('Arrays guards', () => {
  expect(Arrays.isArray([1])).toBe(true)
  expect(Arrays.isArray(new Set([1]))).toBe(false)
  expect(Arrays.isEmpty([])).toBe(true)
  expect(Arrays.isEmpty([1])).toBe(false)
  expect(Arrays.isEmptyReadonly([] as const)).toBe(true)
  expect(Arrays.isNonEmpty([1])).toBe(true)
  expect(Arrays.isNonEmpty([])).toBe(false)
  expect(Arrays.isNonEmptyReadonly([1] as const)).toBe(true)
})

test('Arrays.equalitor / comparator', () => {
  const equals = Arrays.equalitor(byId)
  expect(equals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBe(true)
  expect(equals([{ id: 1 }], [{ id: 1 }, { id: 2 }])).toBe(false)

  const compare = Arrays.comparator((a: number, b: number) => a - b)
  expect(compare([1, 2], [1, 3])).toBeLessThan(0)
  expect(compare([1, 2], [1, 2, 0])).toBeLessThan(0) // prefix sorts first
  expect(compare([2], [1, 9])).toBeGreaterThan(0)
  expect(compare([1, 2], [1, 2])).toBe(0)
  expect([[2], [1, 2], [1]].sort(compare)).toEqual([[1], [1, 2], [2]])
})

test('Arrays.map', () => {
  expect(Arrays.map(iter(1, 2, 3), (x, index) => x * 10 + index)).toEqual([10, 21, 32])
  expect(Arrays.map([], (x) => x)).toEqual([])
})

test('Arrays.clear / filterIn', () => {
  const array = [1, 2, 3, 4, 5]
  Arrays.filterIn(array, (n) => n % 2 === 0)
  expect(array).toEqual([2, 4])

  Arrays.clear(array)
  expect(array).toEqual([])
})

test('Arrays.dedupe / dedupeBy / dedupeWith', () => {
  expect(Arrays.dedupe(iter(1, 2, 1, 3, 2))).toEqual([1, 2, 3])
  expect(Arrays.dedupe([null, undefined, 1])).toEqual([null, 1])
  expect(Arrays.dedupeBy([{ id: 1 }, { id: 2 }, { id: 1, extra: true }], (it) => it.id)).toEqual([{ id: 1 }, { id: 2 }])
  expect(
    Arrays.dedupeBy(
      ['a', 'A', 'b'],
      (x) => x,
      (a, b) => a.toLowerCase() === b.toLowerCase()
    )
  ).toEqual(['a', 'b'])
  expect(Arrays.dedupeWith([{ id: 1 }, { id: 2 }, { id: 1 }], byId)).toEqual([{ id: 1 }, { id: 2 }])
})
