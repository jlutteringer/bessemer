import { Dictionary } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'
import * as Strings from '@bessemer/cornerstone/string'

export type FetchRequest = NonNullable<Parameters<typeof fetch>[1]>
export type FetchResponse = Awaited<ReturnType<typeof fetch>>
export type FetchPayload = { url: string } & FetchRequest
export type FetchFunction = (url: string, request: FetchRequest | undefined) => Promise<FetchResponse>

// The RequestInit options that are plain values and can be copied into a DTO as-is
type SerializableRequestKey =
  | 'method'
  | 'mode'
  | 'credentials'
  | 'cache'
  | 'redirect'
  | 'referrer'
  | 'referrerPolicy'
  | 'integrity'
  | 'keepalive'
  | 'priority'

const SerializableRequestKeys: Array<SerializableRequestKey> = [
  'method',
  'mode',
  'credentials',
  'cache',
  'redirect',
  'referrer',
  'referrerPolicy',
  'integrity',
  'keepalive',
  'priority',
]

/**
 * A JSON-serializable snapshot of a fetch request. Headers are flattened into a dictionary and the body into a
 * string. `signal` and `window` are omitted because they have no serializable form.
 */
export type FetchRequestDto = {
  url: string
  headers?: Dictionary<string>
  body?: string
} & Pick<FetchRequest, SerializableRequestKey>

/**
 * A JSON-serializable snapshot of a fetch response. The body is not included: it is a one-shot stream that can
 * only be read asynchronously, and it has usually been consumed by the time a response is serialized.
 */
export type FetchResponseDto = {
  headers: Dictionary<string>
} & Pick<FetchResponse, 'url' | 'status' | 'statusText' | 'ok' | 'redirected' | 'type'>

export const serializeRequest = (request: FetchPayload): FetchRequestDto => {
  const dto: FetchRequestDto = { url: request.url }

  for (const key of SerializableRequestKeys) {
    if (Objects.isPresent(request[key])) {
      ;(dto as Record<string, unknown>)[key] = request[key]
    }
  }

  if (Objects.isPresent(request.headers)) {
    const headers = serializeHeaders(request.headers)
    if (!Objects.isEmpty(headers)) {
      dto.headers = headers
    }
  }

  if (Objects.isPresent(request.body)) {
    dto.body = serializeBody(request.body)
  }

  return dto
}

export const serializeResponse = (response: FetchResponse): FetchResponseDto => {
  return {
    url: response.url,
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
    redirected: response.redirected,
    type: response.type,
    headers: serializeHeaders(response.headers),
  }
}

// Strings and URLSearchParams have a faithful text form. Other body types (Blob, FormData, ArrayBuffer, streams,
// etc.) either can't be read synchronously or aren't text, so they are recorded as a placeholder like "[object Blob]".
const serializeBody = (body: BodyInit): string => {
  if (Strings.isString(body)) {
    return body
  }

  if (body instanceof URLSearchParams) {
    return body.toString()
  }

  return Object.prototype.toString.call(body)
}

// Flattens any HeadersInit into a plain dictionary. Header names are lower-cased and repeated headers are joined
// with ", ", per the Headers spec.
const serializeHeaders = (headers: HeadersInit): Dictionary<string> => {
  const result: Dictionary<string> = {}
  new Headers(headers).forEach((value, key) => {
    result[key] = value
  })
  return result
}
