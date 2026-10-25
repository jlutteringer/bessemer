import { Characteristics, CharacterValues } from '@simulacrum/ruleset'
import { Characteristic, CharacteristicTemplate } from '@simulacrum/ruleset/characteristic'
import { Expression, NumericExpressions } from '@bessemer/cornerstone/expression'
import { ObjectPaths } from '@bessemer/cornerstone'
import { RoundingMode } from '@bessemer/cornerstone/math'

export const VitalityPoolTemplate: CharacteristicTemplate = Characteristics.defineTemplate('vitality-pool', {
  name: 'Vitality Pool',
  description: `The vitality pool represents the total amount of damage a creature can take before it is [incapacitated](content:combat/incapacitated). A creature’s [vitality points](content:creatures/vitality-points) cannot go above the vitality pool cap and this cap typically remains static.`,
  path: ObjectPaths.from('vitalityPool'),
})
export const StaminaPoolTemplate: CharacteristicTemplate = Characteristics.defineTemplate('stamina-pool', {
  name: 'Stamina Pool',
  description: `The stamina pool represents the number of special actions a creature can perform before it needs to rest. A creature’s [stamina points](content:creatures/stamina-points) cannot go above the stamina pool cap and this cap typically remains static.`,
  path: ObjectPaths.from('staminaPool'),
})
export const SoakRatingTemplate: CharacteristicTemplate = Characteristics.defineTemplate('soak-rating', {
  name: 'Soak Rating',
  description: `Soak rating represents how much damage a creature can resist before it hits their [vitality pool](characteristic:vitality-pool). At the end of each turn, during the [sustain phase](content:combat/sustain-phase), a creature gains [soak points](content:creatures/soak-points) equal to its soak rating. These soak points prevent some damage by reducing it before it reduces [vitality points](content:creatures/vitality-points).`,
  path: ObjectPaths.from('soakRating'),
})
export const MovementSpeedTemplate: CharacteristicTemplate = Characteristics.defineTemplate('movement-speed', {
  name: 'Movement Speed',
  description: `Movement speed represents how far a creature can move on its turn. This speed is typically given in squares, where one square represents about five feet of movement.

Some creatures have different types of movement, such as [flying](content:combat/flying-movement) or [climbing](content:combat/climbing). These different types of movement will have separate speeds and will be indicated in the creature’s statistics.

Learn more about movement in the [Movement and Position](content:combat/movement-and-position) section of the rules.`,
  path: ObjectPaths.from('movementSpeed'),
})
export const InitiativeRatingTemplate: CharacteristicTemplate = Characteristics.defineTemplate('initiative-rating', {
  name: 'Initiative Rating',
  description: `Initiative rating represents how quickly a creature can react to circumstances in combat. Initiative rating is added to [initiative rolls](content:combat/initiative) at the start of combat.`,
  path: ObjectPaths.from('initiativeRating'),
})
export const ArmorClassTemplate: CharacteristicTemplate = Characteristics.defineTemplate('armor-class', {
  name: 'Armor Class',
  description: `Armor Class represents how hard a creature is to hit with physical attacks such as weapons and guns, either by dodging the attack or by being heavily armored. This is by far the most common type of defense.`,
  path: ObjectPaths.from('armorClass'),
})
export const FortitudeDefenseTemplate: CharacteristicTemplate = Characteristics.defineTemplate('fortitude', {
  name: 'Fortitude',
  description: `Fortitude represents how well a creature can overcome attacks on their body through sheer fortitude and might.`,
  path: ObjectPaths.from('fortitude'),
})
export const ReflexDefenseTemplate: CharacteristicTemplate = Characteristics.defineTemplate('reflex', {
  name: 'Reflex',
  description: `Reflex represents how well a creature can dodge attacks.`,
  path: ObjectPaths.from('reflex'),
})
export const WillDefenseTemplate: CharacteristicTemplate = Characteristics.defineTemplate('will', {
  name: 'Will',
  description: `Will represents how well a creature can withstand mental effects through sheer force of will.`,
  path: ObjectPaths.from('will'),
})

