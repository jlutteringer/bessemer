'use client'

import * as React from 'react'
import { useContext } from 'react'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Bolt, Casino, HourglassBottom, InfoOutlined, TrackChanges } from '@mui/icons-material'
import { Arrays, Objects } from '@bessemer/cornerstone'
import { RulesetEntity, RulesetEntityReference, RulesetEntityType } from '@simulacrum/ruleset/ruleset-entity'
import { Ability, AbilityAction, AbilityValue, ActionValue } from '@simulacrum/common/engine/ability'
import { Trait } from '@simulacrum/common/engine/trait'
import { Characteristic } from '@simulacrum/ruleset/characteristic'
import { Abilities, Characteristics, Damage, CharacterEffects, Rulesets } from '@simulacrum/common/engine/engine'
import { PatchType } from '@bessemer/cornerstone/patch'
import { EvaluateExpression, ExpressionContext, Expressions, NumericExpressions } from '@bessemer/cornerstone/expression'
import { RuleLinkTrigger, SimulacrumRichText } from '@simulacrum/ui/components/SimulacrumRichText'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { ActionDamage, ActionEffect, ActionEffectType } from '@simulacrum/ruleset/action-effect'
import { StackedPopover } from '@simulacrum/ui/components/StackedPopover'
import { AttributeBreakdown } from '@simulacrum/ui/components/AttributeBreakdown'
import { ExpressionFormat } from '@simulacrum/ui/components/ExpressionFormat'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import {
  getAbilityResourceLabels,
  getActionTypeLabel,
  getDurationLabel,
  getPassiveEffects,
  getRangeLabel,
  getTargetDescription,
  TargetDescription,
  hasDescribedActions,
  getTestLabel,
  getDamageLabel,
  getActionEffectBreakdown,
  getEffectSourceEntity,
  ActionEffectBreakdown,
  getOriginLabel,
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
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)
  const modifiers = Objects.isNil(characterContext)
    ? []
    : Characteristics.getCharacteristicValue(characterContext.character, characteristic).activeModifiers
  const base = Objects.isNil(characteristic.baseValue) ? [] : [{ label: null, value: <ExpressionFormat expression={characteristic.baseValue} /> }]
  const modifierLines = modifiers.flatMap(({ modifier }) => {
    const patch = modifier.patch
    if (patch.type === PatchType.Patch) {
      return []
    }

    const operator = patch.type === PatchType.Set ? '= ' : ModifierOperators[patch.reducer.expressionKey] ?? ''
    return [
      {
        source: getEffectSourceEntity(modifier.source, ruleset),
        change: (
          <>
            {operator}
            <ExpressionFormat expression={patch.value} />
          </>
        ),
      },
    ]
  })
  const hasValues = !Arrays.isEmpty(base) || !Arrays.isEmpty(modifierLines)

  return (
    <>
      <AttributeBreakdown
        base={base}
        modifiers={modifierLines}
      />
      {hasValues && Objects.isPresent(characteristic.description) && <Divider sx={{ my: 1 }} />}
      {Objects.isPresent(characteristic.description) && <SimulacrumRichText text={characteristic.description} />}
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

const AbilityContent = ({ ability: entity }: { ability: Ability }) => {
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)
  const ability = Abilities.isValue(entity)
    ? entity
    : characterContext?.character.abilities.find((it) => it.ability.id === entity.id)?.ability ?? Abilities.buildDefaultValue(entity)
  const evaluate = Objects.isNil(characterContext) ? null : Expressions.evaluator(characterContext.expressionContext)
  const resourceLabels =
    Objects.isNil(characterContext) || Objects.isNil(evaluate) ? [] : getAbilityResourceLabels(ability, characterContext.character, evaluate, ruleset)

  return (
    <>
      {Objects.isPresent(ability.description) && (
        <SimulacrumRichText
          text={ability.description}
          variant="body2"
        />
      )}
      {!Arrays.isEmpty(CharacterEffects.filter(ability.effects, CharacterEffects.Descriptive)) && <Typography variant="caption">Passive</Typography>}
      {CharacterEffects.filter(ability.effects, CharacterEffects.Descriptive).map((it, index) => (
        <SimulacrumRichText
          key={index}
          text={it.description}
          variant="body2"
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
            {Objects.isPresent(it.description) && (
              <SimulacrumRichText
                text={it.description}
                variant="body2"
              />
            )}
            <ActionEffects
              action={it}
              evaluate={evaluate}
            />
          </React.Fragment>
        ))
      )}
    </>
  )
}

const AbilityActions = ({ ability, evaluate }: { ability: AbilityValue; evaluate: EvaluateExpression | null }) => {
  return (
    <Stack
      spacing={1.5}
      divider={<Divider flexItem />}
      sx={{ mt: 1 }}
    >
      {ability.actions.map((action, index) => (
        <Box key={index}>
          {Objects.isPresent(action.name) && <Typography variant="subtitle2">{action.name}</Typography>}
          <ActionDetails
            action={action}
            evaluate={evaluate}
          />
          {Objects.isPresent(action.description) && (
            <SimulacrumRichText
              text={action.description}
              variant="body2"
            />
          )}
          <ActionEffects
            action={action}
            evaluate={evaluate}
          />
        </Box>
      ))}
    </Stack>
  )
}

