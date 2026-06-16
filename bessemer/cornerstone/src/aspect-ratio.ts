import * as Maths from '@bessemer/cornerstone/math'
import { NominalType } from '@bessemer/cornerstone/types'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('aspect-ratio')
export type AspectRatio = NominalType<string, typeof Namespace>

export const parseString = (value: string): Result<AspectRatio, ErrorEvent> => {
  if (!/^[1-9]\d*:[1-9]\d*$/.test(value)) {
    return Results.failure(
      ErrorEvents.invalidValue(value, { namespace: Namespace, message: `Aspect Ratio must be in the format 'width:height' (e.g., '16:9', '4:3').` })
    )
  }

  return Results.success(value as AspectRatio)
}

export const from = (value: string): AspectRatio => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform<AspectRatio>(ZodUtil.string(), parseString).meta({
  type: 'string',
  format: Namespace,
  pattern: '^[1-9]\\d*:[1-9]\\d*$',
})

export const fromDimensions = (width: number, height: number): AspectRatio => {
  const factor = Maths.greatestCommonFactor(width, height)
  const ratioWidth = width / factor
  const ratioHeight = height / factor
  return `${ratioWidth}:${ratioHeight}` as AspectRatio
}

export const numericValue = (aspectRatio: AspectRatio): number => {
  const [width, height] = aspectRatio.split(':').map(Number)
  return width! / height!
}

export const calculateHeight = (width: number, aspectRatio: AspectRatio): number => {
  const ratio = numericValue(aspectRatio)
  return width / ratio
}

export const calculateWidth = (height: number, aspectRatio: AspectRatio): number => {
  const ratio = numericValue(aspectRatio)
  return height * ratio
}
