import { Content } from '@simulacrum/ruleset'

export const ConditionsAppendixSection = Content.defineSection('conditions', {
  content: {
    name: 'Conditions Appendix',
    description:
      "While adventuring, characters (and sometimes their belongings) are affected by abilities and effects that apply conditions. For example, a spell or magic item might turn you [invisible](content:conditions/invisible) or cause you to be gripped by [fear](content:conditions/frightened). Conditions change your state of being in some way, and they represent everything from the attitude other creatures have toward you and how they interact with you to what happens when a creature drains your blood or life essence.\n\nConditions are persistent. Whenever you're affected by a condition, its effects last until the condition's stated duration ends, the condition is removed, or terms dictated in the condition itself cause it to end.\n\nSee the Conditions page for a full list of conditions.\n\n**Death and Dying Rules**\n\nThe [doomed](content:conditions/doomed), [dying](content:conditions/dying), [unconscious](content:conditions/unconscious), and [wounded](content:conditions/wounded) conditions all relate to the process of coming closer to death. The full rules are [here](content:playing-the-game/hit-points-healing-and-dying). The most significant information not contained in the conditions themselves is this: When you're reduced to 0 Hit Points, you're knocked out with the following effects:\n\n- You immediately move your initiative position to directly before the creature or effect that reduced you to 0 Hit Points.\n\n- You gain the dying 1 condition. If the effect that knocked you out was a critical success from the attacker or the result of your critical failure, you gain the dying 2 condition instead. If you have the wounded condition, increase these values by your wounded value. If the damage came from a [nonlethal](content:traits/nonlethal) attack or effect, you don't gain the dying condition—you are instead unconscious with 0 Hit Points.\n\n**Gaining and Losing Actions**\n\n[Quickened](content:conditions/quickened), [slowed](content:conditions/slowed), and [stunned](content:conditions/stunned) are the primary ways you can gain or lose actions. The rules for how this works appear [here](content:playing-the-game/gaining-and-losing-actions). All these conditions alter how many actions you regain at the start of your turn. Gaining quickened or slowed on your turn doesn't adjust your actions that turn. If you get stunned on your turn, first complete any action or activity you're in the middle of. If the stunned condition has a value, lose remaining actions to reduce your stunned value rather than waiting until your next turn.\n\nSome conditions prevent you from taking a certain subset of actions, typically reactions. Other conditions simply say you can't act. When you can't act, you're unable to take any actions at all. Unlike slowed or stunned, these don't change the number of actions you regain; they just prevent you from using them. That means if you are somehow cured of paralysis on your turn, you can act immediately.\n\n**Groups of Conditions**\n\nSome conditions exist relative to one another or share a similar theme. It can be useful to look at these conditions together to understand how they interact.\n\n**Detection:** [Observed](content:conditions/observed), [hidden](content:conditions/hidden), [undetected](content:conditions/undetected), [unnoticed](content:conditions/unnoticed)\n**Senses:** [Blinded](content:conditions/blinded), [concealed](content:conditions/concealed), [dazzled](content:conditions/dazzled), [deafened](content:conditions/deafened), [invisible](content:conditions/invisible)\n**Death and Dying:** [Doomed](content:conditions/doomed), [dying](content:conditions/dying), [unconscious](content:conditions/unconscious), [wounded](content:conditions/wounded)\n**Attitudes:** [Hostile](content:conditions/hostile), [unfriendly](content:conditions/unfriendly), [indifferent](content:conditions/indifferent), [friendly](content:conditions/friendly), [helpful](content:conditions/helpful)\n**Lowered Abilities:** [Clumsy](content:conditions/clumsy), [drained](content:conditions/drained), [enfeebled](content:conditions/enfeebled), [stupefied](content:conditions/stupefied)\n\n**Redundant Conditions**\n\nYou can have a given condition only once at a time. If an effect would impose a condition you already have, you now have that condition for the longer of the two durations. The shorter-duration condition effectively ends, though other conditions caused by the original, shorter-duration effect might continue.\n\nFor example, let's say you have been hit by a monster that crushes your arm; your wound causes you to be [enfeebled](content:conditions/enfeebled) 2 and [off-guard](content:conditions/off-guard) until the end of the monster's next turn. Before the end of that creature's next turn, a trap poisons you, making you enfeebled 2 for 1 minute. In this case, the enfeebled 2 that lasts for 1 minute replaces the enfeebled 2 from the monster, so you would be enfeebled 2 for the longer duration. You would remain off-guard, since nothing replaced that condition, and it still lasts only until the end of the monster's next turn.\n\nAny ability that removes a condition removes it entirely, no matter what its condition value is or how many times you've been affected by it. In the example above, a spell that removes the enfeebled condition from you would remove it entirely—the spell wouldn't need to remove it twice.\n\n**Redundant Conditions With Values**\n\nConditions with different values are considered different conditions. If you're affected by a condition with a value multiple times, you apply only the highest value, although you might have to track both durations if one has a lower value but lasts longer. For example, if you had a [slowed](content:conditions/slowed) 2 condition that lasts 1 round and a slowed 1 condition that lasts for 6 rounds, you'd be slowed 2 for the first round, and then you'd change to slowed 1 for the remaining 5 rounds of the second effect's duration. If something reduces the condition value, it reduces it for all conditions of that name affecting you. For instance, in this example above, if something reduced your slowed value by 1, it would reduce the first condition from the example to slowed 1 and reduce the second to slowed 0, removing it.",
  },
})

