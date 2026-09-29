import { NominalType } from '@bessemer/cornerstone/types'

export type Reference<T extends string> = NominalType<string, ['Reference', T]>
