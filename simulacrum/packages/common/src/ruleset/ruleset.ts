import Zod from 'zod'
import { Ruleset, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'

export type { Ruleset }

export const RulesetReferenceSchema: Zod.ZodType<RulesetReference, string> = Zod.string().transform((it) => it as RulesetReference)

export const RulesetExtensionReferenceSchema: Zod.ZodType<RulesetExtensionReference, string> = Zod.string().transform(
  (it) => it as RulesetExtensionReference
)

export type RulesetExtensionSummary = {
  id: RulesetExtensionReference
  name: string
}

export const RulesetExtensionSummarySchema: Zod.ZodType<RulesetExtensionSummary> = Zod.object({
  id: RulesetExtensionReferenceSchema,
  name: Zod.string(),
})

export type RulesetSummary = {
  id: RulesetReference
  name: string
  hasRulebook: boolean
  extensions: Array<RulesetExtensionSummary>
}

export const RulesetSummarySchema: Zod.ZodType<RulesetSummary> = Zod.object({
  id: RulesetReferenceSchema,
  name: Zod.string(),
  hasRulebook: Zod.boolean(),
  extensions: Zod.array(RulesetExtensionSummarySchema),
})

export const RulesetSchema: Zod.ZodType<Ruleset> = Zod.custom<Ruleset>()
