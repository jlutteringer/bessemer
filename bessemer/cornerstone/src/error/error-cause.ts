import Zod, { ZodType } from 'zod'
import { ResourceNamespace } from '@bessemer/cornerstone/resource-key'
import * as ErrorTypes from '@bessemer/cornerstone/error/error-type'
import { Dictionary } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'
import { RecordAttribute } from '@bessemer/cornerstone/object'
import * as ErrorCodes from '@bessemer/cornerstone/error/error-code'
import { ErrorCode, ErrorCodeLike } from '@bessemer/cornerstone/error/error-code'

export type ErrorAttribute<Type = unknown> = RecordAttribute<Type, 'ErrorAttribute'>
export const ValueAttribute: ErrorAttribute = 'value'
export const HttpStatusCodeAttribute: ErrorAttribute<number> = 'httpStatusCode'

const BaseErrorCauseSchema = Zod.object({
  code: ErrorCodes.Schema,
  message: Zod.string(),
  attributes: Zod.record(Zod.string(), Zod.unknown()),
})

export type ErrorCause = {
  code: ErrorCode
  message: string
  attributes: Dictionary<unknown>
  causes: Array<ErrorCause>
}

export const Schema: ZodType<ErrorCause> = BaseErrorCauseSchema.extend({
  causes: Zod.lazy(() => Zod.array(Schema)),
})

export type ErrorCauseBuilder = {
  code: ErrorCodeLike
  message: string
  attributes?: Dictionary<unknown>
  causes?: Array<ErrorCauseBuilder>
}

export type ErrorCauseAugment = {
  namespace?: ResourceNamespace
  message?: string
  attributes?: Dictionary<unknown>
  causes?: Array<ErrorCauseBuilder>
}

export const from = (builder: ErrorCauseBuilder): ErrorCause => {
  const cause: ErrorCause = {
    code: ErrorCodes.from(builder.code),
    message: builder.message,
    attributes: builder.attributes ?? {},
    causes: builder.causes?.map(from) ?? [],
  }

  return cause
}

export const unhandled = (builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.Unhandled, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'An Unhandled Error has occurred.',
        attributes: { [HttpStatusCodeAttribute]: 500 },
      },
      builder
    ),
  })

export const required = (builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.Required, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'The resource is required.',
        attributes: { [HttpStatusCodeAttribute]: 404 },
      },
      builder
    ),
  })

export const unauthorized = (builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.Unauthorized, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'The requested Resource requires authentication.',
        attributes: { [HttpStatusCodeAttribute]: 401 },
      },
      builder
    ),
  })

export const forbidden = (builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.Forbidden, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'The requested Resource requires additional permissions to access.',
        attributes: { [HttpStatusCodeAttribute]: 403 },
      },
      builder
    ),
  })

export const badRequest = (builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.BadRequest, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'The format is invalid and cannot be processed.',
        attributes: { [HttpStatusCodeAttribute]: 400 },
      },
      builder
    ),
  })

export const invalidValue = (value: unknown, builder?: ErrorCauseAugment): ErrorCause =>
  from({
    code: ErrorCodes.from({ type: ErrorTypes.InvalidValue, namespace: builder?.namespace }),
    ...Objects.deepMerge(
      {
        message: 'The format is invalid and cannot be processed.',
        attributes: { [ValueAttribute]: value },
      },
      builder
    ),
  })
