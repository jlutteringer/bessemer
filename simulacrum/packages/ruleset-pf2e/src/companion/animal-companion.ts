import { Archetypes, CharacterOptions, Traits } from '@simulacrum/ruleset'

export const AnimalCompanion = Archetypes.defineArchetype('companion/animal-companion', { name: 'Animal Companion' })

export const SelectAnimalCompanion = CharacterOptions.selectTraitOption('companion/select-animal-companion', {
  name: 'Animal Companion',
  filter: { archetypes: [AnimalCompanion] },
})

export const Ape = Traits.defineTrait('companion/animal-companion/ape', {
  name: 'Ape',
  description:
    "*Animal, Minion*\n\nYour companion is an ape or other primate.\n\n**Size** Small\n\n**Melee** ◆ fist, **Damage** 1d8 bludgeoning\n\n**Str** +3, **Dex** +1, **Con** +2, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Intimidation](characteristic:skill/intimidation)\n\n**Senses** low-light vision\n\n**Speed** 25 feet, climb 25 feet\n\n**Support Benefit** Your ape threatens your foes with menacing growls. Until the start of your next turn, if you hit and deal damage to a creature in your ape's reach, the creature becomes [frightened 1](content:conditions/frightened).\n\n**Advanced Maneuver** Frightening Display",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const ArborealSapling = Traits.defineTrait('companion/animal-companion/arboreal-sapling', {
  name: 'Arboreal Sapling',
  description:
    "*Uncommon, Minion, Plant*\n\nYour companion is a walking tree, a cousin of the great arboreal wardens and regents. An arboreal sapling has the plant trait instead of the animal trait, but it otherwise functions normally as an animal companion. They are typically only selected by animal order druids who are also members of the leaf order.\n\n**Access** You are a member of the leaf order.\n\n**Size** Small\n\n**Melee** ◆ branch, **Damage** 1d8 bludgeoning\n\n**Str** +3, **Dex** +1, **Con** +2, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision\n\n**Speed** 25 feet\n\n**Support Benefit** Your arboreal sapling plants roots around your foe, impeding its movement. Until the start of your next turn, if you hit and deal damage to a creature in your arboreal sapling's reach, the first square the creature moves into after taking that damage is [difficult terrain](content:playing-the-game/difficult-terrain).\n\n**Advanced Maneuver** Throw Rock",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Badger = Traits.defineTrait('companion/animal-companion/badger', {
  name: 'Badger',
  description:
    "*Animal, Minion*\n\nYour companion is a badger, wolverine, or other big mustelid.\n\n**Size** Small\n\n**Melee** ◆ jaws, **Damage** 1d8 piercing\n\n**Melee** ◆ claw ([Agile](content:traits/agile)), **Damage** 1d6 slashing\n\n**Str** +2, **Dex** +2, **Con** +2, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Survival](characteristic:skill/survival)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 25 feet, burrow 10 feet, climb 10 feet\n\n**Support Benefit** Your badger digs around your foe's position, interfering with its footing. Until the start of your next turn, if you hit and deal damage to a creature your badger threatens, the target can't use a [Step](content:playing-the-game/step) action (unless it can Step through difficult terrain) until it moves from its current position.\n\n**Advanced Maneuver** Badger Rage",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Bat = Traits.defineTrait('companion/animal-companion/bat', {
  name: 'Bat',
  description:
    "*Animal, Minion*\n\nYour companion is a particularly large bat, such as a giant bat.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d6 piercing\n\n**Melee** ◆ wing ([Agile](content:traits/agile), [Finesse](content:traits/finesse)), **Damage** 1d4 slashing\n\n**Str** +2, **Dex** +3, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** echolocation 20 feet (the bat can use hearing as a [precise](content:playing-the-game/precise-senses) sense within this range), [low-light vision](content:traits/light)\n\n**Speed** 15 feet, fly 30 feet\n\n**Support Benefit** Your bat flaps around your foes' arms and faces, getting in the way of their attacks. Until the start of your next turn, creatures in your bat's reach that you damage with Strikes take a –1 circumstance penalty to their attack rolls.\n\n**Advanced Maneuver** Wing Thrash",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Bear = Traits.defineTrait('companion/animal-companion/bear', {
  name: 'Bear',
  description:
    "*Animal, Minion*\n\nYour companion is a black, grizzly, polar, or other type of bear.\n\n**Size** Small\n\n**Melee** ◆ jaws, **Damage** 1d8 piercing\n\n**Melee** ◆ claw ([Agile](content:traits/agile)), **Damage** 1d6 slashing\n\n**Str** +3, **Dex** +2, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Intimidation](characteristic:skill/intimidation)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/imprecise-senses), 30 feet)\n\n**Speed** 35 feet\n\n**Support Benefit** Your bear mauls your enemies when you create an opening. Until the start of your next turn, each time you hit a creature in the bear's reach with a [Strike](content:playing-the-game/strike), the creature takes 1d8 slashing damage from the bear. If your bear is nimble or savage, the slashing damage increases to 2d8.\n\n**Advanced Maneuver** Bear Hug",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Bird = Traits.defineTrait('companion/animal-companion/bird', {
  name: 'Bird',
  description:
    "*Animal, Minion*\n\nYour companion is a bird of prey, such as an eagle, hawk, or owl.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d6 piercing\n\n**Melee** ◆ talon ([Agile](content:traits/agile), [Finesse](content:traits/finesse)), **Damage** 1d4 slashing\n\n**Str** +2, **Dex** +3, **Con** +1, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 4\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision\n\n**Speed** 10 feet, fly 60 feet\n\n**Support Benefit** The bird pecks at your foes' eyes when you create an opening. Until the start of your next turn, your Strikes that damage a creature that your bird threatens also deal 1d4 [persistent bleed damage](content:conditions/persistent-damage), and the target is [dazzled](content:conditions/dazzled) until it removes the bleed damage. If your bird is nimble or savage, the persistent bleed damage increases to 2d4.\n\n**Advanced Maneuver** Flyby Attack",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Boar = Traits.defineTrait('companion/animal-companion/boar', {
  name: 'Boar',
  description:
    "*Animal, Minion*\n\nYour companion is a boar or pig.\n\n**Size** Small\n\n**Melee** ◆ tusk, **Damage** 1d8 piercing\n\n**Str** +3, **Dex** +1, **Con** +2, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Survival](characteristic:skill/survival)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 35 feet\n\n**Support Benefit** Your boar gores your foes. Until the start of your next turn, your Strikes that damage a creature in your boar's reach also deal 1d6 [persistent bleed damage](content:conditions/persistent-damage). If your boar is nimble or savage, the persistent bleed damage increases to 2d6.\n\n**Advanced Maneuver** Boar Charge",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Cat = Traits.defineTrait('companion/animal-companion/cat', {
  name: 'Cat',
  description:
    "*Animal, Minion*\n\nYour companion is a big cat, such as a leopard or tiger.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d6 piercing\n\n**Melee** ◆ claw ([Agile](content:traits/agile), [Finesse](content:traits/finesse)), **Damage** 1d4 slashing\n\n**Str** +2, **Dex** +3, **Con** +1, **Int** -4, **Wis** +2, **Cha** +0\n\n**Hit Points** 4\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 35 feet\n\n**Special** Your cat deals 1d4 extra precision damage against [off-guard](content:conditions/off-guard) targets.\n\n**Support Benefit** Your cat throws your enemies off-balance when you create an opening. Until the start of your next turn, your Strikes that deal damage to a creature within your cat's reach make the target [off-guard](content:conditions/off-guard) until the end of your next turn.\n\n**Advanced Maneuver** Cat Pounce",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Crocodile = Traits.defineTrait('companion/animal-companion/crocodile', {
  name: 'Crocodile',
  description:
    "*Animal, Minion*\n\nYour companion is a crocodile or a similar crocodilian reptile, such as an alligator or caiman.\n\n**Size** Small\n\n**Melee** ◆ jaws, **Damage** 1d8 piercing\n\n**Melee** ◆ tail ([Finesse](content:traits/finesse)), **Damage** 1d6 bludgeoning\n\n**Str** +3, **Dex** +2, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision\n\n**Speed** 20 feet, swim 25 feet\n\n**Special** The crocodile can hold its breath for about 2 hours.\n\n**Support Benefit** Your crocodile clamps its jaws on your foe, refusing to let go. Until the start of your next turn, if your [Strike](content:playing-the-game/strike) damages a creature in your crocodile's reach, your crocodile can latch onto the creature. While thus attached, the crocodile can move along with the target whenever the target moves until the end of your next turn. Your crocodile can latch onto only one creature in this way, and it must release the creature to make a jaws Strike. If the target is smaller than the crocodile, it takes a –10-foot circumstance penalty to its Speeds and can't [Fly](content:playing-the-game/fly) while the crocodile is latched on.\n\n**Advanced Maneuver** Death Roll",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Dromaeosaur = Traits.defineTrait('companion/animal-companion/dromaeosaur', {
  name: 'Dromaeosaur',
  description:
    '*Animal, Minion*\n\nYour companion is a dromaeosaur (also called a raptor), such as a velociraptor or deinonychus.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d8 piercing\n\n**Melee** ◆ talon ([Agile](content:traits/agile), [Finesse](content:traits/finesse)), **Damage** 1d6 slashing\n\n**Str** +2, **Dex** +3, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 50 feet\n\n**Support Benefit** Your raptor constantly darts into flanking position. Until the start of your next turn, it counts as being in its space or an empty space of your choice within 10 feet when determining whether you and your companion are flanking; you can choose a different space for each of your attacks.\n\n**Advanced Maneuver** Darting Attack',
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Horse = Traits.defineTrait('companion/animal-companion/horse', {
  name: 'Horse',
  description:
    "*Animal, Minion*\n\nYour companion is a horse, pony, or similar equine.\n\n**Size** Medium or Large\n\n**Melee** ◆ hoof ([Agile](content:traits/agile)), **Damage** 1d6 bludgeoning\n\n**Str** +3, **Dex** +2, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 8\n\n**Skill** [Survival](characteristic:skill/survival)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 40 feet\n\n**Special** mount\n\n**Support Benefit** Until the start of your next turn, if you're mounted on your horse and moved 10 feet or more on the action before a melee [Strike](content:playing-the-game/strike), add a circumstance bonus to damage for that Strike equal to twice the number of weapon damage dice. If your weapon already has the [jousting](content:traits/jousting) weapon trait, increase the trait's damage bonus by 2 per die instead.\n\n**Advanced Maneuver** Gallop",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const RidingDrake = Traits.defineTrait('companion/animal-companion/riding-drake', {
  name: 'Riding Drake',
  description:
    "*Uncommon, Dragon, Minion*\n\nYour companion is a swift, flightless drake with limited intelligence, less vicious than most drakes but fiercely loyal to you. A riding drake has the [dragon](content:traits/dragon) trait instead of the [animal](content:traits/animal) trait, but it otherwise functions normally as an animal companion.\n\n**Size** Large\n\n**Melee** ◆ jaws, **Damage** 1d8 piercing\n\n**Melee** ◆ tail, **Damage** 1d6 bludgeoning\n\n**Str** +2, **Dex** +1, **Con** +2, **Int** -4, **Wis** +1, **Cha** +2\n\n**Hit Points** 8\n\n**Skill** [Intimidation](characteristic:skill/intimidation)\n\n**Senses** darkvision\n\n**Speed** 45 feet\n\n**Special** mount\n\n**Support Benefit** Your drake snorts fire in your foes' faces. Until the start of your next turn, each time you [Strike](content:playing-the-game/strike) while riding the drake and hit a creature in the drake's reach, the creature takes 1d4 fire damage from the drake. If your drake is nimble or savage, the fire damage increases to 2d4.\n\n**Advanced Maneuver** Fire Breath",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Scorpion = Traits.defineTrait('companion/animal-companion/scorpion', {
  name: 'Scorpion',
  description:
    "*Animal, Minion*\n\nYour companion is one of the various species of giant scorpion.\n\n**Size** Small\n\n**Melee** ◆ stinger, **Damage** 1d6 piercing plus poison\n\n**Melee** ◆ pincer ([Agile](content:traits/agile)), **Damage** 1d6 slashing\n\n**Str** +3, **Dex** +3, **Con** +1, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** darkvision\n\n**Speed** 30 feet\n\n**Special** The scorpion's stinger attack deals an additional 1d4 poison damage or 2d4 poison damage if the scorpion is a specialized companion.\n\n**Support Benefit** Your scorpion drips poison from its stinger when you create an opening. Until the start of your next turn, your Strikes that damage a creature in your scorpion's reach also deal 1d6 [persistent poison damage](content:conditions/persistent-damage). If your scorpion is nimble or savage, the persistent poison damage increases to 2d6.\n\n**Advanced Maneuver** Grab and Sting",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Shark = Traits.defineTrait('companion/animal-companion/shark', {
  name: 'Shark',
  description:
    "*Animal, Aquatic, Minion*\n\nYour companion is a shark of any kind, such as a hammerhead, great white, or jigsaw shark.\n\n**Size** Small\n\n**Melee** ◆ jaws, **Damage** 1d8 piercing\n\n**Str** +3, **Dex** +2, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** blood scent, scent ([imprecise](content:playing-the-game/imprecise-senses), 60 feet)\n\n**Speed** swim 40 feet\n\n**Special** The shark has the [aquatic](content:traits/aquatic) trait. Its blood scent enables it to smell blood in the water from up to 1 mile away.\n\n**Support Benefit** When your shark senses blood, it tears into your enemies. Until the start of your next turn, each time you hit a creature in the shark's reach with a [Strike](content:playing-the-game/strike) and deal slashing or piercing damage, the creature takes 1d8 slashing damage from the shark. If your shark is nimble or savage, the slashing damage increases to 2d8.\n\n**Advanced Maneuver** Shred",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Snake = Traits.defineTrait('companion/animal-companion/snake', {
  name: 'Snake',
  description:
    "*Animal, Minion*\n\nYour companion is a constrictor snake, such as a boa or python.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d8 piercing\n\n**Str** +3, **Dex** +3, **Con** +1, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Stealth](characteristic:skill/stealth)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 20 feet, climb 20 feet, swim 20 feet\n\n**Support Benefit** Your snake holds your enemies with its coils, interfering with reactions. Until the start of your next turn, any creature your snake threatens can't use reactions triggered by your actions unless its level is higher than yours.\n\n**Advanced Maneuver** Constrict",
  archetypes: [AnimalCompanion],
  effects: [],
})

export const Wolf = Traits.defineTrait('companion/animal-companion/wolf', {
  name: 'Wolf',
  description:
    '*Animal, Minion*\n\nYour companion is a wolf, dog, or other canine.\n\n**Size** Small\n\n**Melee** ◆ jaws ([Finesse](content:traits/finesse)), **Damage** 1d8 piercing\n\n**Str** +2, **Dex** +3, **Con** +2, **Int** -4, **Wis** +1, **Cha** +0\n\n**Hit Points** 6\n\n**Skill** [Survival](characteristic:skill/survival)\n\n**Senses** low-light vision, scent ([imprecise](content:playing-the-game/dim-light), 30 feet)\n\n**Speed** 40 feet\n\n**Support Benefit** Your wolf tears tendons with each opening. Until the start of your next turn, your Strikes that damage creatures your wolf threatens give the target a –5-foot status penalty to its Speeds for 1 minute (–10 on a critical success).\n\n**Advanced Maneuver** Takedown',
  archetypes: [AnimalCompanion],
  effects: [],
})

export const AllAnimalCompanionEntities = [
  AnimalCompanion,
  SelectAnimalCompanion,
  Ape,
  ArborealSapling,
  Badger,
  Bat,
  Bear,
  Bird,
  Boar,
  Cat,
  Crocodile,
  Dromaeosaur,
  Horse,
  RidingDrake,
  Scorpion,
  Shark,
  Snake,
  Wolf,
]
