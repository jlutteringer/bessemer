import { Content } from '@simulacrum/ruleset'
import * as Spellcasting from '@simulacrum/ruleset-pf2e/spellcasting'
import * as Cantrip from '@simulacrum/ruleset-pf2e/spell/cantrip'
import * as Rank1 from '@simulacrum/ruleset-pf2e/spell/rank-1'
import * as Rank2 from '@simulacrum/ruleset-pf2e/spell/rank-2'
import * as Rank3 from '@simulacrum/ruleset-pf2e/spell/rank-3'

export const SpellsSection = Content.defineSection('spells', {
  content: {
    name: 'Spells',
    description:
      "Whether it comes in the form of mystic artifacts, mysterious creatures, or wizards weaving strange spells, magic brings fantasy and wonder to Pathfinder. This chapter explains how spells work and how spellcasters prepare and cast their spells.\n\nWith special gestures and utterances, a spellcaster can call forth mystic energies, warp the mind, protect themself against danger, or even create something from nothing. Each class has its own method of learning, preparing, and casting spells, and every individual spell produces a specific effect, so learning new spells gives a spellcaster an increasing array of options to accomplish their goals.\n\n**Magical Traditions**\n\nSpellcasters cast spells from one of four different spell lists, each representing a different magical tradition: arcane, divine, occult, and primal.\n\nYour class determines which tradition of magic your spells use. In some cases, such as when a cleric gains spells from their deity or when a witch gets spells from their patron, you might be able to cast one or more select spells from a different spell list than the list you normally cast from; for instance, clerics of Sarenrae gain the power to summon their goddess's flames with a fireball spell. In these cases, the spell uses your magic tradition, not the list the spell normally comes from. When you cast a spell, add your tradition's trait to the spell.\n\nSome types of magic, such as that of most magic items, don't belong to any single tradition. These have the magical trait instead of a tradition trait.\n\n**Arcane**\n\nArcane spellcasters use logic and rationality to categorize the magic inherent in the world around them. Because of its far-reaching approach, the arcane tradition has the broadest spell list, though it's generally poor at affecting the spirit or the soul. Wizards are a prototypical arcane spellcaster, poring over tomes and grimoires.\n\n**Divine**\n\nThe power of the divine is steeped in faith, the unseen, and belief in a power source from beyond the Universe. Clerics are an iconic divine spellcaster, beseeching the gods to grant them their magic.\n\n**Occult**\n\nThe practitioners of occult traditions seek to understand the unexplainable, categorize the bizarre, and otherwise access the ephemeral in a systematic way. Bards are a fundamental occult spellcaster, collecting strange esoterica and using their performances to influence the mind or elevate the soul.\n\n**Primal**\n\nAn instinctual connection to and faith in the world, the cycle of day and night, the turning of the seasons, and the natural selection of predator and prey drive the primal tradition. Druids are a great example of a primal spellcaster, calling upon the magic of nature through a deep connection to the plants and animals around them.\n\n**The Four Essences**\n\nSpells that affect certain physical or metaphysical forces tend to be grouped into particular magical areas. Scholars of magic widely agree that all of existence is composed of some combination of four essences, though they disagree on the names and particular qualities of each essence.\n\n**Matter**\n\nAlso called body, material essence, or physical essence, matter is the fundamental building block that makes up all physical things in the universe. The arcane and primal traditions are especially attuned toward manipulating and shaping matter.\n\n**Spirit**\n\nAlso called soul, ethereal essence, or spiritual essence, spirit is an otherworldly building block that makes up a being's immaterial and immortal self. The spirit travels through the Ethereal Plane and into the Great Beyond after the death of the physical body. The spirit is most easily affected by divine and occult spells.\n\n**Mind**\n\nAlso called thought, mental, or astral essence, mind is what allows thinking creatures to have rational thoughts, ideas, plans, logic, and memories. Mind touches even non-sapient creatures like animals, though in a more limited capacity. Arcane and occult casters usually excel at mind spells.\n\n**Life**\n\nAlso called heart, faith, instinct, or vital essence, life represents the animating universal force within all things. Whereas matter provides the base materials for a body, life keeps it alive and well. This essence is responsible for unconscious responses and belief, such as ancestral instincts and divine guidance. The divine and primal traditions hold power over life.",
  },
})

export const SpellSlotsSection = Content.defineSection('spells/spell-slots', {
  parent: SpellsSection,
  content: {
    name: 'Spell Slots',
    description:
      'Characters of spellcasting classes can cast a number of spells each day; the spells you can cast in a day are referred to as spell slots. At 1st level, a character has only a small number of 1st-rank spell slots per day, but as you advance in level, you gain more spell slots of higher rank. A spell’s rank indicates its overall power, from 1 to 10.',
  },
})

export const PreparedSpellsSection = Content.defineSection('spells/prepared-spells', {
  parent: SpellSlotsSection,
  content: {
    name: 'Prepared Spells',
    description:
      "If you're a prepared spellcaster—such as a cleric, druid, witch, or wizard—you must spend time each day preparing spells for that day. At the start of your daily preparations, you select a number of spells of different spell ranks, determined by your character level and class. Your spells remain prepared until you cast them or until you prepare spells again.\n\nEach prepared spell is expended after a single casting, so if you want to cast a particular spell more than once in a day, you need to prepare that spell multiple times. The exception to this rule is for spells with the [cantrip](content:traits/cantrip) trait; once you prepare a cantrip, you can cast it as many times as you want until the next time you prepare spells.\n\nYou might gain an ability that allows you to swap prepared spells or perform other aspects of preparing spells at different times throughout the day, but only your daily preparation counts for the purpose of effects that last until the next time you prepare spells.",
  },
})

export const SpontaneousSpellsSection = Content.defineSection('spells/spontaneous-spells', {
  parent: SpellSlotsSection,
  content: {
    name: 'Spontaneous Spells',
    description:
      'If you’re a spontaneous spellcaster—such as a bard—you choose which spell from your spell repertoire that you’re using a spell slot for at the moment you decide to cast it. This provides you with more freedom in your spellcasting, but you have fewer spells in your spell repertoire, as determined by your character level and class. When you make your daily preparations, all your spell slots are refreshed, but you don’t get to change the spells in your repertoire.',
  },
})

export const HeightenedSpellsSection = Content.defineSection('spells/heightened-spells', {
  parent: SpellSlotsSection,
  content: {
    name: 'Heightened Spells',
    description:
      "Both prepared and spontaneous spellcasters can cast a spell at a higher spell rank than that listed for the spell. This is called heightening the spell. A prepared spellcaster can heighten a spell by preparing it in a higher-rank slot than its normal spell rank, while a spontaneous spellcaster can heighten a spell by casting it using a higher-rank spell slot, so long as they know the spell at that rank (see Heightened Spontaneous Spells below). When you heighten your spell, the spell's rank increases to match the higher rank of the spell slot you've prepared it in or used to cast it. This is useful for any spell, because some effects, such as counteracting, depend on the spell's rank.\n\nIn addition, many spells have additional specific benefits when they are heightened, such as increased damage. These extra benefits are described at the end of the spell's stat block. Some heightened entries specify one or more ranks at which the spell must be prepared or cast to gain these extra advantages. Each of these heightened entries states specifically which aspects of the spell change at the given rank. Read the heightened entry only for the spell rank you're using or preparing; if its benefits are meant to include any of the effects of a lower-rank heightened entry, those benefits will be included in the entry.\n\nOther heightened entries give a number after a plus sign, indicating that heightening grants extra advantages over multiple ranks. The listed effect applies for every increment of ranks by which the spell is heightened above its lowest spell rank, and the benefit is cumulative. For example, fireball says “**Heightened (+1)** The damage increases by 2d6.” Because fireball deals 6d6 fire damage at 3rd rank, a 4th-rank fireball would deal 8d6 fire damage, a 5th-rank spell would deal 10d6 fire damage, and so on.",
  },
})

