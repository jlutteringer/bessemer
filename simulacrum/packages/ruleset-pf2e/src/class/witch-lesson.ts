import { Archetypes, Attributes, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as Spells from '@simulacrum/ruleset-pf2e/spell'
import * as WitchFocusSpells from '@simulacrum/ruleset-pf2e/class/witch-focus-spell'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'

export const WitchBasicLesson = Archetypes.defineArchetype('witch/lesson/basic', { name: 'Basic Lesson' })
export const WitchGreaterLesson = Archetypes.defineArchetype('witch/lesson/greater', { name: 'Greater Lesson' })

export const SelectLessonOfTheElementsSpell = CharacterOptions.selectAbilityOption('witch/lesson/lesson-of-the-elements/select-spell', {
  name: 'Lesson of the Elements Spell',
  filter: { specificOptions: [Spells.BreatheFire, Spells.GustOfWind, Spells.HydraulicPush, Spells.PummelingRubble] },
})

export const LessonOfDreams = Traits.defineTrait('witch/lesson/lesson-of-dreams', {
  name: 'Lesson of Dreams',
  description:
    '**Lesson Type** Basic\n\nDreams can be a window to greater insights. You gain the [Veil of Dreams](ability:spell/veil-of-dreams) hex, and your familiar learns [Sleep](ability:spell/sleep).',
  archetypes: [WitchBasicLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.VeilOfDreams),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.Sleep),
  ],
})

export const LessonOfLife = Traits.defineTrait('witch/lesson/lesson-of-life', {
  name: 'Lesson of Life',
  description:
    '**Lesson Type** Basic\n\nLife can be shared. You gain the [Life Boost](ability:spell/life-boost) hex, and your familiar learns [Spirit Link](ability:spell/spirit-link).',
  archetypes: [WitchBasicLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.LifeBoost),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.SpiritLink),
  ],
})

export const LessonOfProtection = Traits.defineTrait('witch/lesson/lesson-of-protection', {
  name: 'Lesson of Protection',
  description:
    '**Lesson Type** Basic\n\nAn ounce of protection is worth a pound of cure. You gain the [Blood Ward](ability:spell/blood-ward) hex, and your familiar learns [Mystic Armor](ability:spell/mystic-armor).',
  archetypes: [WitchBasicLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.BloodWard),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.MysticArmor),
  ],
})

export const LessonOfVengeance = Traits.defineTrait('witch/lesson/lesson-of-vengeance', {
  name: 'Lesson of Vengeance',
  description:
    '**Lesson Type** Basic\n\nSuffer not even the smallest slights. You gain the [Needle of Vengeance](ability:spell/needle-of-vengeance) hex, and your familiar learns [Phantom Pain](ability:spell/phantom-pain).',
  archetypes: [WitchBasicLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.NeedleOfVengeance),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.PhantomPain),
  ],
})

export const LessonOfTheElements = Traits.defineTrait('witch/lesson/lesson-of-the-elements', {
  name: 'Lesson of the Elements',
  description:
    '**Lesson Type** Basic\n\nNatural disasters and inclement weather hold more power than the mightiest creature. You gain the [Elemental Betrayal](ability:spell/elemental-betrayal) hex. Your familiar learns your choice of [_breathe fire_](ability:spell/breathe-fire), [_gust of wind_](ability:spell/gust-of-wind), [_hydraulic push_](ability:spell/hydraulic-push), or [_pummeling rubble_](ability:spell/pummeling-rubble).',
  archetypes: [WitchBasicLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.ElementalBetrayal),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainCharacterOption(SelectLessonOfTheElementsSpell),
  ],
})

export const LessonOfMischief = Traits.defineTrait('witch/lesson/lesson-of-mischief', {
  name: 'Lesson of Mischief',
  description:
    "**Lesson Type** Greater\n\nNothing's wrong with some mischief, now and then. You gain the [Deceiver's Cloak](ability:spell/deceivers-cloak) hex, and your familiar learns [Mad Monkeys](ability:spell/mad-monkeys).",
  archetypes: [WitchGreaterLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.DeceiversCloak),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.MadMonkeys),
  ],
})

export const LessonOfShadow = Traits.defineTrait('witch/lesson/lesson-of-shadow', {
  name: 'Lesson of Shadow',
  description:
    '**Lesson Type** Greater\n\nA shadow is far from empty—it contains something of the person who casts it. You gain the [Malicious Shadow](ability:spell/malicious-shadow) hex, and your familiar learns [Chilling Darkness](ability:spell/chilling-darkness).',
  archetypes: [WitchGreaterLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.MaliciousShadow),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.ChillingDarkness),
  ],
})

export const LessonOfSnow = Traits.defineTrait('witch/lesson/lesson-of-snow', {
  name: 'Lesson of Snow',
  description:
    '**Lesson Type** Greater\n\nEmulate snow, for it can snuff out life despite its gentleness. You gain the [Personal Blizzard](ability:spell/personal-blizzard) hex, and your familiar learns [Wall of Wind](ability:spell/wall-of-wind).',
  archetypes: [WitchGreaterLesson],
  effects: [
    Effects.gainAbility(WitchFocusSpells.PersonalBlizzard),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
    Effects.gainAbility(Spells.WallOfWind),
  ],
})

export const SelectWitchBasicLesson = CharacterOptions.selectTraitOption('witch/lesson/select-basic', {
  name: 'Basic Lesson',
  filter: { archetypes: [WitchBasicLesson] },
})

export const SelectWitchGreaterLesson = CharacterOptions.selectTraitOption('witch/lesson/select-greater', {
  name: 'Greater Lesson',
  filter: { archetypes: [WitchGreaterLesson] },
})

export const AllWitchLessonEntities = [
  WitchBasicLesson,
  WitchGreaterLesson,
  LessonOfDreams,
  LessonOfLife,
  LessonOfProtection,
  LessonOfVengeance,
  LessonOfTheElements,
  LessonOfMischief,
  LessonOfShadow,
  LessonOfSnow,
]
