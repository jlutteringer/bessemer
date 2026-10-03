import { Abilities, Archetypes, Attributes, Effects, ResourcePools, Traits } from '@simulacrum/common'
import { Class, Cleric } from '@simulacrum/rulesets/dnd-5e/archetype'
import * as SkillProficiencies from '@simulacrum/rulesets/dnd-5e/archetype/skill-proficiency'
import * as Spells from '@simulacrum/rulesets/dnd-5e/archetype/spell'
import { SelectFeat } from '@simulacrum/rulesets/dnd-5e/archetype/feat'
import { CharacterOptions } from '@simulacrum/common/character'
import { PlayerCharacteristics } from '@simulacrum/rulesets/dnd-5e/characteristic'
import { ActionType } from '@simulacrum/common/ability'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/common/types'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

// FUTURE spell slots and the spells a Cleric prepares each day aren't modelled yet; only cantrips and domain spells are

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('cleric/select-skill-proficiency', {
  archetypes: [SkillProficiencies.SkillProficiency],
  specificOptions: [
    SkillProficiencies.History,
    SkillProficiencies.Insight,
    SkillProficiencies.Medicine,
    SkillProficiencies.Persuasion,
    SkillProficiencies.Religion,
  ],
})

// Cleric cantrips are chosen when the Cleric gains a level, rather than swapped in and out of a loadout like a Wizard's
export const SelectCantrip = CharacterOptions.selectAbilityOption('cleric/select-cantrip', { archetypes: [Cleric, Spells.Cantrip] }, 'Cantrips')

// Uses of a Wisdom-based feature: equal to the Wisdom modifier, but at least one
const WisdomModifierUses = NumericExpressions.max([PlayerCharacteristics.WisdomModifier.variable, 1])

export const Spellcasting = Abilities.defineAbility('cleric/spellcasting', {
  name: 'Spellcasting',
  effects: [
    Effects.descriptive(
      '<p>You cast Cleric spells using <strong>Wisdom</strong>, with a Holy Symbol as your focus. You know three cantrips, gaining a fourth at level 4, and can swap one for another Cleric cantrip when you gain a level.</p>'
    ),
    Effects.descriptive(
      '<p>After a Long Rest, you prepare a list of Cleric spells you can cast with your spell slots: 4 at level 1, rising to 9 by level 5. You can change the list after each Long Rest. You regain all spell slots on a Long Rest.</p>'
    ),
  ],
})

export const Protector = Traits.defineTrait('cleric/protector', {
  name: 'Protector',
  description:
    '<p>Trained for battle, you gain proficiency with <strong>Martial weapons</strong> and training with <strong>Heavy armor</strong>.</p>',
  effects: [],
})

export const Thaumaturge = Traits.defineTrait('cleric/thaumaturge', {
  name: 'Thaumaturge',
  description:
    '<p>You know <strong>one extra cantrip</strong> from the Cleric spell list. Your mystical connection to the divine also lets you add your Wisdom modifier (minimum of +1) to your Intelligence (Arcana or Religion) checks.</p>',
  effects: [Effects.gainCharacterOption(SelectCantrip)],
})

export const SelectDivineOrder = CharacterOptions.selectTraitOption(
  'cleric/select-divine-order',
  { specificOptions: [Protector, Thaumaturge] },
  'Divine Order'
)

export const Level1 = Traits.defineTrait('cleric/level-1', {
  name: 'Cleric',
  description:
    '<p>A priest who channels <strong>divine magic</strong>, wielding the power of the gods to heal, protect, and smite, and casting spells with <strong>Wisdom</strong>.</p><p><strong>Saving Throws:</strong> Wisdom and Charisma. <strong>Armor:</strong> Light and Medium armor, and Shields. <strong>Weapons:</strong> Simple weapons.</p>',
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectSkillProficiency),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectCantrip),
    Effects.gainCharacterOption(SelectDivineOrder),
    Effects.gainAbility(Spellcasting),
  ],
})

