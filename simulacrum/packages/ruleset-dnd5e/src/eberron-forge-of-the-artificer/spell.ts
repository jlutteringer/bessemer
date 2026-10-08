import { Abilities, Effects } from '@simulacrum/ruleset'
import { ActionType } from '@simulacrum/ruleset/ability'
import { Conjuration, Rank2 } from '@simulacrum/ruleset-dnd5e/archetype/spell'

export const HomunculusServant = Abilities.defineAbility('spell/homunculus-servant', {
  name: 'Homunculus Servant',
  effects: [
    Effects.descriptive(
      "<p><strong>Conjuration</strong> · 1 hour or Ritual · 10 feet · V, S, M (a gem worth 100+ GP) · Instantaneous</p><p>You summon a homunculus, a Tiny Construct with AC 13, Hit Points equal to 5 + 5 per spell level, and a Fly Speed of 30 feet, in an unoccupied space within range. It replaces any homunculus you already have from this spell.</p><p>It's an ally that takes its turn immediately after yours and obeys your commands; if you issue none, it takes the Dodge action. Its <strong>Force Strike</strong> (melee or 30-foot ranged, using your spell attack modifier) deals 1d6 plus the spell's level Force damage, and when you cast a spell with a range of Touch while it's within 120 feet of you, it can deliver the spell as a Reaction.</p><p><strong>Higher Levels:</strong> use the slot's level for the spell's level in its stat block.</p>"
    ),
  ],
  archetypes: [Rank2, Conjuration],
  actions: [{ name: 'Cast Homunculus Servant', action: ActionType.Standard }],
})