export const ConditionValuesSection = Content.defineSection('conditions/condition-values', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Condition Values',
    description:
      'Some conditions have a number after the condition, called a condition value. This value conveys the severity of a condition, and such conditions often give you a bonus or penalty equal to their value. These values can often be reduced by skills, spells, or simply waiting. If a condition value is ever reduced to 0, the condition ends.',
  },
})

export const OverridingConditionsSection = Content.defineSection('conditions/overriding-conditions', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Overriding Conditions',
    description:
      'Some conditions override others. This is always specified in the entry for the overriding condition. When this happens, all effects of the overridden condition are suppressed until the overriding condition ends. The overridden condition’s duration continues to elapse, and it might run out while suppressed.',
  },
})

export const BlindedSection = Content.defineSection('conditions/blinded', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Blinded',
    description:
      "You can't see. All normal terrain is [difficult terrain](content:playing-the-game/difficult-terrain) to you. You can't detect anything using vision. You automatically critically fail Perception checks that require you to be able to see, and if vision is your only [precise sense](content:playing-the-game/precise-senses), you take a –4 status penalty to Perception checks. You are immune to [visual](content:traits/visual) effects. Blinded overrides [dazzled](content:conditions/dazzled).",
  },
})

export const BrokenSection = Content.defineSection('conditions/broken', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Broken',
    description:
      "Broken is a condition that affects only objects. An object is broken when damage has reduced its Hit Points to equal or less than its Broken Threshold. A broken object can't be used for its normal function, nor does it grant bonuses— with the exception of armor. Broken armor still grants its item bonus to AC, but it also imparts a status penalty to AC depending on its category: –1 for broken light armor, –2 for broken medium armor, or –3 for broken heavy armor.\n\nA broken item still imposes penalties and limitations normally incurred by carrying, holding, or wearing it. For example, broken armor would still impose its Dexterity modifier cap, check penalty, and so forth. If an effect makes an item broken automatically and the item has more HP than its Broken Threshold, that effect also reduces the item's current HP to the Broken Threshold.",
  },
})

export const ClumsySection = Content.defineSection('conditions/clumsy', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Clumsy',
    description:
      'Your movements become clumsy and inexact. Clumsy always includes a value. You take a status penalty equal to the condition value to Dexterity-based rolls and DCs, including AC, Reflex saves, ranged attack rolls, and skill checks using [Acrobatics](characteristic:skill/acrobatics), [Stealth](characteristic:skill/stealth), and [Thievery](characteristic:skill/thievery).',
  },
})

export const ConcealedSection = Content.defineSection('conditions/concealed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Concealed',
    description:
      "You are difficult for one or more creatures to see due to thick fog or some other obscuring feature. You can be concealed to some creatures but not others. While concealed, you can still be [observed](content:conditions/observed), but you're tougher to target. A creature that you're concealed from must succeed at a DC 5 flat check when targeting you with an attack, spell, or other effect. If the check fails, you aren't affected. Area effects aren't subject to this flat check.",
  },
})

