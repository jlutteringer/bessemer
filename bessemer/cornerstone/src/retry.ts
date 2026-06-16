import * as Durations from '@bessemer/cornerstone/temporal/duration'
import { Duration } from '@bessemer/cornerstone/temporal/duration'
import * as Results from '@bessemer/cornerstone/result'
import { AsyncResult, Result } from '@bessemer/cornerstone/result'
import { PartialDeep } from 'type-fest'
import * as Objects from '@bessemer/cornerstone/object'
import * as Async from '@bessemer/cornerstone/async'
import * as Maths from '@bessemer/cornerstone/math'
import * as Assertions from '@bessemer/cornerstone/assertion'

export type RetryProps = {
  attempts: number
  delay: Duration
}

export type RetryOptions = PartialDeep<RetryProps>

export const None: RetryProps = {
  attempts: 0,
  delay: Durations.Zero,
}

export const DefaultRetryProps: RetryProps = {
  attempts: 3,
  delay: Durations.fromMilliseconds(500),
}

export type RetryState = {
  attempt: number
  props: RetryProps
}

export const initialize = (initialOptions?: RetryOptions): RetryState => {
  const props = Objects.deepMerge(DefaultRetryProps, initialOptions)
  Assertions.assert(props.attempts >= 0, () => 'usingRetry attempts must be >= 0')

  return {
    attempt: 0,
    props,
  }
}

export const retry = async (state: RetryState): Promise<RetryState | undefined> => {
  if (state.attempt >= state.props.attempts - 1) {
    return undefined
  }

  const delayMs = Durations.toMilliseconds(state.props.delay)
  const maxJitterMs = delayMs * 0.3 // We calculate max jitter as 30% of the delay
  await Async.sleep(Durations.fromMilliseconds(delayMs + Maths.random(0, maxJitterMs)))

  return {
    props: state.props,
    attempt: state.attempt + 1,
  }
}

export const usingRetry = async <T>(runnable: () => Promise<Result<T>>, initialOptions?: RetryOptions): AsyncResult<T> => {
  let retryState: RetryState | undefined = initialize(initialOptions)
  let previousResult: Result<T> = Results.failure()

  do {
    // JOHN Should this be a try/catch? it was causing debugging problems
    const result = await runnable()
    previousResult = result

    if (Results.isSuccess(result)) {
      return result
    }

    retryState = await retry(retryState)
  } while (!Objects.isUndefined(retryState))

  return previousResult
}
