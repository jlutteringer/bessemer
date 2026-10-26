import { Abilities, Tags, Attributes, CharacterEffects, ResourcePools, Traits } from '@simulacrum/ruleset'
import * as SavingThrowProficiencies from '@simulacrum/ruleset-dnd5e/tag/saving-throw-proficiency'
import { Class, Cleric } from '@simulacrum/ruleset-dnd5e/tag'
import * as SkillProficiencies from '@simulacrum/ruleset-dnd5e/tag/skill-proficiency'
import * as Spells from '@simulacrum/ruleset-dnd5e/tag/spell'
import { SelectFeat } from '@simulacrum/ruleset-dnd5e/tag/feat'
import { CharacterOptions } from '@simulacrum/ruleset'
import { PlayerCharacteristics } from '@simulacrum/ruleset-dnd5e/characteristic'
import * as ActionTypes from '@simulacrum/ruleset-dnd5e/action-type'
import { GameTimeUnit, RelativeAmount } from '@simulacrum/ruleset/types'
import { NumericExpressions } from '@bessemer/cornerstone/expression'
import { Patches } from '@bessemer/cornerstone'

// FUTURE spell slots and the spells a Cleric prepares each day aren't modelled yet; only cantrips and domain spells are

export const SelectSkillProficiency = CharacterOptions.selectTraitOption('cleric/select-skill-proficiency', {
  name: 'Skill Proficiency',
  filter: {
    tags: [SkillProficiencies.SkillProficiency],
    specificOptions: [
      SkillProficiencies.History,
      SkillProficiencies.Insight,
      SkillProficiencies.Medicine,
      SkillProficiencies.Persuasion,
      SkillProficiencies.Religion,
    ],
  },
})

// Cleric cantrips are chosen when the Cleric gains a level, rather than swapped in and out of a loadout like a Wizard's
export const SelectCantrip = CharacterOptions.selectAbilityOption('cleric/select-cantrip', {
  name: 'Cantrips',
  filter: { tags: [Cleric, Spells.Cantrip] },
})

// Uses of a Wisdom-based feature: equal to the Wisdom modifier, but at least one
const WisdomModifierUses = NumericExpressions.max([PlayerCharacteristics.WisdomModifier.variable, 1])

export const Protector = Traits.defineTrait('cleric/protector', {
  name: 'Protector',
  description: 'Trained for battle, you gain proficiency with **Martial weapons** and training with **Heavy armor**.',
  effects: [],
})

export const Thaumaturge = Traits.defineTrait('cleric/thaumaturge', {
  name: 'Thaumaturge',
  description:
    'You know **one extra cantrip** from the Cleric spell list. Your mystical connection to the divine also lets you add your Wisdom modifier (minimum of +1) to your Intelligence (Arcana or Religion) checks.',
  effects: [CharacterEffects.gainCharacterOption(SelectCantrip)],
})

export const SelectDivineOrder = CharacterOptions.selectTraitOption('cleric/select-divine-order', {
  name: 'Divine Order',
  filter: {
    specificOptions: [Protector, Thaumaturge],
  },
})

export const Level1 = Traits.defineTrait('cleric/level-1', {
  name: 'Cleric',
  description:
    'A priest who channels **divine magic**, wielding the power of the gods to heal, protect, and smite, and casting spells with **Wisdom**.\n\n**Saving Throws:** Wisdom and Charisma. **Armor:** Light and Medium armor, and Shields. **Weapons:** Simple weapons.',
  tags: [Class],
  effects: [
    CharacterEffects.gainTrait(SavingThrowProficiencies.Wisdom),
    CharacterEffects.gainTrait(SavingThrowProficiencies.Charisma),
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(8))),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectSkillProficiency),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectCantrip),
    CharacterEffects.gainCharacterOption(SelectDivineOrder),
  ],
})

export const Spellcasting = Abilities.defineAbility('cleric/spellcasting', {
  name: 'Spellcasting',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  effects: [
    CharacterEffects.descriptive(
      'You cast Cleric spells using **Wisdom**, with a Holy Symbol as your focus. You know three cantrips, gaining a fourth at level 4, and can swap one for another Cleric cantrip when you gain a level.'
    ),
    CharacterEffects.descriptive(
      'After a Long Rest, you prepare a list of Cleric spells you can cast with your spell slots: 4 at level 1, rising to 9 by level 5. You can change the list after each Long Rest. You regain all spell slots on a Long Rest.'
    ),
  ],
})

// Shared by every Channel Divinity effect, including those from a Cleric's domain
export const ChannelDivinityPool = ResourcePools.defineResourcePool('cleric/channel-divinity', {
  name: 'Channel Divinity',
  // FUTURE a third use at Cleric level 6 and a fourth at level 18
  size: 2,
  refresh: [
    { period: GameTimeUnit.LongRest, amount: RelativeAmount.All },
    { period: GameTimeUnit.ShortRest, amount: 1 },
  ],
})

