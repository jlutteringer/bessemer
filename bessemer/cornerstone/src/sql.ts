import * as Sql from '@bessemer/cornerstone/sql/sql'
import { BasicType, Dictionary } from '@bessemer/cornerstone/types'
import { WeakBrand } from '@bessemer/cornerstone/brand'

export {
  /**
   * @since 2.0.0
   */
  Sql,
}

export type SqlFragment = string & WeakBrand<'SqlFragment'>
export type SqlParameterMap = Dictionary<BasicType | Array<BasicType>>
