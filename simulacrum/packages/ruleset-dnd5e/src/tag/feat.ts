import { Tags, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import { Patches } from '@bessemer/cornerstone'
import { CharacterOptions } from '@simulacrum/ruleset'
import * as AbilityScoreIncreases from '@simulacrum/ruleset-dnd5e/tag/ability-score-increase'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as SkillExpertise from '@simulacrum/ruleset-dnd5e/tag/skill-expertise'
import * as ArtisansTools from '@simulacrum/ruleset-dnd5e/tag/artisans-tools'
import * as Tools from '@simulacrum/ruleset-dnd5e/tag/tool'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import { Cleric } from '@simulacrum/ruleset-dnd5e/tag'
import { WeaponMasteryLoadout } from '@simulacrum/ruleset-dnd5e/loadout'

// FUTURE these are stubs: apart from ability score increases, feats' own choices and benefits aren't modelled yet
export const Feat = Tags.defineTraitTag('feat', { name: 'Feat' })

// Origin feats (gained from a Background, or a Human's Versatile trait) aren't tagged as Feat, so SelectOriginFeat offers only them.
// A trait matches a filter when all its tags are in the filter, so SelectFeat lists both to offer every feat
export const OriginFeat = Tags.defineTraitTag('feat/origin', { name: 'Origin Feat' })

export const SelectFeat = CharacterOptions.selectTraitOption('feat/select', {
  name: 'Feat',
  filter: { tags: [[Feat, OriginFeat]] },
})

export const SelectOriginFeat = CharacterOptions.selectTraitOption('feat/select-origin', {
  name: 'Origin Feat',
  filter: { tags: [OriginFeat] },
})

export const AbilityScoreImprovement = Traits.defineTrait('feat/ability-score-improvement', {
  name: 'Ability Score Improvement',
  description:
    '**Prerequisite:** Level 4+\n\nRaise one ability score by 2, or two ability scores by 1 each, to a maximum of 20. You can take this feat more than once.',
  tags: [Feat],
  // Picking the same ability score for both +1s gives the +2
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/ability-score-improvement/ability-score-1', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: AbilityScoreIncreases.AllAbilityScores.map((it) => it.featPlusOne),
        },
      })
    ),
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/ability-score-improvement/ability-score-2', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: AbilityScoreIncreases.AllAbilityScores.map((it) => it.featPlusOne),
        },
      })
    ),
  ],
})

export const Actor = Traits.defineTrait('feat/actor', {
  name: 'Actor',
  description:
    "**Prerequisite:** Level 4+, Charisma 13+\n\n**Ability Score Increase:** Charisma +1 (maximum 20)\n\n**Impersonation:** while disguised as someone, real or invented, you have Advantage on Charisma (Deception or Performance) checks to pass as them.\n\n**Mimicry:** you can imitate voices and other sounds. Listeners need a Wisdom (Insight) check against DC 8 + your Charisma modifier + Proficiency Bonus to tell they're fake.",
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Charisma, Attributes.modifier(Patches.sum(1)))],
})

export const Athlete = Traits.defineTrait('feat/athlete', {
  name: 'Athlete',
  description:
    '**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Climb Speed:** you gain a Climb Speed equal to your Speed.\n\n**Hop Up:** standing up from Prone costs only 5 feet of movement.\n\n**Jumping:** a running Long or High Jump needs only a 5-foot run-up.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/athlete/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const Charger = Traits.defineTrait('feat/charger', {
  name: 'Charger',
  description:
    "**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Improved Dash:** your Speed is 10 feet higher when you Dash.\n\n**Charge Attack:** once per turn, if you move at least 10 feet straight toward a target right before hitting it with a melee attack as part of the Attack action, either add 1d8 to the damage or push it up to 10 feet (if it's no more than one size larger than you).",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/charger/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const Chef = Traits.defineTrait('feat/chef', {
  name: 'Chef',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Constitution or Wisdom +1 (maximum 20)\n\n**Cook's Utensils:** you gain proficiency with them.\n\n**Replenishing Meal:** during a Short Rest, cook for up to 4 + your Proficiency Bonus creatures. Anyone who eats and spends Hit Dice regains an extra 1d8 Hit Points.\n\n**Bolstering Treats:** with an hour's work or after a Long Rest, make treats equal to your Proficiency Bonus that last 8 hours. Eating one as a Bonus Action grants Temporary Hit Points equal to your Proficiency Bonus.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/chef/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Constitution.featPlusOne, AbilityScoreIncreases.Wisdom.featPlusOne],
        },
      })
    ),
    Effects.gainTrait(ArtisansTools.CooksUtensils),
  ],
})

