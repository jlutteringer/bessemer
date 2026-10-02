import { Archetypes, Effects, Traits } from '@simulacrum/common'
import { CharacterOptions } from '@simulacrum/common/character'
import * as AbilityScoreIncreases from '@simulacrum/rulesets/dnd-5e/archetype/ability-score-increase'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as ArtisansTools from '@simulacrum/rulesets/dnd-5e/archetype/artisans-tools'
import * as Tools from '@simulacrum/rulesets/dnd-5e/archetype/tool'
import { WeaponMasteryLoadout } from '@simulacrum/rulesets/dnd-5e/loadout'

// FUTURE these are stubs: apart from ability score increases, feats' own choices and benefits aren't modelled yet
export const Feat = Archetypes.defineArchetype('feat', { name: 'Feat' })

// Origin feats (gained from a Background, or a Human's Versatile trait) aren't tagged as Feat, so SelectOriginFeat offers only them.
// A trait matches a filter when all its archetypes are in the filter, so SelectFeat lists both to offer every feat
export const OriginFeat = Archetypes.defineArchetype('feat/origin', { name: 'Origin Feat' })

export const SelectFeat = CharacterOptions.selectTraitOption('feat/select', { archetypes: [Feat, OriginFeat] }, 'Feat')

export const SelectOriginFeat = CharacterOptions.selectTraitOption('feat/select-origin', { archetypes: [OriginFeat] })

export const AbilityScoreImprovement = Traits.defineTrait('feat/ability-score-improvement', {
  name: 'Ability Score Improvement',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p>Raise one ability score by 2, or two ability scores by 1 each, to a maximum of 20. You can take this feat more than once.</p>',
  archetypes: [Feat],
  // Picking the same ability score for both +1s gives the +2
  repeatable: true,
  effects: [
    AbilityScoreIncreases.forFeat('feat/ability-score-improvement', AbilityScoreIncreases.AllAbilityScores, 'ability-score-1'),
    AbilityScoreIncreases.forFeat('feat/ability-score-improvement', AbilityScoreIncreases.AllAbilityScores, 'ability-score-2'),
  ],
})

export const Actor = Traits.defineTrait('feat/actor', {
  name: 'Actor',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Charisma 13+</p><p><strong>Ability Score Increase:</strong> Charisma +1 (maximum 20)</p><p><strong>Impersonation:</strong> while disguised as someone, real or invented, you have Advantage on Charisma (Deception or Performance) checks to pass as them.</p><p><strong>Mimicry:</strong> you can imitate voices and other sounds. Listeners need a Wisdom (Insight) check against DC 8 + your Charisma modifier + Proficiency Bonus to tell they're fake.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/actor', [AbilityScoreIncreases.Charisma])],
})

export const Athlete = Traits.defineTrait('feat/athlete', {
  name: 'Athlete',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Climb Speed:</strong> you gain a Climb Speed equal to your Speed.</p><p><strong>Hop Up:</strong> standing up from Prone costs only 5 feet of movement.</p><p><strong>Jumping:</strong> a running Long or High Jump needs only a 5-foot run-up.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/athlete', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const Charger = Traits.defineTrait('feat/charger', {
  name: 'Charger',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Improved Dash:</strong> your Speed is 10 feet higher when you Dash.</p><p><strong>Charge Attack:</strong> once per turn, if you move at least 10 feet straight toward a target right before hitting it with a melee attack as part of the Attack action, either add 1d8 to the damage or push it up to 10 feet (if it's no more than one size larger than you).</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/charger', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const Chef = Traits.defineTrait('feat/chef', {
  name: 'Chef',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Constitution or Wisdom +1 (maximum 20)</p><p><strong>Cook's Utensils:</strong> you gain proficiency with them.</p><p><strong>Replenishing Meal:</strong> during a Short Rest, cook for up to 4 + your Proficiency Bonus creatures. Anyone who eats and spends Hit Dice regains an extra 1d8 Hit Points.</p><p><strong>Bolstering Treats:</strong> with an hour's work or after a Long Rest, make treats equal to your Proficiency Bonus that last 8 hours. Eating one as a Bonus Action grants Temporary Hit Points equal to your Proficiency Bonus.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/chef', [AbilityScoreIncreases.Constitution, AbilityScoreIncreases.Wisdom]),
    Effects.gainTrait(ArtisansTools.CooksUtensils),
  ],
})

export const CrossbowExpert = Traits.defineTrait('feat/crossbow-expert', {
  name: 'Crossbow Expert',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Dexterity +1 (maximum 20)</p><p><strong>Ignore Loading:</strong> you ignore the Loading property of crossbows and can reload one without a free hand.</p><p><strong>Firing in Melee:</strong> enemies within 5 feet don't give you Disadvantage on crossbow attacks.</p><p><strong>Dual Wielding:</strong> the extra Light-property attack with a Light crossbow adds your ability modifier to its damage.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/crossbow-expert', [AbilityScoreIncreases.Dexterity])],
})