export const ConfusedSection = Content.defineSection('conditions/confused', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Confused',
    description:
      "You don't have your wits about you, and you attack wildly. You are [off-guard](content:conditions/off-guard), you don't treat anyone as your ally (though they might still treat you as theirs), and you can't [Delay](content:playing-the-game/delay), Ready, or use reactions.\n\nYou use all your actions to Strike or cast offensive [cantrips](content:traits/cantrip), though the GM can have you use other actions to facilitate attack, such as draw a weapon, move so target is in reach, and so forth. Your targets are determined randomly by the GM. If you have no other viable targets, you target yourself, automatically hitting but not scoring a critical hit. If it's impossible for you to attack or cast spells, you babble incoherently, wasting your actions.\n\nEach time you take damage from an attack or spell, you can attempt a DC 11 flat check to recover from your confusion and end the condition.",
  },
})

export const ControlledSection = Content.defineSection('conditions/controlled', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Controlled',
    description:
      "You have been commanded, magically dominated, or otherwise had your will subverted. The controller dictates how you act and can make you use any of your actions, including attacks, reactions, or even [Delay](content:playing-the-game/delay). The controller usually doesn't have to spend their own actions when controlling you.",
  },
})

export const DazzledSection = Content.defineSection('conditions/dazzled', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Dazzled',
    description:
      'Your eyes are overstimulated or your vision is swimming. If vision is your only [precise sense](content:playing-the-game/precise-senses), all creatures and objects are [concealed](content:conditions/concealed) from you.',
  },
})

export const DeafenedSection = Content.defineSection('conditions/deafened', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Deafened',
    description:
      "You can't hear. You automatically critically fail Perception checks that require you to be able to hear. You take a –2 status penalty to Perception checks for initiative and checks that involve sound but also rely on other senses. If you perform an action that has the [auditory](content:traits/auditory) trait, you must succeed at a DC 5 flat check or the action is lost; attempt the check after spending the action but before any effects are applied. You are immune to auditory effects while deafened.",
  },
})

export const DoomedSection = Content.defineSection('conditions/doomed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Doomed',
    description:
      "Your soul has been gripped by a powerful force that calls you closer to death. Doomed always includes a value. The [dying](content:conditions/dying) value at which you die is reduced by your doomed value. If your maximum dying value is reduced to 0, you instantly die. When you die, you're no longer doomed.\n\nYour doomed value decreases by 1 each time you get a full night's rest.",
  },
})

export const DrainedSection = Content.defineSection('conditions/drained', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Drained',
    description:
      "Your health and vitality have been depleted as you've lost blood, life force, or some other essence. Drained always includes a value. You take a status penalty equal to your drained value on Constitution-based rolls and DCs, such as Fortitude saves. You also lose a number of Hit Points equal to your level (minimum 1) times the drained value, and your maximum Hit Points are reduced by the same amount. For example, if you become drained 3 and you're a 3rd-level character, you lose 9 Hit Points and reduce your maximum Hit Points by 9. Losing these Hit Points doesn't count as taking damage.\n\nEach time you get a full night's rest, your drained value decreases by 1. This increases your maximum Hit Points, but you don't immediately recover the lost Hit Points.",
  },
})

export const DyingSection = Content.defineSection('conditions/dying', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Dying',
    description:
      "You are bleeding out or otherwise at death's door. While you have this condition, you are [unconscious](content:conditions/unconscious). Dying always includes a value, and if it ever reaches dying 4, you die. When you're dying, you must attempt a [recovery check](content:playing-the-game/recovery-checks) at the start of your turn each round to determine whether you get better or worse. Your dying condition increases by 1 if you take damage while dying, or by 2 if you take damage from an enemy's critical hit or a critical failure on your save.\n\nIf you lose the dying condition by succeeding at a recovery check and are still at 0 Hit Points, you remain unconscious, but you can wake up as described in that condition. You lose the dying condition automatically and wake up if you ever have 1 Hit Point or more. Any time you lose the dying condition, you gain the [wounded 1](content:conditions/wounded) condition, or increase your wounded condition value by 1 if you already have that condition.",
  },
})

