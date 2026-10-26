import Zod from 'zod'
import { Ruleset, RulesetConfiguration, RulesetExtensionReference, RulesetReference } from '@simulacrum/ruleset/ruleset'

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

export type RulesetConfigurationSummary = {
  id: RulesetReference
  name: string
  extensions: Array<RulesetExtensionSummary>
}

export const RulesetConfigurationSummarySchema = Zod.object({
  id: RulesetReferenceSchema,
  name: Zod.string(),
  extensions: Zod.array(RulesetExtensionSummarySchema),
}) satisfies Zod.ZodType<RulesetConfigurationSummary>

export const toConfiguration = (summary: RulesetConfigurationSummary): RulesetConfiguration => ({
  id: summary.id,
  extensions: summary.extensions.map((it) => it.id),
})

export type RulesetSummary = RulesetConfigurationSummary & {
  hasRulebook: boolean
}

export const RulesetSummarySchema: Zod.ZodType<RulesetSummary> = RulesetConfigurationSummarySchema.extend({
  hasRulebook: Zod.boolean(),
})

export const RulesetSchema: Zod.ZodType<Ruleset> = Zod.custom<Ruleset>()

export const RulesetConfigurationSchema: Zod.ZodType<RulesetConfiguration> = Zod.object({
  id: RulesetReferenceSchema,
  extensions: Zod.array(RulesetExtensionReferenceSchema),
})
