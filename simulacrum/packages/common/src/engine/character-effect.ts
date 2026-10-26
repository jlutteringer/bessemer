export * from '@simulacrum/ruleset/character-effect'
import { CharacterEffect, CharacterEffectSource, CharacterEffectType } from '@simulacrum/ruleset/character-effect'
import { Modifier } from '@simulacrum/ruleset/attribute'
import { Objects } from '@bessemer/cornerstone'

export const filter = <T extends CharacterEffect>(effects: Array<CharacterEffect>, type: CharacterEffectType<T>): Array<T> => {
  const matchingEffects = effects.filter((it) => it.type === type.type)
  return matchingEffects as Array<T>
}

export const sourceEffects = (effects: Array<CharacterEffect>, source: CharacterEffectSource): Array<CharacterEffect> => {
  return effects.map((it) => {
    return { ...it, source }
  })
}

export const sourceModifier = <T>(effect: { modifier: Modifier<T>; source?: CharacterEffectSource }): Modifier<T> => {
  return Objects.isPresent(effect.source) ? { ...effect.modifier, source: effect.source } : effect.modifier
}

export const getModifiers = <E extends CharacterEffect & { modifier: Modifier<unknown> }>(
  effects: Array<CharacterEffect>,
  type: CharacterEffectType<E>,
  matches: (effect: E) => boolean
): Array<E['modifier']> => {
  return filter(effects, type).filter(matches).map(sourceModifier)
}