export const HeightenedSpontaneousSpellsSection = Content.defineSection('spells/heightened-spontaneous-spells', {
  parent: HeightenedSpellsSection,
  content: {
    name: 'Heightened Spontaneous Spells',
    description:
      "If you're a spontaneous spellcaster, you must know a spell at the specific rank that you want to cast it in order to heighten it. You can add a spell to your spell repertoire at more than a single rank so that you have more options when casting it. For example, if you added fireball to your repertoire as a 3rd-rank spell and again as a 5th-rank spell, you could cast it as a 3rd-rank or a 5th-rank spell; however, you couldn't cast it as a 4th-rank spell.\n\nMany spontaneous spellcasting classes provide abilities like the signature spells class feature, which allows you to cast a limited number of spells as heightened versions even if you know the spell at only a single rank.\n\nAs a spontaneous caster, you can also choose to cast a lower-rank spell using a higher-rank spell slot without heightening it or knowing it at a higher rank. This casts the spell at the rank you know the spell, not the rank of the higher slot. The spell doesn't have any heightened effects, so it's usually not a very efficient use of your magic outside of highly specific circumstances. For instance, if your party was having trouble with an invisible enemy, and you had revealing light in your repertoire but had already spent all of your 2nd-rank spell slots, it might be worth it to use a 3rd-rank spell slot to cast the spell, even though it'd have no heightened benefit.",
  },
})

export const CantripsSection = Content.defineSection('spells/cantrips', {
  parent: SpellsSection,
  content: {
    name: 'Cantrips',
    description:
      "A cantrip is a special type of spell that's weaker than other spells but can be used with greater freedom and flexibility. The title of a cantrip's stat block says “Cantrip” instead of “Spell”, and the spell has the cantrip trait. Casting a cantrip doesn't use up your spell slots; you can cast a cantrip at will, any number of times per day. If you're a prepared caster, you can prepare a specific number of cantrips each day. You can't prepare a cantrip in a spell slot.\n\nA cantrip is always automatically heightened to half your level, rounded up. For a typical spellcaster, this means its rank is equal to the highest rank of spell slot you have.",
  },
})

export const FocusSpellsSection = Content.defineSection('spells/focus-spells', {
  parent: SpellsSection,
  content: {
    name: 'Focus Spells',
    description:
      "Focus spells are a special type of spell attained directly from a branch of study, from a deity, or from another specific source. You can learn focus spells only through special class features or feats, rather than choosing them from a spell list. Furthermore, you cast focus spells using a special pool of Focus Points—you can't prepare a focus spell in a spell slot or use your spell slots to cast focus spells; similarly, you can't spend your Focus Points to cast spells that aren't focus spells. Even some classes that don't normally grant spellcasting can grant focus spells, such as the ranger. The title of a focus spell's stat block says “Focus” instead of “Spell”, and the spell has the focus trait.\n\nFocus spells are automatically heightened to half your level rounded up, just like cantrips are. You can't cast a focus spell if its minimum rank is greater than half your level rounded up, even if you somehow gain access to it.\n\nCasting any of your focus spells costs you 1 Focus Point. You automatically gain a focus pool the first time you gain an ability that gives you a focus spell. The maximum number of points in your pool is equal to the number of focus spells you know or 3, whichever is lower. This counts only spells that require Focus Points to cast. For example, a bard's composition cantrips don't count toward the size of the pool.\n\nYou replenish all the Focus Points in your pool during your daily preparations. You can also use the Refocus activity to pray, study, meditate, or otherwise reattune yourself to the source of your focus magic and regain 1 Focus Point. You can Refocus multiple times to regain multiple points, up to your pool's maximum.",
  },
})

export const SpellcastersWithFocusSpellsSection = Content.defineSection('spells/spellcasters-with-focus-spells', {
  parent: FocusSpellsSection,
  content: {
    name: 'Spellcasters with Focus Spells',
    description:
      'If you are a spellcaster, your focus spells are the same tradition of spell as the class that gave you the focus spell. A bard’s are occult, a cleric’s are divine, a druid’s are primal, a wizard’s are arcane, and a witch’s are determined by their patron.',
  },
})

export const NonSpellcastersWithFocusSpellsSection = Content.defineSection('spells/non-spellcasters-with-focus-spells', {
  parent: FocusSpellsSection,
  content: {
    name: 'Non-Spellcasters with Focus Spells',
    description:
      'If you get focus spells from a class or other source that doesn’t grant spellcasting ability, the ability that gives you focus spells also provides your proficiency for your spell attack modifier and spell DC, as well as the magical tradition of your focus spells. Though you can cast your focus spells, you don’t qualify for feats and other rules that require you to be a spellcaster or have a spellcasting class feature—those require you to have spell slots.',
  },
})

export const FocusPointsFromMultipleSourcesSection = Content.defineSection('spells/focus-points-from-multiple-sources', {
  parent: FocusSpellsSection,
  content: {
    name: 'Focus Points from Multiple Sources',
    description:
      'It’s possible, especially through archetypes, to gain focus spells from more than one source. If this happens, you have just one focus pool, counting all your focus spells to determine the points in your pool. You can spend any of your Focus Points on any of your focus spells. Likewise, when you Refocus, you get back a point as long as you follow the guidelines of any abilities that granted you focus spells. Having Focus Points from multiple sources doesn’t change the tradition of your spells; if you had both cleric domain spells and druid order spells, your domain spells would remain divine and the order spells primal. Similarly, you need to use the attribute modifier determined by the source of the focus spell',
  },
})

export const RefocusSection = Content.defineSection('spells/refocus', {
  parent: FocusSpellsSection,
  content: {
    name: 'Refocus',
    description:
      '*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\n**Requirements** You have a focus pool\n\nYou spend 10 minutes performing deeds to restore your magical connection. This restores 1 Focus Point to your focus pool. The deeds you need to perform are specified in the class or ability that gives you your focus spells. These deeds can usually overlap with other tasks that relate to the source of your focus spells. For instance, a cleric with focus spells from a holy deity can usually Refocus while tending the wounds of their allies.',
  },
})

export const FocusPointsSection = Content.linkEntity(FocusSpellsSection, Spellcasting.FocusPoints)

export const InnateSpellsSection = Content.defineSection('spells/innate-spells', {
  parent: SpellsSection,
  content: {
    name: 'Innate Spells',
    description:
      "Certain spells are natural to your character, typically coming from your ancestry or a magic item. They're called innate spells. Innate spells don't let you qualify for abilities that require you to be a spellcaster—those require you to have spell slots. The ability that gives you an innate spell tells you how often you can cast it—usually once per day—and its magical tradition. Innate spells are refreshed during your daily preparations. Innate cantrips are cast at will and automatically heightened as normal for [cantrip](content:traits/cantrip) unless otherwise specified.\n\nWhen you gain an innate spell, you become trained in the spell attack modifier and spell DC statistics. At 12th level, these proficiencies increase to expert. Unless noted otherwise, Charisma is your spellcasting attribute modifier for innate spells.\n\nIf you have an innate spell, you can cast it even if it's not of a spell rank you can normally cast. This is especially common for monsters.\n\nYou can't use your spell slots to cast your innate spells, but you might have an innate spell and also be able to prepare or cast the same spell through your class. You also can't heighten innate spells, but some abilities that grant innate spells might give you the spell at a higher rank than its base rank or change the rank at which you cast the spell.",
  },
})

