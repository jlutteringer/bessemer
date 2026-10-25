import { Abilities, Attributes, Effects, Traits } from '@simulacrum/ruleset'
import { Patches } from '@bessemer/cornerstone'
import { Expressions } from '@bessemer/cornerstone/expression'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import * as ActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import {
  ClassFeat,
  DruidFeat,
  Feat,
  FeatLevel1,
  FeatLevel2,
  FeatLevel4,
  FeatLevel6,
  FeatLevel8,
  FeatLevel10,
  RangerFeat,
  WitchFeat,
  WizardFeat,
} from '@simulacrum/ruleset-pf2e/tag'
import { TrainedIntimidation } from '@simulacrum/ruleset-pf2e/skill'
import * as Spells from '@simulacrum/ruleset-pf2e/spell/spell'
import { FocusPoints } from '@simulacrum/ruleset-pf2e/spellcasting'
import { SelectAnimalCompanion, SelectIncredibleAnimalCompanion } from '@simulacrum/ruleset-pf2e/companion/animal-companion'
import { SelectFamiliarAbility } from '@simulacrum/ruleset-pf2e/companion/familiar'
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
  tags: [Feat, ClassFeat, DruidFeat, RangerFeat, FeatLevel1],
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
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const LeshyFamiliar = Traits.defineTrait('feat/leshy-familiar', {
  name: 'Leshy Familiar',
  description:
    "*Druid*\n\n**Prerequisites** leaf order\n\nYou call a minor spirit of nature into a plant body, creating a leshy companion to aid you in your spellcasting. You gain a familiar, which has your choice of either the plant or fungus familiar ability; this doesn't count against your usual limit of familiar abilities (typically 2). The spirit you call has a more tenuous connection to its plant body than fully independent leshies, so it is Tiny in size like other familiars.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const PlantEmpathy = Traits.defineTrait('feat/plant-empathy', {
  name: 'Plant Empathy',
  description:
    '*Druid*\n\nYou have a connection to flora that allows you to communicate with them on a rudimentary level. You can ask questions of, receive answers from, and use the [Diplomacy](characteristic:skill/diplomacy) skill with plants and fungus.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const StormBorn = Traits.defineTrait('feat/storm-born', {
  name: 'Storm Born',
  description:
    '*Druid*\n\n**Prerequisites** storm order\n\nYou are at home out in the elements, reveling in the power of nature unleashed. You do not take circumstance penalties to ranged spell attacks or [Perception](characteristic:perception) checks caused by weather, and your targeted spells don’t require a flat check to succeed against a target concealed by weather (such as fog).',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [],
})

export const UntamedForm = Traits.defineTrait('feat/untamed-form', {
  name: 'Untamed Form',
  description:
    '*Druid*\n\n**Prerequisites** untamed order\n\nYou are one with the wild, always changing and adapting to meet any challenge. You gain the [_untamed form_](ability:spell/untamed-form) order spell, which lets you transform into a variety of shapes that you can expand with druid feats.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
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
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel1],
  effects: [],
})

export const WidenSpell = Traits.defineTrait('feat/widen-spell', {
  name: 'Widen Spell',
  description:
    '*Druid, Manipulate, Oracle, Sorcerer, Spellshape, Witch, Wizard*\n\nYou manipulate the energy of your spell, causing it to spread out and affect a wider area. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell) that has an area of a burst, cone, or line and does not have a duration, increase the area of that spell. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet (a burst with a smaller radius is not affected). Add 5 feet to the length of a cone or line that is normally 15 feet long or smaller, and add 10 feet to the length of a larger cone or line.',
  tags: [Feat, ClassFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel1],
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
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel2],
  effects: [],
})

export const EnhancedFamiliar = Traits.defineTrait('feat/enhanced-familiar', {
  name: 'Enhanced Familiar',
  description:
    '*Animist, Druid, Magus, Sorcerer, Thaumaturge, Witch, Wizard*\n\n**Prerequisites** a familiar\n\nYou infuse your familiar with additional primal energy, increasing its abilities. You can select four familiar or master abilities each day, instead of two.\n\n**Special** [Witch] Add the bonus familiar abilities you gain for being a witch to this amount. [Wizard] If your arcane thesis is improved familiar attunement, your familiar’s base number of familiar abilities, before adding any extra abilities from the arcane thesis, is four.',
  tags: [Feat, ClassFeat, DruidFeat, WitchFeat, WizardFeat, FeatLevel2],
  effects: [Effects.gainCharacterOption(SelectFamiliarAbility), Effects.gainCharacterOption(SelectFamiliarAbility)],
})