export const AttributesGroup = Characteristics.defineGroup('attributes', { name: 'Attributes' })
export const CombatGroup = Characteristics.defineGroup('combat', { name: 'Combat' })
export const DefensesGroup = Characteristics.defineGroup('defenses', { name: 'Defenses' })
export const AttackRatingsGroup = Characteristics.defineGroup('attack-ratings', { name: 'Attack Ratings' })
export const SkillsGroup = Characteristics.defineGroup('skills', { name: 'Skills' })

export const Brawn: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('brawn', {
    name: 'Brawn',
    description: `Brawn measures bodily power, athletic training, and the extent to which you can exert raw physical force. It governs the following aspects of your character:

- Brawn rating added to [melee physical attack rolls](characteristic:brawn-attack-rating)
- Brawn rating added to [brawn potency](content:characters/potency)
- Brawn rating added to [soak rating](content:characters/soak-rating)
- Brawn rating added to [healing surge rolls](content:combat/healing-surges)
- Brawn rating added to [Fortitude](characteristic:fortitude) defense`,
    path: ObjectPaths.from('brawn'),
  }),
  baseValue: 0,
})

export const Agility: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('agility', {
    name: 'Agility',
    description: `Agility measures dexterity, reflexes, and balance. It governs the following aspects of your character:

- Agility rating added to [ranged physical attack rolls](characteristic:agility-attack-rating)
- Agility rating added to [agility potency](content:characters/potency)
- Agility rating added to [initiative rolls](content:combat/initiative)
- Agility rating added to [Armor Class](characteristic:armor-class) defense, depending on armor type
- Agility rating added to [Reflex](characteristic:reflex) defense`,
    path: ObjectPaths.from('agility'),
  }),
  baseValue: 0,
})

export const Willpower: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('willpower', {
    name: 'Willpower',
    description: `Willpower measures mental fortitude, resilience, and determination. It governs the following aspects of your character:

- Willpower rating added to [Khydrian attack rolls](characteristic:willpower-attack-rating)
- Willpower rating added to [willpower potency](content:characters/potency)
- Willpower rating added to [Will](characteristic:will) defense`,
    path: ObjectPaths.from('willpower'),
  }),
  baseValue: 0,
})

export const Intelligence: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('intelligence', {
    name: 'Intelligence',
    description: `Intelligence measures cognitive aptitude, problem-solving ability, and knowledge retention. It governs the following aspects of your character:

- Intelligence rating added to [tech attack rolls](characteristic:intelligence-attack-rating)
- Intelligence rating added to [intelligence potency](content:characters/potency)`,
    path: ObjectPaths.from('intelligence'),
  }),
  baseValue: 0,
})

export const Presence: Characteristic = Characteristics.defineCharacteristic({
  group: AttributesGroup,
  template: Characteristics.defineTemplate('presence', {
    name: 'Presence',
    description: `Presence measures charisma, charm, and force of personality. It governs the following aspects of your character:

- Four times presence rating added to [stamina pool](content:characters/stamina-pool)`,
    path: ObjectPaths.from('presence'),
  }),
  baseValue: 0,
})

export const VitalityPool: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: VitalityPoolTemplate,
  baseValue: NumericExpressions.sum([10, NumericExpressions.multiply([CharacterValues.Level, 5])]),
})

export const StaminaCost = {
  Low: 2,
  Medium: 4,
  High: 8,
  VeryHigh: 12,
}

export const StaminaBase = 24
export const StaminaPresenceMultiplier = 4

export const StaminaPool: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: StaminaPoolTemplate,
  baseValue: NumericExpressions.sum([StaminaBase, NumericExpressions.multiply([StaminaPresenceMultiplier, Presence.variable])]),
})

export const ProficiencyBonus: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: Characteristics.defineTemplate('proficiency-bonus', {
    name: 'Proficiency Bonus',
    description: `Proficiency bonus represents a character’s training and experience. It starts at +3 and grows to +8 as the character gains levels, as shown in the [standard progression](content:characters/standard-progression).

A character adds its proficiency bonus to its [attack ratings](content:characters/attack-rating) and [defense ratings](content:characters/defense-rating), and to checks with any [skill](content:skills) it is proficient in. A proficiency bonus is only ever added once to the same roll or rating, even when more than one effect would grant it.

A character's [attributes](content:characters/attributes) can't be increased above its proficiency bonus.`,
    path: ObjectPaths.from('proficiencyBonus'),
  }),
  baseValue: NumericExpressions.min([
    8,
    NumericExpressions.sum([NumericExpressions.round(NumericExpressions.multiply([CharacterValues.Level, 1 / 3]), 0, RoundingMode.Floor), 3]),
  ]),
})

