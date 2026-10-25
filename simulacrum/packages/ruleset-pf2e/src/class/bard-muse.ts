import { Tags, CharacterOptions, Effects, Traits } from '@simulacrum/ruleset'
import * as Spells from '@simulacrum/ruleset-pf2e/spell/spell'

export const Muse = Tags.defineTraitTag('bard/muse', { name: 'Muse' })

export const EnigmaMuseType = Traits.defineTrait('bard/muse-type/enigma', {
  name: 'Enigma Muse',
  description: 'Your muse is an enigma muse, so you can take feats that have the enigma muse as a prerequisite.',
  effects: [],
})

export const MaestroMuseType = Traits.defineTrait('bard/muse-type/maestro', {
  name: 'Maestro Muse',
  description: 'Your muse is a maestro muse, so you can take feats that have the maestro muse as a prerequisite.',
  effects: [],
})

export const PolymathMuseType = Traits.defineTrait('bard/muse-type/polymath', {
  name: 'Polymath Muse',
  description: 'Your muse is a polymath muse, so you can take feats that have the polymath muse as a prerequisite.',
  effects: [],
})

export const WarriorMuseType = Traits.defineTrait('bard/muse-type/warrior', {
  name: 'Warrior Muse',
  description: 'Your muse is a warrior muse, so you can take feats that have the warrior muse as a prerequisite.',
  effects: [],
})

export const Enigma = Traits.defineTrait('bard/muse/enigma', {
  name: 'Enigma',
  description:
    "Your muse is a mystery, driving you to uncover the hidden secrets of life and the multiverse. These muses can be people you cannot fully grasp, texts layered deeply with symbolism, or emotional paradoxes that underline a lifetime's work. If your muse is an otherworldly creature, it might be a mysterious aeon or an occult dragon; if a deity, it might be Irori or Nethys. Art inspired by an enigma muse could be cryptic, eerie, or laden with speculation and conspiracy. As a bard with the enigma muse, you support your allies by providing knowledge alongside inspiration and occult support.\n\n**Muse Feat** [Bardic Lore](trait:feat/bardic-lore)\n\n**Muse Spell** [_sure strike_](ability:spell/sure-strike)",
  tags: [Muse],
  effects: [Effects.gainTrait(EnigmaMuseType), Effects.gainAbility(Spells.SureStrike, null)],
})

export const Maestro = Traits.defineTrait('bard/muse/maestro', {
  name: 'Maestro',
  description:
    'Your muse constantly inspires you to greater heights of artistic prowess. For many bards, a teacher or rival fills this role, although some set their sights higher and attempt to surpass great composers of the past or blaze a new trail entirely. If your muse is a supernatural creature, it might be one who loves to perform, such as a choral angel or a lyrakien azata; if a deity, it might be Shelyn. Art inspired by a maestro muse is precise and inventive, a formalist achievement. As a bard with a maestro muse, you are an inspiration to your allies and confident of your musical and oratorical abilities.\n\n**Muse Feat** [Lingering Composition](trait:feat/lingering-composition)\n\n**Muse Spell** [_soothe_](ability:spell/soothe)',
  tags: [Muse],
  effects: [Effects.gainTrait(MaestroMuseType), Effects.gainAbility(Spells.Soothe, null)],
})

export const Polymath = Traits.defineTrait('bard/muse/polymath', {
  name: 'Polymath',
  description:
    "Your muse is a jack of all trades, flitting between skills and pursuits. Some bards are constantly moved by new muses or draw their inspiration from an idealized being, whether it's based on a real person or purely philosophical. If your muse is a single creature, it might be an eclectic creature like a fey or one who's learned a lot over a long lifespan; if a deity, it might be Desna or Calistria. Art inspired by a polymath muse is restless, with each composition exhibiting new techniques and an ever-evolving style. As a bard with a polymath muse, you are interested in a wide array of topics but rarely dedicated to any one, and you rarely make up your mind—you want to try everything.\n\n**Muse Feat** [Versatile Performance](trait:feat/versatile-performance)\n\n**Muse Spell** [_phantasmal minion_](ability:spell/phantasmal-minion)",
  tags: [Muse],
  effects: [Effects.gainTrait(PolymathMuseType), Effects.gainAbility(Spells.PhantasmalMinion, null)],
})

export const Warrior = Traits.defineTrait('bard/muse/warrior', {
  name: 'Warrior',
  description:
    "The battlefield is your stage, the clang of steel, your song. Your muse has seen countless battles, whether reveling in combat or resigned to its necessity. An individual soldier or general might inspire you, but so might a battlefield or weapon with a particularly profound history. If your muse is a creature, it might be an otherworldly soldier, such as an archon or devil soldier. If it's a deity, it might be Gorum. Art inspired by a warrior muse is triumphant and strident, often detailing epic battles. As a bard with a warrior muse, you train for battle in addition to performance, and you prepare your allies for the dangers of combat. You might even wade into the thick of things with them.\n\n**Muse Feat** [Martial Performance](trait:feat/martial-performance)\n\n**Muse Spell** [_fear_](ability:spell/fear)",
  tags: [Muse],
  effects: [Effects.gainTrait(WarriorMuseType), Effects.gainAbility(Spells.Fear, null)],
})

export const SelectMuse = CharacterOptions.selectTraitOption('bard/muse/select', { name: 'Muse', filter: { tags: [Muse] } })

export const AllBardMuseEntities = [Muse, EnigmaMuseType, MaestroMuseType, PolymathMuseType, WarriorMuseType, Enigma, Maestro, Polymath, Warrior]