export const EncumberedSection = Content.defineSection('conditions/encumbered', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Encumbered',
    description:
      "You are carrying more weight than you can manage. While you're encumbered, you're [clumsy 1](content:conditions/clumsy) and take a 10-foot penalty to all your Speeds. As with all penalties to your Speed, this can't reduce your Speed below 5 feet.",
  },
})

export const EnfeebledSection = Content.defineSection('conditions/enfeebled', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Enfeebled',
    description:
      "You're physically weakened. Enfeebled always includes a value. When you are enfeebled, you take a status penalty equal to the condition value to Strength-based rolls and DCs, including Strength-based melee attack rolls, Strength-based damage rolls, and [Athletics](characteristic:skill/athletics) checks.",
  },
})

export const FascinatedSection = Content.defineSection('conditions/fascinated', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Fascinated',
    description:
      "You're compelled to focus your attention on something, distracting you from whatever else is going on around you. You take a –2 status penalty to Perception and skill checks, and you can't use [concentrate](content:traits/concentrate) actions unless they (or their intended consequences) are related to the subject of your fascination, as determined by the GM. For instance, you might be able to [Seek](content:playing-the-game/seek) and [Recall Knowledge](content:skills/recall-knowledge) about the subject, but you likely couldn't cast a spell targeting a different creature. This condition ends if a creature uses [hostile actions](content:spells/hostile-actions) against you or any of your allies.",
  },
})

export const FatiguedSection = Content.defineSection('conditions/fatigued', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Fatigued',
    description:
      "You're tired and can't summon much energy. You take a –1 status penalty to AC and saving throws. You can't use [exploration activities](content:playing-the-game/exploration-activities) performed while traveling, such as those on pages 438–439.\n\nYou recover from fatigue after a full night's rest.",
  },
})

export const FleeingSection = Content.defineSection('conditions/fleeing', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Fleeing',
    description:
      "You're forced to run away due to fear or some other compulsion. On your turn, you must spend each of your actions trying to escape the source of the fleeing condition as expediently as possible (such as by using move actions to flee, or opening doors barring your escape). The source is usually the effect or creature that gave you the condition, though some effects might define something else as the source. You can't [Delay](content:playing-the-game/delay) or Ready while fleeing.",
  },
})

export const FriendlySection = Content.defineSection('conditions/friendly', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Friendly',
    description:
      "This condition reflects a creature's disposition toward a particular character, and only supernatural effects (like a spell) can impose this condition on a PC. A creature that is friendly to a character likes that character. It is likely to agree to [Requests](content:skills/request) from that character as long as they are simple, safe, and don't cost too much to fulfill. If the character (or one of their allies) uses [hostile actions](content:spells/hostile-actions) against the creature, the creature gains a worse attitude condition depending on the severity of the hostile action, as determined by the GM.",
  },
})

export const FrightenedSection = Content.defineSection('conditions/frightened', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Frightened',
    description:
      "You're gripped by fear and struggle to control your nerves. The frightened condition always includes a value. You take a status penalty equal to this value to all your checks and DCs. Unless specified otherwise, at the end of each of your turns, the value of your frightened condition decreases by 1.",
  },
})

export const GrabbedSection = Content.defineSection('conditions/grabbed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Grabbed',
    description:
      "You're held in place by another creature, giving you the [off-guard](content:conditions/off-guard) and [immobilized](content:conditions/immobilized) conditions. If you attempt a [manipulate](content:traits/manipulate) action while grabbed, you must succeed at a DC 5 flat check or it is lost; roll the check after spending the action, but before any effects are applied.",
  },
})

export const HelpfulSection = Content.defineSection('conditions/helpful', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Helpful',
    description:
      "This condition reflects a creature's disposition toward a particular character, and only supernatural effects (like a spell) can impose this condition on a PC. A creature that is helpful to a character wishes to actively aid that character. It will accept reasonable [Requests](content:skills/request) from that character, as long as such requests aren't at the expense of the helpful creature's goals or quality of life. If the character (or one of their allies) uses a [hostile action](content:spells/hostile-actions) against the creature, the creature gains a worse attitude condition depending on the severity of the hostile action, as determined by the GM.",
  },
})