export const SoakRating: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: SoakRatingTemplate,
  baseValue: Brawn.variable,
})

export const MovementSpeed: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: MovementSpeedTemplate,
  baseValue: 4,
})

export const InitiativeRating: Characteristic = Characteristics.defineCharacteristic({
  group: CombatGroup,
  template: InitiativeRatingTemplate,
  baseValue: Agility.variable,
})

export const defenseRating = (base: number, attribute: Expression<number>): Expression<number> => {
  return NumericExpressions.sum([
    base,
    ProficiencyBonus.variable,
    attribute,
    NumericExpressions.round(NumericExpressions.multiply([ProficiencyBonus.variable, 0.5]), 0, RoundingMode.Ceiling),
  ])
}

export const DefenseBonus = {
  Medium: 3,
  Heavy: 5,
}

export const ArmorClass: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: ArmorClassTemplate,
  baseValue: NumericExpressions.sum([6, ProficiencyBonus.variable, Agility.variable]),
})

export const FortitudeDefense: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: FortitudeDefenseTemplate,
  baseValue: defenseRating(6, Brawn.variable),
})

export const ReflexDefense: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: ReflexDefenseTemplate,
  baseValue: defenseRating(6, Agility.variable),
})

export const WillDefense: Characteristic = Characteristics.defineCharacteristic({
  group: DefensesGroup,
  template: WillDefenseTemplate,
  baseValue: defenseRating(6, Willpower.variable),
})

export const BrawnAttackRating: Characteristic = Characteristics.defineCharacteristic({
  group: AttackRatingsGroup,
  template: Characteristics.defineTemplate('brawn-attack-rating', {
    name: 'Brawn Attack Rating',
    description: `Brawn attack rating applies to [melee weapon attack rolls](content:combat/melee-attacks) and melee physical attack rolls. It is calculated by Proficiency + [Brawn Rating](characteristic:brawn).`,
    path: ObjectPaths.from('brawnAttackRating'),
  }),
  baseValue: NumericExpressions.sum([ProficiencyBonus.variable, Brawn.variable]),
})

export const AgilityAttackRating: Characteristic = Characteristics.defineCharacteristic({
  group: AttackRatingsGroup,
  template: Characteristics.defineTemplate('agility-attack-rating', {
    name: 'Agility Attack Rating',
    description: `Agility attack rating applies to [ranged weapon attack rolls](content:combat/ranged-attacks) and ranged physical attack rolls. It is calculated by Proficiency + [Agility Rating](characteristic:agility).`,
    path: ObjectPaths.from('agilityAttackRating'),
  }),
  baseValue: NumericExpressions.sum([ProficiencyBonus.variable, Agility.variable]),
})

export const WillpowerAttackRating: Characteristic = Characteristics.defineCharacteristic({
  group: AttackRatingsGroup,
  template: Characteristics.defineTemplate('willpower-attack-rating', {
    name: 'Willpower Attack Rating',
    description: `Willpower attack rating applies to Khydrian attack rolls. It is calculated by Proficiency + [Willpower Rating](characteristic:willpower).`,
    path: ObjectPaths.from('willpowerAttackRating'),
  }),
  baseValue: NumericExpressions.sum([ProficiencyBonus.variable, Willpower.variable]),
})

export const IntelligenceAttackRating: Characteristic = Characteristics.defineCharacteristic({
  group: AttackRatingsGroup,
  template: Characteristics.defineTemplate('intelligence-attack-rating', {
    name: 'Intelligence Attack Rating',
    description: `Intelligence attack rating applies to tech attack rolls. It is calculated by Proficiency + [Intelligence Rating](characteristic:intelligence).`,
    path: ObjectPaths.from('intelligenceAttackRating'),
  }),
  baseValue: NumericExpressions.sum([ProficiencyBonus.variable, Intelligence.variable]),
})