// Shared by every Channel Divinity effect, including those from a Cleric's domain
export const ChannelDivinityPool = ResourcePools.defineResourcePool('cleric/channel-divinity', {
  name: 'Channel Divinity',
  description: '',
  // FUTURE a third use at Cleric level 6 and a fourth at level 18
  size: 2,
  refresh: [
    { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
    { period: GameTimeUnit.ShortRest, amount: 1 },
  ],
})

export const DivineSpark = Abilities.defineAbility('cleric/divine-spark', {
  name: 'Divine Spark',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Magic action</strong>, you point your Holy Symbol at another creature you can see within 30 feet and roll <strong>1d8 + your Wisdom modifier</strong>. Either the creature regains that many Hit Points, or it makes a Constitution save, taking that much Necrotic or Radiant damage (your choice) on a failure or half as much on a success.</p><p>The roll increases to 2d8 at Cleric level 7, 3d8 at level 13, and 4d8 at level 18.</p>'
    ),
  ],
  actions: [{ name: 'Use Divine Spark', action: ActionType.Standard, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const TurnUndead = Abilities.defineAbility('cleric/turn-undead', {
  name: 'Turn Undead',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Magic action</strong>, you present your Holy Symbol and censure the undead. Each Undead of your choice within 30 feet of you makes a Wisdom save. On a failure, it has the Frightened and Incapacitated conditions for 1 minute, and tries to move as far from you as it can on its turns.</p><p>The effect ends early on a creature if it takes damage, if you have the Incapacitated condition, or if you die.</p>'
    ),
  ],
  actions: [{ name: 'Use Turn Undead', action: ActionType.Standard, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const ChannelDivinity = Traits.defineTrait('cleric/channel-divinity', {
  name: 'Channel Divinity',
  description:
    '<p>You can channel divine energy directly from the Outer Planes to fuel magical effects: <strong>Divine Spark</strong> and <strong>Turn Undead</strong>, plus any your domain grants. Each use expends one of your uses of this feature, and if an effect calls for a saving throw, the DC equals your spell save DC.</p><p>You have two uses, regaining one when you finish a Short Rest and all of them when you finish a Long Rest. You gain a third use at Cleric level 6 and a fourth at level 18.</p>',
  effects: [Effects.gainResourcePool(ChannelDivinityPool), Effects.gainAbility(DivineSpark), Effects.gainAbility(TurnUndead)],
})

export const Level2 = Traits.defineTrait('cleric/level-2', {
  name: 'Cleric (2)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  archetypes: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))), Effects.gainTrait(ChannelDivinity)],
})

export const ClericSubclass = Archetypes.defineArchetype('cleric/subclass', { name: 'Cleric Subclass' })
export const SelectClericSubclass = CharacterOptions.selectTraitOption('cleric/select-subclass', { archetypes: [ClericSubclass] })

export const Level3 = Traits.defineTrait('cleric/level-3', {
  name: 'Cleric (3)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    Effects.gainCharacterOption(SelectClericSubclass),
  ],
})

export const Level4 = Traits.defineTrait('cleric/level-4', {
  name: 'Cleric (4)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  archetypes: [Class],
  effects: [
    Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    Effects.gainCharacterOption(SelectFeat),
    Effects.gainCharacterOption(SelectCantrip),
  ],
})

export const SearUndead = Traits.defineTrait('cleric/sear-undead', {
  name: 'Sear Undead',
  description:
    "<p>Whenever you use <strong>Turn Undead</strong>, you can roll a number of d8s equal to your Wisdom modifier (minimum of one) and add the rolls together. Each Undead that fails its save against that use takes <strong>Radiant damage</strong> equal to the total. This damage doesn't end the turn effect.</p>",
  effects: [],
})

export const Level5 = Traits.defineTrait('cleric/level-5', {
  name: 'Cleric (5)',
  description: '',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  archetypes: [Class],
  effects: [Effects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))), Effects.gainTrait(SearUndead)],
})

// Each domain's spells are always prepared, so they're granted without a loadout: four from Cleric level 3, and two more once its
// prerequisite of Cleric level 5 is met

export const LifeDomainSpellsLevel5 = Traits.defineTrait('cleric/life-domain-spells-level-5', {
  name: 'Life Domain Spells (Level 5)',
  description: '<p>You always have <strong>Mass Healing Word</strong> and <strong>Revivify</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.MassHealingWord), Effects.gainAbility(Spells.Revivify)],
})

export const LifeDomainSpells = Traits.defineTrait('cleric/life-domain-spells', {
  name: 'Life Domain Spells',
  description:
    '<p>You always have <strong>Aid</strong>, <strong>Bless</strong>, <strong>Cure Wounds</strong>, and <strong>Lesser Restoration</strong> prepared. At Cleric level 5, you also always have <strong>Mass Healing Word</strong> and <strong>Revivify</strong> prepared.</p>',
  effects: [
    Effects.gainAbility(Spells.Aid),
    Effects.gainAbility(Spells.Bless),
    Effects.gainAbility(Spells.CureWounds),
    Effects.gainAbility(Spells.LesserRestoration),
    Effects.gainTrait(LifeDomainSpellsLevel5),
  ],
})

export const DiscipleOfLife = Traits.defineTrait('cleric/disciple-of-life', {
  name: 'Disciple of Life',
  description:
    "<p>When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell equal to <strong>2 + the spell slot's level</strong>.</p>",
  effects: [],
})

export const PreserveLife = Abilities.defineAbility('cleric/preserve-life', {
  name: 'Preserve Life',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Magic action</strong>, you expend a use of your <strong>Channel Divinity</strong> and present your Holy Symbol to evoke healing energy that can restore Hit Points equal to <strong>five times your Cleric level</strong>. Divide those Hit Points among any Bloodied creatures within 30 feet of you, which can include you.</p><p>This feature can restore a creature to no more than half its Hit Point maximum.</p>'
    ),
  ],
  actions: [{ name: 'Use Preserve Life', action: ActionType.Standard, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const LifeDomain = Traits.defineTrait('cleric/life-domain', {
  name: 'Life Domain',
  description:
    '<p>A domain of <strong>vibrant positive energy</strong>, the force that sustains all living things, whose priests heal the sick and wounded and care for those in need.</p>',
  archetypes: [ClericSubclass],
  effects: [Effects.gainTrait(DiscipleOfLife), Effects.gainTrait(LifeDomainSpells), Effects.gainAbility(PreserveLife)],
})

export const LightDomainSpellsLevel5 = Traits.defineTrait('cleric/light-domain-spells-level-5', {
  name: 'Light Domain Spells (Level 5)',
  description: '<p>You always have <strong>Daylight</strong> and <strong>Fireball</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.Daylight), Effects.gainAbility(Spells.Fireball)],
})

export const LightDomainSpells = Traits.defineTrait('cleric/light-domain-spells', {
  name: 'Light Domain Spells',
  description:
    '<p>You always have <strong>Burning Hands</strong>, <strong>Faerie Fire</strong>, <strong>Scorching Ray</strong>, and <strong>See Invisibility</strong> prepared. At Cleric level 5, you also always have <strong>Daylight</strong> and <strong>Fireball</strong> prepared.</p>',
  effects: [
    Effects.gainAbility(Spells.BurningHands),
    Effects.gainAbility(Spells.FaerieFire),
    Effects.gainAbility(Spells.ScorchingRay),
    Effects.gainAbility(Spells.SeeInvisibility),
    Effects.gainTrait(LightDomainSpellsLevel5),
  ],
})

export const RadianceOfTheDawn = Abilities.defineAbility('cleric/radiance-of-the-dawn', {
  name: 'Radiance of the Dawn',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Magic action</strong>, you expend a use of your <strong>Channel Divinity</strong> and present your Holy Symbol, dispelling any magical Darkness within 30 feet of you. Each creature of your choice within that radius makes a Constitution save, taking Radiant damage equal to <strong>2d10 + your Cleric level</strong> on a failure or half as much on a success.</p>'
    ),
  ],
  actions: [{ name: 'Use Radiance of the Dawn', action: ActionType.Standard, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const WardingFlare = Abilities.defineAbility('cleric/warding-flare', {
  name: 'Warding Flare',
  effects: [
    Effects.descriptive(
      '<p>When a creature you can see within 30 feet of you makes an attack roll, you can take a <strong>Reaction</strong> to impose Disadvantage on it, causing light to flare before it hits or misses.</p><p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once), regaining all uses when you finish a Long Rest.</p>'
    ),
  ],
  resource: { size: WisdomModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Warding Flare',
      action: ActionType.Reaction,
    },
  ],
})

export const LightDomain = Traits.defineTrait('cleric/light-domain', {
  name: 'Light Domain',
  description:
    '<p>A domain of <strong>rebirth and renewal</strong>, truth, vigilance, and beauty, whose priests are enlightened souls who burn away darkness and lies with radiant flame.</p>',
  archetypes: [ClericSubclass],
  effects: [Effects.gainTrait(LightDomainSpells), Effects.gainAbility(RadianceOfTheDawn), Effects.gainAbility(WardingFlare)],
})

export const TrickeryDomainSpellsLevel5 = Traits.defineTrait('cleric/trickery-domain-spells-level-5', {
  name: 'Trickery Domain Spells (Level 5)',
  description: '<p>You always have <strong>Hypnotic Pattern</strong> and <strong>Nondetection</strong> prepared.</p>',
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.HypnoticPattern), Effects.gainAbility(Spells.Nondetection)],
})

export const TrickeryDomainSpells = Traits.defineTrait('cleric/trickery-domain-spells', {
  name: 'Trickery Domain Spells',
  description:
    '<p>You always have <strong>Charm Person</strong>, <strong>Disguise Self</strong>, <strong>Invisibility</strong>, and <strong>Pass without Trace</strong> prepared. At Cleric level 5, you also always have <strong>Hypnotic Pattern</strong> and <strong>Nondetection</strong> prepared.</p>',
  effects: [
    Effects.gainAbility(Spells.CharmPerson),
    Effects.gainAbility(Spells.DisguiseSelf),
    Effects.gainAbility(Spells.Invisibility),
    Effects.gainAbility(Spells.PassWithoutTrace),
    Effects.gainTrait(TrickeryDomainSpellsLevel5),
  ],
})

export const BlessingOfTheTrickster = Abilities.defineAbility('cleric/blessing-of-the-trickster', {
  name: 'Blessing of the Trickster',
  effects: [
    Effects.descriptive(
      '<p>As a <strong>Magic action</strong>, you can choose yourself or a willing creature within 30 feet of you to have <strong>Advantage on Dexterity (Stealth) checks</strong>. The blessing lasts until you finish a Long Rest or you use this feature again.</p>'
    ),
  ],
  actions: [{ name: 'Use Blessing of the Trickster', action: ActionType.Standard }],
})

export const InvokeDuplicity = Abilities.defineAbility('cleric/invoke-duplicity', {
  name: 'Invoke Duplicity',
  effects: [
    Effects.descriptive(
      "<p>You expend a use of your <strong>Channel Divinity</strong> to create a perfect visual illusion of yourself in an unoccupied space you can see within 30 feet of you. It's intangible and lasts for 1 minute, until you dismiss it (no action required), or until you have the Incapacitated condition. As a Bonus Action, you can move it up to 30 feet to a space within 120 feet of you.</p>"
    ),
    Effects.descriptive(
      "<p><strong>Cast Spells:</strong> you can cast spells as though you were in the illusion's space, using your own senses. <strong>Distract:</strong> when both you and your illusion are within 5 feet of a creature that can see the illusion, you have Advantage on attack rolls against that creature.</p>"
    ),
  ],
  actions: [{ name: 'Use Invoke Duplicity', action: ActionType.Bonus, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const TrickeryDomain = Traits.defineTrait('cleric/trickery-domain', {
  name: 'Trickery Domain',
  description:
    '<p>A domain of <strong>mischief and deception</strong>, whose priests are a disruptive force in the world, puncturing pride, mocking tyrants, and freeing captives.</p>',
  archetypes: [ClericSubclass],
  effects: [Effects.gainTrait(TrickeryDomainSpells), Effects.gainAbility(BlessingOfTheTrickster), Effects.gainAbility(InvokeDuplicity)],
})

export const WarDomainSpellsLevel5 = Traits.defineTrait('cleric/war-domain-spells-level-5', {
  name: 'War Domain Spells (Level 5)',
  description: "<p>You always have <strong>Crusader's Mantle</strong> and <strong>Spirit Guardians</strong> prepared.</p>",
  prerequisites: [Traits.traitPrerequisite(Level5)],
  effects: [Effects.gainAbility(Spells.CrusadersMantle), Effects.gainAbility(Spells.SpiritGuardians)],
})

export const WarDomainSpells = Traits.defineTrait('cleric/war-domain-spells', {
  name: 'War Domain Spells',
  description:
    "<p>You always have <strong>Guiding Bolt</strong>, <strong>Magic Weapon</strong>, <strong>Shield of Faith</strong>, and <strong>Spiritual Weapon</strong> prepared. At Cleric level 5, you also always have <strong>Crusader's Mantle</strong> and <strong>Spirit Guardians</strong> prepared.</p>",
  effects: [
    Effects.gainAbility(Spells.GuidingBolt),
    Effects.gainAbility(Spells.MagicWeapon),
    Effects.gainAbility(Spells.ShieldOfFaith),
    Effects.gainAbility(Spells.SpiritualWeapon),
    Effects.gainTrait(WarDomainSpellsLevel5),
  ],
})

export const GuidedStrike = Abilities.defineAbility('cleric/guided-strike', {
  name: 'Guided Strike',
  effects: [
    Effects.descriptive(
      "<p>When you or a creature within 30 feet of you misses with an attack roll, you can expend a use of your <strong>Channel Divinity</strong> and give that roll a <strong>+10 bonus</strong>, potentially causing it to hit.</p><p>Using this feature on another creature's attack roll takes your <strong>Reaction</strong>.</p>"
    ),
  ],
  actions: [
    { name: 'Guide Your Own Strike', action: ActionType.Free, costs: [{ cost: 1, resource: ChannelDivinityPool }] },
    { name: "Guide an Ally's Strike", action: ActionType.Reaction, costs: [{ cost: 1, resource: ChannelDivinityPool }] },
  ],
})

export const WarPriest = Abilities.defineAbility('cleric/war-priest', {
  name: 'War Priest',
  effects: [
    Effects.descriptive(
      '<p>You can make one attack with a weapon or an Unarmed Strike.</p><p>You can use this feature a number of times equal to your Wisdom modifier (minimum of once), regaining all uses when you finish a Short or Long Rest.</p>'
    ),
  ],
  resource: {
    size: WisdomModifierUses,
    refresh: [
      { period: GameTimeUnit.ShortRest, amount: RelativeAmount.All },
      { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
    ],
  },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use War Priest',
      action: ActionType.Bonus,
    },
  ],
})

export const WarDomain = Traits.defineTrait('cleric/war-domain', {
  name: 'War Domain',
  description:
    '<p>A domain of <strong>war and violence</strong>, whose priests inspire valor in the faithful, punish the foes of their gods, and fight as champions of the battlefield.</p>',
  archetypes: [ClericSubclass],
  effects: [Effects.gainTrait(WarDomainSpells), Effects.gainAbility(GuidedStrike), Effects.gainAbility(WarPriest)],
})
