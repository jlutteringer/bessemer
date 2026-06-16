import { JsonValue } from 'type-fest'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'

export const parse = (data: string): Result<JsonValue, SyntaxError> => {
  return Results.tryValue(() => JSON.parse(data) as JsonValue) as Result<JsonValue, SyntaxError>
}
