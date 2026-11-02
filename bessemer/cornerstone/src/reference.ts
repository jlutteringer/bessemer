import { Brand } from '@bessemer/cornerstone/brand'

export type Reference<T extends string> = string & Brand<'Reference', T>
