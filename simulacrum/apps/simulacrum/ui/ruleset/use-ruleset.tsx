'use client'

import { createContext, useContext } from 'react'
import { Assertions } from '@bessemer/cornerstone'
import { Ruleset } from '@simulacrum/engine/ruleset'

export const RulesetContext = createContext<Ruleset | null>(null)

export const useRuleset = (): Ruleset => {
  const ruleset = useContext(RulesetContext)
  Assertions.assertPresent(ruleset)
  return ruleset
}
