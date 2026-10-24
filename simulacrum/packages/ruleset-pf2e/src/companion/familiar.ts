import { Archetypes, CharacterOptions, CharacterValues, Traits } from '@simulacrum/ruleset'
import { Expressions } from '@bessemer/cornerstone/expression'

export const FamiliarAbility = Archetypes.defineTraitArchetype('companion/familiar-ability', { name: 'Familiar Ability' })

export const SelectFamiliarAbility = CharacterOptions.selectTraitOption('companion/select-familiar-ability', {
  name: 'Familiar Ability',
  filter: { archetypes: [FamiliarAbility] },
})

export const ManualDexterity = Traits.defineTrait('companion/familiar-ability/manual-dexterity', {
  name: 'Manual Dexterity',
  description:
    '**Ability Type** Familiar\n\nYour familiar can use up to two of its limbs as if they were hands to perform [manipulate](content:traits/manipulate) actions.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Plant = Traits.defineTrait('companion/familiar-ability/plant', {
  name: 'Plant',
  description:
    '**Ability Type** Familiar\n\nYour familiar has the [plant](content:traits/plant) trait instead of the [animal](content:traits/animal) trait.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Resistance = Traits.defineTrait('companion/familiar-ability/resistance', {
  name: 'Resistance',
  description:
    '**Ability Type** Familiar\n\nChoose two of the following: acid, cold, electricity, fire, poison, or sonic. Your familiar gains resistance equal to half your level (minimum resistance 1) against the chosen damage types.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Speech = Traits.defineTrait('companion/familiar-ability/speech', {
  name: 'Speech',
  description: '**Ability Type** Familiar\n\nYour familiar understands and speaks a language you know.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Tough = Traits.defineTrait('companion/familiar-ability/tough', {
  name: 'Tough',
  description: "**Ability Type** Familiar\n\nYour familiar's max HP increase by 2 per level.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Accompanist = Traits.defineTrait('companion/familiar-ability/accompanist', {
  name: 'Accompanist',
  description:
    "**Ability Type** Familiar\n\nYour familiar helps you perform. Whenever you attempt a [Performance](characteristic:skill/performance) check, if your familiar is nearby and can act, it accompanies you with chirps, claps, or its own miniature instrument. This grants you a +1 circumstance bonus, or +2 if you're a master in Performance.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Amphibious = Traits.defineTrait('companion/familiar-ability/amphibious', {
  name: 'Amphibious',
  description:
    '**Ability Type** Familiar\n\nYour familiar gains the [amphibious](content:traits/amphibious) trait, allowing it to breathe in both air and water, and has both a land [Speed](characteristic:speed) and a swim Speed, each equal to its highest land Speed or swim Speed.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Burrower = Traits.defineTrait('companion/familiar-ability/burrower', {
  name: 'Burrower',
  description: '**Ability Type** Familiar\n\nYour familiar gains a burrow [Speed](characteristic:speed) of 5 feet, allowing it to dig Tiny holes.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Climber = Traits.defineTrait('companion/familiar-ability/climber', {
  name: 'Climber',
  description: '**Ability Type** Familiar\n\nYour familiar gains a climb [Speed](characteristic:speed) of 25 feet.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Construct = Traits.defineTrait('companion/familiar-ability/construct', {
  name: 'Construct',
  description:
    '**Ability Type** Familiar\n\nYour familiar has the [construct](content:traits/construct) trait instead of the [animal](content:traits/animal) trait. The familiar is immune to [death](content:traits/death) effects, [disease](content:traits/disease), [doomed](content:conditions/doomed), [drained](content:conditions/drained), [fatigued](content:conditions/fatigued), [healing](content:traits/healing), [nonlethal](content:traits/nonlethal) attacks, [paralyzed](content:conditions/paralyzed), [poison](content:traits/poison), [sickened](content:conditions/sickened), [spirit](content:traits/spirit), [unconscious](content:conditions/unconscious), [vitality](content:traits/vitality), and [void](content:traits/void). Your familiar must have the tough pet ability to select this.',
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(Tough)],
  effects: [],
})

