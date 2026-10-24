'use client'

import * as React from 'react'
import { ReactNode, useContext } from 'react'
import { Box } from '@mui/material'
import { Expression, Expressions, NumericExpressions, StringExpressions, ArrayExpressions } from '@bessemer/cornerstone/expression'
import { ExpressionMapper } from '@bessemer/cornerstone/expression/expression-mapper'
import {
  AndExpression,
  ContainsExpression,
  EqualsExpression,
  GreaterThanExpression,
  GreaterThanOrEqualExpression,
  LessThanExpression,
  LessThanOrEqualExpression,
  NotExpression,
  OrExpression,
  isValue,
  ValueExpression,
  VariableExpression,
} from '@bessemer/cornerstone/expression/core-expression'
import * as ExpressionInternal from '@bessemer/cornerstone/expression/internal'
import { RoundingMode } from '@bessemer/cornerstone/math'
import { Maths, Objects } from '@bessemer/cornerstone'
import { RulesetEntityReference } from '@simulacrum/ruleset/ruleset-entity'
import { Ruleset } from '@simulacrum/engine/ruleset'
import { Rulesets } from '@simulacrum/engine'
import { CharacterSheetContext } from '@simulacrum/ui/character/character-sheet-context'
import { useRuleset } from '@simulacrum/ui/ruleset/use-ruleset'
import { RulesetEntityPopover } from '@simulacrum/ui/components/RulesetEntityPopover'
import { RuleLinkTrigger } from '@simulacrum/ui/components/SimulacrumRichText'

export type ExpressionRenderContext = {
  ruleset: Ruleset
}

export const ExpressionFormat = ({ expression }: { expression: Expression<unknown> }) => {
  const ruleset = useRuleset()
  const characterContext = useContext(CharacterSheetContext)
  const value = Objects.isNil(characterContext) ? null : Expressions.evaluate(expression, characterContext.expressionContext)

  if (isValue(expression)) {
    return <>{ExpressionRenderer.map(expression, { ruleset })}</>
  }

  const formula = (
    <Box
      component="span"
      sx={{ bgcolor: 'action.hover', borderRadius: 1, px: 0.75, py: 0.25 }}
    >
      {ExpressionRenderer.map(expression, { ruleset })}
    </Box>
  )

  if (!Maths.isNumber(value)) {
    return formula
  }

  return (
    <>
      {value} · {formula}
    </>
  )
}

const ExpressionRenderer = new ExpressionMapper<ReactNode, ExpressionRenderContext>()

const InfixExpressionKeys: Array<string> = [
  NumericExpressions.SumExpression.expressionKey,
  NumericExpressions.MultiplyExpression.expressionKey,
  AndExpression.expressionKey,
  OrExpression.expressionKey,
  EqualsExpression.expressionKey,
  ContainsExpression.expressionKey,
  LessThanExpression.expressionKey,
  LessThanOrEqualExpression.expressionKey,
  GreaterThanExpression.expressionKey,
  GreaterThanOrEqualExpression.expressionKey,
]

const renderOperand = (expression: Expression<unknown>, map: (expression: Expression<unknown>) => ReactNode): ReactNode => {
  const isInfix = ExpressionInternal.isExpression(expression) && InfixExpressionKeys.includes(expression.expressionKey)
  return isInfix ? <>({map(expression)})</> : map(expression)
}

const renderList = (operands: Array<ReactNode>, separator: ReactNode): ReactNode => {
  return operands.map((it, index) => (
    <React.Fragment key={index}>
      {index > 0 && separator}
      {it}
    </React.Fragment>
  ))
}

const renderFunction = (name: string, operands: Array<ReactNode>): ReactNode => {
  return (
    <>
      {name}({renderList(operands, ', ')})
    </>
  )
}

const renderEntity = (reference: string, context: ExpressionRenderContext): ReactNode => {
  const entity = Rulesets.findEntityById(reference as RulesetEntityReference, context.ruleset)
  if (Objects.isNil(entity)) {
    return reference
  }

  return (
    <RulesetEntityPopover
      entity={entity}
      trigger={<RuleLinkTrigger>{entity.name}</RuleLinkTrigger>}
    />
  )
}

ExpressionRenderer.register(ValueExpression, ({ value }, map, context) => {
  if (Array.isArray(value)) {
    return renderList(
      value.map((it) => map(it)),
      ', '
    )
  }

  if (typeof value === 'string') {
    return renderEntity(value, context)
  }

  return String(value)
})