export const CastingSpellsSection = Content.defineSection('spells/casting-spells', {
  parent: SpellsSection,
  content: {
    name: 'Casting Spells',
    description:
      "The casting of a spell can range from a simple word of magical might that creates a fleeting effect to a complex process taking hours to cast and producing a long-term impact. Casting a spell requires the caster to make gestures and utter incantations, so being unable to speak prevents spellcasting for most casters. If your character has a long term disability that prevents or complicates them from speaking (as described in GM Core), work with the GM to determine an analogous way they cast their spells, such as tapping in code on their staff or whistling.\n\nSpellcasting creates obvious sensory manifestations, such as bright lights, crackling sounds, and sharp smells from the gathering magic. Nearly all spells manifest a spell signature—a colorful, glowing ring of magical runes that appears in midair, typically around your hands, though what kind of spellcaster you are can affect this— academic wizards typically have neat and ordered spell signatures, while a druid's might be more organic and a cleric's might be inspired by their deity. How spellcasting looks can vary from one spellcasting tradition or class to another, or even from person to person. You have a great deal of freedom in flavoring your character's magic however you wish!\n\nSpells can vary in how many actions they take, as shown in the spell's stat block. You cast cantrips, spells from spell slots, and focus spells using the same process, but must expend the spell when casting a spell from a spell slot and must spend 1 Focus Point to cast a focus spell. Some rules will refer to the Cast a Spell activity, such as “if the next action you use is to Cast a Spell.” Any spell qualifies as a Cast a Spell activity, and any characteristics of the spell use those of the specific spell you're casting.",
  },
})

export const CostsAndLociSection = Content.defineSection('spells/costs-and-loci', {
  parent: CastingSpellsSection,
  content: {
    name: 'Costs and Loci',
    description:
      "Some spells require you to pay a cost or provide a locus. If the spell lists a cost, you must have the listed money, valuable materials, or other resources to cast the spell (such as gems or magical reagents), and they're expended during the casting.\n\nA **locus** is an object that funnels or directs the magical energy of the spell but is not consumed in its casting. As part of Casting the Spell, you retrieve the locus (if necessary, and if you have a free hand), and you can put it away again if you so choose. Loci tend to be expensive, and you need to acquire them in advance to cast the spell, but they aren't expended like costs are. Unless noted otherwise, a locus has negligible Bulk.",
  },
})

export const LongCastingTimesSection = Content.defineSection('spells/long-casting-times', {
  parent: CastingSpellsSection,
  content: {
    name: 'Long Casting Times',
    description:
      'Some spells take minutes or hours to cast. You can’t use other actions or reactions while casting such a spell, though at the GM’s discretion, you might be able to speak a few sentences. As with other activities that take a long time, these spells have the exploration trait, and you can’t cast them in an encounter. If combat breaks out while you’re casting one, your spell is disrupted (see Disrupted and Lost Spells below).',
  },
})

export const DisruptedAndLostSpellsSection = Content.defineSection('spells/disrupted-and-lost-spells', {
  parent: CastingSpellsSection,
  content: {
    name: 'Disrupted and Lost Spells',
    description:
      'Some abilities and spells can disrupt a spell, causing it to have no effect and be lost. When you lose a spell, you’ve already expended the spell slot and spent the spell’s costs and actions. If a spell is disrupted during a Sustain action, the spell immediately ends. The full rules for disrupting actions appear on page 415.',
  },
})

export const CastASpellSection = Content.defineSection('spells/cast-a-spell', {
  parent: CastingSpellsSection,
  content: {
    name: 'Cast a Spell',
    description:
      'Spells can vary in how many actions they take, as shown in the spell’s stat block. You cast [cantrips](content:spells/cantrips), spells from [spell slots](content:spells/spell-slots), and [focus spells](content:spells/focus-spells) using the same process, but must expend the spell when casting a spell from a spell slot and must spend 1 Focus Point to cast a focus spell. Some rules will refer to the Cast a Spell activity, such as “if the next action you use is to Cast a Spell.” Any spell qualifies as a Cast a Spell activity, and any characteristics of the spell use those of the specific spell you’re casting.\n\nSee rules for [Casting Spells](content:spells/casting-spells) for more information.',
  },
})

export const RangesAreasAndTargetsSection = Content.defineSection('spells/ranges-areas-and-targets', {
  parent: SpellsSection,
  content: {
    name: 'Ranges, Areas, and Targets',
    description:
      "Spells with a range can affect targets, create areas, or make things appear only within that range. Most spell ranges are measured in feet, though some can stretch over miles, reach anywhere on the planet, or go even farther!\n\n**Spellshape**\n\nMany spellcasters can gain access to spellshape actions, typically by selecting spellshape feats. Spellshape actions tweak the properties of your spells. You must use a spellshape action directly before casting the spell you want to alter. If you use any action (including free actions and reactions) other than casting a spell directly after, you waste the benefits of the spellshape action. The benefit is also lost if your turn ends before you cast the spell. Any additional effects added by a spellshape action are part of the spell’s effect, not of the spellshape action itself.\n\n**Subtle Spells**\n\nA spell with the subtle trait can be cast without incantations and doesn't have obvious manifestations. Most of these spells enhance your subterfuge or stealth, such as invisibility. Some abilities, like the [Conceal Spell](trait:feat/conceal-spell) feat, allow you to make spells subtle even if they wouldn't normally be.",
  },
})

export const TouchRangeSection = Content.defineSection('spells/touch-range', {
  parent: RangesAreasAndTargetsSection,
  content: {
    name: 'Touch Range',
    description:
      'A spell with a touch range requires you to physically touch the target. You use your unarmed reach to determine whether you can touch the creature. You can usually touch them automatically, though the spell might specify that they can attempt a saving throw or that you must attempt a spell attack roll. If an ability increases the range of a touch spell, start at 0 feet and increase from there.',
  },
})

export const AreasSection = Content.defineSection('spells/areas', {
  parent: RangesAreasAndTargetsSection,
  content: {
    name: 'Areas',
    description:
      'Sometimes a spell has an area, which can be a burst, cone, emanation, or line (pages 428–429). If the spell originates from your position, the spell has only an area; if you can cause the spell’s area to appear farther away from you, the spell has both a range and an area.',
  },
})

export const TargetsSection = Content.defineSection('spells/targets', {
  parent: RangesAreasAndTargetsSection,
  content: {
    name: 'Targets',
    description:
      "Some spells allow you to target a creature, an object, or something more specific. The target must be within the spell's range, and you must be able to see it (or otherwise perceive it with a precise sense) to target it. At the GM's discretion, you can attempt to target a creature you can't see, as described in Detecting Creatures on page 434. If you fail to target a particular creature, this doesn't change how the spell affects any other targets the spell has.\n\nIf you choose a target that isn't valid, such as if you thought a vampire was a living creature and targeted it with a spell that can target only living creatures, your spell fails to target that creature. If a creature starts out as a valid target but ceases to be one during a spell's duration, the spell typically ends, but the GM might decide otherwise in certain situations. Some spells restrict you to willing targets. A player can declare their character a willing or unwilling target at any time, regardless of turn order or their character's condition (such as when a character is paralyzed, unconscious, or even dead).\n\nSpells that affect multiple creatures in an area can have both an Area entry and a Targets entry. A spell that has an area but no targets listed usually affects all creatures in the area indiscriminately.",
  },
})

