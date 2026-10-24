import { Content } from '@simulacrum/ruleset'
import * as Characteristic from '@simulacrum/ruleset-pf2e/characteristic'
import * as Lore from '@simulacrum/ruleset-pf2e/lore'

export const SkillsSection = Content.defineSection('skills', {
  content: {
    name: 'Skills',
    description:
      "While your character's attributes represent their raw talent and potential, skills represent their training and experience at performing certain tasks. Each skill is keyed to one of your character's attributes and used for an array of related actions. Your character's expertise in a skill comes from several sources, including their background and class. In this chapter, you'll learn about skills, their scope, and the actions they can be used for.\n\nA character's acumen in skills can come from all sorts of training, from practicing acrobatic tricks to studying academic topics to rehearsing a performing art. When you create your character and as they advance in level, you have flexibility as to which skills they become better at and when. Some classes depend heavily on certain skills—such as the [bard](trait:bard)'s reliance on [Performance](characteristic:skill/performance)—but for most classes, you can choose whichever skills make the most sense for your character's theme and backstory at 1st level, then use their adventure and downtime experiences to inform how their skills should improve as your character levels up.\n\nA character gains training in certain skills at 1st level: typically two from their background, a small number of predetermined skills from their class, and several skills of your choice granted by their class. This training increases your proficiency ranks for those skills to trained instead of untrained and lets you use more of the skills' actions. Sometimes you might become trained in the same skill from multiple sources, such as if your background granted training in [Survival](characteristic:skill/survival) and you took the ranger class, which also grants training in Survival. Each time after the first that you'd become trained in a given skill, you instead allocate the trained proficiency to any other skill of your choice—though if the skill is a Lore skill, the new skill must also be a Lore skill.",
  },
})

export const KeyAttributeSection = Content.defineSection('skills/key-attribute', {
  parent: SkillsSection,
  content: {
    name: 'Key Attribute',
    description:
      'Each skill is tied to a key attribute. You add your modifier for this attribute to checks and DCs when using that skill. For example, skulking about the shadows of a city at night with [Stealth](characteristic:skill/stealth) uses your [Dexterity modifier](characteristic:dexterity), navigating the myriad personalities and power plays of court politics with [Society](characteristic:skill/society) uses your [Intelligence modifier](characteristic:intelligence), and so on. The key attribute for each skill is listed on the Skills, Key Attributes, and Actions table on page 227 and also appears in parentheses following the skill’s name in the descriptions on the following pages. If the GM deems it appropriate for a certain situation, however, they might have you use a different attribute modifier for a skill check or when determining your skill DC.',
  },
})

export const SkillActionsSection = Content.defineSection('skills/skill-actions', {
  parent: SkillsSection,
  content: {
    name: 'Skill Actions',
    description:
      "The actions you can perform with a given skill are sorted into those you can use untrained and those that require you to be trained in the skill, as shown on the Skills, Key Attributes, and Actions table (page 227). The untrained and trained actions of each skill appear in separate sections within the skill's description.\n\nAnyone can use a skill's untrained actions, but you can use trained actions only if you have a proficiency rank of trained or better in that skill. A circumstance, condition, or effect might bar you from a skill action regardless of your proficiency rank, and sometimes using a skill in a specific situation might require you to have a higher proficiency rank than what is listed on the table. For instance, even though a fighter untrained in [Arcana](characteristic:skill/arcana) could identify a construct with a lucky roll using Arcana to [Recall Knowledge](content:skills/recall-knowledge), the GM might decide that Recalling Knowledge to determine the spells used to create such a construct is beyond the scope of the fighter's anecdotal knowledge. The GM decides whether a task requires a particular proficiency rank.\n\n**Improving Skills**\n\nAs your character advances in level, there are two main ways their skills improve: skill increases and skill feats. Your class lists the levels at which you gain each of these improvements.\n\n**Skill Increases**\n\nSkill increases improve your proficiency in skills of your choice. You can use these increases to become trained in new skills or increase your proficiency rank in skills you're trained in (from trained to expert at any level, expert to master at 7th level or higher, and master to legendary at 15th level or higher). Unlike when you first become trained at a skill, if two different abilities would make you an expert, master, or legendary in a skill, you don't get to choose a second skill to become expert in—the redundant benefit simply has no effect.\n\n**Skill Feats**\n\nSkill feats are a type of general feat that often grant you a new way to use a skill or make you better at using a skill in a particular way. Skill feats always have the skill trait. These feats appear in Chapter 5.",
  },
})

export const SkillChecksAndDCsSection = Content.defineSection('skills/skill-checks-and-dcs', {
  parent: SkillsSection,
  content: {
    name: 'Skill Checks and DCs',
    description:
      "When you're actively using a skill, often by performing one of its actions, you might attempt a skill check: rolling a d20 and adding your skill modifier. To determine this modifier, add your attribute modifier for the skill's key attribute, your proficiency bonus for the skill, and any other bonuses and penalties.\n\n**Skill modifier = skill's key attribute modifier + proficiency bonus + other bonuses + penalties** When noting the modifier on your character sheet, you should write down only the numbers that always apply— typically just your attribute modifier and proficiency bonus at 1st level. At higher levels, you may wear or use items to improve your skills with item bonuses pretty much all the time; you should include those in your calculation, too.\n\nThe GM sets the DC of a skill check, using the GM Core guidelines . The DCs you're most likely to encounter frequently are the five simple skill DCs below, which are presented here to give you a sense of what number you'll need to roll to succeed at most tasks.\n\n## Simple Skill DC\n\n| **Task Difficulty** | **Simple DC** |\n|---|---|\n| Untrained | 10 |\n| Trained | 15 |\n| Expert | 20 |\n| Master | 30 |\n| Legendary | 40 |\n| |\n\nWhen someone or something tests your skill, they attempt a check against your skill DC, which is equal to 10 plus your skill modifier. A skill DC works like any other DC to determine the effect of an opposing creature's skill action.\n\nSee page 400 in Chapter 8: Playing the Game for more information about modifiers, bonuses, and penalties.",
  },
})

export const ArmorAndSkillsSection = Content.defineSection('skills/armor-and-skills', {
  parent: SkillChecksAndDCsSection,
  content: {
    name: 'Armor and Skills',
    description:
      'Some armor imposes a penalty on specific skill checks and DCs. If a creature is wearing armor that imparts a skill penalty, that penalty is applied to the creature’s Strength- and Dexterity-based skill checks and skill DCs, unless the action has the attack trait. Check penalties from armor are detailed [here](content:equipment/check-penalty).',
  },
})

export const SecretChecksSection = Content.defineSection('skills/secret-checks', {
  parent: SkillChecksAndDCsSection,
  content: {
    name: 'Secret Checks',
    description:
      'Sometimes you won’t know whether you have succeeded at a skill check. If an action has the secret trait, the GM rolls the check for you and informs you of the effect without revealing the result of the roll or the degree of success. The GM rolls secret checks when your knowledge about the outcome is imperfect, like when you’re searching for a hidden creature or object, attempting to deceive someone, translating a tricky bit of ancient text, or remembering some piece of lore. This way, you as the player don’t know things that your character wouldn’t. This rule is the default for actions with the secret trait, but the GM can choose not to use secret checks if they would rather some or all rolls be public.',
  },
})

export const ExplorationAndDowntimeActivitiesSection = Content.defineSection('skills/exploration-and-downtime-activities', {
  parent: SkillChecksAndDCsSection,
  content: {
    name: 'Exploration and Downtime Activities',
    description:
      'Some skill activities have the exploration or downtime trait. Exploration activities usually take a minute or more, while downtime activities may take a day or more. They usually can’t be used during an encounter, though the GM might bend this restriction. If you’re not sure whether you have the time to use one of these activities, ask your GM.',
  },
})

export const GeneralSkillActionsSection = Content.defineSection('skills/general-skill-actions', {
  parent: SkillsSection,
  content: {
    name: 'General Skill Actions',
    description:
      'General skill actions are skill actions that can be used with multiple different skills. When you use a general skill action, you might use your modifier from any skill that lists it as one of the skill’s actions, depending on the situation.',
  },
})

export const DecipherWritingSection = Content.defineSection('skills/decipher-writing', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Decipher Writing',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Secret](content:traits/secret)*\n\nYou attempt to decipher complicated writing or literature on an obscure topic. This usually takes 1 minute per page of text, but might take longer (typically an hour per page for decrypting ciphers or the like). The text must be in a language you can read, though the GM might allow you to attempt to decipher text written in an unfamiliar language using [Society](characteristic:skill/society) instead.\n\nThe DC is determined by the GM based on the state or complexity of the document. The GM might have you roll one check for a short text or a check for each section of a larger text.\n\n**Critical Success** You understand the true meaning of the text.\n\n**Success** You understand the true meaning of the text. If it was a coded document, you know the general meaning but might not have a word-for-word translation.\n\n**Failure** You can't understand the text and take a –2 circumstance penalty to further checks to decipher it.\n\n**Critical Failure** You believe you understand the text on that page, but you have in fact misconstrued its message.\n\n**Sample Decipher Writing Tasks**\n\n**Trained** entry-level philosophy treatise\n\n**Expert** complex code, such as a cipher\n\n**Master** spymaster’s code or advanced research notes\n\n**Legendary** esoteric planar text written in metaphor by an ancient celestial",
  },
})

export const EarnIncomeSection = Content.defineSection('skills/earn-income', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Earn Income',
    description:
      "*[Downtime](content:traits/downtime)*\n\nYou use one of your skills to make money during downtime. The GM assigns a task level representing the most lucrative job available. You can search for lower-level tasks, with the GM determining whether you find any. Sometimes you can attempt to find better work than the initial offerings, though this takes time and requires using the [Diplomacy](characteristic:skill/diplomacy) skill to [Gather Information](content:skills/gather-information), doing some research, or socializing.\n\nWhen you take on a job, the GM secretly sets the DC of your skill check. After your first day of work, you roll to determine your earnings. You gain an amount of income based on your result, the task's level, and your proficiency rank (as listed on the Income Earned table).\n\nYou can continue working at the task on subsequent days without needing to roll again. For each day you spend after the first, you earn the same amount as the first day, up until the task's completion. The GM determines how long you can work at the task. Most tasks last a week or two, though some can take months or even years.\n\n**Critical Success** You do outstanding work. Gain the amount of currency listed for the task level + 1 and your proficiency rank.\n\n**Success** You do competent work. Gain the amount of currency listed for the task level and your proficiency rank.\n\n**Failure** You do shoddy work and get paid the bare minimum for your time. Gain the amount of currency listed in the failure column for the task level. The GM will likely reduce how long you can continue at the task.\n\n**Critical Failure** You earn nothing for your work and are fired immediately. You can't continue at the task. Your reputation suffers, potentially making it difficult for you to find rewarding jobs in that community in the future.\n\n## Table 4-2: Income Earned\n\n| **Task Level** | **DC** | **Failed** | **Trained** | **Expert** | **Master** | **Legendary** |\n|---|---|---|---|---|---|---|\n| 0 | 14 | 1 cp | 5 cp | 5 cp | 5 cp | 5 cp |\n| 1 | 15 | 2 cp | 2 sp | 2 sp | 2 sp | 2 sp |\n| 2 | 16 | 4 cp | 3 sp | 3 sp | 3 sp | 3 sp |\n| 3 | 18 | 8 cp | 5 sp | 5 sp | 5 sp | 5 sp |\n| 4 | 19 | 1 sp | 7 sp | 8 sp | 8 sp | 8 sp |\n| 5 | 20 | 2 sp | 9 sp | 1 gp | 1 gp | 1 gp |\n| 6 | 22 | 3 sp | 1 gp, 5 sp | 2 gp | 2 gp | 2 gp |\n| 7 | 23 | 4 sp | 2 gp | 2 gp, 5 sp | 2 gp, 5 sp | 2 gp, 5 sp |\n| 8 | 24 | 5 sp | 2 gp, 5 sp | 3 gp | 3 gp | 3 gp |\n| 9 | 26 | 6 sp | 3 gp | 4 gp | 4 gp | 4 gp |\n| 10 | 27 | 7 sp | 4 gp | 5 gp | 6 gp | 6 gp |\n| 11 | 28 | 8 sp | 5 gp | 6 gp | 8 gp | 8 gp |\n| 12 | 30 | 9 sp | 6 gp | 8 gp | 10 gp | 10 gp |\n| 13 | 31 | 1 gp | 7 gp | 10 gp | 15 gp | 15 gp |\n| 14 | 32 | 1 gp, 5 sp | 8 gp | 15 gp | 20 gp | 20 gp |\n| 15 | 34 | 2 gp | 10 gp | 20 gp | 28 gp | 28 gp |\n| 16 | 35 | 2 gp, 5 sp | 13 gp | 25 gp | 36 gp | 40 gp |\n| 17 | 36 | 3 gp | 15 gp | 30 gp | 45 gp | 55 gp |\n| 18 | 38 | 4 gp | 20 gp | 45 gp | 70 gp | 90 gp |\n| 19 | 39 | 6 gp | 30 gp | 60 gp | 100 gp | 130 gp |\n| 20 | 40 | 8 gp | 40 gp | 75 gp | 150 gp | 200 gp |\n| 20 (critical success) | — | — | 50 gp | 90 gp | 175 gp | 300 gp |\n\n**Sample Earn Income Tasks**\n\nThese examples use Alcohol Lore to work in a bar or Legal Lore to perform legal work.\n\n**Trained** bartend, do legal research\n\n**Expert** curate drink selection, present minor court cases\n\n**Master** run a large brewery, present important court cases\n\n**Legendary** run an international brewing franchise, present a case in Hell’s courts",
  },
})