export const HiddenSection = Content.defineSection('conditions/hidden', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Hidden',
    description:
      "While you're hidden from a creature, that creature knows the space you're in but can't tell precisely where you are. You typically become hidden by using [Stealth](characteristic:skill/stealth) to [Hide](content:skills/hide). When [Seeking](content:playing-the-game/seek) a creature using only [imprecise](content:playing-the-game/imprecise-senses) senses, it remains hidden, rather than [observed](content:conditions/observed). A creature you're hidden from is [off-guard](content:conditions/off-guard) to you, and it must succeed at a DC 11 flat check when targeting you with an attack, spell, or other effect or it fails to affect you. Area effects aren't subject to this flat check.\n\nA creature might be able to use the Seek action to try to observe you.",
  },
})

export const HostileSection = Content.defineSection('conditions/hostile', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Hostile',
    description:
      "This condition reflects a creature's disposition toward a particular character, and only supernatural effects (like a spell) can impose on a PC. A creature hostile to a character actively seeks to harm that character. It doesn't necessarily attack, but it won't accept [Requests](content:skills/request) from the character.",
  },
})

export const ImmobilizedSection = Content.defineSection('conditions/immobilized', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Immobilized',
    description:
      "You are incapable of movement. You can't use any actions that have the [move](content:traits/move) trait. If you're immobilized by something holding you in place and an external force would move you out of your space, the force must succeed at a check against either the DC of the effect holding you in place or the relevant defense (usually Fortitude DC) of the monster holding you in place.",
  },
})

export const IndifferentSection = Content.defineSection('conditions/indifferent', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Indifferent',
    description:
      "This condition reflects a creature's disposition toward a particular character, and only supernatural effects (like a spell) can impose this condition on a PC. A creature that is indifferent to a character doesn't really care one way or the other about that character. Assume a creature's attitude to a given character is indifferent unless specified otherwise.",
  },
})

export const InvisibleSection = Content.defineSection('conditions/invisible', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Invisible',
    description:
      "You can't be seen. You're [undetected](content:conditions/undetected) to everyone. Creatures can [Seek](content:playing-the-game/seek) to detect you; if a creature succeeds at its Perception check against your [Stealth](characteristic:skill/stealth) DC, you become [hidden](content:conditions/hidden) to that creature until you [Sneak](content:skills/sneak) to become undetected again. If you become invisible while someone can already see you, you start out hidden to them (instead of undetected) until you successfully Sneak. You can't become [observed](content:conditions/observed) while invisible except via special abilities or magic.",
  },
})

export const ObservedSection = Content.defineSection('conditions/observed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Observed',
    description:
      'Anything in plain view is observed by you. If a creature takes measures to avoid detection, such as by using [Stealth](characteristic:skill/stealth) to [Hide](content:skills/hide), it can become [hidden](content:conditions/hidden) or [undetected](content:conditions/undetected) instead of observed. If you have another [precise sense](content:playing-the-game/precise-senses) besides sight, you might be able to observe a creature or object using that sense instead. You can observe a creature with only your precise senses. When [Seeking](content:playing-the-game/seek) a creature using only imprecise senses, it remains hidden, rather than observed.',
  },
})

export const OffGuardSection = Content.defineSection('conditions/off-guard', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Off-Guard',
    description:
      "You're distracted or otherwise unable to focus your full attention on defense. You take a –2 circumstance penalty to AC. Some effects give you the off-guard condition only to certain creatures or against certain attacks. Others—especially conditions—can make you off-guard against everything. If a rule doesn't specify that the condition applies only to certain circumstances, it applies to all of them, such as “The target is off-guard.”",
  },
})

export const ParalyzedSection = Content.defineSection('conditions/paralyzed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Paralyzed',
    description:
      "You're frozen in place. You have the [off-guard](content:conditions/off-guard) condition and can't act except to [Recall Knowledge](content:skills/recall-knowledge) and use actions that require only your mind (as determined by the GM). Your senses still function, but only in the areas you can perceive without moving, so you can't [Seek](content:playing-the-game/seek).",
  },
})

