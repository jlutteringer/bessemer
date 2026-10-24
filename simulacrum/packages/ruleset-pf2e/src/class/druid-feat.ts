import { Abilities, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import { ClassFeat, DruidFeat, Feat, FeatLevel1, FeatLevel2, FeatLevel4, RangerFeat, WitchFeat, WizardFeat } from '@simulacrum/ruleset-pf2e/archetype'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { SelectAnimalCompanion } from '@simulacrum/ruleset-pf2e/companion/animal-companion'
import * as DruidFocusSpells from '@simulacrum/ruleset-pf2e/class/druid-focus-spell'

export const AnimalOrderMembership = Traits.defineTrait('druid/order-membership/animal', {
  name: 'Animal Order Membership',
  description: 'You are a member of the animal order for the purpose of meeting feat prerequisites.',
  effects: [],
})

export const LeafOrderMembership = Traits.defineTrait('druid/order-membership/leaf', {
  name: 'Leaf Order Membership',
  description: 'You are a member of the leaf order for the purpose of meeting feat prerequisites.',
  effects: [],
})

export const StormOrderMembership = Traits.defineTrait('druid/order-membership/storm', {
  name: 'Storm Order Membership',
  description: 'You are a member of the storm order for the purpose of meeting feat prerequisites.',
  effects: [],
})

export const UntamedOrderMembership = Traits.defineTrait('druid/order-membership/untamed', {
  name: 'Untamed Order Membership',
  description: 'You are a member of the untamed order for the purpose of meeting feat prerequisites.',
  effects: [],
})

export const AnimalCompanion = Traits.defineTrait('feat/animal-companion', {
  name: 'Animal Companion',
  description:
    "*Druid, Ranger*\n\n**Prerequisites** [[Druid](trait:druid)] animal order\n\nYou gain the service of a young animal companion that travels with you on your adventures and obeys any simple commands you give it to the best of its abilities. See [Animal Companions](content:classes/animal-companions) for more information.\n\n**[Ranger](trait:ranger)**: When you [Hunt Prey](trait:ranger/hunt-prey), your animal companion gains the action's benefits and your hunter's edge benefit if you have one.",
  archetypes: [Feat, ClassFeat, DruidFeat, RangerFeat, FeatLevel1],
  prerequisites: [
    Expressions.or([
      Traits.traitPrerequisite(AnimalOrderMembership),
      Expressions.not(
        Expressions.or([
          Traits.traitPrerequisite(LeafOrderMembership),
          Traits.traitPrerequisite(StormOrderMembership),
          Traits.traitPrerequisite(UntamedOrderMembership),
        ])
      ),
    ]),
  ],
  effects: [Effects.gainCharacterOption(SelectAnimalCompanion)],
})

export const AnimalEmpathyDruid = Traits.defineTrait('feat/animal-empathy-druid', {
  name: 'Animal Empathy (Druid)',
  description:
    '*Druid*\n\nYou have a connection to the creatures of the natural world that allows you to communicate with them on a rudimentary level. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with animals. In most cases, wild animals will give you time to make your case.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const LeshyFamiliar = Traits.defineTrait('feat/leshy-familiar', {
  name: 'Leshy Familiar',
  description:
    "*Druid*\n\n**Prerequisites** leaf order\n\nYou call a minor spirit of nature into a plant body, creating a leshy companion to aid you in your spellcasting. You gain a familiar, which has your choice of either the plant or fungus familiar ability; this doesn't count against your usual limit of familiar abilities (typically 2). The spirit you call has a more tenuous connection to its plant body than fully independent leshies, so it is Tiny in size like other familiars.",
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const PlantEmpathy = Traits.defineTrait('feat/plant-empathy', {
  name: 'Plant Empathy',
  description:
    '*Druid*\n\nYou have a connection to flora that allows you to communicate with them on a rudimentary level. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with plants and fungus.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const StormBorn = Traits.defineTrait('feat/storm-born', {
  name: 'Storm Born',
  description:
    '*Druid*\n\n**Prerequisites** storm order\n\nYou are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or [Perception](characteristic:perception) checks caused by weather, and your targeted spells don’t require a flat check to succeed against a target concealed by weather (such as fog).',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [],
})

export const UntamedForm = Traits.defineTrait('feat/untamed-form', {
  name: 'Untamed Form',
  description:
    '*Druid*\n\n**Prerequisites** untamed order\n\nYou are one with the wild, always changing and adapting to meet any challenge. You gain the [_untamed form_](ability:spell/untamed-form) order spell, which lets you transform into a variety of shapes that you can expand with druid feats.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(UntamedOrderMembership)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.UntamedForm),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const VerdantWeapon = Traits.defineTrait('feat/verdant-weapon', {
  name: 'Verdant Weapon',
  description:
    '*Druid, Exploration*\n\nYou cultivate a seed that can sprout into a wooden staff, vine whip, or another weapon. You spend 10 minutes focusing primal energy into a seed, imprinting it with the potential of a single level 0 weapon you are trained with and that has no mechanical parts or metal components. When holding the imprinted seed, you can use an [Interact](content:playing-the-game/interact) action to cause it to immediately grow into that weapon; a second Interact action returns it to seed form. The verdant weapon can be etched with runes or affixed with talismans as normal, which are suppressed when the weapon is in seed form.\n\nYou can have only one verdant seed at a time. If you prepare a second, your first verdant seed immediately becomes a mundane seed; any runes on the previous seed transfer to the new seed at no cost, but inapplicable runes are suppressed.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const WidenSpell = Traits.defineTrait('feat/widen-spell', {
  name: 'Widen Spell',
  description:
    '*Druid, Manipulate, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\nYou manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell) that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.',
  archetypes: [Feat, ClassFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel1],
  effects: [],
})

export const WidenSpellAction = Abilities.defineAbility('feat/widen-spell/action', {
  name: 'Widen Spell',
  description: '*Druid, Manipulate, Oracle, Sorcerer, Spellshape, Witch, Wizard*',
  prerequisites: [Traits.traitPrerequisite(WidenSpell)],
  actions: [
    {
      name: 'Widen Spell',
      description:
        'You manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell) that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const CallOfTheWild = Traits.defineTrait('feat/call-of-the-wild', {
  name: 'Call of the Wild',
  description:
    '*Druid*\n\nYou call upon the creatures of nature to come to your aid. You can spend 10 minutes in concert with nature to replace a spell you’ve prepared in one of your druid spell slots with a summon animal or summon plant or fungus spell of the same rank.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel2],
  effects: [],
})

export const EnhancedFamiliar = Traits.defineTrait('feat/enhanced-familiar', {
  name: 'Enhanced Familiar',
  description:
    '*Animist, Druid, Magus, Sorcerer, Thaumaturge, Witch, Wizard*\n\n**Prerequisites** a familiar\n\nYou infuse your familiar with additional primal energy, increasing its abilities. You can select four familiar or master abilities each day, instead of two.\n\n**Special** [Witch] Add the bonus familiar abilities you gain for being a witch to this amount. [Wizard] If your arcane thesis is improved familiar attunement, your familiar’s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four.',
  archetypes: [Feat, ClassFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel2],
  effects: [],
})

export const PoisonResistance = Traits.defineTrait('feat/poison-resistance', {
  name: 'Poison Resistance',
  description:
    '*Alchemist, Druid*\n\nYour affinity for the natural world grants you protection against some of its dangers. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel2],
  effects: [],
})

export const AnthropomorphicShape = Traits.defineTrait('feat/anthropomorphic-shape', {
  name: 'Anthropomorphic Shape',
  description:
    "*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nHumanoids' supposed place apart from animals is folly—taking on their forms just requires some extra practice. You add the shapes listed in [_humanoid form_](ability:spell/humanoid-form) to your untamed form list.",
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const ElementalSummons = Traits.defineTrait('feat/elemental-summons', {
  name: 'Elemental Summons',
  description:
    '*Druid*\n\nYou can call the elements to you. You can spend 10 minutes in concert with nature to replace a spell you’ve prepared in one of your druid spell slots with a summon elemental spell of the same rank.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  effects: [],
})

export const ForestPassage = Traits.defineTrait('feat/forest-passage', {
  name: 'Forest Passage',
  description:
    '*Druid*\n\n**Prerequisites** leaf order\n\nYou can always find a path, almost as if foliage parted before you. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const FormControl = Traits.defineTrait('feat/form-control', {
  name: 'Form Control',
  description:
    '*Druid, Manipulate, Spellshape*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nWith additional care and effort, you can take on an alternate shape for a longer period of time. If your next action is to cast untamed form, the spell’s rank is 2 lower than normal (minimum 1st rank), but you can remain transformed for up to 1 hour or the listed duration (whichever is longer). You can still Dismiss untamed form as normal.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const FormControlAction = Abilities.defineAbility('feat/form-control/action', {
  name: 'Form Control',
  description: '*Druid, Manipulate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(FormControl)],
  actions: [
    {
      name: 'Form Control',
      description:
        '**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nWith additional care and effort, you can take on an alternate shape for a longer period of time. If your next action is to cast untamed form, the spell’s rank is 2 lower than normal (minimum 1st rank), but you can remain transformed for up to 1 hour or the listed duration (whichever is longer). You can still Dismiss untamed form as normal.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const LeshyFamiliarSecrets = Traits.defineTrait('feat/leshy-familiar-secrets', {
  name: 'Leshy Familiar Secrets',
  description:
    '*Druid*\n\n**Prerequisites** leaf order\n\nThe leaf order’s secrets allow your familiar to take advantage of its leshy form. You can select one additional familiar ability each day, which must be one of the following leshy familiar abilities. You can’t select more than one ability from this feat at a time.\n\n- **Grasping Tendrils** Your familiar can extend vines or similar tendrils, increasing its reach to 15 feet.\n\n- **Purify Air** Your familiar recycles air, providing enough oxygen for a Medium creature in areas with stale air, such as a sealed chamber or extradimensional space. Creatures within a 15-foot emanation of the leshy gain a +2 circumstance bonus to their saving throws against inhaled poison effects, olfactory effects, or other effects that rely on breathing (such as toxic cloud), at the GM’s discretion.\n\n- **Verdant Burst** When your familiar dies, it releases its primal energy to cast the 3-action version of heal, heightened to a rank 1 lower than your highest-rank spell slot. The heal spell gains a status bonus equal to twice the spell’s rank to the [Hit Points](characteristic:hit-points) it restores to plants. You must be able to cast 2nd-rank spells using spell slots to select this familiar ability.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const MatureAnimalCompanionDruid = Traits.defineTrait('feat/mature-animal-companion-druid', {
  name: 'Mature Animal Companion (Druid)',
  description:
    "*Druid*\n\n**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\nYour animal companion has grown up over the course of your adventures, becoming a mature animal companion and gaining [additional capabilities](content:classes/mature-animal-companions).\n\nYour animal companion has greater independence. During an encounter, even if you don't use the [Command an Animal](content:skills/command-an-animal) action, your animal companion can still use 1 action that round on your turn to [Strike](content:playing-the-game/strike) or [Stride](content:playing-the-game/stride) (or Burrow, [Climb](content:skills/climb), Fly, or [Swim](content:skills/swim) if it has that [Speed](characteristic:speed)). It can do this at any point during your turn, as long as you aren’t currently taking an action. If it does, that’s all the actions it gets that round—you can’t Command it later.",
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(AnimalCompanion)],
  effects: [],
})

export const SnowdriftSpell = Traits.defineTrait('feat/snowdrift-spell', {
  name: 'Snowdrift Spell',
  description:
    '*Cold, Druid, Manipulate, Spellshape*\n\n**Prerequisites** storm order\n\nThe howling wind and precipitation of your magic turn to thick snow. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that has the air, water, or cold trait, and that does not have the fire trait, select one creature affected by the spell on the ground. Each square on the ground under or adjacent to the creature fills with ankle-deep snow. Those squares are difficult terrain until the beginning of your next turn. A creature can [Interact](content:playing-the-game/interact) to clear a square of snow, and the snow in a square melts if that square is exposed to a fire effect.',
  archetypes: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [],
})

export const SnowdriftSpellAction = Abilities.defineAbility('feat/snowdrift-spell/action', {
  name: 'Snowdrift Spell',
  description: '*Cold, Druid, Manipulate, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(SnowdriftSpell)],
  actions: [
    {
      name: 'Snowdrift Spell',
      description:
        '**Prerequisites** storm order\n\nThe howling wind and precipitation of your magic turn to thick snow. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that has the air, water, or cold trait, and that does not have the fire trait, select one creature affected by the spell on the ground. Each square on the ground under or adjacent to the creature fills with ankle-deep snow. Those squares are difficult terrain until the beginning of your next turn. A creature can [Interact](content:playing-the-game/interact) to clear a square of snow, and the snow in a square melts if that square is exposed to a fire effect.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const AllDruidFeatEntities = [
  AnimalOrderMembership,
  LeafOrderMembership,
  StormOrderMembership,
  UntamedOrderMembership,
  AnimalCompanion,
  AnimalEmpathyDruid,
  LeshyFamiliar,
  PlantEmpathy,
  StormBorn,
  UntamedForm,
  VerdantWeapon,
  WidenSpell,
  WidenSpellAction,
  CallOfTheWild,
  EnhancedFamiliar,
  PoisonResistance,
  AnthropomorphicShape,
  ElementalSummons,
  ForestPassage,
  FormControl,
  FormControlAction,
  LeshyFamiliarSecrets,
  MatureAnimalCompanionDruid,
  SnowdriftSpell,
  SnowdriftSpellAction,
]