export const Crusher = Traits.defineTrait('feat/crusher', {
  name: 'Crusher',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Constitution +1 (maximum 20)</p><p><strong>Push:</strong> once per turn, when you hit a creature no more than one size larger than you with Bludgeoning damage, you can shove it 5 feet.</p><p><strong>Enhanced Critical:</strong> after you score a Bludgeoning Critical Hit on a creature, attacks against it have Advantage until the start of your next turn.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/crusher', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Constitution])],
})

export const DefensiveDuelist = Traits.defineTrait('feat/defensive-duelist', {
  name: 'Defensive Duelist',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Dexterity +1 (maximum 20)</p><p><strong>Parry:</strong> while holding a Finesse weapon, when a melee attack hits you, you can use your Reaction to add your Proficiency Bonus to your AC against melee attacks until the start of your next turn, which may turn the hit into a miss.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/defensive-duelist', [AbilityScoreIncreases.Dexterity])],
})

export const DualWielder = Traits.defineTrait('feat/dual-wielder', {
  name: 'Dual Wielder',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Enhanced Dual Wielding:</strong> after attacking with a Light weapon as part of the Attack action, you can make a Bonus Action attack with a different melee weapon that isn't Two-Handed, without adding a positive ability modifier to its damage.</p><p><strong>Quick Draw:</strong> you can draw or stow two non-Two-Handed weapons at once.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/dual-wielder', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const Durable = Traits.defineTrait('feat/durable', {
  name: 'Durable',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Constitution +1 (maximum 20)</p><p><strong>Defy Death:</strong> you have Advantage on Death Saving Throws.</p><p><strong>Speedy Recovery:</strong> as a Bonus Action, you can spend and roll a Hit Point Die to regain that many Hit Points.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/durable', [AbilityScoreIncreases.Constitution])],
})

export const ElementalAdeptAcid = Traits.defineTrait('feat/elemental-adept/acid', {
  name: 'Acid',
  description:
    '<p>Your spells ignore Resistance to Acid damage, and when you roll damage for a spell that deals Acid damage, you can treat any 1 on a damage die as a 2.</p>',
  effects: [],
})

export const ElementalAdeptCold = Traits.defineTrait('feat/elemental-adept/cold', {
  name: 'Cold',
  description:
    '<p>Your spells ignore Resistance to Cold damage, and when you roll damage for a spell that deals Cold damage, you can treat any 1 on a damage die as a 2.</p>',
  effects: [],
})

export const ElementalAdeptFire = Traits.defineTrait('feat/elemental-adept/fire', {
  name: 'Fire',
  description:
    '<p>Your spells ignore Resistance to Fire damage, and when you roll damage for a spell that deals Fire damage, you can treat any 1 on a damage die as a 2.</p>',
  effects: [],
})

export const ElementalAdeptLightning = Traits.defineTrait('feat/elemental-adept/lightning', {
  name: 'Lightning',
  description:
    '<p>Your spells ignore Resistance to Lightning damage, and when you roll damage for a spell that deals Lightning damage, you can treat any 1 on a damage die as a 2.</p>',
  effects: [],
})

export const ElementalAdeptThunder = Traits.defineTrait('feat/elemental-adept/thunder', {
  name: 'Thunder',
  description:
    '<p>Your spells ignore Resistance to Thunder damage, and when you roll damage for a spell that deals Thunder damage, you can treat any 1 on a damage die as a 2.</p>',
  effects: [],
})

// Elemental Adept can be taken more than once, but its damage types can't, so each time offers a type the character doesn't have yet
export const SelectElementalAdeptDamageType = CharacterOptions.selectTraitOption(
  'feat/elemental-adept/select-damage-type',
  { specificOptions: [ElementalAdeptAcid, ElementalAdeptCold, ElementalAdeptFire, ElementalAdeptLightning, ElementalAdeptThunder] },
  'Energy Mastery'
)

export const ElementalAdept = Traits.defineTrait('feat/elemental-adept', {
  name: 'Elemental Adept',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Spellcasting or Pact Magic Feature</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Energy Mastery:</strong> pick Acid, Cold, Fire, Lightning, or Thunder. Your spells ignore Resistance to that type, and 1s on their damage dice of that type count as 2s.</p><p>You can take this feat more than once, choosing a different type each time.</p>',
  archetypes: [Feat],
  repeatable: true,
  effects: [
    Effects.gainCharacterOption(SelectElementalAdeptDamageType),
    AbilityScoreIncreases.forFeat('feat/elemental-adept', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const FeyTouched = Traits.defineTrait('feat/fey-touched', {
  name: 'Fey-Touched',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Fey Magic:</strong> you always have Misty Step and one level 1 Divination or Enchantment spell of your choice prepared. You can cast each once per Long Rest without a spell slot, or with your own slots, using the ability this feat increased.</p>',
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/fey-touched', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const Grappler = Traits.defineTrait('feat/grappler', {
  name: 'Grappler',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Punch and Grab:</strong> once per turn, when an Unarmed Strike hits as part of the Attack action, you can both deal damage and grapple.</p><p><strong>Attack Advantage:</strong> you have Advantage on attacks against creatures you're grappling.</p><p><strong>Fast Wrestler:</strong> moving a grappled creature your size or smaller costs no extra movement.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/grappler', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const GreatWeaponMaster = Traits.defineTrait('feat/great-weapon-master', {
  name: 'Great Weapon Master',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Strength 13+</p><p><strong>Ability Score Increase:</strong> Strength +1 (maximum 20)</p><p><strong>Heavy Weapon Mastery:</strong> when you hit with a Heavy weapon as part of the Attack action, you can deal extra damage equal to your Proficiency Bonus.</p><p><strong>Hew:</strong> right after you score a Critical Hit or drop a creature to 0 Hit Points with a melee weapon, you can attack again with it as a Bonus Action.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/great-weapon-master', [AbilityScoreIncreases.Strength])],
})

export const HeavilyArmored = Traits.defineTrait('feat/heavily-armored', {
  name: 'Heavily Armored',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Medium Armor Training</p><p><strong>Ability Score Increase:</strong> Constitution or Strength +1 (maximum 20)</p><p><strong>Armor Training:</strong> you gain training with Heavy armor.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/heavily-armored', [AbilityScoreIncreases.Constitution, AbilityScoreIncreases.Strength])],
})

export const HeavyArmorMaster = Traits.defineTrait('feat/heavy-armor-master', {
  name: 'Heavy Armor Master',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Heavy Armor Training</p><p><strong>Ability Score Increase:</strong> Constitution or Strength +1 (maximum 20)</p><p><strong>Damage Reduction:</strong> while you wear Heavy armor, Bludgeoning, Piercing, and Slashing damage from attacks that hit you is reduced by your Proficiency Bonus.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/heavy-armor-master', [AbilityScoreIncreases.Constitution, AbilityScoreIncreases.Strength])],
})

export const InspiringLeader = Traits.defineTrait('feat/inspiring-leader', {
  name: 'Inspiring Leader',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Wisdom or Charisma 13+</p><p><strong>Ability Score Increase:</strong> Wisdom or Charisma +1 (maximum 20)</p><p><strong>Bolstering Performance:</strong> after a Short or Long Rest, you can rouse up to six allies (yourself included) within 30 feet with a speech, song, or dance. Each gains Temporary Hit Points equal to your character level + the modifier of the ability this feat increased.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/inspiring-leader', [AbilityScoreIncreases.Wisdom, AbilityScoreIncreases.Charisma])],
})

export const KeenMind = Traits.defineTrait('feat/keen-mind', {
  name: 'Keen Mind',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Intelligence 13+</p><p><strong>Ability Score Increase:</strong> Intelligence +1 (maximum 20)</p><p><strong>Lore Knowledge:</strong> pick Arcana, History, Investigation, Nature, or Religion. You gain proficiency in it, or Expertise if you're already proficient.</p><p><strong>Quick Study:</strong> you can take the Study action as a Bonus Action.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/keen-mind', [AbilityScoreIncreases.Intelligence])],
})

export const LightlyArmored = Traits.defineTrait('feat/lightly-armored', {
  name: 'Lightly Armored',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Armor Training:</strong> you gain training with Light armor and Shields.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/lightly-armored', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const MageSlayer = Traits.defineTrait('feat/mage-slayer', {
  name: 'Mage Slayer',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Concentration Breaker:</strong> creatures you damage have Disadvantage on their saves to maintain Concentration.</p><p><strong>Guarded Mind:</strong> once per Short or Long Rest, you can turn a failed Intelligence, Wisdom, or Charisma save into a success.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/mage-slayer', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const MartialWeaponTraining = Traits.defineTrait('feat/martial-weapon-training', {
  name: 'Martial Weapon Training',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Weapon Proficiency:</strong> you gain proficiency with Martial weapons.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/martial-weapon-training', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const MediumArmorMaster = Traits.defineTrait('feat/medium-armor-master', {
  name: 'Medium Armor Master',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Medium Armor Training</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Dexterous Wearer:</strong> in Medium armor, you can add up to 3 (instead of 2) from Dexterity to your AC if your Dexterity is 16 or higher.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/medium-armor-master', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const ModeratelyArmored = Traits.defineTrait('feat/moderately-armored', {
  name: 'Moderately Armored',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Light Armor Training</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Armor Training:</strong> you gain training with Medium armor.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/moderately-armored', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const MountedCombatant = Traits.defineTrait('feat/mounted-combatant', {
  name: 'Mounted Combatant',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength, Dexterity, or Wisdom +1 (maximum 20)</p><p><strong>Mounted Strike:</strong> while mounted, you have Advantage on attacks against unmounted creatures within 5 feet of your mount that are smaller than it.</p><p><strong>Leap Aside:</strong> while you ride it and neither of you is Incapacitated, your mount takes no damage on a successful Dexterity save for half damage, and only half on a failure.</p><p><strong>Veer:</strong> while mounted, you can redirect an attack that hits your mount to hit you instead.</p>',
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/mounted-combatant', [
      AbilityScoreIncreases.Strength,
      AbilityScoreIncreases.Dexterity,
      AbilityScoreIncreases.Wisdom,
    ]),
  ],
})

export const Observant = Traits.defineTrait('feat/observant', {
  name: 'Observant',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Intelligence or Wisdom 13+</p><p><strong>Ability Score Increase:</strong> Intelligence or Wisdom +1 (maximum 20)</p><p><strong>Keen Observer:</strong> pick Insight, Investigation, or Perception. You gain proficiency in it, or Expertise if you're already proficient.</p><p><strong>Quick Search:</strong> you can take the Search action as a Bonus Action.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/observant', [AbilityScoreIncreases.Intelligence, AbilityScoreIncreases.Wisdom])],
})

export const Piercer = Traits.defineTrait('feat/piercer', {
  name: 'Piercer',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Puncture:</strong> once per turn, when you deal Piercing damage with an attack, you can reroll one damage die and must use the new result.</p><p><strong>Enhanced Critical:</strong> Piercing Critical Hits roll one extra damage die.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/piercer', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const Poisoner = Traits.defineTrait('feat/poisoner', {
  name: 'Poisoner',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Dexterity or Intelligence +1 (maximum 20)</p><p><strong>Potent Poison:</strong> your Poison damage ignores Resistance to Poison.</p><p><strong>Brew Poison:</strong> you gain proficiency with the Poisoner's Kit. An hour's work and 50 GP of materials makes doses equal to your Proficiency Bonus, which you can coat a weapon or ammunition with as a Bonus Action (lasting 1 minute or until it deals damage). A creature it damages must pass a Constitution save (DC 8 + the increased ability's modifier + Proficiency Bonus) or take 2d8 Poison damage and be Poisoned until the end of your next turn.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/poisoner', [AbilityScoreIncreases.Dexterity, AbilityScoreIncreases.Intelligence]),
    Effects.gainTrait(Tools.PoisonersKit),
  ],
})