export const Athletics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/athletics', {
    name: 'Athletics',
    description: `Player characters lead dramatic lives filled with constant physical confrontation. Often, that confrontation comes from enemies with weapons, but sometimes it may be a mountain to be scaled, a river to be swum, or a chasm that must be leaped. The Athletics skill governs these actions. It serves as a measure of the character’s overall fitness and physical conditioning. Those who actively engage in a regimen of physical training, such as field infantry and scouts, are the most likely to be proficient in Athletics.

- All aspects of climbing, including rappelling and swinging on a line, fall under the purview of the Athletics skill. The difficulty of these tasks is determined by the surface and weather conditions during the attempts.
- Characters who attempt to swim in difficult conditions must check their Athletics. Water conditions, particularly waves, currents and tides, dictate the overall challenge of any effort to swim.
- A character’s vertical and horizontal jumps are both determined through use of an Athletics check. Gravitational conditions and the distance required factor into the difficulty.
- Any character can run, but sprinting or running for an extended time falls under the purview of an Athletics check.

The difficulty of an Athletics check is set by the severity of the task and the conditions. Attempting to perform a routine task under normal conditions should never require a check. A more demanding task, such as jumping more than a person’s body length or staying afloat for hours, should require an Athletics check.`,
    path: ObjectPaths.from('athletics'),
  }),
  baseValue: Brawn.variable,
})

export const Charm: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/charm', {
    name: 'Charm',
    description: `For a character with a kind smile and a silver tongue, it might be possible to overcome obstacles simply by depending on the kindness of others. An individual with this knack is capable of giving just the right compliment to their target, often by deciphering the subject’s social and cultural backgrounds. Note that the use of the Charm skill requires the acting character to maintain a degree of sincerity in their statements. A character who employs flagrant flattery with no basis in reality would be better suited to the Deception skill.

Charm is often an opposed check, resisted by the subject’s Presence. An exception is a situation in which the character is trying to charm a large group, in which case a set DC is usually employed. Of course, situational modifiers may also apply based on the character’s style of dress, species, and other characteristics. For instances in which the desired outcome is directly opposed to the target’s interests, disadvantage can be applied to the check.

Politicians, salespeople, and con artists are all renowned for their charm.

- Persuading an individual to make a special exception to their usual practices through flattery, flirting, and grace typically relies on Charm.
- Appeals to a target’s better nature, even if it does not exist, generally require a character to use Charm. These sorts of requests may require the target to go out of their way to aid the characters without any hope of reimbursement.
- Seduction attempts typically rely on Charm, but for situations in which the interest is entirely feigned it is usually more appropriate to use Deception.`,
    path: ObjectPaths.from('charm'),
  }),
  baseValue: Presence.variable,
})

export const Coercion: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/coercion', {
    name: 'Coercion',
    description: `Some people believe that the only way to maintain respect is to be feared. Others may only grant respect to those whom they fear. When a character attempts to instill obedience in a target through the use of threats or blackmail, they use Coercion.

Coercion is often an opposed check, resisted by the subject’s Willpower. Situational modifiers, such as the degree to which a subject is helpless or a degree of threat that is less significant than expected, may confer advantage or disadvantage. An exception is a situation in which a character is trying to coerce a large group, in which case a set DC is usually employed. Keep in mind that targets are often more difficult to coerce while in a group.

Military dictators and crime leaders are both known for their ability to coerce their subjects.

- Any time a character issues a threat, whether or not accompanied by hostile actions, they are using Coercion against the subject. An implied threat, such as gesturing toward a weapon, is sufficient to invoke Coercion.
- If a target is questioned or persuaded under conditions of physical captivity, the acting character should make a Coercion check.
- Acts of physical torture always invoke Coercion. Of course, physical violence may also wound the subject, but such actions are separate from the Coercion attempt.`,
    path: ObjectPaths.from('coercion'),
  }),
  baseValue: Presence.variable,
})