export const IdentifyMagicSection = Content.defineSection('skills/identify-magic', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Identify Magic',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Secret](content:traits/secret)*\n\nOnce you discover that an item, location, or ongoing effect is magical, you can spend 10 minutes to try to identify the particulars of its magic. If your attempt is interrupted, you must start over. The GM sets the DC for your check. Cursed magic or esoteric subjects usually have higher DCs or might even be impossible to identify using this activity alone. Heightening a spell doesn't increase the DC to identify it.\n\n**Critical Success** You learn all the attributes of the magic, including its name (for an effect), what it does, any means of activating it (for an item or location), and whether it is cursed.\n\n**Success** For an item or location, you get a sense of what it does and learn any means of activating it. For an ongoing effect (such as a spell with a duration), you learn the effect's name and what it does. You can't try again in hopes of getting a critical success.\n\n**Failure** You fail to identify the magic and can't try again for 1 day.\n\n**Critical Failure** You misidentify the magic as something else of the GM's choice.",
  },
})

export const LearnASpellSection = Content.defineSection('skills/learn-a-spell', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Learn a Spell',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\n**Requirements** You have a spellcasting class feature, and the spell you want to learn is on your magical tradition's spell list\n\nYou can gain access to a new spell of your tradition from someone who knows that spell or from magical writing like a spellbook or scroll. If you can cast spells of multiple traditions, you can Learn a Spell of any of those traditions, but you must use the corresponding skill to do so. For example, if you were a [cleric](trait:cleric) with the bard multiclass archetype, you couldn't use [Religion](characteristic:skill/religion) to add an [occult](trait:spellcasting/occult-spell-list) spell to your bardic spell repertoire.\n\nTo learn the spell, you must do the following:\n\n- Spend 1 hour per spell rank, during which you must remain in conversation with a person who knows the spell or have the magical writing in your possession.\n\n- Have materials with the Price indicated in the Learning a Spell table.\n\n- Attempt a skill check for the skill corresponding to your tradition (DC determined by the GM, often close to the DC on the Learning a Spell Table). Uncommon or rare spells have higher DCs.\n\n**Critical Success** You expend half the materials and learn the spell.\n\n**Success** You expend the materials and learn the spell.\n\n**Failure** You fail to learn the spell but can try again after you gain a level. The materials aren't expended.\n\n**Critical Failure** As failure, except you expend half the materials.\n\n## Table 4-3: Learning a Spell\n\n| **Spell Rank** | **Price** | **Typical DC** |\n|---|---|---|\n| 1st or cantrip | 2 gp | 15 |\n| 2nd | 6 gp | 18 |\n| 3rd | 16 gp | 20 |\n| 4th | 36 gp | 23 |\n| 5th | 70 gp | 26 |\n| 6th | 140 gp | 28 |\n| 7th | 300 gp | 31 |\n| 8th | 650 gp | 34 |\n| 9th | 1,500 gp | 36 |\n| 10th | 7,000 gp | 41 |\n\n**Learned Spells**\n\nA spell you learn is added to your repository of spells, such as a spellbook for a wizard, familiar for a witch, or spell list for a cleric or druid. If you have a spell repertoire, such as a bard, it's not automatically added since you can only know a limited number of spells. Instead, you can select it when you add or swap spells.",
  },
})

export const RecallKnowledgeSection = Content.defineSection('skills/recall-knowledge', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Recall Knowledge',
    description:
      "◆ *[Concentrate](content:traits/concentrate), [Secret](content:traits/secret)*\n\nYou attempt a skill check to try to remember a bit of knowledge regarding a topic related to that skill. Suggest which skill you'd like to use and ask the GM one question. The GM determines the DC. You might need to collaborate with the GM to narrow down the question or skills, and you can decide not to Recall Knowledge before committing to the action if you don't like your options.\n\n**Critical Success** You recall the knowledge accurately. The GM answers your question truthfully and either tells you additional information or context, or answers one followup question.\n\n**Success** You recall the knowledge accurately. The GM answers your question truthfully.\n\n**Critical Failure** You recall incorrect information. The GM answers your question falsely (or decides to give you no information, as on a failure).\n\n**Sample Recall Knowledge Tasks**\n\nThese examples use [Society](characteristic:skill/society) or [Religion](characteristic:skill/religion).\n\n**Untrained** name of a ruler, key noble, or major deity\n\n**Trained** line of succession for a major noble family, core doctrines of a major deity\n\n**Expert** genealogy of a minor noble, teachings of an ancient priest\n\n**Master** hierarchy of a genie noble court, major extraplanar temples of a deity\n\n**Legendary** existence of a long-lost noble heir, secret doctrines of a religion",
  },
})

export const SubsistSection = Content.defineSection('skills/subsist', {
  parent: GeneralSkillActionsSection,
  content: {
    name: 'Subsist',
    description:
      "*[Downtime](content:traits/downtime)*\n\nYou try to provide food and shelter for yourself, and possibly others as well, with a standard of living described [here](content:equipment/cost-of-living). The GM determines the DC based on the nature of the place where you're trying to Subsist. You might need a minimum proficiency rank to Subsist in particularly strange environments. Unlike most downtime activities, you can Subsist after 8 hours or less of exploration, but if you do, you take a –5 penalty.\n\n**Critical Success** You either provide a subsistence living for yourself and one additional creature, or you improve your own food and shelter, granting yourself a comfortable living.\n\n**Success** You find enough food and shelter with basic protection from the elements to provide you a subsistence living.\n\n**Failure** You're exposed to the elements and don't get enough food, becoming [fatigued](content:conditions/fatigued) until you attain sufficient food and shelter.\n\n**Critical Failure** You attract trouble, eat something you shouldn't, or otherwise worsen your situation. You take a –2 circumstance penalty to checks to Subsist for 1 week. You don't find any food at all; if you don't have any stored up, you're in danger of starving or [dying](content:conditions/dying) of thirst if you continue failing.\n\n**Sample Subsist Tasks**\n\n**Untrained** lush forest with calm weather or large city with plentiful resources\n\n**Trained** typical hillside or village\n\n**Expert** typical mountains or insular hamlet\n\n**Master** typical desert or city under siege\n\n**Legendary** barren wasteland or city of undead",
  },
})

export const AcrobaticsSection = Content.linkEntity(SkillsSection, Characteristic.Acrobatics)

export const UsingAcrobaticsSection = Content.defineSection('skills/using-acrobatics', {
  parent: AcrobaticsSection,
  content: {
    name: 'Using Acrobatics',
    description:
      'Acrobatics measures your ability to perform tasks requiring coordination and grace. When you use the [Escape](content:playing-the-game/escape) basic action, you can use your [Acrobatics](characteristic:skill/acrobatics) modifier instead of your unarmed attack modifier. You can also use it for the basic actions [Arrest a Fall](content:playing-the-game/arrest-a-fall) and [Grab an Edge](content:playing-the-game/grab-an-edge) instead of [Reflex](characteristic:reflex).\n\n**Acrobatics Untrained Actions**\n\n**Acrobatics Trained Actions**',
  },
})

export const BalanceSection = Content.defineSection('skills/balance', {
  parent: AcrobaticsSection,
  content: {
    name: 'Balance',
    description:
      '◆ *[Move](content:traits/move)*\n\n**Requirements** You are in a square that contains a [narrow surface](content:playing-the-game/narrow-surfaces), [uneven ground](content:playing-the-game/uneven-ground), or another similar feature.\n\nYou move across a narrow surface or uneven ground, attempting an [Acrobatics](characteristic:skill/acrobatics) check against its Balance DC. You are [off-guard](content:conditions/off-guard) while on a narrow surface or uneven ground.\n\n**Critical Success** You move up to your [Speed](characteristic:speed).\n\n**Success** You move up to your Speed, treating it as [difficult terrain](content:playing-the-game/difficult-terrain) (every 5 feet costs 10 feet of movement).\n\n**Failure** You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.\n\n**Critical Failure** You fall and your turn ends.\n\n**Sample Balance Tasks**\n\n**Untrained** tangled roots, uneven cobblestones\n\n**Trained** wooden beam\n\n**Expert** deep, loose gravel\n\n**Master** tightrope, smooth sheet of ice\n\n**Legendary** razor’s edge, chunks of floor falling in midair',
  },
})

export const TumbleThroughSection = Content.defineSection('skills/tumble-through', {
  parent: AcrobaticsSection,
  content: {
    name: 'Tumble Through',
    description:
      "◆ *[Move](content:traits/move)*\n\nYou [Stride](content:playing-the-game/stride) up to your [Speed](characteristic:speed). During this movement, you can try to move through the space of one enemy. Attempt an [Acrobatics](characteristic:skill/acrobatics) check against the enemy's [Reflex](characteristic:reflex) DC as soon as you try to enter its space. You can Tumble Through using [Climb](content:skills/climb), [Fly](content:playing-the-game/fly), [Swim](content:skills/swim), or another action instead of Stride in the appropriate environment.\n\n**Success** You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don't have enough Speed to move all the way through its space, you get the same effect as a failure.\n\n**Failure** Your movement ends, and you trigger reactions as if you had moved out of the square you started in.",
  },
})

export const ManeuverInFlightSection = Content.defineSection('skills/maneuver-in-flight', {
  parent: AcrobaticsSection,
  content: {
    name: 'Maneuver in Flight',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** You have a fly [Speed](characteristic:speed).\n\nYou try a difficult maneuver while flying. Attempt an [Acrobatics](characteristic:skill/acrobatics) check. The GM determines what maneuvers are possible, but they rarely allow you to move farther than your fly Speed.\n\n**Success** You succeed at the maneuver.\n\n**Failure** Your maneuver fails. The GM chooses if you simply can't move or if some other detrimental effect happens. The outcome should be appropriate for the maneuver you attempted (for instance, being blown off course if you were trying to fly against a strong wind).\n\n**Critical Failure** As failure, but the consequence is more dire.\n\n**Sample Maneuver in Flight Tasks**\n\n**Trained** steep ascent or descent\n\n**Expert** fly against the wind\n\n**Master** reverse direction\n\n**Legendary** fly through gale force winds",
  },
})

export const SqueezeSection = Content.defineSection('skills/squeeze', {
  parent: AcrobaticsSection,
  content: {
    name: 'Squeeze',
    description:
      "*[Exploration](content:traits/exploration), [Move](content:traits/move)*\n\nYou contort yourself to squeeze through a space so small you can barely fit through. This action is for exceptionally small spaces; many tight spaces are [difficult terrain](content:playing-the-game/difficult-terrain) that you can move through more quickly and without a check.\n\n**Critical Success** You squeeze through the tight space in 1 minute per 10 feet of squeezing.\n\n**Success** You squeeze through in 1 minute per 5 feet.\n\n**Critical Failure** You become stuck in the tight space. While you're stuck, you can spend 1 minute attempting another [Acrobatics](characteristic:skill/acrobatics) check at the same DC. Any result on that check other than a critical failure causes you to become unstuck.\n\n**Sample Squeeze Tasks**\n\n**Trained** space barely fitting your shoulders\n\n**Master** space barely fitting your head",
  },
})

export const ArcanaSection = Content.linkEntity(SkillsSection, Characteristic.Arcana)