export const LineOfEffectSection = Content.defineSection('spells/line-of-effect', {
  parent: RangesAreasAndTargetsSection,
  content: {
    name: 'Line of Effect',
    description:
      'You usually need an unobstructed path to the target of a spell, the origin point of an area, or the place where you create something with a spell. More information on line of effect can be found on page 426.',
  },
})

export const DurationsSection = Content.defineSection('spells/durations', {
  parent: SpellsSection,
  content: {
    name: 'Durations',
    description:
      "The duration of a spell is how long the spell effect lasts. Spells that last for more than an instant have a Duration entry. A spell might last until the start or end of a turn, for some number of rounds, for minutes, or even longer. If a spell's duration is given in rounds, the number of rounds remaining decreases by 1 at the start of each of the spellcaster's turns, ending when the duration reaches 0.\n\nSome spells have effects that remain even after the spell's magic is gone. Any ongoing effect that isn't part of the spell's duration entry isn't magical. For instance, a spell that creates a brief, loud sound might deafen someone for a time, even permanently. This deafness couldn't be counteracted because it is not itself magical (though it might be cured by other magic, such as sound body).\n\nIf a spell's caster dies or is incapacitated during the spell's duration, the spell remains in effect until its duration ends, using the caster's initiative order.",
  },
})

export const SustainingSpellsSection = Content.defineSection('spells/sustaining-spells', {
  parent: DurationsSection,
  content: {
    name: 'Sustaining Spells',
    description:
      'If the spell’s duration is “sustained,” it lasts until the end of your next turn unless you use the Sustain action (page 419) on that turn to extend the duration of that spell.',
  },
})

export const LongDurationsSection = Content.defineSection('spells/long-durations', {
  parent: DurationsSection,
  content: {
    name: 'Long Durations',
    description:
      'If a spell’s duration says it lasts until your next daily preparations, on the next day you can refrain from preparing a new spell in that spell’s slot. (If you are a spontaneous caster, you can instead expend a spell slot during your preparations.) Doing so extends the spell’s duration until your next daily preparations. This effectively Sustains the spell over a long period of time. If you prepare a new spell in the slot (or don’t expend a spell slot), the spell ends. You can’t do this if the spell didn’t come from one of your spell slots. If you are dead or otherwise incapacitated at the 24-hour mark after the time you Cast the Spell or the last time you extended its duration, the spell ends. Spells with an unlimited duration last until counteracted or Dismissed. You don’t need to keep a spell slot open for these spells.',
  },
})

export const DismissingSection = Content.defineSection('spells/dismissing', {
  parent: DurationsSection,
  content: {
    name: 'Dismissing',
    description: 'Some spells can be dismissed, ending the duration early. This requires the caster or target to use the Dismiss action (page 419).',
  },
})

export const DefensesSection = Content.defineSection('spells/defenses', {
  parent: SpellsSection,
  content: {
    name: 'Defenses',
    description:
      'If a spell allows the target to attempt a saving throw or use their AC to defend against it, the type of defense is listed in the stat block. Any details on the particular results and timing of the save appear in the text unless the entry specifies a basic saving throw, which follows a standard rule. If a spell allows a defense only under certain circumstances or at a certain time, the Defenses entry is omitted, since the text needs to explain it in more detail. Whenever a spell allows a saving throw, it uses the caster’s spell DC, and one that allows AC as a defense typically requires a spell attack. More information on how to calculate your spell DC and spell attack modifier appears on page 403.',
  },
})

export const BasicSavingThrowsSection = Content.defineSection('spells/basic-saving-throws', {
  parent: DefensesSection,
  content: {
    name: 'Basic Saving Throws',
    description:
      'If a spell’s Defenses entry specifies a “basic” saving throw, the spell’s potential effects all relate to the damage listed in the spell’s description. The target takes no damage on a critical success, half damage on a success, full damage on a failure, or double damage on a critical failure. The rules for basic saving throws are found on page 404.',
  },
})

export const SpellAttacksSection = Content.defineSection('spells/spell-attacks', {
  parent: SpellsSection,
  content: {
    name: 'Spell Attacks',
    description:
      'Some spells require you to succeed at a spell attack roll to affect the target. This is usually because they require you to precisely aim a ray or otherwise make an accurate attack. A spell attack roll is compared to the target’s AC. Spell attack rolls benefit from any bonuses or penalties to attack rolls, including your multiple attack penalty, but not any special benefits or penalties that apply only to weapon or unarmed attacks. Spell attacks don’t deal any damage beyond what’s listed in the spell description. In rare cases, a spell might have you make some other type of attack, such as a weapon Strike. Such attacks use the normal rules and attack bonus for that type of attack.',
  },
})

export const IdentifyingSpellsSection = Content.defineSection('spells/identifying-spells', {
  parent: SpellsSection,
  content: {
    name: 'Identifying Spells',
    description:
      "Sometimes you need to identify a spell, especially if its effects aren't obvious right away. If you notice a spell being cast, and you have that spell in your repertoire or prepared it that day (even if you already cast it), you automatically know what the spell is, including the rank to which it is heightened.\n\nIf you want to identify a spell but don't have it prepared or in your repertoire, you must spend an action on your turn attempting to identify it using Recall Knowledge. You typically notice a spell being cast due to its sensory [spell manifestations](content:spells/casting-spells). Identifying long-lasting spells that are already in place requires using Identify Magic instead of Recall Knowledge because you don't have the advantage of watching the spell being cast.",
  },
})

export const CounteractingSection = Content.defineSection('spells/counteracting', {
  parent: SpellsSection,
  content: {
    name: 'Counteracting',
    description:
      'Some spells, such as dispel magic, can be used to eliminate the effects of other spells. At least one creature, object, or manifestation of the spell you are trying to counteract must be within range of the spell that you are using. You attempt a counteract check (page 431) using your Charisma (or other spellcasting attribute modifier) and your proficiency bonus for spell attack rolls.',
  },
})

export const HostileActionsSection = Content.defineSection('spells/hostile-actions', {
  parent: SpellsSection,
  content: {
    name: 'Hostile Actions',
    description:
      'Sometimes spells prevent a target from using hostile actions, or the spell ends if a creature uses any hostile actions. A hostile action is one that can harm or damage another creature, whether directly or indirectly, but not one that a creature is unaware could cause harm. For instance, casting fireball into a crowd would be a hostile action, but opening a door and accidentally freeing a horrible monster wouldn’t be. The GM is the final arbitrator of what is a hostile action.',
  },
})

export const SettingTriggersSection = Content.defineSection('spells/setting-triggers', {
  parent: SpellsSection,
  content: {
    name: 'Setting Triggers',
    description:
      "If a spell is meant to respond only to certain events or under certain conditions, it might require you to set a trigger. This is a simple sensory cue that causes the spell to activate. The spell activates as a reaction when the spell's sensor observes something that fits its trigger. Depending on the spell, the trigger might be the presence of a type of creature, such as “red-bearded dwarven men,” or it could be an observed action, such as “whenever someone enters the spell's area.”\n\nDisguises and illusions fool the spell as long as they appear to match its parameters. For a spell to detect something visually, the spell's origin point must have line of sight. Darkness doesn't prevent this, but invisibility does, as does a successful Stealth check to Hide (against the spell's DC). For auditory detection, line of sight isn't necessary, though the sound must be audible at the spell's origin point. A Stealth check to Sneak can fool the sensor.",
  },
})