export const Computers: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/computers', {
    name: 'Computers',
    description: `Most worlds could scarcely function without the constant assistance of computers. Devices everywhere are linked together and coordinated by computers and Virtual Intelligence. Those talented in computing can sometimes exploit these resources, or they might know how to best avoid those systems under computer control. Many people are so unconsciously dependent upon computers that those who can cleverly manipulate them may commit crimes without their victims even becoming aware of the offenses.

Even using the Grid for communications or entertainment requires the use of computers, particularly if there are forces interfering with the system. This skill also governs the repair of a damaged computer system, defending against an intruding hacker, and the routine maintenance necessary to keep the software on a computer or Virtual Intelligence running effectively.

- Attempts to open a locked door, control an elevator, or bypass a security system make use of the Computers skill.
- Searching through a subject’s records, particularly if those notes are encrypted, makes use of Computers to overcome any security measures and interpret the material’s organizational structure and any external links.
- Investigating what actions a slicer may have taken against a computer system requires the Computers skill to identify the files that have been accessed or altered.
- Efforts to alter a Virtual Intelligence’s programming or gain access to its memories require the acting character to make a Computers check.
- Characters must make a Computers check to recover data from a system that has suffered physical damage.

The difficulty of the Computers check is calculated based on any defenses present within the system and the inherent sophistication of the system against intrusion. Slicing into a small merchant’s systems to alter a transaction might be trivially easy, while a military outpost could be hardened and prepared for a hacker’s assault. In general, the more vital the materials protected by the system, the more difficult the system should be to overcome.`,
    path: ObjectPaths.from('computers'),
  }),
  baseValue: Intelligence.variable,
})

export const Coordination: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/coordination', {
    name: 'Coordination',
    description: `When a character needs to go somewhere without being seen, it often requires them to balance upon unstable surfaces, crawl through narrow openings or even tumble down from a dangerous height. Overcoming these types of challenges requires a tremendous sense of balance and a heightened degree of flexibility. While both of these abilities depend heavily upon a person’s natural characteristics, they can be further developed through regimens of practice and exercise.

Any time a character needs to contort their body into unusual positions, Coordination is used. Note some species may be inherently more flexible than the norm. This benefit is discussed in their species description where applicable.

Many scoundrels become known for their natural flexibility and grace. For some, their lives may frequently depend upon their expertise in the skill. For others, the skill serves as an important complement to their other techniques.

- A character may attempt to reduce damage suffered from falling, diminishing the impact by rolling into a tumble on a successful Coordination check.
- Walking across a narrow surface, whether a wide beam or a thin pipe, requires a tremendous sense of balance and a successful Coordination check.
- Characters can use Coordination to escape from restraints, contorting their limbs at unusual angles so that bindings slip free.
- Crawling through the twists and turns of a sewage pipe, ventilation duct, or garbage chute may require a successful Coordination check to avoid a sudden fall, or worse yet, becoming stuck in place.`,
    path: ObjectPaths.from('coordination'),
  }),
  baseValue: Agility.variable,
})

export const Deception: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/deception', {
    name: 'Deception',
    description: `Sometimes a character needs to persuade someone to act a certain way, but lacks any leverage for the discussion. In times like this, a certain degree of moral flexibility may be necessary. Whether it’s an effort to persuade someone to make a purchase, do a favor or simply go somewhere else, a well-timed and convincing lie can make the difference between success and failure. When a falsehood plays the central role in a persuasive effort, the character making use of it is employing the Deception skill. Agitators, infiltrators and many less-than-reputable merchants are all masters of Deception. Many individuals outside of these fields make use of this skill, but it’s seldom a critical focus of their development.

Attempts to deceive are subject to the perceptions of the target. Deception is opposed by the subject’s Discipline.`,
    path: ObjectPaths.from('deception'),
  }),
  baseValue: Presence.variable,
})

export const Discipline: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/discipline', {
    name: 'Discipline',
    description: `Keep your composure and see through lies and manipulation.`,
    path: ObjectPaths.from('discipline'),
  }),
  baseValue: Willpower.variable,
})

export const GridRunning: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/grid-running', {
    name: 'Grid Running',
    description: `Navigate and operate within the Grid.`,
    path: ObjectPaths.from('gridRunning'),
  }),
  baseValue: Intelligence.variable,
})

export const Investigation: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/investigation', {
    name: 'Investigation',
    description: `Search for clues and piece together what happened.`,
    path: ObjectPaths.from('investigation'),
  }),
  baseValue: Intelligence.variable,
})

