import { Objects } from '@bessemer/cornerstone'
import { Effect, EffectSourceType } from '@simulacrum/common/engine/effect'
import { ProgressionTable } from '@simulacrum/ruleset/progression-table'
import { TraitReference } from '@simulacrum/common/engine/trait'
import { CharacterChoice, CharacterOptionType } from '@simulacrum/common/engine/character/character-option'
import { AbilityReference } from '@simulacrum/common/engine/ability'
import { Abilities, Effects, Loadout, ProgressionTables, Traits } from '@simulacrum/common/engine/engine'
import { Ruleset } from '@simulacrum/common/engine/ruleset'

export type CharacterProgress = {
  traits: ProgressionTable<TraitReference>
  choices: ProgressionTable<CharacterChoice>
  conditionalEffects: ProgressionTable<Effect>
}

export const buildEffectsTable = (level: number, progress: CharacterProgress, ruleset: Ruleset): ProgressionTable<Effect> => {
  return ProgressionTables.mapRows(ProgressionTables.fromRecord(ruleset.progressionTable, level), (effects, rowLevel) => {
    const levelTraits = (progress.traits[rowLevel] ?? []).map((it) => Traits.getTraitById(it, ruleset))
    const selectedAbilities = (progress.choices[rowLevel] ?? []).flatMap((choice) => {
      if (choice.option.type !== CharacterOptionType.SelectAbility || Objects.isNil(choice.selection)) {
        return []
      }

      const ability = Abilities.getAbilityById(choice.selection.selection as AbilityReference, ruleset)
      const loadout = Objects.isNil(choice.option.loadout) ? choice.option.loadout : Loadout.getLoadoutTypeById(choice.option.loadout, ruleset)
      return [Effects.gainAbility(ability, loadout)]
    })

    return [
      ...Effects.sourceEffects(effects, { type: EffectSourceType.Ruleset }),
      ...levelTraits.flatMap((trait) => Effects.sourceEffects(trait.effects, { type: EffectSourceType.Trait, trait: trait.id })),
      ...selectedAbilities,
      ...(progress.conditionalEffects[rowLevel] ?? []),
    ]
  })
}
