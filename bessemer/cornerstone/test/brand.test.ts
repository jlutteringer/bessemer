import { expectTypeOf } from 'expect-type'
import { Brand, WeakBrand } from '@bessemer/cornerstone/brand'
import { ObjectPath } from '@bessemer/cornerstone/object/object-path'
import { TypePath } from '@bessemer/cornerstone/object/type-path'

type Int = number & Brand<'Int'>
type Positive = number & Brand<'Positive'>
type PositiveInt = Int & Positive

describe('Brands types', () => {
  test('should keep distinct brands incompatible', () => {
    expectTypeOf<Int>().not.toMatchTypeOf<Positive>()
    expectTypeOf<number>().not.toMatchTypeOf<Int>()
    expectTypeOf<Int>().toMatchTypeOf<number>()
  })

  test('should layer brands', () => {
    expectTypeOf<Int & Brand<'Positive'>>().toMatchTypeOf<Int>()
    expectTypeOf<Int & Brand<'Positive'>>().toMatchTypeOf<Positive>()
    expectTypeOf<Brand.Unbranded<PositiveInt>>().toEqualTypeOf<number>()
  })

  test('should carry phantom data', () => {
    type Reference<T extends string> = string & Brand<'Reference', T>
    expectTypeOf<Reference<'a'>>().not.toMatchTypeOf<Reference<'b'>>()
    expectTypeOf<Reference<'a'>>().toMatchTypeOf<Reference<'a' | 'b'>>()
  })

  test('should allow unbranded values into weak brands', () => {
    type Name = string & WeakBrand<'Name'>
    type Other = string & WeakBrand<'Other'>
    expectTypeOf<string>().toMatchTypeOf<Name>()
    expectTypeOf<Name>().not.toMatchTypeOf<Other>()
  })
})

describe('Brands combining', () => {
  test('should treat ObjectPath as a subtype of TypePath', () => {
    expectTypeOf<ObjectPath>().toMatchTypeOf<TypePath>()
    expectTypeOf<TypePath>().not.toMatchTypeOf<ObjectPath>()
  })
})