export const ChannelDivinity = Traits.defineTrait('cleric/channel-divinity', {
  name: 'Channel Divinity',
  description:
    'You can channel divine energy directly from the Outer Planes to fuel magical effects: **Divine Spark** and **Turn Undead**, plus any your domain grants. Each use expends one of your uses of this feature, and if an effect calls for a saving throw, the DC equals your spell save DC.\n\nYou have two uses, regaining one when you finish a Short Rest and all of them when you finish a Long Rest. You gain a third use at Cleric level 6 and a fourth at level 18.',
  effects: [CharacterEffects.gainResourcePool(ChannelDivinityPool)],
})

export const DivineSpark = Abilities.defineAbility('cleric/divine-spark', {
  name: 'Divine Spark',
  prerequisites: [Traits.traitPrerequisite(ChannelDivinity)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Magic action**, you point your Holy Symbol at another creature you can see within 30 feet and roll **1d8 + your Wisdom modifier**. Either the creature regains that many Hit Points, or it makes a Constitution save, taking that much Necrotic or Radiant damage (your choice) on a failure or half as much on a success.\n\nThe roll increases to 2d8 at Cleric level 7, 3d8 at level 13, and 4d8 at level 18.'
    ),
  ],
  actions: [{ name: 'Use Divine Spark', action: ActionTypes.Action, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const TurnUndead = Abilities.defineAbility('cleric/turn-undead', {
  name: 'Turn Undead',
  prerequisites: [Traits.traitPrerequisite(ChannelDivinity)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Magic action**, you present your Holy Symbol and censure the undead. Each Undead of your choice within 30 feet of you makes a Wisdom save. On a failure, it has the Frightened and Incapacitated conditions for 1 minute, and tries to move as far from you as it can on its turns.\n\nThe effect ends early on a creature if it takes damage, if you have the Incapacitated condition, or if you die.'
    ),
  ],
  actions: [{ name: 'Use Turn Undead', action: ActionTypes.Action, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const Level2 = Traits.defineTrait('cleric/level-2', {
  name: 'Cleric (2)',
  prerequisites: [Traits.traitPrerequisite(Level1)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainTrait(ChannelDivinity),
  ],
})

export const ClericSubclass = Tags.defineTraitTag('cleric/subclass', { name: 'Cleric Subclass' })
export const SelectClericSubclass = CharacterOptions.selectTraitOption('cleric/select-subclass', {
  name: 'Cleric Subclass',
  filter: { tags: [ClericSubclass] },
})

export const Level3 = Traits.defineTrait('cleric/level-3', {
  name: 'Cleric (3)',
  prerequisites: [Traits.traitPrerequisite(Level2)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainCharacterOption(SelectClericSubclass),
  ],
})

export const Level4 = Traits.defineTrait('cleric/level-4', {
  name: 'Cleric (4)',
  prerequisites: [Traits.traitPrerequisite(Level3)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    // Ability Score Improvement
    CharacterEffects.gainCharacterOption(SelectFeat),
    CharacterEffects.gainCharacterOption(SelectCantrip),
  ],
})

export const SearUndead = Traits.defineTrait('cleric/sear-undead', {
  name: 'Sear Undead',
  description:
    "Whenever you use **Turn Undead**, you can roll a number of d8s equal to your Wisdom modifier (minimum of one) and add the rolls together. Each Undead that fails its save against that use takes **Radiant damage** equal to the total. This damage doesn't end the turn effect.",
  effects: [],
})

export const Level5 = Traits.defineTrait('cleric/level-5', {
  name: 'Cleric (5)',
  prerequisites: [Traits.traitPrerequisite(Level4)],
  tags: [Class],
  effects: [
    CharacterEffects.modifyCharacteristic(PlayerCharacteristics.HitPoints, Attributes.modifier(Patches.sum(5))),
    CharacterEffects.gainTrait(SearUndead),
  ],
})

// Each domain's spells are always prepared, so they're granted without a loadout

export const LifeDomainSpells = Traits.defineTrait('cleric/life-domain-spells', {
  name: 'Life Domain Spells',
  description:
    'You always have **Aid**, **Bless**, **Cure Wounds**, and **Lesser Restoration** prepared. At Cleric level 5, you also always have **Mass Healing Word** and **Revivify** prepared.',
  effects: [
    CharacterEffects.gainAbility(Spells.Aid),
    CharacterEffects.gainAbility(Spells.Bless),
    CharacterEffects.gainAbility(Spells.CureWounds),
    CharacterEffects.gainAbility(Spells.LesserRestoration),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [
      CharacterEffects.gainAbility(Spells.MassHealingWord),
      CharacterEffects.gainAbility(Spells.Revivify),
    ]),
  ],
})

export const DiscipleOfLife = Traits.defineTrait('cleric/disciple-of-life', {
  name: 'Disciple of Life',
  description:
    "When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell equal to **2 + the spell slot's level**.",
  effects: [],
})

export const LifeDomain = Traits.defineTrait('cleric/life-domain', {
  name: 'Life Domain',
  description:
    'A domain of **vibrant positive energy**, the force that sustains all living things, whose priests heal the sick and wounded and care for those in need.',
  tags: [ClericSubclass],
  effects: [CharacterEffects.gainTrait(DiscipleOfLife), CharacterEffects.gainTrait(LifeDomainSpells)],
})

export const PreserveLife = Abilities.defineAbility('cleric/preserve-life', {
  name: 'Preserve Life',
  prerequisites: [Traits.traitPrerequisite(LifeDomain)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Magic action**, you expend a use of your **Channel Divinity** and present your Holy Symbol to evoke healing energy that can restore Hit Points equal to **five times your Cleric level**. Divide those Hit Points among any Bloodied creatures within 30 feet of you, which can include you.\n\nThis feature can restore a creature to no more than half its Hit Point maximum.'
    ),
  ],
  actions: [{ name: 'Use Preserve Life', action: ActionTypes.Action, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const LightDomainSpells = Traits.defineTrait('cleric/light-domain-spells', {
  name: 'Light Domain Spells',
  description:
    'You always have **Burning Hands**, **Faerie Fire**, **Scorching Ray**, and **See Invisibility** prepared. At Cleric level 5, you also always have **Daylight** and **Fireball** prepared.',
  effects: [
    CharacterEffects.gainAbility(Spells.BurningHands),
    CharacterEffects.gainAbility(Spells.FaerieFire),
    CharacterEffects.gainAbility(Spells.ScorchingRay),
    CharacterEffects.gainAbility(Spells.SeeInvisibility),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [
      CharacterEffects.gainAbility(Spells.Daylight),
      CharacterEffects.gainAbility(Spells.Fireball),
    ]),
  ],
})

export const LightDomain = Traits.defineTrait('cleric/light-domain', {
  name: 'Light Domain',
  description:
    'A domain of **rebirth and renewal**, truth, vigilance, and beauty, whose priests are enlightened souls who burn away darkness and lies with radiant flame.',
  tags: [ClericSubclass],
  effects: [CharacterEffects.gainTrait(LightDomainSpells)],
})

export const RadianceOfTheDawn = Abilities.defineAbility('cleric/radiance-of-the-dawn', {
  name: 'Radiance of the Dawn',
  prerequisites: [Traits.traitPrerequisite(LightDomain)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Magic action**, you expend a use of your **Channel Divinity** and present your Holy Symbol, dispelling any magical Darkness within 30 feet of you. Each creature of your choice within that radius makes a Constitution save, taking Radiant damage equal to **2d10 + your Cleric level** on a failure or half as much on a success.'
    ),
  ],
  actions: [{ name: 'Use Radiance of the Dawn', action: ActionTypes.Action, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const WardingFlare = Abilities.defineAbility('cleric/warding-flare', {
  name: 'Warding Flare',
  prerequisites: [Traits.traitPrerequisite(LightDomain)],
  effects: [
    CharacterEffects.descriptive(
      'When a creature you can see within 30 feet of you makes an attack roll, you can take a **Reaction** to impose Disadvantage on it, causing light to flare before it hits or misses.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), regaining all uses when you finish a Long Rest.'
    ),
  ],
  resource: { size: WisdomModifierUses, refresh: [{ period: GameTimeUnit.LongRest, amount: RelativeAmount.All }] },
  costs: [{ cost: 1 }],
  actions: [
    {
      name: 'Use Warding Flare',
      action: ActionTypes.Reaction,
    },
  ],
})

export const TrickeryDomainSpells = Traits.defineTrait('cleric/trickery-domain-spells', {
  name: 'Trickery Domain Spells',
  description:
    'You always have **Charm Person**, **Disguise Self**, **Invisibility**, and **Pass without Trace** prepared. At Cleric level 5, you also always have **Hypnotic Pattern** and **Nondetection** prepared.',
  effects: [
    CharacterEffects.gainAbility(Spells.CharmPerson),
    CharacterEffects.gainAbility(Spells.DisguiseSelf),
    CharacterEffects.gainAbility(Spells.Invisibility),
    CharacterEffects.gainAbility(Spells.PassWithoutTrace),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [
      CharacterEffects.gainAbility(Spells.HypnoticPattern),
      CharacterEffects.gainAbility(Spells.Nondetection),
    ]),
  ],
})

export const TrickeryDomain = Traits.defineTrait('cleric/trickery-domain', {
  name: 'Trickery Domain',
  description:
    'A domain of **mischief and deception**, whose priests are a disruptive force in the world, puncturing pride, mocking tyrants, and freeing captives.',
  tags: [ClericSubclass],
  effects: [CharacterEffects.gainTrait(TrickeryDomainSpells)],
})

export const BlessingOfTheTrickster = Abilities.defineAbility('cleric/blessing-of-the-trickster', {
  name: 'Blessing of the Trickster',
  prerequisites: [Traits.traitPrerequisite(TrickeryDomain)],
  effects: [
    CharacterEffects.descriptive(
      'As a **Magic action**, you can choose yourself or a willing creature within 30 feet of you to have **Advantage on Dexterity (Stealth) checks**. The blessing lasts until you finish a Long Rest or you use this feature again.'
    ),
  ],
  actions: [{ name: 'Use Blessing of the Trickster', action: ActionTypes.Action }],
})

export const InvokeDuplicity = Abilities.defineAbility('cleric/invoke-duplicity', {
  name: 'Invoke Duplicity',
  prerequisites: [Traits.traitPrerequisite(TrickeryDomain)],
  effects: [
    CharacterEffects.descriptive(
      "You expend a use of your **Channel Divinity** to create a perfect visual illusion of yourself in an unoccupied space you can see within 30 feet of you. It's intangible and lasts for 1 minute, until you dismiss it (no action required), or until you have the Incapacitated condition. As a Bonus Action, you can move it up to 30 feet to a space within 120 feet of you."
    ),
    CharacterEffects.descriptive(
      "**Cast Spells:** you can cast spells as though you were in the illusion's space, using your own senses. **Distract:** when both you and your illusion are within 5 feet of a creature that can see the illusion, you have Advantage on attack rolls against that creature."
    ),
  ],
  actions: [{ name: 'Use Invoke Duplicity', action: ActionTypes.BonusAction, costs: [{ cost: 1, resource: ChannelDivinityPool }] }],
})

export const WarDomainSpells = Traits.defineTrait('cleric/war-domain-spells', {
  name: 'War Domain Spells',
  description:
    "You always have **Guiding Bolt**, **Magic Weapon**, **Shield of Faith**, and **Spiritual Weapon** prepared. At Cleric level 5, you also always have **Crusader's Mantle** and **Spirit Guardians** prepared.",
  effects: [
    CharacterEffects.gainAbility(Spells.GuidingBolt),
    CharacterEffects.gainAbility(Spells.MagicWeapon),
    CharacterEffects.gainAbility(Spells.ShieldOfFaith),
    CharacterEffects.gainAbility(Spells.SpiritualWeapon),
    CharacterEffects.conditional(Traits.traitPrerequisite(Level5), [
      CharacterEffects.gainAbility(Spells.CrusadersMantle),
      CharacterEffects.gainAbility(Spells.SpiritGuardians),
    ]),
  ],
})

export const WarDomain = Traits.defineTrait('cleric/war-domain', {
  name: 'War Domain',
  description:
    'A domain of **war and violence**, whose priests inspire valor in the faithful, punish the foes of their gods, and fight as champions of the battlefield.',
  tags: [ClericSubclass],
  effects: [CharacterEffects.gainTrait(WarDomainSpells)],
})

export const GuidedStrike = Abilities.defineAbility('cleric/guided-strike', {
  name: 'Guided Strike',
  prerequisites: [Traits.traitPrerequisite(WarDomain)],
  effects: [
    CharacterEffects.descriptive(
      "When you or a creature within 30 feet of you misses with an attack roll, you can expend a use of your **Channel Divinity** and give that roll a **+10 bonus**, potentially causing it to hit.\n\nUsing this feature on another creature's attack roll takes your **Reaction**."
    ),
  ],
  actions: [
    { name: 'Guide Your Own Strike', action: ActionTypes.Free, costs: [{ cost: 1, resource: ChannelDivinityPool }] },
    { name: "Guide an Ally's Strike", action: ActionTypes.Reaction, costs: [{ cost: 1, resource: ChannelDivinityPool }] },
  ],
})

export const WarPriest = Abilities.defineAbility('cleric/war-priest', {
  name: 'War Priest',
  prerequisites: [Traits.traitPrerequisite(WarDomain)],
  effects: [
    CharacterEffects.descriptive(
      'You can make one attack with a weapon or an Unarmed Strike.\n\nYou can use this feature a number of times equal to your Wisdom modifier (minimum of once), regaining all uses when you finish a Short or Long Rest.'
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
      action: ActionTypes.BonusAction,
    },
  ],
})