export const CrossbowExpert = Traits.defineTrait('feat/crossbow-expert', {
  name: 'Crossbow Expert',
  description:
    "**Prerequisite:** Level 4+, Dexterity 13+\n\n**Ability Score Increase:** Dexterity +1 (maximum 20)\n\n**Ignore Loading:** you ignore the Loading property of crossbows and can reload one without a free hand.\n\n**Firing in Melee:** enemies within 5 feet don't give you Disadvantage on crossbow attacks.\n\n**Dual Wielding:** the extra Light-property attack with a Light crossbow adds your ability modifier to its damage.",
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const Crusher = Traits.defineTrait('feat/crusher', {
  name: 'Crusher',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Constitution +1 (maximum 20)\n\n**Push:** once per turn, when you hit a creature no more than one size larger than you with Bludgeoning damage, you can shove it 5 feet.\n\n**Enhanced Critical:** after you score a Bludgeoning Critical Hit on a creature, attacks against it have Advantage until the start of your next turn.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/crusher/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Constitution.featPlusOne],
        },
      })
    ),
  ],
})

export const DefensiveDuelist = Traits.defineTrait('feat/defensive-duelist', {
  name: 'Defensive Duelist',
  description:
    '**Prerequisite:** Level 4+, Dexterity 13+\n\n**Ability Score Increase:** Dexterity +1 (maximum 20)\n\n**Parry:** while holding a Finesse weapon, when a melee attack hits you, you can use your Reaction to add your Proficiency Bonus to your AC against melee attacks until the start of your next turn, which may turn the hit into a miss.',
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const DualWielder = Traits.defineTrait('feat/dual-wielder', {
  name: 'Dual Wielder',
  description:
    "**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Enhanced Dual Wielding:** after attacking with a Light weapon as part of the Attack action, you can make a Bonus Action attack with a different melee weapon that isn't Two-Handed, without adding a positive ability modifier to its damage.\n\n**Quick Draw:** you can draw or stow two non-Two-Handed weapons at once.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/dual-wielder/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const Durable = Traits.defineTrait('feat/durable', {
  name: 'Durable',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Constitution +1 (maximum 20)\n\n**Defy Death:** you have Advantage on Death Saving Throws.\n\n**Speedy Recovery:** as a Bonus Action, you can spend and roll a Hit Point Die to regain that many Hit Points.',
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Constitution, Attributes.modifier(Patches.sum(1)))],
})

export const ElementalAdeptAcid = Traits.defineTrait('feat/elemental-adept/acid', {
  name: 'Acid',
  description:
    'Your spells ignore Resistance to Acid damage, and when you roll damage for a spell that deals Acid damage, you can treat any 1 on a damage die as a 2.',
  effects: [],
})

export const ElementalAdeptCold = Traits.defineTrait('feat/elemental-adept/cold', {
  name: 'Cold',
  description:
    'Your spells ignore Resistance to Cold damage, and when you roll damage for a spell that deals Cold damage, you can treat any 1 on a damage die as a 2.',
  effects: [],
})

export const ElementalAdeptFire = Traits.defineTrait('feat/elemental-adept/fire', {
  name: 'Fire',
  description:
    'Your spells ignore Resistance to Fire damage, and when you roll damage for a spell that deals Fire damage, you can treat any 1 on a damage die as a 2.',
  effects: [],
})

export const ElementalAdeptLightning = Traits.defineTrait('feat/elemental-adept/lightning', {
  name: 'Lightning',
  description:
    'Your spells ignore Resistance to Lightning damage, and when you roll damage for a spell that deals Lightning damage, you can treat any 1 on a damage die as a 2.',
  effects: [],
})

export const ElementalAdeptThunder = Traits.defineTrait('feat/elemental-adept/thunder', {
  name: 'Thunder',
  description:
    'Your spells ignore Resistance to Thunder damage, and when you roll damage for a spell that deals Thunder damage, you can treat any 1 on a damage die as a 2.',
  effects: [],
})

// Elemental Adept can be taken more than once, but its damage types can't, so each time offers a type the character doesn't have yet
export const SelectElementalAdeptDamageType = CharacterOptions.selectTraitOption('feat/elemental-adept/select-damage-type', {
  name: 'Energy Mastery',
  filter: {
    specificOptions: [ElementalAdeptAcid, ElementalAdeptCold, ElementalAdeptFire, ElementalAdeptLightning, ElementalAdeptThunder],
  },
})