export const UsingArcanaSection = Content.defineSection('skills/using-arcana', {
  parent: ArcanaSection,
  content: {
    name: 'Using Arcana',
    description:
      'Arcana measures how much you know about arcane magic and creatures.\n\n**Arcana Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about arcane theories; magic traditions; creatures of arcane significance (like [constructs](content:traits/construct), [beasts](content:traits/beast), and [elementals](content:traits/elemental)); and the Astral Plane, Elemental Planes, and the Netherworld.\n\n**Arcana Trained General Actions**\n\n- [Decipher Writing](content:skills/decipher-writing) about arcane theory.\n\n- [Identify Magic](content:skills/identify-magic), particularly magic of the [arcane](trait:spellcasting/arcane-spell-list) tradition.\n\n- [Learn a Spell](content:skills/learn-a-spell) from the [arcane](trait:spellcasting/arcane-spell-list) tradition.\n\n**Arcana Trained Actions**',
  },
})

export const BorrowAnArcaneSpellSection = Content.defineSection('skills/borrow-an-arcane-spell', {
  parent: ArcanaSection,
  content: {
    name: 'Borrow an Arcane Spell',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration)*\n\nIf you're an arcane spellcaster who prepares spells, you can attempt to prepare a spell from someone else's arcane spellbook, arcane witch familiar, or the like. The GM sets the DC for the check based on the spell's rank and rarity; it's typically a bit easier than [Learning the Spell](content:skills/learn-a-spell).\n\n**Success** You prepare the borrowed spell as part of your normal spell preparation.\n\n**Failure** You fail to prepare the spell, but the spell slot remains available for you to prepare a different spell. You can't try to borrow this spell again until the next time you prepare spells.",
  },
})

export const AthleticsSection = Content.linkEntity(SkillsSection, Characteristic.Athletics)

export const UsingAthleticsSection = Content.defineSection('skills/using-athletics', {
  parent: AthleticsSection,
  content: {
    name: 'Using Athletics',
    description:
      "Athletics allows you to perform deeds of physical prowess. Most [Athletics](characteristic:skill/athletics) actions let you move about the environment ([Climb](content:skills/climb), [High Jump](content:skills/high-jump), [Long Jump](content:skills/long-jump), [Swim](content:skills/swim)) or control your opponent's movement in combat ([Grapple](content:skills/grapple), [Reposition](content:skills/reposition), [Shove](content:skills/shove), [Trip](content:skills/trip), and [Disarm](content:skills/disarm)). [Escape](content:playing-the-game/escape): When you use the Escape basic action, you can use your Athletics modifier instead of your unarmed attack modifier.\n\n**Multiple Attacks with Athletics**\n\nSeveral Athletics actions have the [attack](content:traits/attack) trait, meaning that using them more than once in the same turn makes them less accurate. Since these actions use your free hand, you use the traits for your fist attack to determine the multiple attack penalty, so your fist's [agile](content:traits/agile) trait applies. Therefore, you take a –4 penalty if the action is your second attack of the turn, or a –8 if it's the third. Some weapon traits allow you to take these actions using a weapon, in which case the penalty might be –5 or –10 if the weapon doesn't have the agile trait. Some characters can get unarmed attacks without the agile trait as well. If it's unclear which penalty to use, the GM makes the call.\n\n**Athletics Untrained Actions**\n\n**Athletics Trained Actions**",
  },
})

export const ClimbSection = Content.defineSection('skills/climb', {
  parent: AthleticsSection,
  content: {
    name: 'Climb',
    description:
      "◆ *[Move](content:traits/move)*\n\n**Requirements** You have two hands free.\n\nYou attempt an [Athletics](characteristic:skill/athletics) check to move a maximum distance of 5 feet up, down, or across an [incline](content:playing-the-game/inclines). You're [off-guard](content:conditions/off-guard) while climbing unless you have a climb [Speed](characteristic:speed). The GM determines the DC based on the nature of the incline and environmental circumstances; you might get an automatic critical success on an incline that's trivial to climb. If your land Speed is 40 feet or higher, increase the maximum distance by 5 feet for every 20 feet of Speed above 20 feet.\n\n**Critical Success** You move along the incline, increasing the maximum distance by 5 feet.\n\n**Success** You move along the incline.\n\n**Critical Failure** You fall. If you began the climb on stable ground, you fall and land [prone](content:conditions/prone).\n\n**Sample Climb Tasks**\n\n**Untrained** ladder, steep slope, low-branched tree\n\n**Trained** rigging, rope, typical tree\n\n**Expert** wall with small handholds and footholds\n\n**Master** ceiling with handholds and footholds, rock wall\n\n**Legendary** smooth surface",
  },
})

export const ForceOpenSection = Content.defineSection('skills/force-open', {
  parent: AthleticsSection,
  content: {
    name: 'Force Open',
    description:
      "◆ *[Attack](content:traits/attack)*\n\nUsing your body, a lever, or some other tool, you attempt to forcefully open a door, window, container or heavy gate. With a high enough result, you can even smash through walls. Without a crowbar, prying something open takes a –2 item penalty to the [Athletics](characteristic:skill/athletics) check to Force Open.\n\n**Critical Success** You open the door, window, container, or gate and can avoid damaging it in the process.\n\n**Success** You break the door, window, container, or gate open, and it gains the [broken](content:conditions/broken) condition. If it's especially sturdy, the GM might have it take damage but not be broken.\n\n**Critical Failure** Your attempt jams the door, window, container, or gate shut, imposing a –2 circumstance penalty on future attempts to Force it Open.\n\n**Sample Force Open Tasks**\n\n**Untrained** fabric, flimsy glass\n\n**Trained** ice, sturdy glass\n\n**Expert** flimsy wooden door, wooden portcullis\n\n**Master** sturdy wooden door, iron portcullis, metal bar\n\n**Legendary** stone or iron door",
  },
})

export const GrappleSection = Content.defineSection('skills/grapple', {
  parent: AthleticsSection,
  content: {
    name: 'Grapple',
    description:
      "◆ *[Attack](content:traits/attack)*\n\n**Requirements** You have at least one free hand and your target is no more than one size larger than you.\n\nAttempt an [Athletics](characteristic:skill/athletics) check against the target's [Fortitude](characteristic:fortitude) DC. You can Grapple a target you already have [grabbed](content:conditions/grabbed) or [restrained](content:conditions/restrained) without having a hand free.\n\n**Critical Success** Your target is restrained until the end of your next turn unless you move or your target [Escapes](content:playing-the-game/escape).\n\n**Success** Your target is grabbed until the end of your next turn unless you move or your target Escapes.\n\n**Failure** You fail to grab your target. If you already had the target grabbed or restrained using a Grapple, those conditions on the target end.\n\n**Critical Failure** If you already had the target grabbed or restrained, it breaks free. Your target can either grab you, as if it succeeded at using the Grapple action against you, or force you to fall and land [prone](content:conditions/prone).",
  },
})

export const HighJumpSection = Content.defineSection('skills/high-jump', {
  parent: AthleticsSection,
  content: {
    name: 'High Jump',
    description:
      "◆◆\n\nYou [Stride](content:playing-the-game/stride), then attempt a DC 30 [Athletics](characteristic:skill/athletics) check to jump vertically. If you didn't Stride at least 10 feet, you automatically fail. This DC might be increased or decreased due to the situation, as determined by the GM.\n\n**Critical Success** You [Leap](content:playing-the-game/leap) up to 8 feet vertically and 10 feet horizontally.\n\n**Success** You Leap up to 5 feet vertically and 5 feet horizontally.\n\n**Failure** You Leap normally.\n\n**Critical Failure** You fall [prone](content:conditions/prone) in your space.",
  },
})

export const LongJumpSection = Content.defineSection('skills/long-jump', {
  parent: AthleticsSection,
  content: {
    name: 'Long Jump',
    description:
      "◆◆\n\nYou [Stride](content:playing-the-game/stride), then attempt a DC 15 [Athletics](characteristic:skill/athletics) check to make a long jump in the direction you were Striding. If you didn't Stride at least 10 feet, you automatically fail your check. The GM might increase or decrease this DC depending on the situation.\n\n**Success** You [Leap](content:playing-the-game/leap) up to a distance equal to your check result rounded down to the nearest 5 feet. You can't jump farther than your land [Speed](characteristic:speed).\n\n**Failure** You make a normal horizontal Leap.\n\n**Critical Failure** You make a normal horizontal Leap, then fall and land [prone](content:conditions/prone).",
  },
})

export const RepositionSection = Content.defineSection('skills/reposition', {
  parent: AthleticsSection,
  content: {
    name: 'Reposition',
    description:
      "◆ *[Attack](content:traits/attack)*\n\n**Requirements** You either have at least one hand free, or you're [grabbing](content:conditions/grabbed) or [restraining](content:conditions/restrained) the target. The target can't be more than one size larger than you.\n\nYou muscle a creature or object around. Attempt an [Athletics](characteristic:skill/athletics) check against the target's [Fortitude](characteristic:fortitude) DC.\n\n**Critical Success** You [move](content:playing-the-game/forced-movement) the creature up to 10 feet. It must remain within your reach during this movement, and you can't move it into or through obstacles.\n\n**Success** You move the target up to 5 feet. It must remain within your reach during this movement, and you can't move it into or through obstacles.\n\n**Critical Failure** The target can move you up to 5 feet as though it successfully Repositioned you.",
  },
})

export const ShoveSection = Content.defineSection('skills/shove', {
  parent: AthleticsSection,
  content: {
    name: 'Shove',
    description:
      "◆ *[Attack](content:traits/attack)*\n\n**Requirements** You have at least one hand free. The target can't be more than one size larger than you.\n\nYou push a creature away from you. Attempt an [Athletics](characteristic:skill/athletics) check against your target's [Fortitude](characteristic:fortitude) DC.\n\n**Critical Success** You [push](content:playing-the-game/forced-movement) your target up to 10 feet away from you. You can [Stride](content:playing-the-game/stride) after it, but you must move the same distance and in the same direction.\n\n**Success** You push your target back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.\n\n**Critical Failure** You lose your balance, fall, and land [prone](content:conditions/prone).",
  },
})

export const SwimSection = Content.defineSection('skills/swim', {
  parent: AthleticsSection,
  content: {
    name: 'Swim',
    description:
      "◆ *[Move](content:traits/move)*\n\nYou attempt an [Athletics](characteristic:skill/athletics) check to move a maximum distance of 10 feet through water. The GM determines the DC based on the turbulence or danger of the water; in most instances of calm water, you get an automatic critical success. If your land [Speed](characteristic:speed) is 40 feet or higher, increase the maximum possible distance by 5 feet for every 20 feet of Speed above 20 feet.\n\nIf you end your turn in water and haven't succeeded at a Swim action that turn, you sink 10 feet or get moved by the current, as determined by the GM. This doesn't apply if your last action on your turn was to enter the water.\n\n**Critical Success** You move through the water, increasing the maximum distance by 5 feet.\n\n**Success** You move through the water.\n\n**Critical Failure** You make no progress. If you're [holding your breath](content:playing-the-game/drowning-and-suffocating), you lose 1 round of air.\n\n**Sample Swim Tasks**\n\n**Untrained** lake or other still water\n\n**Trained** flowing water, like a river\n\n**Expert** swiftly flowing river\n\n**Master** stormy sea\n\n**Legendary** maelstrom, waterfall",
  },
})

export const TripSection = Content.defineSection('skills/trip', {
  parent: AthleticsSection,
  content: {
    name: 'Trip',
    description:
      "◆ *[Attack](content:traits/attack)*\n\n**Requirements** You have at least one hand free. Your target can't be more than one size larger than you.\n\nYou try to knock a creature to the ground. Attempt an [Athletics](characteristic:skill/athletics) check against the target's [Reflex](characteristic:reflex) DC.\n\n**Critical Success** The target falls, lands [prone](content:conditions/prone), and takes 1d6 bludgeoning damage.\n\n**Success** The target falls and lands prone.\n\n**Critical Failure** You lose your balance, fall, and land prone.",
  },
})