export const WallsSection = Content.defineSection('spells/walls', {
  parent: SpellsSection,
  content: {
    name: 'Walls',
    description:
      'Spells that create walls list the depth, length, and height of the wall, also specifying how it can be positioned. Some walls can be shaped; you can manipulate the wall into a form other than a straight line, choosing its contiguous path square by square. The path of a shaped wall can’t enter the same space more than once, but it can double back so one section is adjacent to another section of the wall.',
  },
})

export const ReadingSpellsSection = Content.defineSection('spells/reading-spells', {
  parent: SpellsSection,
  content: {
    name: 'Reading Spells',
    description:
      "Each spell uses the following format. Entries appear only when applicable, so not all spells will have every entry described here. The spell's name line also lists the type of spell if it's a cantrip or focus spell, as well as the level.\n\n**Spell Name** (Spell Level)\n\n**Tradition** This entry lists the magical traditions the spell belongs to. Some feats or other abilities might add a spell to your spell list even if you don't follow the listed traditions.\n**Cast** The number of actions required to Cast the Spell are listed here. Spells that can be cast during a single turn have the appropriate icon, as do those that can be cast as a free action or a reaction. Spells that take longer to cast list the time required, such as “1 minute.” After this, the spell's components are listed. If Casting the Spell has a cost, requirements, or a trigger, that information is also listed in this section. A cost includes any money, valuable materials, or other resources that must be expended to cast the spell.\n**Range, Area, and Targets** This entry lists the range of the spell, the area it affects, and the targets it can affect, if any. If none of these entries are present, the spell affects only the caster.\n**Saving Throw and Duration** If a spell allows the target to attempt a saving throw, the type of save appears here. Any details on the particular results and timing of the save appear in the text unless the entry specifies a [basic saving throw](content:playing-the-game/basic-saving-throws). If the spell requires a save only under certain circumstances or at a certain time, this entry is omitted, since the text needs to explain it in more detail. A spell that doesn't list a duration takes place instantaneously, and anything created by it persists after the spell.\n\nA horizontal line follows saving throws and duration, and the effects of the spell are described after this line. This section might also detail the possible results of a saving throw: critical success, success, failure, and critical failure.\n\n**Heightened (level)** If the spell has special effects when heightened, those effects appear at the end of the stat block.\n\n**Other Spell Traits**\n\nBelow is a glossary of a few traits you might see with important rules.\n\n**Darkness And Light**\n\nNon-magical light always shines in non-magical darkness and always fails to shine in magical darkness. Magical light always shines in non-magical darkness but shines in magical darkness only if the light spell has a higher rank than that of the darkness effect. Spells with the darkness trait or the light trait can always counteract one another, but bringing light and darkness into contact doesn't automatically do so. You must usually cast a light spell on a darkness effect directly to counteract it (and vice versa), but some spells automatically attempt to counteract opposing effects.\n\n**Minion**\n\nMinions are creatures that directly serve another creature. Your minion acts on your turn in combat, once per turn, when you spend an action to issue it commands. For an animal companion, you Command an Animal; for a minion that's a spell or magic item effect, like a summoned minion, you Sustain the effect (page 419); if not otherwise specified, you issue a verbal command as a single action with the auditory and concentrate traits. If given no commands, minions use no actions except to defend themselves or to escape obvious harm. If left unattended for long enough, typically 1 minute, mindless minions usually don't act, animals follow their instincts, and sapient minions act how they please.\n\nA minion has only 2 actions and 0 reactions per turn, though certain conditions (such as slowed or quickened) or abilities might give them a reaction that they can use. Alterations to a minion's actions occur when they gain their actions for the round. A minion can't control other creatures.\n\n**Summoned**\n\nA creature called by a spell or effect gains the summoned trait. A summoned creature can't summon other creatures, create things of value, or cast spells that require a cost. It has the minion trait. If it tries to cast a spell of equal or higher rank than the spell that summoned it, it overpowers the summoning magic, causing its own spell to fail and the summon spell to end. Otherwise, the summoned creature uses the standard abilities for a creature of its kind. It generally attacks your enemies to the best of its ability. If you can communicate with it, you can attempt to command it, but the GM determines the degree to which it follows your commands.\n\nImmediately when you finish casting, the summoned creature uses its 2 actions for that turn. A spawn or other creature generated from a summoned creature returns to its unaltered state (usually a corpse in the case of spawn) once the summoned creature is gone. If it's unclear what this state would be, the GM decides. Summoned creatures can be banished by various spells and effects. They are automatically banished if reduced to 0 Hit Points or if the spell that called them ends.\n\n**Morph**\n\nSpells that slightly alter a creature's form have the morph trait. Any Strikes specifically granted by a magical morph effect also gain the magical trait. You can be affected by multiple morph spells at once, but if you morph the same body part more than once, the second morph effect attempts to counteract the first (in the same manner as two polymorph effects, described below). Your morph effects might also end if you are polymorphed and the polymorph effect invalidates or overrides your morph effect. For instance, a morph that gave you wings would be dismissed if you polymorphed into a form that had wings of its own (though if your new form lacked wings, you'd keep the wings from your morph). The GM determines which morph effects can be used together and which can't.\n\n**Polymorph**\n\nThese effects completely transform the target into a new form. A target can't be under the effect of more than one polymorph at a time. If it comes under the effect of another, the second effect attempts to counteract the first. If it succeeds, it takes effect, and if it fails, the spell has no effect on that target. Any Strikes granted by a polymorph effect are magical. Unless otherwise stated, polymorph spells don't allow the target to take on the appearance of a specific individual creature, but rather just a generic creature of a general type or ancestry.\n\nIf you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties. Unless otherwise noted, the battle form prevents you from casting spells, speaking, and using most manipulate actions that require hands. (If there's doubt about whether you can use an action, the GM decides.) Your gear is absorbed into you; the constant abilities of your gear still function, but you can't activate any items. If a polymorph effect causes you to increase in size, you must have space to expand into or the effect is disrupted.\n\n**Illusions**\n\nMagic with the illusion trait creates false sensory stimuli. Sometimes illusions allow creatures a chance to disbelieve the spell, which lets the creature ignore the spell if it succeeds at doing so. This usually happens when a creature Seeks, Interacts, or otherwise spends actions to engage with the illusion, comparing the result of its Perception check (or another check or save the GM chooses) to the caster's spell DC. Mental illusions typically provide rules in the spell's description for disbelieving the effect (usually via a Will save).\n\nIf a creature engages with an illusion in a way that would prove it's not what it seems, the creature might know that an illusion is present, but it still can't ignore the illusion without successfully disbelieving it. Disbelieving a visual illusion makes it and those things it blocks seem hazy and indistinct, which might block vision enough to leave the other side concealed",
  },
})

export const SpellDescriptionsSection = Content.defineSection('spells/spell-descriptions', {
  parent: SpellsSection,
  content: { name: 'Spell Descriptions', description: 'Spells are listed alphabetically by rank, starting with cantrips.' },
})

export const SpellDescriptionsCantripsSection = Content.defineSection('spells/spell-descriptions/cantrips', {
  parent: SpellDescriptionsSection,
  content: { name: 'Cantrips' },
})

export const AllegroSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Allegro)

export const CausticBlastSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.CausticBlast)

export const ClingingIceSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.ClingingIce)

export const CourageousAnthemSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.CourageousAnthem)

export const DazeSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Daze)

export const DetectMagicSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.DetectMagic)

export const DirgeOfDoomSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.DirgeOfDoom)

