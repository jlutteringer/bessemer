import { Objects } from '@bessemer/cornerstone'

test('Objects.mergeAll', () => {
  expect(
    Objects.deepMergeAll([
      { one: 'First Value', two: 'Second Value', three: 'First Value' },
      { one: 'Update Value' },
      { one: 'Update Value 2', two: null, four: 'Fourth Value' },
      { three: undefined },
    ])
  ).toEqual({
    one: 'Update Value 2',
    two: null,
    three: 'First Value',
    four: 'Fourth Value',
  })
})

test('Objects.mapValues', () => {
  expect(
    Objects.mapValues(
      {
        fred: { user: 'fred', age: 40 },
        pebbles: { user: 'pebbles', age: 1 },
      },
      (value, key) => `${String(key)}:${value.age}`
    )
  ).toEqual({ fred: 'fred:40', pebbles: 'pebbles:1' })
})

test('Objects.cloneDeep', () => {
  class Point {
    constructor(readonly x: number) {}
  }
  const point = new Point(1)
  const original = {
    nested: { list: [1, { deep: true }] },
    date: new Date(0),
    map: new Map([['key', { value: 1 }]]),
    set: new Set([1, 2]),
    point,
    fn: () => 1,
  }

  const clone = Objects.cloneDeep(original)
  expect(clone).toEqual(original)
  expect(clone.nested).not.toBe(original.nested)
  expect(clone.nested.list[1]).not.toBe(original.nested.list[1])
  expect(clone.date).not.toBe(original.date)
  expect(clone.map.get('key')).not.toBe(original.map.get('key'))
  expect(clone.set).not.toBe(original.set)
  expect(clone.point).toBe(point)
  expect(clone.fn).toBe(original.fn)
})

test('Objects.deepMerge', () => {
  const first = { nested: { a: 1, b: 2 }, list: [{ name: 'one', value: 1 }, { name: 'two' }], kept: 'kept' }
  const second = { nested: { b: 3, c: 4 }, list: [{ value: 10 }], kept: undefined }

  const merged = Objects.deepMerge(first, second)
  expect(merged).toEqual({
    nested: { a: 1, b: 3, c: 4 },
    list: [{ name: 'one', value: 10 }, { name: 'two' }],
    kept: 'kept',
  })

  // Inputs are left untouched and never shared with the result
  expect(first.nested).toEqual({ a: 1, b: 2 })
  expect(merged.nested).not.toBe(first.nested)
  expect(merged.list).not.toBe(first.list)
})

test('Objects.deepMerge assigns non-plain values by reference', () => {
  class Point {
    constructor(readonly x: number) {}
  }
  const point = new Point(1)
  const fn = () => 1

  const merged = Objects.deepMerge({ point: { x: 0, y: 0 }, fn: null as unknown }, { point, fn })
  expect(merged.point).toBe(point)
  expect(merged.fn).toBe(fn)
})

test('Objects.deepMergeInto', () => {
  const target = { nested: { a: 1 } }
  Objects.deepMergeInto(target, { nested: { b: 2 } })
  expect(target).toEqual({ nested: { a: 1, b: 2 } })
})

test('Objects.deepMergeWith', () => {
  const original = { count: 1, nested: { count: 2, label: 'label' } }
  const merged = Objects.deepMergeWith(original, { count: 10, nested: { count: 20 } }, (targetValue, sourceValue) => {
    return typeof targetValue === 'number' ? targetValue + sourceValue : undefined
  })

  expect(merged).toEqual({ count: 11, nested: { count: 22, label: 'label' } })
  expect(original).toEqual({ count: 1, nested: { count: 2, label: 'label' } })
})