ExpressionRenderer.register(VariableExpression, ({ name }, map, context) => renderEntity(name, context))

ExpressionRenderer.register(NumericExpressions.SumExpression, ({ operands }, map) => {
  return operands.map((it, index) => {
    const isSubtracted = index > 0 && typeof it === 'number' && it < 0
    return (
      <React.Fragment key={index}>
        {index > 0 && (isSubtracted ? ' − ' : ' + ')}
        {isSubtracted ? Math.abs(it) : renderOperand(it, map)}
      </React.Fragment>
    )
  })
})

ExpressionRenderer.register(NumericExpressions.MultiplyExpression, ({ operands }, map) => {
  return operands.map((it, index) => {
    const divisor = typeof it === 'number' && it > 0 && it < 1 && Number.isInteger(1 / it) ? 1 / it : null
    return (
      <React.Fragment key={index}>
        {index > 0 && (Objects.isPresent(divisor) ? ' / ' : ' × ')}
        {Objects.isPresent(divisor) ? divisor : renderOperand(it, map)}
      </React.Fragment>
    )
  })
})

ExpressionRenderer.register(NumericExpressions.MinExpression, ({ operands }, map) => renderFunction('min', operands.map(map)))

ExpressionRenderer.register(NumericExpressions.MaxExpression, ({ operands }, map) => renderFunction('max', operands.map(map)))

ExpressionRenderer.register(NumericExpressions.BoundExpression, ({ value, bounds }, map) => {
  const [minimum, maximum] = bounds
  if (Objects.isNil(minimum)) {
    return Objects.isNil(maximum) ? map(value) : renderFunction('min', [map(value), map(maximum)])
  }

  if (Objects.isNil(maximum)) {
    return renderFunction('max', [map(value), map(minimum)])
  }

  return renderFunction('clamp', [map(value), map(minimum), map(maximum)])
})

ExpressionRenderer.register(NumericExpressions.RoundExpression, ({ value, roundingMode }, map) => {
  switch (roundingMode) {
    case RoundingMode.Floor:
      return <>⌊{map(value)}⌋</>
    case RoundingMode.Ceiling:
      return <>⌈{map(value)}⌉</>
    default:
      return renderFunction('round', [map(value)])
  }
})

ExpressionRenderer.register(NotExpression, ({ value }, map) => <>not {renderOperand(value, map)}</>)

ExpressionRenderer.register(AndExpression, ({ operands }, map) => renderList(operands.map((it) => renderOperand(it, map)), ' and '))

ExpressionRenderer.register(OrExpression, ({ operands }, map) => renderList(operands.map((it) => renderOperand(it, map)), ' or '))

ExpressionRenderer.register(EqualsExpression, ({ operands }, map) => renderList(operands.map((it) => renderOperand(it, map)), ' = '))

ExpressionRenderer.register(ContainsExpression, ({ collection, operands }, map) => (
  <>
    {map(collection)} include {renderList(operands.map(map), ' and ')}
  </>
))

ExpressionRenderer.register(LessThanExpression, ({ left, right }, map) => (
  <>
    {renderOperand(left, map)} {'<'} {renderOperand(right, map)}
  </>
))

ExpressionRenderer.register(LessThanOrEqualExpression, ({ left, right }, map) => (
  <>
    {renderOperand(left, map)} ≤ {renderOperand(right, map)}
  </>
))

ExpressionRenderer.register(GreaterThanExpression, ({ left, right }, map) => (
  <>
    {renderOperand(left, map)} {'>'} {renderOperand(right, map)}
  </>
))

ExpressionRenderer.register(GreaterThanOrEqualExpression, ({ left, right }, map) => (
  <>
    {renderOperand(left, map)} ≥ {renderOperand(right, map)}
  </>
))

ExpressionRenderer.register(StringExpressions.ConcatenateExpression, ({ first, second }, map) => renderFunction('concat', [map(first), map(second)]))

ExpressionRenderer.register(StringExpressions.SubstringExpression, ({ string, substring }, map) =>
  renderFunction('substring', [map(string), map(substring)])
)

ExpressionRenderer.register(StringExpressions.UppercaseExpression, ({ value }, map) => renderFunction('uppercase', [map(value)]))

ExpressionRenderer.register(ArrayExpressions.ConcatenateExpression, ({ operands }, map) => renderFunction('concat', operands.map(map)))

ExpressionRenderer.register(ArrayExpressions.FirstExpression, ({ operands }, map) => renderFunction('first', operands.map(map)))
