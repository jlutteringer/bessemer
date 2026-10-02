import { Objects } from '@bessemer/cornerstone'
import { Effect, EffectSourceType } from '@simulacrum/common/effect'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { TraitReference } from '@simulacrum/common/trait'
import { CharacterChoice, CharacterOptionType } from '@simulacrum/common/character/character-option'
import { AbilityReference } from '@simulacrum/common/ability'
import { Abilities, Effects, Loadout, ProgressionTables, Traits } from '@simulacrum/common'
import { ApplicationContext } from '@simulacrum/common/application'

/**
 * The effects the character has at each level up to `level`: the ruleset's, those of each trait it has at that level, and a GainAbility
 * effect for each ability selected for its choices. `traits` already includes every trait the character was granted outright, so their
 * effects aren't expanded again here.
 */
export const buildEffectsTable = (
  level: number,
  traits: ProgressionTable<TraitReference>,
  choices: ProgressionTable<CharacterChoice>,
  context: ApplicationContext
): ProgressionTable<Effect> => {
  const rulesetEffects = ProgressionTables.capAtLevel(context.client.ruleset.progressionTable, level)

  return ProgressionTables.mapRows(rulesetEffects, (effects, rowLevel) => {
    const levelTraits = (traits[rowLevel] ?? []).map((it) => Traits.getTrait(it, context))
    const selectedAbilities = (choices[rowLevel] ?? []).flatMap((choice) => {
      if (choice.option.type !== CharacterOptionType.SelectAbility || Objects.isNil(choice.selection)) {
        return []
      }

      const ability = Abilities.getAbility(choice.selection.selection as AbilityReference, context)
      const loadout = Objects.isNil(choice.option.loadout) ? null : Loadout.getLoadoutType(choice.option.loadout, context)
      return [Effects.gainAbility(ability, loadout)]
    })

    return [
      ...Effects.sourceEffects(effects, { type: EffectSourceType.Ruleset }),
      ...levelTraits.flatMap((trait) => Effects.sourceEffects(trait.effects, { type: EffectSourceType.Trait, trait: trait.id })),
      ...selectedAbilities,
    ]
  })
}
