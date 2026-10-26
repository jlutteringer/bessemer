import { Dnd4e } from '@simulacrum/ruleset-dnd4e'
import { Dnd5e } from '@simulacrum/ruleset-dnd5e'
import { ForgeOfTheArtificer } from '@simulacrum/ruleset-dnd5e/eberron-forge-of-the-artificer'
import { KhydrianDrift } from '@simulacrum/ruleset-khydrian-drift'
import { Pf2e } from '@simulacrum/ruleset-pf2e'
import { Ruleset, RulesetExtension } from '@simulacrum/ruleset/ruleset'

export namespace RulesetRegistry {
  export const rulesets: Array<Ruleset> = [Dnd5e, Dnd4e, Pf2e, KhydrianDrift]
  export const extensions: Array<RulesetExtension> = [ForgeOfTheArtificer]
}