export const PersistentDamageSection = Content.defineSection('conditions/persistent-damage', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Persistent Damage',
    description:
      "You are taking damage from an ongoing effect, such as from being lit on fire. This appears as “X persistent [type] damage,” where “X” is the amount of damage dealt and “[type]” is the damage type. Like normal damage, it can be doubled or halved based on the results of an attack roll or saving throw. Instead of taking persistent damage immediately, you take it at the end of each of your turns as long as you have the condition, rolling any damage dice anew each time. After you take persistent damage, roll a DC 15 flat check to see if you recover from the persistent damage. If you succeed, the condition ends.\n\n**Persistent Damage Rules**\n\nThe additional rules presented below apply to persistent damage in certain cases.\n\nPersistent damage runs its course and automatically ends after a certain amount of time as fire burns out, blood clots, and the like. The GM determines when this occurs, but it usually takes 1 minute.\n\n**Assisted Recovery**\n\nYou can take steps to help yourself recover from persistent damage, or an ally can help you, allowing you to attempt an additional flat check before the end of your turn. This is usually an activity requiring 2 actions, and it must be something that would reasonably improve your chances (as determined by the GM). For example, you might try to smother a flame or wash off acid. This allows you to attempt an extra flat check immediately, but only once per round.\n\nThe GM decides how your help works, using the following examples as guidelines when there's not a specific action that applies.\n\n- The action to help might require a skill check or another roll to determine its effectiveness.\n\n- Reduce the DC of the flat check to 10 for a particularly appropriate type of help, such as dousing you in water to put out flames.\n\n- Automatically end the condition due to the type of help, such as healing that restores you to your maximum HP to end persistent bleed damage, or submerging yourself in a lake to end persistent fire damage.\n\n- Alter the number of actions required to help you if the means the helper uses are especially efficient or remarkably inefficient.\n\n**Immunities, Resistances, And Weaknesses**\n\nImmunities, resistances, and weaknesses all apply to persistent damage. If an effect deals initial damage in addition to persistent damage, apply immunities, resistances, and weaknesses separately to the initial damage and to the persistent damage. Usually, if an effect negates the initial damage, it also negates the persistent damage, such as with a slashing weapon that also deals persistent bleed damage because it cut you. The GM might rule otherwise in some situations.\n\n**Multiple Persistent Damage Conditions**\n\nYou can be simultaneously affected by multiple persistent damage conditions so long as they have different damage types. If you would gain more than one persistent damage condition with the same damage type, the higher amount of damage overrides the lower amount. If it's unclear which damage would be higher, such as if you're already taking 2 persistent fire damage and then begin taking 1d4 persistent fire damage, the GM decides which source of damage would better fit the scene. The damage you take from persistent damage occurs all at once, so if something triggers when you take damage, it triggers only once; for example, if you're dying with several types of persistent damage, the persistent damage increases your dying condition only once.",
  },
})

export const PetrifiedSection = Content.defineSection('conditions/petrified', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Petrified',
    description:
      "You have been turned to stone. You can't act, nor can you sense anything. You become an object with a Bulk double your normal Bulk (typically 12 for a petrified Medium creature or 6 for a petrified Small creature), AC 9, Hardness 8, and the same current Hit Points you had when alive. You don't have a Broken Threshold. When the petrified condition ends, you have the same number of Hit Points you had as a statue. If the statue is destroyed, you immediately die. While petrified, your mind and body are in stasis, so you don't age or notice the passing of time.",
  },
})

export const ProneSection = Content.defineSection('conditions/prone', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Prone',
    description:
      "You're lying on the ground. You are [off-guard](content:conditions/off-guard) and take a –2 circumstance penalty to attack rolls. The only [move](content:traits/move) actions you can use while you're prone are [Crawl](content:playing-the-game/crawl) and [Stand](content:playing-the-game/stand). Standing up ends the prone condition. You can [Take Cover](content:playing-the-game/take-cover) while prone to hunker down and gain [greater cover](content:playing-the-game/cover) against ranged attacks, even if you don't have an object to get behind, which grants you a +4 circumstance bonus to AC against ranged attacks (but you remain off-guard).\n\nIf you would be knocked prone while you're [Climbing](content:skills/climb) or [Flying](content:playing-the-game/fly), you [fall](content:playing-the-game/falling). You can't be knocked prone when [Swimming](content:skills/swim).",
  },
})

