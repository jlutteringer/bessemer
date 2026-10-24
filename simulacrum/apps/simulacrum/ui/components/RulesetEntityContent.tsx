'use client'

import * as React from 'react'
import { useContext } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Ability } from '@simulacrum/engine/ability'
import { Trait } from '@simulacrum/engine/trait'
import { Effects, Rulesets } from '@simulacrum/engine'
import { SimulacrumRichText } from '@simulacrum/ui/components/SimulacrumRichText'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import {
  getAbilityResourceLabels,
  getActionLabel,
  getActionTypeLabel,
  getPassiveEffects,
  hasDescribedActions,
} from '@simulacrum/ui/components/ruleset-entity-model'

/**
 * The body of a ruleset entity wherever it's shown: a builder card, a popover or the rulebook. The surrounding frame shows its name.
 */
export const RulesetEntityContent = ({ entity }: { entity: RulesetEntity }) => {
  if (Rulesets.isEntityType(entity, RulesetEntityType.Trait)) {
    return <TraitContent trait={entity} />
  }

  if (Rulesets.isEntityType(entity, RulesetEntityType.Ability)) {
    return <AbilityContent ability={entity} />
  }

  return Objects.isPresent(entity.description) ? <SimulacrumRichText text={entity.description} /> : null
}

const TraitContent = ({ trait }: { trait: Trait }) => {
  return (
    <>
      {Objects.isPresent(trait.description) && <SimulacrumRichText text={trait.description} />}
      {!Arrays.isEmpty(getPassiveEffects(trait)) && (
        <>
          <Divider sx={{ my: 1 }} />
          <TraitPassiveEffects trait={trait} />
        </>
      )}
    </>
  )
}

export const TraitPassiveEffects = ({ trait }: { trait: Trait }) => {
  return (
    <>
      <Typography variant="caption">Passive</Typography>
      {getPassiveEffects(trait).map((it, index) => (
        <SimulacrumRichText
          key={index}
          text={it.description}
        />
      ))}
    </>
  )
}

const AbilityContent = ({ ability: rulesetAbility }: { ability: Ability }) => {
  const ruleset = useRuleset()
  const sheet = useContext(CharacterSheetContext)
  const ability = sheet?.abilities.find((it) => it.ability.id === rulesetAbility.id)?.ability ?? rulesetAbility
  const resourceLabels = Objects.isNil(sheet) ? [] : getAbilityResourceLabels(ability, sheet, ruleset)
  const actionLabel = hasDescribedActions(ability) ? null : getActionLabel(ability, ruleset)
  const usageLabels = [...(Objects.isPresent(actionLabel) ? [actionLabel] : []), ...resourceLabels]

  return (
    <>
      {!Arrays.isEmpty(usageLabels) && (
        <Typography
          variant="caption"
          component="p"
        >
          {usageLabels.join(' · ')}
        </Typography>
      )}
      {Objects.isPresent(ability.description) && <SimulacrumRichText text={ability.description} />}
      {Effects.filter(ability.effects, Effects.Descriptive).map((it, index) => (
        <SimulacrumRichText
          key={index}
          text={it.description}
        />
      ))}
      {hasDescribedActions(ability) ? (
        <AbilityActions ability={ability} />
      ) : (
        ability.actions.flatMap((it, index) =>
          Objects.isPresent(it.description)
            ? [
                <SimulacrumRichText
                  key={index}
                  text={it.description}
                />,
              ]
            : []
        )
      )}
    </>
  )
}

const AbilityActions = ({ ability }: { ability: Ability }) => {
  const ruleset = useRuleset()

  return (
    <Stack
      spacing={1}
      sx={{ mt: 1 }}
    >
      {ability.actions.map((action, index) => (
        <Box key={index}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <Typography variant="subtitle2">{action.name ?? ability.name}</Typography>
            <Typography variant="caption">{getActionTypeLabel(action.action, ruleset)}</Typography>
          </Box>
          {Objects.isPresent(action.description) && <SimulacrumRichText text={action.description} />}
        </Box>
      ))}
    </Stack>
  )
}