export const PolearmMaster = Traits.defineTrait('feat/polearm-master', {
  name: 'Polearm Master',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Dexterity or Strength +1 (maximum 20)</p><p><strong>Pole Strike:</strong> after you take the Attack action with a Quarterstaff, Spear, or Heavy Reach weapon, you can attack with its butt end as a Bonus Action, dealing 1d4 Bludgeoning damage.</p><p><strong>Reactive Strike:</strong> while holding one of those weapons, you can use your Reaction to attack a creature that enters your reach.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/polearm-master', [AbilityScoreIncreases.Dexterity, AbilityScoreIncreases.Strength])],
})

export const Resilient = Traits.defineTrait('feat/resilient', {
  name: 'Resilient',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> one ability you lack saving throw proficiency in +1 (maximum 20)</p><p><strong>Saving Throw Proficiency:</strong> you gain saving throw proficiency with that ability.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/resilient', AbilityScoreIncreases.AllAbilityScores)],
})

export const RitualCaster = Traits.defineTrait('feat/ritual-caster', {
  name: 'Ritual Caster',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Intelligence, Wisdom, or Charisma 13+</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Ritual Spells:</strong> you always have a number of level 1 Ritual spells prepared equal to your Proficiency Bonus, gaining another whenever it increases. You can cast them with your spell slots, using the ability this feat increased.</p><p><strong>Quick Ritual:</strong> once per Long Rest, you can cast a prepared Ritual spell at its normal casting time without using a spell slot.</p>',
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/ritual-caster', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const Sentinel = Traits.defineTrait('feat/sentinel', {
  name: 'Sentinel',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Strength or Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Guardian:</strong> when a creature within 5 feet of you Disengages or attacks someone other than you, you can make an Opportunity Attack against it.</p><p><strong>Halt:</strong> a creature you hit with an Opportunity Attack has its Speed reduced to 0 for the rest of the turn.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/sentinel', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const ShadowTouched = Traits.defineTrait('feat/shadow-touched', {
  name: 'Shadow-Touched',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Shadow Magic:</strong> you always have Invisibility and one level 1 Illusion or Necromancy spell of your choice prepared. You can cast each once per Long Rest without a spell slot, or with your own slots, using the ability this feat increased.</p>',
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/shadow-touched', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const Sharpshooter = Traits.defineTrait('feat/sharpshooter', {
  name: 'Sharpshooter',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Dexterity +1 (maximum 20)</p><p><strong>Bypass Cover:</strong> your ranged weapon attacks ignore Half and Three-Quarters Cover.</p><p><strong>Firing in Melee:</strong> enemies within 5 feet don't give you Disadvantage on ranged weapon attacks.</p><p><strong>Long Shots:</strong> attacking at long range doesn't give you Disadvantage.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/sharpshooter', [AbilityScoreIncreases.Dexterity])],
})

