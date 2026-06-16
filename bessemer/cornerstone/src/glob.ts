import { minimatch } from 'minimatch'
import Zod from 'zod'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'
import { NominalType } from '@bessemer/cornerstone/types'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'

export const Namespace = ResourceKeys.createNamespace('glob')
export type GlobPattern = NominalType<string, typeof Namespace>

export const parseString = (value: string): Result<GlobPattern, ErrorEvent> => {
  // Check for valid glob characters and patterns
  const validGlobPattern = /^[a-zA-Z0-9\-_.\/\\*?\[\]{}!,|]+$/

  // Basic validation - contains valid characters
  if (!validGlobPattern.test(value)) {
    return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `GlobPattern contains invalid characters.` }))
  }

  // Check for balanced brackets
  const brackets = value.match(/[\[\]]/g)
  if (brackets) {
    const openBrackets = (value.match(/\[/g) || []).length
    const closeBrackets = (value.match(/]/g) || []).length
    if (openBrackets !== closeBrackets) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `GlobPattern has unbalanced brackets.` }))
    }
  }

  // Check for balanced braces
  const braces = value.match(/[{}]/g)
  if (braces) {
    const openBraces = (value.match(/\{/g) || []).length
    const closeBraces = (value.match(/}/g) || []).length
    if (openBraces !== closeBraces) {
      return Results.failure(ErrorEvents.invalidValue(value, { namespace: Namespace, message: `GlobPattern has unbalanced braces.` }))
    }
  }

  return Results.success(value as GlobPattern)
}

export const from = (value: string): GlobPattern => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform(Zod.string(), parseString).meta({
  type: 'string',
  format: Namespace,
  pattern: '^[a-zA-Z0-9\\-_.\\/\\\\*?\\[\\]{}!,|]+$',
})

export const match = (str: string, pattern: GlobPattern): boolean => {
  return minimatch(str, pattern)
}

export const anyMatch = (str: string, patterns: Array<GlobPattern>): boolean => {
  return patterns.some((it) => match(str, it))
}