export const ElementalAdept = Traits.defineTrait('feat/elemental-adept', {
  name: 'Elemental Adept',
  description:
    '**Prerequisite:** Level 4+, Spellcasting or Pact Magic Feature\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Energy Mastery:** pick Acid, Cold, Fire, Lightning, or Thunder. Your spells ignore Resistance to that type, and 1s on their damage dice of that type count as 2s.\n\nYou can take this feat more than once, choosing a different type each time.',
  tags: [Feat],
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(SelectElementalAdeptDamageType),
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/elemental-adept/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const FeyTouched = Traits.defineTrait('feat/fey-touched', {
  name: 'Fey-Touched',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Fey Magic:** you always have Misty Step and one level 1 Divination or Enchantment spell of your choice prepared. You can cast each once per Long Rest without a spell slot, or with your own slots, using the ability this feat increased.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/fey-touched/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Grappler = Traits.defineTrait('feat/grappler', {
  name: 'Grappler',
  description:
    "**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Punch and Grab:** once per turn, when an Unarmed Strike hits as part of the Attack action, you can both deal damage and grapple.\n\n**Attack Advantage:** you have Advantage on attacks against creatures you're grappling.\n\n**Fast Wrestler:** moving a grappled creature your size or smaller costs no extra movement.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/grappler/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const GreatWeaponMaster = Traits.defineTrait('feat/great-weapon-master', {
  name: 'Great Weapon Master',
  description:
    '**Prerequisite:** Level 4+, Strength 13+\n\n**Ability Score Increase:** Strength +1 (maximum 20)\n\n**Heavy Weapon Mastery:** when you hit with a Heavy weapon as part of the Attack action, you can deal extra damage equal to your Proficiency Bonus.\n\n**Hew:** right after you score a Critical Hit or drop a creature to 0 Hit Points with a melee weapon, you can attack again with it as a Bonus Action.',
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const HeavilyArmored = Traits.defineTrait('feat/heavily-armored', {
  name: 'Heavily Armored',
  description:
    '**Prerequisite:** Level 4+, Medium Armor Training\n\n**Ability Score Increase:** Constitution or Strength +1 (maximum 20)\n\n**Armor Training:** you gain training with Heavy armor.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/heavily-armored/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Constitution.featPlusOne, AbilityScoreIncreases.Strength.featPlusOne],
        },
      })
    ),
  ],
})

export const HeavyArmorMaster = Traits.defineTrait('feat/heavy-armor-master', {
  name: 'Heavy Armor Master',
  description:
    '**Prerequisite:** Level 4+, Heavy Armor Training\n\n**Ability Score Increase:** Constitution or Strength +1 (maximum 20)\n\n**Damage Reduction:** while you wear Heavy armor, Bludgeoning, Piercing, and Slashing damage from attacks that hit you is reduced by your Proficiency Bonus.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/heavy-armor-master/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Constitution.featPlusOne, AbilityScoreIncreases.Strength.featPlusOne],
        },
      })
    ),
  ],
})

export const InspiringLeader = Traits.defineTrait('feat/inspiring-leader', {
  name: 'Inspiring Leader',
  description:
    '**Prerequisite:** Level 4+, Wisdom or Charisma 13+\n\n**Ability Score Increase:** Wisdom or Charisma +1 (maximum 20)\n\n**Bolstering Performance:** after a Short or Long Rest, you can rouse up to six allies (yourself included) within 30 feet with a speech, song, or dance. Each gains Temporary Hit Points equal to your character level + the modifier of the ability this feat increased.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/inspiring-leader/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Wisdom.featPlusOne, AbilityScoreIncreases.Charisma.featPlusOne],
        },
      })
    ),
  ],
})

export const KeenMind = Traits.defineTrait('feat/keen-mind', {
  name: 'Keen Mind',
  description:
    "**Prerequisite:** Level 4+, Intelligence 13+\n\n**Ability Score Increase:** Intelligence +1 (maximum 20)\n\n**Lore Knowledge:** pick Arcana, History, Investigation, Nature, or Religion. You gain proficiency in it, or Expertise if you're already proficient.\n\n**Quick Study:** you can take the Study action as a Bonus Action.",
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Intelligence, Attributes.modifier(Patches.sum(1)))],
})