const ActionEffects = ({ action, evaluate }: { action: ActionValue; evaluate: EvaluateExpression | null }) => {
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)
  const expressionContext = characterContext?.expressionContext ?? null
  const testContext =
    Objects.isNil(characterContext) || Objects.isNil(action.potency)
      ? expressionContext
      : Damage.buildPotencyContext(characterContext.expressionContext, action.potency)

  const outcomes = [
    { label: 'Effect', values: action.effects, context: expressionContext },
    { label: 'Success', values: action.test?.success ?? [], context: testContext },
    { label: 'Failure', values: action.test?.failure ?? [], context: testContext },
  ].filter((it) => !Arrays.isEmpty(it.values))

  return (
    <>
      {outcomes.map((outcome) => (
        <Box
          key={outcome.label}
          sx={{ '&:not(:first-of-type)': { mt: 1 } }}
        >
          <Typography
            variant="caption"
            component="p"
          >
            {outcome.label}
          </Typography>
          <Stack spacing={0.75}>
            {outcome.values.map((value, index) => {
              const effect = value.value
              const duration = 'duration' in effect ? effect.duration : null
              const durationLabel = Objects.isNil(duration) ? null : getDurationLabel(duration, evaluate)
              const breakdown = getActionEffectBreakdown(value, ruleset, evaluate)

              return (
                <Box
                  key={index}
                  sx={{ display: 'flow-root' }}
                >
                  {Objects.isPresent(durationLabel) && (
                    <Box sx={{ float: 'left', mr: 1, whiteSpace: 'nowrap' }}>
                      <ActionDetail icon={HourglassBottom}>{durationLabel}</ActionDetail>
                    </Box>
                  )}
                  <ActionEffectText
                    effect={effect}
                    context={outcome.context}
                    breakdown={breakdown}
                  />
                </Box>
              )
            })}
          </Stack>
        </Box>
      ))}
    </>
  )
}

const ActionEffectText = ({
  effect,
  context,
  breakdown,
}: {
  effect: ActionEffect
  context: ExpressionContext | null
  breakdown: ActionEffectBreakdown | null
}) => {
  if (effect.type === ActionEffectType.Descriptive) {
    return (
      <SimulacrumRichText
        text={effect.description}
        variant="body2"
      />
    )
  }

  const damage = Objects.isNil(effect.damage) ? null : (
    <>
      <ActionDamageValue
        damage={effect.damage}
        context={context}
        breakdown={breakdown}
      />{' '}
      damage.
    </>
  )

  if (effect.type === ActionEffectType.Damage) {
    return <Typography variant="body2">The target takes {damage}</Typography>
  }

  return (
    <Typography variant="body2">
      The target is <RulesetEntityLink reference={effect.condition} />
      {Objects.isNil(damage) ? '.' : <>, taking {damage}</>}
    </Typography>
  )
}

const ActionDamageValue = ({
  damage,
  context,
  breakdown,
}: {
  damage: ActionDamage
  context: ExpressionContext | null
  breakdown: ActionEffectBreakdown | null
}) => {
  return (
    <>
      <Box
        component="span"
        sx={{ bgcolor: 'action.hover', borderRadius: 1, px: 0.75, py: 0.25, whiteSpace: 'nowrap' }}
      >
        {getDamageLabel(damage, context)} <RulesetEntityLink reference={damage.type} />
      </Box>
      {Objects.isPresent(breakdown) && (
        <Box
          component="span"
          sx={{ ml: 0.25, display: 'inline-flex', alignItems: 'center', height: '1.5em', verticalAlign: 'top', position: 'relative', top: '-0.08em' }}
        >
          <ActionEffectModifiers breakdown={breakdown} />
        </Box>
      )}
    </>
  )
}

const RulesetEntityLink = ({ reference }: { reference: RulesetEntityReference }) => {
  const ruleset = useRuleset()
  const entity = Rulesets.getEntityById(reference, ruleset)
  return (
    <RulesetEntityPopover
      entity={entity}
      trigger={<RuleLinkTrigger>{entity.name}</RuleLinkTrigger>}
    />
  )
}

const ActionEffectModifiers = ({ breakdown }: { breakdown: ActionEffectBreakdown }) => {
  return (
    <StackedPopover
      title="Modifiers"
      trigger={
        <IconButton
          size="small"
          aria-label="Show modifiers"
          sx={{ p: 0 }}
        >
          <InfoOutlined fontSize="inherit" />
        </IconButton>
      }
    >
      <AttributeBreakdown
        base={breakdown.base}
        modifiers={breakdown.modifiers}
      />
    </StackedPopover>
  )
}

const ActionDetails = ({ action, evaluate }: { action: AbilityAction; evaluate: EvaluateExpression | null }) => {
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)

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
        const originLabel = Objects.isNil(selection.from) ? null : getOriginLabel(selection.from, Object.keys(action.targeting))

        return (
          <ActionDetail
            key={key}
            icon={TrackChanges}
          >
            <TargetLabel description={getTargetDescription(selection, ruleset, evaluate)} />
            {Objects.isPresent(rangeLabel) && ` · ${rangeLabel}`}
            {Objects.isPresent(rangeLabel) && Objects.isPresent(originLabel) && ` from ${originLabel}`}
          </ActionDetail>
        )
      })}
      {Objects.isPresent(action.test) && (
        <ActionDetail icon={Casino}>{getTestLabel(action.test, ruleset, characterContext?.character ?? null)}</ActionDetail>
      )}
    </Stack>
  )
}

const TargetLabel = ({ description }: { description: TargetDescription }) => {
  if (description.type === 'area') {
    return <>{description.label}</>
  }

  return (
    <>
      {Objects.isPresent(description.amount) && `${description.amount} `}
      {description.qualifiers.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {groupIndex > 0 && ', '}
          {group.map((it, index) => (
            <React.Fragment key={it}>
              {index > 0 && ' or '}
              <RulesetEntityLink reference={it} />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
      {Arrays.isEmpty(description.qualifiers) ? description.noun : ` ${description.noun}`}
    </>
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
