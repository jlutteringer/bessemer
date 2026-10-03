import { Objects } from '@bessemer/cornerstone'
import { Effect, EffectSourceType } from '@simulacrum/engine/effect'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { TraitReference } from '@simulacrum/engine/trait'
import { CharacterChoice, CharacterOptionType } from '@simulacrum/engine/character/character-option'
import { AbilityReference } from '@simulacrum/engine/ability'
import { Abilities, Effects, Loadout, ProgressionTables, Traits } from '@simulacrum/engine'
import { Ruleset } from '@simulacrum/engine/ruleset'

/**
 * The effects the character has at each level up to `level`: the ruleset's, those of each trait it has at that level, and a GainAbility
 * effect for each ability selected for its choices. `traits` already includes every trait the character was granted outright, so their
 * effects aren't expanded again here.
 */
export const buildEffectsTable = (
  level: number,
  traits: ProgressionTable<TraitReference>,
  choices: ProgressionTable<CharacterChoice>,
  ruleset: Ruleset
): ProgressionTable<Effect> => {
  const rulesetEffects = ProgressionTables.capAtLevel(ruleset.progressionTable, level)

  return ProgressionTables.mapRows(rulesetEffects, (effects, rowLevel) => {
    const levelTraits = (traits[rowLevel] ?? []).map((it) => Traits.getTrait(it, ruleset))
    const selectedAbilities = (choices[rowLevel] ?? []).flatMap((choice) => {
      if (choice.option.type !== CharacterOptionType.SelectAbility || Objects.isNil(choice.selection)) {
        return []
      }

      const ability = Abilities.getAbility(choice.selection.selection as AbilityReference, ruleset)
      const loadout = Objects.isNil(choice.option.loadout) ? null : Loadout.getLoadoutType(choice.option.loadout, ruleset)
      return [Effects.gainAbility(ability, loadout)]
    })

    return [
      ...Effects.sourceEffects(effects, { type: EffectSourceType.Ruleset }),
      ...levelTraits.flatMap((trait) => Effects.sourceEffects(trait.effects, { type: EffectSourceType.Trait, trait: trait.id })),
      ...selectedAbilities,
    ]
  })
}