export const DamageAvoidance = Traits.defineTrait('companion/familiar-ability/damage-avoidance', {
  name: 'Damage Avoidance',
  description:
    "**Ability Type** Familiar\n\nChoose one type of save. Your familiar takes no damage when it rolls a success on that type of save; this doesn't prevent effects other than damage.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Darkvision = Traits.defineTrait('companion/familiar-ability/darkvision', {
  name: 'Darkvision',
  description: '**Ability Type** Familiar\n\nYour familiar gains [darkvision](content:playing-the-game/darkvision-and-greater-darkvision).',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Dragon = Traits.defineTrait('companion/familiar-ability/dragon', {
  name: 'Dragon',
  description:
    '**Ability Type** Familiar\n\nYour familiar has the [dragon](content:traits/dragon) trait instead of the [animal](content:traits/animal) trait.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Echolocation = Traits.defineTrait('companion/familiar-ability/echolocation', {
  name: 'Echolocation',
  description:
    '**Ability Type** Familiar\n\nYour familiar can use hearing as a [precise](content:playing-the-game/precise-senses) sense within 20 feet.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Elemental = Traits.defineTrait('companion/familiar-ability/elemental', {
  name: 'Elemental',
  description:
    '**Ability Type** Familiar\n\nYour familiar has the [elemental](content:traits/elemental) trait instead of the [animal](content:traits/animal) trait. Choose [air](content:traits/air), [earth](content:traits/earth), [fire](content:traits/fire), [metal](content:traits/metal), [water](content:traits/water), or [wood](content:traits/wood). Your familiar gains that trait. The familiar is immune to [bleed](content:conditions/persistent-damage), [paralyzed](content:conditions/paralyzed), [poison](content:traits/poison), [sleep](content:traits/sleep), and the element matching its trait. Your familiar must have the resistance familiar ability to select this.',
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(Resistance)],
  effects: [],
})

export const FastMovement = Traits.defineTrait('companion/familiar-ability/fast-movement', {
  name: 'Fast Movement',
  description: "**Ability Type** Familiar\n\nIncrease one of your familiar's Speeds from 25 feet to 40 feet.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Flier = Traits.defineTrait('companion/familiar-ability/flier', {
  name: 'Flier',
  description: '**Ability Type** Familiar\n\nYour familiar gains a fly [Speed](characteristic:speed) of 25 feet.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const FocusedRejuvenation = Traits.defineTrait('companion/familiar-ability/focused-rejuvenation', {
  name: 'Focused Rejuvenation',
  description:
    '**Ability Type** Familiar\n\nWhen you [Refocus](content:spells/refocus), you generate magical energy that heals your familiar. Your familiar regains 1 Hit Point per level whenever you Refocus.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Fungus = Traits.defineTrait('companion/familiar-ability/fungus', {
  name: 'Fungus',
  description:
    '**Ability Type** Familiar\n\nYour familiar has the [fungus](content:traits/fungus) trait instead of the [animal](content:traits/animal) trait.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Independent = Traits.defineTrait('companion/familiar-ability/independent', {
  name: 'Independent',
  description:
    "**Ability Type** Familiar\n\nIn an encounter, if you don't Command your familiar, it still gains 1 action each round. Typically, you still decide how it spends that action, but, the GM might determine that your familiar chooses its own tactics rather than performing your preferred action. This doesn't work with valet or similar abilities that require a command, if you're capable of riding your familiar, or similar situations.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Kinspeech = Traits.defineTrait('companion/familiar-ability/kinspeech', {
  name: 'Kinspeech',
  description:
    '**Ability Type** Familiar\n\nYour familiar can understand and speak with animals of the same species. To select this, your familiar must be an animal, it must have the speech ability, and you must be at least 6th level.',
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(Speech), Expressions.greaterThanOrEqual(CharacterValues.Level, 6)],
  effects: [],
})

export const MajorResistance = Traits.defineTrait('companion/familiar-ability/major-resistance', {
  name: 'Major Resistance',
  description:
    '**Ability Type** Familiar\n\nYour familiar increases the resistance it gains from its resistance familiar ability to a value equal to your level. To select this you must be at least 8th level.',
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(Resistance), Expressions.greaterThanOrEqual(CharacterValues.Level, 8)],
  effects: [],
})

export const MastersForm = Traits.defineTrait('companion/familiar-ability/masters-form', {
  name: "Master's Form",
  description:
    "**Ability Type** Familiar\n\nYour familiar can change shape as a single action, transforming into a [humanoid](content:traits/humanoid) of your ancestry with the same age, gender, and build of its true form, though it always maintains a clearly unnatural remnant of its nature, such as a cat's eyes or a serpent's tongue. This form is always the same each time it uses this ability. This otherwise uses the effects of [_humanoid form_](ability:spell/humanoid-form), except the change is purely cosmetic. It only appears humanoid and gains no new capabilities. Your familiar must have the manual dexterity and speech abilities to select this.",
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(ManualDexterity), Traits.traitPrerequisite(Speech)],
  effects: [],
})

