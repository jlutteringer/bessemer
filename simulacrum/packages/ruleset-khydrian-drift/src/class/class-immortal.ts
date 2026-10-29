import { Attributes, CharacterEffects, RulesetEntities, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { SubclassLevelPrerequisite } from '@simulacrum/ruleset-khydrian-drift/class/class'
import { LightArmorProficiency, MediumArmorProficiency, HeavyArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, FortitudeDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const Immortal = Traits.defineTrait('immortal', {
  name: 'Immortal',
  description:
    '*"There were giants in the earth in those days."*\n\nImmortals are the last pilots of the Atlas, towering exo-suits built in the forges of a fallen empire. To the people of the sprawl they are relics of an older and better age, when the law still meant something. Inside their armor an immortal can shrug off gunfire and carry a battle on their shoulders, standing firm where anyone else would fall.',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(FortitudeDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
    CharacterEffects.gainTrait(MediumArmorProficiency),
    CharacterEffects.gainTrait(HeavyArmorProficiency),
  ],
})

const JuggernautReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'immortal/juggernaut')
const JusticarReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'immortal/justicar')

export const Juggernaut = Traits.defineTrait('immortal/juggernaut', {
  name: 'Juggernaut',
  description:
    '*"A fire devoureth before them; and behind them a flame burneth."*\n\nJuggernauts are the spearhead of any assault, an Atlas armed for war and pointed straight at the enemy. A heavy weapon rides on the suit\'s spinal mount, letting them fire two guns at once as they march forward. Barricades, bulkheads, and fortified positions all fall the same way: under a juggernaut\'s fire.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Immortal), SubclassLevelPrerequisite, Expressions.not(Traits.traitPrerequisite(JusticarReference))],
  effects: [],
})

export const Justicar = Traits.defineTrait('immortal/justicar', {
  name: 'Justicar',
  description:
    '*"Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein."*\n\nJusticars have sworn the Oath of the Emperor, binding themselves to an empire that no longer exists and to a justice the sprawl has long forgotten. They stand between the innocent and harm, shielding allies with their Atlas and bringing judgment down on those who prey on the weak. To criminals and corporations alike, a justicar is a living sentence.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Immortal), SubclassLevelPrerequisite, Expressions.not(Traits.traitPrerequisite(JuggernautReference))],
  effects: [],
})

export const AllImmortalEntities = [Immortal, Juggernaut, Justicar]
