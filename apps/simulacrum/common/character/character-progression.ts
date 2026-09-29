import { CharacterOption, CharacterSelection } from '@simulacrum/common/character/character-option'
import { Effect, EffectSource, EffectSourceType } from '@simulacrum/common/effect'
import { TraitReference } from '@simulacrum/common/trait'
import { ProgressionTable } from '@simulacrum/common/progression-table'
import { Effects, ProgressionTables, Traits } from '@simulacrum/common'
import { CharacterSheet } from '@simulacrum/common/character/character'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { CharacterOptions } from '@simulacrum/common/character/index'
import { ApplicationContext } from '@simulacrum/common/application'

export type CharacterEffectSource = { type: EffectSourceType.Ruleset } | { type: EffectSourceType.Trait; trait: TraitReference }

export type CharacterProgressionEntry = {
  key: string
  source: CharacterEffectSource
  option: CharacterOption | null
  selection: CharacterSelection | null
  effects: Array<Effect>

  // TODO
  // modifiers: Array<ModifierValue<unknown>>
}

export const buildEffectsTable = (character: CharacterSheet, context: ApplicationContext): ProgressionTable<Effect> => {
  return ProgressionTables.flatMap(buildProgressionTable(character, context), (it) => it.effects)
}

export const buildProgressionTable = (character: CharacterSheet, context: ApplicationContext): ProgressionTable<CharacterProgressionEntry> => {
  const rulesetEffects = ProgressionTables.capAtLevel(context.client.ruleset.progressionTable, character.level)
  const source: CharacterEffectSource = { type: EffectSourceType.Ruleset }
  const characterProgressionTable = ProgressionTables.mapRows(rulesetEffects, (effects, level) => {
    const [levelUpEffects, additionalEntries] = buildCharacterProgressionEntries(effects, source, character, level, new Map(), context)
    const levelUpEntries = !Arrays.isEmpty(levelUpEffects)
      ? [
          {
            key: getKey(null, level),
            source,
            option: null,
            selection: null,
            effects: levelUpEffects,
          },
        ]
      : []

    return [...levelUpEntries, ...additionalEntries]
  })

  return characterProgressionTable
}

const buildCharacterProgressionEntries = (
  initialEffects: Array<Effect>,
  source: CharacterEffectSource,
  character: CharacterSheet,
  level: number,
  // How many times each option has been granted so far at this level, so repeated options are matched to their own selections
  optionOccurrences: Map<string, number>,
  context: ApplicationContext
): [Array<Effect>, Array<CharacterProgressionEntry>] => {
  const effects = Effects.sourceEffects(initialEffects, source)
  const optionEffects = Effects.filter(effects, Effects.GainCharacterOption)

  const additionalEntries = optionEffects.flatMap((optionEffect) => {
    const occurrence = optionOccurrences.get(optionEffect.option.id) ?? 0
    optionOccurrences.set(optionEffect.option.id, occurrence + 1)
    const selection = CharacterOptions.getSelection(character.selections, optionEffect.option, level, occurrence)

    if (Objects.isPresent(selection)) {
      const trait = Traits.getTrait(selection.selection, context)
      const traitSource: EffectSource = { type: EffectSourceType.Trait, trait: trait.id }
      const [traitEffects, additionalEntries] = buildCharacterProgressionEntries(
        trait.effects,
        traitSource,
        character,
        level,
        optionOccurrences,
        context
      )

      const traitEntries = !Arrays.isEmpty(traitEffects)
        ? [
            {
              key: getKey(optionEffect.option, level, occurrence),
              source,
              option: optionEffect.option,
              selection: selection,
              effects: traitEffects,
            },
          ]
        : []

      return [...traitEntries, ...additionalEntries]
    } else {
      return [
        {
          key: getKey(optionEffect.option, level, occurrence),
          source,
          option: optionEffect.option,
          selection: null,
          effects: [],
        },
      ]
    }
  })

  return [effects, additionalEntries]
}

const getKey = (option: CharacterOption | null, level: number, occurrence: number = 0): string => {
  return `${option?.id}-${level}-${occurrence}`
}
