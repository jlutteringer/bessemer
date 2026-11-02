import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import { Brand } from '@bessemer/cornerstone/brand'
import Zod from 'zod'

export const Namespace = ResourceKeys.createNamespace('error-type')
export type ErrorType = string & Brand<'ErrorType'>
export const Schema = Zod.string().transform((it) => it as ErrorType)

export const Unhandled: ErrorType = 'unhandled' as ErrorType
export const Unauthorized: ErrorType = 'unauthorized' as ErrorType
export const Forbidden: ErrorType = 'forbidden' as ErrorType
export const Required: ErrorType = 'required' as ErrorType
export const BadRequest: ErrorType = 'bad-request' as ErrorType
export const InvalidValue: ErrorType = 'invalid-value' as ErrorType