export const DiscernSecretsSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.DiscernSecrets)

export const DivineLanceSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.DivineLance)

export const ElectricArcSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.ElectricArc)

export const EvilEyeSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.EvilEye)

export const FigmentSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Figment)

export const ForbiddingWardSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.ForbiddingWard)

export const FrostbiteSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Frostbite)

export const GougingClawSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.GougingClaw)

export const GuidanceSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Guidance)

export const HouseOfImaginaryWallsSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.HouseOfImaginaryWalls)

export const IgnitionSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Ignition)

export const KnowTheWaySection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.KnowTheWay)

export const LightSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Light)

export const MessageSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Message)

export const NudgeFateSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.NudgeFate)

export const PrestidigitationSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Prestidigitation)

export const RallyingAnthemSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.RallyingAnthem)

export const ReadAuraSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.ReadAura)

export const ShieldSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Shield)

export const ShroudOfNightSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.ShroudOfNight)

export const SigilSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Sigil)

export const SongOfMarchingSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.SongOfMarching)

export const SongOfStrengthSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.SongOfStrength)

export const StabilizeSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.Stabilize)

export const StokeTheHeartSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.StokeTheHeart)

export const SummonInstrumentSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.SummonInstrument)

export const TangleVineSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.TangleVine)

export const TelekineticHandSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.TelekineticHand)

export const TelekineticProjectileSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.TelekineticProjectile)

export const TripleTimeSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.TripleTime)

export const UpliftingOvertureSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.UpliftingOverture)

export const VitalityLashSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.VitalityLash)

export const VoidWarpSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.VoidWarp)

export const WildingWordSection = Content.linkEntity(SpellDescriptionsCantripsSection, Cantrip.WildingWord)

export const Section1stRankSpellsSection = Content.defineSection('spells/1st-rank-spells', {
  parent: SpellDescriptionsSection,
  content: { name: '1st-Rank Spells' },
})

export const AirBubbleSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.AirBubble)

export const AlarmSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Alarm)

export const AntHaulSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.AntHaul)

export const BaneSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Bane)

export const BlessSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Bless)

export const BreatheFireSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.BreatheFire)

export const CharmSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Charm)

export const CleanseCuisineSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.CleanseCuisine)

export const CommandSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Command)

export const CreateWaterSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.CreateWater)

export const DetectPoisonSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.DetectPoison)

export const DisguiseMagicSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.DisguiseMagic)

export const DizzyingColorsSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.DizzyingColors)

export const EnfeebleSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Enfeeble)

export const FearSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Fear)

export const FleetStepSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.FleetStep)

export const ForceBarrageSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.ForceBarrage)

export const GentleLandingSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.GentleLanding)

export const GoblinPoxSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.GoblinPox)

export const GreaseSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Grease)

export const GrimTendrilsSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.GrimTendrils)

export const GustOfWindSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.GustOfWind)

export const HarmSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Harm)

export const HealSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Heal)

export const HydraulicPushSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.HydraulicPush)

export const IllOmenSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.IllOmen)

export const IllusoryDisguiseSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.IllusoryDisguise)

export const IllusoryObjectSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.IllusoryObject)

export const InfuseVitalitySection = Content.linkEntity(Section1stRankSpellsSection, Rank1.InfuseVitality)

export const ItemFacadeSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.ItemFacade)

export const JumpSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Jump)

export const LockSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Lock)

export const MendingSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Mending)

export const MindlinkSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Mindlink)

export const MysticArmorSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.MysticArmor)

export const PestFormSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.PestForm)

export const PetCacheSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.PetCache)

export const PhantasmalMinionSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.PhantasmalMinion)

export const PhantomPainSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.PhantomPain)

export const ProtectionSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Protection)

export const PummelingRubbleSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.PummelingRubble)

export const RunicBodySection = Content.linkEntity(Section1stRankSpellsSection, Rank1.RunicBody)

export const RunicWeaponSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.RunicWeapon)

export const SanctuarySection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Sanctuary)

export const SleepSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Sleep)

export const SootheSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Soothe)

export const SpiderStingSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SpiderSting)

export const SpiritLinkSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SpiritLink)

export const SummonAnimalSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SummonAnimal)

export const SummonConstructSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SummonConstruct)

export const SummonFeySection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SummonFey)

export const SummonPlantOrFungusSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SummonPlantOrFungus)

export const SummonUndeadSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SummonUndead)

export const SureStrikeSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.SureStrike)

export const TailwindSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Tailwind)

export const ThunderstrikeSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Thunderstrike)

export const VanishingTracksSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.VanishingTracks)

export const VentriloquismSection = Content.linkEntity(Section1stRankSpellsSection, Rank1.Ventriloquism)

export const Section2ndRankSpellsSection = Content.defineSection('spells/2nd-rank-spells', {
  parent: SpellDescriptionsSection,
  content: { name: '2nd-Rank Spells' },
})

export const AcidGripSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.AcidGrip)

export const AnimalFormSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.AnimalForm)

export const AnimalMessengerSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.AnimalMessenger)

export const AugurySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Augury)

export const BlazingBoltSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.BlazingBolt)

export const BloodVendettaSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.BloodVendetta)

export const BlurSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Blur)

export const CalmSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Calm)

export const CleanseAfflictionSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.CleanseAffliction)

export const ClearMindSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.ClearMind)

export const CreateFoodSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.CreateFood)

export const DarknessSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Darkness)

export const DarkvisionSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Darkvision)

export const DeafnessSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Deafness)

export const DispelMagicSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.DispelMagic)

export const EmbedMessageSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.EmbedMessage)

export const EnlargeSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Enlarge)

export const EntanglingFloraSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.EntanglingFlora)

export const EnvironmentalEnduranceSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.EnvironmentalEndurance)

export const EverlightSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Everlight)

export const FalseVitalitySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.FalseVitality)

export const FloatingFlameSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.FloatingFlame)

export const GeckoGripSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.GeckoGrip)

export const GhostlyCarrierSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.GhostlyCarrier)

export const HumanoidFormSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.HumanoidForm)

export const IllusoryCreatureSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.IllusoryCreature)

export const InvisibilitySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Invisibility)

export const KnockSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Knock)

export const LaughingFitSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.LaughingFit)

export const MarvelousMountSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.MarvelousMount)

export const MistSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Mist)

export const NoiseBlastSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.NoiseBlast)

export const OakenResilienceSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.OakenResilience)

export const OneWithPlantsSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.OneWithPlants)

export const ParanoiaSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Paranoia)

export const PeacefulRestSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.PeacefulRest)

export const ResistEnergySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.ResistEnergy)

export const RevealingLightSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.RevealingLight)

export const SeeTheUnseenSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SeeTheUnseen)

export const ShapeWoodSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.ShapeWood)

export const ShareLifeSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.ShareLife)

export const ShatterSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Shatter)

export const ShrinkSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Shrink)

export const SilenceSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Silence)

export const SoundBodySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SoundBody)

export const SpeakWithAnimalsSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SpeakWithAnimals)

export const SpiritualArmamentSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SpiritualArmament)

export const StatusSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Status)

export const StupefySection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Stupefy)

export const SummonElementalSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SummonElemental)

export const SureFootingSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.SureFooting)

export const TelekineticManeuverSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.TelekineticManeuver)

export const TranslateSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.Translate)

export const WaterBreathingSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.WaterBreathing)

export const WaterWalkSection = Content.linkEntity(Section2ndRankSpellsSection, Rank2.WaterWalk)