export const Leadership: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/leadership', {
    name: 'Leadership',
    description: `Even great heroes sometimes need the assistance of others to complete their goals. Certainly the foulest villains consistently use legions of flunkies to assist them in their rampages. The ability to lead such companions and devotees can play a crucial part in the success or failure of any endeavor. While some may follow out of fear or the promise of tremendous riches, ultimately most individuals choose to work with a person in whom they have faith and trust. The Leadership skill represents a character’s ability to instill that belief in the people with whom they choose to interact. Politicians, military officers, and crime bosses all determine their degree of success based on their abilities to lead others.

Leadership is a combination of being able to make smart decisions, being firm and decisive when doing so, and instilling a sense of loyalty and respect in one’s subordinates.

- If a character’s allies have become subject to the effects of fear, they may be rallied through a Leadership check.
- When acting in a public venue, a character may use Leadership to sway a crowd to take action, most commonly of a political nature.
- If a character’s underlings have fallen before the guile of an opponent, the character may realign their loyalty to their cause by making a successful Leadership check.

The difficulty of a Leadership check is based on the complexity of the orders a character is attempting to convey. It is also based on the intelligence and professionalism of the subjects they are attempting to command. Particularly complex orders, or stubborn or particularly dull subjects, will require passing a higher DC.

When a character attempts to command a target to perform an action that could result in harm to the target, or is in some other way against the target’s nature or best interest, an opposed check is often required. The character’s Leadership check is usually opposed by the Willpower of the target, depending on the particulars of the order given.`,
    path: ObjectPaths.from('leadership'),
  }),
  baseValue: Presence.variable,
})

export const Lore: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/lore', {
    name: 'Lore',
    description: `Some worlds and parts of the galaxy have been inhabited for centuries. During that time, countless civilizations have arisen and many have gone extinct. Those civilizations that achieved interstellar travel communicated with one another and shared their histories. Over time, some of these tales changed and grew into myths and legends. Many have a strong basis in truth, so much so that some of these stories still conceal a great deal of valuable information.

Characters with a particular interest in foreign cultures and ancient legends may decide to turn this interest into a profession. Forgotten military outposts, lost technology, and half-remembered legends could all help to tip the scales of war. Other times, a character might stumble across an item connected to one of these legends, an item whose utility could far exceed its initial appearance.

- A character’s knowledge of the legends associated with the exploits of an ancient hero is represented by the Lore skill.
- Any time a character needs to decipher a piece of writing or identify its context, they must make a Lore check.

A Lore check’s difficulty is assigned by the obscurity of the information relative to the character making the check. This means that certain characters from different backgrounds might have different DCs when making a Lore check. Well-known knowledge may not even require a check, but the tales of a people who died out centuries ago may be nearly forgotten.`,
    path: ObjectPaths.from('lore'),
  }),
  baseValue: Intelligence.variable,
})

export const Mechanics: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/mechanics', {
    name: 'Mechanics',
    description: `Space travel is fraught with dangers. A failed life support system can leave a crew desperate to find any haven where they might safely land. A failed Khydrian drive might strand them hopelessly far from the nearest repair yard. Individuals who accept these dangers need to have tremendous faith in either the quality of their craft or the mechanical skills of its crew. Even in those cases where confidence is based on a craft’s quality and maintenance regimen, the presence of a capable mechanic can still be crucial to the ship’s ultimate survival.

Planetary and atmospheric craft, machines and even a trusty sidearm can break down at the least convenient moment possible. These devices use vastly different technologies, but they share core components that any technical expert can carry over from one device to another. The Mechanics skill represents the expertise required for any of these repairs. The skill plays a critical role for any technician, but is also relevant for pilots and support staff who serve in the field.

- Any device that suffers physical damage can be repaired using this skill, with the proper tools.
- A character may use Mechanics prior to beginning a repair job, so that they can identify the parts and tools necessary for the job, along with their approximate cost. This information may be particularly useful to a character seeking to pay for repairs.
- Sometimes, a character may have access to an extensive supply of discrete components or damaged devices. In this situation, attempts to construct a completely new device are dependent on the Mechanics skill.

At the game master’s discretion, it might be impossible to complete a repair without the necessary tools or components. Alternatively, the game master may choose to apply disadvantage to the skill check to represent temporary fixes.`,
    path: ObjectPaths.from('mechanics'),
  }),
  baseValue: Intelligence.variable,
})