export const QuickenedSection = Content.defineSection('conditions/quickened', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Quickened',
    description:
      "You're able to act more quickly. You gain 1 additional action at the start of your turn each round. Many effects that make you quickened require you use this extra action only in certain ways. If you become quickened from multiple sources, you can use the extra action you've been granted for any single action allowed by any of the effects that made you quickened. Because quickened has its effect at the start of your turn, you don't immediately gain actions if you become quickened during your turn.",
  },
})

export const RestrainedSection = Content.defineSection('conditions/restrained', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Restrained',
    description:
      "You're tied up and can barely move, or a creature has you pinned. You have the [off-guard](content:conditions/off-guard) and [immobilized](content:conditions/immobilized) conditions, and you can't use any [attack](content:traits/attack) or [manipulate](content:traits/manipulate) actions except to attempt to [Escape](content:playing-the-game/escape) or [Force Open](content:skills/force-open) your bonds. Restrained overrides [grabbed](content:conditions/grabbed).",
  },
})

export const SickenedSection = Content.defineSection('conditions/sickened', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Sickened',
    description:
      "You feel ill. Sickened always includes a value. You take a status penalty equal to this value on all your checks and DCs. You can't willingly ingest anything—including [elixirs](content:traits/elixir) and [potions](content:traits/potion)—while sickened.\n\nYou can spend a single action retching in an attempt to recover, which lets you immediately attempt a Fortitude save against the DC of the effect that made you sickened. On a success, you reduce your sickened value by 1 (or by 2 on a critical success).",
  },
})

export const SlowedSection = Content.defineSection('conditions/slowed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Slowed',
    description:
      "You have fewer actions. Slowed always includes a value. When you regain your actions, reduce the number of actions regained by your slowed value. Because you regain actions at the start of your turn, you don't immediately lose actions if you become slowed during your turn.",
  },
})

export const StunnedSection = Content.defineSection('conditions/stunned', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Stunned',
    description:
      "You've become senseless. You can't act. Stunned usually includes a value, which indicates how many total actions you lose, possibly over multiple turns, from being stunned. Each time you regain actions, reduce the number you regain by your stunned value, then reduce your stunned value by the number of actions you lost. For example, if you were stunned 4, you would lose all 3 of your actions on your turn, reducing you to stunned 1; on your next turn, you would lose 1 more action, and then be able to use your remaining 2 actions normally. Stunned might also have a duration instead, such as “stunned for 1 minute,” causing you to lose all your actions for the duration.\n\nStunned overrides [slowed](content:conditions/slowed). If the duration of your stunned condition ends while you are slowed, you count the actions lost to the stunned condition toward those lost to being slowed. So, if you were stunned 1 and slowed 2 at the beginning of your turn, you would lose 1 action from stunned, and then lose only 1 additional action by being slowed, so you would still have 1 action remaining to use that turn.",
  },
})

export const StupefiedSection = Content.defineSection('conditions/stupefied', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Stupefied',
    description:
      'Your thoughts and instincts are clouded. Stupefied always includes a value. You take a status penalty equal to this value on Intelligence-, Wisdom-, and Charisma-based rolls and DCs, including Will saving throws, spell attack modifiers, spell DCs, and skill checks that use these attribute modifiers. Any time you attempt to Cast a Spell while stupefied, the spell is disrupted unless you succeed at a flat check with a DC equal to 5 + your stupefied value.',
  },
})

export const UnconsciousSection = Content.defineSection('conditions/unconscious', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Unconscious',
    description:
      "You're sleeping or have been knocked out. You can't act. You take a –4 status penalty to AC, Perception, and Reflex saves, and you have the [blinded](content:conditions/blinded) and [off-guard](content:conditions/off-guard) conditions. When you gain this condition, you fall [prone](content:conditions/prone) and drop items you're holding unless the effect states otherwise or the GM determines you're positioned so you wouldn't.\n\nIf you're unconscious because you're [dying](content:conditions/dying), you can't wake up while you have 0 Hit Points. If you are restored to 1 Hit Point or more, you lose the dying and unconscious conditions and can act normally on your next turn.\n\nIf you are unconscious and at 0 Hit Points, but not dying, you return to 1 Hit Point and awaken after sufficient time passes. The GM determines how long you remain unconscious, from a minimum of 10 minutes to several hours. If you are healed, you lose the unconscious condition and can act normally on your next turn.\n\nIf you're unconscious and have more than 1 Hit Point (typically because you are asleep or unconscious due to an effect), you wake up in one of the following ways.\n\n- You take damage, though if the damage reduces you to 0 Hit Points, you remain unconscious and gain the dying condition as normal.\n\n- You receive healing, other than the natural healing you get from resting.\n\n- Someone shakes you awake with an Interact action.\n\n- Loud noise around you might wake you. At the start of your turn, you automatically attempt a Perception check against the noise's DC (or the lowest DC if there is more than one noise), waking up if you succeed. If creatures are attempting to stay quiet around you, this Perception check uses their [Stealth](characteristic:skill/stealth) DCs. Some effects make you sleep so deeply that they don't allow you this Perception check.\n\n- If you are simply asleep, the GM decides you wake up either because you have had a restful night's sleep or something disrupted that rest.",
  },
})

