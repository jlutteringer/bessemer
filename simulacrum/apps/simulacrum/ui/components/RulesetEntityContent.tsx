'use client'

import * as React from 'react'
import { useContext } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Bolt, HourglassBottom, TrackChanges } from '@mui/icons-material'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RulesetEntity, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Ability } from '@simulacrum/common/engine/ability'
import { Trait } from '@simulacrum/common/engine/trait'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { Characteristics, Effects, Rulesets } from '@simulacrum/common/engine/engine'
import { Modifier } from '@simulacrum/common/engine/attribute'
import { EffectSourceType } from '@simulacrum/common/engine/effect'
import { PatchType } from '@bessemer/cornerstone/patch'
import { AbilityAction } from '@simulacrum/ruleset/ability'
import { EvaluateExpression, Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { RuleLinkTrigger, SimulacrumRichText } from '@simulacrum/ui/components/SimulacrumRichText'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { ExpressionFormat } from '@simulacrum/ui/components/ExpressionFormat'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import {
  getAbilityResourceLabels,
  getActionTypeLabel,
  getDurationLabel,
  getPassiveEffects,
  getRangeLabel,
  getTargetLabel,
  hasDescribedActions,
} from '@simulacrum/ui/components/ruleset-entity-model'

export const RulesetEntityContent = ({ entity }: { entity: RulesetEntity }) => {
  if (Rulesets.isEntityType(entity, RulesetEntityType.Trait)) {
    return <TraitContent trait={entity} />
  }

  if (Rulesets.isEntityType(entity, RulesetEntityType.Ability)) {
    return <AbilityContent ability={entity} />
  }

  if (Rulesets.isEntityType(entity, RulesetEntityType.Characteristic)) {
    return <CharacteristicContent characteristic={entity} />
  }

  return Objects.isPresent(entity.description) ? <SimulacrumRichText text={entity.description} /> : null
}

const CharacteristicContent = ({ characteristic }: { characteristic: Characteristic }) => {
  const characterContext = useContext(CharacterSheetContext)
  const modifiers = Objects.isNil(characterContext)
    ? []
    : Characteristics.getCharacteristicValue(characterContext.character, characteristic).activeModifiers
  const hasValues = Objects.isPresent(characteristic.baseValue) || !Arrays.isEmpty(modifiers)

  return (
    <>
      {Objects.isPresent(characteristic.baseValue) && (
        <>
          <Typography variant="caption">Base Value</Typography>
          <Typography variant="body2">
            <ExpressionFormat expression={characteristic.baseValue} />
          </Typography>
        </>
      )}
      {!Arrays.isEmpty(modifiers) && (
        <>
          <Typography
            variant="caption"
            component="p"
            sx={{ mt: 0.5 }}
          >
            Modifiers
          </Typography>
          {modifiers.map((it, index) => (
            <Typography
              key={index}
              variant="body2"
            >
              <CharacteristicModifier modifier={it.modifier} />
            </Typography>
          ))}
        </>
      )}
      {hasValues && Objects.isPresent(characteristic.description) && <Divider sx={{ my: 1 }} />}
      {Objects.isPresent(characteristic.description) && <SimulacrumRichText text={characteristic.description} />}
    </>
  )
}

const CharacteristicModifier = ({ modifier }: { modifier: Modifier<number> }) => {
  const ruleset = useRuleset()
  const patch = modifier.value
  if (patch.type === PatchType.Patch) {
    return null
  }

  const source =
    modifier.source?.type === EffectSourceType.Trait
      ? Rulesets.findEntityById(modifier.source.trait, ruleset)
      : modifier.source?.type === EffectSourceType.Ability
      ? Rulesets.findEntityById(modifier.source.ability, ruleset)
      : null
  const operator = patch.type === PatchType.Set ? '= ' : ModifierOperators[patch.reducer.expressionKey] ?? ''

  return (
    <>
      {Objects.isPresent(source) && (
        <>
          <RulesetEntityPopover
            entity={source}
            trigger={<RuleLinkTrigger>{source.name}</RuleLinkTrigger>}
          />
          {': '}
        </>
      )}
      {operator}
      <ExpressionFormat expression={patch.value} />
    </>
  )
}

const ModifierOperators: Record<string, string> = {
  [NumericExpressions.SumExpression.expressionKey]: '+',
  [NumericExpressions.MultiplyExpression.expressionKey]: '×',
  [NumericExpressions.MaxExpression.expressionKey]: 'at least ',
  [NumericExpressions.MinExpression.expressionKey]: 'at most ',
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
  const characterContext = useContext(CharacterSheetContext)
  const ability = characterContext?.character.abilities.find((it) => it.ability.id === rulesetAbility.id)?.ability ?? rulesetAbility
  const evaluate = Objects.isNil(characterContext) ? null : Expressions.evaluator(characterContext.expressionContext)
  const resourceLabels =
    Objects.isNil(characterContext) || Objects.isNil(evaluate) ? [] : getAbilityResourceLabels(ability, characterContext.character, evaluate, ruleset)

  return (
    <>
      {Objects.isPresent(ability.description) && <SimulacrumRichText text={ability.description} />}
      {Effects.filter(ability.effects, Effects.Descriptive).map((it, index) => (
        <SimulacrumRichText
          key={index}
          text={it.description}
        />
      ))}
      {!Arrays.isEmpty(resourceLabels) && (
        <Typography
          variant="caption"
          component="p"
        >
          {resourceLabels.join(' · ')}
        </Typography>
      )}
      {hasDescribedActions(ability) ? (
        <AbilityActions
          ability={ability}
          evaluate={evaluate}
        />
      ) : (
        ability.actions.map((it, index) => (
          <React.Fragment key={index}>
            <ActionDetails
              action={it}
              evaluate={evaluate}
            />
            {Objects.isPresent(it.description) && <SimulacrumRichText text={it.description} />}
          </React.Fragment>
        ))
      )}
    </>
  )
}

const AbilityActions = ({ ability, evaluate }: { ability: Ability; evaluate: EvaluateExpression | null }) => {
  return (
    <Stack
      spacing={1}
      sx={{ mt: 1 }}
    >
      {ability.actions.map((action, index) => (
        <Box key={index}>
          <Typography variant="subtitle2">{action.name ?? ability.name}</Typography>
          <ActionDetails
            action={action}
            evaluate={evaluate}
          />
          {Objects.isPresent(action.description) && <SimulacrumRichText text={action.description} />}
        </Box>
      ))}
    </Stack>
  )
}

const ActionDetails = ({ action, evaluate }: { action: AbilityAction; evaluate: EvaluateExpression | null }) => {
  const ruleset = useRuleset()
  const durationLabel = getDurationLabel(action.duration, evaluate)

  return (
    <Stack
      spacing={0.25}
      sx={{ my: 1 }}
    >
      <ActionDetail icon={Bolt}>
        {getActionTypeLabel(action.action, ruleset)}
        {Objects.isPresent(action.annotation) && ` · ${action.annotation}`}
      </ActionDetail>
      {Object.entries(action.targeting).map(([key, selection]) => {
        const rangeLabel = getRangeLabel(selection, ruleset, evaluate)

        return (
          <ActionDetail
            key={key}
            icon={TrackChanges}
          >
            {getTargetLabel(selection, ruleset, evaluate)}
            {Objects.isPresent(rangeLabel) && ` · ${rangeLabel}`}
          </ActionDetail>
        )
      })}
      {Objects.isPresent(durationLabel) && <ActionDetail icon={HourglassBottom}>{durationLabel}</ActionDetail>}
    </Stack>
  )
}

const ActionDetail = ({ icon: Icon, children }: { icon: typeof Bolt; children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75, color: 'text.secondary' }}>
      <Icon sx={{ fontSize: 16, mt: '2px' }} />
      <Typography variant="body2">{children}</Typography>
    </Box>
  )
}