export const Section3rdRankSpellsSection = Content.defineSection('spells/3rd-rank-spells', {
  parent: SpellDescriptionsSection,
  content: { name: '3rd-Rank Spells' },
})

export const AqueousOrbSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.AqueousOrb)

export const BindUndeadSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.BindUndead)

export const BlindnessSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Blindness)

export const ChillingDarknessSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.ChillingDarkness)

export const ClairaudienceSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Clairaudience)

export const CozyCabinSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.CozyCabin)

export const CrisisOfFaithSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.CrisisOfFaith)

export const DreamMessageSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.DreamMessage)

export const EarthbindSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Earthbind)

export const EnthrallSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Enthrall)

export const FeetToFinsSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.FeetToFins)

export const FireballSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Fireball)

export const GhostlyWeaponSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.GhostlyWeapon)

export const HasteSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Haste)

export const HeroismSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Heroism)

export const HolyLightSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.HolyLight)

export const HypercognitionSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Hypercognition)

export const HypnotizeSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Hypnotize)

export const InsectFormSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.InsectForm)

export const LevitateSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Levitate)

export const LightningBoltSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.LightningBolt)

export const LocateSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Locate)

export const MadMonkeysSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.MadMonkeys)

export const MindReadingSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.MindReading)

export const OneWithStoneSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.OneWithStone)

export const ParalyzeSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Paralyze)

export const RingOfTruthSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.RingOfTruth)

export const SafePassageSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.SafePassage)

export const SlowSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.Slow)

export const SpeakWithPlantsSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.SpeakWithPlants)

export const VampiricFeastSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.VampiricFeast)

export const VeilOfPrivacySection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.VeilOfPrivacy)

export const WallOfThornsSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.WallOfThorns)

export const WallOfWindSection = Content.linkEntity(Section3rdRankSpellsSection, Rank3.WallOfWind)

export const RitualsSection = Content.defineSection('spells/rituals', {
  parent: SpellsSection,
  content: {
    name: 'Rituals',
    description:
      'A ritual is an esoteric and complex spell that anyone can cast. It takes much longer to cast a ritual than a normal spell, but rituals can have more powerful effects.',
  },
})

export const CastingRitualsSection = Content.defineSection('spells/casting-rituals', {
  parent: RitualsSection,
  content: {
    name: 'Casting Rituals',
    description:
      "When you take charge of a ritual, you are its primary caster, and others assisting you are secondary casters. You can be a primary caster for a ritual even if you can't cast spells. You must know the ritual, and the ritual's spell rank can be no higher than half your level rounded up. You must also have the required proficiency rank in the skill used for the ritual's primary check (see Checks below), and as the primary caster, you must attempt this skill check to determine the ritual's effects. The primary skill check determines the tradition.\n\nRituals do not require spell slots to cast. You can heighten a ritual up to half your level rounded up, decided when the ritual is initiated. A ritual always takes at least 1 hour to perform, and often longer. While a ritual is a downtime activity, it's possible—albeit risky—to perform a ritual during exploration with enough uninterrupted time. A ritual's casting time is usually listed in days. Each day of casting requires 8 hours of participation in the ritual from all casters, with breaks during multiday rituals to allow rest. One caster can continue a multiday ritual, usually with some light chanting or meditation, while the other casters rest. All rituals require repeated spellcasting words and gestures throughout their casting time.",
  },
})

export const LearningRitualsSection = Content.defineSection('spells/learning-rituals', {
  parent: CastingRitualsSection,
  content: {
    name: 'Learning Rituals',
    description:
      'Learning a ritual does not count against any limits on spells in your spell repertoire or on any other normal spellcasting ability. Rituals are never common, though if you look hard, you can probably find someone who can perform an uncommon ritual for you. They may still be unwilling to teach it to you.',
  },
})

export const CostSection = Content.defineSection('spells/cost', {
  parent: CastingRitualsSection,
  content: {
    name: 'Cost',
    description:
      'A ritual’s Cost entry lists valuable components required to cast the ritual. If a ritual doesn’t have any such components, it won’t have a Cost entry. The cost is consumed when you attempt the primary skill check. Costs are often presented as a base cost multiplied by the target’s level and sometimes the spell’s rank. If the target’s level is lower than 1, multiply the cost by 1 instead. Heightened versions that increase the base cost multiply it by the target’s level or another value as appropriate. Most rituals that create permanent creatures, such as create undead, use costs based on the level of the creature, as presented on Creature Creations Ritual Table on page 390.\n\n## Creature Creation Rituals\n\n| **Creature Level** | **Ritual Rank Required** | **Cost** |\n|---|---|---|\n| -1 or 0 | 2 | 15 gp |\n| 1 | 2 | 60 gp |\n| 2 | 3 | 105 gp |\n| 3 | 3 | 180 gp |\n| 4 | 4 | 300 gp |\n| 5 | 4 | 480 gp |\n| 6 | 5 | 750 gp |\n| 7 | 5 | 1,080 gp |\n| 8 | 6 | 1,500 gp |\n| 9 | 6 | 2,100 gp |\n| 10 | 7 | 3,000 gp |\n| 11 | 7 | 4,200 gp |\n| 12 | 8 | 6,000 gp |\n| 13 | 8 | 9,000 gp |\n| 14 | 9 | 13,500 gp |\n| 15 | 9 | 19,500 gp |\n| 16 | 10 | 30,000 gp |\n| 17 | 10 | 45,000 gp |',
  },
})

export const SecondaryCastersSection = Content.defineSection('spells/secondary-casters', {
  parent: CastingRitualsSection,
  content: {
    name: 'Secondary Casters',
    description:
      'Many rituals need additional secondary casters, who also don’t need to be able to cast spells. Unlike a primary caster, a secondary caster doesn’t need a minimum level or skill proficiency. The Secondary Casters entry, if present, indicates the minimum number of secondary casters required.',
  },
})

export const ChecksSection = Content.defineSection('spells/checks', {
  parent: CastingRitualsSection,
  content: {
    name: 'Checks',
    description:
      "At the ritual's culmination, you must attempt the skill check listed in the Primary Check entry to determine the ritual's outcome. Primary checks usually have a very hard DC for a level that's twice the ritual's spell rank. As with other downtime activities, fortune and misfortune effects can't modify your checks for the ritual, nor can bonuses or penalties that aren't active throughout the process.\n\nThe GM can adjust the DCs of rituals, add or change primary or secondary checks, or even waive requirements to fit specific circumstances. For example, performing a ritual in a location where ley lines converge on the night of a new moon might make a normally difficult ritual drastically easier.",
  },
})

export const SecondaryChecksSection = Content.defineSection('spells/secondary-checks', {
  parent: ChecksSection,
  content: {
    name: 'Secondary Checks',
    description:
      "Often, a ritual requires secondary checks to represent aspects of its casting, usually with a standard DC for a level twice the ritual's spell rank. A different secondary caster must attempt each secondary check. If there are more secondary casters than checks, the others don't attempt any.\n\nSecondary casters attempt their checks before you attempt the primary check; no matter their results, the ritual proceeds to the primary check. Secondary checks affect the primary check depending on their results.\n**Critical Success** You gain a +2 circumstance bonus to the primary check.\n**Success** No bonus or penalty.\n**Failure** You take a –4 circumstance penalty to the primary check.\n**Critical Failure** As failure, and you reduce the degree of success of the primary skill check by one step.",
  },
})

export const EffectSection = Content.defineSection('spells/effect', {
  parent: CastingRitualsSection,
  content: {
    name: 'Effect',
    description:
      'A ritual’s effect depends on the result of the primary check. If an effect lists a save DC, use your spell DC for the ritual’s magic tradition (or 12 + your level + your highest mental attribute modifier, if you don’t have a spell DC).',
  },
})

