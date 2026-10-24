import { Abilities, Attributes, CharacterOptions, CharacterValues, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { Feat, FeatLevel1, FeatLevel3, GeneralFeat } from '@simulacrum/ruleset-pf2e/archetype'
import {
  Constitution,
  Dexterity,
  Fortitude,
  HeavyArmor,
  HitPoints,
  LightArmor,
  MartialWeapons,
  MediumArmor,
  Perception,
  Reflex,
  Speed,
  Will,
} from '@simulacrum/ruleset-pf2e/characteristic'
import { Proficiency } from '@simulacrum/ruleset-pf2e/bonus-type'
import { Expert, Trained } from '@simulacrum/ruleset-pf2e/proficiency'
import { AllSkillFeatEntities } from '@simulacrum/ruleset-pf2e/feat/skill-feat'

export const AdoptedAncestry = Traits.defineTrait('feat/adopted-ancestry', {
  name: 'Adopted Ancestry',
  description:
    '*General*\n\nYou’re fully immersed in another ancestry’s culture and traditions, whether born into them, earned through rite of passage, or bonded through a deep friendship or romance. Choose a common ancestry or another ancestry to which you have access. You can select ancestry feats from the ancestry you chose, in addition to your character’s own ancestry, as long as the ancestry feats don’t require any physiological feature that you lack, as determined by the GM.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const ArmorProficiencyLightArmor = Traits.defineTrait('feat/armor-proficiency/light-armor', {
  name: 'Armor Proficiency (Light Armor)',
  description: 'You become trained in light armor.',
  prerequisites: [Expressions.lessThan(LightArmor.variable, 1)],
  effects: [Effects.modifyCharacteristic(LightArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ArmorProficiencyMediumArmor = Traits.defineTrait('feat/armor-proficiency/medium-armor', {
  name: 'Armor Proficiency (Medium Armor)',
  description: 'You are already trained in light armor, so you become trained in medium armor.',
  prerequisites: [Expressions.greaterThanOrEqual(LightArmor.variable, 1), Expressions.lessThan(MediumArmor.variable, 1)],
  effects: [Effects.modifyCharacteristic(MediumArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const ArmorProficiencyHeavyArmor = Traits.defineTrait('feat/armor-proficiency/heavy-armor', {
  name: 'Armor Proficiency (Heavy Armor)',
  description: 'You are already trained in light and medium armor, so you become trained in heavy armor.',
  prerequisites: [Expressions.greaterThanOrEqual(MediumArmor.variable, 1), Expressions.lessThan(HeavyArmor.variable, 1)],
  effects: [Effects.modifyCharacteristic(HeavyArmor, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const SelectArmorProficiency = CharacterOptions.selectTraitOption('feat/armor-proficiency/select', {
  name: 'Armor Proficiency',
  filter: { specificOptions: [ArmorProficiencyLightArmor, ArmorProficiencyMediumArmor, ArmorProficiencyHeavyArmor] },
})

export const ArmorProficiency = Traits.defineTrait('feat/armor-proficiency', {
  name: 'Armor Proficiency',
  description:
    '*General*\n\nYou become trained in light armor. If you already were trained in light armor, you gain training in medium armor. If you were trained in both, you become trained in heavy armor. If you are at least 13th level, you become an expert in this armor type.\n\n**Special** You can select this feat more than once. Each time, you become trained in the next type of armor, as detailed above.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  repeatable: true,
  effects: [Effects.gainCharacterOption(SelectArmorProficiency)],
})

export const BreathControl = Traits.defineTrait('feat/breath-control', {
  name: 'Breath Control',
  description:
    '*General*\n\nYou can breathe even in hazardous or sparse air. You can hold your breath for 25 times as long as usual before [suffocating](content:playing-the-game/drowning-and-suffocating). You gain a +1 circumstance bonus to saving throws against inhaled threats, such as inhaled poisons, and if you roll a success on such a saving throw, you get a critical success instead.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const CannyAcumenFortitude = Traits.defineTrait('feat/canny-acumen/fortitude', {
  name: 'Canny Acumen (Fortitude)',
  description: 'You become an expert in Fortitude saves.',
  effects: [Effects.modifyCharacteristic(Fortitude, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CannyAcumenReflex = Traits.defineTrait('feat/canny-acumen/reflex', {
  name: 'Canny Acumen (Reflex)',
  description: 'You become an expert in Reflex saves.',
  effects: [Effects.modifyCharacteristic(Reflex, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CannyAcumenWill = Traits.defineTrait('feat/canny-acumen/will', {
  name: 'Canny Acumen (Will)',
  description: 'You become an expert in Will saves.',
  effects: [Effects.modifyCharacteristic(Will, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const CannyAcumenPerception = Traits.defineTrait('feat/canny-acumen/perception', {
  name: 'Canny Acumen (Perception)',
  description: 'You become an expert in Perception.',
  effects: [Effects.modifyCharacteristic(Perception, Attributes.modifier(Patches.sum(Expert), { combinability: Proficiency }))],
})

export const SelectCannyAcumen = CharacterOptions.selectTraitOption('feat/canny-acumen/select', {
  name: 'Canny Acumen',
  filter: { specificOptions: [CannyAcumenFortitude, CannyAcumenReflex, CannyAcumenWill, CannyAcumenPerception] },
})

export const CannyAcumen = Traits.defineTrait('feat/canny-acumen', {
  name: 'Canny Acumen',
  description:
    '*General*\n\nYour avoidance or observation is beyond the ken of most in your profession. Choose [Fortitude](characteristic:fortitude) saves, [Reflex](characteristic:reflex) saves, [Will saves](characteristic:will), or [Perception](characteristic:perception). You become an expert in your choice. At 17th level, you become a master in your choice.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [Effects.gainCharacterOption(SelectCannyAcumen)],
})

export const Diehard = Traits.defineTrait('feat/diehard', {
  name: 'Diehard',
  description:
    '*General*\n\nIt takes more to kill you than most. You die from the [dying](content:conditions/dying) condition at dying 5, rather than dying 4.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const FastRecovery = Traits.defineTrait('feat/fast-recovery', {
  name: 'Fast Recovery',
  description:
    '*General*\n\n**Prerequisites** Constitution +2\n\nYour body quickly bounces back from afflictions. You regain twice as many [Hit Points](characteristic:hit-points) from resting. Each time you succeed at a [Fortitude](characteristic:fortitude) save against an ongoing [disease](content:traits/disease) or [poison](content:traits/poison), you reduce its stage by 2, or by 1 against a virulent disease or poison. Each critical success you achieve against an ongoing disease or poison reduces its stage by 3, or by 2 against a virulent disease or poison. In addition, you reduce the severity of your [drained](content:conditions/drained) condition by 2 when you rest for a night instead of by 1.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  prerequisites: [Expressions.greaterThanOrEqual(Constitution.variable, 2)],
  effects: [],
})

export const FeatherStep = Traits.defineTrait('feat/feather-step', {
  name: 'Feather Step',
  description:
    '*General*\n\n**Prerequisites** Dexterity +2\n\nYou step carefully and quickly. You can [Step](content:playing-the-game/step) into [difficult terrain](content:playing-the-game/difficult-terrain).',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  prerequisites: [Expressions.greaterThanOrEqual(Dexterity.variable, 2)],
  effects: [],
})

export const Fleet = Traits.defineTrait('feat/fleet', {
  name: 'Fleet',
  description: '*General*\n\nYou move more quickly on foot. Your [Speed](characteristic:speed) increases by 5 feet.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [Effects.modifyCharacteristic(Speed, Attributes.modifier(Patches.sum(5)))],
})

export const IncredibleInitiative = Traits.defineTrait('feat/incredible-initiative', {
  name: 'Incredible Initiative',
  description: '*General*\n\nYou react more quickly than others can. You gain a +2 circumstance bonus to initiative rolls.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const Pet = Traits.defineTrait('feat/pet', {
  name: 'Pet',
  description:
    "*General*\n\nYou have a pet-a Tiny animal of a type you choose, such as a cat, bird, or rodent. It has the minion trait, meaning it gains 2 actions during your turn if you use the [Command an Animal](content:skills/command-an-animal) action to command it; this replaces the usual effects of Command an Animal, and you don't need to attempt a [Nature](characteristic:skill/nature) check. A pet can't take [attack](content:traits/attack) actions except to [Escape](content:playing-the-game/escape) or [Force Open](content:skills/force-open).\n\n**Level** Your pet's level is equal to yours.\n\n**Modifiers and AC** Your pet's save modifiers and [AC](characteristic:armor-class) are equal to yours before applying circumstance or status bonuses or penalties. It uses 3 + your level as its modifier for [Perception](characteristic:perception), [Acrobatics](characteristic:skill/acrobatics), and [Stealth](characteristic:skill/stealth), and just your level as its modifier for other skill checks. It doesn't have or use its own attribute modifiers and can never benefit from item bonuses.\n\n**Hit Points** Your pet has 5 [Hit Points](characteristic:hit-points) per level.\n\n**Senses** Your pet has low-light vision and can gain additional senses from pet abilities.\n\n**Speed** Your pet has a [Speed](characteristic:speed) of 25 feet. You can choose to instead have an aquatic pet, which breathes in water instead of air and has the aquatic trait, no land Speed, and a swim Speed of 25 feet.\n\n**Pet Abilities** When you gain your pet, choose two of the following abilities. If your pet is an animal that naturally has one of these abilities (for instance, an owl has a fly Speed), you must select that ability. Your pet can't be an animal that naturally has more pet abilities than the maximum. In some cases, the GM might add some familiar abilities described on pages 212–213 to the pet abilities you can choose.\n\n- **Amphibious** It gains the amphibious trait, allowing it to breathe in both air and water, and has both a land Speed and a swim Speed, each equal to its highest land Speed or swim Speed.\n\n- **Burrower** It gains a burrow Speed of 5 feet, allowing it to dig Tiny holes.\n\n- **Climber** It gains a climb Speed of 25 feet.\n\n- **Darkvision** It gains darkvision.\n\n- **Echolocation** Your pet can use hearing as a precise sense within 20 feet.\n\n- **Fast Movement** Increase one of the pet's Speeds from 25 feet to 40 feet.\n\n- **Flier** It gains a fly Speed of 25 feet.\n\n- **Manual Dexterity** It can use up to two of its limbs as if they were hands to perform manipulate actions.\n\n- **Scent** Your pet can use scent as an imprecise sense within 30 feet\n\n- **Tough** Your pet's max HP increase by 2 per level.\n\n**Special** You can replace a pet or gain a new one by spending 1 week of downtime, releasing any previous pet you have. If you later gain a familiar or other companion that uses the Pet feat, you can immediately retrain this feat.",
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const Ride = Traits.defineTrait('feat/ride', {
  name: 'Ride',
  description:
    "*General*\n\nWhen you [Command an Animal](content:skills/command-an-animal) you're mounted on to take a move action (such as [Stride](content:playing-the-game/stride)), you automatically succeed instead of needing to attempt a check. Any animal you're mounted on acts on your turn, like a [minion](content:traits/minion). If you [Mount](content:playing-the-game/mount) an animal in the middle of an encounter, it skips its next turn and then acts on your next turn.",
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const ShieldBlock = Traits.defineTrait('feat/shield-block', {
  name: 'Shield Block',
  description:
    '*General*\n\n**Trigger** While you have your shield raised, you would take physical damage (bludgeoning, piercing, or slashing) from an attack.\n\nYou snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [],
})

export const ShieldBlockAction = Abilities.defineAbility('feat/shield-block/action', {
  name: 'Shield Block',
  description: '*General*',
  prerequisites: [Traits.traitPrerequisite(ShieldBlock)],
  actions: [
    {
      name: 'Shield Block',
      description:
        '**Trigger** While you have your shield raised, you would take physical damage (bludgeoning, piercing, or slashing) from an attack.\n\nYou snap your shield in place to ward off a blow. Your shield prevents you from taking an amount of damage up to the shield’s Hardness. You and the shield each take any remaining damage, possibly breaking or destroying the shield.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const Toughness = Traits.defineTrait('feat/toughness', {
  name: 'Toughness',
  description:
    '*General*\n\nYour body can withstand more punishment than most before succumbing. Increase your maximum [Hit Points](characteristic:hit-points) by your level. You reduce the DC of [recovery checks](content:playing-the-game/recovery-checks) by 1.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  effects: [Effects.modifyCharacteristic(HitPoints, Attributes.modifier(Patches.sum(CharacterValues.Level)))],
})

export const WeaponProficiency = Traits.defineTrait('feat/weapon-proficiency', {
  name: 'Weapon Proficiency',
  description:
    '*General*\n\nYou become trained in all martial weapons. If you were already trained in all martial weapons, you become trained in one advanced weapon of your choice. If you are at least 11th level, you also become an expert in these weapons.\n\n**Special** You can select this feat more than once. Each time you do, you become trained in an advanced weapon.',
  archetypes: [Feat, GeneralFeat, FeatLevel1],
  repeatable: true,
  effects: [Effects.modifyCharacteristic(MartialWeapons, Attributes.modifier(Patches.sum(Trained), { combinability: Proficiency }))],
})

export const AncestralParagon = Traits.defineTrait('feat/ancestral-paragon', {
  name: 'Ancestral Paragon',
  description:
    '*General*\n\nWhether through instinct, study, or magic, you feel a deeper connection to your ancestry. You gain a 1st-level ancestry feat.',
  archetypes: [Feat, GeneralFeat, FeatLevel3],
  effects: [],
})

export const PrescientPlanner = Traits.defineTrait('feat/prescient-planner', {
  name: 'Prescient Planner',
  description:
    "*General*\n\n**Cost** the Price of the chosen item\n\n**Requirements** You haven’t used this ability since the last time you were able to purchase goods\n\nYou regularly create convoluted plans and contingencies, using your resources to enact them. You take 1 minute to remove your backpack, then carefully remove an item you hadn't previously declared that you purchased—you intuited that you would come to need the item and purchased it at the latest opportunity. The item must be a piece of adventuring gear, and can't be a weapon, armor, alchemical item, magic item, or other treasure. It must be common with a level no higher than half your level, and its Bulk must be low enough that carrying it wouldn't have made you [encumbered](content:conditions/encumbered).",
  archetypes: [Feat, GeneralFeat, FeatLevel3],
  effects: [],
})

export const UntrainedImprovisation = Traits.defineTrait('feat/untrained-improvisation', {
  name: 'Untrained Improvisation',
  description:
    '*General*\n\nYou’ve learned how to handle situations when you’re out of your depth. Your proficiency bonus to untrained skill checks is equal to your level –2. This improves to your level –1 at 5th level and your full level at 7th level. This doesn’t allow you to use the skill’s trained actions.',
  archetypes: [Feat, GeneralFeat, FeatLevel3],
  effects: [],
})

export const AllGeneralFeatEntities = [
  AdoptedAncestry,
  ArmorProficiencyLightArmor,
  ArmorProficiencyMediumArmor,
  ArmorProficiencyHeavyArmor,
  ArmorProficiency,
  BreathControl,
  CannyAcumenFortitude,
  CannyAcumenReflex,
  CannyAcumenWill,
  CannyAcumenPerception,
  CannyAcumen,
  Diehard,
  FastRecovery,
  FeatherStep,
  Fleet,
  IncredibleInitiative,
  Pet,
  Ride,
  ShieldBlock,
  ShieldBlockAction,
  Toughness,
  WeaponProficiency,
  AncestralParagon,
  PrescientPlanner,
  UntrainedImprovisation,
  ...AllSkillFeatEntities,
]