export const LightlyArmored = Traits.defineTrait('feat/lightly-armored', {
  name: 'Lightly Armored',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Armor Training:** you gain training with Light armor and Shields.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/lightly-armored/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const MageSlayer = Traits.defineTrait('feat/mage-slayer', {
  name: 'Mage Slayer',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Concentration Breaker:** creatures you damage have Disadvantage on their saves to maintain Concentration.\n\n**Guarded Mind:** once per Short or Long Rest, you can turn a failed Intelligence, Wisdom, or Charisma save into a success.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/mage-slayer/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const MartialWeaponTraining = Traits.defineTrait('feat/martial-weapon-training', {
  name: 'Martial Weapon Training',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Weapon Proficiency:** you gain proficiency with Martial weapons.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/martial-weapon-training/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const MediumArmorMaster = Traits.defineTrait('feat/medium-armor-master', {
  name: 'Medium Armor Master',
  description:
    '**Prerequisite:** Level 4+, Medium Armor Training\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Dexterous Wearer:** in Medium armor, you can add up to 3 (instead of 2) from Dexterity to your AC if your Dexterity is 16 or higher.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/medium-armor-master/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const ModeratelyArmored = Traits.defineTrait('feat/moderately-armored', {
  name: 'Moderately Armored',
  description:
    '**Prerequisite:** Level 4+, Light Armor Training\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Armor Training:** you gain training with Medium armor.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/moderately-armored/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const MountedCombatant = Traits.defineTrait('feat/mounted-combatant', {
  name: 'Mounted Combatant',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength, Dexterity, or Wisdom +1 (maximum 20)\n\n**Mounted Strike:** while mounted, you have Advantage on attacks against unmounted creatures within 5 feet of your mount that are smaller than it.\n\n**Leap Aside:** while you ride it and neither of you is Incapacitated, your mount takes no damage on a successful Dexterity save for half damage, and only half on a failure.\n\n**Veer:** while mounted, you can redirect an attack that hits your mount to hit you instead.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/mounted-combatant/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Strength.featPlusOne,
            AbilityScoreIncreases.Dexterity.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Observant = Traits.defineTrait('feat/observant', {
  name: 'Observant',
  description:
    "**Prerequisite:** Level 4+, Intelligence or Wisdom 13+\n\n**Ability Score Increase:** Intelligence or Wisdom +1 (maximum 20)\n\n**Keen Observer:** pick Insight, Investigation, or Perception. You gain proficiency in it, or Expertise if you're already proficient.\n\n**Quick Search:** you can take the Search action as a Bonus Action.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/observant/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Intelligence.featPlusOne, AbilityScoreIncreases.Wisdom.featPlusOne],
        },
      })
    ),
  ],
})

export const Piercer = Traits.defineTrait('feat/piercer', {
  name: 'Piercer',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Puncture:** once per turn, when you deal Piercing damage with an attack, you can reroll one damage die and must use the new result.\n\n**Enhanced Critical:** Piercing Critical Hits roll one extra damage die.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/piercer/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const Poisoner = Traits.defineTrait('feat/poisoner', {
  name: 'Poisoner',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Dexterity or Intelligence +1 (maximum 20)\n\n**Potent Poison:** your Poison damage ignores Resistance to Poison.\n\n**Brew Poison:** you gain proficiency with the Poisoner's Kit. An hour's work and 50 GP of materials makes doses equal to your Proficiency Bonus, which you can coat a weapon or ammunition with as a Bonus Action (lasting 1 minute or until it deals damage). A creature it damages must pass a Constitution save (DC 8 + the increased ability's modifier + Proficiency Bonus) or take 2d8 Poison damage and be Poisoned until the end of your next turn.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/poisoner/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Dexterity.featPlusOne, AbilityScoreIncreases.Intelligence.featPlusOne],
        },
      })
    ),
    Effects.gainTrait(Tools.PoisonersKit),
  ],
})

export const PolearmMaster = Traits.defineTrait('feat/polearm-master', {
  name: 'Polearm Master',
  description:
    '**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Dexterity or Strength +1 (maximum 20)\n\n**Pole Strike:** after you take the Attack action with a Quarterstaff, Spear, or Heavy Reach weapon, you can attack with its butt end as a Bonus Action, dealing 1d4 Bludgeoning damage.\n\n**Reactive Strike:** while holding one of those weapons, you can use your Reaction to attack a creature that enters your reach.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/polearm-master/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Dexterity.featPlusOne, AbilityScoreIncreases.Strength.featPlusOne],
        },
      })
    ),
  ],
})