export const Medicine: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/medicine', {
    name: 'Medicine',
    description: `Through the course of their travels, characters are certain to suffer injuries. Minor injuries may not require medical intervention, but more serious ones may need the attention of a trained professional. The Medicine skill constitutes that training and can be used to heal cuts and bruises as well as life-threatening injuries.

- Routine first aid, including use of medpacs, depends upon a character’s abilities in Medicine. Medpacs are mercifully simple to use, but the difficulty may be complicated by the severity of the wound.
- The ability to treat for poison, or to inflict one, falls under the Medicine skill. This also governs the use of pharmaceutical or recreational drugs.
- Many places harbor unique infections, diseases or parasites. A well-traveled medical technician may become familiar with both the symptoms and treatments for many such syndromes.
- More serious treatments, such as surgeries, cybernetic augmentations, and psychotherapy are governed by Medicine, but they generally require additional pharmaceuticals or medical instruments.`,
    path: ObjectPaths.from('medicine'),
  }),
  baseValue: Intelligence.variable,
})

export const Navigation: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/navigation', {
    name: 'Navigation',
    description: `There are many billions of stars populating the galaxy, all of which are in motion relative to one another. Planets and smaller masses constantly orbit many of these stars. There are also huge numbers of nebulae and other astronomical anomalies throughout the galaxy. Traveling between worlds of the galaxy requires a rudimentary knowledge of the galaxy’s organization and composition. It also requires an up-to-date navigation computer that is well-informed of the current time and relative motion of these objects.

The Navigation skill represents a character’s ability to use their knowledge of the galaxy to most effectively program the navigation system for any drift. Additionally, the Navigation skill also represents a character’s ability to read and understand navigational maps of the surface of planets or find their way to a distant location without directions or other specific guidance.

- Any time a character wishes to program a navigation computer for a Khydrian drift, they must first use Navigation to program the navigation computer.
- Any time a character wishes to find their way to a distant location without directions, they may use Navigation to aid this process.
- Navigation governs a character’s basic knowledge of galactic and planetary geography. It may be checked at any time a character wonders what other locations are nearby.
- In the event that characters arrive in an unknown system or location, they may use a navigation computer and their Navigation skill to identify their location.
- Navigation also covers familiarity with the galaxy’s drift relay routes and the types of craft and commerce most common along these routes.`,
    path: ObjectPaths.from('navigation'),
  }),
  baseValue: Intelligence.variable,
})

export const Performance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/performance', {
    name: 'Performance',
    description: `Captivate an audience through music, dance, acting, or oration.`,
    path: ObjectPaths.from('performance'),
  }),
  baseValue: Presence.variable,
})

export const Piloting: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/piloting', {
    name: 'Piloting',
    description: `Those involved in the conflict between the stars often find the ability to pilot a starship paramount. Additionally, when characters travel across the surface of worlds they often stray far from their spacecraft in smaller craft, particularly ones best suited to a given planet’s habitat. Both planetary and space piloting can include repulsorlift vehicles, watercraft and aircraft. No matter how the vehicle moves, whether rolling, gliding, walking, flying or floating, the skill that governs its use is Piloting.

Under normal traffic and environmental conditions, a character should never need to actually check the Piloting skill. Its use is reserved for the most extreme of conditions. This might include a high speed pursuit, travel in treacherous weather conditions, the use of a failing vehicle, or any combination of such complications. For some, this skill is a passion and a livelihood; for others, it’s simply a necessity of their lifestyle.

- If a character is confronted by a completely foreign type of craft, they must make a Piloting check to decipher its basic controls.
- Any time two characters are involved in a vehicular race, the results are determined by a competitive check using Piloting.
- If a character is either chasing another or being chased, losing the follower or maintaining the tail is done through an opposed Piloting check.
- The Piloting skill is used to resolve checks in combat while controlling a vehicle.

The difficulty of a Piloting check may be determined based on the difficulty of any particular maneuver, the prevailing weather conditions, and any features or failures of the vehicle involved.`,
    path: ObjectPaths.from('piloting'),
  }),
  baseValue: Agility.variable,
})