export const DisarmSection = Content.defineSection('skills/disarm', {
  parent: AthleticsSection,
  content: {
    name: 'Disarm',
    description:
      "◆ *[Attack](content:traits/attack)*\n\n**Requirements** You have at least one hand free. The target can't be more than one size larger than you.\n\nYou try to knock an item out of a creature's grasp. Attempt an [Athletics](characteristic:skill/athletics) check against the target's [Reflex](characteristic:reflex) DC.\n\n**Critical Success** You knock the item out of the target's grasp. It falls to the ground in the target's space.\n\n**Success** You weaken your target's grasp on the item. Further attempts to Disarm the target of that item gain a +2 circumstance bonus, and the target takes a –2 circumstance penalty to attacks with the item or other checks requiring a firm grasp on the item. The creature can end the effect by Interacting to change its grip on the item; otherwise, it lasts as long as the creature holds the item.\n\n**Critical Failure** You lose your balance and become [off-guard](content:conditions/off-guard) until the start of your next turn.",
  },
})

export const CraftingSection = Content.linkEntity(SkillsSection, Characteristic.Crafting)

export const UsingCraftingSection = Content.defineSection('skills/using-crafting', {
  parent: CraftingSection,
  content: {
    name: 'Using Crafting',
    description:
      "You can use this skill to create and repair items.\n\n**Crafting Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about alchemical reactions, the value of items, engineering, unusual materials, and alchemical or mechanical creatures. The GM determines which creatures this applies to, but it usually includes [constructs](content:traits/construct).\n\n**Crafting Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by crafting goods for the market.\n\n**Consumables and Ammunition**\n\nYou can [Craft](content:skills/craft) items with the [consumable](content:traits/consumable) trait in batches, making up to four of the same item at once with a single check. This requires you to include the raw materials for all the items in the batch at the start, and you must complete the batch all at once. You also Craft non-magical ammunition in batches, using the quantity listed in the Ranged Weapons table (typically 10).\n\n**Getting Formulas**\n\nYou can gain access to the formulas for all common items in Chapter 6: Equipment by purchasing a basic crafter's book (page 287). See [Formulas](content:equipment/formulas) for information on how to acquire other formulas.\n\n**Crafting Untrained Actions**\n\n**Crafting Trained Actions**",
  },
})

export const RepairSection = Content.defineSection('skills/repair', {
  parent: CraftingSection,
  content: {
    name: 'Repair',
    description:
      "*[Exploration](content:traits/exploration), [Manipulate](content:traits/manipulate)*\n\n**Requirements** You are holding or wearing a repair toolkit.\n\nYou spend 10 minutes attempting to fix a damaged item, placing the item on a stable surface and using the repair toolkit with both hands. Roll a [Crafting](characteristic:skill/crafting) check. The GM sets the DC, but it's usually about the same DC to Repair a given item as it is to [Craft](content:skills/craft) it in the first place. You can't Repair a destroyed item.\n\n**Critical Success** You restore 10 [Hit Points](characteristic:hit-points) to the item, plus an additional 10 Hit Points per proficiency rank you have in Crafting (a total of 20 HP if you're trained, 30 HP if you're an expert, 40 HP if you're a master, or 50 HP if you're legendary).\n\n**Success** You restore 5 Hit Points to the item, plus an additional 5 per proficiency rank you have in Crafting (for a total of 10 HP if you are trained, 15 HP if you're an expert, 20 HP if you're a master, or 25 HP if you're legendary).\n\n**Critical Failure** You deal 2d6 damage to the item. Apply the item's Hardness to this damage.",
  },
})

export const CraftSection = Content.defineSection('skills/craft', {
  parent: CraftingSection,
  content: {
    name: 'Craft',
    description:
      "*[Downtime](content:traits/downtime), [Manipulate](content:traits/manipulate)*\n\nYou can make an item from raw materials. You need the [Alchemical Crafting](trait:feat/alchemical-crafting) skill feat to create alchemical items and the [Magical Crafting](trait:feat/magical-crafting) skill feat to create magic items.\n\nTo Craft an item, you must meet the following requirements:\n\n- The item is your level or lower. An item that doesn't list a level is level 0. If the item is 9th level or higher, you must be a master in [Crafting](characteristic:skill/crafting), and if it's 17th or higher, you must be legendary.\n\n- The item must be [common](content:ancestries-and-backgrounds/ancestries-and-backgrounds/languages), or you must otherwise have access to it.\n\n- You have an appropriate set of tools and, in many cases, a workshop. For example, you need access to a smithy to forge a metal shield, or an alchemist's lab to produce alchemical items.\n\n- You must supply raw materials worth at least half the item's Price. You always expend at least that amount of raw materials when you Craft successfully. If you're in a settlement, you can usually spend currency to get the amount of raw materials you need, except in the case of rarer precious materials.\n\nYou attempt a Crafting check after you spend 2 days of work setting up, or 1 day if you have the item's formula. The GM determines the DC to Craft the item based on its level, rarity, and other circumstances.\n\nIf your attempt to create the item is successful, you expend the raw materials you supplied. You can pay the remaining portion of the item's Price in materials to complete the item immediately, or you can spend additional downtime days working on it. For each additional day you spend, reduce the value of the materials you need to expend to complete the item. This amount is determined using the Income Earned table, based on your proficiency rank in Crafting and using your own level instead of a task level.\n\nAfter any of these downtime days, you can complete the item by spending the remaining portion of its Price in materials. If the downtime days you spend are interrupted, you can return to finish the item later, continuing where you left off. An example of Crafting appears in the sidebar below.\n\n**Critical Success** Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level + 1 and your proficiency rank in Crafting.\n\n**Success** Your attempt is successful. Each additional day spent Crafting reduces the materials needed to complete the item by an amount based on your level and your proficiency rank.\n\n**Failure** You fail to complete the item. You can salvage the raw materials you supplied for their full value. If you want to try again, you must start over.\n\n**Critical Failure** You fail to complete the item. You ruin 10% of the raw materials you supplied, but you can salvage the rest. If you want to try again, you must start over.\n\n## Income Earned\n\n| **Task Level** | **DC** | **Failed** | **Trained** | **Expert** | **Master** | **Legendary** |\n|---|---|---|---|---|---|---|\n| 0 | 14 | 1 cp | 5 cp | 5 cp | 5 cp | 5 cp |\n| 1 | 15 | 2 cp | 2 sp | 2 sp | 2 sp | 2 sp |\n| 2 | 16 | 4 cp | 3 sp | 3 sp | 3 sp | 3 sp |\n| 3 | 18 | 8 cp | 5 sp | 5 sp | 5 sp | 5 sp |\n| 4 | 19 | 1 sp | 7 sp | 8 sp | 8 sp | 8 sp |\n| 5 | 20 | 2 sp | 9 sp | 1 gp | 1 gp | 1 gp |\n| 6 | 22 | 3 sp | 1 gp, 5 sp | 2 gp | 2 gp | 2 gp |\n| 7 | 23 | 4 sp | 2 gp | 2 gp, 5 sp | 2 gp, 5 sp | 2 gp, 5 sp |\n| 8 | 24 | 5 sp | 2 gp, 5 sp | 3 gp | 3 gp | 3 gp |\n| 9 | 26 | 6 sp | 3 gp | 4 gp | 4 gp | 4 gp |\n| 10 | 27 | 7 sp | 4 gp | 5 gp | 6 gp | 6 gp |\n| 11 | 28 | 8 sp | 5 gp | 6 gp | 8 gp | 8 gp |\n| 12 | 30 | 9 sp | 6 gp | 8 gp | 10 gp | 10 gp |\n| 13 | 31 | 1 gp | 7 gp | 10 gp | 15 gp | 15 gp |\n| 14 | 32 | 1 gp, 5 sp | 8 gp | 15 gp | 20 gp | 20 gp |\n| 15 | 34 | 2 gp | 10 gp | 20 gp | 28 gp | 28 gp |\n| 16 | 35 | 2 gp, 5 sp | 13 gp | 25 gp | 36 gp | 40 gp |\n| 17 | 36 | 3 gp | 15 gp | 30 gp | 45 gp | 55 gp |\n| 18 | 38 | 4 gp | 20 gp | 45 gp | 70 gp | 90 gp |\n| 19 | 39 | 6 gp | 30 gp | 60 gp | 100 gp | 130 gp |\n| 20 | 40 | 8 gp | 40 gp | 75 gp | 150 gp | 200 gp |\n| 20 (critical success) | — | — | 50 gp | 90 gp | 175 gp | 300 gp |",
  },
})

export const IdentifyAlchemySection = Content.defineSection('skills/identify-alchemy', {
  parent: CraftingSection,
  content: {
    name: 'Identify Alchemy',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Secret](content:traits/secret)*\n\n**Requirements** You are holding or wearing an alchemist's toolkit.\n\nYou can identify the nature of an [alchemical](content:traits/alchemical) item with 10 minutes of testing using your alchemist's toolkit. If your attempt is interrupted in any way, you must start over.\n\n**Success** You identify the item and the means of activating it.\n\n**Failure** You fail to identify the item but can try again.\n\n**Critical Failure** You misidentify the item as another item of the GM's choice.",
  },
})

export const DeceptionSection = Content.linkEntity(SkillsSection, Characteristic.Deception)

export const UsingDeceptionSection = Content.defineSection('skills/using-deception', {
  parent: DeceptionSection,
  content: {
    name: 'Using Deception',
    description:
      "You can trick and mislead others using disguises, lies, and other forms of subterfuge. Deception often has a drawback if you get found out, and it's often best to be out of town by the time this happens.\n\n**Deception Untrained Actions**\n\n**Deception Trained Actions**",
  },
})

export const CreateADiversionSection = Content.defineSection('skills/create-a-diversion', {
  parent: DeceptionSection,
  content: {
    name: 'Create a Diversion',
    description:
      "◆ *[Mental](content:traits/mental)*\n\nWith a gesture, a trick, or some distracting words, you can create a diversion that draws creatures' attention elsewhere. If you use a gesture or trick, this action gains the [manipulate](content:traits/manipulate) trait. If you use distracting words, it gains the [auditory](content:traits/auditory) and [linguistic](content:traits/linguistic) traits.\n\nAttempt a single [Deception](characteristic:skill/deception) check and compare it to the [Perception](characteristic:perception) DCs of the creatures whose attention you're trying to divert. Whether or not you succeed, creatures you attempt to divert gain a +4 circumstance bonus to their Perception DCs against your attempts to Create a Diversion for 1 minute.\n\n**Success** You become [hidden](content:conditions/hidden) to each creature whose Perception DC is less than or equal to your result. (The hidden condition allows you to [Sneak](content:skills/sneak) away) This lasts until the end of your turn or until you do anything except [Step](content:playing-the-game/step) or use the [Stealth](characteristic:skill/stealth) skill to [Hide](content:skills/hide) or Sneak. If you [Strike](content:playing-the-game/strike) a creature, the creature remains [off-guard](content:conditions/off-guard) against that attack, and you then become [observed](content:conditions/observed). If you do anything else, you become observed just before you act unless the GM determines otherwise.\n\n**Failure** You don't divert the attention of any creatures whose Perception DC exceeds your result, and those creatures are aware you were trying to trick them.",
  },
})

export const ImpersonateSection = Content.defineSection('skills/impersonate', {
  parent: DeceptionSection,
  content: {
    name: 'Impersonate',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Manipulate](content:traits/manipulate), [Secret](content:traits/secret)*\n\nYou create a disguise to pass yourself off as someone or something you are not. Assembling a convincing disguise takes 10 minutes and requires a disguise kit, but a simpler, quicker disguise might do the job if you're not trying to imitate a specific individual, at the GM's discretion.\n\nIn most cases, creatures have a chance to detect your deception only if they use the [Seek](content:playing-the-game/seek) action to attempt [Perception](characteristic:perception) checks against your [Deception](characteristic:skill/deception) DC. If you attempt to directly interact with someone while disguised, the GM rolls a [secret](content:traits/secret) Deception check for you against that creature's Perception DC instead.\n\nIf you're disguised as a specific individual, the GM might give creatures you interact with a circumstance bonus based on how well they know the person you're imitating, or the GM might roll a secret Deception check even if you aren't directly interacting with others.\n\n**Success** You trick the creature into thinking you're the person you're disguised as. You might have to attempt a new check if your behavior changes.\n\n**Failure** The creature can tell you're not who you claim to be.\n\n**Critical Failure** The creature can tell you're not who you claim to be, and it recognizes you if it would know you without a disguise.",
  },
})