export const PartnerInCrime = Traits.defineTrait('companion/familiar-ability/partner-in-crime', {
  name: 'Partner in Crime',
  description:
    "**Ability Type** Familiar\n\nYour familiar is your criminal associate. Despite being a minion, your familiar gains 1 reaction at the start of its turns, which it can use only to [Aid](content:playing-the-game/aid) you on a [Deception](characteristic:skill/deception) or [Thievery](characteristic:skill/thievery) skill check (it still has to prepare to help you as normal for the Aid reaction). It automatically succeeds at its check to Aid you with those skills or automatically critically succeeds if you're a master of the skill in question.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const PlantForm = Traits.defineTrait('companion/familiar-ability/plant-form', {
  name: 'Plant Form',
  description:
    "**Ability Type** Familiar\n\nYour plant familiar can change shape as a single action, transforming into a Tiny plant of a type roughly similar to the familiar's nature. This otherwise uses the effects of [_one with plants_](ability:spell/one-with-plants). You must have a familiar with the [plant](content:traits/plant) trait to select this ability.",
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(Plant)],
  effects: [],
})

export const Scent = Traits.defineTrait('companion/familiar-ability/scent', {
  name: 'Scent',
  description:
    '**Ability Type** Familiar\n\nYour familiar can use [scent](content:playing-the-game/scent) as an [imprecise](content:playing-the-game/imprecise-senses) sense within 30 feet',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Skilled = Traits.defineTrait('companion/familiar-ability/skilled', {
  name: 'Skilled',
  description:
    "**Ability Type** Familiar\n\nChoose a skill other than [Acrobatics](characteristic:skill/acrobatics) or [Stealth](characteristic:skill/stealth). Your familiar's modifier for that skill is equal to your level plus your spellcasting attribute modifier, rather than just your level. You can select this ability repeatedly, choosing a different skill each time.",
  archetypes: [FamiliarAbility],
  repeatable: true,
  effects: [],
})

export const Spellcasting = Traits.defineTrait('companion/familiar-ability/spellcasting', {
  name: 'Spellcasting',
  description:
    '**Ability Type** Familiar\n\nChoose a spell in your repertoire or that you prepared today at least 5 ranks lower than your highest-rank spell slot. Your familiar can Cast that Spell once per day using your magical tradition, [spell attack modifier](characteristic:spell-attack), and [spell DC](characteristic:spell-dc). If the spell has a drawback that affects the caster, both you and your familiar are affected. You must be able to cast 6th-rank spells using spell slots to select this.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Toolbearer = Traits.defineTrait('companion/familiar-ability/toolbearer', {
  name: 'Toolbearer',
  description:
    '**Ability Type** Familiar\n\nYour familiar can carry a toolkit of up to light Bulk. So long as your familiar is adjacent to you, you can draw and replace the tools as part of the action that uses them as if you were wearing them. Your familiar must have the manual dexterity ability to select this.',
  archetypes: [FamiliarAbility],
  prerequisites: [Traits.traitPrerequisite(ManualDexterity)],
  effects: [],
})

export const TouchTelepathy = Traits.defineTrait('companion/familiar-ability/touch-telepathy', {
  name: 'Touch Telepathy',
  description:
    '**Ability Type** Familiar\n\nYour familiar can telepathically communicate with you via touch. If it also has the speech ability, it can telepathically communicate via touch with any creature if they share a language.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Valet = Traits.defineTrait('companion/familiar-ability/valet', {
  name: 'Valet',
  description:
    "**Ability Type** Familiar\n\nYou can command your familiar to deliver you items more efficiently. Your familiar doesn't use its 2 actions immediately upon your command. Instead, up to twice before the end of your turn, you can have your familiar [Interact](content:playing-the-game/interact) to retrieve an item of light or negligible Bulk you are wearing and place it into one of your free hands. The familiar can't use this ability to retrieve stowed items. If the familiar has a different number of actions, it can retrieve one item for each action it has when commanded this way.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const AbsorbFamiliar = Traits.defineTrait('companion/familiar-ability/absorb-familiar', {
  name: 'Absorb Familiar',
  description:
    "**Ability Type** Master\n\nYour familiar can transform into a mark you carry on your flesh, typically seeming like a birthmark, tattoo, or gem that vaguely resembles its normal form. When transformed, the familiar can't act except to turn back into a familiar. It isn't affected by area effects and must be targeted separately to affect it, which requires knowledge that it's a creature. This means you and your allies can heal or assist the familiar while most enemies stay unaware of its true nature. Creatures must attempt a DC 20 [Perception](characteristic:perception) check to [Seek](content:playing-the-game/seek) to realize a it is actually a familiar. Your familiar can still communicate its feelings empathically. Transforming the familiar between forms is a 1-minute activity that has the [concentrate](content:traits/concentrate) trait.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const CantripConnection = Traits.defineTrait('companion/familiar-ability/cantrip-connection', {
  name: 'Cantrip Connection',
  description:
    "**Ability Type** Master\n\nYou can prepare an additional [cantrip](content:traits/cantrip) or, if you have a repertoire, designate a cantrip to add to your repertoire every time you select this ability; you can retrain it but can't otherwise change it. You must be able to prepare cantrips or add them to your repertoire to select this.",
  archetypes: [FamiliarAbility],
  repeatable: true,
  effects: [],
})

export const FamiliarFocus = Traits.defineTrait('companion/familiar-ability/familiar-focus', {
  name: 'Familiar Focus',
  description:
    '**Ability Type** Master\n\nOnce per day, your familiar can use 2 actions with the [concentrate](content:traits/concentrate) trait to restore 1 Focus Point to your focus pool, up to your usual maximum. You must have a focus pool to select this.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const InnateSurge = Traits.defineTrait('companion/familiar-ability/innate-surge', {
  name: 'Innate Surge',
  description:
    "**Ability Type** Master\n\nOnce per day, you can draw upon your familiar's innate magic to replenish your own. You can cast one innate spell gained from an ancestry feat that you have already cast today. You must still Cast the Spell and meet the spell's other requirements.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const Lifelink = Traits.defineTrait('companion/familiar-ability/lifelink', {
  name: 'Lifelink',
  description:
    '**Ability Type** Master\n\nIf your familiar would be reduced to 0 HP by damage, as a reaction with the [concentrate](content:traits/concentrate) trait, you can take all the damage, and your familiar takes none. However, special effects that would occur due to that damage (such as snake venom) still apply.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const RecallFamiliar = Traits.defineTrait('companion/familiar-ability/recall-familiar', {
  name: 'Recall Familiar',
  description:
    '**Ability Type** Master\n\nOnce per day, you can use a 3-action activity, which has the [concentrate](content:traits/concentrate) trait, to teleport your familiar to your space. Your familiar must be within 1 mile or the attempt to summon it fails. This is a [teleportation](content:traits/teleportation) effect.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const RestorativeFamiliar = Traits.defineTrait('companion/familiar-ability/restorative-familiar', {
  name: 'Restorative Familiar',
  description:
    '**Ability Type** Master\n\nOnce per day, your familiar can use 2 actions with the [concentrate](content:traits/concentrate) trait to give up some of its energy and heal you. It must be in your space to do so. You restore a number of [Hit Points](characteristic:hit-points) equal to 1d8 times half your level (minimum 1d8).',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const ShareSenses = Traits.defineTrait('companion/familiar-ability/share-senses', {
  name: 'Share Senses',
  description:
    "**Ability Type** Master\n\nOnce every 10 minutes, you can use a single action with the [concentrate](content:traits/concentrate) trait to project your senses into your familiar. When you do, you lose all sensory information from your own body, but can sense through your familiar's body for up to 1 minute. You can Dismiss this effect.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const SpellBattery = Traits.defineTrait('companion/familiar-ability/spell-battery', {
  name: 'Spell Battery',
  description:
    '**Ability Type** Master\n\nYou gain one additional spell slot at least 3 ranks lower than your highest-rank spell slot; you must be able to cast 4th-rank spells using spell slots to select this master ability.',
  archetypes: [FamiliarAbility],
  effects: [],
})

export const SpellDelivery = Traits.defineTrait('companion/familiar-ability/spell-delivery', {
  name: 'Spell Delivery',
  description:
    "**Ability Type** Master\n\nIf your familiar is in your space, you can cast a spell with a range of touch, transfer its power to your familiar, and command the familiar to deliver the spell. If you do, the familiar uses its 2 actions for the round to move to a target of your choice and touch that target. If it doesn't reach the target to touch it this turn, the spell has no effect.",
  archetypes: [FamiliarAbility],
  effects: [],
})

export const AllFamiliarEntities = [
  FamiliarAbility,
  ManualDexterity,
  Plant,
  Resistance,
  Speech,
  Tough,
  Accompanist,
  Amphibious,
  Burrower,
  Climber,
  Construct,
  DamageAvoidance,
  Darkvision,
  Dragon,
  Echolocation,
  Elemental,
  FastMovement,
  Flier,
  FocusedRejuvenation,
  Fungus,
  Independent,
  Kinspeech,
  MajorResistance,
  MastersForm,
  PartnerInCrime,
  PlantForm,
  Scent,
  Skilled,
  Spellcasting,
  Toolbearer,
  TouchTelepathy,
  Valet,
  AbsorbFamiliar,
  CantripConnection,
  FamiliarFocus,
  InnateSurge,
  Lifelink,
  RecallFamiliar,
  RestorativeFamiliar,
  ShareSenses,
  SpellBattery,
  SpellDelivery,
]