export const Resilient = Traits.defineTrait('feat/resilient', {
  name: 'Resilient',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** one ability you lack saving throw proficiency in +1 (maximum 20)\n\n**Saving Throw Proficiency:** you gain saving throw proficiency with that ability.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/resilient/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: AbilityScoreIncreases.AllAbilityScores.map((it) => it.featPlusOne),
        },
      })
    ),
  ],
})

export const RitualCaster = Traits.defineTrait('feat/ritual-caster', {
  name: 'Ritual Caster',
  description:
    '**Prerequisite:** Level 4+, Intelligence, Wisdom, or Charisma 13+\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Ritual Spells:** you always have a number of level 1 Ritual spells prepared equal to your Proficiency Bonus, gaining another whenever it increases. You can cast them with your spell slots, using the ability this feat increased.\n\n**Quick Ritual:** once per Long Rest, you can cast a prepared Ritual spell at its normal casting time without using a spell slot.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/ritual-caster/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Sentinel = Traits.defineTrait('feat/sentinel', {
  name: 'Sentinel',
  description:
    '**Prerequisite:** Level 4+, Strength or Dexterity 13+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Guardian:** when a creature within 5 feet of you Disengages or attacks someone other than you, you can make an Opportunity Attack against it.\n\n**Halt:** a creature you hit with an Opportunity Attack has its Speed reduced to 0 for the rest of the turn.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/sentinel/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const ShadowTouched = Traits.defineTrait('feat/shadow-touched', {
  name: 'Shadow-Touched',
  description:
    '**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Shadow Magic:** you always have Invisibility and one level 1 Illusion or Necromancy spell of your choice prepared. You can cast each once per Long Rest without a spell slot, or with your own slots, using the ability this feat increased.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/shadow-touched/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Sharpshooter = Traits.defineTrait('feat/sharpshooter', {
  name: 'Sharpshooter',
  description:
    "**Prerequisite:** Level 4+, Dexterity 13+\n\n**Ability Score Increase:** Dexterity +1 (maximum 20)\n\n**Bypass Cover:** your ranged weapon attacks ignore Half and Three-Quarters Cover.\n\n**Firing in Melee:** enemies within 5 feet don't give you Disadvantage on ranged weapon attacks.\n\n**Long Shots:** attacking at long range doesn't give you Disadvantage.",
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const ShieldMaster = Traits.defineTrait('feat/shield-master', {
  name: 'Shield Master',
  description:
    '**Prerequisite:** Level 4+, Shield Training\n\n**Ability Score Increase:** Strength +1 (maximum 20)\n\n**Shield Bash:** once per turn, when you hit a creature within 5 feet with a melee weapon as part of the Attack action, you can bash it with your Shield. It must pass a Strength save (DC 8 + your Strength modifier + Proficiency Bonus) or be pushed 5 feet or knocked Prone (your choice).\n\n**Interpose Shield:** while holding a Shield, when you succeed on a Dexterity save for half damage, you can use your Reaction to take none.',
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Strength, Attributes.modifier(Patches.sum(1)))],
})

export const SelectSkillExpertProficiency = CharacterOptions.selectTraitOption('feat/skill-expert/select-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
  },
})

export const SelectSkillExpertExpertise = CharacterOptions.selectTraitOption('feat/skill-expert/select-expertise', {
  name: 'Skill Expertise',
  filter: {
    tags: [SkillExpertise.SkillExpertise],
  },
})

export const SkillExpert = Traits.defineTrait('feat/skill-expert', {
  name: 'Skill Expert',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** one ability score of your choice +1 (maximum 20)\n\n**Skill Proficiency:** you gain proficiency in one skill of your choice.\n\n**Expertise:** you gain Expertise in one skill you're proficient in but don't already have Expertise in.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/skill-expert/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: AbilityScoreIncreases.AllAbilityScores.map((it) => it.featPlusOne),
        },
      })
    ),
    Effects.gainCharacterOption(SelectSkillExpertProficiency),
    Effects.gainCharacterOption(SelectSkillExpertExpertise),
  ],
})

export const Skulker = Traits.defineTrait('feat/skulker', {
  name: 'Skulker',
  description:
    "**Prerequisite:** Level 4+, Dexterity 13+\n\n**Ability Score Increase:** Dexterity +1 (maximum 20)\n\n**Blindsight:** you have Blindsight out to 10 feet.\n\n**Fog of War:** in combat, you have Advantage on Dexterity (Stealth) checks made to Hide.\n\n**Sniper:** missing an attack while hidden doesn't give away your position.",
  tags: [Feat],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.Dexterity, Attributes.modifier(Patches.sum(1)))],
})

