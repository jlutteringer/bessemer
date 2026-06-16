import Zod from 'zod'
import * as ResourceKeys from '@bessemer/cornerstone/resource-key'
import * as ErrorEvents from '@bessemer/cornerstone/error/error-event'
import { ErrorEvent } from '@bessemer/cornerstone/error/error-event'
import * as ZodUtil from '@bessemer/cornerstone/zod-util'
import { DomainName } from '@bessemer/cornerstone/net/domain-name'
import * as DomainNames from '@bessemer/cornerstone/net/domain-name'
import { IpV4Address } from '@bessemer/cornerstone/net/ipv4-address'
import * as IpV4Addresses from '@bessemer/cornerstone/net/ipv4-address'
import { IpV6Address } from '@bessemer/cornerstone/net/ipv6-address'
import * as IpV6Addresses from '@bessemer/cornerstone/net/ipv6-address'
import * as Strings from '@bessemer/cornerstone/string'
import * as Results from '@bessemer/cornerstone/result'
import { Result } from '@bessemer/cornerstone/result'

export const Namespace = ResourceKeys.createNamespace('uri-host-name')
export type UriHostName = DomainName | IpV4Address | `[${IpV6Address}]`

export const parseString = (value: string): Result<UriHostName, ErrorEvent> => {
  if (value.startsWith('[') && value.endsWith(']')) {
    const ipV6Address = IpV6Addresses.parseString(Strings.removeEnd(Strings.removeStart(value, '['), ']'))
    if (Results.isSuccess(ipV6Address)) {
      return Results.success(`[${ipV6Address}]` as UriHostName)
    }
  }

  const domainName = DomainNames.parseString(value)
  if (Results.isSuccess(domainName)) {
    return domainName
  }
  const ipV4Address = IpV4Addresses.parseString(value)
  if (Results.isSuccess(ipV4Address)) {
    return ipV4Address
  }

  return Results.failure(
    ErrorEvents.invalidValue(value, {
      namespace: Namespace,
      message: `[${Namespace}]: Invalid characters for UriHostName in string: [${value}]`,
    })
  )
}

export const from = (value: string): UriHostName => {
  return ErrorEvents.unpackResult(parseString(value))
}

export const Schema = ZodUtil.structuredTransform(Zod.string(), parseString)