export const ShieldMaster = Traits.defineTrait('feat/shield-master', {
  name: 'Shield Master',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Shield Training</p><p><strong>Ability Score Increase:</strong> Strength +1 (maximum 20)</p><p><strong>Shield Bash:</strong> once per turn, when you hit a creature within 5 feet with a melee weapon as part of the Attack action, you can bash it with your Shield. It must pass a Strength save (DC 8 + your Strength modifier + Proficiency Bonus) or be pushed 5 feet or knocked Prone (your choice).</p><p><strong>Interpose Shield:</strong> while holding a Shield, when you succeed on a Dexterity save for half damage, you can use your Reaction to take none.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/shield-master', [AbilityScoreIncreases.Strength])],
})

export const SkillExpert = Traits.defineTrait('feat/skill-expert', {
  name: 'Skill Expert',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> one ability score of your choice +1 (maximum 20)</p><p><strong>Skill Proficiency:</strong> you gain proficiency in one skill of your choice.</p><p><strong>Expertise:</strong> you gain Expertise in one skill you're proficient in but don't already have Expertise in.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/skill-expert', AbilityScoreIncreases.AllAbilityScores)],
})

export const Skulker = Traits.defineTrait('feat/skulker', {
  name: 'Skulker',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Dexterity 13+</p><p><strong>Ability Score Increase:</strong> Dexterity +1 (maximum 20)</p><p><strong>Blindsight:</strong> you have Blindsight out to 10 feet.</p><p><strong>Fog of War:</strong> in combat, you have Advantage on Dexterity (Stealth) checks made to Hide.</p><p><strong>Sniper:</strong> missing an attack while hidden doesn't give away your position.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/skulker', [AbilityScoreIncreases.Dexterity])],
})