export const LieSection = Content.defineSection('skills/lie', {
  parent: DeceptionSection,
  content: {
    name: 'Lie',
    description:
      "*[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Linguistic](content:traits/linguistic), [Mental](content:traits/mental), [Secret](content:traits/secret)*\n\nYou try to fool someone with an untruth. Doing so takes at least 1 round, or longer if the lie is elaborate. You roll a single [Deception](characteristic:skill/deception) check and compare it against the [Perception](characteristic:perception) DC of every creature you are trying to fool. The GM might give them a circumstance bonus based on the situation and the nature of the lie you are trying to tell. Elaborate or highly unbelievable lies are much harder to get a creature to believe than simpler and more believable lies, and some lies are so big that it's impossible to get anyone to believe them.\n\nAt the GM's discretion, if a creature initially believes your lie, it might attempt a Perception check later to [Sense Motive](content:playing-the-game/sense-motive) against your Deception DC to realize it's a lie. This usually happens if the creature discovers enough evidence to counter your statements.\n\n**Success** The target believes your lie.\n\n**Failure** The target doesn't believe your lie and gains a +4 circumstance bonus against your attempts to Lie for the duration of your conversation. The target is also more likely to be suspicious of you in the future.",
  },
})

export const FeintSection = Content.defineSection('skills/feint', {
  parent: DeceptionSection,
  content: {
    name: 'Feint',
    description:
      "◆ *[Mental](content:traits/mental)*\n\n**Requirements** You are within melee reach of the target you attempt to Feint.\n\nWith a misleading flourish, you leave an opponent unprepared for your real attack. Attempt a [Deception](characteristic:skill/deception) check against your target's [Perception](characteristic:perception) DC.\n\n**Critical Success** You throw your enemy's defenses against you entirely off. The target is [off-guard](content:conditions/off-guard) against melee attacks that you attempt against it until the end of your next turn.\n\n**Success** Your foe is fooled, but only momentarily. The target is off-guard against the next melee attack that you attempt against it before the end of your current turn.\n\n**Critical Failure** Your feint backfires. You are off-guard against melee attacks the target attempts against you until the end of your next turn.",
  },
})

export const DiplomacySection = Content.linkEntity(SkillsSection, Characteristic.Diplomacy)

export const UsingDiplomacySection = Content.defineSection('skills/using-diplomacy', {
  parent: DiplomacySection,
  content: {
    name: 'Using Diplomacy',
    description:
      'You influence others through negotiation and flattery, or find out information through friendly chats.\n\n**Diplomacy Untrained Actions**',
  },
})

export const GatherInformationSection = Content.defineSection('skills/gather-information', {
  parent: DiplomacySection,
  content: {
    name: 'Gather Information',
    description:
      '*[Exploration](content:traits/exploration), [Secret](content:traits/secret)*\n\nYou canvass local markets, taverns, and gathering places in an attempt to learn about a specific individual or topic. The GM determines the DC of the check and the amount of time it takes (typically 2 hours, but sometimes more), along with any benefit you might be able to gain by spending coin on bribes, drinks, or gifts.\n\n**Success** You collect information about the individual or topic. The GM determines the specifics.\n\n**Critical Failure** You collect incorrect information about the individual or topic.\n\n**Sample Gather Information Tasks**\n\n**Untrained** talk of the town\n\n**Trained** common rumor\n\n**Expert** obscure rumor, poorly guarded secret\n\n**Master** well-guarded or esoteric information\n\n**Legendary** information known only to an incredibly select few, or only to extraordinary beings',
  },
})

export const MakeAnImpressionSection = Content.defineSection('skills/make-an-impression', {
  parent: DiplomacySection,
  content: {
    name: 'Make an Impression',
    description:
      "*[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Linguistic](content:traits/linguistic), [Mental](content:traits/mental)*\n\nWith at least 1 minute of conversation, during which you engage in charismatic overtures, flattery, and other acts of goodwill, you seek to make a good impression on someone to make them temporarily agreeable. At the end of the conversation, attempt a [Diplomacy](characteristic:skill/diplomacy) check against the [Will DC](characteristic:will) of one target. You can instead choose up to five targets if you take a –2 penalty. The GM might add other bonuses or penalties based on the situation. Any impression you make lasts for only the current social interaction unless the GM decides otherwise. See the Changing Attitudes sidebar for a summary of the attitude conditions.\n\n**Critical Success** The target's attitude toward you improves by two steps.\n\n**Success** The target's attitude toward you improves by one step.\n\n**Critical Failure** The target's attitude toward you decreases by one step.",
  },
})

export const RequestSection = Content.defineSection('skills/request', {
  parent: DiplomacySection,
  content: {
    name: 'Request',
    description:
      "◆ *[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Linguistic](content:traits/linguistic), [Mental](content:traits/mental)*\n\nYou can make a request of a creature that's friendly or helpful to you. You must couch the request in terms that the target would accept given their current attitude toward you. The GM sets the DC based on the difficulty of the request. Some requests are unsavory or impossible, and even a helpful NPC would never agree to them.\n\n**Critical Success** The target agrees to your request without qualifications.\n\n**Success** The target agrees to your request, but they might demand added provisions or alterations to the request.\n\n**Failure** The target refuses the request, though they might propose an alternative that is less extreme.\n\n**Critical Failure** Not only does the target refuse the request, but their attitude toward you decreases by one step due to the temerity of the request.",
  },
})

export const IntimidationSection = Content.linkEntity(SkillsSection, Characteristic.Intimidation)

export const UsingIntimidationSection = Content.defineSection('skills/using-intimidation', {
  parent: IntimidationSection,
  content: {
    name: 'Using Intimidation',
    description:
      'You bend others to your will using threats. Unlike [Deception](characteristic:skill/deception) or [Diplomacy](characteristic:skill/diplomacy), [Intimidation](characteristic:skill/intimidation) is typically a blunt instrument with little room for nuance or care.\n\n**Intimidation Untrained Actions**',
  },
})

export const CoerceSection = Content.defineSection('skills/coerce', {
  parent: IntimidationSection,
  content: {
    name: 'Coerce',
    description:
      "*[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Emotion](content:traits/emotion), [Exploration](content:traits/exploration), [Linguistic](content:traits/linguistic), [Mental](content:traits/mental)*\n\nWith threats either veiled or overt, you attempt to bully a creature into doing what you want. You must spend at least 1 minute of conversation with the creature. At the end of the conversation, attempt an [Intimidation](characteristic:skill/intimidation) check against the target's [Will DC](characteristic:will), modified by any circumstances the GM determines. (The attitudes referenced in the effects below are summarized in the Changing Attitudes sidebar and described in full in the [Conditions Appendix](content:conditions).)\n\n**Critical Success** The target gives you the information you seek or agrees to follow your directives so long as they aren't likely to harm the target in any way. The target continues to comply for an amount of time determined by the GM but not exceeding 1 day, at which point the target becomes [unfriendly](content:conditions/unfriendly) (if it wasn't already unfriendly or [hostile](content:conditions/hostile)). However, the target is too scared of you to retaliate—at least in the short term.\n\n**Success** As critical success, but once the target becomes unfriendly, they might decide to act against you—for example, by reporting you to the authorities or assisting your enemies.\n\n**Failure** The target doesn't do what you say, and if they were not already unfriendly or hostile, they become unfriendly.\n\n**Critical Failure** The target refuses to comply, becomes hostile if they weren't already, and is temporarily immune to your Coercion for at least 1 week.",
  },
})

export const DemoralizeSection = Content.defineSection('skills/demoralize', {
  parent: IntimidationSection,
  content: {
    name: 'Demoralize',
    description:
      "◆ *[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate), [Emotion](content:traits/emotion), [Fear](content:traits/fear), [Mental](content:traits/mental)*\n\nWith a sudden shout, a well-timed taunt, or a cutting put-down, you can shake an enemy's resolve. Choose a creature within 30 feet of you who you're aware of. Attempt an [Intimidation](characteristic:skill/intimidation) check against that target's [Will DC](characteristic:will). If the target doesn't understand the language you are speaking, or you're not speaking a language, you take a –4 circumstance penalty to the check. Regardless of your result, the target is temporarily immune to your attempts to Demoralize it for 10 minutes.\n\n**Critical Success** The target becomes [frightened 2](content:conditions/frightened).\n\n**Success** The target becomes frightened 1.",
  },
})

export const LoreSection = Content.defineSection('skills/lore', {
  parent: SkillsSection,
  content: {
    name: 'Lore',
    description:
      "You have specialized information on a narrow topic. Lore features many subcategories. You might have Military Lore, Sailing Lore, Vampire Lore, or any similar subcategory of the skill. Each subcategory counts as its own skill, so applying a skill increase to Planar Lore wouldn't increase your proficiency with Sailing Lore, for example.\n\nMost backgrounds make you trained in a specific subcategory of the Lore skill. The GM determines what other subcategories they'll allow as Lore skills, though these categories are always less broad than any of the other skills that allow you to [Recall Knowledge](content:skills/recall-knowledge), and they should never be able to take the place of another skill's Recall Knowledge action. For instance, you couldn't choose Magic Lore to recall the breadth of knowledge about magic covered by [Arcana](characteristic:skill/arcana), [Nature](characteristic:skill/nature), [Occultism](characteristic:skill/occultism), and [Religion](characteristic:skill/religion), or choose Adventuring Lore to give you all the information an adventurer needs, or choose Planar Lore to gain all the information spread across various skills and subcategories such as Heaven Lore.\n\nIf you're making a check and multiple subcategories of Lore could apply, or a non-Lore skill could apply, you can use whichever skill you prefer. If there's any doubt whether a Lore skill applies to a specific topic or action, the GM decides whether it can be used or not. Even if you’re untrained in Lore, you can use it to Recall Knowledge.\n\n**Lore Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about the subject of the Lore skill's subcategory.\n\n**Lore Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by using your knowledge to practice a trade.\n\n**Common Lore Subcategories**\n\nYou can learn any Lore skill your GM gives you permission to take. The following list covers a wide variety of common Lore topics appropriate for player characters in most campaigns. Backgrounds often grant you a Lore skill from this list.\n\n- Academia Lore\n\n- Accounting Lore\n\n- Architecture Lore\n\n- Art Lore\n\n- Astronomy Lore\n\n- Carpentry Lore\n\n- Circus Lore\n\n- Driving Lore\n\n- Engineering Lore\n\n- Farming Lore\n\n- Fishing Lore\n\n- Fortune-Telling Lore\n\n- Games Lore\n\n- Genealogy Lore\n\n- Gladiatorial Lore\n\n- Guild Lore\n\n- Heraldry Lore\n\n- Herbalism Lore\n\n- Hunting Lore\n\n- Labor Lore\n\n- Legal Lore\n\n- Library Lore\n\n- Lore about a specific deity (Abadar Lore, Iomedae Lore)\n\n- Lore about a specific creature or narrow category of creatures (Demon Lore, Giant Lore, Vampire Lore)\n\n- Lore about a specific plane other than the Universe, or the plane in which the game is set if not the Universe (Astral Plane Lore, Heaven Lore, Outer Rifts Lore)\n\n- Lore about a specific public organization (Hellknights Lore, Pathfinder [Society](characteristic:skill/society) Lore)\n\n- Lore about a specific settlement (Absalom Lore, Magnimar Lore)\n\n- Lore about a specific terrain (Mountain Lore, River Lore)\n\n- Lore about a type of food or drink (Alcohol Lore, Baking Lore, Butchering Lore, Cooking Lore, Tea Lore)\n\n- Mercantile Lore\n\n- Midwifery Lore\n\n- Milling Lore\n\n- Mining Lore\n\n- Piloting Lore\n\n- Sailing Lore\n\n- Scouting Lore\n\n- Scribing Lore\n\n- Stabling Lore\n\n- Tanning Lore\n\n- Theater Lore\n\n- Underworld Lore\n\n- Warfare Lore",
  },
})

export const AcademiaLoreSection = Content.linkEntity(LoreSection, Lore.AcademiaLore)

export const AlcoholLoreSection = Content.linkEntity(LoreSection, Lore.AlcoholLore)

export const ArtLoreSection = Content.linkEntity(LoreSection, Lore.ArtLore)

export const CircusLoreSection = Content.linkEntity(LoreSection, Lore.CircusLore)

export const CookingLoreSection = Content.linkEntity(LoreSection, Lore.CookingLore)

export const EngineeringLoreSection = Content.linkEntity(LoreSection, Lore.EngineeringLore)

export const FarmingLoreSection = Content.linkEntity(LoreSection, Lore.FarmingLore)

export const FortuneTellingLoreSection = Content.linkEntity(LoreSection, Lore.FortuneTellingLore)

