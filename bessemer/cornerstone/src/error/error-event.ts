import { Dictionary, Throwable } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'
import Zod from 'zod'
import * as Lazy from '@bessemer/cornerstone/lazy'
import { LazyValue } from '@bessemer/cornerstone/lazy'
import * as Errors from '@bessemer/cornerstone/error/error'
import * as Promises from '@bessemer/cornerstone/promise'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ErrorCauses from '@bessemer/cornerstone/error/error-cause'
import { ErrorCause, ErrorCauseAugment, ErrorCauseBuilder } from '@bessemer/cornerstone/error/error-cause'
import * as Assertions from '@bessemer/cornerstone/assertion'
import { MergeExclusive } from 'type-fest'
import * as Arrays from '@bessemer/cornerstone/array'

export const Namespace = ResourceKeys.createNamespace('error-event')

export const Schema = Zod.object({
  _type: Namespace,
  message: Zod.string(),
  causes: Zod.array(ErrorCauses.Schema),
  context: Zod.record(Zod.string(), Zod.unknown()),
})

export type ErrorEvent = {
  _type: typeof Namespace
  message: string
  causes: Array<ErrorCause>
  context: Dictionary<unknown>
}

type ErrorEventCommonBuilder = {
  message: string
  context?: Dictionary<unknown>
}

type ErrorEventFullBuilder = ErrorEventCommonBuilder & {
  causes: Array<ErrorCauseBuilder>
}
type ErrorEventSingletonBuilder = ErrorEventCommonBuilder & ErrorCauseBuilder
export type ErrorEventBuilder = MergeExclusive<ErrorEventFullBuilder, ErrorEventSingletonBuilder>

// An exception type that contains an ErrorEvent
export class ErrorEventException extends Error {
  readonly errorEvent: ErrorEvent

  constructor(errorEvent: ErrorEvent, cause?: unknown) {
    super(errorEvent.message ?? '', { cause })
    this.name = this.constructor.name
    this.errorEvent = errorEvent
  }
}

export const from = (builder: ErrorEventBuilder): ErrorEvent => {
  if (Objects.isPresent(builder.code)) {
    const code = builder.code
    return {
      _type: Namespace,
      causes: [ErrorCauses.from({ code, ...builder })],
      message: builder.message,
      context: builder.context ?? {},
    }
  } else {
    Assertions.assertPresent(builder.causes)
    Assertions.assert(!Arrays.isEmpty(builder.causes), () => 'ErrorEvent - Unable to construct ErrorEvent with empty causes array.')

    return {
      _type: Namespace,
      causes: builder.causes.map(ErrorCauses.from),
      message: builder.message,
      context: builder.context ?? {},
    }
  }
}

export const fromThrowable = (throwable: Throwable): ErrorEvent => {
  if (isErrorEvent(throwable)) {
    return throwable
  }

  if (!Errors.isError(throwable)) {
    return unhandled()
  }

  const errorEventException = Errors.findInCausalChain(throwable, isErrorEventException) as ErrorEventException | undefined
  if (Objects.isNil(errorEventException)) {
    return unhandled()
  }

  return errorEventException.errorEvent
}

export const isErrorEvent = (value: unknown): value is ErrorEvent => {
  if (!Objects.isObject(value)) {
    return false
  }

  const errorEvent = value as ErrorEvent
  return errorEvent._type === Namespace
}

export const isErrorEventException = (value: unknown): value is ErrorEventException => {
  return value instanceof ErrorEventException
}

export function withPropagation<ReturnType>(runnable: () => ReturnType, attributes: LazyValue<Dictionary<unknown>>): ReturnType
export function withPropagation<ReturnType>(runnable: () => Promise<ReturnType>, attributes: LazyValue<Dictionary<unknown>>): Promise<ReturnType>
export function withPropagation<ReturnType>(
  runnable: () => ReturnType | Promise<ReturnType>,
  attributes: LazyValue<Dictionary<unknown>>
): ReturnType | Promise<ReturnType> {
  try {
    let result = runnable()
    if (Promises.isPromise(result)) {
      return result.then((it) => it).catch((it) => propagate(it, Lazy.evaluate(attributes)))
    } else {
      return result
    }
  } catch (throwable: Throwable) {
    throw propagate(throwable, Lazy.evaluate(attributes))
  }
}

export const propagate = (throwable: Throwable, context: Dictionary<unknown>): never => {
  if (isErrorEventException(throwable)) {
    // We just mutate the existing error event to avoid nested exceptions
    const errorEvent = throwable.errorEvent
    errorEvent.context = { ...errorEvent.context, ...context }
    throw throwable
  } else {
    const errorEvent = fromThrowable(throwable)
    const contextualizedEvent = from({ ...errorEvent, context: { ...errorEvent.context, ...context } })
    throw new ErrorEventException(contextualizedEvent, throwable)
  }
}

export type ErrorEventAugment = ErrorCauseAugment & {
  context?: Dictionary<unknown>
}

export const unhandled = (builder?: ErrorEventAugment): ErrorEvent => from(Objects.deepMerge(ErrorCauses.unhandled(builder), builder))

export const required = (builder?: ErrorEventAugment): ErrorEvent => from(Objects.deepMerge(ErrorCauses.required(builder), builder))

export const unauthorized = (builder?: ErrorEventAugment): ErrorEvent => from(Objects.deepMerge(ErrorCauses.unauthorized(builder), builder))

export const forbidden = (builder?: ErrorEventAugment): ErrorEvent => from(Objects.deepMerge(ErrorCauses.forbidden(builder), builder))

export const badRequest = (builder?: ErrorEventAugment): ErrorEvent => from(Objects.deepMerge(ErrorCauses.badRequest(builder), builder))

export const invalidValue = (value: unknown, builder?: ErrorEventAugment): ErrorEvent =>
  from(Objects.deepMerge(ErrorCauses.invalidValue(value, builder), builder))

export function assertPresent<T>(value: T, builder: LazyValue<ErrorEventAugment | undefined> = () => undefined): asserts value is NonNullable<T> {
  if (Objects.isNil(value)) {
    throw new ErrorEventException(required(Lazy.evaluate(builder)))
  }
}

export function assertAuthorized(value: boolean, builder: LazyValue<ErrorEventAugment | undefined> = () => undefined): asserts value is true {
  if (!value) {
    throw new ErrorEventException(unauthorized(Lazy.evaluate(builder)))
  }
}

export function assertPermitted(value: boolean, builder: LazyValue<ErrorEventAugment | undefined> = () => undefined): asserts value is true {
  if (!value) {
    throw new ErrorEventException(forbidden(Lazy.evaluate(builder)))
  }
}

export function assertValid(value: boolean, builder: LazyValue<ErrorEventAugment | undefined> = () => undefined): asserts value is true {
  if (!value) {
    throw new ErrorEventException(badRequest(Lazy.evaluate(builder)))
  }
}

export function assert(value: boolean, builder: LazyValue<ErrorEventBuilder>): asserts value is true {
  if (!value) {
    throw new ErrorEventException(from(Lazy.evaluate(builder)))
  }
}

export const unpackResult = <T>(result: Result<T, ErrorEvent>): T => {
  if (Results.isFailure(result)) {
    throw new ErrorEventException(result.value)
  }

  return result
}
