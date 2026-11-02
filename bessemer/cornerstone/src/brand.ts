import { UnionToIntersection } from 'type-fest'

export const BrandTypeId: unique symbol = Symbol.for('@bessemer/cornerstone/brand')
export type BrandTypeId = typeof BrandTypeId

/**
 * A phantom marker that distinguishes a type nominally. Brands are keyed, so multiple brands
 * can be layered on the same value (ex. `number & Brand<'Int'> & Brand<'Positive'>`).
 * The optional `Data` parameter carries phantom type information along with the key.
 *
 * **Example**
 *
 * ```ts
 * import { Brand } from "@bessemer/cornerstone/brand"
 *
 * type UserId = number & Brand<'UserId'>
 * type Reference<T extends string> = string & Brand<'Reference', T>
 * ```
 *
 * @category models
 */
export interface Brand<in out Key extends string | symbol, Data = Key> {
  readonly [BrandTypeId]: { readonly [K in Key]: Data }
}

/**
 * A brand which the unbranded type remains assignable to. Two weak brands with different keys
 * are still incompatible with each other.
 *
 * **Example**
 *
 * ```ts
 * import { WeakBrand } from "@bessemer/cornerstone/brand"
 *
 * type CacheName = string & WeakBrand<'CacheName'>
 * const name: CacheName = 'users'
 * ```
 *
 * @category models
 */
export interface WeakBrand<in out Key extends string | symbol, Data = Key> {
  readonly [BrandTypeId]?: { readonly [K in Key]: Data }
}

export declare namespace Brand {
  /**
   * Extracts the individual brands of a branded type as an intersection of `Brand`s.
   */
  export type Brands<P> = P extends Brand<any, any>
    ? UnionToIntersection<
        {
          [K in keyof P[BrandTypeId]]: K extends string | symbol ? Brand<K, P[BrandTypeId][K]> : never
        }[keyof P[BrandTypeId]]
      >
    : never

  /**
   * Extracts the keys of the brands on a branded type.
   */
  export type Keys<P> = P extends Brand<any, any> ? keyof P[BrandTypeId] : never

  /**
   * Strips all brands from a branded type, leaving the underlying type.
   */
  export type Unbranded<P extends Brand<any, any>> = P extends infer Q & Brands<P> ? Q : P
}

/**
 * Removes the brands from a value at the type level. This is the identity function at runtime.
 *
 * @category utils
 */
export const unbranded = <A extends Brand<any, any>>(value: A): Brand.Unbranded<A> => value as unknown as Brand.Unbranded<A>