export const ArcaneSpellListSection = Content.linkEntity(SpellsSection, Spellcasting.ArcaneSpellList)

export const DivineSpellListSection = Content.linkEntity(SpellsSection, Spellcasting.DivineSpellList)

export const OccultSpellListSection = Content.linkEntity(SpellsSection, Spellcasting.OccultSpellList)

export const PrimalSpellListSection = Content.linkEntity(SpellsSection, Spellcasting.PrimalSpellList)

export const SpellsContent = [
  SpellsSection,
  SpellSlotsSection,
  PreparedSpellsSection,
  SpontaneousSpellsSection,
  HeightenedSpellsSection,
  HeightenedSpontaneousSpellsSection,
  CantripsSection,
  FocusSpellsSection,
  SpellcastersWithFocusSpellsSection,
  NonSpellcastersWithFocusSpellsSection,
  FocusPointsFromMultipleSourcesSection,
  RefocusSection,
  FocusPointsSection,
  InnateSpellsSection,
  CastingSpellsSection,
  CostsAndLociSection,
  LongCastingTimesSection,
  DisruptedAndLostSpellsSection,
  CastASpellSection,
  RangesAreasAndTargetsSection,
  TouchRangeSection,
  AreasSection,
  TargetsSection,
  LineOfEffectSection,
  DurationsSection,
  SustainingSpellsSection,
  LongDurationsSection,
  DismissingSection,
  DefensesSection,
  BasicSavingThrowsSection,
  SpellAttacksSection,
  IdentifyingSpellsSection,
  CounteractingSection,
  HostileActionsSection,
  SettingTriggersSection,
  WallsSection,
  ReadingSpellsSection,
  SpellDescriptionsSection,
  SpellDescriptionsCantripsSection,
  AllegroSection,
  CausticBlastSection,
  ClingingIceSection,
  CourageousAnthemSection,
  DazeSection,
  DetectMagicSection,
  DirgeOfDoomSection,
  DiscernSecretsSection,
  DivineLanceSection,
  ElectricArcSection,
  EvilEyeSection,
  FigmentSection,
  ForbiddingWardSection,
  FrostbiteSection,
  GougingClawSection,
  GuidanceSection,
  HouseOfImaginaryWallsSection,
  IgnitionSection,
  KnowTheWaySection,
  LightSection,
  MessageSection,
  NudgeFateSection,
  PrestidigitationSection,
  RallyingAnthemSection,
  ReadAuraSection,
  ShieldSection,
  ShroudOfNightSection,
  SigilSection,
  SongOfMarchingSection,
  SongOfStrengthSection,
  StabilizeSection,
  StokeTheHeartSection,
  SummonInstrumentSection,
  TangleVineSection,
  TelekineticHandSection,
  TelekineticProjectileSection,
  TripleTimeSection,
  UpliftingOvertureSection,
  VitalityLashSection,
  VoidWarpSection,
  WildingWordSection,
  Section1stRankSpellsSection,
  AirBubbleSection,
  AlarmSection,
  AntHaulSection,
  BaneSection,
  BlessSection,
  BreatheFireSection,
  CharmSection,
  CleanseCuisineSection,
  CommandSection,
  CreateWaterSection,
  DetectPoisonSection,
  DisguiseMagicSection,
  DizzyingColorsSection,
  EnfeebleSection,
  FearSection,
  FleetStepSection,
  ForceBarrageSection,
  GentleLandingSection,
  GoblinPoxSection,
  GreaseSection,
  GrimTendrilsSection,
  GustOfWindSection,
  HarmSection,
  HealSection,
  HydraulicPushSection,
  IllOmenSection,
  IllusoryDisguiseSection,
  IllusoryObjectSection,
  InfuseVitalitySection,
  ItemFacadeSection,
  JumpSection,
  LockSection,
  MendingSection,
  MindlinkSection,
  MysticArmorSection,
  PestFormSection,
  PetCacheSection,
  PhantasmalMinionSection,
  PhantomPainSection,
  ProtectionSection,
  PummelingRubbleSection,
  RunicBodySection,
  RunicWeaponSection,
  SanctuarySection,
  SleepSection,
  SootheSection,
  SpiderStingSection,
  SpiritLinkSection,
  SummonAnimalSection,
  SummonConstructSection,
  SummonFeySection,
  SummonPlantOrFungusSection,
  SummonUndeadSection,
  SureStrikeSection,
  TailwindSection,
  ThunderstrikeSection,
  VanishingTracksSection,
  VentriloquismSection,
  Section2ndRankSpellsSection,
  AcidGripSection,
  AnimalFormSection,
  AnimalMessengerSection,
  AugurySection,
  BlazingBoltSection,
  BloodVendettaSection,
  BlurSection,
  CalmSection,
  CleanseAfflictionSection,
  ClearMindSection,
  CreateFoodSection,
  DarknessSection,
  DarkvisionSection,
  DeafnessSection,
  DispelMagicSection,
  EmbedMessageSection,
  EnlargeSection,
  EntanglingFloraSection,
  EnvironmentalEnduranceSection,
  EverlightSection,
  FalseVitalitySection,
  FloatingFlameSection,
  GeckoGripSection,
  GhostlyCarrierSection,
  HumanoidFormSection,
  IllusoryCreatureSection,
  InvisibilitySection,
  KnockSection,
  LaughingFitSection,
  MarvelousMountSection,
  MistSection,
  NoiseBlastSection,
  OakenResilienceSection,
  OneWithPlantsSection,
  ParanoiaSection,
  PeacefulRestSection,
  ResistEnergySection,
  RevealingLightSection,
  SeeTheUnseenSection,
  ShapeWoodSection,
  ShareLifeSection,
  ShatterSection,
  ShrinkSection,
  SilenceSection,
  SoundBodySection,
  SpeakWithAnimalsSection,
  SpiritualArmamentSection,
  StatusSection,
  StupefySection,
  SummonElementalSection,
  SureFootingSection,
  TelekineticManeuverSection,
  TranslateSection,
  WaterBreathingSection,
  WaterWalkSection,
  Section3rdRankSpellsSection,
  AqueousOrbSection,
  BindUndeadSection,
  BlindnessSection,
  ChillingDarknessSection,
  ClairaudienceSection,
  CozyCabinSection,
  CrisisOfFaithSection,
  DreamMessageSection,
  EarthbindSection,
  EnthrallSection,
  FeetToFinsSection,
  FireballSection,
  GhostlyWeaponSection,
  HasteSection,
  HeroismSection,
  HolyLightSection,
  HypercognitionSection,
  HypnotizeSection,
  InsectFormSection,
  LevitateSection,
  LightningBoltSection,
  LocateSection,
  MadMonkeysSection,
  MindReadingSection,
  OneWithStoneSection,
  ParalyzeSection,
  RingOfTruthSection,
  SafePassageSection,
  SlowSection,
  SpeakWithPlantsSection,
  VampiricFeastSection,
  VeilOfPrivacySection,
  WallOfThornsSection,
  WallOfWindSection,
  RitualsSection,
  CastingRitualsSection,
  LearningRitualsSection,
  CostSection,
  SecondaryCastersSection,
  ChecksSection,
  SecondaryChecksSection,
  EffectSection,
  ArcaneSpellListSection,
  DivineSpellListSection,
  OccultSpellListSection,
  PrimalSpellListSection,
]