export const Slasher = Traits.defineTrait('feat/slasher', {
  name: 'Slasher',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Hamstring:** once per turn, when you deal Slashing damage with an attack, you can reduce the target's Speed by 10 feet until the start of your next turn.\n\n**Enhanced Critical:** a creature you hit with a Slashing Critical Hit has Disadvantage on its attacks until the start of your next turn.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/slasher/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
  ],
})

export const Speedy = Traits.defineTrait('feat/speedy', {
  name: 'Speedy',
  description:
    '**Prerequisite:** Level 4+, Dexterity or Constitution 13+\n\n**Ability Score Increase:** Dexterity or Constitution +1 (maximum 20)\n\n**Speed Increase:** your Speed increases by 10 feet.\n\n**Dash over Difficult Terrain:** after you Dash, Difficult Terrain costs no extra movement for the rest of the turn.\n\n**Agile Movement:** Opportunity Attacks against you have Disadvantage.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/speedy/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Dexterity.featPlusOne, AbilityScoreIncreases.Constitution.featPlusOne],
        },
      })
    ),
  ],
})

export const SpellSniper = Traits.defineTrait('feat/spell-sniper', {
  name: 'Spell Sniper',
  description:
    "**Prerequisite:** Level 4+, Spellcasting or Pact Magic Feature\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Bypass Cover:** your spell attacks ignore Half and Three-Quarters Cover.\n\n**Casting in Melee:** enemies within 5 feet don't give you Disadvantage on spell attacks.\n\n**Increased Range:** spells that need an attack roll and have a range of 10 feet or more gain 60 feet of range.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/spell-sniper/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Telekinetic = Traits.defineTrait('feat/telekinetic', {
  name: 'Telekinetic',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Minor Telekinesis:** you learn Mage Hand. You can cast it without Verbal or Somatic components, make the hand Invisible, and extend its range by 30 feet.\n\n**Telekinetic Shove:** as a Bonus Action, you can force a creature you can see within 30 feet to pass a Strength save (DC 8 + the increased ability's modifier + Proficiency Bonus) or be moved 5 feet toward or away from you.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/telekinetic/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const Telepathic = Traits.defineTrait('feat/telepathic', {
  name: 'Telepathic',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Telepathic Utterance:** you can speak telepathically to a creature you can see within 60 feet, in a language you know. It understands only if it knows the language, and it can't reply the same way.\n\n**Detect Thoughts:** you always have it prepared, and you can cast it once per Long Rest without a spell slot or components, or with your own slots.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/telepathic/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const WarCaster = Traits.defineTrait('feat/war-caster', {
  name: 'War Caster',
  description:
    '**Prerequisite:** Level 4+, Spellcasting or Pact Magic Feature\n\n**Ability Score Increase:** Intelligence, Wisdom, or Charisma +1 (maximum 20)\n\n**Concentration:** you have Advantage on Constitution saves to maintain Concentration.\n\n**Reactive Spell:** when a creature leaving your reach provokes an Opportunity Attack, you can instead cast a one-action spell that targets only that creature.\n\n**Somatic Components:** you can perform Somatic components with weapons or a Shield in your hands.',
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/war-caster/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [
            AbilityScoreIncreases.Intelligence.featPlusOne,
            AbilityScoreIncreases.Wisdom.featPlusOne,
            AbilityScoreIncreases.Charisma.featPlusOne,
          ],
        },
      })
    ),
  ],
})