export const PoisonResistance = Traits.defineTrait('feat/poison-resistance', {
  name: 'Poison Resistance',
  description:
    '*Alchemist, Druid*\n\nYour affinity for the natural world grants you protection against some of its dangers. You gain poison resistance equal to half your level, and you gain a +1 status bonus to saving throws against poisons.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel2],
  effects: [],
})

export const AnthropomorphicShape = Traits.defineTrait('feat/anthropomorphic-shape', {
  name: 'Anthropomorphic Shape',
  description:
    "*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nHumanoids' supposed place apart from animals is folly—taking on their forms just requires some extra practice. You add the shapes listed in [_humanoid form_](ability:spell/humanoid-form) to your untamed form list.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const ElementalSummons = Traits.defineTrait('feat/elemental-summons', {
  name: 'Elemental Summons',
  description:
    '*Druid*\n\nYou can call the elements to you. You can spend 10 minutes in concert with nature to replace a spell you’ve prepared in one of your druid spell slots with a summon elemental spell of the same rank.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  effects: [],
})

export const ForestPassage = Traits.defineTrait('feat/forest-passage', {
  name: 'Forest Passage',
  description:
    '*Druid*\n\n**Prerequisites** leaf order\n\nYou can always find a path, almost as if foliage parted before you. You ignore any difficult terrain caused by plants and fungi, such as bushes, vines, and undergrowth.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const FormControl = Traits.defineTrait('feat/form-control', {
  name: 'Form Control',
  description:
    '*Druid, Manipulate, Spellshape*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nWith additional care and effort, you can take on an alternate shape for a longer period of time. If your next action is to cast untamed form, the spell’s rank is 2 lower than normal (minimum 1st rank), but you can remain transformed for up to 1 hour or the listed duration (whichever is longer). You can still Dismiss untamed form as normal.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
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
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const MatureAnimalCompanionDruid = Traits.defineTrait('feat/mature-animal-companion-druid', {
  name: 'Mature Animal Companion (Druid)',
  description:
    "*Druid*\n\n**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\nYour animal companion has grown up over the course of your adventures, becoming a mature animal companion and gaining [additional capabilities](content:classes/mature-animal-companions).\n\nYour animal companion has greater independence. During an encounter, even if you don't use the [Command an Animal](content:skills/command-an-animal) action, your animal companion can still use 1 action that round on your turn to [Strike](content:playing-the-game/strike) or [Stride](content:playing-the-game/stride) (or Burrow, [Climb](content:skills/climb), Fly, or [Swim](content:skills/swim) if it has that [Speed](characteristic:speed)). It can do this at any point during your turn, as long as you aren’t currently taking an action. If it does, that’s all the actions it gets that round—you can’t Command it later.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
  prerequisites: [Traits.traitPrerequisite(AnimalCompanion)],
  effects: [],
})

export const SnowdriftSpell = Traits.defineTrait('feat/snowdrift-spell', {
  name: 'Snowdrift Spell',
  description:
    '*Cold, Druid, Manipulate, Spellshape*\n\n**Prerequisites** storm order\n\nThe howling wind and precipitation of your magic turn to thick snow. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that has the air, water, or cold trait, and that does not have the fire trait, select one creature affected by the spell on the ground. Each square on the ground under or adjacent to the creature fills with ankle-deep snow. Those squares are difficult terrain until the beginning of your next turn. A creature can [Interact](content:playing-the-game/interact) to clear a square of snow, and the snow in a square melts if that square is exposed to a fire effect.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel4],
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

export const CurrentSpell = Traits.defineTrait('feat/current-spell', {
  name: 'Current Spell',
  description:
    '*Concentrate, Druid, Spellshape*\n\nAs you use your magic to manipulate air or water, you spin off some of its currents to form a barrier around you. If your next action is to [Cast a Spell](content:spells/cast-a-spell) with the air or water trait, until the start of your next turn, you gain a +1 circumstance bonus to [AC](characteristic:armor-class) or a +2 circumstance bonus against ranged attacks. This effect has the air or water trait, or both, depending on the traits of the spell you cast. You also gain a +1 circumstance bonus to all saves against effects with the air trait, water trait, or both until the start of your next turn, depending on the spell’s traits.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel6],
  effects: [],
})

export const CurrentSpellAction = Abilities.defineAbility('feat/current-spell/action', {
  name: 'Current Spell',
  description: '*Concentrate, Druid, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(CurrentSpell)],
  actions: [
    {
      name: 'Current Spell',
      description:
        'As you use your magic to manipulate air or water, you spin off some of its currents to form a barrier around you. If your next action is to [Cast a Spell](content:spells/cast-a-spell) with the air or water trait, until the start of your next turn, you gain a +1 circumstance bonus to [AC](characteristic:armor-class) or a +2 circumstance bonus against ranged attacks. This effect has the air or water trait, or both, depending on the traits of the spell you cast. You also gain a +1 circumstance bonus to all saves against effects with the air trait, water trait, or both until the start of your next turn, depending on the spell’s traits.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const GrownOfOak = Traits.defineTrait('feat/grown-of-oak', {
  name: 'Grown of Oak',
  description:
    '*Druid*\n\n**Prerequisites** leaf order\n\nYou can make your skin take on the woody endurance of an ancient tree and have your familiar follow suit. You can cast [_oaken resilience_](ability:spell/oaken-resilience) at will as an innate primal spell with a spell rank one lower than the highest rank of spells you can cast. This spell targets you, as well as your leshy familiar if it’s within 30 feet of you.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [Effects.gainAbility(Spells.OakenResilience, null)],
})

export const InsectShape = Traits.defineTrait('feat/insect-shape', {
  name: 'Insect Shape',
  description:
    '*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nYour understanding of life expands, allowing you to mimic a wider range of creatures. Add the shapes in [_insect form_](ability:spell/insect-form) to your untamed form list. Whenever you use untamed form to polymorph into the non-flying insect shapes listed in pest form, the duration is 24 hours instead of 10 minutes.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const InstinctiveSupport = Traits.defineTrait('feat/instinctive-support', {
  name: 'Instinctive Support',
  description:
    '*Druid*\n\n**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\n**Trigger** You Cast a non-cantrip spell that targets only your animal companion\n\nWhen you support your animal companion, your companion supports you in turn. After your spell takes place, your companion gains its actions for the turn, as if you Commanded it, and one of the actions must be Support. If the companion has used any other actions already, it can’t Support you, as normal.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(AnimalCompanion)],
  effects: [],
})

export const InstinctiveSupportAction = Abilities.defineAbility('feat/instinctive-support/action', {
  name: 'Instinctive Support',
  description: '*Druid*',
  prerequisites: [Traits.traitPrerequisite(InstinctiveSupport)],
  actions: [
    {
      name: 'Instinctive Support',
      description:
        '**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\n**Trigger** You Cast a non-cantrip spell that targets only your animal companion\n\nWhen you support your animal companion, your companion supports you in turn. After your spell takes place, your companion gains its actions for the turn, as if you Commanded it, and one of the actions must be Support. If the companion has used any other actions already, it can’t Support you, as normal.',
      action: ActionTypes.FreeAction,
    },
  ],
})

export const StormRetribution = Traits.defineTrait('feat/storm-retribution', {
  name: 'Storm Retribution',
  description:
    '*Druid*\n\n**Prerequisites** storm order; [_tempest surge_](ability:spell/tempest-surge) order spell\n\n**Trigger** An opponent adjacent to you critically hits you with a melee weapon or melee unarmed attack\n\n**Requirements** You have at least 1 available Focus Point\n\nYou lash out, directing a burst of storming fury toward a creature that has harmed you. You cast [_tempest surge_](ability:spell/tempest-surge) on the triggering opponent and push that creature, moving it 5 feet away from you if it fails its [Reflex](characteristic:reflex) save, or 10 feet if it critically fails. This movement is forced movement.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel6],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [],
})

export const StormRetributionAction = Abilities.defineAbility('feat/storm-retribution/action', {
  name: 'Storm Retribution',
  description: '*Druid*',
  prerequisites: [Traits.traitPrerequisite(StormRetribution)],
  actions: [
    {
      name: 'Storm Retribution',
      description:
        '**Prerequisites** storm order; [_tempest surge_](ability:spell/tempest-surge) order spell\n\n**Trigger** An opponent adjacent to you critically hits you with a melee weapon or melee unarmed attack\n\n**Requirements** You have at least 1 available Focus Point\n\nYou lash out, directing a burst of storming fury toward a creature that has harmed you. You cast [_tempest surge_](ability:spell/tempest-surge) on the triggering opponent and push that creature, moving it 5 feet away from you if it fails its [Reflex](characteristic:reflex) save, or 10 feet if it critically fails. This movement is forced movement.',
      action: ActionTypes.Reaction,
    },
  ],
})

export const DeimaticDisplay = Traits.defineTrait('feat/deimatic-display', {
  name: 'Deimatic Display',
  description:
    "*Druid*\n\n**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nImitating animal threat displays, you make yourself appear larger and more imposing. Attempt an Intimidation check to [Demoralize](content:skills/demoralize) each enemy within 30 feet. This attempt has the [visual](content:traits/visual) trait, loses the auditory trait, and you don't take a penalty if the creature doesn't understand your language. Roll your check only once and compare it to the [Will DC](characteristic:will) of each target. You gain a +2 circumstance bonus to the check against animal, fungus, and plant creatures and take a –2 circumstance penalty against other creatures. Each target is then temporarily immune for 1 minute.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(TrainedIntimidation)],
  effects: [],
})

export const DeimaticDisplayAction = Abilities.defineAbility('feat/deimatic-display/action', {
  name: 'Deimatic Display',
  description: '*Druid*',
  prerequisites: [Traits.traitPrerequisite(DeimaticDisplay)],
  actions: [
    {
      name: 'Deimatic Display',
      description:
        "**Prerequisites** Trained in [Intimidation](characteristic:skill/intimidation)\n\nImitating animal threat displays, you make yourself appear larger and more imposing. Attempt an Intimidation check to [Demoralize](content:skills/demoralize) each enemy within 30 feet. This attempt has the [visual](content:traits/visual) trait, loses the auditory trait, and you don't take a penalty if the creature doesn't understand your language. Roll your check only once and compare it to the [Will DC](characteristic:will) of each target. You gain a +2 circumstance bonus to the check against animal, fungus, and plant creatures and take a –2 circumstance penalty against other creatures. Each target is then temporarily immune for 1 minute.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const FerociousShape = Traits.defineTrait('feat/ferocious-shape', {
  name: 'Ferocious Shape',
  description:
    "*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nYou've mastered the shape of dinosaurs. Add the shapes listed in _dinosaur form_ to your untamed form list. Whenever you use untamed form to take a shape that grants you a specific [Athletics](characteristic:skill/athletics) modifier, you gain a +1 status bonus to your Athletics checks.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const FeyCaller = Traits.defineTrait('feat/fey-caller', {
  name: 'Fey Caller',
  description:
    '*Druid*\n\nYou have learned some of the tricks the fey use to bend primal magic toward illusions and trickery. Add illusory disguise, illusory object, and illusory scene to your spell list, which you cast as primal spells.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  effects: [],
})

export const FloralRestoration = Traits.defineTrait('feat/floral-restoration', {
  name: 'Floral Restoration',
  description:
    '*Druid, Healing, Vitality*\n\n**Frequency** once per day\n\n**Prerequisites** leaf order\n\nYou request that nearby plants share their vitality with you to replenish your body and magic. You regain 1 Focus Point and 4d8 [Hit Points](characteristic:hit-points).\n\nYou must be in a location of at least 15 feet by 15 feet of healthy plant life, though this can be grass, lichen, seaweed, or any other form of naturally occurring flora. Using Floral Restoration on a given section of nature does not harm it, but it prevents that section of nature from giving its vitality to another use of Floral Restoration for 24 hours.\n\nAt 9th level, and every 2 levels thereafter, increase the healing by 1d8.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(LeafOrderMembership)],
  effects: [],
})

export const FloralRestorationAction = Abilities.defineAbility('feat/floral-restoration/action', {
  name: 'Floral Restoration',
  description: '*Druid, Healing, Vitality*',
  prerequisites: [Traits.traitPrerequisite(FloralRestoration)],
  actions: [
    {
      name: 'Floral Restoration',
      description:
        '**Frequency** once per day\n\n**Prerequisites** leaf order\n\nYou request that nearby plants share their vitality with you to replenish your body and magic. You regain 1 Focus Point and 4d8 [Hit Points](characteristic:hit-points).\n\nYou must be in a location of at least 15 feet by 15 feet of healthy plant life, though this can be grass, lichen, seaweed, or any other form of naturally occurring flora. Using Floral Restoration on a given section of nature does not harm it, but it prevents that section of nature from giving its vitality to another use of Floral Restoration for 24 hours.\n\nAt 9th level, and every 2 levels thereafter, increase the healing by 1d8.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const IncredibleCompanionDruid = Traits.defineTrait('feat/incredible-companion-druid', {
  name: 'Incredible Companion (Druid)',
  description:
    '*Druid*\n\n**Prerequisites** [Mature Animal Companion (Druid)](trait:feat/mature-animal-companion-druid)\n\nYour animal companion continues to grow and develop. It becomes either a nimble or savage animal companion, gaining additional capabilities determined by the type.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(MatureAnimalCompanionDruid)],
  effects: [Effects.gainCharacterOption(SelectIncredibleAnimalCompanion)],
})

export const RaiseMenhir = Traits.defineTrait('feat/raise-menhir', {
  name: 'Raise Menhir',
  description:
    '*Druid*\n\n**Frequency** once per hour\n\nYou raise a druidic monument, such as a standing stone or warding tree, from the ground, creating a powerful primal ward that blocks other types of magic. The monument appears in an unoccupied square on the ground within 30 feet, making that square difficult terrain. Choose arcane, divine, or occult; all creatures within 15 feet of the monument gain a +2 status bonus to their saving throws against effects with that trait. The monument lasts for 1 round before crumbling back into the earth or wilting away into nothingness, but you can [Sustain](content:playing-the-game/sustain) the monument for up to 1 minute.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  effects: [],
})

export const RaiseMenhirAction = Abilities.defineAbility('feat/raise-menhir/action', {
  name: 'Raise Menhir',
  description: '*Druid*',
  prerequisites: [Traits.traitPrerequisite(RaiseMenhir)],
  actions: [
    {
      name: 'Raise Menhir',
      description:
        '**Frequency** once per hour\n\nYou raise a druidic monument, such as a standing stone or warding tree, from the ground, creating a powerful primal ward that blocks other types of magic. The monument appears in an unoccupied square on the ground within 30 feet, making that square difficult terrain. Choose arcane, divine, or occult; all creatures within 15 feet of the monument gain a +2 status bonus to their saving throws against effects with that trait. The monument lasts for 1 round before crumbling back into the earth or wilting away into nothingness, but you can [Sustain](content:playing-the-game/sustain) the monument for up to 1 minute.',
      action: ActionTypes.TwoActions,
    },
  ],
})

export const SoaringShape = Traits.defineTrait('feat/soaring-shape', {
  name: 'Soaring Shape',
  description:
    '*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nWings free you from the shackles of the ground below. Add the bat and bird shapes in _aerial form_ to your untamed form list. If you have Insect Shape, you also add the wasp shape to your untamed form list. If you have Ferocious Shape, you also add the pterosaur shape to your untamed form list. Whenever you use untamed form to take a shape that grants you a specific [Acrobatics](characteristic:skill/acrobatics) modifier, you gain a +1 status bonus to Acrobatics checks.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const WindCaller = Traits.defineTrait('feat/wind-caller', {
  name: 'Wind Caller',
  description:
    '*Druid*\n\n**Prerequisites** storm order\n\nYou bid the winds to aid you, carrying you through the air and allowing you passage through the strongest headwinds. You gain the _stormwind flight_ order spell.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel8],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [
    Effects.gainAbility(DruidFocusSpells.StormwindFlight),
    Effects.modifyResourcePool(FocusPoints, Attributes.modifier(Patches.patch<ResourcePool>({ size: Patches.sum(1) }))),
  ],
})

export const ElementalShape = Traits.defineTrait('feat/elemental-shape', {
  name: 'Elemental Shape',
  description:
    "*Druid*\n\n**Prerequisites** [Untamed Form](trait:feat/untamed-form)\n\nYou understand the fundamental elements of nature such that you can imbue them into your body and manifest as a living embodiment of those elements. Add the shapes in _elemental form_ to your untamed form list. Whenever you're polymorphed into another shape using untamed form, you gain resistance 5 to fire.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(UntamedForm)],
  effects: [],
})

export const HealingTransformation = Traits.defineTrait('feat/healing-transformation', {
  name: 'Healing Transformation',
  description:
    '*Druid, Spellshape*\n\nYou can take advantage of shapechanging magic to close wounds and patch injuries. If your next action is to cast a noncantrip polymorph spell that targets only one creature, your polymorph spell also restores 1d6 [Hit Points](characteristic:hit-points) per spell rank to that creature. This is a healing effect.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  effects: [],
})

export const HealingTransformationAction = Abilities.defineAbility('feat/healing-transformation/action', {
  name: 'Healing Transformation',
  description: '*Druid, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(HealingTransformation)],
  actions: [
    {
      name: 'Healing Transformation',
      description:
        'You can take advantage of shapechanging magic to close wounds and patch injuries. If your next action is to cast a noncantrip polymorph spell that targets only one creature, your polymorph spell also restores 1d6 [Hit Points](characteristic:hit-points) per spell rank to that creature. This is a healing effect.',
      action: ActionTypes.SingleAction,
    },
  ],
})

export const OverwhelmingEnergy = Traits.defineTrait('feat/overwhelming-energy', {
  name: 'Overwhelming Energy',
  description:
    "*Druid, Manipulate, Sorcerer, Spellshape, Wizard*\n\nWith a complex gesture, you call upon the primal power of your spell to overcome enemies' resistances. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell ignores an amount the target's resistance to energy damage equal to your level. This applies to all damage the spell deals, including [persistent damage](content:conditions/persistent-damage) and damage caused by an ongoing effect of the spell, such as the wall created by _wall of fire_. A creature's immunities are unaffected.",
  tags: [Feat, ClassFeat, DruidFeat, WizardFeat, FeatLevel10],
  effects: [],
})

export const OverwhelmingEnergyAction = Abilities.defineAbility('feat/overwhelming-energy/action', {
  name: 'Overwhelming Energy',
  description: '*Druid, Manipulate, Sorcerer, Spellshape, Wizard*',
  prerequisites: [Traits.traitPrerequisite(OverwhelmingEnergy)],
  actions: [
    {
      name: 'Overwhelming Energy',
      description:
        "With a complex gesture, you call upon the primal power of your spell to overcome enemies' resistances. If the next action you use is to [Cast a Spell](content:spells/cast-a-spell), the spell ignores an amount the target's resistance to energy damage equal to your level. This applies to all damage the spell deals, including [persistent damage](content:conditions/persistent-damage) and damage caused by an ongoing effect of the spell, such as the wall created by _wall of fire_. A creature's immunities are unaffected.",
      action: ActionTypes.SingleAction,
    },
  ],
})

export const PlantShape = Traits.defineTrait('feat/plant-shape', {
  name: 'Plant Shape',
  description:
    "*Druid*\n\n**Prerequisites** leaf order or [Untamed Form](trait:feat/untamed-form)\n\nYou can take the shape of a plant creature. If you don't have untamed form, you can cast _plant form_ once per day, heightened to the same rank as your highest-rank druid spell slot.\n\nIf you do have untamed form, add the shapes listed in plant form to your untamed form list, and whenever you're polymorphed into another shape using untamed form, you gain resistance 5 to poison.",
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Expressions.or([Traits.traitPrerequisite(LeafOrderMembership), Traits.traitPrerequisite(UntamedForm)])],
  effects: [Effects.conditional(Expressions.not(Traits.traitPrerequisite(UntamedForm)), [Effects.gainAbility(Spells.PlantForm, null)])],
})

export const PrimalHowl = Traits.defineTrait('feat/primal-howl', {
  name: 'Primal Howl',
  description:
    '*Druid*\n\n**Prerequisites** Incredible Companion (Druid)\n\nYour companion can let out a howl laced with your primal magic. It gains the following advanced maneuver, in addition to any advanced maneuvers it already knows.\n\n**Primal Howl** ◆◆ ([primal](content:traits/primal), [sonic](content:traits/sonic)) **Frequency** once per hour; **Effect** Your animal companion screeches and howls, empowered with natural magic. All creatures in a 30-foot cone take 1d6 sonic damage for every 2 levels your companion has, with a basic [Fortitude](characteristic:fortitude) save against your [spell DC](characteristic:spell-dc). Creatures that fail become [frightened](content:conditions/frightened) 1, and creatures that critically fail become frightened 2. The fright is an [emotion](content:traits/emotion), [fear](content:traits/fear), and [mental](content:traits/mental) effect.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(IncredibleCompanionDruid)],
  effects: [],
})

export const PristineWeapon = Traits.defineTrait('feat/pristine-weapon', {
  name: 'Pristine Weapon',
  description:
    '*Druid*\n\n**Prerequisites** [Verdant Weapon](trait:feat/verdant-weapon)\n\nYour verdant weapon can cut through the resistances of magical creatures. The weapon is treated as cold iron and silver. If you critically hit a creature that has a weakness to cold iron or silver, the target takes 1d6 persistent bleed damage as the primal energies within your weapon slow its natural healing.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(VerdantWeapon)],
  effects: [],
})

export const SideBySideDruid = Traits.defineTrait('feat/side-by-side-druid', {
  name: 'Side by Side (Druid)',
  description:
    '*Druid*\n\n**Prerequisites** [Animal Companion](trait:feat/animal-companion)\n\nYou and your animal companion fight in tandem, distracting your foes and keeping them off balance. Whenever you and your animal companion are adjacent to the same foe, you are both flanking that foe with each other, regardless of your actual positions.',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(AnimalCompanion)],
  effects: [],
})

export const ThunderclapSpell = Traits.defineTrait('feat/thunderclap-spell', {
  name: 'Thunderclap Spell',
  description:
    '*Druid, Sonic, Spellshape*\n\n**Prerequisites** storm order\n\nYour lightning splits the air, generating a booming shock wave. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that has the electricity trait or deals electricity damage, has no duration, and requires creatures to attempt a saving throw, the force of the spell’s lightning creates a thunderclap, in addition to its other effects. Each creature that failed its [Reflex](characteristic:reflex) save against the spell is [deafened](content:conditions/deafened) for 1 round, and those who critically failed are also knocked [prone](content:conditions/prone).',
  tags: [Feat, ClassFeat, DruidFeat, FeatLevel10],
  prerequisites: [Traits.traitPrerequisite(StormOrderMembership)],
  effects: [],
})

export const ThunderclapSpellAction = Abilities.defineAbility('feat/thunderclap-spell/action', {
  name: 'Thunderclap Spell',
  description: '*Druid, Sonic, Spellshape*',
  prerequisites: [Traits.traitPrerequisite(ThunderclapSpell)],
  actions: [
    {
      name: 'Thunderclap Spell',
      description:
        '**Prerequisites** storm order\n\nYour lightning splits the air, generating a booming shock wave. If your next action is to [Cast a Spell](content:spells/cast-a-spell) that has the electricity trait or deals electricity damage, has no duration, and requires creatures to attempt a saving throw, the force of the spell’s lightning creates a thunderclap, in addition to its other effects. Each creature that failed its [Reflex](characteristic:reflex) save against the spell is [deafened](content:conditions/deafened) for 1 round, and those who critically failed are also knocked [prone](content:conditions/prone).',
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
  CurrentSpell,
  CurrentSpellAction,
  GrownOfOak,
  InsectShape,
  InstinctiveSupport,
  InstinctiveSupportAction,
  StormRetribution,
  StormRetributionAction,
  DeimaticDisplay,
  DeimaticDisplayAction,
  FerociousShape,
  FeyCaller,
  FloralRestoration,
  FloralRestorationAction,
  IncredibleCompanionDruid,
  RaiseMenhir,
  RaiseMenhirAction,
  SoaringShape,
  WindCaller,
  ElementalShape,
  HealingTransformation,
  HealingTransformationAction,
  OverwhelmingEnergy,
  OverwhelmingEnergyAction,
  PlantShape,
  PrimalHowl,
  PristineWeapon,
  SideBySideDruid,
  ThunderclapSpell,
  ThunderclapSpellAction,
]
