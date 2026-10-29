import { Attributes, CharacterEffects, RulesetEntities, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { SubclassLevelPrerequisite } from '@simulacrum/ruleset-khydrian-drift/class/class'
import { LightArmorProficiency } from '@simulacrum/ruleset-khydrian-drift/archetype/archetype-combat'
import { Class, Primary } from '@simulacrum/ruleset-khydrian-drift/tag'
import { DefenseBonus, ReflexDefense, WillDefense } from '@simulacrum/ruleset-khydrian-drift/characteristic'

export const OpeningGambit = Traits.defineTrait('scoundrel/opening-gambit', {
  name: 'Opening Gambit',
  tags: [Primary],
  effects: [
    CharacterEffects.descriptive(
      'During the first round of combat, you take two [turns](content:combat/turn). Your first turn happens at your normal place in the [initiative](content:combat/initiative) order, and your second turn happens at your initiative minus 10.'
    ),
  ],
})

export const Scoundrel = Traits.defineTrait('scoundrel', {
  name: 'Scoundrel',
  description:
    '*"Stolen waters are sweet, and bread eaten in secret is pleasant."*\n\nScoundrels are the sprawl\'s thieves, con artists, and fixers, surviving on quick hands and quicker wits. They talk their way past security, slip through crowds unseen, and strike when a target least expects it, always with a way out already planned. In a fight a scoundrel avoids trading blows head-on; they stay mobile, hit where it hurts, and are gone before anyone can return the favor.',
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(ReflexDefense, Attributes.modifier(Patches.sum(DefenseBonus.Heavy))),
    CharacterEffects.modifyCharacteristic(WillDefense, Attributes.modifier(Patches.sum(DefenseBonus.Medium))),
    CharacterEffects.gainTrait(LightArmorProficiency),
    CharacterEffects.gainTrait(OpeningGambit),
  ],
})

const OutriderReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'scoundrel/outrider')
const AssassinReference = RulesetEntities.buildReference(RulesetEntities.RulesetEntityType.Trait, 'scoundrel/assassin')

export const Outrider = Traits.defineTrait('scoundrel/outrider', {
  name: 'Outrider',
  description:
    '*"He mocketh at fear, and is not affrighted; neither turneth he back from the sword."*\n\nOutriders live on the edges of the sprawl, running cargo, people, and secrets through checkpoints that were never meant to let them pass. They are drivers, pilots, and gunslingers who trust their reflexes over any plan, and they have a habit of getting out of trouble just as fast as they got into it. When a deal goes bad, an outrider is the first one shooting and the first one gone.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Scoundrel), SubclassLevelPrerequisite, Expressions.not(Traits.traitPrerequisite(AssassinReference))],
  effects: [],
})

export const Assassin = Traits.defineTrait('scoundrel/assassin', {
  name: 'Assassin',
  description:
    '*"I have a message from God unto thee."*\n\nIn a city ruled by corporations and crime lords, assassins are the hidden hand that settles accounts. They move unseen, strike from shadows and rooftops, and are gone before the body hits the floor. Patience is their armor and surprise is their weapon, and the best of them are never known by name.',
  tags: [Primary],
  prerequisites: [Traits.traitPrerequisite(Scoundrel), SubclassLevelPrerequisite, Expressions.not(Traits.traitPrerequisite(OutriderReference))],
  effects: [],
})

export const AllScoundrelEntities = [Scoundrel, OpeningGambit, Outrider, Assassin]
