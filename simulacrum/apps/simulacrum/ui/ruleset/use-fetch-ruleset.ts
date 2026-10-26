'use client'

import { useQuery } from '@tanstack/react-query'
import { Objects } from '@bessemer/cornerstone'
import { RulesetConfiguration } from '@simulacrum/common/engine/ruleset'
import { getClientApiContext } from '@simulacrum/ui/api/api'
import { RulesetApi } from '@simulacrum/common'

export const useFetchRuleset = (configuration: RulesetConfiguration | null) => {
  return useQuery({
    queryKey: ['ruleset', configuration?.id, configuration?.extensions],
    queryFn: () => RulesetApi.fetchRuleset(configuration!.id, getClientApiContext(), configuration!.extensions),
    enabled: Objects.isPresent(configuration),
    staleTime: Infinity,
  })
}
