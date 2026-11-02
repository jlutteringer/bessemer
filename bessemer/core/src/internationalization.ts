// TODO im gonna hate it but I should probably work on internationalization next...
// TODO and then probably login...
import { WeakBrand } from '@bessemer/cornerstone/brand'
import { TagType } from '@bessemer/cornerstone/tag'

export type InternationalizationOptions = {}

export type LocaleString = string & WeakBrand<'LocaleString'>
export const LocaleTag: TagType<LocaleString> = 'Locale'