export const WeaponMaster = Traits.defineTrait('feat/weapon-master', {
  name: 'Weapon Master',
  description:
    "**Prerequisite:** Level 4+\n\n**Ability Score Increase:** Strength or Dexterity +1 (maximum 20)\n\n**Mastery Property:** you can use the mastery property of one kind of Simple or Martial weapon you're proficient with, and can change the kind after a Long Rest.",
  tags: [Feat],
  effects: [
    Effects.gainCharacterOption(
      CharacterOptions.selectTraitOption('feat/weapon-master/ability-score', {
        name: 'Ability Score +1',
        filter: {
          specificOptions: [AbilityScoreIncreases.Strength.featPlusOne, AbilityScoreIncreases.Dexterity.featPlusOne],
        },
      })
    ),
    // One more kind of weapon for Weapon Mastery
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

export const Alert = Traits.defineTrait('feat/alert', {
  name: 'Alert',
  description:
    '**Origin Feat**\n\n**Initiative Proficiency:** you add your Proficiency Bonus to Initiative rolls.\n\n**Initiative Swap:** right after you roll Initiative, you can swap your Initiative with a willing ally in the same combat, as long as neither of you is Incapacitated.',
  tags: [OriginFeat],
  effects: [],
})

export const Crafter = Traits.defineTrait('feat/crafter', {
  name: 'Crafter',
  description:
    "**Origin Feat**\n\n**Tool Proficiency:** proficiency with three different Artisan's Tools of your choice.\n\n**Discount:** you get a 20% discount when buying nonmagical items.\n\n**Fast Crafting:** when you finish a Long Rest, you can craft one piece of gear using Artisan's Tools you're proficient with. It lasts until you finish another Long Rest.",
  tags: [OriginFeat],
  effects: [
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
  ],
})

export const Healer = Traits.defineTrait('feat/healer', {
  name: 'Healer',
  description:
    "**Origin Feat**\n\n**Battle Medic:** with a Healer's Kit, you can take the Utilize action and expend one of its uses to tend a creature within 5 feet. It can spend one of its Hit Point Dice; you roll it, and it regains that many Hit Points plus your Proficiency Bonus.\n\n**Healing Rerolls:** when you roll dice for Hit Points restored by a spell or this feat, you can reroll any 1s and must use the new roll.",
  tags: [OriginFeat],
  effects: [],
})

export const Lucky = Traits.defineTrait('feat/lucky', {
  name: 'Lucky',
  description:
    '**Origin Feat**\n\n**Luck Points:** you have Luck Points equal to your Proficiency Bonus, and regain them when you finish a Long Rest.\n\n**Advantage:** spend 1 Luck Point to give yourself Advantage on a D20 Test.\n\n**Disadvantage:** when a creature rolls a d20 for an attack against you, spend 1 Luck Point to impose Disadvantage on it.',
  tags: [OriginFeat],
  effects: [],
})

// The spellcasting ability a Magic Initiate feat uses. A character can take the feat more than once (with a different spell list each
// time), choosing again each time, so these can be chosen more than once.
export const MagicInitiateIntelligence = Traits.defineTrait('feat/magic-initiate/spellcasting-ability/intelligence', {
  name: 'Intelligence',
  description: 'Intelligence is your spellcasting ability for these spells.',
  repeatable: true,
  effects: [],
})

export const MagicInitiateWisdom = Traits.defineTrait('feat/magic-initiate/spellcasting-ability/wisdom', {
  name: 'Wisdom',
  description: 'Wisdom is your spellcasting ability for these spells.',
  repeatable: true,
  effects: [],
})

export const MagicInitiateCharisma = Traits.defineTrait('feat/magic-initiate/spellcasting-ability/charisma', {
  name: 'Charisma',
  description: 'Charisma is your spellcasting ability for these spells.',
  repeatable: true,
  effects: [],
})

const MagicInitiateSpellcastingAbilities = [MagicInitiateIntelligence, MagicInitiateWisdom, MagicInitiateCharisma]

// Two Cleric cantrips and one level 1 Cleric spell, always prepared (FUTURE casting the spell once per Long Rest without a slot isn't
// tracked yet). Each Magic Initiate variant has its own options, so taking more than one variant keeps their choices apart.
export const SelectMagicInitiateClericCantrip = CharacterOptions.selectAbilityOption('feat/magic-initiate-cleric/select-cantrip', {
  name: 'Cantrips',
  filter: {
    tags: [Cleric, Spells.Cantrip],
  },
})

export const SelectMagicInitiateClericSpell = CharacterOptions.selectAbilityOption('feat/magic-initiate-cleric/select-spell', {
  name: 'Level 1 Spell',
  filter: {
    tags: [Cleric, Spells.Rank1],
  },
})

export const SelectMagicInitiateClericSpellcastingAbility = CharacterOptions.selectTraitOption(
  'feat/magic-initiate-cleric/select-spellcasting-ability',
  { name: 'Spellcasting Ability', filter: { specificOptions: MagicInitiateSpellcastingAbilities } }
)

export const MagicInitiateCleric = Traits.defineTrait('feat/magic-initiate-cleric', {
  name: 'Magic Initiate (Cleric)',
  description:
    '**Origin Feat**\n\n**Two Cantrips:** you learn two cantrips from the Cleric spell list.\n\n**Level 1 Spell:** you learn one level 1 Cleric spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.\n\n**Spellcasting Ability:** Intelligence, Wisdom, or Charisma (chosen when you take this feat).\n\n**Spell Change:** whenever you gain a level, you can replace one of these spells with another of the same level from the Cleric list.\n\n**Repeatable:** you can take this feat more than once, choosing a different spell list each time.',
  tags: [OriginFeat],
  effects: [
    Effects.gainCharacterOption(SelectMagicInitiateClericCantrip),
    Effects.gainCharacterOption(SelectMagicInitiateClericCantrip),
    Effects.gainCharacterOption(SelectMagicInitiateClericSpell),
    Effects.gainCharacterOption(SelectMagicInitiateClericSpellcastingAbility),
  ],
})

export const MagicInitiateDruid = Traits.defineTrait('feat/magic-initiate-druid', {
  name: 'Magic Initiate (Druid)',
  description:
    '**Origin Feat**\n\n**Two Cantrips:** you learn two cantrips from the Druid spell list.\n\n**Level 1 Spell:** you learn one level 1 Druid spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.\n\n**Spellcasting Ability:** Intelligence, Wisdom, or Charisma (chosen when you take this feat).\n\n**Spell Change:** whenever you gain a level, you can replace one of these spells with another of the same level from the Druid list.\n\n**Repeatable:** you can take this feat more than once, choosing a different spell list each time.',
  tags: [OriginFeat],
  effects: [],
})

export const MagicInitiateWizard = Traits.defineTrait('feat/magic-initiate-wizard', {
  name: 'Magic Initiate (Wizard)',
  description:
    '**Origin Feat**\n\n**Two Cantrips:** you learn two cantrips from the Wizard spell list.\n\n**Level 1 Spell:** you learn one level 1 Wizard spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.\n\n**Spellcasting Ability:** Intelligence, Wisdom, or Charisma (chosen when you take this feat).\n\n**Spell Change:** whenever you gain a level, you can replace one of these spells with another of the same level from the Wizard list.\n\n**Repeatable:** you can take this feat more than once, choosing a different spell list each time.',
  tags: [OriginFeat],
  effects: [],
})

export const Musician = Traits.defineTrait('feat/musician', {
  name: 'Musician',
  description:
    "**Origin Feat**\n\n**Instrument Training:** proficiency with three Musical Instruments of your choice.\n\n**Encouraging Song:** as you finish a Short or Long Rest, you can play a song on an instrument you're proficient with and give Heroic Inspiration to allies who hear it, up to your Proficiency Bonus.",
  tags: [OriginFeat],
  effects: [
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
  ],
})

export const SavageAttacker = Traits.defineTrait('feat/savage-attacker', {
  name: 'Savage Attacker',
  description:
    "**Origin Feat**\n\nOnce per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll.",
  tags: [OriginFeat],
  effects: [],
})

// Any skill or tool; skills and tools the character already has aren't offered
export const SelectSkilledProficiency = CharacterOptions.selectTraitOption('feat/skilled/select-proficiency', {
  name: 'Skilled',
  filter: {
    tags: [[SkillProficiencies.SkillProficiency, ...Tools.AllTools]],
  },
})

export const Skilled = Traits.defineTrait('feat/skilled', {
  name: 'Skilled',
  description:
    '**Origin Feat**\n\nYou gain proficiency in any combination of three skills or tools of your choice.\n\n**Repeatable:** you can take this feat more than once.',
  tags: [OriginFeat],
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(SelectSkilledProficiency),
    Effects.gainCharacterOption(SelectSkilledProficiency),
    Effects.gainCharacterOption(SelectSkilledProficiency),
  ],
})

export const TavernBrawler = Traits.defineTrait('feat/tavern-brawler', {
  name: 'Tavern Brawler',
  description:
    '**Origin Feat**\n\n**Enhanced Unarmed Strike:** your Unarmed Strikes can deal 1d4 + your Strength modifier Bludgeoning damage.\n\n**Damage Rerolls:** when you roll damage for an Unarmed Strike, you can reroll any 1s and must use the new roll.\n\n**Improvised Weaponry:** you have proficiency with improvised weapons.\n\n**Push:** once per turn, when you hit a creature with an Unarmed Strike as part of the Attack action, you can push it 5 feet away.',
  tags: [OriginFeat],
  effects: [],
})

export const Tough = Traits.defineTrait('feat/tough', {
  name: 'Tough',
  description:
    '**Origin Feat**\n\nYour Hit Point maximum increases by twice your character level when you gain this feat, and by 2 more each time you gain a level afterward.',
  tags: [OriginFeat],
  effects: [],
})