export const UndetectedSection = Content.defineSection('conditions/undetected', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Undetected',
    description:
      "When you are undetected by a creature, that creature can't see you at all, has no idea what space you occupy, and can't target you, though you still can be affected by abilities that target an area. When you're undetected by a creature, that creature is [off-guard](content:conditions/off-guard) to you.\n\nA creature you're undetected by can guess which square you're in to try targeting you. It must pick a square and attempt an attack. This works like targeting a [hidden](content:conditions/hidden) creature (requiring a DC 11 flat check, as described under [Detecting Creatures](content:playing-the-game/detecting-creatures)), but the flat check and attack roll are rolled in [secret](content:traits/secret) by the GM, who doesn't reveal whether the attack missed due to failing the flat check, failing the attack roll, or choosing the wrong square. They can [Seek](content:playing-the-game/seek) to try to find you.",
  },
})

export const UnfriendlySection = Content.defineSection('conditions/unfriendly', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Unfriendly',
    description:
      "This condition reflects a creature's disposition toward a particular character, and only supernatural effects (like a spell) can impose this condition on a PC. A creature that is unfriendly to a character dislikes and distrusts that character. The unfriendly creature won't accept [Requests](content:skills/request) from the character.",
  },
})

export const UnnoticedSection = Content.defineSection('conditions/unnoticed', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Unnoticed',
    description:
      "If you're unnoticed by a creature, that creature has no idea you're present. When you're unnoticed, you're also [undetected](content:conditions/undetected). This matters for abilities that can be used only against targets totally unaware of your presence.",
  },
})

export const WoundedSection = Content.defineSection('conditions/wounded', {
  parent: ConditionsAppendixSection,
  content: {
    name: 'Wounded',
    description:
      'You have been seriously injured. If you lose the [dying](content:conditions/dying) condition and do not already have the wounded condition, you become wounded 1. If you already have the wounded condition when you lose the dying condition, your wounded condition value increases by 1. If you gain the dying condition while wounded, increase your dying condition value by your wounded value.\n\nThe wounded condition ends if someone successfully restores Hit Points to you using [Treat Wounds](content:skills/treat-wounds), or if you are restored to full Hit Points by any means and rest for 10 minutes.',
  },
})

export const ConditionsContent = [
  ConditionsAppendixSection,
  ConditionValuesSection,
  OverridingConditionsSection,
  BlindedSection,
  BrokenSection,
  ClumsySection,
  ConcealedSection,
  ConfusedSection,
  ControlledSection,
  DazzledSection,
  DeafenedSection,
  DoomedSection,
  DrainedSection,
  DyingSection,
  EncumberedSection,
  EnfeebledSection,
  FascinatedSection,
  FatiguedSection,
  FleeingSection,
  FriendlySection,
  FrightenedSection,
  GrabbedSection,
  HelpfulSection,
  HiddenSection,
  HostileSection,
  ImmobilizedSection,
  IndifferentSection,
  InvisibleSection,
  ObservedSection,
  OffGuardSection,
  ParalyzedSection,
  PersistentDamageSection,
  PetrifiedSection,
  ProneSection,
  QuickenedSection,
  RestrainedSection,
  SickenedSection,
  SlowedSection,
  StunnedSection,
  StupefiedSection,
  UnconsciousSection,
  UndetectedSection,
  UnfriendlySection,
  UnnoticedSection,
  WoundedSection,
]
