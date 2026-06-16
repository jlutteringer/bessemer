import { NominalType } from '@bessemer/cornerstone/types'
import * as Objects from '@bessemer/cornerstone/object'
import * as Strings from '@bessemer/cornerstone/string'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('uuid-v4')
export type UuidV4 = NominalType<string, typeof Namespace>

export const parse = (value: string): Result<UuidV4, ErrorEvent> => {
  if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/.test(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `[${Namespace}]: Invalid UuidV4 format: [${value}]` }))
  }

  return Results.success(value.toLowerCase() as UuidV4)
}

export const from = (value: string): UuidV4 => {
  return ErrorEvents.unpackResult(parse(value))
}

export const Schema = ZodUtil.structuredTransform<UuidV4>(ZodUtil.string(), parse).meta({
  type: 'string',
  format: 'uuid',
  pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
})

export const generate = (): UuidV4 => {
  if (Objects.isNil(crypto.randomUUID)) {
    return `${randomHex(8)}-${randomHex(4)}-${randomHex(4)}-${randomHex(4)}-${randomHex(12)}` as UuidV4
  } else {
    return crypto.randomUUID() as UuidV4
  }
}

const randomHex = (characters: number) => {
  // Generates a random number between 0x0..0 and 0xF..F for the target number of characters
  const randomNum = Math.floor(Math.random() * (16 ** characters - 1))
  return Strings.padStart(randomNum.toString(16), characters, '0')
}