export const Slasher = Traits.defineTrait('feat/slasher', {
  name: 'Slasher',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Hamstring:</strong> once per turn, when you deal Slashing damage with an attack, you can reduce the target's Speed by 10 feet until the start of your next turn.</p><p><strong>Enhanced Critical:</strong> a creature you hit with a Slashing Critical Hit has Disadvantage on its attacks until the start of your next turn.</p>",
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/slasher', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity])],
})

export const Speedy = Traits.defineTrait('feat/speedy', {
  name: 'Speedy',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Dexterity or Constitution 13+</p><p><strong>Ability Score Increase:</strong> Dexterity or Constitution +1 (maximum 20)</p><p><strong>Speed Increase:</strong> your Speed increases by 10 feet.</p><p><strong>Dash over Difficult Terrain:</strong> after you Dash, Difficult Terrain costs no extra movement for the rest of the turn.</p><p><strong>Agile Movement:</strong> Opportunity Attacks against you have Disadvantage.</p>',
  archetypes: [Feat],
  effects: [AbilityScoreIncreases.forFeat('feat/speedy', [AbilityScoreIncreases.Dexterity, AbilityScoreIncreases.Constitution])],
})

export const SpellSniper = Traits.defineTrait('feat/spell-sniper', {
  name: 'Spell Sniper',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+, Spellcasting or Pact Magic Feature</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Bypass Cover:</strong> your spell attacks ignore Half and Three-Quarters Cover.</p><p><strong>Casting in Melee:</strong> enemies within 5 feet don't give you Disadvantage on spell attacks.</p><p><strong>Increased Range:</strong> spells that need an attack roll and have a range of 10 feet or more gain 60 feet of range.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/spell-sniper', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const Telekinetic = Traits.defineTrait('feat/telekinetic', {
  name: 'Telekinetic',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Minor Telekinesis:</strong> you learn Mage Hand. You can cast it without Verbal or Somatic components, make the hand Invisible, and extend its range by 30 feet.</p><p><strong>Telekinetic Shove:</strong> as a Bonus Action, you can force a creature you can see within 30 feet to pass a Strength save (DC 8 + the increased ability's modifier + Proficiency Bonus) or be moved 5 feet toward or away from you.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/telekinetic', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const Telepathic = Traits.defineTrait('feat/telepathic', {
  name: 'Telepathic',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Telepathic Utterance:</strong> you can speak telepathically to a creature you can see within 60 feet, in a language you know. It understands only if it knows the language, and it can't reply the same way.</p><p><strong>Detect Thoughts:</strong> you always have it prepared, and you can cast it once per Long Rest without a spell slot or components, or with your own slots.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/telepathic', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const WarCaster = Traits.defineTrait('feat/war-caster', {
  name: 'War Caster',
  description:
    '<p><strong>Prerequisite:</strong> Level 4+, Spellcasting or Pact Magic Feature</p><p><strong>Ability Score Increase:</strong> Intelligence, Wisdom, or Charisma +1 (maximum 20)</p><p><strong>Concentration:</strong> you have Advantage on Constitution saves to maintain Concentration.</p><p><strong>Reactive Spell:</strong> when a creature leaving your reach provokes an Opportunity Attack, you can instead cast a one-action spell that targets only that creature.</p><p><strong>Somatic Components:</strong> you can perform Somatic components with weapons or a Shield in your hands.</p>',
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/war-caster', [
      AbilityScoreIncreases.Intelligence,
      AbilityScoreIncreases.Wisdom,
      AbilityScoreIncreases.Charisma,
    ]),
  ],
})

export const WeaponMaster = Traits.defineTrait('feat/weapon-master', {
  name: 'Weapon Master',
  description:
    "<p><strong>Prerequisite:</strong> Level 4+</p><p><strong>Ability Score Increase:</strong> Strength or Dexterity +1 (maximum 20)</p><p><strong>Mastery Property:</strong> you can use the mastery property of one kind of Simple or Martial weapon you're proficient with, and can change the kind after a Long Rest.</p>",
  archetypes: [Feat],
  effects: [
    AbilityScoreIncreases.forFeat('feat/weapon-master', [AbilityScoreIncreases.Strength, AbilityScoreIncreases.Dexterity]),
    // One more kind of weapon for Weapon Mastery
    Effects.gainLoadoutSlot(WeaponMasteryLoadout),
  ],
})

export const Alert = Traits.defineTrait('feat/alert', {
  name: 'Alert',
  description:
    '<p><strong>Origin Feat</strong></p><p><strong>Initiative Proficiency:</strong> you add your Proficiency Bonus to Initiative rolls.</p><p><strong>Initiative Swap:</strong> right after you roll Initiative, you can swap your Initiative with a willing ally in the same combat, as long as neither of you is Incapacitated.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const Crafter = Traits.defineTrait('feat/crafter', {
  name: 'Crafter',
  description:
    "<p><strong>Origin Feat</strong></p><p><strong>Tool Proficiency:</strong> proficiency with three different Artisan's Tools of your choice.</p><p><strong>Discount:</strong> you get a 20% discount when buying nonmagical items.</p><p><strong>Fast Crafting:</strong> when you finish a Long Rest, you can craft one piece of gear using Artisan's Tools you're proficient with. It lasts until you finish another Long Rest.</p>",
  archetypes: [OriginFeat],
  effects: [
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
    Effects.gainCharacterOption(ArtisansTools.SelectArtisansTools),
  ],
})

export const Healer = Traits.defineTrait('feat/healer', {
  name: 'Healer',
  description:
    "<p><strong>Origin Feat</strong></p><p><strong>Battle Medic:</strong> with a Healer's Kit, you can take the Utilize action and expend one of its uses to tend a creature within 5 feet. It can spend one of its Hit Point Dice; you roll it, and it regains that many Hit Points plus your Proficiency Bonus.</p><p><strong>Healing Rerolls:</strong> when you roll dice for Hit Points restored by a spell or this feat, you can reroll any 1s and must use the new roll.</p>",
  archetypes: [OriginFeat],
  effects: [],
})

export const Lucky = Traits.defineTrait('feat/lucky', {
  name: 'Lucky',
  description:
    '<p><strong>Origin Feat</strong></p><p><strong>Luck Points:</strong> you have Luck Points equal to your Proficiency Bonus, and regain them when you finish a Long Rest.</p><p><strong>Advantage:</strong> spend 1 Luck Point to give yourself Advantage on a D20 Test.</p><p><strong>Disadvantage:</strong> when a creature rolls a d20 for an attack against you, spend 1 Luck Point to impose Disadvantage on it.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const MagicInitiateCleric = Traits.defineTrait('feat/magic-initiate-cleric', {
  name: 'Magic Initiate (Cleric)',
  description:
    '<p><strong>Origin Feat</strong></p><p><strong>Two Cantrips:</strong> you learn two cantrips from the Cleric spell list.</p><p><strong>Level 1 Spell:</strong> you learn one level 1 Cleric spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.</p><p><strong>Spellcasting Ability:</strong> Intelligence, Wisdom, or Charisma (chosen when you take this feat).</p><p><strong>Spell Change:</strong> whenever you gain a level, you can replace one of these spells with another of the same level from the Cleric list.</p><p><strong>Repeatable:</strong> you can take this feat more than once, choosing a different spell list each time.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const MagicInitiateDruid = Traits.defineTrait('feat/magic-initiate-druid', {
  name: 'Magic Initiate (Druid)',
  description:
    '<p><strong>Origin Feat</strong></p><p><strong>Two Cantrips:</strong> you learn two cantrips from the Druid spell list.</p><p><strong>Level 1 Spell:</strong> you learn one level 1 Druid spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.</p><p><strong>Spellcasting Ability:</strong> Intelligence, Wisdom, or Charisma (chosen when you take this feat).</p><p><strong>Spell Change:</strong> whenever you gain a level, you can replace one of these spells with another of the same level from the Druid list.</p><p><strong>Repeatable:</strong> you can take this feat more than once, choosing a different spell list each time.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const MagicInitiateWizard = Traits.defineTrait('feat/magic-initiate-wizard', {
  name: 'Magic Initiate (Wizard)',
  description:
    '<p><strong>Origin Feat</strong></p><p><strong>Two Cantrips:</strong> you learn two cantrips from the Wizard spell list.</p><p><strong>Level 1 Spell:</strong> you learn one level 1 Wizard spell. It is always prepared, and you can cast it once without a spell slot per Long Rest, or with any spell slots you have.</p><p><strong>Spellcasting Ability:</strong> Intelligence, Wisdom, or Charisma (chosen when you take this feat).</p><p><strong>Spell Change:</strong> whenever you gain a level, you can replace one of these spells with another of the same level from the Wizard list.</p><p><strong>Repeatable:</strong> you can take this feat more than once, choosing a different spell list each time.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const Musician = Traits.defineTrait('feat/musician', {
  name: 'Musician',
  description:
    "<p><strong>Origin Feat</strong></p><p><strong>Instrument Training:</strong> proficiency with three Musical Instruments of your choice.</p><p><strong>Encouraging Song:</strong> as you finish a Short or Long Rest, you can play a song on an instrument you're proficient with and give Heroic Inspiration to allies who hear it, up to your Proficiency Bonus.</p>",
  archetypes: [OriginFeat],
  effects: [
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
    Effects.gainCharacterOption(Tools.SelectMusicalInstrument),
  ],
})

export const SavageAttacker = Traits.defineTrait('feat/savage-attacker', {
  name: 'Savage Attacker',
  description:
    "<p><strong>Origin Feat</strong></p><p>Once per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll.</p>",
  archetypes: [OriginFeat],
  effects: [],
})

// Any skill or tool; skills and tools the character already has aren't offered
export const SelectSkilledProficiency = CharacterOptions.selectTraitOption(
  'feat/skilled/select-proficiency',
  { archetypes: [SkillProficiencies.SkillProficiency, ...Tools.AllTools] },
  'Skilled'
)

export const Skilled = Traits.defineTrait('feat/skilled', {
  name: 'Skilled',
  description:
    '<p><strong>Origin Feat</strong></p><p>You gain proficiency in any combination of three skills or tools of your choice.</p><p><strong>Repeatable:</strong> you can take this feat more than once.</p>',
  archetypes: [OriginFeat],
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
    '<p><strong>Origin Feat</strong></p><p><strong>Enhanced Unarmed Strike:</strong> your Unarmed Strikes can deal 1d4 + your Strength modifier Bludgeoning damage.</p><p><strong>Damage Rerolls:</strong> when you roll damage for an Unarmed Strike, you can reroll any 1s and must use the new roll.</p><p><strong>Improvised Weaponry:</strong> you have proficiency with improvised weapons.</p><p><strong>Push:</strong> once per turn, when you hit a creature with an Unarmed Strike as part of the Attack action, you can push it 5 feet away.</p>',
  archetypes: [OriginFeat],
  effects: [],
})

export const Tough = Traits.defineTrait('feat/tough', {
  name: 'Tough',
  description:
    '<p><strong>Origin Feat</strong></p><p>Your Hit Point maximum increases by twice your character level when you gain this feat, and by 2 more each time you gain a level afterward.</p>',
  archetypes: [OriginFeat],
  effects: [],
})
