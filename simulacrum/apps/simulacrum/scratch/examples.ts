import { AreaShape } from '@simulacrum/ruleset/targeting'
import { ResourcePool } from '@simulacrum/ruleset/resource-pool'
import { ArrayExpressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { CharacterEffects, Damage, Rolls, Tags } from '@simulacrum/ruleset'
import * as ActionTypes from '@simulacrum/ruleset-khydrian-drift/action-type'
import * as Dnd4eActionTypes from '@simulacrum/ruleset-dnd4e/action-type'
import * as Pf2eActionTypes from '@simulacrum/ruleset-pf2e/action-type'
import * as Dnd4e from '@simulacrum/ruleset-dnd4e/characteristic'
import * as Pf2e from '@simulacrum/ruleset-pf2e/characteristic'
import { MeleeBasicAttack } from '@simulacrum/ruleset-dnd4e/common'
import { Weapon } from '@simulacrum/ruleset-khydrian-drift/weapon'
import { Acid, Electric, Fire, Physical } from '@simulacrum/ruleset-khydrian-drift/damage-type'
import {
  AgilityAttackRating,
  AgilityPotency,
  ArmorClass,
  BrawnAttackRating,
  BrawnPotency,
  FortitudeDefense,
  IntelligenceAttackRating,
  IntelligencePotency,
  RangeBand,
  ReflexDefense,
} from '@simulacrum/ruleset-khydrian-drift/characteristic'
import { Blinded, Burning, Deafened, Poisoned, Primed, Prone, Stunned, Unconscious } from '@simulacrum/ruleset-khydrian-drift/condition'
import {
  ActionRelation,
  ActionRole,
  AbilityBaseProps,
  TriggerEvent,
  Duration,
  ModifyTarget,
  MoveKind,
  action,
  trigger,
  test,
  basic,
  useAction,
  useBasic,
  select,
  zone,
  damage,
  healing,
  move,
  condition,
  choose,
  when,
  hasTag,
  modify,
  redirect,
  reroll,
  cancel,
  end,
  refund,
  creaturesWithin,
  isRelation,
  ongoingDamage,
  descriptive,
  amount,
  half,
  double,
  negative,
  bonus,
  PerDay,
  PerEncounter,
} from './action-model'

const Band = {
  Low: amount({ dice: Rolls.dice(1, 6), potencyMultiplier: 1 }),
  Medium: amount({ dice: Rolls.dice(2, 6), potencyMultiplier: 2 }),
  High: amount({ dice: Rolls.dice(3, 6), potencyMultiplier: 3 }),
}

// Placeholders for tags, conditions and damage types the 4e and PF2e rulesets don't define

const placeholderTag = (name: string) => Tags.defineAbilityTag(`scratch/${name.toLowerCase().replace(/ /g, '-')}`, { name })
const placeholderCreatureTag = (name: string) => Tags.defineCreatureTag(`scratch/${name.toLowerCase().replace(/ /g, '-')}`, { name })
const placeholderDamageType = (name: string) => Damage.defineDamageType(`scratch/${name.toLowerCase()}`, { name })

const LightBlade = placeholderTag('Light Blade')
const MeleeAttack = placeholderTag('Melee')
const RangedAttack = placeholderTag('Ranged')
const Spell = placeholderTag('Spell')
const HealSpell = placeholderTag('Heal Spell')
const HarmSpell = placeholderTag('Harm Spell')
const Slowed = placeholderCreatureTag('Slowed')
const Grabbed = placeholderCreatureTag('Grabbed')
const Weakened = placeholderCreatureTag('Weakened')
const Covered = placeholderCreatureTag('Covered')
const PersistentBleed = placeholderCreatureTag('Persistent Bleed')
const Undead = placeholderCreatureTag('Undead')
const Cold = placeholderDamageType('Cold')
const Radiant = placeholderDamageType('Radiant')
const Vitality = placeholderDamageType('Vitality')
const Bleed = placeholderDamageType('Bleed')

export type Example = AbilityBaseProps & {
  name: string
  resource?: ResourcePool
}

export const Examples: Array<Example> = [
  {
    // Agility vs. Reflex against each creature in a 1-square sphere within medium range. Hit: Low acid damage, and the target is Corroded for 3
    // rounds, taking Low acid damage each round.
    name: 'Acid Splash',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: AgilityPotency,
        targeting: select({
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 1 },
          effects: [
            test({
              offense: AgilityAttackRating,
              defense: ReflexDefense,
              outcomes: {
                success: [damage(Band.Low, Acid), condition('Corroded', { duration: { rounds: 3 }, ongoingEffects: [damage(Band.Low, Acid)] })],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** each creature in a 1-square burst within 8 squares
  // **Attack:** Agility vs. Reflex
  // **Success:** The Target takes 1d6 + P Acid damage.
  //   The Target is affected by Corroded for 3 rounds.
  //     Ongoing:
  //       The Affected Creature takes 1d6 + P Acid damage.
  {
    // Brawn vs. AC against a creature within touch range. Hit: 1d6 + brawn potency physical damage.
    name: 'Dagger',
    actions: [
      basic({
        name: 'Attack with Dagger',
        action: ActionTypes.MajorAction,
        range: RangeBand.Touch,
        offense: BrawnAttackRating,
        defense: ArmorClass,
        dice: Rolls.dice(1, 6),
        damageType: Physical,
        potency: BrawnPotency,
      }),
    ],
  },
  // Rendered:
  // **Attack with Dagger · Major Action**
  // **Target:** one creature within 1 square
  // **Attack:** Brawn vs. Armor Class
  // **Success:** The Target takes 1d6 + P Physical damage.
  {
    // Throw at a point within medium range. Agility vs. Reflex against each creature in a 2-square sphere. Hit: Medium physical damage. Miss: half
    // damage.
    name: 'Impact Grenade',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: AgilityPotency,
        targeting: select({
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: AgilityAttackRating,
              defense: ReflexDefense,
              outcomes: { success: [damage(Band.Medium, Physical)], failure: [damage(half(Band.Medium), Physical)] },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** each creature in a 2-square burst within 8 squares
  // **Attack:** Agility vs. Reflex
  // **Success:** The Target takes 2d6 + 2P Physical damage.
  // **Failure:** The Target takes half of 2d6 + 2P Physical damage.
  {
    // An adjacent ally heals Low + intelligence potency. No roll.
    name: 'Medkit',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({ range: RangeBand.Touch, targets: [ActionRelation.Ally], effects: [healing(Band.Low)] }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** an ally within 1 square
  // The Target regains 1d6 + P hit points.
  {
    // Agility vs. Fortitude against each creature in a 2-square sphere within medium range. Hit: Blinded, Deafened and Primed for 1 round.
    name: 'Flashbang',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: select({
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: AgilityAttackRating,
              defense: FortitudeDefense,
              outcomes: {
                success: [
                  condition(Blinded, { duration: { rounds: 1 } }),
                  condition(Deafened, { duration: { rounds: 1 } }),
                  condition(Primed, { duration: { rounds: 1 } }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** each creature in a 2-square burst within 8 squares
  // **Attack:** Agility vs. Fortitude
  // **Success:** The Target is Blinded for 1 round.
  //   The Target is Deafened for 1 round.
  //   The Target is Primed for 1 round.
  {
    // A 3-square sphere of smoke within medium range lasts 3 rounds. Creatures in the smoke are Covered.
    name: 'Smoke Grenade',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: zone({
          name: 'Smoke',
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 3 },
          duration: { rounds: 3 },
          ongoingEffects: [condition(Covered)],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // Creates Smoke in a 3-square burst centered on a point within 8 squares for 3 rounds.
  //   Creatures in Smoke are Covered.
  {
    // Agility vs. Fortitude against each creature in a 2-square sphere within medium range. Hit: Low acid damage. The gas lingers for 3 rounds:
    // during your Sustain Phase, Agility vs. Fortitude against each creature inside it. Hit: Poisoned for 1 round.
    name: 'Gas Grenade',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: AgilityPotency,
        targeting: zone({
          name: 'Toxic Cloud',
          range: RangeBand.Medium,
          area: { type: AreaShape.Sphere, radius: 2 },
          duration: { rounds: 3 },
          immediateEffects: [test({ offense: AgilityAttackRating, defense: FortitudeDefense, outcomes: { success: [damage(Band.Low, Acid)] } })],
          ongoingEffects: [
            test({
              offense: AgilityAttackRating,
              defense: FortitudeDefense,
              outcomes: { success: [condition(Poisoned, { duration: { rounds: 1 } })] },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // Creates Toxic Cloud in a 2-square burst centered on a point within 8 squares for 3 rounds.
  //   When it appears, against each creature in Toxic Cloud:
  //     **Attack:** Agility vs. Fortitude
  //     **Success:** Each Of Them takes 1d6 + P Acid damage.
  //   Ongoing, against each creature in Toxic Cloud:
  //     **Attack:** Agility vs. Fortitude
  //     **Success:** Each Of Them is Poisoned for 1 round.
  {
    // Intelligence vs. Reflex against a creature within long range, then against up to three other creatures within medium range of it. Hit: High
    // electric damage. Miss: half damage.
    name: 'Chain Lightning',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({
          range: RangeBand.Long,
          effects: [
            test({
              offense: IntelligenceAttackRating,
              defense: ReflexDefense,
              outcomes: { success: [damage(Band.High, Electric)], failure: [damage(half(Band.High), Electric)] },
            }),
            select({
              range: RangeBand.Medium,
              count: 3,
              targets: [ActionRelation.Ally, ActionRelation.Enemy],
              effects: [
                test({
                  offense: IntelligenceAttackRating,
                  defense: ReflexDefense,
                  outcomes: { success: [damage(Band.High, Electric)], failure: [damage(half(Band.High), Electric)] },
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within 12 squares
  // **Attack:** Intelligence vs. Reflex
  // **Success:** The Target takes 3d6 + 3P Electric damage.
  // **Failure:** The Target takes half of 3d6 + 3P Electric damage.
  // Then, against up to 3 other creatures within 8 squares of the target:
  //   **Attack:** Intelligence vs. Reflex
  //   **Success:** Each Of Them takes 3d6 + 3P Electric damage.
  //   **Failure:** Each Of Them takes half of 3d6 + 3P Electric damage.
  {
    // Intelligence vs. Fortitude against a creature within medium range. Hit: Burning (Low fire) for 2 rounds. When it ends on a Primed creature, the
    // creature detonates: Intelligence vs. Reflex against each creature in a 3-square sphere around it. Hit: High fire damage and they are affected
    // by Living Bomb. Miss: half damage.
    name: 'Living Bomb',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        potency: IntelligencePotency,
        targeting: select({
          range: RangeBand.Medium,
          effects: [
            test({
              offense: IntelligenceAttackRating,
              defense: FortitudeDefense,
              outcomes: {
                success: [
                  condition(Burning, {
                    duration: { rounds: 2 },
                    ongoingEffects: [damage(Band.Low, Fire)],
                    endEffects: [
                      when(hasTag(Primed), [
                        end(Primed),
                        select({
                          area: { type: AreaShape.Sphere, radius: 3 },
                          targets: [ActionRelation.Ally, ActionRelation.Enemy],
                          effects: [
                            test({
                              offense: IntelligenceAttackRating,
                              defense: ReflexDefense,
                              outcomes: {
                                success: [
                                  damage(Band.High, Fire),
                                  descriptive('The target is affected by *[Living Bomb](ability:technology/living-bomb)*.'),
                                ],
                                failure: [damage(half(Band.High), Fire)],
                              },
                            }),
                          ],
                        }),
                      ]),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within 8 squares
  // **Attack:** Intelligence vs. Fortitude
  // **Success:** The Target is Burning for 2 rounds.
  //     Ongoing:
  //       The Affected Creature takes 1d6 + P Fire damage.
  //     When it ends:
  //       If the affected creature is Primed:
  //         The Affected Creature's Primed ends.
  //         Then, against each other creature in a 3-square burst around the affected creature:
  //           **Attack:** Intelligence vs. Reflex
  //           **Success:** Each Of Them takes 3d6 + 3P Fire damage.
  //             The target is affected by *[Living Bomb](ability:technology/living-bomb)*.
  //           **Failure:** Each Of Them takes half of 3d6 + 3P Fire damage.
  {
    // Choose a creature within medium range that is Primed and Burning. It detonates and immediately takes the damage from each of its Burning
    // conditions, then those conditions end.
    name: 'Combustion',
    actions: [
      action({
        action: ActionTypes.MinorAction,
        targeting: select({
          range: RangeBand.Medium,
          filter: [Primed, Burning],
          effects: [damage(ongoingDamage(Burning), Fire), end(Burning), end(Primed)],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** one creature that is Primed and Burning within 8 squares
  // The Target takes Fire damage equal to the total ongoing damage of the target's Burning conditions.
  // The Target's Burning ends.
  // The Target's Primed ends.
  {
    // Choose three different creatures within long range. The first takes Medium damage, the second is Prone, the third is Slowed.
    name: 'Split Shot',
    actions: [
      action({
        action: ActionTypes.MajorAction,
        targeting: [
          select({ range: RangeBand.Long, effects: [damage(Band.Medium, Physical)] }),
          select({ range: RangeBand.Long, distinct: true, effects: [condition(Prone)] }),
          select({ range: RangeBand.Long, distinct: true, effects: [condition(Slowed, { duration: { rounds: 1 } })] }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Major Action**
  // **Target:** one creature within 12 squares
  // The Target takes 2d6 + 2P Physical damage.
  // **Target:** one different creature within 12 squares
  // The Target is Prone.
  // **Target:** one different creature within 12 squares
  // The Target is Slowed for 1 round.
  {
    // An ally within 6 squares makes a melee basic attack against a creature within its reach. Hit: the ally adds your Intelligence modifier to the
    // damage.
    name: "Commander's Strike (4e)",
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 6,
          targets: [ActionRelation.Ally],
          effects: [
            useBasic(
              { specificOptions: [MeleeBasicAttack] },
              { by: ActionRole.Target, outcomes: { success: [damage(amount({ bonus: Dnd4e.IntelligenceModifier.variable }))] } }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** an ally within 6 squares
  // The Target makes a Melee Basic Attack.
  // **Success:** The Creature It Attacks takes Intelligence Modifier damage.
  {
    // Strength vs. AC. Hit: 3[W] + Str damage, and until the end of the encounter, whenever you or an ally within 10 squares hits, that creature can
    // slide an adjacent ally 1 square. Miss: choose one ally to gain the same benefit until the end of the encounter.
    name: 'White Raven Onslaught (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 3,
                outcomes: {
                  success: [
                    select({
                      from: ActionRole.You,
                      effects: [
                        condition('White Raven Onslaught', {
                          duration: Duration.Encounter,
                          triggers: [
                            trigger({
                              event: TriggerEvent.Hits,
                              subject: { range: 10, targets: [ActionRelation.Origin, ActionRelation.Ally] },
                              targeting: choose(
                                [
                                  {
                                    effects: [
                                      select({
                                        from: ActionRole.Subject,
                                        range: 1,
                                        targets: [ActionRelation.Ally],
                                        effects: [move(MoveKind.Slide, 1)],
                                      }),
                                    ],
                                  },
                                ],
                                { by: ActionRole.Subject, optional: true }
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                  failure: [
                    select({
                      from: ActionRole.You,
                      range: 10,
                      targets: [ActionRelation.Ally],
                      effects: [
                        condition('White Raven Onslaught', {
                          duration: Duration.Encounter,
                          triggers: [
                            trigger({
                              event: TriggerEvent.Hits,
                              subject: ActionRole.Bearer,
                              targeting: choose(
                                [
                                  {
                                    effects: [
                                      select({
                                        from: ActionRole.Subject,
                                        range: 1,
                                        targets: [ActionRelation.Ally],
                                        effects: [move(MoveKind.Slide, 1)],
                                      }),
                                    ],
                                  },
                                ],
                                { by: ActionRole.Subject, optional: true }
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target.
  // **Attack:** Strength Modifier vs. Armor Class
  // **Success:** The Target takes 3× ability damage dice + Strength Modifier damage. Then, against you:
  //     Each Of Them is affected by White Raven Onslaught until the end of the encounter.
  //       **Trigger:** you or an ally within 10 squares hits with an attack
  //       The Triggering Creature can:
  //         **Target:** an ally within 1 square of the triggering creature
  //         Slide the target 1 square.
  // **Failure:** Then, against an ally within 10 squares:
  //     Each Of Them is affected by White Raven Onslaught until the end of the encounter.
  //       **Trigger:** the affected creature hits with an attack
  //       The Triggering Creature can:
  //         **Target:** an ally within 1 square of the triggering creature
  //         Slide the target 1 square.
  {
    // Requirement: wielding a light blade. Dexterity vs. AC against one creature in melee. Hit: 1[W] + Dex damage. If the target attacks you before
    // the start of your next turn, you make your riposte against it as an immediate interrupt: Strength vs. AC, 1[W] + Str damage.
    name: 'Riposte Strike (4e)',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon, LightBlade] },
              {
                offense: Dnd4e.DexterityModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.DexterityModifier,
                outcomes: {
                  success: [
                    condition('Riposte', {
                      duration: { rounds: 1 },
                      actions: [
                        action({
                          action: Dnd4eActionTypes.ImmediateInterrupt,
                          trigger: { event: TriggerEvent.Attacks, object: ActionRole.You },
                          targeting: select({
                            from: ActionRole.Subject,
                            effects: [
                              useBasic(
                                { tags: [Weapon, LightBlade] },
                                { offense: Dnd4e.StrengthModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.StrengthModifier }
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon Light Blade action against the target.
  // **Attack:** Dexterity Modifier vs. Armor Class
  // **Success:** The Target takes ability damage dice + Dexterity Modifier damage. The Target is affected by Riposte for 1 round.
  //     **Immediate Interrupt**
  //     **Trigger:** the affected creature attacks you
  //     **Target:** the triggering creature
  //     You make a Weapon Light Blade action against the triggering creature.
  //     **Attack:** Strength Modifier vs. Armor Class
  //     **Success:** The Triggering Creature takes ability damage dice + Strength Modifier damage.
  {
    // Charisma vs. Will. Hit: you teleport the target 5 squares. Sustain Minor: repeat the attack; on a hit, teleport the target 5 squares again; on
    // a miss, the power ends.
    name: 'Summons of Khirad (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            test({
              offense: Dnd4e.CharismaModifier,
              defense: Dnd4e.Will,
              outcomes: {
                success: [
                  move(MoveKind.Teleport, 5),
                  condition('Summons of Khirad', {
                    duration: Duration.Sustained,
                    actions: [
                      action({
                        name: 'Sustain',
                        action: Dnd4eActionTypes.MinorAction,
                        targeting: select({
                          effects: [
                            test({
                              offense: Dnd4e.CharismaModifier,
                              defense: Dnd4e.Will,
                              outcomes: { success: [move(MoveKind.Teleport, 5)], failure: [end()] },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // **Attack:** Charisma Modifier vs. Will
  // **Success:** Teleport the target 5 squares.
  //   The Target is affected by Summons of Khirad (sustained).
  //     **Sustain · Minor Action**
  //     **Target:** the affected creature
  //     **Attack:** Charisma Modifier vs. Will
  //     **Success:** Teleport the target 5 squares.
  //     **Failure:** Summons of Khirad ends.
  {
    // Conjure a hand within 20 squares. It attacks an adjacent creature: Intelligence vs. Reflex. Hit: 2d8 + Int cold damage and the target is
    // grabbed. Sustain Minor: the grabbed target takes 1d8 + Int cold damage, or you move the hand and attack again, releasing the grabbed creature.
    name: "Bigby's Icy Grasp (4e)",
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        potency: Dnd4e.IntelligenceModifier,
        targeting: zone({
          name: 'Icy Hand',
          range: 20,
          duration: Duration.Sustained,
          immediateEffects: [
            select({
              range: 1,
              effects: [
                test({
                  offense: Dnd4e.IntelligenceModifier,
                  defense: Dnd4e.Reflex,
                  outcomes: {
                    success: [
                      damage(amount({ dice: Rolls.dice(2, 8), potencyMultiplier: 1 }), Cold),
                      condition(Grabbed, { duration: Duration.Sustained }),
                    ],
                  },
                }),
              ],
            }),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Dnd4eActionTypes.MinorAction,
              targeting: select({
                effects: [
                  choose([
                    {
                      label: 'Crush',
                      effects: [descriptive('The creature grabbed by the hand takes 1d8 + Intelligence modifier cold damage.')],
                    },
                    {
                      label: 'Move',
                      effects: [descriptive('Move the hand up to 6 squares and attack again, releasing any grabbed creature.')],
                    },
                  ]),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // Creates Icy Hand in a point within 20 squares (sustained).
  //   Then, against one creature within 1 square of Icy Hand:
  //     **Attack:** Intelligence Modifier vs. Reflex
  //     **Success:** Each Of Them takes 2d8 + P Cold damage.
  //       Each Of Them is Grabbed (sustained).
  //   **Sustain · Minor Action**
  //   **Target:** a creature in it
  //   You choose one:
  //     - **Crush:** The creature grabbed by the hand takes 1d8 + Intelligence modifier cold damage.
  //     - **Move:** Move the hand up to 6 squares and attack again, releasing any grabbed creature.
  {
    // Immediate Interrupt. Trigger: an adjacent ally is hit by a melee or ranged attack. Effect: you are hit by the attack instead.
    name: "Martyr's Blessing (4e)",
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.ImmediateInterrupt,
        trigger: { event: TriggerEvent.Hit, subject: { range: 1, targets: [ActionRelation.Ally] }, source: { tags: [[MeleeAttack, RangedAttack]] } },
        targeting: select({ from: ActionRole.You, effects: [redirect()] }),
      }),
    ],
  },
  // Rendered:
  // **Immediate Interrupt**
  // **Trigger:** an ally within 1 square is hit by an attack with a Melee or Ranged action
  // **Target:** you
  // The triggering attack targets you instead.
  {
    // Immediate Interrupt. Trigger: an enemy makes an attack against you or an ally. Strength vs. AC against the attacker. Hit: 1[W] + Str damage and
    // the triggering attack takes a penalty equal to your Wisdom modifier.
    name: 'Disruptive Strike (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.ImmediateInterrupt,
        trigger: {
          event: TriggerEvent.Attacks,
          subject: { targets: [ActionRelation.Enemy] },
          object: { targets: [ActionRelation.Origin, ActionRelation.Ally] },
        },
        targeting: select({
          from: ActionRole.Subject,
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                outcomes: { success: [modify(ModifyTarget.Roll, negative(Dnd4e.WisdomModifier.variable))] },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Immediate Interrupt**
  // **Trigger:** an enemy attacks you or an ally
  // **Target:** the triggering creature
  // You make a Weapon action against the triggering creature.
  // **Attack:** Strength Modifier vs. Armor Class
  // **Success:** The Triggering Creature takes ability damage dice + Strength Modifier damage. The triggering roll is modified by −Wisdom Modifier.
  {
    // Move your speed. At any point during the move, make two attacks against one or two targets: Strength vs. AC, 1[W] + Str damage each.
    name: 'Attacks on the Run (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: [
          select({
            from: ActionRole.You,
            effects: [move(MoveKind.Stride, Dnd4e.Speed.variable), descriptive('You can make the attacks at any point during the move.')],
          }),
          select({
            count: 2,
            repeats: true,
            effects: [useBasic({ tags: [Weapon] }, { offense: Dnd4e.StrengthModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.StrengthModifier })],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** you
  // Stride you Speed squares.
  // You can make the attacks at any point during the move.
  // **Target:** one creature within reach
  // You make a Weapon action against the target.
  // **Attack:** Strength Modifier vs. Armor Class
  // **Success:** The Target takes ability damage dice + Strength Modifier damage.
  {
    // Effect: each enemy within 3 squares that can see you shifts to a square adjacent to you. Then make an attack against each enemy now adjacent:
    // Strength vs. AC. Hit: 1[W] + Str damage.
    name: 'Come and Get It (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: [
          select({
            from: ActionRole.You,
            area: { type: AreaShape.Sphere, radius: 3 },
            targets: [ActionRelation.Enemy],
            effects: [move(MoveKind.Shift, 3, { towardYou: true })],
          }),
          select({
            from: ActionRole.You,
            area: { type: AreaShape.Sphere, radius: 1 },
            targets: [ActionRelation.Enemy],
            effects: [useBasic({ tags: [Weapon] }, { offense: Dnd4e.StrengthModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.StrengthModifier })],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** each enemy in a 3-square burst around you
  // Shift the target 3 squares toward you.
  // **Target:** each enemy in a 1-square burst around you
  // You make a Weapon action against the target.
  // **Attack:** Strength Modifier vs. Armor Class
  // **Success:** The Target takes ability damage dice + Strength Modifier damage.
  {
    // Roll two attack rolls against two creatures within 3 squares of each other, keep the higher, and use that single result against both targets.
    name: 'Split the Tree (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          count: 2,
          effects: [
            descriptive('Make two attack rolls and use the higher result against both targets.'),
            useBasic(
              { tags: [Weapon, RangedAttack] },
              { offense: Dnd4e.DexterityModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.DexterityModifier, dice: 2 }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // Make two attack rolls and use the higher result against both targets.
  // You make a Weapon Ranged action against the target.
  // **Attack:** Dexterity Modifier vs. Armor Class
  // **Success:** The Target takes 2× ability damage dice + Dexterity Modifier damage.
  {
    // Primary attack: Dexterity vs. AC. Miss: make a secondary attack against the same target: Dexterity vs. AC, half damage.
    name: 'Trick Strike (4e)',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.DexterityModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.DexterityModifier,
                outcomes: {
                  failure: [
                    useBasic(
                      { tags: [Weapon] },
                      { offense: Dnd4e.DexterityModifier, defense: Dnd4e.ArmorClass, potency: Dnd4e.DexterityModifier, factor: 0.5 }
                    ),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target.
  // **Attack:** Dexterity Modifier vs. Armor Class
  // **Success:** The Target takes ability damage dice + Dexterity Modifier damage.
  // **Failure:** You make a Weapon action against the target.
  //   **Attack:** Dexterity Modifier vs. Armor Class
  //   **Success:** The Target takes half of ability damage dice + Dexterity Modifier damage.
  {
    // Area burst 2 within 20 squares. Intelligence vs. Will. Hit: the target is slowed (save ends). If the target fails its first saving throw, it
    // becomes unconscious (save ends). Miss: the target is slowed (save ends).
    name: 'Sleep (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 20,
          area: { type: AreaShape.Sphere, radius: 2 },
          effects: [
            test({
              offense: Dnd4e.IntelligenceModifier,
              defense: Dnd4e.Will,
              outcomes: {
                success: [
                  condition(Slowed, {
                    duration: Duration.SaveEnds,
                    triggers: [
                      trigger({
                        event: TriggerEvent.FailedSave,
                        targeting: select({ effects: [condition(Unconscious, { duration: Duration.SaveEnds }), end()] }),
                      }),
                    ],
                  }),
                ],
                failure: [condition(Slowed, { duration: Duration.SaveEnds })],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** each creature in a 2-square burst within 20 squares
  // **Attack:** Intelligence Modifier vs. Will
  // **Success:** The Target is Slowed (save ends).
  //     **Trigger:** the affected creature fails a saving throw against Slowed
  //     **Target:** the affected creature
  //     The Target is Unconscious (save ends).
  //     Slowed ends.
  // **Failure:** The Target is Slowed (save ends).
  {
    // You gain a +6 bonus to AC until the end of the encounter. Each time an attack misses you, the bonus decreases by 2.
    name: 'Mirror Image (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.MinorAction,
        targeting: select({
          from: ActionRole.You,
          effects: [
            condition('Mirror Image', {
              duration: Duration.Encounter,
              effects: [bonus(Dnd4e.ArmorClass, 6)],
              triggers: [
                trigger({
                  event: TriggerEvent.Missed,
                  targeting: select({ effects: [descriptive('The bonus decreases by 2. When it reaches 0, Mirror Image ends.')] }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** you
  // You is affected by Mirror Image until the end of the encounter.
  //   +6 Armor Class
  //   **Trigger:** an attack misses the affected creature
  //   **Target:** the affected creature
  //   The bonus decreases by 2. When it reaches 0, Mirror Image ends.
  {
    // Wisdom vs. Will. Hit: choose one: the target is knocked prone, or you slide it 3 squares.
    name: 'Command (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            test({
              offense: Dnd4e.WisdomModifier,
              defense: Dnd4e.Will,
              outcomes: {
                success: [
                  choose([
                    { label: 'Prone', effects: [condition(Prone)] },
                    { label: 'Slide', effects: [move(MoveKind.Slide, 3)] },
                  ]),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // **Attack:** Wisdom Modifier vs. Will
  // **Success:** You choose one:
  //     - **Prone:** The Target is Prone.
  //     - **Slide:** Slide the target 3 squares.
  {
    // Wisdom vs. Reflex. Hit: 1d6 + Wis radiant damage, and one ally you can see chooses either to gain temporary hit points equal to your Charisma
    // modifier or to make a saving throw.
    name: 'Sacred Flame (4e)',
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        potency: Dnd4e.WisdomModifier,
        targeting: select({
          range: 5,
          effects: [
            test({
              offense: Dnd4e.WisdomModifier,
              defense: Dnd4e.Reflex,
              outcomes: {
                success: [
                  damage(amount({ dice: Rolls.dice(1, 6), potencyMultiplier: 1 }), Radiant),
                  select({
                    from: ActionRole.You,
                    range: 10,
                    targets: [ActionRelation.Ally],
                    effects: [
                      choose(
                        [
                          {
                            label: 'Temporary hit points',
                            effects: [healing(amount({ bonus: Dnd4e.CharismaModifier.variable }), { temporary: true })],
                          },
                          { label: 'Saving throw', effects: [descriptive('The ally makes a saving throw.')] },
                        ],
                        { by: ActionRole.Target }
                      ),
                    ],
                  }),
                ],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 5 squares
  // **Attack:** Wisdom Modifier vs. Reflex
  // **Success:** The Target takes 1d6 + P Radiant damage.
  //   Then, against an ally within 10 squares:
  //     The Target chooses one:
  //       - **Temporary hit points:** Each Of Them gains Charisma Modifier temporary hit points.
  //       - **Saving throw:** The ally makes a saving throw.
  {
    // The target gains a +5 bonus to all defenses until it attacks or until the end of your next turn.
    name: 'Sanctuary (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 5,
          targets: [ActionRelation.Ally],
          effects: [
            condition('Sanctuary', {
              duration: { rounds: 1 },
              effects: [bonus(Dnd4e.ArmorClass, 5), bonus(Dnd4e.Fortitude, 5), bonus(Dnd4e.Reflex, 5), bonus(Dnd4e.Will, 5)],
              triggers: [trigger({ event: TriggerEvent.Attacks, targeting: select({ effects: [end()] }) })],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** an ally within 5 squares
  // The Target is affected by Sanctuary for 1 round.
  //   +5 Armor Class
  //   +5 Fortitude
  //   +5 Reflex
  //   +5 Will
  //   **Trigger:** the affected creature attacks a creature
  //   **Target:** the affected creature
  //   Sanctuary ends.
  {
    // Close burst 1, each enemy in the burst. Charisma vs. Will. Hit: 2d8 + Cha radiant damage. Effect: the targets are weakened (save ends). You
    // can't use this power if any ally is within 5 squares of you.
    name: 'One Stands Alone (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        requirement: 'No ally is within 5 squares of you.',
        potency: Dnd4e.CharismaModifier,
        targeting: select({
          from: ActionRole.You,
          area: { type: AreaShape.Sphere, radius: 1 },
          targets: [ActionRelation.Enemy],
          effects: [
            test({
              offense: Dnd4e.CharismaModifier,
              defense: Dnd4e.Will,
              outcomes: { success: [damage(amount({ dice: Rolls.dice(2, 8), potencyMultiplier: 1 }), Radiant)] },
            }),
            condition(Weakened, { duration: Duration.SaveEnds }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action** · Requirement: No ally is within 5 squares of you.
  // **Target:** each enemy in a 1-square burst around you
  // **Attack:** Charisma Modifier vs. Will
  // **Success:** The Target takes 2d8 + P Radiant damage.
  // The Target is Weakened (save ends).
  {
    // Strength vs. AC, with a +1 bonus to the attack roll for each enemy adjacent to you. Hit: 2[W] + Str damage.
    name: 'Valiant Strike (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 2,
                attackBonus: ArrayExpressions.length(
                  ArrayExpressions.filter(creaturesWithin(ActionRole.You, 1), (it) => isRelation(it, ActionRelation.Enemy))
                ),
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target.
  // **Attack:** Strength Modifier vs. Armor Class, with a bonus to the attack roll equal to the number of creatures within 1 of you that are enemy
  // **Success:** The Target takes 2× ability damage dice + Strength Modifier damage.
  {
    // Stance. Until the stance ends, any enemy that starts its turn adjacent to you takes 1[W] damage, as long as you are able to make opportunity
    // attacks.
    name: 'Rain of Steel (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.MinorAction,
        targeting: select({
          from: ActionRole.You,
          effects: [
            condition('Rain of Steel', {
              duration: Duration.Encounter,
              effects: [CharacterEffects.descriptive('This is a stance. It ends when you take another stance.')],
              triggers: [
                trigger({
                  event: TriggerEvent.StartOfTurn,
                  subject: { range: 1, targets: [ActionRelation.Enemy] },
                  targeting: select({
                    from: ActionRole.Subject,
                    effects: [descriptive('The target takes 1[W] damage, as long as you are able to make opportunity attacks.')],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Minor Action**
  // **Target:** you
  // You is affected by Rain of Steel until the end of the encounter.
  //   This is a stance. It ends when you take another stance.
  //   **Trigger:** an enemy within 1 square starts its turn
  //   **Target:** the triggering creature
  //   The target takes 1[W] damage, as long as you are able to make opportunity attacks.
  {
    // Targets one conjuration or zone. Intelligence vs. the Will of its creator. Hit: the conjuration or zone is destroyed.
    name: 'Dispel Magic (4e)',
    resource: PerEncounter,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          range: 10,
          effects: [
            descriptive(
              'Target one conjuration or zone. Make an Intelligence attack against the Will of its creator. **Hit:** the conjuration or zone is destroyed.'
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within 10 squares
  // Target one conjuration or zone. Make an Intelligence attack against the Will of its creator. **Hit:** the conjuration or zone is destroyed.
  {
    // Reliable. Strength vs. AC. Hit: 3[W] + Str damage. If you miss, the power is not expended.
    name: 'Brute Strike (4e)',
    resource: PerDay,
    actions: [
      action({
        action: Dnd4eActionTypes.StandardAction,
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon] },
              {
                offense: Dnd4e.StrengthModifier,
                defense: Dnd4e.ArmorClass,
                potency: Dnd4e.StrengthModifier,
                dice: 3,
                outcomes: { failure: [refund()] },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Standard Action**
  // **Target:** one creature within reach
  // You make a Weapon action against the target.
  // **Attack:** Strength Modifier vs. Armor Class
  // **Success:** The Target takes 3× ability damage dice + Strength Modifier damage.
  // **Failure:** This use is not expended.
  {
    // Expend a heal or harm spell. Make a melee Strike. Hit: cast the 1-action version of the spell on the target, which automatically fails its save
    // (critically fails on a critical hit). Miss: the spell is lost.
    name: 'Channel Smite (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        requirement: 'Expend a heal or harm spell.',
        targeting: select({
          effects: [
            useBasic(
              { tags: [Weapon, MeleeAttack] },
              {
                outcomes: {
                  success: [
                    useAction(
                      { tags: [[HealSpell, HarmSpell]] },
                      {
                        outcomes: {
                          success: [
                            descriptive(
                              'Cast the 1-action version of the expended spell on the target. It automatically fails its save, or critically fails on a critical hit.'
                            ),
                          ],
                        },
                      }
                    ),
                  ],
                },
              }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆** · Requirement: Expend a heal or harm spell.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // **Success:** You make a Heal Spell or Harm Spell action against the target.
  //   **Success:** Cast the 1-action version of the expended spell on the target. It automatically fails its save, or critically fails on a critical hit.
  {
    // Stride up to twice your speed. Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through; on a
    // success you pass through. Then Strike.
    name: 'Barreling Charge (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: [
          select({
            from: ActionRole.You,
            effects: [
              move(MoveKind.Stride, NumericExpressions.multiply([Pf2e.Speed.variable, 2])),
              select({
                from: ActionRole.You,
                effects: [
                  descriptive('Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through.'),
                  test({
                    offense: Pf2e.Athletics,
                    defense: Pf2e.Fortitude,
                    outcomes: { success: [descriptive('You move through its space.')] },
                  }),
                ],
              }),
            ],
          }),
          select({ effects: [useBasic({ tags: [Weapon, MeleeAttack] })] }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** you
  // Stride you Speed × 2 feet.
  // Then, against you:
  //   Roll one Athletics check and compare it to the Fortitude DC of each creature whose space you move through.
  //   **Attack:** Athletics vs. Fortitude
  //   **Success:** You move through its space.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  {
    // Free action, once per day. Trigger: you fail a check. Reroll it and use the new result.
    name: 'Halfling Luck (PF2e)',
    resource: PerDay,
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        trigger: { event: TriggerEvent.FailsCheck },
        targeting: select({ from: ActionRole.You, effects: [reroll()] }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇**
  // **Trigger:** you fails a check
  // **Target:** you
  // Reroll the triggering roll and use the new result.
  {
    // Reaction. Trigger: you would take physical damage while your shield is raised. Reduce the damage by the shield's Hardness; you and the shield
    // each take the rest.
    name: 'Shield Block (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Damaged },
        requirement: 'Your shield is raised.',
        targeting: select({
          from: ActionRole.You,
          effects: [descriptive("Reduce the damage by your shield's Hardness. You and your shield each take any remaining damage.")],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Your shield is raised.
  // **Trigger:** you takes damage
  // **Target:** you
  // Reduce the damage by your shield's Hardness. You and your shield each take any remaining damage.
  {
    // Free action, once per day. Your next spell this turn costs 1 fewer action, if it is a cantrip or at least 2 ranks below your highest rank.
    name: 'Quickened Casting (PF2e)',
    resource: PerDay,
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        targeting: select({
          from: ActionRole.You,
          effects: [
            condition('Quickened Casting', {
              duration: { rounds: 1 },
              triggers: [
                trigger({
                  event: TriggerEvent.Casts,
                  source: { tags: [Spell] },
                  targeting: select({
                    effects: [
                      modify(ModifyTarget.Cost, -1),
                      end(),
                      descriptive('Only if the spell is a cantrip or at least 2 ranks below your highest rank.'),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇**
  // **Target:** you
  // You is affected by Quickened Casting for 1 round.
  //   **Trigger:** the affected creature casts a Spell action
  //   **Target:** the affected creature
  //   The triggering action cost is modified by -1.
  //   Quickened Casting ends.
  //   Only if the spell is a cantrip or at least 2 ranks below your highest rank.
  {
    // Summon a guardian with 50 HP within 120 feet. When you cast it and each time you Sustain it, move it up to 20 feet and choose: Attack (spell
    // attack against an adjacent creature, counts toward your multiple attack penalty) or Protect (it takes up to 10 damage instead of an adjacent
    // ally).
    name: 'Spiritual Guardian (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Spiritual Guardian',
          range: 120,
          duration: Duration.Sustained,
          immediateEffects: [
            descriptive(
              'The guardian has 50 HP. When you cast this spell and each time you Sustain it, move the guardian up to 20 feet and choose Attack or Protect.'
            ),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Pf2eActionTypes.SingleAction,
              targeting: select({
                effects: [
                  move(MoveKind.Stride, 20),
                  choose([
                    {
                      label: 'Attack',
                      effects: [
                        select({
                          range: 1,
                          effects: [
                            test({
                              offense: Pf2e.SpellAttack,
                              defense: Pf2e.ArmorClass,
                              outcomes: { success: [descriptive('Force damage, per the spell.')] },
                            }),
                          ],
                        }),
                      ],
                    },
                    {
                      label: 'Protect',
                      effects: [descriptive('Until your next turn, the guardian takes up to 10 damage instead of an adjacent ally.')],
                    },
                  ]),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // Creates Spiritual Guardian in a point within 120 feet (sustained).
  //   When it appears, against each creature in Spiritual Guardian:
  //     The guardian has 50 HP. When you cast this spell and each time you Sustain it, move the guardian up to 20 feet and choose Attack or Protect.
  //   **Sustain · Single Action ◆**
  //   **Target:** a creature in it
  //   Stride the target 20 feet.
  //   You choose one:
  //     - **Attack:** Then, against one creature within 1 foot of the target:
  //         **Attack:** Spell Attack vs. Armor Class
  //         **Success:** Force damage, per the spell.
  //     - **Protect:** Until your next turn, the guardian takes up to 10 damage instead of an adjacent ally.
  {
    // A 5-foot flame deals fire damage to creatures in its square (basic Reflex). Sustain: move it up to 10 feet, damaging each creature along its
    // path; a creature can be damaged only once per round.
    name: 'Floating Flame (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Floating Flame',
          range: 30,
          area: { type: AreaShape.Cube, size: 5 },
          duration: Duration.Sustained,
          immediateEffects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Reflex,
              defenderRolls: true,
              outcomes: {
                criticalSuccess: [damage(double(amount({ dice: Rolls.dice(3, 6) })), Fire)],
                success: [damage(amount({ dice: Rolls.dice(3, 6) }), Fire)],
                failure: [damage(half(amount({ dice: Rolls.dice(3, 6) })), Fire)],
              },
            }),
          ],
          actions: [
            action({
              name: 'Sustain',
              action: Pf2eActionTypes.SingleAction,
              targeting: select({
                effects: [
                  descriptive(
                    'Move the flame up to 10 feet. Each creature it passes through takes the damage again (basic Reflex), but a creature can be damaged only once per round.'
                  ),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // Creates Floating Flame in a 5-foot cube centered on a point within 30 feet (sustained).
  //   When it appears, against each creature in Floating Flame:
  //     **Reflex save** against your Spell DC
  //     **Success:** Each Of Them takes half of 3d6 Fire damage.
  //     **Failure:** Each Of Them takes 3d6 Fire damage.
  //     **Critical Failure:** Each Of Them takes double 3d6 Fire damage.
  //   **Sustain · Single Action ◆**
  //   **Target:** a creature in it
  //   Move the flame up to 10 feet. Each creature it passes through takes the damage again (basic Reflex), but a creature can be damaged only once per round.
  {
    // 1 action: touch a willing living creature to restore 1d8 HP. 2 actions: range 30 feet, restore 1d8 + 8. 3 actions: every creature in a 30-foot
    // emanation. Undead targets instead take that much vitality damage (basic Fortitude).
    name: 'Heal (PF2e)',
    actions: [
      action({
        name: '1 action',
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          range: 1,
          effects: [
            when(
              hasTag(Undead),
              [
                test({
                  offense: Pf2e.SpellDC,
                  defense: Pf2e.Fortitude,
                  defenderRolls: true,
                  outcomes: {
                    criticalSuccess: [damage(double(amount({ dice: Rolls.dice(1, 8) })), Vitality)],
                    success: [damage(amount({ dice: Rolls.dice(1, 8) }), Vitality)],
                    failure: [damage(half(amount({ dice: Rolls.dice(1, 8) })), Vitality)],
                  },
                }),
              ],
              { otherwise: [healing(amount({ dice: Rolls.dice(1, 8) }))] }
            ),
          ],
        }),
      }),
      action({
        name: '2 actions',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            when(
              hasTag(Undead),
              [
                test({
                  offense: Pf2e.SpellDC,
                  defense: Pf2e.Fortitude,
                  defenderRolls: true,
                  outcomes: {
                    criticalSuccess: [damage(double(amount({ dice: Rolls.dice(1, 8), bonus: 8 })), Vitality)],
                    success: [damage(amount({ dice: Rolls.dice(1, 8), bonus: 8 }), Vitality)],
                    failure: [damage(half(amount({ dice: Rolls.dice(1, 8), bonus: 8 })), Vitality)],
                  },
                }),
              ],
              { otherwise: [healing(amount({ dice: Rolls.dice(1, 8), bonus: 8 }))] }
            ),
          ],
        }),
      }),
      action({
        name: '3 actions',
        action: Pf2eActionTypes.ThreeActions,
        targeting: select({
          from: ActionRole.You,
          area: { type: AreaShape.Sphere, radius: 30 },
          effects: [
            when(
              hasTag(Undead),
              [
                test({
                  offense: Pf2e.SpellDC,
                  defense: Pf2e.Fortitude,
                  defenderRolls: true,
                  outcomes: {
                    criticalSuccess: [damage(double(amount({ dice: Rolls.dice(1, 8) })), Vitality)],
                    success: [damage(amount({ dice: Rolls.dice(1, 8) }), Vitality)],
                    failure: [damage(half(amount({ dice: Rolls.dice(1, 8) })), Vitality)],
                  },
                }),
              ],
              { otherwise: [healing(amount({ dice: Rolls.dice(1, 8) }))] }
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **1 action · Single Action ◆**
  // **Target:** one creature within 1 foot
  // If the target is Undead:
  //   **Fortitude save** against your Spell DC
  //   **Success:** The Target takes half of 1d8 Vitality damage.
  //   **Failure:** The Target takes 1d8 Vitality damage.
  //   **Critical Failure:** The Target takes double 1d8 Vitality damage.
  // Otherwise:
  //   The Target regains 1d8 hit points.
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // If the target is Undead:
  //   **Fortitude save** against your Spell DC
  //   **Success:** The Target takes half of 1d8 + 8 Vitality damage.
  //   **Failure:** The Target takes 1d8 + 8 Vitality damage.
  //   **Critical Failure:** The Target takes double 1d8 + 8 Vitality damage.
  // Otherwise:
  //   The Target regains 1d8 + 8 hit points.
  //
  // **3 actions · Three Actions ◆◆◆**
  // **Target:** each creature in a 30-foot burst around you
  // If the target is Undead:
  //   **Fortitude save** against your Spell DC
  //   **Success:** The Target takes half of 1d8 Vitality damage.
  //   **Failure:** The Target takes 1d8 Vitality damage.
  //   **Critical Failure:** The Target takes double 1d8 Vitality damage.
  // Otherwise:
  //   The Target regains 1d8 hit points.
  {
    // One ray per action spent (1 to 3), each against a different creature, each with its own spell attack roll. The multiple attack penalty
    // increases only after all of the rays. At 2+ actions each ray deals more damage.
    name: 'Blazing Bolt (PF2e)',
    actions: [1, 2, 3].map((count) =>
      action({
        name: `${count} action${count === 1 ? '' : 's'}`,
        action: [Pf2eActionTypes.SingleAction, Pf2eActionTypes.TwoActions, Pf2eActionTypes.ThreeActions][count - 1]!,
        targeting: select({
          range: 60,
          count,
          effects: [
            test({
              offense: Pf2e.SpellAttack,
              defense: Pf2e.ArmorClass,
              outcomes: {
                criticalSuccess: [damage(double(amount({ dice: Rolls.dice(count === 1 ? 2 : 4, 6) })), Fire)],
                success: [damage(amount({ dice: Rolls.dice(count === 1 ? 2 : 4, 6) }), Fire)],
              },
            }),
          ],
        }),
      })
    ),
  },
  // Rendered:
  // **1 action · Single Action ◆**
  // **Target:** one creature within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Success:** The Target takes 2d6 Fire damage.
  // **Critical Success:** The Target takes double 2d6 Fire damage.
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** up to 2 creatures within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Success:** The Target takes 4d6 Fire damage.
  // **Critical Success:** The Target takes double 4d6 Fire damage.
  //
  // **3 actions · Three Actions ◆◆◆**
  // **Target:** up to 3 creatures within 60 feet
  // **Attack:** Spell Attack vs. Armor Class
  // **Success:** The Target takes 4d6 Fire damage.
  // **Critical Success:** The Target takes double 4d6 Fire damage.
  {
    // One Strike against two adjacent foes, both within reach. Roll once and compare the result to each AC; roll damage once. Counts as two attacks
    // for your multiple attack penalty.
    name: 'Swipe (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          count: 2,
          targets: [ActionRelation.Enemy],
          effects: [descriptive("Roll once and compare the result to each target's AC."), useBasic({ tags: [Weapon, MeleeAttack] })],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within reach
  // Roll once and compare the result to each target's AC.
  // You make a Weapon Melee action against the target.
  {
    // Make two Strikes, one with each weapon, both at your current multiple attack penalty. If both hit the same target, add the damage together
    // before applying resistances and weaknesses.
    name: 'Double Slice (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        requirement: 'You are wielding two melee weapons, each in a different hand.',
        targeting: [
          select({ effects: [useBasic({ tags: [Weapon, MeleeAttack] })] }),
          select({
            effects: [
              useBasic({ tags: [Weapon, MeleeAttack] }),
              descriptive(
                'Use your other weapon. If both Strikes hit the same target, combine their damage before applying resistances and weaknesses.'
              ),
            ],
          }),
        ],
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆** · Requirement: You are wielding two melee weapons, each in a different hand.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // **Target:** one creature within reach
  // You make a Weapon Melee action against the target.
  // Use your other weapon. If both Strikes hit the same target, combine their damage before applying resistances and weaknesses.
  {
    // Reaction. Trigger: a creature casts a spell you have prepared. Expend your prepared copy and attempt to counteract the triggering spell.
    name: 'Counterspell (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Casts, subject: { range: 120 }, source: { tags: [Spell] } },
        requirement: 'Expend your prepared copy of the triggering spell.',
        targeting: select({
          from: ActionRole.You,
          effects: [descriptive('Attempt to counteract the triggering spell. If you succeed, it has no effect.'), cancel()],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Expend your prepared copy of the triggering spell.
  // **Trigger:** a creature within 120 feet casts a Spell action
  // **Target:** you
  // Attempt to counteract the triggering spell. If you succeed, it has no effect.
  // The triggering action has no effect.
  {
    // Reaction. The GM rolls your check in secret. Critical success / success: you identify the spell. Critical failure: you misidentify it as
    // another spell. Trained in the tradition: low-rank spells can't do worse than success.
    name: 'Recognize Spell (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Casts, subject: { range: 120 }, source: { tags: [Spell] } },
        targeting: select({
          from: ActionRole.You,
          effects: [
            descriptive('The GM rolls this check in secret.'),
            test({
              offense: Pf2e.Arcana,
              defense: Pf2e.SpellDC,
              outcomes: {
                criticalSuccess: [descriptive('You identify the spell and gain a +1 bonus to your save or AC against it.')],
                success: [descriptive('You identify the spell.')],
                criticalFailure: [descriptive('You misidentify the spell as another spell entirely, of the GM’s choice.')],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲**
  // **Trigger:** a creature within 120 feet casts a Spell action
  // **Target:** you
  // The GM rolls this check in secret.
  // **Attack:** Arcana vs. Spell DC
  // **Success:** You identify the spell.
  // **Critical Success:** You identify the spell and gain a +1 bonus to your save or AC against it.
  // **Critical Failure:** You misidentify the spell as another spell entirely, of the GM’s choice.
  {
    // Make a Performance check. The result sets how long your next composition cantrip lasts (4 rounds on a critical success, 3 on a success). On a
    // failure, the composition lasts 1 round and you don't spend the Focus Point.
    name: 'Lingering Composition (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.FreeAction,
        requirement: 'Spend 1 Focus Point.',
        targeting: select({
          from: ActionRole.You,
          effects: [
            test({
              offense: Pf2e.Performance,
              defense: Pf2e.Will,
              outcomes: {
                criticalSuccess: [descriptive('Your next composition cantrip lasts 4 rounds.')],
                success: [descriptive('Your next composition cantrip lasts 3 rounds.')],
                failure: [descriptive('Your next composition cantrip lasts 1 round.'), refund()],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Free Action ◇** · Requirement: Spend 1 Focus Point.
  // **Target:** you
  // **Attack:** Performance vs. Will
  // **Success:** Your next composition cantrip lasts 3 rounds.
  // **Failure:** Your next composition cantrip lasts 1 round.
  //   This use is not expended.
  // **Critical Success:** Your next composition cantrip lasts 4 rounds.
  {
    // Will save. Failure: the target spends its first action on its next turn obeying your command. Critical failure: it spends all its actions
    // obeying.
    name: 'Command (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                success: [descriptive('The target spends its first action on its next turn obeying your command.')],
                criticalSuccess: [descriptive('The target spends all its actions on its next turn obeying your command.')],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // **Will save** against your Spell DC
  // **Failure:** The target spends its first action on its next turn obeying your command.
  // **Critical Failure:** The target spends all its actions on its next turn obeying your command.
  {
    // Choose a mode. Area: a 4-square area becomes slippery; creatures entering or starting there must succeed at a Reflex save or Acrobatics check
    // or fall prone. Object: an unattended object becomes slippery, or a held object's wielder must save or drop it.
    name: 'Grease (PF2e)',
    actions: [
      action({
        name: 'Area',
        action: Pf2eActionTypes.TwoActions,
        targeting: zone({
          name: 'Grease',
          range: 30,
          area: { type: AreaShape.Sphere, radius: 5 },
          duration: { rounds: 10 },
          ongoingEffects: [
            descriptive('The creature can use Acrobatics instead of its Reflex save.'),
            test({
              offense: Pf2e.SpellDC,
              defenderRolls: true,
              defense: Pf2e.Reflex,
              outcomes: { success: [condition(Prone)] },
            }),
          ],
        }),
      }),
      action({
        name: 'Object',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            descriptive(
              "Target one object of 1 Bulk or less. If it's unattended, it becomes slippery. If it's held, its wielder must succeed at a Reflex save or drop it."
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Area · Two Actions ◆◆**
  // Creates Grease in a 5-foot burst centered on a point within 30 feet for 10 rounds.
  //   Ongoing, against each creature in Grease:
  //     The creature can use Acrobatics instead of its Reflex save.
  //     **Reflex save** against your Spell DC
  //     **Failure:** Each Of Them is Prone.
  //
  // **Object · Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // Target one object of 1 Bulk or less. If it's unattended, it becomes slippery. If it's held, its wielder must succeed at a Reflex save or drop it.
  {
    // Will save. Failure: the target is banished. You can spend an extra action and a material cost to give the target a −2 penalty to its save.
    // Critical success: the target is unaffected and you are stunned 1.
    name: 'Banishment (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                criticalFailure: [select({ from: ActionRole.You, effects: [condition(Stunned, { duration: { rounds: 1 } })] })],
                success: [descriptive('The target is banished to its home plane.')],
                criticalSuccess: [descriptive("The target is banished and can't return by any means for 1 week.")],
              },
            }),
          ],
        }),
      }),
      action({
        name: 'With material',
        action: Pf2eActionTypes.ThreeActions,
        requirement: 'A material component tied to the target.',
        targeting: select({
          range: 30,
          effects: [
            descriptive('The target takes a −2 status penalty to its save.'),
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                criticalFailure: [select({ from: ActionRole.You, effects: [condition(Stunned, { duration: { rounds: 1 } })] })],
                success: [descriptive('The target is banished to its home plane.')],
                criticalSuccess: [descriptive("The target is banished and can't return by any means for 1 week.")],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** one creature within 30 feet
  // **Will save** against your Spell DC
  // **Failure:** The target is banished to its home plane.
  // **Critical Success:** Then, against you:
  //     Each Of Them is Stunned for 1 round.
  // **Critical Failure:** The target is banished and can't return by any means for 1 week.
  //
  // **With material · Three Actions ◆◆◆** · Requirement: A material component tied to the target.
  // **Target:** one creature within 30 feet
  // The target takes a −2 status penalty to its save.
  // **Will save** against your Spell DC
  // **Failure:** The target is banished to its home plane.
  // **Critical Success:** Then, against you:
  //     Each Of Them is Stunned for 1 round.
  // **Critical Failure:** The target is banished and can't return by any means for 1 week.
  {
    // Make a Medicine check to restore HP to an adjacent creature. The target is then immune to your Battle Medicine for 1 day.
    name: 'Battle Medicine (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          range: 1,
          targets: [ActionRelation.Origin, ActionRelation.Ally],
          effects: [
            test({
              offense: Pf2e.Medicine,
              defense: Pf2e.ClassDC,
              outcomes: {
                criticalSuccess: [healing(amount({ dice: Rolls.dice(4, 8), bonus: 10 }))],
                success: [healing(amount({ dice: Rolls.dice(2, 8) }))],
                criticalFailure: [damage(amount({ dice: Rolls.dice(1, 8) }))],
              },
            }),
            descriptive('The target is immune to your Battle Medicine for 1 day.'),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Single Action ◆**
  // **Target:** one you or an ally within 1 foot
  // **Attack:** Medicine vs. Class DC
  // **Success:** The Target regains 2d8 hit points.
  // **Critical Success:** The Target regains 4d8 + 10 hit points.
  // **Critical Failure:** The Target takes 1d8 damage.
  // The target is immune to your Battle Medicine for 1 day.
  {
    // Reaction. Trigger: a creature deals piercing, slashing or persistent bleed damage to you. The triggering creature takes persistent bleed damage
    // (basic Will: half on a success, doubled on a critical failure). Failure also gives it weakness to piercing, slashing, and bludgeoning until the
    // bleed ends.
    name: 'Blood Vendetta (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.Reaction,
        trigger: { event: TriggerEvent.Damaged },
        requirement: 'Spend 1 Focus Point.',
        targeting: select({
          from: ActionRole.Object,
          effects: [
            test({
              offense: Pf2e.SpellDC,
              defense: Pf2e.Will,
              defenderRolls: true,
              outcomes: {
                criticalSuccess: [condition(PersistentBleed, { ongoingEffects: [damage(double(amount({ dice: Rolls.dice(2, 6) })), Bleed)] })],
                success: [
                  condition(PersistentBleed, {
                    ongoingEffects: [damage(amount({ dice: Rolls.dice(2, 6) }), Bleed)],
                    effects: [
                      CharacterEffects.descriptive('The creature has weakness 1 to piercing, slashing and bludgeoning damage until the bleed ends.'),
                    ],
                  }),
                ],
                failure: [condition(PersistentBleed, { ongoingEffects: [damage(half(amount({ dice: Rolls.dice(2, 6) })), Bleed)] })],
              },
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Reaction ⟲** · Requirement: Spend 1 Focus Point.
  // **Trigger:** you takes damage
  // **Target:** the creature it targeted
  // **Will save** against your Spell DC
  // **Success:** The Creature It Targeted is Persistent Bleed.
  //     Ongoing:
  //       The Affected Creature takes half of 2d6 Bleed damage.
  // **Failure:** The Creature It Targeted is Persistent Bleed.
  //     The creature has weakness 1 to piercing, slashing and bludgeoning damage until the bleed ends.
  //     Ongoing:
  //       The Affected Creature takes 2d6 Bleed damage.
  // **Critical Failure:** The Creature It Targeted is Persistent Bleed.
  //     Ongoing:
  //       The Affected Creature takes double 2d6 Bleed damage.
  {
    // When you cast it and at the start of each of your turns, you lose up to 2 HP and the target regains the same amount. This ignores modifiers and
    // temporary HP.
    name: 'Spirit Link (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          range: 30,
          targets: [ActionRelation.Ally],
          effects: [
            descriptive('You lose up to 2 Hit Points and the target regains that many. This ignores modifiers and temporary Hit Points.'),
            condition('Spirit Link', {
              duration: { rounds: 100 },
              triggers: [
                trigger({
                  event: TriggerEvent.StartOfTurn,
                  subject: ActionRole.You,
                  targeting: select({ effects: [descriptive('You lose up to 2 Hit Points and the target regains that many.')] }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Two Actions ◆◆**
  // **Target:** an ally within 30 feet
  // You lose up to 2 Hit Points and the target regains that many. This ignores modifiers and temporary Hit Points.
  // The Target is affected by Spirit Link for 100 rounds.
  //   **Trigger:** you starts its turn
  //   **Target:** the affected creature
  //   You lose up to 2 Hit Points and the target regains that many.
  {
    // Choose one transformation from the options your feats grant; some options require the 2-action cast. Heightened, you can choose more at once (2
    // at 6th rank, 3 at 10th).
    name: 'Untamed Shift (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.SingleAction,
        targeting: select({
          from: ActionRole.You,
          effects: [
            descriptive(
              'Choose one transformation granted by your untamed order feats. Heightened (6th): choose two. Heightened (10th): choose three.'
            ),
          ],
        }),
      }),
      action({
        name: '2 actions',
        action: Pf2eActionTypes.TwoActions,
        targeting: select({
          from: ActionRole.You,
          effects: [descriptive('As the 1-action version, and you can also choose transformations that require the 2-action cast.')],
        }),
      }),
    ],
  },
  // Rendered:
  // **Single Action ◆**
  // **Target:** you
  // Choose one transformation granted by your untamed order feats. Heightened (6th): choose two. Heightened (10th): choose three.
  //
  // **2 actions · Two Actions ◆◆**
  // **Target:** you
  // As the 1-action version, and you can also choose transformations that require the 2-action cast.
  {
    // Summon an animal whose level is set by a table by spell rank (level −1 at rank 1, level 1 at rank 2, ...). Sustained up to 1 minute.
    name: 'Summon Animal (PF2e)',
    actions: [
      action({
        action: Pf2eActionTypes.ThreeActions,
        targeting: zone({
          name: 'Summoned Animal',
          range: 30,
          duration: Duration.Sustained,
          immediateEffects: [
            descriptive(
              'You summon a creature with the animal trait of level −1 (rank 1), 1 (rank 2), 2 (rank 3), 3 (rank 4) or 5 (rank 5). It lasts up to 1 minute.'
            ),
          ],
        }),
      }),
    ],
  },
  // Rendered:
  // **Three Actions ◆◆◆**
  // Creates Summoned Animal in a point within 30 feet (sustained).
  //   When it appears, against each creature in Summoned Animal:
  //     You summon a creature with the animal trait of level −1 (rank 1), 1 (rank 2), 2 (rank 3), 3 (rank 4) or 5 (rank 5). It lasts up to 1 minute.
]
