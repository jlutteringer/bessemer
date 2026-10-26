import { Tags, Attributes, CharacterEffects, Traits } from '@simulacrum/ruleset'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { Agility, Brawn, Intelligence, Presence, ProficiencyBonus, Willpower } from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Expressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

export const AttributeIncrease = Tags.defineTraitTag('attribute-increase', { name: 'Attribute Increase' })

const defineAttributeIncrease = (key: string, name: string, characteristic: Characteristic) => {
  return Traits.defineTrait(`attribute-increase/${key}`, {
    name: `${name} +1`,
    description: `Increase your ${name} by 1.`,
    tags: [AttributeIncrease],
    repeatable: true,
    prerequisites: [Expressions.lessThan(characteristic.variable, ProficiencyBonus.variable)],
    effects: [CharacterEffects.modifyCharacteristic(characteristic, Attributes.modifier(Patches.sum(1)))],
  })
}

export const BrawnIncrease = defineAttributeIncrease('brawn', 'Brawn', Brawn)
export const AgilityIncrease = defineAttributeIncrease('agility', 'Agility', Agility)
export const WillpowerIncrease = defineAttributeIncrease('willpower', 'Willpower', Willpower)
export const IntelligenceIncrease = defineAttributeIncrease('intelligence', 'Intelligence', Intelligence)
export const PresenceIncrease = defineAttributeIncrease('presence', 'Presence', Presence)

export const AllAttributeIncreases = [BrawnIncrease, AgilityIncrease, WillpowerIncrease, IntelligenceIncrease, PresenceIncrease]
