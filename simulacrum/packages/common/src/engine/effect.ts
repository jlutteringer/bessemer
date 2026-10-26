export * from '@simulacrum/ruleset/effect'
import { Effect, EffectSource, EffectType } from '@simulacrum/ruleset/effect'

export const filter = <T extends Effect>(effects: Array<Effect>, type: EffectType<T>): Array<T> => {
  const matchingEffects = effects.filter((it) => it.type === type.type)
  return matchingEffects as Array<T>
}

export const sourceEffects = (effects: Array<Effect>, source: EffectSource): Array<Effect> => {
  return effects.map((it) => {
    return { ...it, source }
  })
}
