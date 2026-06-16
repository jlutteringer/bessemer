import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('hex-code')
export type HexCode = NominalType<string, typeof Namespace>

export const parseString = (value: string): Result<HexCode, ErrorEvent> => {
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, { namespace: Namespace, message: `HexCode must be a valid hex code (# followed by 3 or 6 characters).` })
    )
  }

  let normalizedValue = value.toUpperCase()

  if (normalizedValue.length === 4) {
    const shortHex = normalizedValue.slice(1) // Remove the #
    normalizedValue = `#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`
  }

  return Results.success(normalizedValue as HexCode)
}

export const from = (value: string): HexCode => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform<HexCode>(ZodUtil.string(), parseString).meta({
  type: 'string',
  format: Namespace,
  pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$',
})