export const GamesLoreSection = Content.linkEntity(LoreSection, Lore.GamesLore)

export const GenealogyLoreSection = Content.linkEntity(LoreSection, Lore.GenealogyLore)

export const GladiatorialLoreSection = Content.linkEntity(LoreSection, Lore.GladiatorialLore)

export const GuildLoreSection = Content.linkEntity(LoreSection, Lore.GuildLore)

export const HeraldryLoreSection = Content.linkEntity(LoreSection, Lore.HeraldryLore)

export const HerbalismLoreSection = Content.linkEntity(LoreSection, Lore.HerbalismLore)

export const LaborLoreSection = Content.linkEntity(LoreSection, Lore.LaborLore)

export const LegalLoreSection = Content.linkEntity(LoreSection, Lore.LegalLore)

export const MercantileLoreSection = Content.linkEntity(LoreSection, Lore.MercantileLore)

export const MiningLoreSection = Content.linkEntity(LoreSection, Lore.MiningLore)

export const SailingLoreSection = Content.linkEntity(LoreSection, Lore.SailingLore)

export const ScribingLoreSection = Content.linkEntity(LoreSection, Lore.ScribingLore)

export const TanningLoreSection = Content.linkEntity(LoreSection, Lore.TanningLore)

export const TheaterLoreSection = Content.linkEntity(LoreSection, Lore.TheaterLore)

export const UnderworldLoreSection = Content.linkEntity(LoreSection, Lore.UnderworldLore)

export const WarfareLoreSection = Content.linkEntity(LoreSection, Lore.WarfareLore)

export const TerrainLoreSection = Content.linkEntity(LoreSection, Lore.TerrainLore)

export const DeityLoreSection = Content.linkEntity(LoreSection, Lore.DeityLore)

export const CityLoreSection = Content.linkEntity(LoreSection, Lore.CityLore)

export const MedicineSection = Content.linkEntity(SkillsSection, Characteristic.Medicine)

export const UsingMedicineSection = Content.defineSection('skills/using-medicine', {
  parent: MedicineSection,
  content: {
    name: 'Using Medicine',
    description:
      'You can patch up wounds and help people recover from diseases and poisons. [Treat Wounds](content:skills/treat-wounds) is especially useful, allowing your adventuring party to heal up between fights. It can be made more efficient with skill feats like [Continual Recovery](trait:feat/continual-recovery) and [Ward Medic](trait:feat/ward-medic).\n\n**Medicine Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about diseases, injuries, poisons, and other ailments. You can use this to perform forensic examinations if you spend 10 minutes (or more, as determined by the GM) checking for evidence such as wound patterns. This is most useful when determining how a body was injured or killed.\n\n**Medicine Untrained Actions**\n\n**Medicine Trained Actions**',
  },
})

export const AdministerFirstAidSection = Content.defineSection('skills/administer-first-aid', {
  parent: MedicineSection,
  content: {
    name: 'Administer First Aid',
    description:
      "◆◆ *[Manipulate](content:traits/manipulate)*\n\n**Requirements** You're wearing or holding a healer's toolkit.\n\nYou perform first aid on an adjacent creature that is [dying](content:conditions/dying) or [bleeding](content:conditions/persistent-damage). If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.\n\n- **Stabilize** Attempt a [Medicine](characteristic:skill/medicine) check on a creature that has 0 [Hit Points](characteristic:hit-points) and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).\n\n- **Stop Bleeding** Attempt a Medicine check on a creature that is taking persistent bleed damage. The DC is usually the DC of the effect that caused the bleed.\n\n**Success** If you're trying to stabilize, the target loses the dying condition (but remains [unconscious](content:conditions/unconscious)). If you're trying to stop bleeding, the target benefits from an [assisted recovery](content:conditions/persistent-damage) with the lowered DC for particularly appropriate help.\n\n**Critical Failure** If you were trying to stabilize, the target's dying value increases by 1. If you were trying to stop bleeding, the target immediately takes an amount of damage equal to its persistent bleed damage.",
  },
})

export const TreatDiseaseSection = Content.defineSection('skills/treat-disease', {
  parent: MedicineSection,
  content: {
    name: 'Treat Disease',
    description:
      "*[Downtime](content:traits/downtime), [Manipulate](content:traits/manipulate)*\n\n**Requirements** You're wearing or holding a healer's toolkit.\n\nYou spend at least 8 hours caring for a diseased creature. Attempt a [Medicine](characteristic:skill/medicine) check against the [disease's](content:traits/disease) DC. After you attempt to Treat a Disease for a creature, you can't try again until after that creature's next save against the disease.\n\n**Critical Success** You grant the creature a +4 circumstance bonus to its next saving throw against the disease.\n\n**Success** You grant the creature a +2 circumstance bonus to its next saving throw against the disease.\n\n**Critical Failure** Your efforts cause the creature to take a –2 circumstance penalty to its next save against the disease.",
  },
})

export const TreatPoisonSection = Content.defineSection('skills/treat-poison', {
  parent: MedicineSection,
  content: {
    name: 'Treat Poison',
    description:
      "◆ *[Manipulate](content:traits/manipulate)*\n\n**Requirements** You're wearing or holding a healer's toolkit.\n\nYou treat a patient to prevent the spread of [poison](content:traits/poison). Attempt a [Medicine](characteristic:skill/medicine) check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.\n\n**Critical Success** You grant the creature a +4 circumstance bonus to its next saving throw against the poison.\n\n**Success** You grant the creature a +2 circumstance bonus to its next saving throw against the poison.\n\n**Critical Failure** Your efforts cause the creature to take a –2 circumstance penalty to its next save against the poison.",
  },
})

export const TreatWoundsSection = Content.defineSection('skills/treat-wounds', {
  parent: MedicineSection,
  content: {
    name: 'Treat Wounds',
    description:
      "*[Exploration](content:traits/exploration), [Healing](content:traits/healing), [Manipulate](content:traits/manipulate)*\n\n**Requirements** You're wearing or holding a healer's toolkit.\n\nYou spend 10 minutes treating one injured living creature (targeting yourself, if you so choose). The target is then temporarily immune to Treat Wounds actions for 1 hour, but this interval overlaps with the time you spent treating (so a patient can be treated once per hour, not once per 70 minutes).\n\nThe [Medicine](characteristic:skill/medicine) check DC is usually 15, though the GM might adjust it based on the circumstances, such as treating a patient outside in a storm, or treating magically cursed wounds. If you're an expert in Medicine, you can instead attempt a DC 20 check to increase the [Hit Points](characteristic:hit-points) regained by 10; if you're a master of Medicine, you can instead attempt a DC 30 check to increase the Hit Points regained by 30; and if you're legendary, you can instead attempt a DC 40 check to increase the Hit Points regained by 50. The damage dealt on a critical failure remains the same.\n\nIf you succeed at your check, you can continue treating the target to grant additional healing. If you treat it for a total of 1 hour, double the Hit Points it regains from Treat Wounds.\n\nThe result of your Medicine check determines how many Hit Points the target regains.\n\n## Treat Wounds\n\n| **Proficiency** | **DC** | **Success Healing** | **Critical Healing** |\n|---|---|---|---|\n| Trained | 15 | 2d8 | 4d8 |\n| Expert* | 20 | 2d8+10 | 4d8+10 |\n| Master* | 30 | 2d8+30 | 4d8+30 |\n| Legendary* | 40 | 2d8+50 | 4d8+50 |\n\n* Rolling against a higher DC is optional.\n\n**Critical Success** The target regains 4d8 Hit Points and loses the [wounded](content:conditions/wounded) condition.\n\n**Success** The target regains 2d8 Hit Points, and loses the wounded condition.\n\n**Critical Failure** The target takes 1d8 damage.",
  },
})

export const NatureSection = Content.linkEntity(SkillsSection, Characteristic.Nature)

export const UsingNatureSection = Content.defineSection('skills/using-nature', {
  parent: NatureSection,
  content: {
    name: 'Using Nature',
    description:
      'You know about the natural world, and you command and train animals and magical beasts.\n\n**Nature Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about fauna, flora, geography, weather, the environment, creatures of natural origin (like [animals](content:traits/animal), [beasts](content:traits/beast), [fey](content:traits/fey), and [plants](content:traits/plant)), the First World, and the Elemental Planes.\n\n**Nature Trained General Actions**\n\n- [Identify Magic](content:skills/identify-magic), particularly magic of the [primal](trait:spellcasting/primal-spell-list) tradition.\n\n- [Learn a Spell](content:skills/learn-a-spell) from the [primal](trait:spellcasting/primal-spell-list) tradition.\n\n**Nature Untrained Actions**',
  },
})

export const CommandAnAnimalSection = Content.defineSection('skills/command-an-animal', {
  parent: NatureSection,
  content: {
    name: 'Command an Animal',
    description:
      "◆ *[Auditory](content:traits/auditory), [Concentrate](content:traits/concentrate)*\n\nYou issue an order to an animal. Attempt a [Nature](characteristic:skill/nature) check against the animal's [Will DC](characteristic:will). The GM might adjust the DC if the animal has a good attitude toward you, you suggest a course of action it was predisposed toward, or you offer it a treat.\n\nYou automatically fail if the animal is [hostile](content:conditions/hostile) or [unfriendly](content:conditions/unfriendly) to you. If the animal is [helpful](content:conditions/helpful) to you, increase your degree of success by one step. You might be able to Command an Animal more easily with a feat like [Ride](trait:feat/ride). Most animals know the [Drop Prone](content:playing-the-game/drop-prone), [Leap](content:playing-the-game/leap), [Seek](content:playing-the-game/seek), [Stand](content:playing-the-game/stand), [Stride](content:playing-the-game/stride), and [Strike](content:playing-the-game/strike) basic actions. If an animal knows an activity, such as a horse's Gallop, you can Command the Animal to perform the activity, but you must spend as many actions on Command an Animal as the activity's number of actions. You can also spend multiple actions to Command the Animal to perform that number of basic actions on its next turn; for instance, you could spend 3 actions to Command an Animal to Stride three times or to Stride twice and then make a Strike.\n\n**Success** The animal does as you command on its next turn.\n\n**Failure** The animal is hesitant or resistant, and it does nothing.\n\n**Critical Failure** The animal misbehaves or misunderstands, and it takes some other action determined by the GM.",
  },
})

export const OccultismSection = Content.linkEntity(SkillsSection, Characteristic.Occultism)

export const UsingOccultismSection = Content.defineSection('skills/using-occultism', {
  parent: OccultismSection,
  content: {
    name: 'Using Occultism',
    description:
      "You know a great deal about ancient philosophies, esoteric lore, obscure mysticism, and supernatural creatures.\n\n**Occultism Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about ancient mysteries; obscure philosophies; creatures of occult significance (like [aberrations](content:traits/aberration), [spirits](content:traits/spirit), and [oozes](content:traits/ooze)); and esoteric planes like the Astral Plane, Creation's Forge, the Ethereal Plane, the Netherworld, and the Void.\n\n**Occultism Trained General Actions**\n\n- [Decipher Writing](content:skills/decipher-writing) on occult topics, including complex metaphysical systems, syncretic principles, obscure philosophies, and incoherent ramblings.\n\n- [Identify Magic](content:skills/identify-magic), particularly magic of the [occult](trait:spellcasting/occult-spell-list) tradition.\n\n- [Learn a Spell](content:skills/learn-a-spell) from the [occult](trait:spellcasting/occult-spell-list) tradition.",
  },
})

export const PerformanceSection = Content.linkEntity(SkillsSection, Characteristic.Performance)

export const UsingPerformanceSection = Content.defineSection('skills/using-performance', {
  parent: PerformanceSection,
  content: {
    name: 'Using Performance',
    description:
      "You are skilled at a form of performance, using your talents to impress a crowd or make a living.\n\n**Basic Competence**\n\nSome performances require you to be more than just charismatic, and if you don't meet the demands of the art form or the audience, the GM might apply a penalty based on the relevant attribute. For example, if you're dancing and have a negative [Dexterity modifier](characteristic:dexterity), you might take a penalty to your attempt at dancing. Likewise, if you are orating and have a negative [Intelligence modifier](characteristic:intelligence), you might have to hope your raw Charisma can overcome the penalties from your intellectual shortcomings—or ask someone to help write your speeches!\n\n**Performance Traits**\n\nWhen you use an action that utilizes the [Performance](characteristic:skill/performance) skill, it gains one or more traits relevant to the type of performance. The GM might change these depending on the circumstances, but the most common performance-based traits are listed below.\n\nIf you want to be particularly skilled with one type of performance, you can select the [Virtuosic Performer](trait:feat/virtuosic-performer) skill feat (page 264). That feat breaks down some of the performance listed above into specific instrument types, and your GM might allow you to add your own type.\n\n##\n\n| **Performance** | **Additional Traits** |\n|---|---|\n| Act or perform comedy | [Auditory](content:traits/auditory), [linguistic](content:traits/linguistic), and [visual](content:traits/visual) |\n| Dance | [Move](content:traits/move) and [visual](content:traits/visual) |\n| Play an instrument | [Auditory](content:traits/auditory) and [manipulate](content:traits/manipulate) |\n| Orate or sing | [Auditory](content:traits/auditory) and [linguistic](content:traits/linguistic) |\n\n**Performance Trained General Actions**\n\n- [Earn Income](content:skills/earn-income) by staging a performance.\n\n**Performance Untrained Actions**",
  },
})

