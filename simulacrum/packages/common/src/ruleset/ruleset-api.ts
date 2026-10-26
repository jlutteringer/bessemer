import Zod from 'zod'
import { Zotch } from '@bessemer/zotch'
import { Results } from '@bessemer/cornerstone'
import { ZotchErrorType } from '@bessemer/zotch/zotch-error'
import { RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'
import {
  Ruleset,
  RulesetExtensionReferenceSchema,
  RulesetReferenceSchema,
  RulesetSchema,
  RulesetSummary,
  RulesetSummarySchema,
} from '@simulacrum/common/ruleset/ruleset'
import { ApiContext, AuthorizationHeadersSchema, getAuthorizationHeaders, unwrapResult } from '@simulacrum/common/api/api'

export const RulesetApi = Zotch.api({
  listRulesets: {
    method: 'get',
    path: '/rulesets',
    response: Zod.array(RulesetSummarySchema),
    headers: AuthorizationHeadersSchema,
  },
  fetchRuleset: {
    method: 'get',
    path: '/rulesets/:rulesetId',
    params: { rulesetId: RulesetReferenceSchema },
    queries: { extensions: Zod.array(RulesetExtensionReferenceSchema).optional() },
    response: RulesetSchema,
    headers: AuthorizationHeadersSchema,
  },
})

const client = Zotch.client(RulesetApi)

export const listRulesets = async (context: ApiContext): Promise<Array<RulesetSummary>> => {
  const response = await client.listRulesets({
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  return unwrapResult(response)
}

export const fetchRuleset = async (
  rulesetId: RulesetReference,
  context: ApiContext,
  extensions?: Array<RulesetExtensionReference>
): Promise<Ruleset | null> => {
  const response = await client.fetchRuleset({
    params: { rulesetId },
    queries: { extensions },
    headers: getAuthorizationHeaders(context),
    baseUrl: context.baseUrl,
  })

  if (Results.isFailure(response) && response.value.type === ZotchErrorType.Unstructured && response.value.response.status === 404) {
    return null
  }

  return unwrapResult(response)
}