export const Statecraft: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/statecraft', {
    name: 'Statecraft',
    description: `Navigate politics, diplomacy, and the workings of corporations and governments.`,
    path: ObjectPaths.from('statecraft'),
  }),
  baseValue: Presence.variable,
})

export const Stealth: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/stealth', {
    name: 'Stealth',
    description: `Often, a character may have business to conduct that is best completed with a certain degree of privacy. It might be that there are powerful individuals who are directly opposed to their choice of actions. Other times, a character might be avoiding a bounty or law enforcement. Under such conditions, a successful mission may depend entirely upon how talented the character is at not being noticed. The Stealth skill reflects this ability under virtually all situations.

Any spy who depends upon physical insertion must be a master of this trade. Stealth also encompasses wilderness camouflage skills, which may be crucial to any commando.

- Attempts to hide from all of an opponent’s senses are dependent upon Stealth, though difficulty may be modified by ambient conditions and any applicable gear.
- Stealth can allow characters to shadow or follow individuals without being detected.
- Characters may attempt to hide people or objects from the attention of others, either through concealment or misdirection. Such actions are dependent on the Stealth skill.

The difficulty of a Stealth check often depends on the abilities of those the character is attempting to avoid. Stealth checks are typically opposed by Vigilance, based upon whether the opponent is passively or actively searching for the hidden character.`,
    path: ObjectPaths.from('stealth'),
  }),
  baseValue: Agility.variable,
})

export const Streetwise: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/streetwise', {
    name: 'Streetwise',
    description: `Find contacts, gather rumors, and get by in the criminal underworld.`,
    path: ObjectPaths.from('streetwise'),
  }),
  baseValue: Presence.variable,
})

export const Survival: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/survival', {
    name: 'Survival',
    description: `It’s not uncommon for characters to become isolated far from civilization. Sometimes this is by choice; and other times, they could be stranded in a location, hoping for some sort of rescue. Learning to recognize the dangers of the natural environment, as well as exploiting its resources, is dependent on the Survival skill.

Characters who have spent their formative years on wilderness planets often have proficiency in this skill as part of their background. Others may learn it as part of their military training. Some may be completely dependent upon it, as their job focuses on traveling to untamed locations so that they may exploit their natural resources.

- When a character needs to identify safe food, potable water, or shelter in a natural environment, each of these tasks requires a Survival check.
- Characters who are skilled at Survival understand weather patterns, recognize the signs of imminent dangerous conditions and know how to prepare.
- Tracking a subject through the wilderness, whether game or an enemy combatant, is dependent upon Survival.
- Survival governs a character’s ability to handle domesticated animals, so that they may be used as beasts of burden or transport.

The difficulty of a Survival check is dependent upon the severity of the environment. Key factors are the biocompatibility of the area’s native life with the character, weather conditions and the basic tools on hand.`,
    path: ObjectPaths.from('survival'),
  }),
  baseValue: Willpower.variable,
})

export const Vigilance: Characteristic = Characteristics.defineCharacteristic({
  group: SkillsGroup,
  template: Characteristics.defineTemplate('skill/vigilance', {
    name: 'Vigilance',
    description: `Stay alert to your surroundings and notice hidden threats.`,
    path: ObjectPaths.from('vigilance'),
  }),
  baseValue: Willpower.variable,
})

export const AllCharacteristics: Array<Characteristic> = [
  Brawn,
  Agility,
  Willpower,
  Intelligence,
  Presence,
  VitalityPool,
  StaminaPool,
  ProficiencyBonus,
  SoakRating,
  MovementSpeed,
  InitiativeRating,
  ArmorClass,
  FortitudeDefense,
  ReflexDefense,
  WillDefense,
  BrawnAttackRating,
  AgilityAttackRating,
  WillpowerAttackRating,
  IntelligenceAttackRating,
  Athletics,
  Charm,
  Coercion,
  Computers,
  Coordination,
  Deception,
  Discipline,
  GridRunning,
  Investigation,
  Leadership,
  Lore,
  Mechanics,
  Medicine,
  Navigation,
  Performance,
  Piloting,
  Statecraft,
  Stealth,
  Streetwise,
  Survival,
  Vigilance,
]

export const AllCharacteristicGroups = [AttributesGroup, CombatGroup, DefensesGroup, AttackRatingsGroup, SkillsGroup]