export const PerformSection = Content.defineSection('skills/perform', {
  parent: PerformanceSection,
  content: {
    name: 'Perform',
    description:
      "◆ *[Concentrate](content:traits/concentrate)*\n\nWhen making a brief performance—one song, a quick dance, or a few jokes—you use the Perform action. This action is most useful when you want to prove your capability or impress someone quickly. Performing rarely has an impact on its own, but it might influence the DCs of subsequent [Diplomacy](characteristic:skill/diplomacy) checks against the observers, or even change their attitudes if the GM sees fit.\n\n**Critical Success** Your performance impresses the observers, and they're likely to share stories of your ability.\n\n**Success** You prove yourself, and observers appreciate the quality of your performance.\n\n**Failure** Your performance falls flat.\n\n**Critical Failure** You demonstrate only incompetence.\n\n**Sample Perform Tasks**\n\n**Untrained** audience of commoners\n\n**Trained** audience of artisans\n\n**Expert** audience of merchants or minor nobles\n\n**Master** audience of high nobility or minor royalty\n\n**Legendary** audience of major royalty or otherworldly beings",
  },
})

export const ReligionSection = Content.linkEntity(SkillsSection, Characteristic.Religion)

export const UsingReligionSection = Content.defineSection('skills/using-religion', {
  parent: ReligionSection,
  content: {
    name: 'Using Religion',
    description:
      "The secrets of deities, dogma, faith, and the realms of divine creatures both sublime and sinister are open to you. You also understand how magic works, though your training imparts a religious slant to that knowledge.\n\n**Religion Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about divine agents, the finer points of theology, obscure myths regarding a faith, and creatures of religious significance (like [celestials](content:traits/celestial), [fiends](content:traits/fiend), and [undead](content:traits/undead)), Creation's Forge, the Void, and the Outer Sphere.\n\n**Religion Trained General Actions**\n\n- [Decipher Writing](content:skills/decipher-writing) of a religious nature, including allegories, homilies, and proverbs.\n\n- [Identify Magic](content:skills/identify-magic), particularly magic of the [divine](trait:spellcasting/divine-spell-list) tradition.\n\n- [Learn a Spell](content:skills/learn-a-spell) from the [divine](trait:spellcasting/divine-spell-list) tradition.",
  },
})

export const SocietySection = Content.linkEntity(SkillsSection, Characteristic.Society)

export const UsingSocietySection = Content.defineSection('skills/using-society', {
  parent: SocietySection,
  content: {
    name: 'Using Society',
    description:
      "You understand the people and systems that make civilization run, and you know the historical events that make societies what they are today. Further, you can use that knowledge to navigate the complex physical, societal, and economic workings of settlements.\n\n**Society Untrained General Actions**\n\n- [Recall Knowledge](content:skills/recall-knowledge) about local history, important personalities, legal institutions, societal structure, and humanoid cultures. The GM might allow [Society](characteristic:skill/society) to apply to other creatures that are major elements of society in your region, such as the draconic nobility in a kingdom of humans ruled by dragons.\n\n- [Subsist](content:skills/subsist) in a settlement by finding shelter, scrounging, or begging for food.\n\n**Society Trained General Actions**\n\n- [Decipher Writing](content:skills/decipher-writing) that's a coded message, text written in an incomplete or archaic form, or in some cases, text in a language you don't know.\n\n**Society Trained Actions**",
  },
})

export const CreateForgerySection = Content.defineSection('skills/create-forgery', {
  parent: SocietySection,
  content: {
    name: 'Create Forgery',
    description:
      "*[Downtime](content:traits/downtime), [Secret](content:traits/secret)*\n\n**Requirements** You provide the proper writing materials for your forgery.\n\nYou create a forged document, usually over the course of a day or a week. The GM rolls a secret DC 20 [Society](characteristic:skill/society) check. If you need to forge a specific person's handwriting, you need a sample of that person's handwriting. Otherwise, you need only to have seen a similar document, and you gain up to a +4 circumstance bonus to the check (the GM determines the bonus).\n\n**Success** The forgery is of good enough quality that passive observers can't notice the fake (but see Examining Forgeries).\n\n**Failure** The forgery has some obvious signs of being a fake, potentially allowing passive observers to detect it. Each time a passive observer sees the document, the GM compares your check result to the observer's [Perception](characteristic:perception) DC or Society DC, whichever is higher. If your result doesn't exceed a passive observer's DC, that observer knows the document is a forgery.",
  },
})

export const StealthSection = Content.linkEntity(SkillsSection, Characteristic.Stealth)

export const UsingStealthSection = Content.defineSection('skills/using-stealth', {
  parent: StealthSection,
  content: {
    name: 'Using Stealth',
    description:
      "You are skilled at avoiding detection, allowing you to slip past foes, hide, or conceal an item.\n\n**Being Stealthy**\n\nIf you want to sneak around when there are creatures that can see you, you can use a combination of [Hide](content:skills/hide) and [Sneak](content:skills/sneak) to do so.\n\n- First, **Hide** behind something (either by taking advantage of [cover](content:playing-the-game/cover) or having the [concealed](content:conditions/concealed) condition due to fog, a spell, or a similar effect). A successful [Stealth](characteristic:skill/stealth) check makes you [hidden](content:conditions/hidden), though the creatures still know roughly where you are.\n\n- Second, now that you're hidden, you can **Sneak**. That means you can move at half your [Speed](characteristic:speed) and attempt another Stealth check. If it's successful, you're now [undetected](content:conditions/undetected). That means the creatures don't know which square you're in anymore.\n\nIf you were approaching creatures that didn't know you were there, you could begin Sneaking right away, since they didn't know your location to start with. Some actions can cause you to become [observed](content:conditions/observed) again, but they're mostly what you'd expect: standing out in the open, attacking someone, making a bunch of noise, and so forth. Unobtrusive actions, such as Recalling Knowledge or reloading a weapon, allow you to remain hidden or undetected. If you [Strike](content:playing-the-game/strike) someone after successfully Hiding or Sneaking, though, they're [off-guard](content:conditions/off-guard) to that Strike.\n\nCreatures can try to find you using the [Seek](content:playing-the-game/seek) action.\n\nThree conditions explain the states of detection. Remember that these conditions are relative to each creature—you can be observed by one creature while hidden to another and undetected by a third. [**Observed**](content:conditions/observed): You're in the creature's clear view. [**Hidden**](content:conditions/hidden): The creature knows your location but can't see you. [**Undetected**](content:conditions/undetected): The creature doesn't know your location.\n\n**Unobservable Stealth**\n\nIn some cases, it can be impossible for a creature to fully observe you. Typically this happens if you're [invisible](content:conditions/invisible), the observer is [blinded](content:conditions/blinded), or you're in [darkness](content:playing-the-game/darkness) and the creature can't see in darkness. In such cases, any critical failure you roll on a check to Sneak is a failure instead. You also continue to be [undetected](content:conditions/undetected) if you lose [cover or greater cover](content:playing-the-game/cover) against or are no longer [concealed](content:conditions/concealed) from such a creature.\n\n**Stealth Untrained Actions**",
  },
})

export const ConcealAnObjectSection = Content.defineSection('skills/conceal-an-object', {
  parent: StealthSection,
  content: {
    name: 'Conceal an Object',
    description:
      "◆ *[Manipulate](content:traits/manipulate), [Secret](content:traits/secret)*\n\nYou hide a small object on your person (such as a weapon of light Bulk). When you try to sneak a concealed object past someone who might notice it, the GM rolls your [Stealth](characteristic:skill/stealth) check and compares it to this passive observer's [Perception](characteristic:perception) DC. Once the GM rolls your check for a concealed object, that same result is used no matter how many passive observers you try to sneak it past. If a creature is specifically searching you for an item, it can attempt a Perception check against your Stealth DC (finding the object on success).\n\nYou can also conceal an object somewhere other than your person, such as among undergrowth or in a secret compartment within a piece of furniture. In this case, characters [Seeking](content:playing-the-game/seek) in an area compare their Perception check results to your Stealth DC to determine whether they find the object.\n\n**Success** The object remains undetected.\n\n**Failure** The searcher finds the object.",
  },
})

export const HideSection = Content.defineSection('skills/hide', {
  parent: StealthSection,
  content: {
    name: 'Hide',
    description:
      "◆ *[Secret](content:traits/secret)*\n\nYou huddle behind [cover or greater cover](content:playing-the-game/cover) or deeper into concealment to become [hidden](content:conditions/hidden), rather than [observed](content:conditions/observed). The GM rolls your [Stealth](characteristic:skill/stealth) check in secret and compares the result to the [Perception](characteristic:perception) DC of each creature you're observed by but that you have cover or greater cover against or are concealed from. You get a +2 circumstance bonus to your check if you have standard cover (or +4 from greater cover).\n\n**Success** If the creature could see you, you're now hidden from it instead of observed. If you were hidden from or [undetected](content:conditions/undetected) by the creature, you retain that condition.\n\nIf you successfully become hidden to a creature but then cease to have cover or greater cover against it or be [concealed](content:conditions/concealed) from it, you become observed again. You cease being hidden if you do anything except Hide, [Sneak](content:skills/sneak), or [Step](content:playing-the-game/step). If you attempt to [Strike](content:playing-the-game/strike) a creature, the creature remains [off-guard](content:conditions/off-guard) against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check.\n\nIf a creature uses [Seek](content:playing-the-game/seek) to make you observed by it, you must successfully Hide to become hidden from it again.",
  },
})

export const SneakSection = Content.defineSection('skills/sneak', {
  parent: StealthSection,
  content: {
    name: 'Sneak',
    description:
      "◆ *[Move](content:traits/move), [Secret](content:traits/secret)*\n\nYou attempt to move to another place while becoming or staying [undetected](content:conditions/undetected). Stride up to half your [Speed](characteristic:speed). (You can use Sneak while [Burrowing](content:playing-the-game/burrow), [Climbing](content:skills/climb), [Flying](content:playing-the-game/fly), or [Swimming](content:skills/swim) instead of Striding if you have the corresponding movement type; you must move at half that Speed.)\n\nAt the end of your movement, the GM rolls your [Stealth](characteristic:skill/stealth) check in secret and compares the result to the [Perception](characteristic:perception) DC of each creature you were [hidden](content:conditions/hidden) from or undetected by at the start of your movement. If you have [cover or greater cover](content:playing-the-game/cover) from the creature throughout your [Stride](content:playing-the-game/stride), you gain the +2 circumstance bonus from cover (or +4 from greater cover) to your Stealth check. Because you're moving, the bonus increase from [Taking Cover](content:playing-the-game/take-cover) doesn't apply. You don't get to roll against a creature if, at the end of your movement, you neither are [concealed](content:conditions/concealed) from it nor have cover or greater cover against it. You automatically become observed by such a creature.\n\n**Success** You're undetected by the creature during your movement and remain undetected by the creature at the end of it.\n\nYou become observed as soon as you do anything other than [Hide](content:skills/hide), Sneak, or [Step](content:playing-the-game/step). If you attempt to [Strike](content:playing-the-game/strike) a creature, the creature remains [off-guard](content:conditions/off-guard) against that attack, and you then become observed. If you do anything else, you become observed just before you act unless the GM determines otherwise. The GM might allow you to perform a particularly unobtrusive action without being noticed, possibly requiring another Stealth check. If you speak or make a deliberate loud noise, you become hidden instead of undetected.\n\nIf a creature uses [Seek](content:playing-the-game/seek) and you become hidden to it as a result, you must Sneak if you want to become undetected by that creature again.\n\n**Failure** A telltale sound or other sign gives your position away, though you still remain unseen. You're hidden from the creature throughout your movement and remain so.\n\n**Critical Failure** You're spotted! You're observed by the creature throughout your movement and remain so. If you're [invisible](content:conditions/invisible) and were hidden from the creature, instead of being observed you're hidden throughout your movement and remain so.",
  },
})

export const SurvivalSection = Content.linkEntity(SkillsSection, Characteristic.Survival)

export const UsingSurvivalSection = Content.defineSection('skills/using-survival', {
  parent: SurvivalSection,
  content: {
    name: 'Using Survival',
    description:
      'You are adept at living in the wilderness, foraging for food and building shelter, and with training you discover the secrets of tracking and hiding your trail.\n\n**Survival Untrained General Actions**\n\n- [Subsist](content:skills/subsist) in the wild by foraging for food and building shelter.\n\n**Survival Untrained Actions**\n\n**Survival Trained Actions**',
  },
})

export const SenseDirectionSection = Content.defineSection('skills/sense-direction', {
  parent: SurvivalSection,
  content: {
    name: 'Sense Direction',
    description:
      "*[Exploration](content:traits/exploration), [Secret](content:traits/secret)*\n\nUsing the stars, the position of the sun, traits of the geography or flora, or the behavior of fauna, you can stay oriented in the wild. Typically, you attempt a [Survival](characteristic:skill/survival) check only once per day, but some environments or changes might necessitate rolling more often. The GM determines the DC and how long this activity takes (usually just a minute or so). More unusual locales or those you're unfamiliar with might require you to have a minimum proficiency rank to Sense Direction. Without a compass, you take a –2 item penalty to checks to Sense Direction.\n\n**Critical Success** You get an excellent sense of where you are. If you are in an environment with cardinal directions, you know them exactly.\n\n**Success** You gain enough orientation to avoid becoming hopelessly lost. If you are in an environment with cardinal directions, you have a sense of those directions.\n\n**Sample Sense Direction Tasks**\n\n**Untrained** determine a cardinal direction using the sun\n\n**Trained** find an overgrown path in a forest\n\n**Expert** navigate a hedge maze\n\n**Master** navigate a byzantine labyrinth or relatively featureless desert\n\n**Legendary** navigate an ever-changing dream realm",
  },
})

export const CoverTracksSection = Content.defineSection('skills/cover-tracks', {
  parent: SurvivalSection,
  content: {
    name: 'Cover Tracks',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Move](content:traits/move)*\n\nYou cover your tracks, [moving up to half your travel Speed](content:playing-the-game/exploration-activities). You don't need to attempt a [Survival](characteristic:skill/survival) check to cover your tracks, but anyone tracking you must succeed at a Survival check against your Survival DC if it is higher than the normal DC to [Track](content:skills/track).\n\nIn some cases, you might Cover Tracks in an encounter. In this case, Cover Tracks is a single action and doesn't have the exploration trait.",
  },
})

export const TrackSection = Content.defineSection('skills/track', {
  parent: SurvivalSection,
  content: {
    name: 'Track',
    description:
      "*[Concentrate](content:traits/concentrate), [Exploration](content:traits/exploration), [Move](content:traits/move)*\n\nYou follow tracks, [moving at up to half your travel Speed](content:playing-the-game/exploration-activities). After a successful check to Track, you can continue following the tracks at half your [Speed](characteristic:speed) without attempting additional checks for up to 1 hour.\n\nIn some cases, you might Track in an encounter. In this case, Track is a single action and doesn't have the exploration trait, but you might need to roll more often because you're in a tense situation. The GM determines how often you must attempt this check.\n\nYou attempt your [Survival](characteristic:skill/survival) check when you start Tracking, once every hour you continue tracking, and any time something significant changes in the trail. The GM determines the DCs for such checks, depending on the freshness of the trail, the weather, and the type of ground.\n\n**Success** You find the trail or continue to follow the one you're already following.\n\n**Failure** You lose the trail but can try again after a 1-hour delay.\n\n**Critical Failure** You lose the trail and can't try again for 24 hours.\n\n**Sample Track Tasks**\n\n**Untrained** the path of a large army following a road\n\n**Trained** relatively fresh tracks of a rampaging bear through the plains\n\n**Expert** a nimble panther's tracks through a jungle, tracks obscured by rainfall\n\n**Master** tracks obscured by winter snow, tracks of a mouse or smaller creature, tracks left on surfaces that can't hold prints like bare rock\n\n**Legendary** old tracks through a windy desert’s sands, tracks after a major blizzard or hurricane",
  },
})

export const ThieverySection = Content.linkEntity(SkillsSection, Characteristic.Thievery)

export const UsingThieverySection = Content.defineSection('skills/using-thievery', {
  parent: ThieverySection,
  content: {
    name: 'Using Thievery',
    description:
      'You are trained in a particular set of skills favored by thieves and miscreants.\n\n**Thievery Untrained Actions**\n\n**Thievery Trained Actions**',
  },
})

export const PalmAnObjectSection = Content.defineSection('skills/palm-an-object', {
  parent: ThieverySection,
  content: {
    name: 'Palm an Object',
    description:
      "◆ *[Manipulate](content:traits/manipulate)*\n\nYou pick up a small, unattended object and try not to be noticed. Roll a single [Thievery](characteristic:skill/thievery) check against the [Perception](characteristic:perception) DCs of all creatures who are currently observing you. You can typically only Palm Objects of negligible Bulk, though the GM might determine otherwise depending on the situation.\n\n**Success** The creature doesn't notice you Palming the Object.\n\n**Failure** The creature notices you Palming the Object.",
  },
})

export const StealSection = Content.defineSection('skills/steal', {
  parent: ThieverySection,
  content: {
    name: 'Steal',
    description:
      "◆ *[Manipulate](content:traits/manipulate)*\n\nYou try to take a small object from another creature without being noticed. Typically, you can Steal only an object of negligible Bulk, you must have a free hand, and you automatically fail if the creature who has the object is in combat or on guard.\n\nAttempt a [Thievery](characteristic:skill/thievery) check to determine if you successfully Steal the object. The DC is usually the [Perception](characteristic:perception) DC of the creature wearing the object. It's easiest to steal an object that is worn but not closely guarded (like a loosely carried pouch filled with coins, or an object within such a pouch). The GM might increase the DC if the object is protected or if the nature of the object makes it harder to steal (such as a very small item in a large pack, or a sheet of parchment mixed in with other documents). For instance, the DC is typically 5 higher if the object is in a pocket, held in a creature's hand, or similarly protected.\n\nYou might also need to compare your Thievery check result against the Perception DCs of observers other than the person wearing the object. The GM might impose a circumstance penalty to the DCs of observers who are distracted.\n\n**Success** You steal the item without the bearer noticing, or an observer doesn't see you take or attempt to take the item.\n\n**Failure** The item's bearer notices your attempt before you can take the object, or an observer sees you take or attempt to take the item. The GM determines the response of any creature that notices your theft.",
  },
})

export const DisableADeviceSection = Content.defineSection('skills/disable-a-device', {
  parent: ThieverySection,
  content: {
    name: 'Disable a Device',
    description:
      "◆◆ *[Manipulate](content:traits/manipulate)*\n\nThis action allows you to disarm a trap or another complex device. Often, a device requires numerous successes before becoming disabled, depending on its construction and complexity. A thieves' toolkit is helpful and sometimes even required to Disable a Device, as determined by the GM, and sometimes a device requires a higher proficiency rank in [Thievery](characteristic:skill/thievery) to disable it.\n\nYour Thievery check result determines your progress.\n\n**Critical Success** You disable the device, or you achieve two successes toward disabling a device requiring more than one success. You leave no trace of your tampering, and you can rearm the device later, if that type of device can be rearmed.\n\n**Success** You disable the device, or you achieve one success toward disabling a device that requires more than one success.\n\n**Critical Failure** You trigger the device.",
  },
})

export const PickALockSection = Content.defineSection('skills/pick-a-lock', {
  parent: ThieverySection,
  content: {
    name: 'Pick a Lock',
    description:
      "◆◆ *[Manipulate](content:traits/manipulate)*\n\n**Requirements** You're holding or wearing a thieves' toolkit.\n\nOpening a lock without a key is very similar to [Disabling a Device](content:skills/disable-a-device), but the DC of the check is determined by the complexity and construction of the lock you are attempting to pick (locks and their DCs can be found on their page). Locks of higher quality might require multiple successes to unlock. If you lack the proper tools, the GM might let you use improvised picks, which are treated as a shoddy toolkit.\n\n**Critical Success** You unlock the lock, or you achieve two successes toward opening a lock that requires more than one success. You leave no trace of your tampering.\n\n**Success** You open the lock, or you achieve one success toward opening a lock that requires more than one success. You leave behind damage that indicates the lock was picked on close scrutiny.\n\n**Critical Failure** You break your toolkit and leave behind obvious damage. Fixing a broken toolkit requires using [Crafting](characteristic:skill/crafting) to [Repair](content:skills/repair) it or else swapping in replacement picks (costing 3 sp, or 3 gp for an infiltrator thieves' toolkit).",
  },
})

export const SkillsContent = [
  SkillsSection,
  KeyAttributeSection,
  SkillActionsSection,
  SkillChecksAndDCsSection,
  ArmorAndSkillsSection,
  SecretChecksSection,
  ExplorationAndDowntimeActivitiesSection,
  GeneralSkillActionsSection,
  DecipherWritingSection,
  EarnIncomeSection,
  IdentifyMagicSection,
  LearnASpellSection,
  RecallKnowledgeSection,
  SubsistSection,
  AcrobaticsSection,
  UsingAcrobaticsSection,
  BalanceSection,
  TumbleThroughSection,
  ManeuverInFlightSection,
  SqueezeSection,
  ArcanaSection,
  UsingArcanaSection,
  BorrowAnArcaneSpellSection,
  AthleticsSection,
  UsingAthleticsSection,
  ClimbSection,
  ForceOpenSection,
  GrappleSection,
  HighJumpSection,
  LongJumpSection,
  RepositionSection,
  ShoveSection,
  SwimSection,
  TripSection,
  DisarmSection,
  CraftingSection,
  UsingCraftingSection,
  RepairSection,
  CraftSection,
  IdentifyAlchemySection,
  DeceptionSection,
  UsingDeceptionSection,
  CreateADiversionSection,
  ImpersonateSection,
  LieSection,
  FeintSection,
  DiplomacySection,
  UsingDiplomacySection,
  GatherInformationSection,
  MakeAnImpressionSection,
  RequestSection,
  IntimidationSection,
  UsingIntimidationSection,
  CoerceSection,
  DemoralizeSection,
  LoreSection,
  AcademiaLoreSection,
  AlcoholLoreSection,
  ArtLoreSection,
  CircusLoreSection,
  CookingLoreSection,
  EngineeringLoreSection,
  FarmingLoreSection,
  FortuneTellingLoreSection,
  GamesLoreSection,
  GenealogyLoreSection,
  GladiatorialLoreSection,
  GuildLoreSection,
  HeraldryLoreSection,
  HerbalismLoreSection,
  LaborLoreSection,
  LegalLoreSection,
  MercantileLoreSection,
  MiningLoreSection,
  SailingLoreSection,
  ScribingLoreSection,
  TanningLoreSection,
  TheaterLoreSection,
  UnderworldLoreSection,
  WarfareLoreSection,
  TerrainLoreSection,
  DeityLoreSection,
  CityLoreSection,
  MedicineSection,
  UsingMedicineSection,
  AdministerFirstAidSection,
  TreatDiseaseSection,
  TreatPoisonSection,
  TreatWoundsSection,
  NatureSection,
  UsingNatureSection,
  CommandAnAnimalSection,
  OccultismSection,
  UsingOccultismSection,
  PerformanceSection,
  UsingPerformanceSection,
  PerformSection,
  ReligionSection,
  UsingReligionSection,
  SocietySection,
  UsingSocietySection,
  CreateForgerySection,
  StealthSection,
  UsingStealthSection,
  ConcealAnObjectSection,
  HideSection,
  SneakSection,
  SurvivalSection,
  UsingSurvivalSection,
  SenseDirectionSection,
  CoverTracksSection,
  TrackSection,
  ThieverySection,
  UsingThieverySection,
  PalmAnObjectSection,
  StealSection,
  DisableADeviceSection,
  PickALockSection,
]
